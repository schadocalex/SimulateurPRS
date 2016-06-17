var El = require("./El");

/**
 * @abstract
 */
class Gate extends El {

    /**
     * Route type. Can be free
     * @type {string}
     */
    routeType = "free";

    /**
     * True if a train is actually on the track.
     * @type {boolean}
     */
    isTrainOn = false;

    /**
     * Add a link between two Gate objects at the given ports.
     */
    static addLink(from, fromPort, to, toPort) {
        from.ports[fromPort] = to;
        to.ports[toPort] = from;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    /**
     * Lock the gate. A locker has to be sent as first parameter. This locker will be the only once who can unlock.
     * @param locker - Any object.
     * @param isTP -
     * @constructor
     */
    lock(locker, isTP) {
        let newRouteType = isTP ? "TP" : "DA";
        if(this._locker == null || this._locker === locker && this.routeType !== newRouteType) {
            this._locker = locker;
            this.routeType = newRouteType;
            this.updateView();
        }
    }

    unlock(locker) {
        if(this._locker === locker) {
            this._locker = null;
            this.routeType = "free";
            this.updateView();
        }
    }

    isLocked() {
        return this._locker != null;
    }

    setTrain(isTrainOn) {
        this.isTrainOn = isTrainOn;
        this.updateView();
    }

    /**
     * @abstract
     */
    getLength() {}

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    /**
     * @abstract
     */
    updateView() {}
}
module.exports = Gate;