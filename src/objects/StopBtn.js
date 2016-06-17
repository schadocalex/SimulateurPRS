var DisplayManager = require("../DisplayManager");
var El = require("./El");
var Source = require("./Source");
var Gate = require("./Gate");

/**
 *
 */
class StopBtn extends El {
    sources = null;
    state = "off";

    view = {};

    constructor(_id, _sources, _view) {
        super(_id);

        this.sources = _sources;

        this.createView(_view);
        this.updateView(false);
    }

    onClick() {
        this.state = this.state === "on" ? "off" : "on";
        this.sources.forEach((source) => source.setManualStop(this.state));
        this.updateView();
    }

    createView(_view) {
        // Create the circle
        let btnPos = DisplayManager.convertVectorToGrid(_view.pos);
        this.view.circleBg = DisplayManager.paper.circle(
            btnPos.x + DisplayManager.gridAttr.columnWidth / 2,
            btnPos.y + DisplayManager.gridAttr.rowHeight / 2,
            Math.min(DisplayManager.gridAttr.columnWidth, DisplayManager.gridAttr.rowHeight) / 2 - DisplayManager.cfg.attr.stopBtnCircle.padding
        ).attr(DisplayManager.cfg.attr.stopBtnCircle);

        // Create the arrow
        let points = DisplayManager.cfg.attr.stopBtnArrow._points.map((p, i) => {
            if(i % 2 === 0) {
                return btnPos.x + p * DisplayManager.gridAttr.columnWidth;
            } else {
                return btnPos.y + p * DisplayManager.gridAttr.rowHeight;
            }
        });
        this.view.arrow = DisplayManager.paper.polygon(points).attr(DisplayManager.cfg.attr.stopBtnArrow);

        DisplayManager.paper.group(this.view.circleBg, this.view.arrow)
            .attr({ cursor: "pointer" })
            .click(() => this.onClick());
    }

    updateView(animated = true) {
        this.view.circleBg.attr({
            fill: DisplayManager.cfg.color.stopBtnCircle[this.state]
        });
        Snap.animate(0, 180, value => {
            this.view.arrow.transform("r" + (this.state === "on" ? value - 180  : -value));
        }, animated ? 100 : 0);
    }
}
module.exports = StopBtn;
