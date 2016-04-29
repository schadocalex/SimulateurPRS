import Gate from "./Gate";
import DisplayManager from "./DisplayManager";
import El from "./El";

/**
 *
 */
class Zone extends El {
    gates: Gate[] = [];

    view: {
        text?: Snap.Element;
    } = {};

    constructor(_id: string, _gates: Gate[], _view: ViewConstructor) {
        super(_id);

        this.gates = _gates;

        this.createView(_view);
        this.updateView();
    }

    createView(_view: ViewConstructor) {
        // Create the label
        if(_view.label != null) {
            let labelX = _view.label.pos.x;
            let labelY = _view.label.pos.y
                + DisplayManager.cfg.attr.zoneLabel["font-size"] * 0.4
                + DisplayManager.cfg.attr.zoneLabel.offsetY * (_view.label.above ? -1 : 1);
            this.view.text = DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.zoneLabel);
        }
    }

    updateView() {

    }
}
export default Zone;

interface Vector {
    x: number;
    y: number;
}
interface ViewConstructor {
    label?: {
        value: string,
        pos: Vector,
        above: boolean
    };
}