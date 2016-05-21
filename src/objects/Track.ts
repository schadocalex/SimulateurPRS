import Gate from "./Gate";
import DisplayManager from "./DisplayManager";

/**
 *
 */
class Track extends Gate {
    ports: {
        left?: Gate;
        right?: Gate;
    } = {};

    routeState: string = "free"; // "DA" | "TP" | "free"

    view: {
        line?: Snap.Element;
        label?: Snap.Element;
    } = {};

    constructor(_id: string, _view: ViewConstructor) {
        super(_id);
        this.createView(_view);
        this.updateView();
    }

    changeRouteState(routeType: string, gateFrom: Gate, gateTo: Gate) {
        if(this.routeState === routeType) {
            this.routeState = "free";
        }else {
            this.routeState = routeType;
        }
        this.updateView();
    }

    createView(_view: ViewConstructor) {
        // Create the line
        let points = _view.line.reduce((pre, cur) => pre.concat([cur.x, cur.y]), []);
        this.view.line = DisplayManager.paper.polyline(points).attr(DisplayManager.cfg.attr.line);

        // Create the label
        if(_view.label != null) {
            let labelX = _view.label.pos.x;
            let labelY = _view.label.pos.y + DisplayManager.cfg.attr.trackLabel["font-size"] * 0.335;
            let txt = DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.trackLabel);
            let bbox = txt.getBBox();
            let bgX = bbox.x + bbox.w / 2;
            let bgY = bbox.y + bbox.h / 2;
            let bgR = Math.max(bbox.w, bbox.h) * DisplayManager.cfg.attr.trackBgLabel.sizeCoeff;
            let txtBg = DisplayManager.paper.circle(bgX, bgY, bgR).attr(DisplayManager.cfg.attr.trackBgLabel);
            txtBg.insertBefore(txt);
        }
    }

    updateView() {
        this.view.line.attr({
            stroke: DisplayManager.cfg.color.route[this.routeState]
        });
    }
}
export default Track;

interface Vector {
    x: number;
    y: number;
}
interface ViewConstructor {
    line: Vector[];
    label?: {
        value: string,
        pos: Vector
    };
}