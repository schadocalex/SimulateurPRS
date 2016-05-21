/// <reference path="../lib/snapsvg.d.ts" />

/**
 *
 */
class DisplayManager {
    static paper: Snap.Paper = null;

    static gridAttr;

    static init(_ini: initConstructor) {
        DisplayManager.paper = Snap(_ini.w, _ini.h);
        DisplayManager.paper.attr({
            viewBox: [0, 0, _ini.vw, _ini.vh].join(" "),
            style: "background-color:" + DisplayManager.cfg.color.background
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

    static convertVectorToGrid(u: Vector): Vector {
        return {
            x: DisplayManager.gridAttr.pos.x + u.x * DisplayManager.gridAttr.columnWidth,
            y: DisplayManager.gridAttr.pos.y + u.y * DisplayManager.gridAttr.rowHeight
        };
    }

    static getSymmetricalPoints(points: Vector[], xSym: number, ySym: number): Vector[] {
        return points.map((point) => {
            return {
                x: xSym != null ? 2 * xSym - point.x : point.x,
                y: ySym != null ? 2 * ySym - point.y : point.y
            };
        });
    }

    static getSymmetricalRect(rect: {x: number, y: number, w: number, h: number}, xSym: number, ySym: number) {
        let symmetricalPos = DisplayManager.getSymmetricalPoints([{x: rect.x, y: rect.y}], xSym, ySym)[0];
        return {
            x: symmetricalPos.x - (xSym != null ? rect.w : 0),
            y: symmetricalPos.y - (ySym != null ? rect.h : 0),
            w: rect.w,
            h: rect.h
        };
    }

    static cfg = {
        color: {
            background: "white",
            route: {
                DA: "yellow",
                TP: "orange",
                free: "grey"
            },
            switchLed: {
                off: "black",
                on: "white"
            },
            TCO: {
                background: "black"
            },
            stoplight: {
                off: "grey",
                on: "red"
            },
            stoplightLabel: {
                off: "white",
                on: "red"
            },
            ZAp: {
                off: "white",
                on: "red"
            },
            stopBtnCircle: {
                off: "brown",
                on: "red"
            }
        },
        attr: {
            line: {
                fill: "black",
                stroke: "grey",
                strokeWidth: 2
            },
            grid: {
                fill: "lightblue",
                stroke: "black",
                strokeWidth: 0.5
            },
            trackLabel: {
                fill: "white",
                "font-size": 3,
                "text-anchor": "middle",
                "font-family": "Arial"
            },
            trackBgLabel: {
                stroke: "white",
                strokeWidth: 0.3,
                fill: "black",
                sizeCoeff: 0.7
            },
            switchLabel: {
                fill: "yellow",
                "font-size": 3,
                "font-family": "Arial",
                "text-anchor": "middle",
                offsetY: 3
            },
            switchLed: {
                distanceFromCenter: 7,
                sizeRatio: 0.45
            },
            zoneLabel: {
                fill: "lime",
                "font-size": 4,
                "font-family": "Arial",
                "text-anchor": "middle",
                offsetY: 4
            },
            sourceLabel: {
                fill: "white",
                "font-size": 8,
                "font-family": "Arial",
                "text-anchor": "middle",
                "alignment-baseline": "middle",
                offsetY: 1
            },
            sourceLabelBg: {
                fill: "black"
            },
            routeBtn: {
                fill: "black",
                "font-size": 8,
                "font-family": "Arial",
                "text-anchor": "middle",
                "alignment-baseline": "middle",
                offsetY: 1
            },
            routeBtnBg: {
                DA: {
                    stroke: "black",
                    strokeWidth: 0.3,
                    fill: "grey",
                    rx: 2,
                    ry: 2,
                    padding: 1.5
                },
                TP: {
                    stroke: "black",
                    strokeWidth: 0.3,
                    fill: "brown",
                    rx: 2,
                    ry: 2,
                    padding: 1.5
                }
            },
            stoplight: {
                rect: {
                    stroke: "white",
                    strokeWidth: 0.5,
                    rx: 0.5,
                    ry: 0.5,
                    w: 5,
                    h: 2,
                    line: {
                        w: 4,
                        h: 3
                    }
                }
            },
            stoplightLabel: {
                "font-size": 4,
                "font-family": "Arial",
                "text-anchor": "middle",
                offsetY_right: -1.5,
                offsetY_left: 6.5
            },
            ZAp: {
                w: 3,
                h: 3,
                rx: 0.5,
                ry: 0.5,
                stroke: "red",
                fill: "black",
                strokeWidth: 0.5,
                offsetX: -14,
                offsetY: -2,
                circleRatio: 0.4
            },
            ZApLabel: {
                fill: "lightgrey",
                "font-size": 3,
                "font-family": "Arial",
                "text-anchor": "middle",
                offsetY_right: -1.5,
                offsetY_left: 7
            },
            stopBtnCircle: {
                stroke: "black",
                "stroke-width": 0.5,
                padding: 1
            },
            stopBtnArrow: {
                stroke: "black",
                "stroke-width": 0.5,
                fill: "white",
                _points: [0.47, 0.9, 0.47, 0.3, 0.4, 0.3, 0.5, 0.1, 0.6, 0.3, 0.53, 0.3, 0.53, 0.9],
            }
        }
    };

    /**
     * Called when a change occurred on a Gate.
     */
    onChange() {};
}
export default DisplayManager;

interface Vector {
    x: number;
    y: number;
}
interface initConstructor {
    vw: number;
    vh: number;
    w: number;
    h: number;
    TCO: {
        pos: Vector;
        size: {
            w: number;
            h: number;
        }
    };
    grid: {
        pos: Vector;
        size: {
            w: number;
            h: number;
        };
        nbRows: number;
        nbColumns: number;
    };
}