import Gate from "./Gate";
import DisplayManager from "./DisplayManager";

/**
 *
 */
class Switch extends Gate {
    ports: {
        lone?: Gate;
        left?: Gate;
        right?: Gate;
    } = {};

    state: "left" | "right" | "unknown" = "unknown";
    routeState: string = "free"; // "DAL" | "DAR" | "TPL" | "TPR" | "free" DA/TP Left/Right

    view: {
        leftLine?: Snap.Element;
        rightLine?: Snap.Element;

        leftLed?: Snap.Element;
        rightLed?: Snap.Element;
    } = {};

    constructor(_id: string, _view: ViewConstructor) {
        super(_id);
        this.createView(_view);
        this.updateView();
    }

    changeRouteState(routeType: string, gateFrom: Gate, gateTo: Gate) {
        var routeState;

        if (gateFrom && this.ports.left === gateFrom || gateTo && this.ports.left === gateTo) {
            routeState = routeType + "L";
            this.state = "left";
        } else if (gateFrom && this.ports.right === gateFrom || gateTo && this.ports.right === gateTo) {
            routeState = routeType + "R";
            this.state = "right";
        }

        if(this.routeState === routeState) {
            this.routeState = "free";
        } else {
            this.routeState = routeState;
        }

        this.updateView();
    }

    createView(_view: ViewConstructor) {
        // Convert points
        let centerPoint = [_view.center.x, _view.center.y];
        let lonePoints = _view.lone.reduce((pre, cur) => pre.concat([cur.x, cur.y]), []);
        let leftPoints = _view.left.reduce((pre, cur) => pre.concat([cur.x, cur.y]), []);
        let rightPoints = _view.right.reduce((pre, cur) => pre.concat([cur.x, cur.y]), []);

        // Create the two lines lone<->left and lone<->right
        let loneLeftPoints = lonePoints.concat(centerPoint).concat(leftPoints);
        let loneRightPoints = lonePoints.concat(centerPoint).concat(rightPoints);
        this.view.leftLine = DisplayManager.paper.polyline(loneLeftPoints).attr(DisplayManager.cfg.attr.line);
        this.view.rightLine = DisplayManager.paper.polyline(loneRightPoints).attr(DisplayManager.cfg.attr.line);

        // Create the leds
        ["left", "right"].forEach((dir) => {
            let path = "M" + [_view.center].concat(_view[dir]).map((p) => p.x + "," + p.y).join("L");
            let ledPos = Snap.path.getPointAtLength(path, DisplayManager.cfg.attr.switchLed.distanceFromCenter);
            let r = DisplayManager.cfg.attr.line.strokeWidth * DisplayManager.cfg.attr.switchLed.sizeRatio;
            this.view[dir + "Led"] = DisplayManager.paper.circle(ledPos.x, ledPos.y, r).attr({
                fill: DisplayManager.cfg.color.background
            });
        });

        // Create the label
        if(_view.label != null) {
            let labelX = _view.label.pos.x;
            let labelY = _view.label.pos.y
                + DisplayManager.cfg.attr.switchLabel["font-size"] * 0.37
                + DisplayManager.cfg.attr.switchLabel.offsetY * (_view.label.above ? -1 : 1);
            DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.switchLabel);
        }
    }

    updateView() {
        // Update the switch state
        this.view.leftLed.attr({
            fill: DisplayManager.cfg.color.switchLed[this.state === "left" ? "on" : "off"]
        });
        this.view.rightLed.attr({
            fill: DisplayManager.cfg.color.switchLed[this.state === "right" ? "on" : "off"]
        });

        // Update the route color
        switch(this.routeState) {
            case "DAL":
            case "TPL":
                this.view.leftLine.attr({
                    stroke: DisplayManager.cfg.color.route[this.routeState.slice(0, 2)]
                });
                this.view.rightLine.attr({
                    stroke: DisplayManager.cfg.color.route.free
                });
                this.view.leftLine.insertAfter(this.view.rightLine);
                break;
            case "DAR":
            case "TPR":
                this.view.leftLine.attr({
                    stroke: DisplayManager.cfg.color.route.free
                });
                this.view.rightLine.attr({
                    stroke: DisplayManager.cfg.color.route[this.routeState.slice(0, 2)]
                });
                this.view.rightLine.insertAfter(this.view.leftLine);
                break;
            case "free":
                this.view.leftLine.attr({
                    stroke: DisplayManager.cfg.color.route.free
                });
                this.view.rightLine.attr({
                    stroke: DisplayManager.cfg.color.route.free
                });
                break;
        }
    }
}
export default Switch;

interface Vector {
    x: number;
    y: number;
}
interface ViewConstructor {
    center: Vector;
    lone: Vector[];
    left: Vector[];
    right: Vector[];
    label?: {
        value: string,
        pos: Vector,
        above: boolean
    };
}