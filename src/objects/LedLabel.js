var DisplayManager = require("../DisplayManager");
var El = require("./El");

var State = { ON: "ON", OFF: "OFF" };

/**
 *
 */
class LedLabel extends El {
    state = State.OFF;

    view = {};

    constructor(_id, _view) {
        super(_id);

        this.createView(_view);
        this.updateView();
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    on() {
        this.state = State.ON;
        this.updateView();
    }

    off() {
        this.state = State.OFF;
        this.updateView();
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    createView(_view) {
        // Create the led
        let r = DisplayManager.cfg.attr.led.size;
        this.view.led = DisplayManager.paper.circle(_view.pos.x, _view.pos.y, r).attr({
            fill: DisplayManager.cfg.color.background
        });

        // Create the label
        if(_view.label != null) {
            let labelX = _view.label.pos.x;
            let labelY = _view.label.pos.y
                + DisplayManager.cfg.attr.ledLabel.fontSize * 0.37
                + DisplayManager.cfg.attr.ledLabel.offsetY * (_view.label.above ? -1 : 1);
            DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.ledLabel);
        }
    }

    updateView() {
        // Update the led
        this.view.led.attr({
            fill: DisplayManager.cfg.color.led[this.state === State.ON ? "on" : "off"]
        });
    }
}
module.exports = LedLabel;