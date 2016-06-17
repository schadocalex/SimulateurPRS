var Config = require("./Config");

/**
 *
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
        if(route != null && route.routeWithoutTrain) {
            route.routeWithoutTrain = false;
            train.addRoute(route);
        } else {
            this.waitingTrains[train.baseSource.id].push(train);
        }
    }

    onReleaseGates(train, gates) {
        this.routes
            .filter(route => route.isEstablished())
            .forEach(route => route.currentTrain === train && route.autoReleaseGates(gates));
    }

    onEstablished(route) {
        let waitingTrain = this.waitingTrains[route.source.id].shift();
        if(waitingTrain != null) {
            route.routeWithoutTrain = false;
            waitingTrain.addRoute(route);
        } else {
            route.routeWithoutTrain = true;
        }
    }

    getRouteFromSource(source) {
        return this.routes.find(route => route.source === source && route.isEstablished());
    }
};