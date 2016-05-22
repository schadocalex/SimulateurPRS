import DisplayManager from "./DisplayManager";
import El from "./El";
import Source from "./Source";
import Zone from "./Zone";
import Gate from "./Gate";

enum State { SAVED, INTERLOCKED, ESTABLISHED, RELEASED };

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
    state: State = State.RELEASED;

    view: {
        textBg?: {
            DA?: Snap.Element,
            TP?: Snap.Element
        };
    } = {};
    timeoutBlink = null;

    constructor(_id: string, _source: Source, _zones: Zone[], _gates: Gate[], _transit, _TP: boolean, _view: ViewConstructor) {
        super(_id);

        this.hasTP = _TP;
        this.source = _source;
        this.transit = _transit;
        this.zones = _zones;
        this.gates = _gates;

        this.createView(_view);
        this.updateView();
    }

    onClick(routeType: string) {
        this.Order(routeType === "TP");
    }

    changeState(state: State) {
        this.state = state;
        this.updateView();
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    Order(TP: boolean) {
        if(this.state === State.RELEASED) {
            if(this.areAllCompatibleTransitFree()) {
                this.isTP = TP;
                this.Save();
            }
        }
    }

    Save() {
        this.changeState(State.SAVED);
        this.lockTransits();

        if(this.areAllOppositeTransitFree()) {
            this.Interlock();
        }
    }

    Interlock() {

    }

    Establish() {

    }

    AutoReleaseZone(zone: Zone) {

    }

    ManualRelease() {

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

    lockTransits() {
        this.zones.forEach(zone => zone.Lock(this.transit));
    }

    unlockTransits() {
        this.zones.forEach(zone => this.unlockTransit(zone));
    }

    unlockTransit(zone: Zone) {
        zone.Unlock(this.transit)
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
                case State.INTERLOCKED:
                case State.ESTABLISHED:
                    btnDA = this.isTP ? "off" : "on";
                    btnTP = this.isTP ? "on" : "off";
                    break;
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