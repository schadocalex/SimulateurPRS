var DisplayManager = require("../DisplayManager");
var El = require("./El");

class Zone extends El {

    transit = {
        left: null,
        right: null
    };

    view = {};

    constructor(_id, _gates, _view) {
        super(_id);

        this.gates = _gates;

        this.createView(_view);
        this.updateView();
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    lock(locker, _transit) {
        if(this.transit[_transit] == null) {
            this.transit[_transit] = locker;
        }
    }

    unlock(locker, _transit) {
        if(this.isLocked(_transit) && this.transit[_transit] === locker) {
            this.transit[_transit] = null;
        }
    }

    isLocked(_transit) {
        return this.transit[_transit] != null;
    }

    //////////////////////////////////////////////////
    // View
    //////////////////////////////////////////////////

    createView(_view) {
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
module.exports = Zone;
