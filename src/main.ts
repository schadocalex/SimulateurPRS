/// <reference path="./lib/snapsvg.d.ts" />

import DisplayManager from "./objects/DisplayManager";
import Track from "./objects/Track";
import Switch from "./objects/Switch";
import Gate from "./objects/Gate";
import Zone from "./objects/Zone";
import Source from "./objects/Source";
import Route from "./objects/Route";
import StopBtn from "./objects/StopBtn";

DisplayManager.init({
    vw: 280,
    vh: 200,
    w: 1120,
    h: 800,
    TCO: {
        pos: {
            x: 0,
            y: 0
        },
        size: {
            w: 280,
            h: 80
        }
    },
    grid: {
        pos: {
            x: 40,
            y: 85
        },
        size: {
            w: 200,
            h: 100
        },
        nbRows: 8,
        nbColumns: 10
    }
});

var gare = {
    gates: {
        "AE": {
            type: "Track",
            view: {
                line: [{x: 10, y: 20}, {x: 39, y: 20}],
                label: {
                    value: "AE",
                    pos: {x: 20, y: 20}
                }
            }
        },
        "1": {
            type: "Track",
            view: {
                line: [{x: 71, y: 20}, {x: 149, y: 20}],
                label: {
                    value: "1",
                    pos: {x: 120, y: 20}
                }
            }
        },
        "A": {
            type: "Track",
            view: {
                line: [{x: 91, y: 40}, {x: 149, y: 40}],
                label: {
                    value: "A",
                    pos: {x: 120, y: 40}
                }
            }
        },
        "2": {
            type: "Track",
            view: {
                line: [{x: 91, y: 60}, {x: 149, y: 60}],
                label: {
                    value: "2",
                    pos: {x: 120, y: 60}
                }
            }
        },
        "DE": {
            type: "Track",
            view: {
                line: [{x: 10, y: 60}, {x: 39, y: 60}],
                label: {
                    value: "DE",
                    pos: {x: 20, y: 60}
                }
            }
        },
        "21": {
            type: "Track",
            view: {
                line: [{x: 211, y: 20}, {x: 229, y: 20}]
            }
        },
        "DT": {
            type: "Track",
            view: {
                line: [{x: 231, y: 20}, {x: 269, y: 20}],
                label: {
                    value: "DT",
                    pos: {x: 250, y: 20}
                }
            }
        },
        "AT": {
            type: "Track",
            view: {
                line: [{x: 211, y: 60}, {x: 269, y: 60}],
                label: {
                    value: "AT",
                    pos: {x: 250, y: 60}
                }
            }
        },
        "103a": {
            type: "Switch",
            view: {
                center: {x: 50, y: 20},
                lone: [{x: 41, y: 20}],
                left: [{x: 69, y: 20}],
                right: [{x: 59.3, y: 29.3}],
                label: {
                    value: "103a",
                    pos: {x: 45, y: 20},
                    above: false
                }
            }
        },
        "103b": {
            type: "Switch",
            view: {
                center: {x: 70, y: 40},
                lone: [{x: 89, y: 40}],
                left: [{x: 65, y: 40}, {x: 55.7, y: 49.3}],
                right: [{x: 60.7, y: 30.7}],
                label: {
                    value: "103b",
                    pos: {x: 70, y: 40},
                    above: false
                }
            }
        },
        "102": {
            type: "Switch",
            view: {
                center: {x: 45, y: 60},
                lone: [{x: 41, y: 60}],
                left: [{x: 54.3, y: 50.7}],
                right: [{x: 89, y: 60}],
                label: {
                    value: "102",
                    pos: {x: 45, y: 60},
                    above: false
                }
            }
        },
        "109a": {
            type: "Switch",
            view: {
                center: {x: 170, y: 40},
                lone: [{x: 151, y: 40}],
                left: [{x: 179.3, y: 30.7}],
                right: [{x: 175, y: 40}, {x: 184.3, y: 49.3}],
                label: {
                    value: "109a",
                    pos: {x: 170, y: 40},
                    above: false
                }
            }
        },
        "109b": {
            type: "Switch",
            view: {
                center: {x: 190, y: 20},
                lone: [{x: 209, y: 20}],
                left: [{x: 180.7, y: 29.3}],
                right: [{x: 151, y: 20}],
                label: {
                    value: "109b",
                    pos: {x: 190, y: 20},
                    above: true
                }
            }
        },
        "110": {
            type: "Switch",
            view: {
                center: {x: 195, y: 60},
                lone: [{x: 209, y: 60}],
                left: [{x: 151, y: 60}],
                right: [{x: 185.7, y: 50.7}],
                label: {
                    value: "110",
                    pos: {x: 195, y: 60},
                    above: false
                }
            }
        }
    },
    wires: [
        ["103a", "left", "1", "left"],
        ["1", "right", "109b", "right"],
        ["109b", "lone", "21", "left"],
        ["21", "right", "DT", "left"],
        ["103a", "right", "103b", "right"],
        ["109b", "left", "109a", "left"],
        ["103b", "lone", "A", "left"],
        ["A", "right", "109a", "lone"],
        ["102", "left", "103b", "left"],
        ["110", "right", "109a", "right"],
        ["DE", "right", "102", "lone"],
        ["102", "right", "2", "left"],
        ["2", "right", "110", "left"]
    ],
    zones: {
        "z10": {
            gates: ["DE"],
            view: {
                label: {
                    value: "z10",
                    pos: {x: 32.5, y: 60},
                    above: true
                }
            }
        },
        "z12": {
            gates: ["102"],
            view: {
                label: {
                    value: "z12",
                    pos: {x: 57.5, y: 60},
                    above: true
                }
            }
        },
        "z13": {
            gates: ["103a"],
            view: {
                label: {
                    value: "z13",
                    pos: {x: 55, y: 20},
                    above: true
                }
            }
        },
        "z15": {
            gates: ["1"],
            view: {
                label: {
                    value: "z15",
                    pos: {x: 110, y: 20},
                    above: true
                }
            }
        },
        "z16": {
            gates: ["103b"],
            view: {
                label: {
                    value: "z16",
                    pos: {x: 80, y: 40},
                    above: true
                }
            }
        },
        "z17": {
            gates: ["109b"],
            view: {
                label: {
                    value: "z17",
                    pos: {x: 170, y: 20},
                    above: true
                }
            }
        },
        "z18": {
            gates: ["A"],
            view: {
                label: {
                    value: "z18",
                    pos: {x: 105, y: 40},
                    above: true
                }
            }
        },
        "z21": {
            gates: ["21"],
            view: {
                label: {
                    value: "z21",
                    pos: {x: 220, y: 20},
                    above: true
                }
            }
        },
        "z22": {
            gates: ["109a"],
            view: {
                label: {
                    value: "z22",
                    pos: {x: 160, y: 40},
                    above: true
                }
            }
        },
        "z23": {
            gates: ["DT"],
            view: {
                label: {
                    value: "z23",
                    pos: {x: 240, y: 20},
                    above: true
                }
            }
        },
        "z26": {
            gates: ["110"],
            view: {
                label: {
                    value: "z26",
                    pos: {x: 200, y: 60},
                    above: true
                }
            }
        },
        "z34": {
            gates: ["2"],
            view: {
                label: {
                    value: "z34",
                    pos: {x: 130, y: 60},
                    above: true
                }
            }
        }
    },
    sources: {
        "AE_right": {
            // TODO add source gate (exemple here: "AE")
            view: {
                label: {
                    value: "AE",
                    pos: {x: 0, y: 3}
                },
                stoplight: {
                    value: "111",
                    pos: {x: 39, y: 20},
                    dir: "right"
                },
                ZAp: true
            }
        },
        "1_right": {
            view: {
                label: {
                    value: "1",
                    pos: {x: 5, y: 3}
                },
                stoplight: {
                    value: "131",
                    pos: {x: 149, y: 20},
                    dir: "right"
                },
                ZAp: true
            }
        },
        "A_right": {
            view: {
                label: {
                    value: "A",
                    pos: {x: 5, y: 4}
                },
                stoplight: {
                    value: "129",
                    pos: {x: 149, y: 40},
                    dir: "right"
                },
                ZAp: true
            }
        },
        "A_left": {
            view: {
                label: {
                    value: "A",
                    pos: {x: 3, y: 6}
                },
                stoplight: {
                    value: "116",
                    pos: {x: 91, y: 40},
                    dir: "left"
                },
                ZAp: true
            }
        },
        "2_left": {
            view: {
                label: {
                    value: "2",
                    pos: {x: 3, y: 7}
                },
                stoplight: {
                    value: "114",
                    pos: {x: 91, y: 60},
                    dir: "left"
                },
                ZAp: true
            }
        },
        "DT_left": {
            view: {
                label: {
                    value: "DT",
                    pos: {x: 8, y: 6}
                },
                stoplight: {
                    value: "122",
                    pos: {x: 199.5, y: 20},
                    dir: "left"
                },
                ZAp: false
            }
        },
        "AT_left": {
            view: {
                label: {
                    value: "AT",
                    pos: {x: 8, y: 7}
                },
                stoplight: {
                    value: "128",
                    pos: {x: 211, y: 60},
                    dir: "left"
                },
                ZAp: true
            }
        }
    },
    routes: {
        "AE_1": {
            source: "AE_right",
            zones: ["z13", "z15"],
            gates: ["103a", "1"],
            TP: true,
            transit: "right",
            view: {
                btn: {
                    value: "1",
                    pos: {
                        DA: {x: 1, y: 3},
                        TP: {x: 2, y: 3}
                    }
                }
            }
        },
        "AE_A": {
            source: "AE_right",
            zones: ["z13", "z16", "z18"],
            gates: ["103a", "103b", "A"],
            TP: false,
            transit: "right",
            view: {
                btn: {
                    value: "A",
                    pos: {
                        DA: {x: 3, y: 3}
                    }
                }
            }
        },
        "1_DT": {
            source: "1_right",
            zones: ["z17", "z21", "z23"],
            gates: ["109b", "21", "DT"],
            TP: true,
            transit: "right",
            view: {
                btn: {
                    value: "DT",
                    pos: {
                        DA: {x: 6, y: 3},
                        TP: {x: 7, y: 3}
                    }
                }
            }
        },
        "A_DT": {
            source: "A_right",
            zones: ["z22", "z17", "z21", "z23"],
            gates: ["109a", "109b", "21", "DT"],
            TP: false,
            transit: "right",
            view: {
                btn: {
                    value: "DT",
                    pos: {
                        DA: {x: 6, y: 4}
                    }
                }
            }
        },
        "DT_A": {
            source: "DT_left",
            zones: ["z17", "z22", "z18"],
            gates: ["109b", "109a", "A"],
            TP: false,
            transit: "left",
            view: {
                btn: {
                    value: "A",
                    pos: {
                        DA: {x: 7, y: 6}
                    }
                }
            }
        },
        "AT_A": {
            source: "AT_left",
            zones: ["z26", "z22", "z18"],
            gates: ["110", "109a", "A"],
            TP: false,
            transit: "left",
            view: {
                btn: {
                    value: "A",
                    pos: {
                        DA: {x: 7, y: 7}
                    }
                }
            }
        },
        "AT_2": {
            source: "AT_left",
            zones: ["z26", "z34"],
            gates: ["110", "2"],
            TP: true,
            transit: "left",
            view: {
                btn: {
                    value: "2",
                    pos: {
                        DA: {x: 6, y: 7},
                        TP: {x: 5, y: 7}
                    }
                }
            }
        },
        "2_DE": {
            source: "2_left",
            zones: ["z12", "z10"],
            gates: ["102", "DE"],
            TP: true,
            transit: "left",
            view: {
                btn: {
                    value: "DE",
                    pos: {
                        DA: {x: 2, y: 7},
                        TP: {x: 1, y: 7}
                    }
                }
            }
        },
        "A_DE": {
            source: "A_left",
            zones: ["z16", "z12", "z10"],
            gates: ["103b", "102", "DE"],
            TP: false,
            transit: "left",
            view: {
                btn: {
                    value: "DE",
                    pos: {
                        DA: {x: 2, y: 6}
                    }
                }
            }
        }
    },
    stopBtn: {
        "AE_right": {
            sources: ["AE_right"],
            view: {
                pos: {x: 0, y: 1},
                label: {
                    value: "C 111",
                    pos: {x: 0, y: 0}
                }
            }
        }
    }
};

