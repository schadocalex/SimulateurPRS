var DisplayManager = require("../DisplayManager");
var El = require("./El");
var Source = require("./Source");
var Zone = require("./Zone");
var Gate = require("./Gate");
var Switch = require("./Switch");
var Config = require("../Config");
var Train = require("./Train");

const State = { SAVED: "SAVED", PREPARING: "PREPARING", ESTABLISHED: "ESTABLISHED", RELEASED: "RELEASED" };

/**
 *
 */
class Route extends El {
    isTP = false;
    state = State.RELEASED;
    currentTrain = null;

    gatesByZone = {};
    notFreeZones = [];
    routeWithoutTrain = true;

    view = {};
    timeoutBlink = null;

    constructor(_id, _source, _nextSource, _zones, _gates, _switchDirs, _transit, _TP, _view) {
        super(_id);

        this.hasTP = _TP;
        this.source = _source;
        this.nextSource = _nextSource;
        this.transit = _transit;
        this.zones = _zones;
        this.gates = _gates;
        this.switchDirs = _switchDirs;

        this.createView(_view);
        this.updateView();

        this.zones.forEach(zone => this.gatesByZone[zone.id] = zone.gates.filter(gate => this.gates.indexOf(gate) >= 0));

        setInterval(() => this.update(), 100);
    }

    changeState(state) {
        this.state = state;
        this.updateView();
    }

