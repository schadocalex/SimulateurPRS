import Gate from "./Gate";
import DisplayManager from "../DisplayManager";
import Config from "../Config";
import StopBtn from "./StopBtn";

enum State { LEFT, RIGHT, UNKNOWN }

/**
 *
 */
class Switch extends Gate {
    ports: {
        lone?: Gate;
        left?: Gate;
        right?: Gate;
    } = {};

    state: State = State.LEFT;
    isMoving: boolean = false;
    combinedSwitch: Switch = null;

    leftLength: number;
    rightLength: number;

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

    static combinedSwitches(switch1: Switch, switch2: Switch) {
        switch1.combinedSwitch = switch2;
        switch2.combinedSwitch = switch1;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    MoveTo(dir: string) {
        var stateToGo = Switch.convertStringToState(dir);

        if(this.isMoving || this.state === stateToGo || this.combinedSwitch && this.combinedSwitch.isLocked())
            return;
        this.isMoving = true;

        this.state = State.UNKNOWN;
        this.updateView();
        setTimeout(() => {
            this.state = stateToGo;
            this.updateView();
            this.isMoving = false;
        }, Config.duration.switchChange);

        this.combinedSwitch && this.combinedSwitch.MoveTo(dir);
    }

    MatchState(dir: string) {
        return this.state === Switch.convertStringToState(dir);
    }

    GetLength() {
        switch(this.state) {
            case State.LEFT:
                return this.leftLength;
            case State.RIGHT:
                return this.rightLength;
            case State.UNKNOWN:
                return 0;
        }
    }

    static convertStringToState(s: string) {
        switch(s) {
            case "left":
                return State.LEFT;
            case "right":
                return State.RIGHT;
            default:
                return State.UNKNOWN;
        }
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

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

        // Compute length
        let leftPath = DisplayManager.paper.path("M" + [lonePoints, centerPoint, leftPoints].map(p => p.join(" ")).join("L"));
        this.leftLength = leftPath.getTotalLength();
        leftPath.remove();
        let rightPath = DisplayManager.paper.path("M" + [lonePoints, centerPoint, rightPoints].map(p => p.join(" ")).join("L"));
        this.rightLength = rightPath.getTotalLength();
        rightPath.remove();

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
                + DisplayManager.cfg.attr.switchLabel.fontSize * 0.37
                + DisplayManager.cfg.attr.switchLabel.offsetY * (_view.label.above ? -1 : 1);
            DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.switchLabel);
        }
    }

    updateView() {
        // Update the switch state
        this.view.leftLed.attr({
            fill: DisplayManager.cfg.color.switchLed[this.state === State.LEFT ? "on" : "off"]
        });
        this.view.rightLed.attr({
            fill: DisplayManager.cfg.color.switchLed[this.state === State.RIGHT ? "on" : "off"]
        });

        let leftTrainRoute = this.state === State.LEFT ? (this.isTrainOn ? "trainOn" : this.routeType) : "free";
        let rightTrainRoute = this.state === State.RIGHT ? (this.isTrainOn ? "trainOn" : this.routeType) : "free";
        this.view.leftLine.attr({
            stroke: DisplayManager.cfg.color.route[leftTrainRoute]
        });
        this.view.rightLine.attr({
            stroke: DisplayManager.cfg.color.route[rightTrainRoute]
        });

        if(this.state === State.RIGHT) {
            this.view.rightLine.insertAfter(this.view.leftLine);
        } else {
            this.view.leftLine.insertAfter(this.view.rightLine);
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