// Create gate and view gates
var gates = {};
Object.getOwnPropertyNames(gare.gates).forEach((gateName) => {
    let gate = gare.gates[gateName];
    switch(gate.type) {
        case "Track":
            gates[gateName] = new Track(gateName, gate.view);
            break;
        case "Switch":
            gates[gateName] = new Switch(gateName, gate.view);
            break;
    }
});

// Add links
gare.wires.forEach((wire) => Gate.addLink(gates[wire[0]], wire[1], gates[wire[2]], wire[3]));

// Add zones
var zones = {};
Object.getOwnPropertyNames(gare.zones).forEach((zoneName) => {
    let zone = gare.zones[zoneName];
    let zoneGates = zone.gates.map((name) => gates[name]);
    zones[zoneName] = new Zone(zoneName, zoneGates, zone.view);
});

// Add sources
var sources = {};
Object.getOwnPropertyNames(gare.sources).forEach((sourceName) => {
    let source = gare.sources[sourceName];
    sources[sourceName] = new Source(sourceName, source.view);
});

// Add stop btn
var stopBtns = {};
Object.getOwnPropertyNames(gare.stopBtn).forEach((btnName) => {
    let btn = gare.stopBtn[btnName];
    let btnSources = btn.sources.map((name) => sources[name]);
    stopBtns[btnName] = new StopBtn(btnName, btnSources, btn.view);
});

// Add routes
var routes = {};
Object.getOwnPropertyNames(gare.routes).forEach((routeName) => {
    let route = gare.routes[routeName];
    let source = sources[route.source];
    let routeZones = route.zones.map((name) => zones[name]);
    let routeGates = route.gates.map((name) => gates[name]);
    routes[routeName] = new Route(routeName, source, routeZones, routeGates, route.transit, route.TP, route.view);
});
