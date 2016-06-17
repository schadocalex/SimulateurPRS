var Snap = require("snapsvg");

/**
 *
 */
module.exports = class DisplayManager {

    static cfg = require("../cfg/DisplayManager.cfg.json");

    static init(_ini) {
        DisplayManager.paper = Snap(_ini.w, _ini.h);
        DisplayManager.paper.attr({
            viewBox: [0, 0, _ini.vw, _ini.vh].join(" "),
            style:  "background-color:" +  DisplayManager.cfg.color.background + ";display:block;margin:auto;"
        });

        // TCO
        DisplayManager.paper.rect(_ini.TCO.pos.x, _ini.TCO.pos.y, _ini.TCO.size.w, _ini.TCO.size.h).attr({
            fill: DisplayManager.cfg.color.TCO.background
        });

        // Grid
        DisplayManager.gridAttr = _ini.grid;
        DisplayManager.gridAttr.columnWidth = DisplayManager.gridAttr.size.w / DisplayManager.gridAttr.nbColumns;
        DisplayManager.gridAttr.rowHeight = DisplayManager.gridAttr.size.h / DisplayManager.gridAttr.nbRows;
        // Background grid
        DisplayManager.paper.rect(_ini.grid.pos.x, _ini.grid.pos.y, _ini.grid.size.w, _ini.grid.size.h)
            .attr(DisplayManager.cfg.attr.grid);
        // Grid lines
        for(let x = 1; x < _ini.grid.nbColumns; x++) {
            let vector = DisplayManager.convertVectorToGrid({x: x, y: 0});
            DisplayManager.paper.line(vector.x, vector.y, vector.x, vector.y + _ini.grid.size.h)
                .attr(DisplayManager.cfg.attr.grid);
        }
        for(let y = 1; y < _ini.grid.nbRows; y++) {
            let vector = DisplayManager.convertVectorToGrid({x: 0, y: y});
            DisplayManager.paper.line(vector.x, vector.y, vector.x + _ini.grid.size.w, vector.y)
                .attr(DisplayManager.cfg.attr.grid);
        }
    }

    static convertVectorToGrid(u) {
        return {
            x: DisplayManager.gridAttr.pos.x + u.x * DisplayManager.gridAttr.columnWidth,
            y: DisplayManager.gridAttr.pos.y + u.y * DisplayManager.gridAttr.rowHeight
        };
    }

    static getSymmetricalPoints(points, xSym, ySym) {
        return points.map((point) => {
            return {
                x: xSym != null ? 2 * xSym - point.x : point.x,
                y: ySym != null ? 2 * ySym - point.y : point.y
            };
        });
    }

    static getSymmetricalRect(rect, xSym, ySym) {
        let symmetricalPos = DisplayManager.getSymmetricalPoints([{x: rect.x, y: rect.y}], xSym, ySym)[0];
        return {
            x: symmetricalPos.x - (xSym != null ? rect.w : 0),
            y: symmetricalPos.y - (ySym != null ? rect.h : 0),
            w: rect.w,
            h: rect.h
        };
    }

    /**
     * Called when a change occurred on a Gate.
     */
    onChange() {};
};
