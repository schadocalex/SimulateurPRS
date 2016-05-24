
import El from "./El";
/**
 *
 */
abstract class Gate extends El {
    ports: Object;
    _locker: any = null;

    routeType: string = "free";

    /**
     * Add a link between two Gate objects at the given ports.
     */
    static addLink(from: Gate, fromPort: string, to: Gate, toPort: string) {
        from.ports[fromPort] = to;
        to.ports[toPort] = from;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    Lock(locker: any, isTP: boolean) {
        let newRouteType = isTP ? "TP" : "DA";
        if(this._locker == null || this._locker === locker && this.routeType !== newRouteType) {
            this._locker = locker;
            this.routeType = newRouteType;
            this.updateView();
        }
    }

    Unlock(locker: any) {
        if(this._locker === locker) {
            this._locker = null;
            this.routeType = "free";
            this.updateView();
        }
    }

    isLocked() {
        return this._locker != null;
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    abstract updateView();
}
export default Gate;