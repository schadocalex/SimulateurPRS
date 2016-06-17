var DisplayManager = require("../DisplayManager");
var El = require("./El");

/**
 *
 */
class Source extends El {
    stoplight = "on";
    manualStop = "off";
    ZAp = "off";

    view = {};

    constructor(_id, _view) {
        super(_id);

        this.createView(_view);
        this.updateView();
    }

    setManualStop(state) {
        this.manualStop = state;
        this.updateView();
    }

    createView(_view) {
        // Create the stoplight
        var rectAttr = DisplayManager.cfg.attr.stoplight.rect;
        var symX = _view.stoplight.dir === "left" ? _view.stoplight.pos.x : null;
        var symY = _view.stoplight.dir === "left" ? _view.stoplight.pos.y : null;
        var offsetY = -DisplayManager.cfg.attr.line.strokeWidth / 2;
        var rectParams = DisplayManager.getSymmetricalRect({
            x: _view.stoplight.pos.x - rectAttr.w,
            y: _view.stoplight.pos.y - rectAttr.h / 2 - rectAttr.line.h + offsetY,
            w: rectAttr.w,
            h: rectAttr.h
        }, symX, symY);
        this.view.stoplight = DisplayManager.paper.rect(rectParams.x, rectParams.y, rectParams.w, rectParams.h).attr(rectAttr);
        let line = DisplayManager.getSymmetricalPoints([{
            x: _view.stoplight.pos.x - rectAttr.w,
            y: _view.stoplight.pos.y - rectAttr.line.h + offsetY
        },{
            x: _view.stoplight.pos.x - rectAttr.w - rectAttr.line.w,
            y: _view.stoplight.pos.y - rectAttr.line.h + offsetY
        },{
            x: _view.stoplight.pos.x - rectAttr.w - rectAttr.line.w,
            y: _view.stoplight.pos.y + offsetY
        }], symX, symY);
        DisplayManager.paper.polyline(line.map((p) => [p.x, p.y])).attr(rectAttr);

        // Create the stoplight label
        this.view.stoplightLabel = DisplayManager.paper.text(
            rectParams.x + rectParams.w / 2,
            rectParams.y + DisplayManager.cfg.attr.stoplightLabel["offsetY_" + _view.stoplight.dir ],
            _view.stoplight.value
        ).attr(DisplayManager.cfg.attr.stoplightLabel);

        // Create the ZAp
        if(_view.ZAp === true) {
            // Create the rect around the Zap light
            let zapAttr = DisplayManager.cfg.attr.ZAp;
            let zapParams = DisplayManager.getSymmetricalRect({
                x: _view.stoplight.pos.x + zapAttr.offsetX,
                y: _view.stoplight.pos.y + zapAttr.offsetY - zapAttr.h,
                w: zapAttr.w,
                h: zapAttr.h
            }, symX, symY);
            DisplayManager.paper.rect(zapParams.x, zapParams.y, zapParams.w, zapParams.h).attr(zapAttr);

            // Create the circle
            this.view.ZAp = DisplayManager.paper.circle(
                zapParams.x + zapParams.w / 2,
                zapParams.y + zapParams.h / 2,
                zapParams.w * zapAttr.circleRatio
            );

            // Create the legend
            DisplayManager.paper.text(
                zapParams.x + zapParams.w / 2,
                zapParams.y + DisplayManager.cfg.attr.ZApLabel["offsetY_" + _view.stoplight.dir ],
                "ZAp"
            ).attr(DisplayManager.cfg.attr.ZApLabel);
        }

        // Create the label
        if(_view.label != null) {
            let labelPos = DisplayManager.convertVectorToGrid(_view.label.pos);

            // Create the background
            DisplayManager.paper.rect(
                labelPos.x,
                labelPos.y,
                DisplayManager.gridAttr.columnWidth,
                DisplayManager.gridAttr.rowHeight
            ).attr(DisplayManager.cfg.attr.sourceLabelBg);

            // Create the text
            this.view.label = DisplayManager.paper.text(
                labelPos.x + DisplayManager.gridAttr.columnWidth / 2,
                labelPos.y + DisplayManager.gridAttr.rowHeight / 2 + DisplayManager.cfg.attr.sourceLabel.offsetY,
                _view.label.value
            ) .attr(DisplayManager.cfg.attr.sourceLabel);
        }
    }

    updateView() {
        this.view.stoplight.attr({
            fill: DisplayManager.cfg.color.stoplight[this.stoplight]
        });
        this.view.stoplightLabel.attr({
            fill: DisplayManager.cfg.color.stoplightLabel[this.manualStop]
        });
        this.view.ZAp && this.view.ZAp.attr({
            fill: DisplayManager.cfg.color.ZAp[this.ZAp]
        });
    }
}
module.exports = Source;
