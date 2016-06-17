var Gate = require("./Gate");
var DisplayManager = require("../DisplayManager");

/**
 *
 */
class Track extends Gate {
    ports = {};

    length;

    view = {};

    constructor(_id, _view) {
        super(_id);
        this.createView(_view);
        this.updateView();
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    getLength() {
        return this.length;
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    createView(_view) {
        // Create the line
        let points = _view.line.reduce((pre, cur) => pre.concat([cur.x, cur.y]), []);
        this.view.line = DisplayManager.paper.polyline(points).attr(DisplayManager.cfg.attr.line);

        // Compute length
        let path = DisplayManager.paper.path("M" + _view.line.reduce((pre, cur) => pre.concat([cur.x, cur.y].join(" ")), []).join("L"));
        this.length = path.getTotalLength();
        path.remove();

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
            stroke: DisplayManager.cfg.color.route[this.isTrainOn ? "trainOn" : this.routeType]
        });
    }
}
module.exports = Track;