    changeTP(TP) {
        this.isTP = TP;
        this.updateView();
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    /**
     * Called when a click on the route button is pressed
     * @param routeType
     */
    onClick(routeType) {
        let TP = routeType === "TP";

        switch(this.state) {
            case State.RELEASED:
                this.order(TP);
                break;
            case State.SAVED:
            case State.PREPARING:
                if(this.notFreeZones.length === this.zones.length || this.state !== State.ESTABLISHED) {
                    if (this.hasTP && TP !== this.isTP) {
                        this.changeTP(TP);
                    } else {
                        this.manualRelease();
                    }
                }
                break;
        }
    }

    update() {
        switch(this.state) {
            case State.SAVED:
                this.save();
                break;
            case State.PREPARING:
                this.prepare();
                break;
        }
    }

    /**
     * Order a route. If all transits are free, go to Save() step.
     * @param TP - true if TP mode is asked.
     * @constructor
     */
    order(TP) {
        if(this.state === State.RELEASED) {
            if(this.areAllCompatibleTransitFree()) {
                this.isTP = TP;
                this.save();
            }
        }
    }

    /**
     * Save a route. If all opposite transits are free, go to Prepare() step.
     * @constructor
     */
    save() {
        this.changeState(State.SAVED);
        this.notFreeZones = this.zones.slice();
        if(this.areAllTransitFree()) {
            this.prepare();
        }
    }

    /**
     * Prepare a route. Change all switches if incorrect and then go to Interlock() step.
     * @constructor
     */
    prepare() {
        if(this.state !== State.PREPARING) {
            this.changeState(State.PREPARING);
            this.lockTransits();
            this.moveSwitches();
        }
        if(this.areAllSwitchesCorrect()) {
            this.interlock();
        }
    }

    /**
     * Lock transits to prevent others routes to be ordered in the same switches.
     * @constructor
     */
    interlock() {
        this.establish();
    }

    /**
     * Establish the route by switch off the stop lights.
     * @constructor
     */
    establish() {
        this.changeState(State.ESTABLISHED);
        this.onEstablished();
        this.showInTCO();
    }
    onEstablished(){}

    isEstablished() {
        return this.state === State.ESTABLISHED;
    }

    manualRelease() {
        this.changeState(State.RELEASED);
        this.hideInTCO();
        this.unlockTransits();
    }

    autoReleaseGates(gates) {
        this.notFreeZones = this.notFreeZones.filter(zone => {
            let everyGatesAreFreeInTheZone = this.gatesByZone[zone.id].every(gate => gates.indexOf(gate) >= 0);
            if(everyGatesAreFreeInTheZone && !this.isTP) {
                this.unlockTransit(zone);
                this.hideZoneInTCO(zone);
            }
            return !everyGatesAreFreeInTheZone;
        });

        // If all zones are free, release the route
        if(this.notFreeZones.length === 0) {
            if(!this.isTP) {
                this.changeState(State.RELEASED);
            } else {
                this.establish();
                this.notFreeZones = this.zones.slice();
            }
        }
    }

    //////////////////////////////////////////////////
    // Logic helpers
    //////////////////////////////////////////////////


    areAllTransitFree() {
        return this.areAllCompatibleTransitFree() && this.areAllOppositeTransitFree();
    }

    /**
     * Return true if all compatible transit (eg. in the way the route is, for example all "left" transit) are free to use.
     */
    areAllCompatibleTransitFree() {
        return this.zones.every(zone => !zone.isLocked(this.transit));
    }

    /**
     * Return true if all opposite transit are free
     */
    areAllOppositeTransitFree() {
        let transitName = this.transit === "left" ? "right" : "left";
        return this.zones.every(zone => !zone.isLocked(transitName));
    }

    moveSwitches() {
        this.gates.forEach((gate, i) => {
            if(gate instanceof Switch) {
                gate.moveTo(this.switchDirs[i]);
            }
        });
    }

    areAllSwitchesCorrect() {
        return this.gates.every((gate, i) => {
            if(gate instanceof Switch) {
                return gate.matchState(this.switchDirs[i]);
            } else {
                return true;
            }
        });
    }

    lockTransits() {
        this.zones.forEach(zone => zone.lock(this, this.transit));
    }

    unlockTransits() {
        this.zones.forEach(zone => this.unlockTransit(zone));
    }

    unlockTransit(zone) {
        zone.unlock(this, this.transit);
    }

    showInTCO() {
        this.gates.forEach(gate => gate.lock(this, this.isTP));
    }

    hideInTCO() {
        this.zones.forEach(zone => this.hideZoneInTCO(zone));
    }

    hideZoneInTCO(zone) {
        this.gatesByZone[zone.id].forEach(gate => gate.unlock(this));
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    createView(_view) {
        // Create the label
        if(_view.btn != null) {
            this.view.textBg = {};
            Object.getOwnPropertyNames(_view.btn.pos).forEach((routeType) => {
                let btnPos = DisplayManager.convertVectorToGrid(_view.btn.pos[routeType]);

                // Create the background
                let padding = DisplayManager.cfg.attr.routeBtnBg[routeType].padding;
                this.view.textBg[routeType] = DisplayManager.paper.rect(
                    btnPos.x + padding,
                    btnPos.y + padding,
                    DisplayManager.gridAttr.columnWidth - 2 * padding,
                    DisplayManager.gridAttr.rowHeight - 2 * padding
                ).attr(DisplayManager.cfg.attr.routeBtnBg[routeType]);

                // Create the text
                let text = DisplayManager.paper.text(
                    btnPos.x + DisplayManager.gridAttr.columnWidth / 2,
                    btnPos.y + DisplayManager.gridAttr.rowHeight / 2 + DisplayManager.cfg.attr.routeBtn.offsetY,
                    _view.btn.value
                ).attr(DisplayManager.cfg.attr.routeBtn);

                DisplayManager.paper.group(this.view.textBg[routeType], text)
                    .attr({ cursor: "pointer" })
                    .click(() => this.onClick(routeType));
            });
        }
        setInterval(() => this.updateView(), 100);
    }

    updateView() {
        if(this.view.textBg != null) {
            let btnDA = "off";
            let btnTP = "off";

            switch (this.state) {
                case State.ESTABLISHED:
                    btnDA = this.isTP ? "off" : "on";
                    btnTP = this.isTP ? "on" : "off";
                    break;
                case State.PREPARING:
                case State.SAVED:
                    let timeBetweenBlink = Config.duration.blinkButtonInterval;
                    if ((Date.now() % (timeBetweenBlink * 2)) < timeBetweenBlink) {
                        !this.isTP && (btnDA = btnDA === "off" ? "on" : "off");
                        this.isTP && (btnTP = btnTP === "off" ? "on" : "off");
                    }
            }

            this.view.textBg.DA.attr({
                fill: DisplayManager.cfg.color.routeBtnBg.DA[btnDA]
            });
            this.hasTP && this.view.textBg.TP.attr({
                fill: DisplayManager.cfg.color.routeBtnBg.TP[btnTP]
            });
        }
    }
}
module.exports = Route;