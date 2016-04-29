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
    vw: 28,
    vh: 20,
    w: 1120,
    h: 800,
    TCO: {
        pos: {
            x: 0,
            y: 0
        },
        size: {
            w: 28,
            h: 8
        }
    },
    grid: {
        pos: {
            x: 4,
            y: 8.5
        },
        size: {
            w: 20,
            h: 10
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
                line: [{x: 1, y: 2}, {x: 3.9, y: 2}],
                label: {
                    value: "AE",
                    pos: {x: 2, y: 2}
                }
            }
        },
        "1": {
            type: "Track",
            view: {
                line: [{x: 7.1, y: 2}, {x: 14.9, y: 2}],
                label: {
                    value: "1",
                    pos: {x: 12, y: 2}
                }
            }
        },
        "A": {
            type: "Track",
            view: {
                line: [{x: 9.1, y: 4}, {x: 14.9, y: 4}],
                label: {
                    value: "A",
                    pos: {x: 12, y: 4}
                }
            }
        },
        "2": {
            type: "Track",
            view: {
                line: [{x: 9.1, y: 6}, {x: 14.9, y: 6}],
                label: {
                    value: "2",
                    pos: {x: 12, y: 6}
                }
            }
        },
        "DE": {
            type: "Track",
            view: {
                line: [{x: 1, y: 6}, {x: 3.9, y: 6}],
                label: {
                    value: "DE",
                    pos: {x: 2, y: 6}
                }
            }
        },
        "21": {
            type: "Track",
            view: {
                line: [{x: 21.1, y: 2}, {x: 22.9, y: 2}]
            }
        },
        "DT": {
            type: "Track",
            view: {
                line: [{x: 23.1, y: 2}, {x: 26.9, y: 2}],
                label: {
                    value: "DT",
                    pos: {x: 25, y: 2}
                }
            }
        },
        "AT": {
            type: "Track",
            view: {
                line: [{x: 21.1, y: 6}, {x: 26.9, y: 6}],
                label: {
                    value: "AT",
                    pos: {x: 25, y: 6}
                }
            }
        },
        "103a": {
            type: "Switch",
            view: {
                center: {x: 5, y: 2},
                lone: [{x: 4.1, y: 2}],
                left: [{x: 6.9, y: 2}],
                right: [{x: 5.93, y: 2.93}],
                label: {
                    value: "103a",
                    pos: {x: 4.5, y: 2},
                    above: false
                }
            }
        },
        "103b": {
            type: "Switch",
            view: {
                center: {x: 7, y: 4},
                lone: [{x: 8.9, y: 4}],
                left: [{x: 6.5, y: 4}, {x: 5.57, y: 4.93}],
                right: [{x: 6.07, y: 3.07}],
                label: {
                    value: "103b",
                    pos: {x: 7, y: 4},
                    above: false
                }
            }
        },
        "102": {
            type: "Switch",
            view: {
                center: {x: 4.5, y: 6},
                lone: [{x: 4.1, y: 6}],
                left: [{x: 5.43, y: 5.07}],
                right: [{x: 8.9, y: 6}],
                label: {
                    value: "102",
                    pos: {x: 4.5, y: 6},
                    above: false
                }
            }
        },
        "109a": {
            type: "Switch",
            view: {
                center: {x: 17, y: 4},
                lone: [{x: 15.1, y: 4}],
                left: [{x: 17.93, y: 3.07}],
                right: [{x: 17.5, y: 4}, {x: 18.43, y: 4.93}],
                label: {
                    value: "109a",
                    pos: {x: 17, y: 4},
                    above: false
                }
            }
        },
        "109b": {
            type: "Switch",
            view: {
                center: {x: 19, y: 2},
                lone: [{x: 20.9, y: 2}],
                left: [{x: 18.07, y: 2.93}],
                right: [{x: 15.1, y: 2}],
                label: {
                    value: "109b",
                    pos: {x: 19, y: 2},
                    above: true
                }
            }
        },
        "110": {
            type: "Switch",
            view: {
                center: {x: 19.5, y: 6},
                lone: [{x: 20.9, y: 6}],
                left: [{x: 15.1, y: 6}],
                right: [{x: 18.57, y: 5.07}],
                label: {
                    value: "110",
                    pos: {x: 19.5, y: 6},
                    above: false
                }
            }
        }
    },
    wires: [
        ["AE", "right", "103a", "lone"],
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
        ["2", "right", "110", "left"],
        ["110", "lone", "AT", "left"]
    ],
    zones: {
        "z10": {
            gates: ["DE"],
            view: {
                label: {
                    value: "z10",
                    pos: {x: 3.25, y: 6},
                    above: true
                }
            }
        },
        "z12": {
            gates: ["102"],
            view: {
                label: {
                    value: "z12",
                    pos: {x: 5.75, y: 6},
                    above: true
                }
            }
        },
        "z13": {
            gates: ["103a"],
            view: {
                label: {
                    value: "z13",
                    pos: {x: 5.5, y: 2},
                    above: true
                }
            }
        },
        "z15": {
            gates: ["1"],
            view: {
                label: {
                    value: "z15",
                    pos: {x: 11, y: 2},
                    above: true
                }
            }
        },
        "z16": {
            gates: ["103b"],
            view: {
                label: {
                    value: "z16",
                    pos: {x: 8, y: 4},
                    above: true
                }
            }
        },
        "z17": {
            gates: ["109b"],
            view: {
                label: {
                    value: "z17",
                    pos: {x: 17, y: 2},
                    above: true
                }
            }
        },
        "z18": {
            gates: ["A"],
            view: {
                label: {
                    value: "z18",
                    pos: {x: 10.5, y: 4},
                    above: true
                }
            }
        },
        "z21": {
            gates: ["21"],
            view: {
                label: {
                    value: "z21",
                    pos: {x: 22, y: 2},
                    above: true
                }
            }
        },
        "z22": {
            gates: ["109a"],
            view: {
                label: {
                    value: "z22",
                    pos: {x: 16, y: 4},
                    above: true
                }
            }
        },
        "z23": {
            gates: ["DT"],
            view: {
                label: {
                    value: "z23",
                    pos: {x: 24, y: 2},
                    above: true
                }
            }
        },
        "z26": {
            gates: ["110"],
            view: {
                label: {
                    value: "z26",
                    pos: {x: 20, y: 6},
                    above: true
                }
            }
        },
        "z34": {
            gates: ["2"],
            view: {
                label: {
                    value: "z34",
                    pos: {x: 13, y: 6},
                    above: true
                }
            }
        }
    },
    sources: {
        "AE_right": {
            view: {
                label: {
                    value: "AE",
                    pos: {x: 0, y: 3}
                },
                stoplight: {
                    value: "111",
                    pos: {x: 3.9, y: 2},
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
                    pos: {x: 14.9, y: 2},
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
                    pos: {x: 14.9, y: 4},
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
                    pos: {x: 9.1, y: 4},
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
                    pos: {x: 9.1, y: 6},
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
                    pos: {x: 19.95, y: 2},
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
                    pos: {x: 21.1, y: 6},
                    dir: "left"
                },
                ZAp: true
            }
        }
    },
    routes: {
        "AE_1": {
            source: "AE_right",
            gates: ["AE", "103a", "1"],
            TP: true,
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
            gates: ["AE", "103a", "103b", "A"],
            TP: false,
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
            gates: ["1", "109b", "21", "DT"],
            TP: false,
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
            gates: ["A", "109a", "109b", "21", "DT"],
            TP: false,
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
            gates: ["DT", "21", "109b", "109a", "A"],
            TP: false,
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
            gates: ["AT", "110", "109a", "A"],
            TP: false,
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
            gates: ["AT", "110", "2"],
            TP: true,
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
            gates: ["2", "102", "DE"],
            TP: true,
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
            gates: ["A", "103b", "102", "DE"],
            TP: false,
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

// Add routes
var routes = {};
Object.getOwnPropertyNames(gare.routes).forEach((routeName) => {
    let route = gare.routes[routeName];
    let source = sources[route.source];
    let zoneGates = route.gates.map((name) => gates[name]);
    routes[routeName] = new Route(routeName, source, zoneGates, route.TP, route.view);
});

// Add stop btn
var stopBtns = {};
Object.getOwnPropertyNames(gare.stopBtn).forEach((btnName) => {
    let btn = gare.stopBtn[btnName];
    let btnSources = btn.sources.map((name) => sources[name]);
    stopBtns[btnName] = new StopBtn(btnName, btnSources, btn.view);
});