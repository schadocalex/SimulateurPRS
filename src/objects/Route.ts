import DisplayManager from "./DisplayManager";
import El from "./El";
import Source from "./Source";
import Gate from "./Gate";

/**
 *
 */
class Route extends El {
    TP: boolean = false;
    source: Source = null;
    gates: Gate[] = [];
    ports: string[] = [];

    view: {
        text?: Snap.Element;
    } = {};

    constructor(_id: string, _source: Source, _gates: Gate[], _TP: boolean, _view: ViewConstructor) {
        super(_id);

        this.TP = _TP;
        this.source = _source;
        this.gates = _gates;

        this.createView(_view);
        this.updateView();
    }

    onClick(type: string) {
        this.gates.forEach((gate, i, gates) => {
            gate.changeRouteState(type, gates[i - 1], gates[i + 1]);
        })
    }

    createView(_view: ViewConstructor) {
        // Create the label
        if(_view.btn != null) {
            Object.getOwnPropertyNames(_view.btn.pos).forEach((routeType) => {
                let btnPos = DisplayManager.convertVectorToGrid(_view.btn.pos[routeType]);

                // Create the background
                let padding = DisplayManager.cfg.attr.routeBtnBg[routeType].padding;
                let rect = DisplayManager.paper.rect(
                    btnPos.x + padding,
                    btnPos.y + padding,
                    DisplayManager.gridAttr.columnWidth - 2 * padding,
                    DisplayManager.gridAttr.rowHeight - 2 * padding
                ).attr(DisplayManager.cfg.attr.routeBtnBg[routeType]);

                // Create the text
                this.view.text = DisplayManager.paper.text(
                    btnPos.x + DisplayManager.gridAttr.columnWidth / 2,
                    btnPos.y + DisplayManager.gridAttr.rowHeight / 2 + DisplayManager.cfg.attr.routeBtn.offsetY,
                    _view.btn.value
                ).attr(DisplayManager.cfg.attr.routeBtn);

                DisplayManager.paper.group(rect, this.view.text)
                    .attr({ cursor: "pointer" })
                    .click(() => this.onClick(routeType));
            });
        }
    }

    updateView() {

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