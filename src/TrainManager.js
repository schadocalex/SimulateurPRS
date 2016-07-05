var Config = require("./Config");

/**
 * OK
 */
module.exports = class TrainManager {
    waitingTrains = {};

    constructor(_trains, _routes, _sources) {
        this.trains = _trains;
        this.routes = _routes;
        this.sources = _sources;

        this.trains.forEach(train => {
            train.onAnnounced = () => this.onAnnounced(train);
            train.onArrived = () => this.onArrived(train);
            train.onReleaseGates = (gates) => this.onReleaseGates(train, gates)
        });
        this.routes.forEach(route => route.onEstablished = () => this.onEstablished(route));
        this.sources.forEach(source => this.waitingTrains[source.id] = []);
    }

    onAnnounced(train) {
        let ledLabel = train.baseAnnouncement;
        ledLabel.on();
        setTimeout(() => ledLabel.off(), Config.duration.announcement);
    }

    onArrived(train) {
        let route = this.getRouteFromSource(train.baseSource);
        if(route == null || !this.setTrainOnRoute(train, route)) {
            if(this.waitingTrains[train.baseSource.id].indexOf(train) === -1) {
                this.waitingTrains[train.baseSource.id].push(train);
            }
        }
    }

    onReleaseGates(train, gates) {
        this.routes
            .filter(route => {
                if(route.currentTrain === train) {
                    if(route.gates.every(g => !g.isTrainOn)) {
                        route.currentTrain = null;
                        return true;
                    }

                    return route.isEstablished() && !route.isTP;
                }
                else {
                    return false;
                }
            })
            .forEach(route => route.autoReleaseGates(gates));
    }

    onEstablished(route) {
        this.setTrainOnRoute(this.waitingTrains[route.source.id].shift(), route);
    }

    setTrainOnRoute(train, route) {
        if(train != null && route.currentTrain == null) {
            route.currentTrain = train;
            train.addRoute(route);
            return true;
        } else {
            return false;
        }
    }

    getRouteFromSource(source) {
        return this.routes.find(route => route.source === source && route.isEstablished());
    }
};