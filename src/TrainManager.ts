import Train from "./objects/Train";
import Source from "./objects/Source";
import Route from "./objects/Route";
import LedLabel from "./objects/LedLabel";
import Config from "./Config";
import Gate from "./objects/Gate";

/**
 *
 */
class TrainManager {
    trains: Train[];
    routes: Route[];
    sources: Source[];
    waitingTrains = {};

    constructor(_trains: Train[], _routes: Route[], _sources: Source[]) {
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

    onAnnounced(train: Train) {
        let ledLabel = train.baseAnnouncement;
        ledLabel.On();
        setTimeout(() => ledLabel.Off(), Config.duration.announcement);
    }

    onArrived(train: Train) {
        let route = this.getRouteFromSource(train.baseSource);
        if(route != null && route.routeWithoutTrain) {
            route.routeWithoutTrain = false;
            train.AddRoute(route);
        } else {
            this.waitingTrains[train.baseSource.id].push(train);
        }
    }

    onReleaseGates(train: Train, gates: Gate[]) {
        this.routes
            .filter(route => route.IsEstablished())
            .forEach(route => route.currentTrain === train && route.AutoReleaseGates(gates));
    }

    onEstablished(route: Route) {
        let waitingTrain = this.waitingTrains[route.source.id].shift();
        if(waitingTrain != null) {
            route.routeWithoutTrain = false;
            waitingTrain.AddRoute(route);
        } else {
            route.routeWithoutTrain = true;
        }
    }

    getRouteFromSource(source: Source) {
        return this.routes.find(route => route.source === source && route.IsEstablished());
    }
}
export default TrainManager;