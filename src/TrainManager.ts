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

        this.trains.forEach(train => train.onAnnounced = () => this.onAnnounced(train));
        this.trains.forEach(train => train.onArrived = () => this.onArrived(train));
        this.routes.forEach(route => route.onEstablished = () => this.onEstablished(route));
    }

    onAnnounced(train: Train) {
        let ledLabel = train.baseAnnouncement;
        ledLabel.On();
        setTimeout(() => ledLabel.Off(), Config.duration.announcement);
    }

    onArrived(train: Train) {
        let route = this.getRouteFromSource(train.baseSource);
        if(route != null) {
            train.AddRoute(route);
        } else {
            this.waitingTrains[train.baseSource.id] = train;
        }
    }

    onEstablished(route: Route) {
        let waitingTrain = this.waitingTrains[route.source.id];
        if(waitingTrain != null) {
            this.waitingTrains[route.source.id] = null;
            waitingTrain.AddRoute(route);
        }
    }

    getRouteFromSource(source: Source) {
        return this.routes.find(route => route.source === source && route.IsEstablished());
    }
}
export default TrainManager;