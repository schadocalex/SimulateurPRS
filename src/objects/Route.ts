import DisplayManager from "./DisplayManager";
import El from "./El";
import Source from "./Source";
import Zone from "./Zone";
import Gate from "./Gate";
import Switch from "./Switch";

enum State { SAVED, PREPARING, ESTABLISHED, RELEASED };

/**
 *
 */
class Route extends El {
    hasTP: boolean = false;
    isTP: boolean = false;
    source: Source = null;
    transit: "left" | "right";
    zones: Zone[] = [];
    gates: Gate[] = [];
    switchDirs: string[] = [];
    state: State = State.RELEASED;

    view: {
        textBg?: {
            DA?: Snap.Element,
            TP?: Snap.Element
        };
    } = {};
    timeoutBlink = null;

    constructor(_id: string, _source: Source, _zones: Zone[], _gates: Gate[], _switchDirs: string[], _transit, _TP: boolean, _view: ViewConstructor) {
        super(_id);

        this.hasTP = _TP;
        this.source = _source;
        this.transit = _transit;
        this.zones = _zones;
        this.gates = _gates;
        this.switchDirs = _switchDirs;

        this.createView(_view);
        this.updateView();

        setInterval(() => this.Update(), 100);
    }

    changeState(state: State) {
        this.state = state;
        this.updateView();
    }

    changeTP(TP: boolean) {
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
    onClick(routeType: string) {
        switch(this.state) {
            case State.RELEASED:
                this.Order(routeType === "TP");
                break;
            default:
                let TP = routeType === "TP";
                if(this.hasTP && TP !== this.isTP) {
                    this.changeTP(TP);
                } else {
                    this.ManualRelease();
                }
                break;
        }
    }

    Update() {
        switch(this.state) {
            case State.SAVED:
                this.Save();
                break;
            case State.PREPARING:
                this.Prepare();
                break;
            case State.ESTABLISHED:
                this.Establish();
                break;
        }
    }

    /**
     * Order a route. If all transits are free, go to Save() step.
     * @param TP - true if TP mode is asked.
     * @constructor
     */
    Order(TP: boolean) {
        if(this.state === State.RELEASED) {
            if(this.areAllCompatibleTransitFree()) {
                this.isTP = TP;
                this.Save();
            }
        }
    }

    /**
     * Save a route. If all opposite transits are free, go to Prepare() step.
     * @constructor
     */
    Save() {
        this.changeState(State.SAVED);

        if(this.areAllCompatibleTransitFree() && this.areAllOppositeTransitFree()) {
            this.Prepare();
        }
    }

    /**
     * Prepare a route. Change all switches if incorrect and then go to Interlock() step.
     * @constructor
     */
    Prepare() {
        this.changeState(State.PREPARING);
        this.lockTransits();
        this.moveSwitches();
        if(this.areAllSwitchesCorrect()) {
            this.Interlock();
        }
    }

    /**
     * Lock transits to prevent others routes to be ordered in the same switches.
     * @constructor
     */
    Interlock() {
        this.Establish();
    }

    /**
     * Establish the route by switch off the stop lights.
     * @constructor
     */
    Establish() {
        this.changeState(State.ESTABLISHED);
        this.showInTCO();
    }

    ManualRelease() {
        this.changeState(State.RELEASED);
        this.hideInTCO();
        this.unlockTransits();
    }

    AutoReleaseZone(zone: Zone) {

    }

    //////////////////////////////////////////////////
    // Logic helpers
    //////////////////////////////////////////////////

    /**
     * Return true if all compatible transit (eg. in the way the route is, for example all "left" transit) are free to use.
     */
    areAllCompatibleTransitFree() {
        return this.zones.every(zone => !zone.IsLocked(this.transit));
    }

    /**
     * Return true if all opposite transit are free
     */
    areAllOppositeTransitFree() {
        let transitName = this.transit === "left" ? "right" : "left";
        return this.zones.every(zone => !zone.IsLocked(transitName));
    }

    moveSwitches() {
        this.gates.forEach((gate, i) => {
            if(gate instanceof Switch) {
                gate.MoveTo(this.switchDirs[i]);
            }
        });
    }

    areAllSwitchesCorrect() {
        return this.gates.every((gate, i) => {
            if(gate instanceof Switch) {
                return gate.MatchState(this.switchDirs[i]);
            } else {
                return true;
            }
        });
    }

    lockTransits() {
        this.zones.forEach(zone => zone.Lock(this, this.transit));
    }

    unlockTransits() {
        this.zones.forEach(zone => this.unlockTransit(zone));
    }

    unlockTransit(zone: Zone) {
        zone.Unlock(this, this.transit);
    }

    showInTCO() {
        this.gates.forEach(gate => gate.Lock(this, this.isTP));
    }

    hideInTCO() {
        this.gates.forEach(gate => gate.Unlock(this));
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    createView(_view: ViewConstructor) {
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
                    let timeBetweenBlink = 500;
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
export default Route;

interface Vector {
    x: number;
    y: number;
}
interface ViewConstructor {
    btn: {
        value:  string;
        pos: {
            DA?: Vector;
            TP?: Vector;
        }
    };
}