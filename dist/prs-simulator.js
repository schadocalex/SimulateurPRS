(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "vw": 280,
  "vh": 190,
  "w": 840,
  "h": 570,
  "TCO": {
    "pos": {
      "x": 0,
      "y": 0
    },
    "size": {
      "w": 280,
      "h": 80
    }
  },
  "grid": {
    "pos": {
      "x": 40,
      "y": 85
    },
    "size": {
      "w": 200,
      "h": 100
    },
    "nbRows": 8,
    "nbColumns": 10
  }
}
},{}],2:[function(require,module,exports){
module.exports={
  "color": {
    "background": "white",
    "route": {
      "DA": "yellow",
      "TP": "orange",
      "free": "grey",
      "trainOn": "red"
    },
    "switchLed": {
      "off": "black",
      "on": "white"
    },
    "led": {
      "off": "grey",
      "on": "white"
    },
    "TCO": {
      "background": "black"
    },
    "stoplight": {
      "off": "grey",
      "on": "red"
    },
    "stoplightLabel": {
      "off": "white",
      "on": "red"
    },
    "ZAp": {
      "off": "white",
      "on": "red"
    },
    "stopBtnCircle": {
      "off": "brown",
      "on": "red"
    },
    "routeBtnBg": {
      "DA": {
        "off": "grey",
        "on": "white"
      },
      "TP": {
        "off": "brown",
        "on": "#F08040"
      }
    }
  },
  "attr": {
    "line": {
      "fill": "black",
      "stroke": "grey",
      "strokeWidth": 2
    },
    "grid": {
      "fill": "lightblue",
      "stroke": "black",
      "strokeWidth": 0.5
    },
    "trackLabel": {
      "fill": "white",
      "font-size": 3,
      "text-anchor": "middle",
      "font-family": "Arial"
    },
    "trackBgLabel": {
      "stroke": "white",
      "strokeWidth": 0.3,
      "fill": "black",
      "sizeCoeff": 0.7
    },
    "switchLabel": {
      "fill": "yellow",
      "fontSize": 3,
      "fontFamily": "Arial",
      "textAnchor": "middle",
      "offsetY": 3
    },
    "switchLed": {
      "distanceFromCenter": 7,
      "sizeRatio": 0.45
    },
    "ledLabel": {
      "fill": "lightgrey",
      "fontSize": 3,
      "fontFamily": "Arial",
      "textAnchor": "middle",
      "offsetY": 4
    },
    "led": {
      "size": 1.3
    },
    "zoneLabel": {
      "fill": "lime",
      "font-size": 4,
      "fontFamily": "Arial",
      "textAnchor": "middle",
      "offsetY": 4
    },
    "sourceLabel": {
      "fill": "white",
      "font-size": 8,
      "font-family": "Arial",
      "text-anchor": "middle",
      "alignment-baseline": "middle",
      "offsetY": 1
    },
    "sourceLabelBg": {
      "fill": "black"
    },
    "routeBtn": {
      "fill": "black",
      "font-size": 8,
      "font-family": "Arial",
      "text-anchor": "middle",
      "alignment-baseline": "middle",
      "offsetY": 1
    },
    "routeBtnBg": {
      "DA": {
        "stroke": "black",
        "strokeWidth": 0.3,
        "rx": 2,
        "ry": 2,
        "padding": 1.5
      },
      "TP": {
        "stroke": "black",
        "strokeWidth": 0.3,
        "rx": 2,
        "ry": 2,
        "padding": 1.5
      }
    },
    "stoplight": {
      "rect": {
        "stroke": "white",
        "strokeWidth": 0.5,
        "rx": 0.5,
        "ry": 0.5,
        "w": 5,
        "h": 2,
        "line": {
          "w": 4,
          "h": 3
        }
      }
    },
    "stoplightLabel": {
      "font-size": 4,
      "font-family": "Arial",
      "text-anchor": "middle",
      "offsetY_right": -1.5,
      "offsetY_left": 6.5
    },
    "ZAp": {
      "w": 3,
      "h": 3,
      "rx": 0.5,
      "ry": 0.5,
      "stroke": "red",
      "fill": "black",
      "strokeWidth": 0.5,
      "offsetX": -14,
      "offsetY": -2,
      "circleRatio": 0.4
    },
    "ZApLabel": {
      "fill": "lightgrey",
      "font-size": 3,
      "font-family": "Arial",
      "text-anchor": "middle",
      "offsetY_right": -1.5,
      "offsetY_left": 7
    },
    "stopBtnCircle": {
      "stroke": "black",
      "stroke-width": 0.5,
      "padding": 1
    },
    "stopBtnArrow": {
      "stroke": "black",
      "stroke-width": 0.5,
      "fill": "white",
      "_points": [
        0.47,
        0.9,
        0.47,
        0.3,
        0.4,
        0.3,
        0.5,
        0.1,
        0.6,
        0.3,
        0.53,
        0.3,
        0.53,
        0.9
      ]
    }
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "gates": {
    "1": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 71,
            "y": 20
          },
          {
            "x": 149,
            "y": 20
          }
        ],
        "label": {
          "value": "1",
          "pos": {
            "x": 120,
            "y": 20
          }
        }
      }
    },
    "2": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 91,
            "y": 60
          },
          {
            "x": 149,
            "y": 60
          }
        ],
        "label": {
          "value": "2",
          "pos": {
            "x": 120,
            "y": 60
          }
        }
      }
    },
    "21": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 211,
            "y": 20
          },
          {
            "x": 229,
            "y": 20
          }
        ]
      }
    },
    "102": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 45,
          "y": 60
        },
        "lone": [
          {
            "x": 41,
            "y": 60
          }
        ],
        "left": [
          {
            "x": 54.3,
            "y": 50.7
          }
        ],
        "right": [
          {
            "x": 89,
            "y": 60
          }
        ],
        "label": {
          "value": "102",
          "pos": {
            "x": 45,
            "y": 60
          },
          "above": false
        }
      }
    },
    "110": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 195,
          "y": 60
        },
        "lone": [
          {
            "x": 209,
            "y": 60
          }
        ],
        "left": [
          {
            "x": 151,
            "y": 60
          }
        ],
        "right": [
          {
            "x": 185.7,
            "y": 50.7
          }
        ],
        "label": {
          "value": "110",
          "pos": {
            "x": 195,
            "y": 60
          },
          "above": false
        }
      }
    },
    "AE": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 10,
            "y": 20
          },
          {
            "x": 39,
            "y": 20
          }
        ],
        "label": {
          "value": "AE",
          "pos": {
            "x": 20,
            "y": 20
          }
        }
      }
    },
    "A": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 91,
            "y": 40
          },
          {
            "x": 149,
            "y": 40
          }
        ],
        "label": {
          "value": "A",
          "pos": {
            "x": 120,
            "y": 40
          }
        }
      }
    },
    "DE": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 10,
            "y": 60
          },
          {
            "x": 39,
            "y": 60
          }
        ],
        "label": {
          "value": "DE",
          "pos": {
            "x": 20,
            "y": 60
          }
        }
      }
    },
    "DT": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 231,
            "y": 20
          },
          {
            "x": 269,
            "y": 20
          }
        ],
        "label": {
          "value": "DT",
          "pos": {
            "x": 250,
            "y": 20
          }
        }
      }
    },
    "AT": {
      "type": "Track",
      "view": {
        "line": [
          {
            "x": 211,
            "y": 60
          },
          {
            "x": 269,
            "y": 60
          }
        ],
        "label": {
          "value": "AT",
          "pos": {
            "x": 250,
            "y": 60
          }
        }
      }
    },
    "103a": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 50,
          "y": 20
        },
        "lone": [
          {
            "x": 41,
            "y": 20
          }
        ],
        "left": [
          {
            "x": 69,
            "y": 20
          }
        ],
        "right": [
          {
            "x": 59.3,
            "y": 29.3
          }
        ],
        "label": {
          "value": "103a",
          "pos": {
            "x": 45,
            "y": 20
          },
          "above": false
        }
      }
    },
    "103b": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 70,
          "y": 40
        },
        "lone": [
          {
            "x": 89,
            "y": 40
          }
        ],
        "left": [
          {
            "x": 65,
            "y": 40
          },
          {
            "x": 55.7,
            "y": 49.3
          }
        ],
        "right": [
          {
            "x": 60.7,
            "y": 30.7
          }
        ],
        "label": {
          "value": "103b",
          "pos": {
            "x": 70,
            "y": 40
          },
          "above": false
        }
      }
    },
    "109a": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 170,
          "y": 40
        },
        "lone": [
          {
            "x": 151,
            "y": 40
          }
        ],
        "left": [
          {
            "x": 179.3,
            "y": 30.7
          }
        ],
        "right": [
          {
            "x": 175,
            "y": 40
          },
          {
            "x": 184.3,
            "y": 49.3
          }
        ],
        "label": {
          "value": "109a",
          "pos": {
            "x": 170,
            "y": 40
          },
          "above": false
        }
      }
    },
    "109b": {
      "type": "Switch",
      "view": {
        "center": {
          "x": 190,
          "y": 20
        },
        "lone": [
          {
            "x": 209,
            "y": 20
          }
        ],
        "left": [
          {
            "x": 180.7,
            "y": 29.3
          }
        ],
        "right": [
          {
            "x": 151,
            "y": 20
          }
        ],
        "label": {
          "value": "109b",
          "pos": {
            "x": 190,
            "y": 20
          },
          "above": true
        }
      }
    }
  },
  "wires": [
    [
      "103a",
      "left",
      "1",
      "left"
    ],
    [
      "1",
      "right",
      "109b",
      "right"
    ],
    [
      "109b",
      "lone",
      "21",
      "left"
    ],
    [
      "21",
      "right",
      "DT",
      "left"
    ],
    [
      "103a",
      "right",
      "103b",
      "right"
    ],
    [
      "109b",
      "left",
      "109a",
      "left"
    ],
    [
      "103b",
      "lone",
      "A",
      "left"
    ],
    [
      "A",
      "right",
      "109a",
      "lone"
    ],
    [
      "102",
      "left",
      "103b",
      "left"
    ],
    [
      "110",
      "right",
      "109a",
      "right"
    ],
    [
      "DE",
      "right",
      "102",
      "lone"
    ],
    [
      "102",
      "right",
      "2",
      "left"
    ],
    [
      "2",
      "right",
      "110",
      "left"
    ]
  ],
  "combinedSwitches": [
    [
      "103a",
      "103b"
    ],
    [
      "109a",
      "109b"
    ]
  ],
  "zones": {
    "z10": {
      "gates": [
        "DE"
      ],
      "view": {
        "label": {
          "value": "z10",
          "pos": {
            "x": 32.5,
            "y": 60
          },
          "above": true
        }
      }
    },
    "z12": {
      "gates": [
        "102"
      ],
      "view": {
        "label": {
          "value": "z12",
          "pos": {
            "x": 57.5,
            "y": 60
          },
          "above": true
        }
      }
    },
    "z13": {
      "gates": [
        "103a"
      ],
      "view": {
        "label": {
          "value": "z13",
          "pos": {
            "x": 55,
            "y": 20
          },
          "above": true
        }
      }
    },
    "z15": {
      "gates": [
        "1"
      ],
      "view": {
        "label": {
          "value": "z15",
          "pos": {
            "x": 110,
            "y": 20
          },
          "above": true
        }
      }
    },
    "z16": {
      "gates": [
        "103b"
      ],
      "view": {
        "label": {
          "value": "z16",
          "pos": {
            "x": 80,
            "y": 40
          },
          "above": true
        }
      }
    },
    "z17": {
      "gates": [
        "109b"
      ],
      "view": {
        "label": {
          "value": "z17",
          "pos": {
            "x": 170,
            "y": 20
          },
          "above": true
        }
      }
    },
    "z18": {
      "gates": [
        "A"
      ],
      "view": {
        "label": {
          "value": "z18",
          "pos": {
            "x": 105,
            "y": 40
          },
          "above": true
        }
      }
    },
    "z21": {
      "gates": [
        "21"
      ],
      "view": {
        "label": {
          "value": "z21",
          "pos": {
            "x": 220,
            "y": 20
          },
          "above": true
        }
      }
    },
    "z22": {
      "gates": [
        "109a"
      ],
      "view": {
        "label": {
          "value": "z22",
          "pos": {
            "x": 160,
            "y": 40
          },
          "above": true
        }
      }
    },
    "z23": {
      "gates": [
        "DT"
      ],
      "view": {
        "label": {
          "value": "z23",
          "pos": {
            "x": 240,
            "y": 20
          },
          "above": true
        }
      }
    },
    "z26": {
      "gates": [
        "110"
      ],
      "view": {
        "label": {
          "value": "z26",
          "pos": {
            "x": 200,
            "y": 60
          },
          "above": true
        }
      }
    },
    "z34": {
      "gates": [
        "2"
      ],
      "view": {
        "label": {
          "value": "z34",
          "pos": {
            "x": 130,
            "y": 60
          },
          "above": true
        }
      }
    }
  },
  "sources": {
    "AE_right": {
      "view": {
        "label": {
          "value": "AE",
          "pos": {
            "x": 0,
            "y": 3
          }
        },
        "stoplight": {
          "value": "111",
          "pos": {
            "x": 39,
            "y": 20
          },
          "dir": "right"
        },
        "ZAp": true
      }
    },
    "1_right": {
      "view": {
        "label": {
          "value": "1",
          "pos": {
            "x": 5,
            "y": 3
          }
        },
        "stoplight": {
          "value": "131",
          "pos": {
            "x": 149,
            "y": 20
          },
          "dir": "right"
        },
        "ZAp": true
      }
    },
    "A_right": {
      "view": {
        "label": {
          "value": "A",
          "pos": {
            "x": 5,
            "y": 4
          }
        },
        "stoplight": {
          "value": "129",
          "pos": {
            "x": 149,
            "y": 40
          },
          "dir": "right"
        },
        "ZAp": true
      }
    },
    "A_left": {
      "view": {
        "label": {
          "value": "A",
          "pos": {
            "x": 3,
            "y": 6
          }
        },
        "stoplight": {
          "value": "116",
          "pos": {
            "x": 91,
            "y": 40
          },
          "dir": "left"
        },
        "ZAp": true
      }
    },
    "2_left": {
      "view": {
        "label": {
          "value": "2",
          "pos": {
            "x": 3,
            "y": 7
          }
        },
        "stoplight": {
          "value": "114",
          "pos": {
            "x": 91,
            "y": 60
          },
          "dir": "left"
        },
        "ZAp": true
      }
    },
    "DT_left": {
      "view": {
        "label": {
          "value": "DT",
          "pos": {
            "x": 8,
            "y": 6
          }
        },
        "stoplight": {
          "value": "122",
          "pos": {
            "x": 199.5,
            "y": 20
          },
          "dir": "left"
        },
        "ZAp": false
      }
    },
    "AT_left": {
      "view": {
        "label": {
          "value": "AT",
          "pos": {
            "x": 8,
            "y": 7
          }
        },
        "stoplight": {
          "value": "128",
          "pos": {
            "x": 211,
            "y": 60
          },
          "dir": "left"
        },
        "ZAp": true
      }
    }
  },
  "routes": {
    "AE_1": {
      "source": "AE_right",
      "nextSource": "1_right",
      "zones": [
        "z13",
        "z15"
      ],
      "gates": [
        "103a",
        "1"
      ],
      "switchDirs": [
        "left",
        null
      ],
      "TP": true,
      "transit": "right",
      "view": {
        "btn": {
          "value": "1",
          "pos": {
            "DA": {
              "x": 1,
              "y": 3
            },
            "TP": {
              "x": 2,
              "y": 3
            }
          }
        }
      }
    },
    "AE_A": {
      "source": "AE_right",
      "nextSource": "A_right",
      "zones": [
        "z13",
        "z16",
        "z18"
      ],
      "gates": [
        "103a",
        "103b",
        "A"
      ],
      "switchDirs": [
        "right",
        "right",
        null
      ],
      "TP": false,
      "transit": "right",
      "view": {
        "btn": {
          "value": "A",
          "pos": {
            "DA": {
              "x": 3,
              "y": 3
            }
          }
        }
      }
    },
    "1_DT": {
      "source": "1_right",
      "nextSource": null,
      "zones": [
        "z17",
        "z21",
        "z23"
      ],
      "gates": [
        "109b",
        "21",
        "DT"
      ],
      "switchDirs": [
        "right",
        null,
        null
      ],
      "TP": true,
      "transit": "right",
      "view": {
        "btn": {
          "value": "DT",
          "pos": {
            "DA": {
              "x": 6,
              "y": 3
            },
            "TP": {
              "x": 7,
              "y": 3
            }
          }
        }
      }
    },
    "A_DT": {
      "source": "A_right",
      "nextSource": null,
      "zones": [
        "z22",
        "z17",
        "z21",
        "z23"
      ],
      "gates": [
        "109a",
        "109b",
        "21",
        "DT"
      ],
      "switchDirs": [
        "left",
        "left",
        null,
        null
      ],
      "TP": false,
      "transit": "right",
      "view": {
        "btn": {
          "value": "DT",
          "pos": {
            "DA": {
              "x": 6,
              "y": 4
            }
          }
        }
      }
    },
    "DT_A": {
      "source": "DT_left",
      "nextSource": "A_left",
      "zones": [
        "z17",
        "z22",
        "z18"
      ],
      "gates": [
        "109b",
        "109a",
        "A"
      ],
      "switchDirs": [
        "left",
        "left",
        null
      ],
      "TP": false,
      "transit": "left",
      "view": {
        "btn": {
          "value": "A",
          "pos": {
            "DA": {
              "x": 7,
              "y": 6
            }
          }
        }
      }
    },
    "AT_A": {
      "source": "AT_left",
      "nextSource": "A_left",
      "zones": [
        "z26",
        "z22",
        "z18"
      ],
      "gates": [
        "110",
        "109a",
        "A"
      ],
      "switchDirs": [
        "right",
        "right",
        null
      ],
      "TP": false,
      "transit": "left",
      "view": {
        "btn": {
          "value": "A",
          "pos": {
            "DA": {
              "x": 7,
              "y": 7
            }
          }
        }
      }
    },
    "AT_2": {
      "source": "AT_left",
      "nextSource": "2_left",
      "zones": [
        "z26",
        "z34"
      ],
      "gates": [
        "110",
        "2"
      ],
      "switchDirs": [
        "left",
        null
      ],
      "TP": true,
      "transit": "left",
      "view": {
        "btn": {
          "value": "2",
          "pos": {
            "DA": {
              "x": 6,
              "y": 7
            },
            "TP": {
              "x": 5,
              "y": 7
            }
          }
        }
      }
    },
    "2_DE": {
      "source": "2_left",
      "nextSource": null,
      "zones": [
        "z12",
        "z10"
      ],
      "gates": [
        "102",
        "DE"
      ],
      "switchDirs": [
        "right",
        null
      ],
      "TP": true,
      "transit": "left",
      "view": {
        "btn": {
          "value": "DE",
          "pos": {
            "DA": {
              "x": 2,
              "y": 7
            },
            "TP": {
              "x": 1,
              "y": 7
            }
          }
        }
      }
    },
    "A_DE": {
      "source": "A_left",
      "nextSource": null,
      "zones": [
        "z16",
        "z12",
        "z10"
      ],
      "gates": [
        "103b",
        "102",
        "DE"
      ],
      "switchDirs": [
        "left",
        "left",
        null
      ],
      "TP": false,
      "transit": "left",
      "view": {
        "btn": {
          "value": "DE",
          "pos": {
            "DA": {
              "x": 2,
              "y": 6
            }
          }
        }
      }
    }
  },
  "stopBtn": {
    "AE_right": {
      "sources": [
        "AE_right"
      ],
      "view": {
        "pos": {
          "x": 0,
          "y": 1
        },
        "label": {
          "value": "C 111",
          "pos": {
            "x": 0,
            "y": 0
          }
        }
      }
    }
  },
  "ledLabels": {
    "announcement_AE": {
      "view": {
        "pos": {
          "x": 12,
          "y": 12
        },
        "label": {
          "value": "Annonce",
          "pos": {
            "x": 12,
            "y": 12
          },
          "above": true
        }
      }
    }
  },
  "trains": {
    "trainA": {
      "velocity": 20,
      "length": 30,
      "announcementTime": 5000,
      "arrivalTime": 5000,
      "maxStopTime": 15000,
      "baseSource": "AE_right",
      "baseAnnouncement": "announcement_AE"
    },
    "trainC": {
      "velocity": 20,
      "length": 30,
      "announcementTime": 5000,
      "arrivalTime": 5000,
      "maxStopTime": 15000,
      "baseSource": "AE_right",
      "baseAnnouncement": "announcement_AE"
    }
  }
}
},{}],4:[function(require,module,exports){
module.exports={
  // Durée du changement d'une aiguille en ms
  "switchChange": 1000,
  // Durée de clignotement des boutons en état "sauvegardé" en ms
  "blinkButtonInterval": 500,
  // Durée d'une annonce en ms
  "announcement": 5000,
  // Durée de redémarrage d'un train lorsqu'il est arrêté à un feu en ms
  "trainStartingDelay": 1000
}
},{}],5:[function(require,module,exports){
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function () {};
        }
        var names = name.split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = name.split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = name.split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = name.split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define === "function" && define.amd ? (define("eve", [], function() { return eve; })) : (glob.eve = eve));
})(this);

},{}],6:[function(require,module,exports){
// Snap.svg 0.4.0
// 
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// build: 2015-04-07

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function () {};
        }
        var names = name.split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = name.split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = name.split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = name.split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define === "function" && define.amd ? (define("eve", [], function() { return eve; })) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (typeof define == "function" && define.amd) {
        // Define as an anonymous module
        define(["eve"], function (eve) {
            return factory(glob, eve);
        });
    } else if (typeof exports != 'undefined') {
        // Next for Node.js or CommonJS
        var eve = require('eve');
        module.exports = factory(glob, eve);
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(window || this, function (window, eve) {

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16);
                       },
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
    },
    update = function () {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] +
                    (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
    frame = function () {
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            a.update();
        }
        len && requestAnimFrame(frame);
    },
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in gereal case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && requestAnimFrame(frame);
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < (1 / p)) {
            l = s * n * n;
        } else {
            if (n < (2 / p)) {
                n -= (1.5 / p);
                l = s * n * n + .75;
            } else {
                if (n < (2.5 / p)) {
                    n -= (2.25 / p);
                    l = s * n * n + .9375;
                } else {
                    n -= (2.625 / p);
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);
// Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function(root) {
Snap.version = "0.4.0";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.nodeType) {
            return wrap(w);
        }
        if (is(w, "array") && Snap.set) {
            return Snap.set.apply(Snap, w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            w = glob.doc.querySelector(String(w));
            return wrap(w);
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: root.window,
    doc: root.window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    reURLValue = /^url\(#?([^)]+)\)$/,
    separator = Snap._.separator = /[,\s]+/,
    whitespace = /[\s]/g,
    commaSpaces = /[\s]*,[\s]*/,
    hsrg = {hs: 1, rg: 1},
    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function (el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
        }
        if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
        }
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                    return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                    return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
            } else if (attr == "text") {
                return el.nodeValue;
            } else {
                return null;
            }
        }
        if (el.nodeType == 1) {
            for (var key in attr) if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                        el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                        el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                        el.setAttribute(key, val);
                    }
                } else {
                    el.removeAttribute(key);
                }
            }
        } else if ("text" in attr) {
            el.nodeValue = attr.text;
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  (type == "null" && o === null) ||
            (type == typeof o && o !== null) ||
            (type == "object" && o === Object(o)) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
/*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/
Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
};
/*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/
Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
};
/*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/
Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
};
/*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/
Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
};
/*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/
Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
};
/*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/
Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
};
/*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/
Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
};
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
};
/*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/
Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
};
/*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 > Parameters
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/
// Copied from http://bl.ocks.org/mbostock/8027637
Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
        var dx = p.x - x,
            dy = p.y - y;
        return dx * dx + dy * dy;
    }
    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity;

    // linear scan for coarse approximation
    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan, bestLength = scanLength, bestDistance = scanDistance;
        }
    }

    // binary search for precise estimate
    precision *= .5;
    while (precision > .5) {
        var before,
            after,
            beforeLength,
            afterLength,
            beforeDistance,
            afterDistance;
        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before, bestLength = beforeLength, bestDistance = beforeDistance;
        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after, bestLength = afterLength, bestDistance = afterDistance;
        } else {
            precision *= .5;
        }
    }

    best = {
        x: best.x,
        y: best.y,
        length: bestLength,
        distance: Math.sqrt(bestDistance)
    };
    return best;
}
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }
    
    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        o = h.o;
        h = h.h;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = (C == 0 ? null :
         V == r ? (g - b) / C :
         V == g ? (b - r) / C + 2 :
                  (r - g) / C + 4
        );
    H = ((H + 360) % 6) * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = (C == 0 ? null :
         M == r ? (g - b) / C :
         M == g ? (b - r) / C + 2 :
                  (r - g) / C + 4);
    H = ((H + 360) % 6) * 60 / 360;
    L = (M + m) / 2;
    S = (C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L));
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }
    
    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length > 2) {
                params = params.slice(0, 2);
            } else if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) ||
            (el.node.parentNode && wrap(el.node.parentNode)) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    return defs;
}
function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
}
Snap._.getSomeDefs = getSomeDefs;
Snap._.getSomeSVG = getSomeSVG;
function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"});
        svg.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        try {
            return mgr.getBBox().width;
        } catch (e) {
            return 0;
        }
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        try {
            return mgr.getBBox().height;
        } catch (e) {
            return 0;
        }
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    svg.removeChild(mgr);
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
// Hub garbage collector every 10s
setInterval(function () {
    for (var key in hub) if (hub[has](key)) {
        var el = hub[key],
            node = el.node;
        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
            delete hub[key];
        }
    }
}, 1e4);
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/
    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
    }
    if (this.type in {g: 1, mask: 1, pattern: 1, symbol: 1}) {
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
   /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        var doc = w.ownerDocument;
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
        return new Paper(dom);
    }
    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }
    return new Element(dom);
}

Snap._.make = make;
Snap._.wrap = wrap;
/*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/
Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
};
/*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/
Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;
    for (var i = 0, ii = ch.length; i < ii; i++) {
        out[i] = Snap(ch[i]);
    }
    return out;
};
function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
        var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
            children = root[i].children();
        o.push(item);
        if (children.length) {
            jsonFiller(children, item.childNodes = []);
        }
    }
}
/*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/
Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
};
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
(function (proto) {}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open((postData ? "POST" : "GET"), url, true);
        if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
};
glob.win.Snap = Snap;
return Snap;
}(window || this));

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix;
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function () {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = URL(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    // animation
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            delete el.anims[anim.id];
        });
        return el;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            var out = [[], [], []],
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                x, y, z, res;

            if (a && a instanceof Matrix) {
                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }

            for (x = 0; x < 3; x++) {
                for (y = 0; y < 3; y++) {
                    res = 0;
                    for (z = 0; z < 3; z++) {
                        res += m[x][z] * matrix[z][y];
                    }
                    out[x][y] = res;
                }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            return this.add(1, 0, 0, 1, x, y);
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = -row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + 
                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
                        (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\(#?([^)]+)\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    }(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value.type == "clipPath") {
                var clip = value;
            } else {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    }));
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 &&
                (value.node.firstChild.tagName == "radialGradient" ||
                value.node.firstChild.tagName == "linearGradient" ||
                value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient"
                   || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, {d: value});
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({d: value});
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({id: id});
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({id: id});
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({"xlink:href": "#" + id});
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function (chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) {
                        for (var i = 0; i < chunk.length; i++) {
                            out.appendChild(tuner(chunk[i]));
                        }
                    } else {
                        out.appendChild(glob.doc.createTextNode(chunk));
                    }
                    out.normalize && out.normalize();
                    return out;
                };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);


    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, {id: value.id});
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    }());
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while ((clazz = classes[j++])) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while ((clazz = classes[j++])) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while ((clazz = classes[j++])) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
            "+": function (x, y) {
                    return x + y;
                },
            "-": function (x, y) {
                    return x - y;
                },
            "/": function (x, y) {
                    return x / y;
                },
            "*": function (x, y) {
                    return x * y;
                }
        },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = (function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }());

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr ={
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = {d: d};
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({id: Snap._.id(id)});
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = {points: points};
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        function Gstops() {
            return this.selectAll("stop");
        }
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                    offset: +offset + "%"
                };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            this.node.appendChild(stop);
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length,
                start = 0,
                j = 0;
            function seed(i, end) {
                var step = (end - start) / (i - j);
                for (var k = j; k < i; k++) {
                    stops[k].offset = +(+start + step * (k - j)).toFixed(2);
                }
                j = i;
                start = end;
            }
            len--;
            for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
                seed(i, stops[i].offset);
            }
            stops[len].offset = stops[len].offset || 100;
            seed(len, stops[len].offset);
            for (i = 0; i <= len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({node: node});
                }
                node = next;
            }
        };
    }());
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0, 
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", +x + (+r), y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + ((j % 2) ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }
    
    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x, y, j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
            bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;


        return {
          min: {x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1])},
          max: {x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1])}
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d, pcom) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T: 1, Q: 1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
                            nx = d.x * 2 - d.bx;          // And reflect the previous
                            ny = d.y * 2 - d.by;          // command's control point relative to the current point.
                        }
                        else {                            // or some else or nothing
                            nx = d.x;
                            ny = d.y;
                        }
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
                            d.qx = d.x * 2 - d.qx;        // And make a reflection similar
                            d.qy = d.y * 2 - d.qy;        // to case "S".
                        }
                        else {                            // or something else or nothing
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            pcoms1 = [], // path commands of original path p
            pcoms2 = [], // path commands of original path p2
            pfirst = "", // temporary holder for original path command
            pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
            {
                pcoms1[i] = pfirst; // Save current path command
                i && ( pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) { // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function (i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r)
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
	this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function () {
                if (begin) {
                    this.b = begin;
                } else {
                    begin = this.b;
                }
            },
            cb = 0,
            set = this,
            callbacker = callback && function () {
                if (++cb == set.length) {
                    callback.call(this);
                }
            };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    Snap.Set = Set;
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
        t1 = Snap.parseTransformString(t1) || [];
        t2 = Snap.parseTransformString(t2) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if ((tt1[0] != tt2[0]) ||
                (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
                (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + (k++) + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(parseFloat(obj));
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (b instanceof Snap.Matrix) {
                b = b.toTransformString();
            }
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.svgTransform2string(b);
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = function (obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function (e) {
                var scrollY = getScroll("y", element),
                    scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                            var olde = e;
                            e = e.targetTouches[i];
                            e.originalEvent = olde;
                            e.preventDefault = preventTouch;
                            e.stopPropagation = stopTouch;
                            break;
                        }
                    }
                }
                var x = e.clientX + scrollX,
                    y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    
    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                        try {
                            this.events[i].f.call(this);
                        } catch (e) {}
                    }
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({el: el, start: start, init: init});
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].init);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };
    
    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (typeof blur == "string") {
            color = blur;
            opacity = color;
            blur = 4;
        }
        if (typeof color != "string") {
            opacity = color;
            color = "#000";
        }
        color = color || "#000";
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
//        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function () {
            return "T" + this.dx + "," + this.dy;
        };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
            break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
            break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
            break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
            break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
            break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

return Snap;
}));
},{"eve":5}],7:[function(require,module,exports){
"use strict";

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Alexis on 25/05/2016.
 */

module.exports = (_temp = _class = function Config() {
  _classCallCheck(this, Config);
}, _class.duration = require("../cfg/Simulation.cfg.json"), _temp);

},{"../cfg/Simulation.cfg.json":4}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snap = require("snapsvg");

/**
 *
 */
module.exports = (_temp = _class = function () {
    function DisplayManager() {
        _classCallCheck(this, DisplayManager);
    }

    _createClass(DisplayManager, [{
        key: "onChange",


        /**
         * Called when a change occurred on a Gate.
         */
        value: function onChange() {}
    }], [{
        key: "init",
        value: function init(_ini) {
            DisplayManager.paper = Snap(_ini.w, _ini.h);
            DisplayManager.paper.attr({
                viewBox: [0, 0, _ini.vw, _ini.vh].join(" "),
                style: "background-color:" + DisplayManager.cfg.color.background + ";display:block;margin:auto;"
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
            DisplayManager.paper.rect(_ini.grid.pos.x, _ini.grid.pos.y, _ini.grid.size.w, _ini.grid.size.h).attr(DisplayManager.cfg.attr.grid);
            // Grid lines
            for (var x = 1; x < _ini.grid.nbColumns; x++) {
                var vector = DisplayManager.convertVectorToGrid({ x: x, y: 0 });
                DisplayManager.paper.line(vector.x, vector.y, vector.x, vector.y + _ini.grid.size.h).attr(DisplayManager.cfg.attr.grid);
            }
            for (var y = 1; y < _ini.grid.nbRows; y++) {
                var _vector = DisplayManager.convertVectorToGrid({ x: 0, y: y });
                DisplayManager.paper.line(_vector.x, _vector.y, _vector.x + _ini.grid.size.w, _vector.y).attr(DisplayManager.cfg.attr.grid);
            }
        }
    }, {
        key: "convertVectorToGrid",
        value: function convertVectorToGrid(u) {
            return {
                x: DisplayManager.gridAttr.pos.x + u.x * DisplayManager.gridAttr.columnWidth,
                y: DisplayManager.gridAttr.pos.y + u.y * DisplayManager.gridAttr.rowHeight
            };
        }
    }, {
        key: "getSymmetricalPoints",
        value: function getSymmetricalPoints(points, xSym, ySym) {
            return points.map(function (point) {
                return {
                    x: xSym != null ? 2 * xSym - point.x : point.x,
                    y: ySym != null ? 2 * ySym - point.y : point.y
                };
            });
        }
    }, {
        key: "getSymmetricalRect",
        value: function getSymmetricalRect(rect, xSym, ySym) {
            var symmetricalPos = DisplayManager.getSymmetricalPoints([{ x: rect.x, y: rect.y }], xSym, ySym)[0];
            return {
                x: symmetricalPos.x - (xSym != null ? rect.w : 0),
                y: symmetricalPos.y - (ySym != null ? rect.h : 0),
                w: rect.w,
                h: rect.h
            };
        }
    }]);

    return DisplayManager;
}(), _class.cfg = require("../cfg/DisplayManager.cfg.json"), _temp);

},{"../cfg/DisplayManager.cfg.json":2,"snapsvg":6}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = require("./Config");

/**
 * OK
 */
module.exports = function () {
    function TrainManager(_trains, _routes, _sources) {
        var _this = this;

        _classCallCheck(this, TrainManager);

        this.waitingTrains = {};

        this.trains = _trains;
        this.routes = _routes;
        this.sources = _sources;

        this.trains.forEach(function (train) {
            train.onAnnounced = function () {
                return _this.onAnnounced(train);
            };
            train.onArrived = function () {
                return _this.onArrived(train);
            };
            train.onReleaseGates = function (gates) {
                return _this.onReleaseGates(train, gates);
            };
        });
        this.routes.forEach(function (route) {
            return route.onEstablished = function () {
                return _this.onEstablished(route);
            };
        });
        this.sources.forEach(function (source) {
            return _this.waitingTrains[source.id] = [];
        });
    }

    _createClass(TrainManager, [{
        key: "onAnnounced",
        value: function onAnnounced(train) {
            var ledLabel = train.baseAnnouncement;
            ledLabel.on();
            setTimeout(function () {
                return ledLabel.off();
            }, Config.duration.announcement);
        }
    }, {
        key: "onArrived",
        value: function onArrived(train) {
            var route = this.getRouteFromSource(train.baseSource);
            if (route == null || !this.setTrainOnRoute(train, route, false)) {
                if (this.waitingTrains[train.baseSource.id].indexOf(train) === -1) {
                    this.waitingTrains[train.baseSource.id].push(train);
                }
            }
        }
    }, {
        key: "onReleaseGates",
        value: function onReleaseGates(train, gates) {
            this.routes.filter(function (route) {
                if (route.currentTrain === train && !train.reserved) {
                    if (route.gates.every(function (g) {
                        return !g.isTrainOn;
                    })) {
                        route.currentTrain = null;
                        return true;
                    }

                    return route.isEstablished() && !route.isTP;
                } else {
                    return false;
                }
            }).forEach(function (route) {
                return route.autoReleaseGates(gates);
            });
        }
    }, {
        key: "onEstablished",
        value: function onEstablished(route) {
            this.setTrainOnRoute(this.waitingTrains[route.source.id].shift(), route, true);
        }
    }, {
        key: "setTrainOnRoute",
        value: function setTrainOnRoute(train, route, wasWaiting) {
            if (train != null && route.currentTrain == null) {
                route.currentTrain = train;
                train.reserveRoute();
                setTimeout(function () {
                    train.addRoute(route);
                    route.source.switchStoplight("on");
                }, wasWaiting ? Config.duration.trainStartingDelay : 0);
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "getRouteFromSource",
        value: function getRouteFromSource(source) {
            return this.routes.find(function (route) {
                return route.source === source && route.isEstablished();
            });
        }
    }]);

    return TrainManager;
}();

},{"./Config":7}],10:[function(require,module,exports){
"use strict";

var DisplayManager = require("./DisplayManager");
var Track = require("./objects/Track");
var Switch = require("./objects/Switch");
var Gate = require("./objects/Gate");
var Zone = require("./objects/Zone");
var Source = require("./objects/Source");
var Route = require("./objects/Route");
var StopBtn = require("./objects/StopBtn");
var LedLabel = require("./objects/LedLabel");
var Train = require("./objects/Train");
var TrainManager = require("./TrainManager");

document.body.onload = start;

function start() {
    DisplayManager.init(require("../cfg/DisplayGrid.cfg.json"));

    var gare = require("../cfg/Gare1.cfg.json");

    // Create gate and view gates
    var gates = {};
    Object.getOwnPropertyNames(gare.gates).forEach(function (gateName) {
        var gate = gare.gates[gateName];
        switch (gate.type) {
            case "Track":
                gates[gateName] = new Track(gateName, gate.view);
                break;
            case "Switch":
                gates[gateName] = new Switch(gateName, gate.view);
                break;
        }
    });

    // Add links
    gare.wires.forEach(function (wire) {
        return Gate.addLink(gates[wire[0]], wire[1], gates[wire[2]], wire[3]);
    });

    // Add combined switches
    gare.combinedSwitches.forEach(function (s) {
        return Switch.combinedSwitches(gates[s[0]], gates[s[1]]);
    });

    // Add zones
    var zones = {};
    Object.getOwnPropertyNames(gare.zones).forEach(function (zoneName) {
        var zone = gare.zones[zoneName];
        var zoneGates = zone.gates.map(function (name) {
            return gates[name];
        });
        zones[zoneName] = new Zone(zoneName, zoneGates, zone.view);
    });

    // Add sources
    var sources = {};
    Object.getOwnPropertyNames(gare.sources).forEach(function (sourceName) {
        var source = gare.sources[sourceName];
        sources[sourceName] = new Source(sourceName, source.view);
    });

    // Add stop btn
    var stopBtns = {};
    Object.getOwnPropertyNames(gare.stopBtn).forEach(function (btnName) {
        var btn = gare.stopBtn[btnName];
        var btnSources = btn.sources.map(function (name) {
            return sources[name];
        });
        stopBtns[btnName] = new StopBtn(btnName, btnSources, btn.view);
    });

    // Add routes
    var routes = {};
    Object.getOwnPropertyNames(gare.routes).forEach(function (routeName) {
        var route = gare.routes[routeName];
        var source = sources[route.source];
        var nextSource = route.nextSource && sources[route.nextSource];
        var routeZones = route.zones.map(function (name) {
            return zones[name];
        });
        var routeGates = route.gates.map(function (name) {
            return gates[name];
        });
        routes[routeName] = new Route(routeName, source, nextSource, routeZones, routeGates, route.switchDirs, route.transit, route.TP, route.view);
    });

    // Create led labels
    var ledLabels = {};
    Object.getOwnPropertyNames(gare.ledLabels).forEach(function (ledName) {
        var led = gare.ledLabels[ledName];
        ledLabels[ledName] = new LedLabel(ledName, led.view);
    });

    // Add trains
    var trains = {};
    Object.getOwnPropertyNames(gare.trains).forEach(function (trainName) {
        var train = gare.trains[trainName];
        var source = sources[train.baseSource];
        var ledLabel = ledLabels[train.baseAnnouncement];
        trains[trainName] = new Train(trainName, train.velocity, train.length, train.announcementTime, train.arrivalTime, train.maxStopTime, source, ledLabel);
    });

    var trainsArray = Object.getOwnPropertyNames(trains).map(function (trainName) {
        return trains[trainName];
    });
    var routesArray = Object.getOwnPropertyNames(routes).map(function (routeName) {
        return routes[routeName];
    });
    var sourcesArray = Object.getOwnPropertyNames(sources).map(function (sourceName) {
        return sources[sourceName];
    });
    var trainManager = new TrainManager(trainsArray, routesArray, sourcesArray);
}

},{"../cfg/DisplayGrid.cfg.json":1,"../cfg/Gare1.cfg.json":3,"./DisplayManager":8,"./TrainManager":9,"./objects/Gate":12,"./objects/LedLabel":13,"./objects/Route":14,"./objects/Source":15,"./objects/StopBtn":16,"./objects/Switch":17,"./objects/Track":18,"./objects/Train":19,"./objects/Zone":20}],11:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @abstract
 */

var El = function El(_id) {
    _classCallCheck(this, El);

    this.id = _id;
};

module.exports = El;

},{}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var El = require("./El");

/**
 * @abstract
 */

var Gate = function (_El) {
    _inherits(Gate, _El);

    function Gate() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Gate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Gate)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.routeType = "free", _this.isTrainOn = false, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Route type. Can be free
     * @type {string}
     */


    /**
     * True if a train is actually on the track.
     * @type {boolean}
     */


    _createClass(Gate, [{
        key: "lock",


        //////////////////////////////////////////////////
        // Logic
        //////////////////////////////////////////////////

        /**
         * Lock the gate. A locker has to be sent as first parameter. This locker will be the only once who can unlock.
         * @param locker - Any object.
         * @param isTP -
         * @constructor
         */
        value: function lock(locker, isTP) {
            var newRouteType = isTP ? "TP" : "DA";
            if (this._locker == null || this._locker === locker && this.routeType !== newRouteType) {
                this._locker = locker;
                this.routeType = newRouteType;
                this.updateView();
            }
        }
    }, {
        key: "unlock",
        value: function unlock(locker) {
            if (this._locker === locker) {
                this._locker = null;
                this.routeType = "free";
                this.updateView();
            }
        }
    }, {
        key: "isLocked",
        value: function isLocked() {
            return this._locker != null;
        }
    }, {
        key: "setTrain",
        value: function setTrain(isTrainOn) {
            this.isTrainOn = isTrainOn;
            this.updateView();
        }

        /**
         * @abstract
         */

    }, {
        key: "getLength",
        value: function getLength() {}

        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

        /**
         * @abstract
         */

    }, {
        key: "updateView",
        value: function updateView() {}
    }], [{
        key: "addLink",


        /**
         * Add a link between two Gate objects at the given ports.
         */
        value: function addLink(from, fromPort, to, toPort) {
            from.ports[fromPort] = to;
            to.ports[toPort] = from;
        }
    }]);

    return Gate;
}(El);

module.exports = Gate;

},{"./El":11}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayManager = require("../DisplayManager");
var El = require("./El");

var State = { ON: "ON", OFF: "OFF" };

/**
 *
 */

var LedLabel = function (_El) {
    _inherits(LedLabel, _El);

    function LedLabel(_id, _view) {
        _classCallCheck(this, LedLabel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LedLabel).call(this, _id));

        _this.state = State.OFF;
        _this.view = {};


        _this.createView(_view);
        _this.updateView();
        return _this;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    _createClass(LedLabel, [{
        key: "on",
        value: function on() {
            this.state = State.ON;
            this.updateView();
        }
    }, {
        key: "off",
        value: function off() {
            this.state = State.OFF;
            this.updateView();
        }

        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

    }, {
        key: "createView",
        value: function createView(_view) {
            // Create the led
            var r = DisplayManager.cfg.attr.led.size;
            this.view.led = DisplayManager.paper.circle(_view.pos.x, _view.pos.y, r).attr({
                fill: DisplayManager.cfg.color.background
            });

            // Create the label
            if (_view.label != null) {
                var labelX = _view.label.pos.x;
                var labelY = _view.label.pos.y + DisplayManager.cfg.attr.ledLabel.fontSize * 0.37 + DisplayManager.cfg.attr.ledLabel.offsetY * (_view.label.above ? -1 : 1);
                DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.ledLabel);
            }
        }
    }, {
        key: "updateView",
        value: function updateView() {
            // Update the led
            this.view.led.attr({
                fill: DisplayManager.cfg.color.led[this.state === State.ON ? "on" : "off"]
            });
        }
    }]);

    return LedLabel;
}(El);

module.exports = LedLabel;

},{"../DisplayManager":8,"./El":11}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayManager = require("../DisplayManager");
var El = require("./El");
var Source = require("./Source");
var Zone = require("./Zone");
var Gate = require("./Gate");
var Switch = require("./Switch");
var Config = require("../Config");
var Train = require("./Train");

var State = { SAVED: "SAVED", PREPARING: "PREPARING", ESTABLISHED: "ESTABLISHED", RELEASED: "RELEASED" };

/**
 *
 */

var Route = function (_El) {
    _inherits(Route, _El);

    function Route(_id, _source, _nextSource, _zones, _gates, _switchDirs, _transit, _TP, _view) {
        _classCallCheck(this, Route);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Route).call(this, _id));

        _this.isTP = false;
        _this.state = State.RELEASED;
        _this.currentTrain = null;
        _this.gatesByZone = {};
        _this.notFreeZones = [];
        _this.view = {};
        _this.timeoutBlink = null;


        _this.hasTP = _TP;
        _this.source = _source;
        _this.nextSource = _nextSource;
        _this.transit = _transit;
        _this.zones = _zones;
        _this.gates = _gates;
        _this.switchDirs = _switchDirs;

        _this.createView(_view);
        _this.updateView();

        _this.zones.forEach(function (zone) {
            return _this.gatesByZone[zone.id] = zone.gates.filter(function (gate) {
                return _this.gates.indexOf(gate) >= 0;
            });
        });

        setInterval(function () {
            return _this.update();
        }, 100);
        return _this;
    }

    _createClass(Route, [{
        key: "changeState",
        value: function changeState(state) {
            if (state === State.RELEASED) {
                this.source.switchStoplight("on");
            }
            this.state = state;
            this.updateView();
        }
    }, {
        key: "changeTP",
        value: function changeTP(TP) {
            this.isTP = TP;
            this.updateView();
        }

        //////////////////////////////////////////////////
        // Logic
        //////////////////////////////////////////////////

        /**
         * Called when a click on the route button is pressed
         * @param routeType
         */

    }, {
        key: "onClick",
        value: function onClick(routeType) {
            var TP = routeType === "TP";

            switch (this.state) {
                case State.RELEASED:
                    this.order(TP);
                    break;
                case State.SAVED:
                case State.PREPARING:
                case State.ESTABLISHED:
                    if (this.notFreeZones.length === this.zones.length || this.state !== State.ESTABLISHED) {
                        if (this.hasTP && TP !== this.isTP) {
                            this.changeTP(TP);
                        } else {
                            this.manualRelease();
                        }
                    }
                    break;
            }
        }
    }, {
        key: "update",
        value: function update() {
            switch (this.state) {
                case State.SAVED:
                    this.save();
                    break;
                case State.PREPARING:
                    this.prepare();
                    break;
            }
        }

        /**
         * Order a route. If all transits are free, go to Save() step.
         * @param TP - true if TP mode is asked.
         * @constructor
         */

    }, {
        key: "order",
        value: function order(TP) {
            if (this.state === State.RELEASED) {
                if (true || this.areAllCompatibleTransitFree()) {
                    // TODO nez à nez ou dos à dos
                    this.isTP = TP;
                    this.save();
                }
            }
        }

        /**
         * Save a route. If all opposite transits are free, go to Prepare() step.
         * @constructor
         */

    }, {
        key: "save",
        value: function save() {
            this.changeState(State.SAVED);
            this.notFreeZones = this.zones.slice();
            if (this.areAllTransitFree()) {
                this.prepare();
            }
        }

        /**
         * Prepare a route. Change all switches if incorrect and then go to Interlock() step.
         * @constructor
         */

    }, {
        key: "prepare",
        value: function prepare() {
            if (this.state !== State.PREPARING) {
                this.changeState(State.PREPARING);
                this.lockTransits();
                this.moveSwitches();
            }
            if (this.areAllSwitchesCorrect()) {
                this.establish();
            }
        }

        /**
         * Establish the route by switch off the stop lights.
         * @constructor
         */

    }, {
        key: "establish",
        value: function establish() {
            this.changeState(State.ESTABLISHED);
            this.source.switchStoplight("off");
            this.onEstablished();
            this.showInTCO();
        }
    }, {
        key: "onEstablished",
        value: function onEstablished() {}
    }, {
        key: "isEstablished",
        value: function isEstablished() {
            return this.state === State.ESTABLISHED;
        }
    }, {
        key: "manualRelease",
        value: function manualRelease() {
            // TODO : Cant release if a train is in the ZaP
            if (this.currentTrain == null) {
                this.changeState(State.RELEASED);
                this.hideInTCO();
                this.unlockTransits();
            }
        }
    }, {
        key: "autoReleaseGates",
        value: function autoReleaseGates(gates) {
            var _this2 = this;

            this.notFreeZones = this.notFreeZones.filter(function (zone) {
                var everyGatesAreFreeInTheZone = _this2.gatesByZone[zone.id].every(function (gate) {
                    return gates.indexOf(gate) >= 0;
                });
                if (everyGatesAreFreeInTheZone && !_this2.isTP) {
                    _this2.unlockTransit(zone);
                    _this2.hideZoneInTCO(zone);
                }
                return !everyGatesAreFreeInTheZone;
            });

            if (!this.isTP && this.notFreeZones.length === 1) {
                var zone = this.notFreeZones.pop();
                this.unlockTransit(zone);
                this.hideZoneInTCO(zone);
            }

            // If all zones are free, release the route
            if (this.notFreeZones.length === 0) {
                if (!this.isTP) {
                    this.changeState(State.RELEASED);
                } else {
                    this.notFreeZones = this.zones.slice();
                    this.establish();
                }
            }
        }

        //////////////////////////////////////////////////
        // Logic helpers
        //////////////////////////////////////////////////

    }, {
        key: "areAllTransitFree",
        value: function areAllTransitFree() {
            return this.currentTrain == null && this.areAllCompatibleTransitFree() && this.areAllOppositeTransitFree();
        }

        /**
         * Return true if all compatible transit (eg. in the way the route is, for example all "left" transit) are free to use.
         */

    }, {
        key: "areAllCompatibleTransitFree",
        value: function areAllCompatibleTransitFree() {
            var _this3 = this;

            return this.zones.every(function (zone) {
                return !zone.isLocked(_this3.transit);
            });
        }

        /**
         * Return true if all opposite transit are free
         */

    }, {
        key: "areAllOppositeTransitFree",
        value: function areAllOppositeTransitFree() {
            var transitName = this.transit === "left" ? "right" : "left";
            return this.zones.every(function (zone) {
                return !zone.isLocked(transitName);
            });
        }
    }, {
        key: "moveSwitches",
        value: function moveSwitches() {
            var _this4 = this;

            this.gates.forEach(function (gate, i) {
                if (gate instanceof Switch) {
                    gate.moveTo(_this4.switchDirs[i]);
                }
            });
        }
    }, {
        key: "areAllSwitchesCorrect",
        value: function areAllSwitchesCorrect() {
            var _this5 = this;

            return this.gates.every(function (gate, i) {
                if (gate instanceof Switch) {
                    return gate.matchState(_this5.switchDirs[i]);
                } else {
                    return true;
                }
            });
        }
    }, {
        key: "lockTransits",
        value: function lockTransits() {
            var _this6 = this;

            this.zones.forEach(function (zone) {
                return zone.lock(_this6, _this6.transit);
            });
        }
    }, {
        key: "unlockTransits",
        value: function unlockTransits() {
            var _this7 = this;

            this.zones.forEach(function (zone) {
                return _this7.unlockTransit(zone);
            });
        }
    }, {
        key: "unlockTransit",
        value: function unlockTransit(zone) {
            zone.unlock(this, this.transit);
        }
    }, {
        key: "showInTCO",
        value: function showInTCO() {
            var _this8 = this;

            this.gates.forEach(function (gate) {
                return gate.lock(_this8, _this8.isTP);
            });
        }
    }, {
        key: "hideInTCO",
        value: function hideInTCO() {
            var _this9 = this;

            this.zones.forEach(function (zone) {
                return _this9.hideZoneInTCO(zone);
            });
        }
    }, {
        key: "hideZoneInTCO",
        value: function hideZoneInTCO(zone) {
            var _this10 = this;

            this.gatesByZone[zone.id].forEach(function (gate) {
                return gate.unlock(_this10);
            });
        }

        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

    }, {
        key: "createView",
        value: function createView(_view) {
            var _this11 = this;

            // Create the label
            if (_view.btn != null) {
                this.view.textBg = {};
                Object.getOwnPropertyNames(_view.btn.pos).forEach(function (routeType) {
                    var btnPos = DisplayManager.convertVectorToGrid(_view.btn.pos[routeType]);

                    // Create the background
                    var padding = DisplayManager.cfg.attr.routeBtnBg[routeType].padding;
                    _this11.view.textBg[routeType] = DisplayManager.paper.rect(btnPos.x + padding, btnPos.y + padding, DisplayManager.gridAttr.columnWidth - 2 * padding, DisplayManager.gridAttr.rowHeight - 2 * padding).attr(DisplayManager.cfg.attr.routeBtnBg[routeType]);

                    // Create the text
                    var text = DisplayManager.paper.text(btnPos.x + DisplayManager.gridAttr.columnWidth / 2, btnPos.y + DisplayManager.gridAttr.rowHeight / 2 + DisplayManager.cfg.attr.routeBtn.offsetY, _view.btn.value).attr(DisplayManager.cfg.attr.routeBtn);

                    DisplayManager.paper.group(_this11.view.textBg[routeType], text).attr({ cursor: "pointer" }).click(function () {
                        return _this11.onClick(routeType);
                    });
                });
            }
            setInterval(function () {
                return _this11.updateView();
            }, 100);
        }
    }, {
        key: "updateView",
        value: function updateView() {
            if (this.view.textBg != null) {
                var btnDA = "off";
                var btnTP = "off";

                switch (this.state) {
                    case State.ESTABLISHED:
                    case State.PREPARING:
                        btnDA = this.isTP ? "off" : "on";
                        btnTP = this.isTP ? "on" : "off";
                        break;
                    case State.SAVED:
                        var timeBetweenBlink = Config.duration.blinkButtonInterval;
                        if (Date.now() % (timeBetweenBlink * 2) < timeBetweenBlink) {
                            !this.isTP && (btnDA = btnDA === "off" ? "on" : "off");
                            this.isTP && (btnTP = btnTP === "off" ? "on" : "off");
                        }
                        break;
                }

                this.view.textBg.DA.attr({
                    fill: DisplayManager.cfg.color.routeBtnBg.DA[btnDA]
                });
                this.hasTP && this.view.textBg.TP.attr({
                    fill: DisplayManager.cfg.color.routeBtnBg.TP[btnTP]
                });
            }
        }
    }]);

    return Route;
}(El);

module.exports = Route;

},{"../Config":7,"../DisplayManager":8,"./El":11,"./Gate":12,"./Source":15,"./Switch":17,"./Train":19,"./Zone":20}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayManager = require("../DisplayManager");
var El = require("./El");

/**
 *
 */

var Source = function (_El) {
    _inherits(Source, _El);

    function Source(_id, _view) {
        _classCallCheck(this, Source);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Source).call(this, _id));

        _this.stoplight = "on";
        _this.manualStop = "off";
        _this.ZAp = "off";
        _this.view = {};


        _this.createView(_view);
        _this.updateView();
        return _this;
    }

    _createClass(Source, [{
        key: "setManualStop",
        value: function setManualStop(state) {
            this.manualStop = state;
            this.updateView();
        }
    }, {
        key: "switchStoplight",
        value: function switchStoplight(state) {
            this.stoplight = state;
            this.updateView();
        }
    }, {
        key: "createView",
        value: function createView(_view) {
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
            var line = DisplayManager.getSymmetricalPoints([{
                x: _view.stoplight.pos.x - rectAttr.w,
                y: _view.stoplight.pos.y - rectAttr.line.h + offsetY
            }, {
                x: _view.stoplight.pos.x - rectAttr.w - rectAttr.line.w,
                y: _view.stoplight.pos.y - rectAttr.line.h + offsetY
            }, {
                x: _view.stoplight.pos.x - rectAttr.w - rectAttr.line.w,
                y: _view.stoplight.pos.y + offsetY
            }], symX, symY);
            DisplayManager.paper.polyline(line.map(function (p) {
                return [p.x, p.y];
            })).attr(rectAttr);

            // Create the stoplight label
            this.view.stoplightLabel = DisplayManager.paper.text(rectParams.x + rectParams.w / 2, rectParams.y + DisplayManager.cfg.attr.stoplightLabel["offsetY_" + _view.stoplight.dir], _view.stoplight.value).attr(DisplayManager.cfg.attr.stoplightLabel);

            // Create the ZAp
            if (_view.ZAp === true) {
                // Create the rect around the Zap light
                var zapAttr = DisplayManager.cfg.attr.ZAp;
                var zapParams = DisplayManager.getSymmetricalRect({
                    x: _view.stoplight.pos.x + zapAttr.offsetX,
                    y: _view.stoplight.pos.y + zapAttr.offsetY - zapAttr.h,
                    w: zapAttr.w,
                    h: zapAttr.h
                }, symX, symY);
                DisplayManager.paper.rect(zapParams.x, zapParams.y, zapParams.w, zapParams.h).attr(zapAttr);

                // Create the circle
                this.view.ZAp = DisplayManager.paper.circle(zapParams.x + zapParams.w / 2, zapParams.y + zapParams.h / 2, zapParams.w * zapAttr.circleRatio);

                // Create the legend
                DisplayManager.paper.text(zapParams.x + zapParams.w / 2, zapParams.y + DisplayManager.cfg.attr.ZApLabel["offsetY_" + _view.stoplight.dir], "ZAp").attr(DisplayManager.cfg.attr.ZApLabel);
            }

            // Create the label
            if (_view.label != null) {
                var labelPos = DisplayManager.convertVectorToGrid(_view.label.pos);

                // Create the background
                DisplayManager.paper.rect(labelPos.x, labelPos.y, DisplayManager.gridAttr.columnWidth, DisplayManager.gridAttr.rowHeight).attr(DisplayManager.cfg.attr.sourceLabelBg);

                // Create the text
                this.view.label = DisplayManager.paper.text(labelPos.x + DisplayManager.gridAttr.columnWidth / 2, labelPos.y + DisplayManager.gridAttr.rowHeight / 2 + DisplayManager.cfg.attr.sourceLabel.offsetY, _view.label.value).attr(DisplayManager.cfg.attr.sourceLabel);
            }
        }
    }, {
        key: "updateView",
        value: function updateView() {
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
    }]);

    return Source;
}(El);

module.exports = Source;

},{"../DisplayManager":8,"./El":11}],16:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayManager = require("../DisplayManager");
var El = require("./El");
var Source = require("./Source");
var Gate = require("./Gate");

/**
 *
 */

var StopBtn = function (_El) {
    _inherits(StopBtn, _El);

    function StopBtn(_id, _sources, _view) {
        _classCallCheck(this, StopBtn);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StopBtn).call(this, _id));

        _this.sources = null;
        _this.state = "off";
        _this.view = {};


        _this.sources = _sources;

        _this.createView(_view);
        _this.updateView(false);
        return _this;
    }

    _createClass(StopBtn, [{
        key: "onClick",
        value: function onClick() {
            var _this2 = this;

            this.state = this.state === "on" ? "off" : "on";
            this.sources.forEach(function (source) {
                return source.setManualStop(_this2.state);
            });
            this.updateView();
        }
    }, {
        key: "createView",
        value: function createView(_view) {
            var _this3 = this;

            // Create the circle
            var btnPos = DisplayManager.convertVectorToGrid(_view.pos);
            this.view.circleBg = DisplayManager.paper.circle(btnPos.x + DisplayManager.gridAttr.columnWidth / 2, btnPos.y + DisplayManager.gridAttr.rowHeight / 2, Math.min(DisplayManager.gridAttr.columnWidth, DisplayManager.gridAttr.rowHeight) / 2 - DisplayManager.cfg.attr.stopBtnCircle.padding).attr(DisplayManager.cfg.attr.stopBtnCircle);

            // Create the arrow
            var points = DisplayManager.cfg.attr.stopBtnArrow._points.map(function (p, i) {
                if (i % 2 === 0) {
                    return btnPos.x + p * DisplayManager.gridAttr.columnWidth;
                } else {
                    return btnPos.y + p * DisplayManager.gridAttr.rowHeight;
                }
            });
            this.view.arrow = DisplayManager.paper.polygon(points).attr(DisplayManager.cfg.attr.stopBtnArrow);

            DisplayManager.paper.group(this.view.circleBg, this.view.arrow).attr({ cursor: "pointer" }).click(function () {
                return _this3.onClick();
            });
        }
    }, {
        key: "updateView",
        value: function updateView() {
            var _this4 = this;

            var animated = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            this.view.circleBg.attr({
                fill: DisplayManager.cfg.color.stopBtnCircle[this.state]
            });
            Snap.animate(0, 180, function (value) {
                _this4.view.arrow.transform("r" + (_this4.state === "on" ? value - 180 : -value));
            }, animated ? 100 : 0);
        }
    }]);

    return StopBtn;
}(El);

module.exports = StopBtn;

},{"../DisplayManager":8,"./El":11,"./Gate":12,"./Source":15}],17:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snap = require("snapsvg");

var Gate = require("./Gate");
var DisplayManager = require("../DisplayManager");
var Config = require("../Config");
var StopBtn = require("./StopBtn");

var State = { LEFT: "LEFT", RIGHT: "RIGHT", UNKNOWN: "UNKNOWN" };

/**
 *
 */

var Switch = function (_Gate) {
    _inherits(Switch, _Gate);

    function Switch(_id, _view) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, _id));

        _this.ports = {};
        _this.state = State.LEFT;
        _this.isMoving = false;
        _this.combinedSwitch = null;
        _this.view = {
            leftLef: null,
            rightLef: null
        };

        _this.createView(_view);
        _this.updateView();
        return _this;
    }

    _createClass(Switch, [{
        key: "moveTo",


        //////////////////////////////////////////////////
        // Logic
        //////////////////////////////////////////////////

        value: function moveTo(dir) {
            var _this2 = this;

            var stateToGo = Switch.convertStringToState(dir);

            if (this.isMoving || this.state === stateToGo || this.combinedSwitch && this.combinedSwitch.isLocked()) return;
            this.isMoving = true;

            this.state = State.UNKNOWN;
            this.updateView();
            setTimeout(function () {
                _this2.state = stateToGo;
                _this2.updateView();
                _this2.isMoving = false;
            }, Config.duration.switchChange);

            this.combinedSwitch && this.combinedSwitch.moveTo(dir);
        }
    }, {
        key: "matchState",
        value: function matchState(dir) {
            return this.state === Switch.convertStringToState(dir);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            switch (this.state) {
                case State.LEFT:
                    return this.leftLength;
                case State.RIGHT:
                    return this.rightLength;
                case State.UNKNOWN:
                    return 0;
            }
        }
    }, {
        key: "createView",


        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

        value: function createView(_view) {
            var _this3 = this;

            // Convert points
            var centerPoint = [_view.center.x, _view.center.y];
            var lonePoints = _view.lone.reduce(function (pre, cur) {
                return pre.concat([cur.x, cur.y]);
            }, []);
            var leftPoints = _view.left.reduce(function (pre, cur) {
                return pre.concat([cur.x, cur.y]);
            }, []);
            var rightPoints = _view.right.reduce(function (pre, cur) {
                return pre.concat([cur.x, cur.y]);
            }, []);

            // Create the two lines lone<->left and lone<->right
            var loneLeftPoints = lonePoints.concat(centerPoint).concat(leftPoints);
            var loneRightPoints = lonePoints.concat(centerPoint).concat(rightPoints);
            this.view.leftLine = DisplayManager.paper.polyline(loneLeftPoints).attr(DisplayManager.cfg.attr.line);
            this.view.rightLine = DisplayManager.paper.polyline(loneRightPoints).attr(DisplayManager.cfg.attr.line);

            // Compute length
            var leftPath = DisplayManager.paper.path("M" + [lonePoints, centerPoint, leftPoints].map(function (p) {
                return p.join(" ");
            }).join("L"));
            this.leftLength = leftPath.getTotalLength();
            leftPath.remove();
            var rightPath = DisplayManager.paper.path("M" + [lonePoints, centerPoint, rightPoints].map(function (p) {
                return p.join(" ");
            }).join("L"));
            this.rightLength = rightPath.getTotalLength();
            rightPath.remove();

            // Create the leds
            ["left", "right"].forEach(function (dir) {
                var path = "M" + [_view.center].concat(_view[dir]).map(function (p) {
                    return p.x + "," + p.y;
                }).join("L");
                var ledPos = Snap.path.getPointAtLength(path, DisplayManager.cfg.attr.switchLed.distanceFromCenter);
                var r = DisplayManager.cfg.attr.line.strokeWidth * DisplayManager.cfg.attr.switchLed.sizeRatio;
                _this3.view[dir + "Led"] = DisplayManager.paper.circle(ledPos.x, ledPos.y, r).attr({
                    fill: DisplayManager.cfg.color.background
                });
            });

            // Create the label
            if (_view.label != null) {
                var labelX = _view.label.pos.x;
                var labelY = _view.label.pos.y + DisplayManager.cfg.attr.switchLabel.fontSize * 0.37 + DisplayManager.cfg.attr.switchLabel.offsetY * (_view.label.above ? -1 : 1);
                DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.switchLabel);
            }
        }
    }, {
        key: "updateView",
        value: function updateView() {
            // Update the switch state
            this.view.leftLed.attr({
                fill: DisplayManager.cfg.color.switchLed[this.state === State.LEFT ? "on" : "off"]
            });
            this.view.rightLed.attr({
                fill: DisplayManager.cfg.color.switchLed[this.state === State.RIGHT ? "on" : "off"]
            });

            var leftTrainRoute = this.state === State.LEFT ? this.isTrainOn ? "trainOn" : this.routeType : "free";
            var rightTrainRoute = this.state === State.RIGHT ? this.isTrainOn ? "trainOn" : this.routeType : "free";
            this.view.leftLine.attr({
                stroke: DisplayManager.cfg.color.route[leftTrainRoute]
            });
            this.view.rightLine.attr({
                stroke: DisplayManager.cfg.color.route[rightTrainRoute]
            });

            if (this.state === State.RIGHT) {
                this.view.rightLine.insertAfter(this.view.leftLine);
            } else {
                this.view.leftLine.insertAfter(this.view.rightLine);
            }
        }
    }], [{
        key: "combinedSwitches",
        value: function combinedSwitches(switch1, switch2) {
            switch1.combinedSwitch = switch2;
            switch2.combinedSwitch = switch1;
        }
    }, {
        key: "convertStringToState",
        value: function convertStringToState(s) {
            switch (s) {
                case "left":
                    return State.LEFT;
                case "right":
                    return State.RIGHT;
                default:
                    return State.UNKNOWN;
            }
        }
    }]);

    return Switch;
}(Gate);

module.exports = Switch;

},{"../Config":7,"../DisplayManager":8,"./Gate":12,"./StopBtn":16,"snapsvg":6}],18:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gate = require("./Gate");
var DisplayManager = require("../DisplayManager");

/**
 *
 */

var Track = function (_Gate) {
    _inherits(Track, _Gate);

    function Track(_id, _view) {
        _classCallCheck(this, Track);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Track).call(this, _id));

        _this.ports = {};
        _this.view = {};

        _this.createView(_view);
        _this.updateView();
        return _this;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    _createClass(Track, [{
        key: "getLength",
        value: function getLength() {
            return this.length;
        }

        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

    }, {
        key: "createView",
        value: function createView(_view) {
            // Create the line
            var points = _view.line.reduce(function (pre, cur) {
                return pre.concat([cur.x, cur.y]);
            }, []);
            this.view.line = DisplayManager.paper.polyline(points).attr(DisplayManager.cfg.attr.line);

            // Compute length
            var path = DisplayManager.paper.path("M" + _view.line.reduce(function (pre, cur) {
                return pre.concat([cur.x, cur.y].join(" "));
            }, []).join("L"));
            this.length = path.getTotalLength();
            path.remove();

            // Create the label
            if (_view.label != null) {
                var labelX = _view.label.pos.x;
                var labelY = _view.label.pos.y + DisplayManager.cfg.attr.trackLabel["font-size"] * 0.335;
                var txt = DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.trackLabel);
                var bbox = txt.getBBox();
                var bgX = bbox.x + bbox.w / 2;
                var bgY = bbox.y + bbox.h / 2;
                var bgR = Math.max(bbox.w, bbox.h) * DisplayManager.cfg.attr.trackBgLabel.sizeCoeff;
                var txtBg = DisplayManager.paper.circle(bgX, bgY, bgR).attr(DisplayManager.cfg.attr.trackBgLabel);
                txtBg.insertBefore(txt);
            }
        }
    }, {
        key: "updateView",
        value: function updateView() {
            this.view.line.attr({
                stroke: DisplayManager.cfg.color.route[this.isTrainOn ? "trainOn" : this.routeType]
            });
        }
    }]);

    return Track;
}(Gate);

module.exports = Track;

},{"../DisplayManager":8,"./Gate":12}],19:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var El = require("./El");

/**
 *
 */

var Train = function (_El) {
    _inherits(Train, _El);

    function Train(_id, _velocity, _length, _announcementTime, _arrivalTime, _maxStopTime, _baseSource, _baseAnnouncement) {
        _classCallCheck(this, Train);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Train).call(this, _id));

        _this.gates = [];
        _this.pos = 0;
        _this.reserved = false;
        _this.updateIntervalID = null;

        _this.velocity = _velocity;
        _this.length = _length;
        _this.announcementTime = _announcementTime;
        _this.arrivalTime = _arrivalTime;
        _this.maxStopTime = _maxStopTime;

        _this.baseSource = _baseSource;
        _this.baseAnnouncement = _baseAnnouncement;
        _this.baseTime = Date.now();

        setTimeout(function () {
            return _this.onAnnounced();
        }, _this.announcementTime);
        setTimeout(function () {
            return _this.onArrived();
        }, _this.arrivalTime);
        var t = Date.now();
        _this.update = function () {
            var now = Date.now();
            _this._update((now - t) / 1000);
            t = now;
        };
        _this.updateIntervalID = setInterval(_this.update, 500);
        return _this;
    }

    _createClass(Train, [{
        key: "onAnnounced",
        value: function onAnnounced() {}
    }, {
        key: "onArrived",
        value: function onArrived() {}

        //////////////////////////////////////////////////
        // Logic
        //////////////////////////////////////////////////

    }, {
        key: "addRoute",
        value: function addRoute(route) {
            this.reserved = false;
            this.gates = this.gates.concat(route.gates);
            this.baseSource = route.nextSource;
            this.update();
        }
    }, {
        key: "reserveRoute",
        value: function reserveRoute() {
            this.reserved = true;
        }
    }, {
        key: "_update",
        value: function _update(dt) {
            if (this.gates.length === 0) {
                return;
            }

            var dist = this.velocity * dt;
            var gateInfo = this.getGateInfoByPos(this.pos + dist);

            if (gateInfo.index < this.gates.length || this.baseSource == null) {
                this.pos = this.pos + dist;
                this.updateGatesState();
            } else {
                this.pos = gateInfo.end;
                this.updateGatesState();
                if (!this.reserved) {
                    this.onArrived();
                }
            }
        }

        //////////////////////////////////////////////////
        // Logic helpers
        //////////////////////////////////////////////////

    }, {
        key: "updateGatesState",
        value: function updateGatesState() {
            if (this.pos === 0) {
                return;
            }

            var minIndex = this.getGateInfoByPos(this.pos - this.length).index;
            var maxIndex = this.getGateInfoByPos(this.pos).index;
            this.gates.forEach(function (gate, i) {
                gate.setTrain(minIndex <= i && i <= maxIndex);
            });
            this.onReleaseGates(this.gates.slice(0, minIndex));

            if (minIndex === this.gates.length && this.baseSource == null) {
                clearInterval(this.updateIntervalID);
            }
        }
    }, {
        key: "onReleaseGates",
        value: function onReleaseGates() {}
    }, {
        key: "getGateInfoByPos",
        value: function getGateInfoByPos(pos) {
            var iPos = 0;
            for (var i = 0; i < this.gates.length; i++) {
                iPos += this.gates[i].getLength();
                if (iPos > pos) {
                    return {
                        index: i,
                        end: iPos
                    };
                }
            }

            return {
                index: this.gates.length,
                end: iPos
            };
        }
    }]);

    return Train;
}(El);

module.exports = Train;

},{"./El":11}],20:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayManager = require("../DisplayManager");
var El = require("./El");

var Zone = function (_El) {
    _inherits(Zone, _El);

    function Zone(_id, _gates, _view) {
        _classCallCheck(this, Zone);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Zone).call(this, _id));

        _this.transit = {
            left: null,
            right: null
        };
        _this.view = {};


        _this.gates = _gates;

        _this.createView(_view);
        _this.updateView();
        return _this;
    }

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    _createClass(Zone, [{
        key: "lock",
        value: function lock(locker, _transit) {
            if (this.transit[_transit] == null) {
                this.transit[_transit] = locker;
            }
        }
    }, {
        key: "unlock",
        value: function unlock(locker, _transit) {
            if (this.isLocked(_transit) && this.transit[_transit] === locker) {
                this.transit[_transit] = null;
            }
        }
    }, {
        key: "isLocked",
        value: function isLocked(_transit) {
            return this.transit[_transit] != null;
        }

        //////////////////////////////////////////////////
        // View
        //////////////////////////////////////////////////

    }, {
        key: "createView",
        value: function createView(_view) {
            // Create the label
            if (_view.label != null) {
                var labelX = _view.label.pos.x;
                var labelY = _view.label.pos.y + DisplayManager.cfg.attr.zoneLabel["font-size"] * 0.4 + DisplayManager.cfg.attr.zoneLabel.offsetY * (_view.label.above ? -1 : 1);
                this.view.text = DisplayManager.paper.text(labelX, labelY, _view.label.value).attr(DisplayManager.cfg.attr.zoneLabel);
            }
        }
    }, {
        key: "updateView",
        value: function updateView() {}
    }]);

    return Zone;
}(El);

module.exports = Zone;

},{"../DisplayManager":8,"./El":11}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjZmcvRGlzcGxheUdyaWQuY2ZnLmpzb24iLCJjZmcvRGlzcGxheU1hbmFnZXIuY2ZnLmpzb24iLCJjZmcvR2FyZTEuY2ZnLmpzb24iLCJjZmcvU2ltdWxhdGlvbi5jZmcuanNvbiIsIm5vZGVfbW9kdWxlcy9ldmUvZXZlLmpzIiwibm9kZV9tb2R1bGVzL3NuYXBzdmcvZGlzdC9zbmFwLnN2Zy5qcyIsInNyY1xcQ29uZmlnLmpzIiwic3JjXFxEaXNwbGF5TWFuYWdlci5qcyIsInNyY1xcVHJhaW5NYW5hZ2VyLmpzIiwic3JjXFxtYWluLmpzIiwic3JjXFxvYmplY3RzXFxFbC5qcyIsInNyY1xcb2JqZWN0c1xcR2F0ZS5qcyIsInNyY1xcb2JqZWN0c1xcTGVkTGFiZWwuanMiLCJzcmNcXG9iamVjdHNcXFJvdXRlLmpzIiwic3JjXFxvYmplY3RzXFxTb3VyY2UuanMiLCJzcmNcXG9iamVjdHNcXFN0b3BCdG4uanMiLCJzcmNcXG9iamVjdHNcXFN3aXRjaC5qcyIsInNyY1xcb2JqZWN0c1xcVHJhY2suanMiLCJzcmNcXG9iamVjdHNcXFRyYWluLmpzIiwic3JjXFxvYmplY3RzXFxab25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25aQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TUFBTSxLQUFOLENBQVksR0FBWixDQUFnQixDQUFoQixHQUNQLGVBQWUsR0FBZixDQUFtQixJQUFuQixDQUF3QixTQUF4QixDQUFrQyxXQUFsQyxJQUFpRCxHQUQxQyxHQUVQLGVBQWUsR0FBZixDQUFtQixJQUFuQixDQUF3QixTQUF4QixDQUFrQyxPQUFsQyxJQUE2QyxNQUFNLEtBQU4sQ0FBWSxLQUFaLEdBQW9CLENBQUMsQ0FBckIsR0FBeUIsQ0FBdEUsQ0FGTjtBQUdBLHFCQUFLLElBQUwsQ0FBVSxJQUFWLEdBQWlCLGVBQWUsS0FBZixDQUFxQixJQUFyQixDQUEwQixNQUExQixFQUFrQyxNQUFsQyxFQUEwQyxNQUFNLEtBQU4sQ0FBWSxLQUF0RCxFQUE2RCxJQUE3RCxDQUFrRSxlQUFlLEdBQWYsQ0FBbUIsSUFBbkIsQ0FBd0IsU0FBMUYsQ0FBakI7QUFDSDtBQUNKOzs7cUNBRVksQ0FFWjs7OztFQXZEYyxFOztBQXlEbkIsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcclxuICBcInZ3XCI6IDI4MCxcclxuICBcInZoXCI6IDE5MCxcclxuICBcIndcIjogODQwLFxyXG4gIFwiaFwiOiA1NzAsXHJcbiAgXCJUQ09cIjoge1xyXG4gICAgXCJwb3NcIjoge1xyXG4gICAgICBcInhcIjogMCxcclxuICAgICAgXCJ5XCI6IDBcclxuICAgIH0sXHJcbiAgICBcInNpemVcIjoge1xyXG4gICAgICBcIndcIjogMjgwLFxyXG4gICAgICBcImhcIjogODBcclxuICAgIH1cclxuICB9LFxyXG4gIFwiZ3JpZFwiOiB7XHJcbiAgICBcInBvc1wiOiB7XHJcbiAgICAgIFwieFwiOiA0MCxcclxuICAgICAgXCJ5XCI6IDg1XHJcbiAgICB9LFxyXG4gICAgXCJzaXplXCI6IHtcclxuICAgICAgXCJ3XCI6IDIwMCxcclxuICAgICAgXCJoXCI6IDEwMFxyXG4gICAgfSxcclxuICAgIFwibmJSb3dzXCI6IDgsXHJcbiAgICBcIm5iQ29sdW1uc1wiOiAxMFxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzPXtcclxuICBcImNvbG9yXCI6IHtcclxuICAgIFwiYmFja2dyb3VuZFwiOiBcIndoaXRlXCIsXHJcbiAgICBcInJvdXRlXCI6IHtcclxuICAgICAgXCJEQVwiOiBcInllbGxvd1wiLFxyXG4gICAgICBcIlRQXCI6IFwib3JhbmdlXCIsXHJcbiAgICAgIFwiZnJlZVwiOiBcImdyZXlcIixcclxuICAgICAgXCJ0cmFpbk9uXCI6IFwicmVkXCJcclxuICAgIH0sXHJcbiAgICBcInN3aXRjaExlZFwiOiB7XHJcbiAgICAgIFwib2ZmXCI6IFwiYmxhY2tcIixcclxuICAgICAgXCJvblwiOiBcIndoaXRlXCJcclxuICAgIH0sXHJcbiAgICBcImxlZFwiOiB7XHJcbiAgICAgIFwib2ZmXCI6IFwiZ3JleVwiLFxyXG4gICAgICBcIm9uXCI6IFwid2hpdGVcIlxyXG4gICAgfSxcclxuICAgIFwiVENPXCI6IHtcclxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiYmxhY2tcIlxyXG4gICAgfSxcclxuICAgIFwic3RvcGxpZ2h0XCI6IHtcclxuICAgICAgXCJvZmZcIjogXCJncmV5XCIsXHJcbiAgICAgIFwib25cIjogXCJyZWRcIlxyXG4gICAgfSxcclxuICAgIFwic3RvcGxpZ2h0TGFiZWxcIjoge1xyXG4gICAgICBcIm9mZlwiOiBcIndoaXRlXCIsXHJcbiAgICAgIFwib25cIjogXCJyZWRcIlxyXG4gICAgfSxcclxuICAgIFwiWkFwXCI6IHtcclxuICAgICAgXCJvZmZcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcIm9uXCI6IFwicmVkXCJcclxuICAgIH0sXHJcbiAgICBcInN0b3BCdG5DaXJjbGVcIjoge1xyXG4gICAgICBcIm9mZlwiOiBcImJyb3duXCIsXHJcbiAgICAgIFwib25cIjogXCJyZWRcIlxyXG4gICAgfSxcclxuICAgIFwicm91dGVCdG5CZ1wiOiB7XHJcbiAgICAgIFwiREFcIjoge1xyXG4gICAgICAgIFwib2ZmXCI6IFwiZ3JleVwiLFxyXG4gICAgICAgIFwib25cIjogXCJ3aGl0ZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiVFBcIjoge1xyXG4gICAgICAgIFwib2ZmXCI6IFwiYnJvd25cIixcclxuICAgICAgICBcIm9uXCI6IFwiI0YwODA0MFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFwiYXR0clwiOiB7XHJcbiAgICBcImxpbmVcIjoge1xyXG4gICAgICBcImZpbGxcIjogXCJibGFja1wiLFxyXG4gICAgICBcInN0cm9rZVwiOiBcImdyZXlcIixcclxuICAgICAgXCJzdHJva2VXaWR0aFwiOiAyXHJcbiAgICB9LFxyXG4gICAgXCJncmlkXCI6IHtcclxuICAgICAgXCJmaWxsXCI6IFwibGlnaHRibHVlXCIsXHJcbiAgICAgIFwic3Ryb2tlXCI6IFwiYmxhY2tcIixcclxuICAgICAgXCJzdHJva2VXaWR0aFwiOiAwLjVcclxuICAgIH0sXHJcbiAgICBcInRyYWNrTGFiZWxcIjoge1xyXG4gICAgICBcImZpbGxcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcImZvbnQtc2l6ZVwiOiAzLFxyXG4gICAgICBcInRleHQtYW5jaG9yXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJBcmlhbFwiXHJcbiAgICB9LFxyXG4gICAgXCJ0cmFja0JnTGFiZWxcIjoge1xyXG4gICAgICBcInN0cm9rZVwiOiBcIndoaXRlXCIsXHJcbiAgICAgIFwic3Ryb2tlV2lkdGhcIjogMC4zLFxyXG4gICAgICBcImZpbGxcIjogXCJibGFja1wiLFxyXG4gICAgICBcInNpemVDb2VmZlwiOiAwLjdcclxuICAgIH0sXHJcbiAgICBcInN3aXRjaExhYmVsXCI6IHtcclxuICAgICAgXCJmaWxsXCI6IFwieWVsbG93XCIsXHJcbiAgICAgIFwiZm9udFNpemVcIjogMyxcclxuICAgICAgXCJmb250RmFtaWx5XCI6IFwiQXJpYWxcIixcclxuICAgICAgXCJ0ZXh0QW5jaG9yXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgIFwib2Zmc2V0WVwiOiAzXHJcbiAgICB9LFxyXG4gICAgXCJzd2l0Y2hMZWRcIjoge1xyXG4gICAgICBcImRpc3RhbmNlRnJvbUNlbnRlclwiOiA3LFxyXG4gICAgICBcInNpemVSYXRpb1wiOiAwLjQ1XHJcbiAgICB9LFxyXG4gICAgXCJsZWRMYWJlbFwiOiB7XHJcbiAgICAgIFwiZmlsbFwiOiBcImxpZ2h0Z3JleVwiLFxyXG4gICAgICBcImZvbnRTaXplXCI6IDMsXHJcbiAgICAgIFwiZm9udEZhbWlseVwiOiBcIkFyaWFsXCIsXHJcbiAgICAgIFwidGV4dEFuY2hvclwiOiBcIm1pZGRsZVwiLFxyXG4gICAgICBcIm9mZnNldFlcIjogNFxyXG4gICAgfSxcclxuICAgIFwibGVkXCI6IHtcclxuICAgICAgXCJzaXplXCI6IDEuM1xyXG4gICAgfSxcclxuICAgIFwiem9uZUxhYmVsXCI6IHtcclxuICAgICAgXCJmaWxsXCI6IFwibGltZVwiLFxyXG4gICAgICBcImZvbnQtc2l6ZVwiOiA0LFxyXG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJBcmlhbFwiLFxyXG4gICAgICBcInRleHRBbmNob3JcIjogXCJtaWRkbGVcIixcclxuICAgICAgXCJvZmZzZXRZXCI6IDRcclxuICAgIH0sXHJcbiAgICBcInNvdXJjZUxhYmVsXCI6IHtcclxuICAgICAgXCJmaWxsXCI6IFwid2hpdGVcIixcclxuICAgICAgXCJmb250LXNpemVcIjogOCxcclxuICAgICAgXCJmb250LWZhbWlseVwiOiBcIkFyaWFsXCIsXHJcbiAgICAgIFwidGV4dC1hbmNob3JcIjogXCJtaWRkbGVcIixcclxuICAgICAgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIjogXCJtaWRkbGVcIixcclxuICAgICAgXCJvZmZzZXRZXCI6IDFcclxuICAgIH0sXHJcbiAgICBcInNvdXJjZUxhYmVsQmdcIjoge1xyXG4gICAgICBcImZpbGxcIjogXCJibGFja1wiXHJcbiAgICB9LFxyXG4gICAgXCJyb3V0ZUJ0blwiOiB7XHJcbiAgICAgIFwiZmlsbFwiOiBcImJsYWNrXCIsXHJcbiAgICAgIFwiZm9udC1zaXplXCI6IDgsXHJcbiAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJBcmlhbFwiLFxyXG4gICAgICBcInRleHQtYW5jaG9yXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgIFwiYWxpZ25tZW50LWJhc2VsaW5lXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgIFwib2Zmc2V0WVwiOiAxXHJcbiAgICB9LFxyXG4gICAgXCJyb3V0ZUJ0bkJnXCI6IHtcclxuICAgICAgXCJEQVwiOiB7XHJcbiAgICAgICAgXCJzdHJva2VcIjogXCJibGFja1wiLFxyXG4gICAgICAgIFwic3Ryb2tlV2lkdGhcIjogMC4zLFxyXG4gICAgICAgIFwicnhcIjogMixcclxuICAgICAgICBcInJ5XCI6IDIsXHJcbiAgICAgICAgXCJwYWRkaW5nXCI6IDEuNVxyXG4gICAgICB9LFxyXG4gICAgICBcIlRQXCI6IHtcclxuICAgICAgICBcInN0cm9rZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgICAgXCJzdHJva2VXaWR0aFwiOiAwLjMsXHJcbiAgICAgICAgXCJyeFwiOiAyLFxyXG4gICAgICAgIFwicnlcIjogMixcclxuICAgICAgICBcInBhZGRpbmdcIjogMS41XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInN0b3BsaWdodFwiOiB7XHJcbiAgICAgIFwicmVjdFwiOiB7XHJcbiAgICAgICAgXCJzdHJva2VcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIFwic3Ryb2tlV2lkdGhcIjogMC41LFxyXG4gICAgICAgIFwicnhcIjogMC41LFxyXG4gICAgICAgIFwicnlcIjogMC41LFxyXG4gICAgICAgIFwid1wiOiA1LFxyXG4gICAgICAgIFwiaFwiOiAyLFxyXG4gICAgICAgIFwibGluZVwiOiB7XHJcbiAgICAgICAgICBcIndcIjogNCxcclxuICAgICAgICAgIFwiaFwiOiAzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzdG9wbGlnaHRMYWJlbFwiOiB7XHJcbiAgICAgIFwiZm9udC1zaXplXCI6IDQsXHJcbiAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJBcmlhbFwiLFxyXG4gICAgICBcInRleHQtYW5jaG9yXCI6IFwibWlkZGxlXCIsXHJcbiAgICAgIFwib2Zmc2V0WV9yaWdodFwiOiAtMS41LFxyXG4gICAgICBcIm9mZnNldFlfbGVmdFwiOiA2LjVcclxuICAgIH0sXHJcbiAgICBcIlpBcFwiOiB7XHJcbiAgICAgIFwid1wiOiAzLFxyXG4gICAgICBcImhcIjogMyxcclxuICAgICAgXCJyeFwiOiAwLjUsXHJcbiAgICAgIFwicnlcIjogMC41LFxyXG4gICAgICBcInN0cm9rZVwiOiBcInJlZFwiLFxyXG4gICAgICBcImZpbGxcIjogXCJibGFja1wiLFxyXG4gICAgICBcInN0cm9rZVdpZHRoXCI6IDAuNSxcclxuICAgICAgXCJvZmZzZXRYXCI6IC0xNCxcclxuICAgICAgXCJvZmZzZXRZXCI6IC0yLFxyXG4gICAgICBcImNpcmNsZVJhdGlvXCI6IDAuNFxyXG4gICAgfSxcclxuICAgIFwiWkFwTGFiZWxcIjoge1xyXG4gICAgICBcImZpbGxcIjogXCJsaWdodGdyZXlcIixcclxuICAgICAgXCJmb250LXNpemVcIjogMyxcclxuICAgICAgXCJmb250LWZhbWlseVwiOiBcIkFyaWFsXCIsXHJcbiAgICAgIFwidGV4dC1hbmNob3JcIjogXCJtaWRkbGVcIixcclxuICAgICAgXCJvZmZzZXRZX3JpZ2h0XCI6IC0xLjUsXHJcbiAgICAgIFwib2Zmc2V0WV9sZWZ0XCI6IDdcclxuICAgIH0sXHJcbiAgICBcInN0b3BCdG5DaXJjbGVcIjoge1xyXG4gICAgICBcInN0cm9rZVwiOiBcImJsYWNrXCIsXHJcbiAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDAuNSxcclxuICAgICAgXCJwYWRkaW5nXCI6IDFcclxuICAgIH0sXHJcbiAgICBcInN0b3BCdG5BcnJvd1wiOiB7XHJcbiAgICAgIFwic3Ryb2tlXCI6IFwiYmxhY2tcIixcclxuICAgICAgXCJzdHJva2Utd2lkdGhcIjogMC41LFxyXG4gICAgICBcImZpbGxcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICBcIl9wb2ludHNcIjogW1xyXG4gICAgICAgIDAuNDcsXHJcbiAgICAgICAgMC45LFxyXG4gICAgICAgIDAuNDcsXHJcbiAgICAgICAgMC4zLFxyXG4gICAgICAgIDAuNCxcclxuICAgICAgICAwLjMsXHJcbiAgICAgICAgMC41LFxyXG4gICAgICAgIDAuMSxcclxuICAgICAgICAwLjYsXHJcbiAgICAgICAgMC4zLFxyXG4gICAgICAgIDAuNTMsXHJcbiAgICAgICAgMC4zLFxyXG4gICAgICAgIDAuNTMsXHJcbiAgICAgICAgMC45XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwiZ2F0ZXNcIjoge1xyXG4gICAgXCIxXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVHJhY2tcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxpbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogNzEsXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE0OSxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxMjAsXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMlwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlRyYWNrXCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsaW5lXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDkxLFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxNDksXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMTIwLFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjIxXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVHJhY2tcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxpbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMjExLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMjksXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMTAyXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiU3dpdGNoXCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJjZW50ZXJcIjoge1xyXG4gICAgICAgICAgXCJ4XCI6IDQ1LFxyXG4gICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxvbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogNDEsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsZWZ0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDU0LjMsXHJcbiAgICAgICAgICAgIFwieVwiOiA1MC43XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInJpZ2h0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDg5LFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwMlwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogNDUsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjExMFwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlN3aXRjaFwiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwiY2VudGVyXCI6IHtcclxuICAgICAgICAgIFwieFwiOiAxOTUsXHJcbiAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibG9uZVwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMDksXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsZWZ0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE1MSxcclxuICAgICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInJpZ2h0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE4NS43LFxyXG4gICAgICAgICAgICBcInlcIjogNTAuN1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMTEwXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxOTUsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIkFFXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVHJhY2tcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxpbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMTAsXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDM5LFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIkFFXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMCxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVHJhY2tcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxpbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogOTEsXHJcbiAgICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE0OSxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJBXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxMjAsXHJcbiAgICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiREVcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJUcmFja1wiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwibGluZVwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxMCxcclxuICAgICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMzksXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiREVcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDIwLFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIkRUXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVHJhY2tcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxpbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMjMxLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyNjksXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiRFRcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDI1MCxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBVFwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlRyYWNrXCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsaW5lXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDIxMSxcclxuICAgICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMjY5LFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIkFUXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyNTAsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMTAzYVwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlN3aXRjaFwiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwiY2VudGVyXCI6IHtcclxuICAgICAgICAgIFwieFwiOiA1MCxcclxuICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsb25lXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDQxLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGVmdFwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiA2OSxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInJpZ2h0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDU5LjMsXHJcbiAgICAgICAgICAgIFwieVwiOiAyOS4zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxMDNhXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiA0NSxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMTAzYlwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlN3aXRjaFwiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwiY2VudGVyXCI6IHtcclxuICAgICAgICAgIFwieFwiOiA3MCxcclxuICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsb25lXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDg5LFxyXG4gICAgICAgICAgICBcInlcIjogNDBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGVmdFwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiA2NSxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogNTUuNyxcclxuICAgICAgICAgICAgXCJ5XCI6IDQ5LjNcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicmlnaHRcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogNjAuNyxcclxuICAgICAgICAgICAgXCJ5XCI6IDMwLjdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwM2JcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDcwLFxyXG4gICAgICAgICAgICBcInlcIjogNDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFib3ZlXCI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIxMDlhXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiU3dpdGNoXCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJjZW50ZXJcIjoge1xyXG4gICAgICAgICAgXCJ4XCI6IDE3MCxcclxuICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsb25lXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE1MSxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImxlZnRcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMTc5LjMsXHJcbiAgICAgICAgICAgIFwieVwiOiAzMC43XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInJpZ2h0XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE3NSxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMTg0LjMsXHJcbiAgICAgICAgICAgIFwieVwiOiA0OS4zXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxMDlhXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxNzAsXHJcbiAgICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjEwOWJcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJTd2l0Y2hcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImNlbnRlclwiOiB7XHJcbiAgICAgICAgICBcInhcIjogMTkwLFxyXG4gICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxvbmVcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMjA5LFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGVmdFwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxODAuNyxcclxuICAgICAgICAgICAgXCJ5XCI6IDI5LjNcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwicmlnaHRcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInhcIjogMTUxLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEwOWJcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE5MCxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcIndpcmVzXCI6IFtcclxuICAgIFtcclxuICAgICAgXCIxMDNhXCIsXHJcbiAgICAgIFwibGVmdFwiLFxyXG4gICAgICBcIjFcIixcclxuICAgICAgXCJsZWZ0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMVwiLFxyXG4gICAgICBcInJpZ2h0XCIsXHJcbiAgICAgIFwiMTA5YlwiLFxyXG4gICAgICBcInJpZ2h0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMTA5YlwiLFxyXG4gICAgICBcImxvbmVcIixcclxuICAgICAgXCIyMVwiLFxyXG4gICAgICBcImxlZnRcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCIyMVwiLFxyXG4gICAgICBcInJpZ2h0XCIsXHJcbiAgICAgIFwiRFRcIixcclxuICAgICAgXCJsZWZ0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMTAzYVwiLFxyXG4gICAgICBcInJpZ2h0XCIsXHJcbiAgICAgIFwiMTAzYlwiLFxyXG4gICAgICBcInJpZ2h0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMTA5YlwiLFxyXG4gICAgICBcImxlZnRcIixcclxuICAgICAgXCIxMDlhXCIsXHJcbiAgICAgIFwibGVmdFwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIjEwM2JcIixcclxuICAgICAgXCJsb25lXCIsXHJcbiAgICAgIFwiQVwiLFxyXG4gICAgICBcImxlZnRcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJBXCIsXHJcbiAgICAgIFwicmlnaHRcIixcclxuICAgICAgXCIxMDlhXCIsXHJcbiAgICAgIFwibG9uZVwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIjEwMlwiLFxyXG4gICAgICBcImxlZnRcIixcclxuICAgICAgXCIxMDNiXCIsXHJcbiAgICAgIFwibGVmdFwiXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIjExMFwiLFxyXG4gICAgICBcInJpZ2h0XCIsXHJcbiAgICAgIFwiMTA5YVwiLFxyXG4gICAgICBcInJpZ2h0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiREVcIixcclxuICAgICAgXCJyaWdodFwiLFxyXG4gICAgICBcIjEwMlwiLFxyXG4gICAgICBcImxvbmVcIlxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCIxMDJcIixcclxuICAgICAgXCJyaWdodFwiLFxyXG4gICAgICBcIjJcIixcclxuICAgICAgXCJsZWZ0XCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMlwiLFxyXG4gICAgICBcInJpZ2h0XCIsXHJcbiAgICAgIFwiMTEwXCIsXHJcbiAgICAgIFwibGVmdFwiXHJcbiAgICBdXHJcbiAgXSxcclxuICBcImNvbWJpbmVkU3dpdGNoZXNcIjogW1xyXG4gICAgW1xyXG4gICAgICBcIjEwM2FcIixcclxuICAgICAgXCIxMDNiXCJcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiMTA5YVwiLFxyXG4gICAgICBcIjEwOWJcIlxyXG4gICAgXVxyXG4gIF0sXHJcbiAgXCJ6b25lc1wiOiB7XHJcbiAgICBcInoxMFwiOiB7XHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiREVcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcInoxMFwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMzIuNSxcclxuICAgICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ6MTJcIjoge1xyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjEwMlwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejEyXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiA1Ny41LFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFib3ZlXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInoxM1wiOiB7XHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiMTAzYVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejEzXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiA1NSxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ6MTVcIjoge1xyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjFcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcInoxNVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMTEwLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFib3ZlXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInoxNlwiOiB7XHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiMTAzYlwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejE2XCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiA4MCxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ6MTdcIjoge1xyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjEwOWJcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcInoxN1wiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMTcwLFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFib3ZlXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcInoxOFwiOiB7XHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiQVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejE4XCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxMDUsXHJcbiAgICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiejIxXCI6IHtcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIyMVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejIxXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMjAsXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiejIyXCI6IHtcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMDlhXCJcclxuICAgICAgXSxcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJ6MjJcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE2MCxcclxuICAgICAgICAgICAgXCJ5XCI6IDQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ6MjNcIjoge1xyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIkRUXCJcclxuICAgICAgXSxcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJ6MjNcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDI0MCxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJ6MjZcIjoge1xyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjExMFwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiejI2XCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMDAsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWJvdmVcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiejM0XCI6IHtcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIyXCJcclxuICAgICAgXSxcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJ6MzRcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDEzMCxcclxuICAgICAgICAgICAgXCJ5XCI6IDYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInNvdXJjZXNcIjoge1xyXG4gICAgXCJBRV9yaWdodFwiOiB7XHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiQUVcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICAgIFwieVwiOiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3BsaWdodFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMTExXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAzOSxcclxuICAgICAgICAgICAgXCJ5XCI6IDIwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJkaXJcIjogXCJyaWdodFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlpBcFwiOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjFfcmlnaHRcIjoge1xyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwibGFiZWxcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDUsXHJcbiAgICAgICAgICAgIFwieVwiOiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3BsaWdodFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMTMxXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxNDksXHJcbiAgICAgICAgICAgIFwieVwiOiAyMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiZGlyXCI6IFwicmlnaHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJaQXBcIjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBX3JpZ2h0XCI6IHtcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJBXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiA1LFxyXG4gICAgICAgICAgICBcInlcIjogNFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wbGlnaHRcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjEyOVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMTQ5LFxyXG4gICAgICAgICAgICBcInlcIjogNDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImRpclwiOiBcInJpZ2h0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiWkFwXCI6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiQV9sZWZ0XCI6IHtcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJBXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAzLFxyXG4gICAgICAgICAgICBcInlcIjogNlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdG9wbGlnaHRcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjExNlwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogOTEsXHJcbiAgICAgICAgICAgIFwieVwiOiA0MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiZGlyXCI6IFwibGVmdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlpBcFwiOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIjJfbGVmdFwiOiB7XHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMyxcclxuICAgICAgICAgICAgXCJ5XCI6IDdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcGxpZ2h0XCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxMTRcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDkxLFxyXG4gICAgICAgICAgICBcInlcIjogNjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImRpclwiOiBcImxlZnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJaQXBcIjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJEVF9sZWZ0XCI6IHtcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJEVFwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogOCxcclxuICAgICAgICAgICAgXCJ5XCI6IDZcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcGxpZ2h0XCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxMjJcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDE5OS41LFxyXG4gICAgICAgICAgICBcInlcIjogMjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImRpclwiOiBcImxlZnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJaQXBcIjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiQVRfbGVmdFwiOiB7XHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiQVRcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDgsXHJcbiAgICAgICAgICAgIFwieVwiOiA3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN0b3BsaWdodFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMTI4XCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAyMTEsXHJcbiAgICAgICAgICAgIFwieVwiOiA2MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiZGlyXCI6IFwibGVmdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlpBcFwiOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIFwicm91dGVzXCI6IHtcclxuICAgIFwiQUVfMVwiOiB7XHJcbiAgICAgIFwic291cmNlXCI6IFwiQUVfcmlnaHRcIixcclxuICAgICAgXCJuZXh0U291cmNlXCI6IFwiMV9yaWdodFwiLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoxM1wiLFxyXG4gICAgICAgIFwiejE1XCJcclxuICAgICAgXSxcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMDNhXCIsXHJcbiAgICAgICAgXCIxXCJcclxuICAgICAgXSxcclxuICAgICAgXCJzd2l0Y2hEaXJzXCI6IFtcclxuICAgICAgICBcImxlZnRcIixcclxuICAgICAgICBudWxsXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiVFBcIjogdHJ1ZSxcclxuICAgICAgXCJ0cmFuc2l0XCI6IFwicmlnaHRcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImJ0blwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcIkRBXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogMSxcclxuICAgICAgICAgICAgICBcInlcIjogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlRQXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogMixcclxuICAgICAgICAgICAgICBcInlcIjogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBRV9BXCI6IHtcclxuICAgICAgXCJzb3VyY2VcIjogXCJBRV9yaWdodFwiLFxyXG4gICAgICBcIm5leHRTb3VyY2VcIjogXCJBX3JpZ2h0XCIsXHJcbiAgICAgIFwiem9uZXNcIjogW1xyXG4gICAgICAgIFwiejEzXCIsXHJcbiAgICAgICAgXCJ6MTZcIixcclxuICAgICAgICBcInoxOFwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiMTAzYVwiLFxyXG4gICAgICAgIFwiMTAzYlwiLFxyXG4gICAgICAgIFwiQVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3dpdGNoRGlyc1wiOiBbXHJcbiAgICAgICAgXCJyaWdodFwiLFxyXG4gICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICBudWxsXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiVFBcIjogZmFsc2UsXHJcbiAgICAgIFwidHJhbnNpdFwiOiBcInJpZ2h0XCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJidG5cIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIkFcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJEQVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDMsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMV9EVFwiOiB7XHJcbiAgICAgIFwic291cmNlXCI6IFwiMV9yaWdodFwiLFxyXG4gICAgICBcIm5leHRTb3VyY2VcIjogbnVsbCxcclxuICAgICAgXCJ6b25lc1wiOiBbXHJcbiAgICAgICAgXCJ6MTdcIixcclxuICAgICAgICBcInoyMVwiLFxyXG4gICAgICAgIFwiejIzXCJcclxuICAgICAgXSxcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMDliXCIsXHJcbiAgICAgICAgXCIyMVwiLFxyXG4gICAgICAgIFwiRFRcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInN3aXRjaERpcnNcIjogW1xyXG4gICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGxcclxuICAgICAgXSxcclxuICAgICAgXCJUUFwiOiB0cnVlLFxyXG4gICAgICBcInRyYW5zaXRcIjogXCJyaWdodFwiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwiYnRuXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJEVFwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcIkRBXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogNixcclxuICAgICAgICAgICAgICBcInlcIjogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlRQXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogNyxcclxuICAgICAgICAgICAgICBcInlcIjogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBX0RUXCI6IHtcclxuICAgICAgXCJzb3VyY2VcIjogXCJBX3JpZ2h0XCIsXHJcbiAgICAgIFwibmV4dFNvdXJjZVwiOiBudWxsLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoyMlwiLFxyXG4gICAgICAgIFwiejE3XCIsXHJcbiAgICAgICAgXCJ6MjFcIixcclxuICAgICAgICBcInoyM1wiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiZ2F0ZXNcIjogW1xyXG4gICAgICAgIFwiMTA5YVwiLFxyXG4gICAgICAgIFwiMTA5YlwiLFxyXG4gICAgICAgIFwiMjFcIixcclxuICAgICAgICBcIkRUXCJcclxuICAgICAgXSxcclxuICAgICAgXCJzd2l0Y2hEaXJzXCI6IFtcclxuICAgICAgICBcImxlZnRcIixcclxuICAgICAgICBcImxlZnRcIixcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGxcclxuICAgICAgXSxcclxuICAgICAgXCJUUFwiOiBmYWxzZSxcclxuICAgICAgXCJ0cmFuc2l0XCI6IFwicmlnaHRcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImJ0blwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiRFRcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJEQVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDYsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiRFRfQVwiOiB7XHJcbiAgICAgIFwic291cmNlXCI6IFwiRFRfbGVmdFwiLFxyXG4gICAgICBcIm5leHRTb3VyY2VcIjogXCJBX2xlZnRcIixcclxuICAgICAgXCJ6b25lc1wiOiBbXHJcbiAgICAgICAgXCJ6MTdcIixcclxuICAgICAgICBcInoyMlwiLFxyXG4gICAgICAgIFwiejE4XCJcclxuICAgICAgXSxcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMDliXCIsXHJcbiAgICAgICAgXCIxMDlhXCIsXHJcbiAgICAgICAgXCJBXCJcclxuICAgICAgXSxcclxuICAgICAgXCJzd2l0Y2hEaXJzXCI6IFtcclxuICAgICAgICBcImxlZnRcIixcclxuICAgICAgICBcImxlZnRcIixcclxuICAgICAgICBudWxsXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiVFBcIjogZmFsc2UsXHJcbiAgICAgIFwidHJhbnNpdFwiOiBcImxlZnRcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImJ0blwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiQVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcIkRBXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogNyxcclxuICAgICAgICAgICAgICBcInlcIjogNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBVF9BXCI6IHtcclxuICAgICAgXCJzb3VyY2VcIjogXCJBVF9sZWZ0XCIsXHJcbiAgICAgIFwibmV4dFNvdXJjZVwiOiBcIkFfbGVmdFwiLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoyNlwiLFxyXG4gICAgICAgIFwiejIyXCIsXHJcbiAgICAgICAgXCJ6MThcIlxyXG4gICAgICBdLFxyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjExMFwiLFxyXG4gICAgICAgIFwiMTA5YVwiLFxyXG4gICAgICAgIFwiQVwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwic3dpdGNoRGlyc1wiOiBbXHJcbiAgICAgICAgXCJyaWdodFwiLFxyXG4gICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICBudWxsXHJcbiAgICAgIF0sXHJcbiAgICAgIFwiVFBcIjogZmFsc2UsXHJcbiAgICAgIFwidHJhbnNpdFwiOiBcImxlZnRcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImJ0blwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiQVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcIkRBXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogNyxcclxuICAgICAgICAgICAgICBcInlcIjogN1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJBVF8yXCI6IHtcclxuICAgICAgXCJzb3VyY2VcIjogXCJBVF9sZWZ0XCIsXHJcbiAgICAgIFwibmV4dFNvdXJjZVwiOiBcIjJfbGVmdFwiLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoyNlwiLFxyXG4gICAgICAgIFwiejM0XCJcclxuICAgICAgXSxcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMTBcIixcclxuICAgICAgICBcIjJcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInN3aXRjaERpcnNcIjogW1xyXG4gICAgICAgIFwibGVmdFwiLFxyXG4gICAgICAgIG51bGxcclxuICAgICAgXSxcclxuICAgICAgXCJUUFwiOiB0cnVlLFxyXG4gICAgICBcInRyYW5zaXRcIjogXCJsZWZ0XCIsXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJidG5cIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjJcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJEQVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDYsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJUUFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDUsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiMl9ERVwiOiB7XHJcbiAgICAgIFwic291cmNlXCI6IFwiMl9sZWZ0XCIsXHJcbiAgICAgIFwibmV4dFNvdXJjZVwiOiBudWxsLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoxMlwiLFxyXG4gICAgICAgIFwiejEwXCJcclxuICAgICAgXSxcclxuICAgICAgXCJnYXRlc1wiOiBbXHJcbiAgICAgICAgXCIxMDJcIixcclxuICAgICAgICBcIkRFXCJcclxuICAgICAgXSxcclxuICAgICAgXCJzd2l0Y2hEaXJzXCI6IFtcclxuICAgICAgICBcInJpZ2h0XCIsXHJcbiAgICAgICAgbnVsbFxyXG4gICAgICBdLFxyXG4gICAgICBcIlRQXCI6IHRydWUsXHJcbiAgICAgIFwidHJhbnNpdFwiOiBcImxlZnRcIixcclxuICAgICAgXCJ2aWV3XCI6IHtcclxuICAgICAgICBcImJ0blwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiREVcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJEQVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDIsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJUUFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ4XCI6IDEsXHJcbiAgICAgICAgICAgICAgXCJ5XCI6IDdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiQV9ERVwiOiB7XHJcbiAgICAgIFwic291cmNlXCI6IFwiQV9sZWZ0XCIsXHJcbiAgICAgIFwibmV4dFNvdXJjZVwiOiBudWxsLFxyXG4gICAgICBcInpvbmVzXCI6IFtcclxuICAgICAgICBcInoxNlwiLFxyXG4gICAgICAgIFwiejEyXCIsXHJcbiAgICAgICAgXCJ6MTBcIlxyXG4gICAgICBdLFxyXG4gICAgICBcImdhdGVzXCI6IFtcclxuICAgICAgICBcIjEwM2JcIixcclxuICAgICAgICBcIjEwMlwiLFxyXG4gICAgICAgIFwiREVcIlxyXG4gICAgICBdLFxyXG4gICAgICBcInN3aXRjaERpcnNcIjogW1xyXG4gICAgICAgIFwibGVmdFwiLFxyXG4gICAgICAgIFwibGVmdFwiLFxyXG4gICAgICAgIG51bGxcclxuICAgICAgXSxcclxuICAgICAgXCJUUFwiOiBmYWxzZSxcclxuICAgICAgXCJ0cmFuc2l0XCI6IFwibGVmdFwiLFxyXG4gICAgICBcInZpZXdcIjoge1xyXG4gICAgICAgIFwiYnRuXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJERVwiLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcIkRBXCI6IHtcclxuICAgICAgICAgICAgICBcInhcIjogMixcclxuICAgICAgICAgICAgICBcInlcIjogNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInN0b3BCdG5cIjoge1xyXG4gICAgXCJBRV9yaWdodFwiOiB7XHJcbiAgICAgIFwic291cmNlc1wiOiBbXHJcbiAgICAgICAgXCJBRV9yaWdodFwiXHJcbiAgICAgIF0sXHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICBcInlcIjogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsYWJlbFwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiQyAxMTFcIixcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICAgIFwieVwiOiAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcImxlZExhYmVsc1wiOiB7XHJcbiAgICBcImFubm91bmNlbWVudF9BRVwiOiB7XHJcbiAgICAgIFwidmlld1wiOiB7XHJcbiAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgXCJ4XCI6IDEyLFxyXG4gICAgICAgICAgXCJ5XCI6IDEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxhYmVsXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCJBbm5vbmNlXCIsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAxMixcclxuICAgICAgICAgICAgXCJ5XCI6IDEyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhYm92ZVwiOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcInRyYWluc1wiOiB7XHJcbiAgICBcInRyYWluQVwiOiB7XHJcbiAgICAgIFwidmVsb2NpdHlcIjogMjAsXHJcbiAgICAgIFwibGVuZ3RoXCI6IDMwLFxyXG4gICAgICBcImFubm91bmNlbWVudFRpbWVcIjogNTAwMCxcclxuICAgICAgXCJhcnJpdmFsVGltZVwiOiA1MDAwLFxyXG4gICAgICBcIm1heFN0b3BUaW1lXCI6IDE1MDAwLFxyXG4gICAgICBcImJhc2VTb3VyY2VcIjogXCJBRV9yaWdodFwiLFxyXG4gICAgICBcImJhc2VBbm5vdW5jZW1lbnRcIjogXCJhbm5vdW5jZW1lbnRfQUVcIlxyXG4gICAgfSxcclxuICAgIFwidHJhaW5DXCI6IHtcclxuICAgICAgXCJ2ZWxvY2l0eVwiOiAyMCxcclxuICAgICAgXCJsZW5ndGhcIjogMzAsXHJcbiAgICAgIFwiYW5ub3VuY2VtZW50VGltZVwiOiA1MDAwLFxyXG4gICAgICBcImFycml2YWxUaW1lXCI6IDUwMDAsXHJcbiAgICAgIFwibWF4U3RvcFRpbWVcIjogMTUwMDAsXHJcbiAgICAgIFwiYmFzZVNvdXJjZVwiOiBcIkFFX3JpZ2h0XCIsXHJcbiAgICAgIFwiYmFzZUFubm91bmNlbWVudFwiOiBcImFubm91bmNlbWVudF9BRVwiXHJcbiAgICB9XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIC8vIER1csOpZSBkdSBjaGFuZ2VtZW50IGQndW5lIGFpZ3VpbGxlIGVuIG1zXHJcbiAgXCJzd2l0Y2hDaGFuZ2VcIjogMTAwMCxcclxuICAvLyBEdXLDqWUgZGUgY2xpZ25vdGVtZW50IGRlcyBib3V0b25zIGVuIMOpdGF0IFwic2F1dmVnYXJkw6lcIiBlbiBtc1xyXG4gIFwiYmxpbmtCdXR0b25JbnRlcnZhbFwiOiA1MDAsXHJcbiAgLy8gRHVyw6llIGQndW5lIGFubm9uY2UgZW4gbXNcclxuICBcImFubm91bmNlbWVudFwiOiA1MDAwLFxyXG4gIC8vIER1csOpZSBkZSByZWTDqW1hcnJhZ2UgZCd1biB0cmFpbiBsb3JzcXUnaWwgZXN0IGFycsOqdMOpIMOgIHVuIGZldSBlbiBtc1xyXG4gIFwidHJhaW5TdGFydGluZ0RlbGF5XCI6IDEwMDBcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8gXG4vLyBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vIFxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi8vIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkCBcXFxcXG4vLyDilIIgRXZlIDAuNC4yIC0gSmF2YVNjcmlwdCBFdmVudHMgTGlicmFyeSAgICAgICAgICAgICAgICAgICAgICDilIIgXFxcXFxuLy8g4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkIFxcXFxcbi8vIOKUgiBBdXRob3IgRG1pdHJ5IEJhcmFub3Zza2l5IChodHRwOi8vZG1pdHJ5LmJhcmFub3Zza2l5LmNvbS8pIOKUgiBcXFxcXG4vLyDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJggXFxcXFxuXG4oZnVuY3Rpb24gKGdsb2IpIHtcbiAgICB2YXIgdmVyc2lvbiA9IFwiMC40LjJcIixcbiAgICAgICAgaGFzID0gXCJoYXNPd25Qcm9wZXJ0eVwiLFxuICAgICAgICBzZXBhcmF0b3IgPSAvW1xcLlxcL10vLFxuICAgICAgICBjb21hc2VwYXJhdG9yID0gL1xccyosXFxzKi8sXG4gICAgICAgIHdpbGRjYXJkID0gXCIqXCIsXG4gICAgICAgIGZ1biA9IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBudW1zb3J0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudF9ldmVudCxcbiAgICAgICAgc3RvcCxcbiAgICAgICAgZXZlbnRzID0ge246IHt9fSxcbiAgICAgICAgZmlyc3REZWZpbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGhpcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2ldICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYXN0RGVmaW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoLS1pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2ldICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIC8qXFxcbiAgICAgKiBldmVcbiAgICAgWyBtZXRob2QgXVxuXG4gICAgICogRmlyZXMgZXZlbnQgd2l0aCBnaXZlbiBgbmFtZWAsIGdpdmVuIHNjb3BlIGFuZCBvdGhlciBwYXJhbWV0ZXJzLlxuXG4gICAgID4gQXJndW1lbnRzXG5cbiAgICAgLSBuYW1lIChzdHJpbmcpIG5hbWUgb2YgdGhlICpldmVudCosIGRvdCAoYC5gKSBvciBzbGFzaCAoYC9gKSBzZXBhcmF0ZWRcbiAgICAgLSBzY29wZSAob2JqZWN0KSBjb250ZXh0IGZvciB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgLSB2YXJhcmdzICguLi4pIHRoZSByZXN0IG9mIGFyZ3VtZW50cyB3aWxsIGJlIHNlbnQgdG8gZXZlbnQgaGFuZGxlcnNcblxuICAgICA9IChvYmplY3QpIGFycmF5IG9mIHJldHVybmVkIHZhbHVlcyBmcm9tIHRoZSBsaXN0ZW5lcnMuIEFycmF5IGhhcyB0d28gbWV0aG9kcyBgLmZpcnN0RGVmaW5lZCgpYCBhbmQgYC5sYXN0RGVmaW5lZCgpYCB0byBnZXQgZmlyc3Qgb3IgbGFzdCBub3QgYHVuZGVmaW5lZGAgdmFsdWUuXG4gICAgXFwqL1xuICAgICAgICBldmUgPSBmdW5jdGlvbiAobmFtZSwgc2NvcGUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICAgICAgICB2YXIgZSA9IGV2ZW50cyxcbiAgICAgICAgICAgICAgICBvbGRzdG9wID0gc3RvcCxcbiAgICAgICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBldmUubGlzdGVuZXJzKG5hbWUpLFxuICAgICAgICAgICAgICAgIHogPSAwLFxuICAgICAgICAgICAgICAgIGYgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICAgIGluZGV4ZWQgPSBbXSxcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IHt9LFxuICAgICAgICAgICAgICAgIG91dCA9IFtdLFxuICAgICAgICAgICAgICAgIGNlID0gY3VycmVudF9ldmVudCxcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIG91dC5maXJzdERlZmluZWQgPSBmaXJzdERlZmluZWQ7XG4gICAgICAgICAgICBvdXQubGFzdERlZmluZWQgPSBsYXN0RGVmaW5lZDtcbiAgICAgICAgICAgIGN1cnJlbnRfZXZlbnQgPSBuYW1lO1xuICAgICAgICAgICAgc3RvcCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgaWk7IGkrKykgaWYgKFwiekluZGV4XCIgaW4gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlZC5wdXNoKGxpc3RlbmVyc1tpXS56SW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0uekluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZVtsaXN0ZW5lcnNbaV0uekluZGV4XSA9IGxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleGVkLnNvcnQobnVtc29ydCk7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXhlZFt6XSA8IDApIHtcbiAgICAgICAgICAgICAgICBsID0gcXVldWVbaW5kZXhlZFt6KytdXTtcbiAgICAgICAgICAgICAgICBvdXQucHVzaChsLmFwcGx5KHNjb3BlLCBhcmdzKSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IG9sZHN0b3A7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsID0gbGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChcInpJbmRleFwiIGluIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwuekluZGV4ID09IGluZGV4ZWRbel0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGwuYXBwbHkoc2NvcGUsIGFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBxdWV1ZVtpbmRleGVkW3pdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsICYmIG91dC5wdXNoKGwuYXBwbHkoc2NvcGUsIGFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlIChsKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVbbC56SW5kZXhdID0gbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGwuYXBwbHkoc2NvcGUsIGFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcCA9IG9sZHN0b3A7XG4gICAgICAgICAgICBjdXJyZW50X2V2ZW50ID0gY2U7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9O1xuICAgICAgICAvLyBVbmRvY3VtZW50ZWQuIERlYnVnIG9ubHkuXG4gICAgICAgIGV2ZS5fZXZlbnRzID0gZXZlbnRzO1xuICAgIC8qXFxcbiAgICAgKiBldmUubGlzdGVuZXJzXG4gICAgIFsgbWV0aG9kIF1cblxuICAgICAqIEludGVybmFsIG1ldGhvZCB3aGljaCBnaXZlcyB5b3UgYXJyYXkgb2YgYWxsIGV2ZW50IGhhbmRsZXJzIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYnkgdGhlIGdpdmVuIGBuYW1lYC5cblxuICAgICA+IEFyZ3VtZW50c1xuXG4gICAgIC0gbmFtZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSBldmVudCwgZG90IChgLmApIG9yIHNsYXNoIChgL2ApIHNlcGFyYXRlZFxuXG4gICAgID0gKGFycmF5KSBhcnJheSBvZiBldmVudCBoYW5kbGVyc1xuICAgIFxcKi9cbiAgICBldmUubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZS5zcGxpdChzZXBhcmF0b3IpLFxuICAgICAgICAgICAgZSA9IGV2ZW50cyxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaWksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgamosXG4gICAgICAgICAgICBuZXMsXG4gICAgICAgICAgICBlcyA9IFtlXSxcbiAgICAgICAgICAgIG91dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIG5lcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChqID0gMCwgamogPSBlcy5sZW5ndGg7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgZSA9IGVzW2pdLm47XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbZVtuYW1lc1tpXV0sIGVbd2lsZGNhcmRdXTtcbiAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1trXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0ID0gb3V0LmNvbmNhdChpdGVtLmYgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXMgPSBuZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIFxuICAgIC8qXFxcbiAgICAgKiBldmUub25cbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEJpbmRzIGdpdmVuIGV2ZW50IGhhbmRsZXIgd2l0aCBhIGdpdmVuIG5hbWUuIFlvdSBjYW4gdXNlIHdpbGRjYXJkcyDigJxgKmDigJ0gZm9yIHRoZSBuYW1lczpcbiAgICAgfCBldmUub24oXCIqLnVuZGVyLipcIiwgZik7XG4gICAgIHwgZXZlKFwibW91c2UudW5kZXIuZmxvb3JcIik7IC8vIHRyaWdnZXJzIGZcbiAgICAgKiBVc2UgQGV2ZSB0byB0cmlnZ2VyIHRoZSBsaXN0ZW5lci5cbiAgICAgKipcbiAgICAgPiBBcmd1bWVudHNcbiAgICAgKipcbiAgICAgLSBuYW1lIChzdHJpbmcpIG5hbWUgb2YgdGhlIGV2ZW50LCBkb3QgKGAuYCkgb3Igc2xhc2ggKGAvYCkgc2VwYXJhdGVkLCB3aXRoIG9wdGlvbmFsIHdpbGRjYXJkc1xuICAgICAtIGYgKGZ1bmN0aW9uKSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgICoqXG4gICAgID0gKGZ1bmN0aW9uKSByZXR1cm5lZCBmdW5jdGlvbiBhY2NlcHRzIGEgc2luZ2xlIG51bWVyaWMgcGFyYW1ldGVyIHRoYXQgcmVwcmVzZW50cyB6LWluZGV4IG9mIHRoZSBoYW5kbGVyLiBJdCBpcyBhbiBvcHRpb25hbCBmZWF0dXJlIGFuZCBvbmx5IHVzZWQgd2hlbiB5b3UgbmVlZCB0byBlbnN1cmUgdGhhdCBzb21lIHN1YnNldCBvZiBoYW5kbGVycyB3aWxsIGJlIGludm9rZWQgaW4gYSBnaXZlbiBvcmRlciwgZGVzcGl0ZSBvZiB0aGUgb3JkZXIgb2YgYXNzaWdubWVudC4gXG4gICAgID4gRXhhbXBsZTpcbiAgICAgfCBldmUub24oXCJtb3VzZVwiLCBlYXRJdCkoMik7XG4gICAgIHwgZXZlLm9uKFwibW91c2VcIiwgc2NyZWFtKTtcbiAgICAgfCBldmUub24oXCJtb3VzZVwiLCBjYXRjaEl0KSgxKTtcbiAgICAgKiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYGNhdGNoSXRgIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBgZWF0SXRgLlxuICAgICAqXG4gICAgICogSWYgeW91IHdhbnQgdG8gcHV0IHlvdXIgaGFuZGxlciBiZWZvcmUgbm9uLWluZGV4ZWQgaGFuZGxlcnMsIHNwZWNpZnkgYSBuZWdhdGl2ZSB2YWx1ZS5cbiAgICAgKiBOb3RlOiBJIGFzc3VtZSBtb3N0IG9mIHRoZSB0aW1lIHlvdSBkb27igJl0IG5lZWQgdG8gd29ycnkgYWJvdXQgei1pbmRleCwgYnV0IGl04oCZcyBuaWNlIHRvIGhhdmUgdGhpcyBmZWF0dXJlIOKAnGp1c3QgaW4gY2FzZeKAnS5cbiAgICBcXCovXG4gICAgZXZlLm9uID0gZnVuY3Rpb24gKG5hbWUsIGYpIHtcbiAgICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUuc3BsaXQoY29tYXNlcGFyYXRvcik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IG5hbWUuc3BsaXQoc2VwYXJhdG9yKSxcbiAgICAgICAgICAgICAgICAgICAgZSA9IGV2ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Q7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbmFtZXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlID0gZS5uO1xuICAgICAgICAgICAgICAgICAgICBlID0gZS5oYXNPd25Qcm9wZXJ0eShuYW1lc1tpXSkgJiYgZVtuYW1lc1tpXV0gfHwgKGVbbmFtZXNbaV1dID0ge246IHt9fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUuZiA9IGUuZiB8fCBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IGUuZi5sZW5ndGg7IGkgPCBpaTsgaSsrKSBpZiAoZS5mW2ldID09IGYpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIWV4aXN0ICYmIGUuZi5wdXNoKGYpO1xuICAgICAgICAgICAgfShuYW1lc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoekluZGV4KSB7XG4gICAgICAgICAgICBpZiAoK3pJbmRleCA9PSArekluZGV4KSB7XG4gICAgICAgICAgICAgICAgZi56SW5kZXggPSArekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5mXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGZ1bmN0aW9uIHRoYXQgd2lsbCBmaXJlIGdpdmVuIGV2ZW50IHdpdGggb3B0aW9uYWwgYXJndW1lbnRzLlxuICAgICAqIEFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByZXN1bHQgZnVuY3Rpb24gd2lsbCBiZSBhbHNvXG4gICAgICogY29uY2F0ZWQgdG8gdGhlIGxpc3Qgb2YgZmluYWwgYXJndW1lbnRzLlxuICAgICB8IGVsLm9uY2xpY2sgPSBldmUuZihcImNsaWNrXCIsIDEsIDIpO1xuICAgICB8IGV2ZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgIHwgICAgIGNvbnNvbGUubG9nKGEsIGIsIGMpOyAvLyAxLCAyLCBbZXZlbnQgb2JqZWN0XVxuICAgICB8IH0pO1xuICAgICA+IEFyZ3VtZW50c1xuICAgICAtIGV2ZW50IChzdHJpbmcpIGV2ZW50IG5hbWVcbiAgICAgLSB2YXJhcmdzICjigKYpIGFuZCBhbnkgb3RoZXIgYXJndW1lbnRzXG4gICAgID0gKGZ1bmN0aW9uKSBwb3NzaWJsZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgXFwqL1xuICAgIGV2ZS5mID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBhdHRycyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV2ZS5hcHBseShudWxsLCBbZXZlbnQsIG51bGxdLmNvbmNhdChhdHRycykuY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5zdG9wXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBJcyB1c2VkIGluc2lkZSBhbiBldmVudCBoYW5kbGVyIHRvIHN0b3AgdGhlIGV2ZW50LCBwcmV2ZW50aW5nIGFueSBzdWJzZXF1ZW50IGxpc3RlbmVycyBmcm9tIGZpcmluZy5cbiAgICBcXCovXG4gICAgZXZlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3AgPSAxO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5udFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQ291bGQgYmUgdXNlZCBpbnNpZGUgZXZlbnQgaGFuZGxlciB0byBmaWd1cmUgb3V0IGFjdHVhbCBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKipcbiAgICAgPiBBcmd1bWVudHNcbiAgICAgKipcbiAgICAgLSBzdWJuYW1lIChzdHJpbmcpICNvcHRpb25hbCBzdWJuYW1lIG9mIHRoZSBldmVudFxuICAgICAqKlxuICAgICA9IChzdHJpbmcpIG5hbWUgb2YgdGhlIGV2ZW50LCBpZiBgc3VibmFtZWAgaXMgbm90IHNwZWNpZmllZFxuICAgICAqIG9yXG4gICAgID0gKGJvb2xlYW4pIGB0cnVlYCwgaWYgY3VycmVudCBldmVudOKAmXMgbmFtZSBjb250YWlucyBgc3VibmFtZWBcbiAgICBcXCovXG4gICAgZXZlLm50ID0gZnVuY3Rpb24gKHN1Ym5hbWUpIHtcbiAgICAgICAgaWYgKHN1Ym5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XFxcXC58XFxcXC98XilcIiArIHN1Ym5hbWUgKyBcIig/OlxcXFwufFxcXFwvfCQpXCIpLnRlc3QoY3VycmVudF9ldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRfZXZlbnQ7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogZXZlLm50c1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQ291bGQgYmUgdXNlZCBpbnNpZGUgZXZlbnQgaGFuZGxlciB0byBmaWd1cmUgb3V0IGFjdHVhbCBuYW1lIG9mIHRoZSBldmVudC5cbiAgICAgKipcbiAgICAgKipcbiAgICAgPSAoYXJyYXkpIG5hbWVzIG9mIHRoZSBldmVudFxuICAgIFxcKi9cbiAgICBldmUubnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudF9ldmVudC5zcGxpdChzZXBhcmF0b3IpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5vZmZcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgZ2l2ZW4gZnVuY3Rpb24gZnJvbSB0aGUgbGlzdCBvZiBldmVudCBsaXN0ZW5lcnMgYXNzaWduZWQgdG8gZ2l2ZW4gbmFtZS5cbiAgICAgKiBJZiBubyBhcmd1bWVudHMgc3BlY2lmaWVkIGFsbCB0aGUgZXZlbnRzIHdpbGwgYmUgY2xlYXJlZC5cbiAgICAgKipcbiAgICAgPiBBcmd1bWVudHNcbiAgICAgKipcbiAgICAgLSBuYW1lIChzdHJpbmcpIG5hbWUgb2YgdGhlIGV2ZW50LCBkb3QgKGAuYCkgb3Igc2xhc2ggKGAvYCkgc2VwYXJhdGVkLCB3aXRoIG9wdGlvbmFsIHdpbGRjYXJkc1xuICAgICAtIGYgKGZ1bmN0aW9uKSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBldmUudW5iaW5kXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBTZWUgQGV2ZS5vZmZcbiAgICBcXCovXG4gICAgZXZlLm9mZiA9IGV2ZS51bmJpbmQgPSBmdW5jdGlvbiAobmFtZSwgZikge1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGV2ZS5fZXZlbnRzID0gZXZlbnRzID0ge246IHt9fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lLnNwbGl0KGNvbWFzZXBhcmF0b3IpO1xuICAgICAgICBpZiAobmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbmFtZXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZS5vZmYobmFtZXNbaV0sIGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdChzZXBhcmF0b3IpO1xuICAgICAgICB2YXIgZSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHNwbGljZSxcbiAgICAgICAgICAgIGksIGlpLCBqLCBqaixcbiAgICAgICAgICAgIGN1ciA9IFtldmVudHNdO1xuICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjdXIubGVuZ3RoOyBqICs9IHNwbGljZS5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgc3BsaWNlID0gW2osIDFdO1xuICAgICAgICAgICAgICAgIGUgPSBjdXJbal0ubjtcbiAgICAgICAgICAgICAgICBpZiAobmFtZXNbaV0gIT0gd2lsZGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbbmFtZXNbaV1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2UucHVzaChlW25hbWVzW2ldXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBlKSBpZiAoZVtoYXNdKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGljZS5wdXNoKGVba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VyLnNwbGljZS5hcHBseShjdXIsIHNwbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMCwgaWkgPSBjdXIubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgZSA9IGN1cltpXTtcbiAgICAgICAgICAgIHdoaWxlIChlLm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5mKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwLCBqaiA9IGUuZi5sZW5ndGg7IGogPCBqajsgaisrKSBpZiAoZS5mW2pdID09IGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmYuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIWUuZi5sZW5ndGggJiYgZGVsZXRlIGUuZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBlLm4pIGlmIChlLm5baGFzXShrZXkpICYmIGUubltrZXldLmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmdW5jcyA9IGUubltrZXldLmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwLCBqaiA9IGZ1bmNzLmxlbmd0aDsgaiA8IGpqOyBqKyspIGlmIChmdW5jc1tqXSA9PSBmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Muc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmNzLmxlbmd0aCAmJiBkZWxldGUgZS5uW2tleV0uZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlLmY7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGUubikgaWYgKGUubltoYXNdKGtleSkgJiYgZS5uW2tleV0uZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGUubltrZXldLmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZSA9IGUubjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5vbmNlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBCaW5kcyBnaXZlbiBldmVudCBoYW5kbGVyIHdpdGggYSBnaXZlbiBuYW1lIHRvIG9ubHkgcnVuIG9uY2UgdGhlbiB1bmJpbmQgaXRzZWxmLlxuICAgICB8IGV2ZS5vbmNlKFwibG9naW5cIiwgZik7XG4gICAgIHwgZXZlKFwibG9naW5cIik7IC8vIHRyaWdnZXJzIGZcbiAgICAgfCBldmUoXCJsb2dpblwiKTsgLy8gbm8gbGlzdGVuZXJzXG4gICAgICogVXNlIEBldmUgdG8gdHJpZ2dlciB0aGUgbGlzdGVuZXIuXG4gICAgICoqXG4gICAgID4gQXJndW1lbnRzXG4gICAgICoqXG4gICAgIC0gbmFtZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSBldmVudCwgZG90IChgLmApIG9yIHNsYXNoIChgL2ApIHNlcGFyYXRlZCwgd2l0aCBvcHRpb25hbCB3aWxkY2FyZHNcbiAgICAgLSBmIChmdW5jdGlvbikgZXZlbnQgaGFuZGxlciBmdW5jdGlvblxuICAgICAqKlxuICAgICA9IChmdW5jdGlvbikgc2FtZSByZXR1cm4gZnVuY3Rpb24gYXMgQGV2ZS5vblxuICAgIFxcKi9cbiAgICBldmUub25jZSA9IGZ1bmN0aW9uIChuYW1lLCBmKSB7XG4gICAgICAgIHZhciBmMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV2ZS51bmJpbmQobmFtZSwgZjIpO1xuICAgICAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV2ZS5vbihuYW1lLCBmMik7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogZXZlLnZlcnNpb25cbiAgICAgWyBwcm9wZXJ0eSAoc3RyaW5nKSBdXG4gICAgICoqXG4gICAgICogQ3VycmVudCB2ZXJzaW9uIG9mIHRoZSBsaWJyYXJ5LlxuICAgIFxcKi9cbiAgICBldmUudmVyc2lvbiA9IHZlcnNpb247XG4gICAgZXZlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgYXJlIHJ1bm5pbmcgRXZlIFwiICsgdmVyc2lvbjtcbiAgICB9O1xuICAgICh0eXBlb2YgbW9kdWxlICE9IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpID8gKG1vZHVsZS5leHBvcnRzID0gZXZlKSA6ICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCA/IChkZWZpbmUoXCJldmVcIiwgW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gZXZlOyB9KSkgOiAoZ2xvYi5ldmUgPSBldmUpKTtcbn0pKHRoaXMpO1xuIiwiLy8gU25hcC5zdmcgMC40LjBcbi8vIFxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIOKAkyAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuLy8gXG4vLyBidWlsZDogMjAxNS0wNC0wN1xuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTMgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vIFxuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLyBcbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4vLyDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgXFxcXFxuLy8g4pSCIEV2ZSAwLjQuMiAtIEphdmFTY3JpcHQgRXZlbnRzIExpYnJhcnkgICAgICAgICAgICAgICAgICAgICAg4pSCIFxcXFxcbi8vIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpCBcXFxcXG4vLyDilIIgQXV0aG9yIERtaXRyeSBCYXJhbm92c2tpeSAoaHR0cDovL2RtaXRyeS5iYXJhbm92c2tpeS5jb20vKSDilIIgXFxcXFxuLy8g4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYIFxcXFxcblxuKGZ1bmN0aW9uIChnbG9iKSB7XG4gICAgdmFyIHZlcnNpb24gPSBcIjAuNC4yXCIsXG4gICAgICAgIGhhcyA9IFwiaGFzT3duUHJvcGVydHlcIixcbiAgICAgICAgc2VwYXJhdG9yID0gL1tcXC5cXC9dLyxcbiAgICAgICAgY29tYXNlcGFyYXRvciA9IC9cXHMqLFxccyovLFxuICAgICAgICB3aWxkY2FyZCA9IFwiKlwiLFxuICAgICAgICBmdW4gPSBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgbnVtc29ydCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRfZXZlbnQsXG4gICAgICAgIHN0b3AsXG4gICAgICAgIGV2ZW50cyA9IHtuOiB7fX0sXG4gICAgICAgIGZpcnN0RGVmaW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRoaXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tpXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGFzdERlZmluZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKC0taSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tpXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAvKlxcXG4gICAgICogZXZlXG4gICAgIFsgbWV0aG9kIF1cblxuICAgICAqIEZpcmVzIGV2ZW50IHdpdGggZ2l2ZW4gYG5hbWVgLCBnaXZlbiBzY29wZSBhbmQgb3RoZXIgcGFyYW1ldGVycy5cblxuICAgICA+IEFyZ3VtZW50c1xuXG4gICAgIC0gbmFtZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSAqZXZlbnQqLCBkb3QgKGAuYCkgb3Igc2xhc2ggKGAvYCkgc2VwYXJhdGVkXG4gICAgIC0gc2NvcGUgKG9iamVjdCkgY29udGV4dCBmb3IgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgIC0gdmFyYXJncyAoLi4uKSB0aGUgcmVzdCBvZiBhcmd1bWVudHMgd2lsbCBiZSBzZW50IHRvIGV2ZW50IGhhbmRsZXJzXG5cbiAgICAgPSAob2JqZWN0KSBhcnJheSBvZiByZXR1cm5lZCB2YWx1ZXMgZnJvbSB0aGUgbGlzdGVuZXJzLiBBcnJheSBoYXMgdHdvIG1ldGhvZHMgYC5maXJzdERlZmluZWQoKWAgYW5kIGAubGFzdERlZmluZWQoKWAgdG8gZ2V0IGZpcnN0IG9yIGxhc3Qgbm90IGB1bmRlZmluZWRgIHZhbHVlLlxuICAgIFxcKi9cbiAgICAgICAgZXZlID0gZnVuY3Rpb24gKG5hbWUsIHNjb3BlKSB7XG4gICAgICAgICAgICBuYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgICAgICAgICAgdmFyIGUgPSBldmVudHMsXG4gICAgICAgICAgICAgICAgb2xkc3RvcCA9IHN0b3AsXG4gICAgICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gZXZlLmxpc3RlbmVycyhuYW1lKSxcbiAgICAgICAgICAgICAgICB6ID0gMCxcbiAgICAgICAgICAgICAgICBmID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbCxcbiAgICAgICAgICAgICAgICBpbmRleGVkID0gW10sXG4gICAgICAgICAgICAgICAgcXVldWUgPSB7fSxcbiAgICAgICAgICAgICAgICBvdXQgPSBbXSxcbiAgICAgICAgICAgICAgICBjZSA9IGN1cnJlbnRfZXZlbnQsXG4gICAgICAgICAgICAgICAgZXJyb3JzID0gW107XG4gICAgICAgICAgICBvdXQuZmlyc3REZWZpbmVkID0gZmlyc3REZWZpbmVkO1xuICAgICAgICAgICAgb3V0Lmxhc3REZWZpbmVkID0gbGFzdERlZmluZWQ7XG4gICAgICAgICAgICBjdXJyZW50X2V2ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIHN0b3AgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGlpOyBpKyspIGlmIChcInpJbmRleFwiIGluIGxpc3RlbmVyc1tpXSkge1xuICAgICAgICAgICAgICAgIGluZGV4ZWQucHVzaChsaXN0ZW5lcnNbaV0uekluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLnpJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWVbbGlzdGVuZXJzW2ldLnpJbmRleF0gPSBsaXN0ZW5lcnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXhlZC5zb3J0KG51bXNvcnQpO1xuICAgICAgICAgICAgd2hpbGUgKGluZGV4ZWRbel0gPCAwKSB7XG4gICAgICAgICAgICAgICAgbCA9IHF1ZXVlW2luZGV4ZWRbeisrXV07XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobC5hcHBseShzY29wZSwgYXJncykpO1xuICAgICAgICAgICAgICAgIGlmIChzdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AgPSBvbGRzdG9wO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbCA9IGxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoXCJ6SW5kZXhcIiBpbiBsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsLnpJbmRleCA9PSBpbmRleGVkW3pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChsLmFwcGx5KHNjb3BlLCBhcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gcXVldWVbaW5kZXhlZFt6XV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCAmJiBvdXQucHVzaChsLmFwcGx5KHNjb3BlLCBhcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAobClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlW2wuekluZGV4XSA9IGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChsLmFwcGx5KHNjb3BlLCBhcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0b3AgPSBvbGRzdG9wO1xuICAgICAgICAgICAgY3VycmVudF9ldmVudCA9IGNlO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVW5kb2N1bWVudGVkLiBEZWJ1ZyBvbmx5LlxuICAgICAgICBldmUuX2V2ZW50cyA9IGV2ZW50cztcbiAgICAvKlxcXG4gICAgICogZXZlLmxpc3RlbmVyc1xuICAgICBbIG1ldGhvZCBdXG5cbiAgICAgKiBJbnRlcm5hbCBtZXRob2Qgd2hpY2ggZ2l2ZXMgeW91IGFycmF5IG9mIGFsbCBldmVudCBoYW5kbGVycyB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGJ5IHRoZSBnaXZlbiBgbmFtZWAuXG5cbiAgICAgPiBBcmd1bWVudHNcblxuICAgICAtIG5hbWUgKHN0cmluZykgbmFtZSBvZiB0aGUgZXZlbnQsIGRvdCAoYC5gKSBvciBzbGFzaCAoYC9gKSBzZXBhcmF0ZWRcblxuICAgICA9IChhcnJheSkgYXJyYXkgb2YgZXZlbnQgaGFuZGxlcnNcbiAgICBcXCovXG4gICAgZXZlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IG5hbWUuc3BsaXQoc2VwYXJhdG9yKSxcbiAgICAgICAgICAgIGUgPSBldmVudHMsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGpqLFxuICAgICAgICAgICAgbmVzLFxuICAgICAgICAgICAgZXMgPSBbZV0sXG4gICAgICAgICAgICBvdXQgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgaWkgPSBuYW1lcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBuZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGpqID0gZXMubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgIGUgPSBlc1tqXS5uO1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gW2VbbmFtZXNbaV1dLCBlW3dpbGRjYXJkXV07XG4gICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNba107XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCA9IG91dC5jb25jYXQoaXRlbS5mIHx8IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzID0gbmVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBcbiAgICAvKlxcXG4gICAgICogZXZlLm9uXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBCaW5kcyBnaXZlbiBldmVudCBoYW5kbGVyIHdpdGggYSBnaXZlbiBuYW1lLiBZb3UgY2FuIHVzZSB3aWxkY2FyZHMg4oCcYCpg4oCdIGZvciB0aGUgbmFtZXM6XG4gICAgIHwgZXZlLm9uKFwiKi51bmRlci4qXCIsIGYpO1xuICAgICB8IGV2ZShcIm1vdXNlLnVuZGVyLmZsb29yXCIpOyAvLyB0cmlnZ2VycyBmXG4gICAgICogVXNlIEBldmUgdG8gdHJpZ2dlciB0aGUgbGlzdGVuZXIuXG4gICAgICoqXG4gICAgID4gQXJndW1lbnRzXG4gICAgICoqXG4gICAgIC0gbmFtZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSBldmVudCwgZG90IChgLmApIG9yIHNsYXNoIChgL2ApIHNlcGFyYXRlZCwgd2l0aCBvcHRpb25hbCB3aWxkY2FyZHNcbiAgICAgLSBmIChmdW5jdGlvbikgZXZlbnQgaGFuZGxlciBmdW5jdGlvblxuICAgICAqKlxuICAgICA9IChmdW5jdGlvbikgcmV0dXJuZWQgZnVuY3Rpb24gYWNjZXB0cyBhIHNpbmdsZSBudW1lcmljIHBhcmFtZXRlciB0aGF0IHJlcHJlc2VudHMgei1pbmRleCBvZiB0aGUgaGFuZGxlci4gSXQgaXMgYW4gb3B0aW9uYWwgZmVhdHVyZSBhbmQgb25seSB1c2VkIHdoZW4geW91IG5lZWQgdG8gZW5zdXJlIHRoYXQgc29tZSBzdWJzZXQgb2YgaGFuZGxlcnMgd2lsbCBiZSBpbnZva2VkIGluIGEgZ2l2ZW4gb3JkZXIsIGRlc3BpdGUgb2YgdGhlIG9yZGVyIG9mIGFzc2lnbm1lbnQuIFxuICAgICA+IEV4YW1wbGU6XG4gICAgIHwgZXZlLm9uKFwibW91c2VcIiwgZWF0SXQpKDIpO1xuICAgICB8IGV2ZS5vbihcIm1vdXNlXCIsIHNjcmVhbSk7XG4gICAgIHwgZXZlLm9uKFwibW91c2VcIiwgY2F0Y2hJdCkoMSk7XG4gICAgICogVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGBjYXRjaEl0YCBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgYGVhdEl0YC5cbiAgICAgKlxuICAgICAqIElmIHlvdSB3YW50IHRvIHB1dCB5b3VyIGhhbmRsZXIgYmVmb3JlIG5vbi1pbmRleGVkIGhhbmRsZXJzLCBzcGVjaWZ5IGEgbmVnYXRpdmUgdmFsdWUuXG4gICAgICogTm90ZTogSSBhc3N1bWUgbW9zdCBvZiB0aGUgdGltZSB5b3UgZG9u4oCZdCBuZWVkIHRvIHdvcnJ5IGFib3V0IHotaW5kZXgsIGJ1dCBpdOKAmXMgbmljZSB0byBoYXZlIHRoaXMgZmVhdHVyZSDigJxqdXN0IGluIGNhc2XigJ0uXG4gICAgXFwqL1xuICAgIGV2ZS5vbiA9IGZ1bmN0aW9uIChuYW1lLCBmKSB7XG4gICAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICAgIGlmICh0eXBlb2YgZiAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lLnNwbGl0KGNvbWFzZXBhcmF0b3IpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBuYW1lcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZXMgPSBuYW1lLnNwbGl0KHNlcGFyYXRvciksXG4gICAgICAgICAgICAgICAgICAgIGUgPSBldmVudHMsXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGUubjtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGUuaGFzT3duUHJvcGVydHkobmFtZXNbaV0pICYmIGVbbmFtZXNbaV1dIHx8IChlW25hbWVzW2ldXSA9IHtuOiB7fX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmYgPSBlLmYgfHwgW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgaWkgPSBlLmYubGVuZ3RoOyBpIDwgaWk7IGkrKykgaWYgKGUuZltpXSA9PSBmKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICFleGlzdCAmJiBlLmYucHVzaChmKTtcbiAgICAgICAgICAgIH0obmFtZXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHpJbmRleCkge1xuICAgICAgICAgICAgaWYgKCt6SW5kZXggPT0gK3pJbmRleCkge1xuICAgICAgICAgICAgICAgIGYuekluZGV4ID0gK3pJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBldmUuZlxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyBmdW5jdGlvbiB0aGF0IHdpbGwgZmlyZSBnaXZlbiBldmVudCB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50cy5cbiAgICAgKiBBcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcmVzdWx0IGZ1bmN0aW9uIHdpbGwgYmUgYWxzb1xuICAgICAqIGNvbmNhdGVkIHRvIHRoZSBsaXN0IG9mIGZpbmFsIGFyZ3VtZW50cy5cbiAgICAgfCBlbC5vbmNsaWNrID0gZXZlLmYoXCJjbGlja1wiLCAxLCAyKTtcbiAgICAgfCBldmUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICB8ICAgICBjb25zb2xlLmxvZyhhLCBiLCBjKTsgLy8gMSwgMiwgW2V2ZW50IG9iamVjdF1cbiAgICAgfCB9KTtcbiAgICAgPiBBcmd1bWVudHNcbiAgICAgLSBldmVudCAoc3RyaW5nKSBldmVudCBuYW1lXG4gICAgIC0gdmFyYXJncyAo4oCmKSBhbmQgYW55IG90aGVyIGFyZ3VtZW50c1xuICAgICA9IChmdW5jdGlvbikgcG9zc2libGUgZXZlbnQgaGFuZGxlciBmdW5jdGlvblxuICAgIFxcKi9cbiAgICBldmUuZiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBldmUuYXBwbHkobnVsbCwgW2V2ZW50LCBudWxsXS5jb25jYXQoYXR0cnMpLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBldmUuc3RvcFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogSXMgdXNlZCBpbnNpZGUgYW4gZXZlbnQgaGFuZGxlciB0byBzdG9wIHRoZSBldmVudCwgcHJldmVudGluZyBhbnkgc3Vic2VxdWVudCBsaXN0ZW5lcnMgZnJvbSBmaXJpbmcuXG4gICAgXFwqL1xuICAgIGV2ZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wID0gMTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBldmUubnRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIENvdWxkIGJlIHVzZWQgaW5zaWRlIGV2ZW50IGhhbmRsZXIgdG8gZmlndXJlIG91dCBhY3R1YWwgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICoqXG4gICAgID4gQXJndW1lbnRzXG4gICAgICoqXG4gICAgIC0gc3VibmFtZSAoc3RyaW5nKSAjb3B0aW9uYWwgc3VibmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKipcbiAgICAgPSAoc3RyaW5nKSBuYW1lIG9mIHRoZSBldmVudCwgaWYgYHN1Ym5hbWVgIGlzIG5vdCBzcGVjaWZpZWRcbiAgICAgKiBvclxuICAgICA9IChib29sZWFuKSBgdHJ1ZWAsIGlmIGN1cnJlbnQgZXZlbnTigJlzIG5hbWUgY29udGFpbnMgYHN1Ym5hbWVgXG4gICAgXFwqL1xuICAgIGV2ZS5udCA9IGZ1bmN0aW9uIChzdWJuYW1lKSB7XG4gICAgICAgIGlmIChzdWJuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlxcXFwufFxcXFwvfF4pXCIgKyBzdWJuYW1lICsgXCIoPzpcXFxcLnxcXFxcL3wkKVwiKS50ZXN0KGN1cnJlbnRfZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50X2V2ZW50O1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS5udHNcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIENvdWxkIGJlIHVzZWQgaW5zaWRlIGV2ZW50IGhhbmRsZXIgdG8gZmlndXJlIG91dCBhY3R1YWwgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAgICoqXG4gICAgICoqXG4gICAgID0gKGFycmF5KSBuYW1lcyBvZiB0aGUgZXZlbnRcbiAgICBcXCovXG4gICAgZXZlLm50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRfZXZlbnQuc3BsaXQoc2VwYXJhdG9yKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBldmUub2ZmXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGdpdmVuIGZ1bmN0aW9uIGZyb20gdGhlIGxpc3Qgb2YgZXZlbnQgbGlzdGVuZXJzIGFzc2lnbmVkIHRvIGdpdmVuIG5hbWUuXG4gICAgICogSWYgbm8gYXJndW1lbnRzIHNwZWNpZmllZCBhbGwgdGhlIGV2ZW50cyB3aWxsIGJlIGNsZWFyZWQuXG4gICAgICoqXG4gICAgID4gQXJndW1lbnRzXG4gICAgICoqXG4gICAgIC0gbmFtZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSBldmVudCwgZG90IChgLmApIG9yIHNsYXNoIChgL2ApIHNlcGFyYXRlZCwgd2l0aCBvcHRpb25hbCB3aWxkY2FyZHNcbiAgICAgLSBmIChmdW5jdGlvbikgZXZlbnQgaGFuZGxlciBmdW5jdGlvblxuICAgIFxcKi9cbiAgICAvKlxcXG4gICAgICogZXZlLnVuYmluZFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogU2VlIEBldmUub2ZmXG4gICAgXFwqL1xuICAgIGV2ZS5vZmYgPSBldmUudW5iaW5kID0gZnVuY3Rpb24gKG5hbWUsIGYpIHtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBldmUuX2V2ZW50cyA9IGV2ZW50cyA9IHtuOiB7fX07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZS5zcGxpdChjb21hc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKG5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IG5hbWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmUub2ZmKG5hbWVzW2ldLCBmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuYW1lcyA9IG5hbWUuc3BsaXQoc2VwYXJhdG9yKTtcbiAgICAgICAgdmFyIGUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBzcGxpY2UsXG4gICAgICAgICAgICBpLCBpaSwgaiwgamosXG4gICAgICAgICAgICBjdXIgPSBbZXZlbnRzXTtcbiAgICAgICAgZm9yIChpID0gMCwgaWkgPSBuYW1lcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY3VyLmxlbmd0aDsgaiArPSBzcGxpY2UubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgICAgIHNwbGljZSA9IFtqLCAxXTtcbiAgICAgICAgICAgICAgICBlID0gY3VyW2pdLm47XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVzW2ldICE9IHdpbGRjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW25hbWVzW2ldXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaWNlLnB1c2goZVtuYW1lc1tpXV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gZSkgaWYgKGVbaGFzXShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2UucHVzaChlW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1ci5zcGxpY2UuYXBwbHkoY3VyLCBzcGxpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDAsIGlpID0gY3VyLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSBjdXJbaV07XG4gICAgICAgICAgICB3aGlsZSAoZS5uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMCwgamogPSBlLmYubGVuZ3RoOyBqIDwgamo7IGorKykgaWYgKGUuZltqXSA9PSBmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5mLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICFlLmYubGVuZ3RoICYmIGRlbGV0ZSBlLmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gZS5uKSBpZiAoZS5uW2hhc10oa2V5KSAmJiBlLm5ba2V5XS5mKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnVuY3MgPSBlLm5ba2V5XS5mO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMCwgamogPSBmdW5jcy5sZW5ndGg7IGogPCBqajsgaisrKSBpZiAoZnVuY3Nbal0gPT0gZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmNzLnNwbGljZShqLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jcy5sZW5ndGggJiYgZGVsZXRlIGUubltrZXldLmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZS5mO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBlLm4pIGlmIChlLm5baGFzXShrZXkpICYmIGUubltrZXldLmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlLm5ba2V5XS5mO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUgPSBlLm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBldmUub25jZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQmluZHMgZ2l2ZW4gZXZlbnQgaGFuZGxlciB3aXRoIGEgZ2l2ZW4gbmFtZSB0byBvbmx5IHJ1biBvbmNlIHRoZW4gdW5iaW5kIGl0c2VsZi5cbiAgICAgfCBldmUub25jZShcImxvZ2luXCIsIGYpO1xuICAgICB8IGV2ZShcImxvZ2luXCIpOyAvLyB0cmlnZ2VycyBmXG4gICAgIHwgZXZlKFwibG9naW5cIik7IC8vIG5vIGxpc3RlbmVyc1xuICAgICAqIFVzZSBAZXZlIHRvIHRyaWdnZXIgdGhlIGxpc3RlbmVyLlxuICAgICAqKlxuICAgICA+IEFyZ3VtZW50c1xuICAgICAqKlxuICAgICAtIG5hbWUgKHN0cmluZykgbmFtZSBvZiB0aGUgZXZlbnQsIGRvdCAoYC5gKSBvciBzbGFzaCAoYC9gKSBzZXBhcmF0ZWQsIHdpdGggb3B0aW9uYWwgd2lsZGNhcmRzXG4gICAgIC0gZiAoZnVuY3Rpb24pIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25cbiAgICAgKipcbiAgICAgPSAoZnVuY3Rpb24pIHNhbWUgcmV0dXJuIGZ1bmN0aW9uIGFzIEBldmUub25cbiAgICBcXCovXG4gICAgZXZlLm9uY2UgPSBmdW5jdGlvbiAobmFtZSwgZikge1xuICAgICAgICB2YXIgZjIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBldmUudW5iaW5kKG5hbWUsIGYyKTtcbiAgICAgICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBldmUub24obmFtZSwgZjIpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIGV2ZS52ZXJzaW9uXG4gICAgIFsgcHJvcGVydHkgKHN0cmluZykgXVxuICAgICAqKlxuICAgICAqIEN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgbGlicmFyeS5cbiAgICBcXCovXG4gICAgZXZlLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIGV2ZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGFyZSBydW5uaW5nIEV2ZSBcIiArIHZlcnNpb247XG4gICAgfTtcbiAgICAodHlwZW9mIG1vZHVsZSAhPSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSA/IChtb2R1bGUuZXhwb3J0cyA9IGV2ZSkgOiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgPyAoZGVmaW5lKFwiZXZlXCIsIFtdLCBmdW5jdGlvbigpIHsgcmV0dXJuIGV2ZTsgfSkpIDogKGdsb2IuZXZlID0gZXZlKSk7XG59KSh0aGlzKTtcblxuKGZ1bmN0aW9uIChnbG9iLCBmYWN0b3J5KSB7XG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBEZWZpbmUgYXMgYW4gYW5vbnltb3VzIG1vZHVsZVxuICAgICAgICBkZWZpbmUoW1wiZXZlXCJdLCBmdW5jdGlvbiAoZXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeShnbG9iLCBldmUpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIE5leHQgZm9yIE5vZGUuanMgb3IgQ29tbW9uSlNcbiAgICAgICAgdmFyIGV2ZSA9IHJlcXVpcmUoJ2V2ZScpO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoZ2xvYiwgZXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKGdsb2IgaXMgd2luZG93KVxuICAgICAgICAvLyBTbmFwIGFkZHMgaXRzZWxmIHRvIHdpbmRvd1xuICAgICAgICBmYWN0b3J5KGdsb2IsIGdsb2IuZXZlKTtcbiAgICB9XG59KHdpbmRvdyB8fCB0aGlzLCBmdW5jdGlvbiAod2luZG93LCBldmUpIHtcblxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxudmFyIG1pbmEgPSAoZnVuY3Rpb24gKGV2ZSkge1xuICAgIHZhciBhbmltYXRpb25zID0ge30sXG4gICAgcmVxdWVzdEFuaW1GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgIH0sXG4gICAgaWRnZW4gPSAwLFxuICAgIGlkcHJlZml4ID0gXCJNXCIgKyAoK25ldyBEYXRlKS50b1N0cmluZygzNiksXG4gICAgSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpZHByZWZpeCArIChpZGdlbisrKS50b1N0cmluZygzNik7XG4gICAgfSxcbiAgICBkaWZmID0gZnVuY3Rpb24gKGEsIGIsIEEsIEIpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgIHJlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYS5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVzW2ldID0gZGlmZihhW2ldLCBiLCBBW2ldLCBCKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZiA9IChBIC0gYSkgLyAoQiAtIGIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGRpZiAqIChiYiAtIGIpO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgdGltZXIgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGU7XG4gICAgfSxcbiAgICBzdGEgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5zO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkcyA9IGEucyAtIHZhbDtcbiAgICAgICAgYS5iICs9IGEuZHVyICogZHM7XG4gICAgICAgIGEuQiArPSBhLmR1ciAqIGRzO1xuICAgICAgICBhLnMgPSB2YWw7XG4gICAgfSxcbiAgICBzcGVlZCA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnNwZDtcbiAgICAgICAgfVxuICAgICAgICBhLnNwZCA9IHZhbDtcbiAgICB9LFxuICAgIGR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGEuZHVyO1xuICAgICAgICB9XG4gICAgICAgIGEucyA9IGEucyAqIHZhbCAvIGEuZHVyO1xuICAgICAgICBhLmR1ciA9IHZhbDtcbiAgICB9LFxuICAgIHN0b3BpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICBkZWxldGUgYW5pbWF0aW9uc1thLmlkXTtcbiAgICAgICAgYS51cGRhdGUoKTtcbiAgICAgICAgZXZlKFwibWluYS5zdG9wLlwiICsgYS5pZCwgYSk7XG4gICAgfSxcbiAgICBwYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICBpZiAoYS5wZGlmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGFuaW1hdGlvbnNbYS5pZF07XG4gICAgICAgIGEudXBkYXRlKCk7XG4gICAgICAgIGEucGRpZiA9IGEuZ2V0KCkgLSBhLmI7XG4gICAgfSxcbiAgICByZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gdGhpcztcbiAgICAgICAgaWYgKCFhLnBkaWYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhLmIgPSBhLmdldCgpIC0gYS5wZGlmO1xuICAgICAgICBkZWxldGUgYS5wZGlmO1xuICAgICAgICBhbmltYXRpb25zW2EuaWRdID0gYTtcbiAgICB9LFxuICAgIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLFxuICAgICAgICAgICAgcmVzO1xuICAgICAgICBpZiAoaXNBcnJheShhLnN0YXJ0KSkge1xuICAgICAgICAgICAgcmVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamogPSBhLnN0YXJ0Lmxlbmd0aDsgaiA8IGpqOyBqKyspIHtcbiAgICAgICAgICAgICAgICByZXNbal0gPSArYS5zdGFydFtqXSArXG4gICAgICAgICAgICAgICAgICAgIChhLmVuZFtqXSAtIGEuc3RhcnRbal0pICogYS5lYXNpbmcoYS5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9ICthLnN0YXJ0ICsgKGEuZW5kIC0gYS5zdGFydCkgKiBhLmVhc2luZyhhLnMpO1xuICAgICAgICB9XG4gICAgICAgIGEuc2V0KHJlcyk7XG4gICAgfSxcbiAgICBmcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgaW4gYW5pbWF0aW9ucykgaWYgKGFuaW1hdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHZhciBhID0gYW5pbWF0aW9uc1tpXSxcbiAgICAgICAgICAgICAgICBiID0gYS5nZXQoKSxcbiAgICAgICAgICAgICAgICByZXM7XG4gICAgICAgICAgICBsZW4rKztcbiAgICAgICAgICAgIGEucyA9IChiIC0gYS5iKSAvIChhLmR1ciAvIGEuc3BkKTtcbiAgICAgICAgICAgIGlmIChhLnMgPj0gMSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhbmltYXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIGEucyA9IDE7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlKFwibWluYS5maW5pc2guXCIgKyBhLmlkLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfShhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiAmJiByZXF1ZXN0QW5pbUZyYW1lKGZyYW1lKTtcbiAgICB9LFxuICAgIC8qXFxcbiAgICAgKiBtaW5hXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBHZW5lcmljIGFuaW1hdGlvbiBvZiBudW1iZXJzXG4gICAgICoqXG4gICAgIC0gYSAobnVtYmVyKSBzdGFydCBfc2xhdmVfIG51bWJlclxuICAgICAtIEEgKG51bWJlcikgZW5kIF9zbGF2ZV8gbnVtYmVyXG4gICAgIC0gYiAobnVtYmVyKSBzdGFydCBfbWFzdGVyXyBudW1iZXIgKHN0YXJ0IHRpbWUgaW4gZ2VuZXJhbCBjYXNlKVxuICAgICAtIEIgKG51bWJlcikgZW5kIF9tYXN0ZXJfIG51bWJlciAoZW5kIHRpbWUgaW4gZ2VyZWFsIGNhc2UpXG4gICAgIC0gZ2V0IChmdW5jdGlvbikgZ2V0dGVyIG9mIF9tYXN0ZXJfIG51bWJlciAoc2VlIEBtaW5hLnRpbWUpXG4gICAgIC0gc2V0IChmdW5jdGlvbikgc2V0dGVyIG9mIF9zbGF2ZV8gbnVtYmVyXG4gICAgIC0gZWFzaW5nIChmdW5jdGlvbikgI29wdGlvbmFsIGVhc2luZyBmdW5jdGlvbiwgZGVmYXVsdCBpcyBAbWluYS5saW5lYXJcbiAgICAgPSAob2JqZWN0KSBhbmltYXRpb24gZGVzY3JpcHRvclxuICAgICBvIHtcbiAgICAgbyAgICAgICAgIGlkIChzdHJpbmcpIGFuaW1hdGlvbiBpZCxcbiAgICAgbyAgICAgICAgIHN0YXJ0IChudW1iZXIpIHN0YXJ0IF9zbGF2ZV8gbnVtYmVyLFxuICAgICBvICAgICAgICAgZW5kIChudW1iZXIpIGVuZCBfc2xhdmVfIG51bWJlcixcbiAgICAgbyAgICAgICAgIGIgKG51bWJlcikgc3RhcnQgX21hc3Rlcl8gbnVtYmVyLFxuICAgICBvICAgICAgICAgcyAobnVtYmVyKSBhbmltYXRpb24gc3RhdHVzICgwLi4xKSxcbiAgICAgbyAgICAgICAgIGR1ciAobnVtYmVyKSBhbmltYXRpb24gZHVyYXRpb24sXG4gICAgIG8gICAgICAgICBzcGQgKG51bWJlcikgYW5pbWF0aW9uIHNwZWVkLFxuICAgICBvICAgICAgICAgZ2V0IChmdW5jdGlvbikgZ2V0dGVyIG9mIF9tYXN0ZXJfIG51bWJlciAoc2VlIEBtaW5hLnRpbWUpLFxuICAgICBvICAgICAgICAgc2V0IChmdW5jdGlvbikgc2V0dGVyIG9mIF9zbGF2ZV8gbnVtYmVyLFxuICAgICBvICAgICAgICAgZWFzaW5nIChmdW5jdGlvbikgZWFzaW5nIGZ1bmN0aW9uLCBkZWZhdWx0IGlzIEBtaW5hLmxpbmVhcixcbiAgICAgbyAgICAgICAgIHN0YXR1cyAoZnVuY3Rpb24pIHN0YXR1cyBnZXR0ZXIvc2V0dGVyLFxuICAgICBvICAgICAgICAgc3BlZWQgKGZ1bmN0aW9uKSBzcGVlZCBnZXR0ZXIvc2V0dGVyLFxuICAgICBvICAgICAgICAgZHVyYXRpb24gKGZ1bmN0aW9uKSBkdXJhdGlvbiBnZXR0ZXIvc2V0dGVyLFxuICAgICBvICAgICAgICAgc3RvcCAoZnVuY3Rpb24pIGFuaW1hdGlvbiBzdG9wcGVyXG4gICAgIG8gICAgICAgICBwYXVzZSAoZnVuY3Rpb24pIHBhdXNlcyB0aGUgYW5pbWF0aW9uXG4gICAgIG8gICAgICAgICByZXN1bWUgKGZ1bmN0aW9uKSByZXN1bWVzIHRoZSBhbmltYXRpb25cbiAgICAgbyAgICAgICAgIHVwZGF0ZSAoZnVuY3Rpb24pIGNhbGxlcyBzZXR0ZXIgd2l0aCB0aGUgcmlnaHQgdmFsdWUgb2YgdGhlIGFuaW1hdGlvblxuICAgICBvIH1cbiAgICBcXCovXG4gICAgbWluYSA9IGZ1bmN0aW9uIChhLCBBLCBiLCBCLCBnZXQsIHNldCwgZWFzaW5nKSB7XG4gICAgICAgIHZhciBhbmltID0ge1xuICAgICAgICAgICAgaWQ6IElEKCksXG4gICAgICAgICAgICBzdGFydDogYSxcbiAgICAgICAgICAgIGVuZDogQSxcbiAgICAgICAgICAgIGI6IGIsXG4gICAgICAgICAgICBzOiAwLFxuICAgICAgICAgICAgZHVyOiBCIC0gYixcbiAgICAgICAgICAgIHNwZDogMSxcbiAgICAgICAgICAgIGdldDogZ2V0LFxuICAgICAgICAgICAgc2V0OiBzZXQsXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2luZyB8fCBtaW5hLmxpbmVhcixcbiAgICAgICAgICAgIHN0YXR1czogc3RhLFxuICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RvcDogc3RvcGl0LFxuICAgICAgICAgICAgcGF1c2U6IHBhdXNlLFxuICAgICAgICAgICAgcmVzdW1lOiByZXN1bWUsXG4gICAgICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgICAgICB9O1xuICAgICAgICBhbmltYXRpb25zW2FuaW0uaWRdID0gYW5pbTtcbiAgICAgICAgdmFyIGxlbiA9IDAsIGk7XG4gICAgICAgIGZvciAoaSBpbiBhbmltYXRpb25zKSBpZiAoYW5pbWF0aW9ucy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgbGVuKys7XG4gICAgICAgICAgICBpZiAobGVuID09IDIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZW4gPT0gMSAmJiByZXF1ZXN0QW5pbUZyYW1lKGZyYW1lKTtcbiAgICAgICAgcmV0dXJuIGFuaW07XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogbWluYS50aW1lXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWUuIEVxdWl2YWxlbnQgdG86XG4gICAgIHwgZnVuY3Rpb24gKCkge1xuICAgICB8ICAgICByZXR1cm4gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG4gICAgIHwgfVxuICAgIFxcKi9cbiAgICBtaW5hLnRpbWUgPSB0aW1lcjtcbiAgICAvKlxcXG4gICAgICogbWluYS5nZXRCeUlkXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGFuIGFuaW1hdGlvbiBieSBpdHMgaWRcbiAgICAgLSBpZCAoc3RyaW5nKSBhbmltYXRpb24ncyBpZFxuICAgICA9IChvYmplY3QpIFNlZSBAbWluYVxuICAgIFxcKi9cbiAgICBtaW5hLmdldEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbaWRdIHx8IG51bGw7XG4gICAgfTtcblxuICAgIC8qXFxcbiAgICAgKiBtaW5hLmxpbmVhclxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogRGVmYXVsdCBsaW5lYXIgZWFzaW5nXG4gICAgIC0gbiAobnVtYmVyKSBpbnB1dCAwLi4xXG4gICAgID0gKG51bWJlcikgb3V0cHV0IDAuLjFcbiAgICBcXCovXG4gICAgbWluYS5saW5lYXIgPSBmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBtaW5hLmVhc2VvdXRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEVhc2VvdXQgZWFzaW5nXG4gICAgIC0gbiAobnVtYmVyKSBpbnB1dCAwLi4xXG4gICAgID0gKG51bWJlcikgb3V0cHV0IDAuLjFcbiAgICBcXCovXG4gICAgbWluYS5lYXNlb3V0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KG4sIDEuNyk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogbWluYS5lYXNlaW5cbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEVhc2VpbiBlYXNpbmdcbiAgICAgLSBuIChudW1iZXIpIGlucHV0IDAuLjFcbiAgICAgPSAobnVtYmVyKSBvdXRwdXQgMC4uMVxuICAgIFxcKi9cbiAgICBtaW5hLmVhc2VpbiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhuLCAuNDgpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIG1pbmEuZWFzZWlub3V0XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBFYXNlaW5vdXQgZWFzaW5nXG4gICAgIC0gbiAobnVtYmVyKSBpbnB1dCAwLi4xXG4gICAgID0gKG51bWJlcikgb3V0cHV0IDAuLjFcbiAgICBcXCovXG4gICAgbWluYS5lYXNlaW5vdXQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAobiA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcSA9IC40OCAtIG4gLyAxLjA0LFxuICAgICAgICAgICAgUSA9IE1hdGguc3FydCguMTczNCArIHEgKiBxKSxcbiAgICAgICAgICAgIHggPSBRIC0gcSxcbiAgICAgICAgICAgIFggPSBNYXRoLnBvdyhNYXRoLmFicyh4KSwgMSAvIDMpICogKHggPCAwID8gLTEgOiAxKSxcbiAgICAgICAgICAgIHkgPSAtUSAtIHEsXG4gICAgICAgICAgICBZID0gTWF0aC5wb3coTWF0aC5hYnMoeSksIDEgLyAzKSAqICh5IDwgMCA/IC0xIDogMSksXG4gICAgICAgICAgICB0ID0gWCArIFkgKyAuNTtcbiAgICAgICAgcmV0dXJuICgxIC0gdCkgKiAzICogdCAqIHQgKyB0ICogdCAqIHQ7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogbWluYS5iYWNraW5cbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEJhY2tpbiBlYXNpbmdcbiAgICAgLSBuIChudW1iZXIpIGlucHV0IDAuLjFcbiAgICAgPSAobnVtYmVyKSBvdXRwdXQgMC4uMVxuICAgIFxcKi9cbiAgICBtaW5hLmJhY2tpbiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgcmV0dXJuIG4gKiBuICogKChzICsgMSkgKiBuIC0gcyk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogbWluYS5iYWNrb3V0XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBCYWNrb3V0IGVhc2luZ1xuICAgICAtIG4gKG51bWJlcikgaW5wdXQgMC4uMVxuICAgICA9IChudW1iZXIpIG91dHB1dCAwLi4xXG4gICAgXFwqL1xuICAgIG1pbmEuYmFja291dCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIG4gPSBuIC0gMTtcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gbiAqIG4gKiAoKHMgKyAxKSAqIG4gKyBzKSArIDE7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogbWluYS5lbGFzdGljXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBFbGFzdGljIGVhc2luZ1xuICAgICAtIG4gKG51bWJlcikgaW5wdXQgMC4uMVxuICAgICA9IChudW1iZXIpIG91dHB1dCAwLi4xXG4gICAgXFwqL1xuICAgIG1pbmEuZWxhc3RpYyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuID09ICEhbikge1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIG4pICogTWF0aC5zaW4oKG4gLSAuMDc1KSAqXG4gICAgICAgICAgICAoMiAqIE1hdGguUEkpIC8gLjMpICsgMTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBtaW5hLmJvdW5jZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQm91bmNlIGVhc2luZ1xuICAgICAtIG4gKG51bWJlcikgaW5wdXQgMC4uMVxuICAgICA9IChudW1iZXIpIG91dHB1dCAwLi4xXG4gICAgXFwqL1xuICAgIG1pbmEuYm91bmNlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIHMgPSA3LjU2MjUsXG4gICAgICAgICAgICBwID0gMi43NSxcbiAgICAgICAgICAgIGw7XG4gICAgICAgIGlmIChuIDwgKDEgLyBwKSkge1xuICAgICAgICAgICAgbCA9IHMgKiBuICogbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChuIDwgKDIgLyBwKSkge1xuICAgICAgICAgICAgICAgIG4gLT0gKDEuNSAvIHApO1xuICAgICAgICAgICAgICAgIGwgPSBzICogbiAqIG4gKyAuNzU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuIDwgKDIuNSAvIHApKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gLT0gKDIuMjUgLyBwKTtcbiAgICAgICAgICAgICAgICAgICAgbCA9IHMgKiBuICogbiArIC45Mzc1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4gLT0gKDIuNjI1IC8gcCk7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBzICogbiAqIG4gKyAuOTg0Mzc1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbDtcbiAgICB9O1xuICAgIHdpbmRvdy5taW5hID0gbWluYTtcbiAgICByZXR1cm4gbWluYTtcbn0pKHR5cGVvZiBldmUgPT0gXCJ1bmRlZmluZWRcIiA/IGZ1bmN0aW9uICgpIHt9IDogZXZlKTtcbi8vIENvcHlyaWdodCAoYykgMjAxMyAtIDIwMTUgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vIFxuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLyBcbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbnZhciBTbmFwID0gKGZ1bmN0aW9uKHJvb3QpIHtcblNuYXAudmVyc2lvbiA9IFwiMC40LjBcIjtcbi8qXFxcbiAqIFNuYXBcbiBbIG1ldGhvZCBdXG4gKipcbiAqIENyZWF0ZXMgYSBkcmF3aW5nIHN1cmZhY2Ugb3Igd3JhcHMgZXhpc3RpbmcgU1ZHIGVsZW1lbnQuXG4gKipcbiAtIHdpZHRoIChudW1iZXJ8c3RyaW5nKSB3aWR0aCBvZiBzdXJmYWNlXG4gLSBoZWlnaHQgKG51bWJlcnxzdHJpbmcpIGhlaWdodCBvZiBzdXJmYWNlXG4gKiBvclxuIC0gRE9NIChTVkdFbGVtZW50KSBlbGVtZW50IHRvIGJlIHdyYXBwZWQgaW50byBTbmFwIHN0cnVjdHVyZVxuICogb3JcbiAtIGFycmF5IChhcnJheSkgYXJyYXkgb2YgZWxlbWVudHMgKHdpbGwgcmV0dXJuIHNldCBvZiBlbGVtZW50cylcbiAqIG9yXG4gLSBxdWVyeSAoc3RyaW5nKSBDU1MgcXVlcnkgc2VsZWN0b3JcbiA9IChvYmplY3QpIEBFbGVtZW50XG5cXCovXG5mdW5jdGlvbiBTbmFwKHcsIGgpIHtcbiAgICBpZiAodykge1xuICAgICAgICBpZiAody5ub2RlVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXAodyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzKHcsIFwiYXJyYXlcIikgJiYgU25hcC5zZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBTbmFwLnNldC5hcHBseShTbmFwLCB3KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9XG4gICAgICAgIGlmIChoID09IG51bGwpIHtcbiAgICAgICAgICAgIHcgPSBnbG9iLmRvYy5xdWVyeVNlbGVjdG9yKFN0cmluZyh3KSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3ID0gdyA9PSBudWxsID8gXCIxMDAlXCIgOiB3O1xuICAgIGggPSBoID09IG51bGwgPyBcIjEwMCVcIiA6IGg7XG4gICAgcmV0dXJuIG5ldyBQYXBlcih3LCBoKTtcbn1cblNuYXAudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiU25hcCB2XCIgKyB0aGlzLnZlcnNpb247XG59O1xuU25hcC5fID0ge307XG52YXIgZ2xvYiA9IHtcbiAgICB3aW46IHJvb3Qud2luZG93LFxuICAgIGRvYzogcm9vdC53aW5kb3cuZG9jdW1lbnRcbn07XG5TbmFwLl8uZ2xvYiA9IGdsb2I7XG52YXIgaGFzID0gXCJoYXNPd25Qcm9wZXJ0eVwiLFxuICAgIFN0ciA9IFN0cmluZyxcbiAgICB0b0Zsb2F0ID0gcGFyc2VGbG9hdCxcbiAgICB0b0ludCA9IHBhcnNlSW50LFxuICAgIG1hdGggPSBNYXRoLFxuICAgIG1tYXggPSBtYXRoLm1heCxcbiAgICBtbWluID0gbWF0aC5taW4sXG4gICAgYWJzID0gbWF0aC5hYnMsXG4gICAgcG93ID0gbWF0aC5wb3csXG4gICAgUEkgPSBtYXRoLlBJLFxuICAgIHJvdW5kID0gbWF0aC5yb3VuZCxcbiAgICBFID0gXCJcIixcbiAgICBTID0gXCIgXCIsXG4gICAgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIElTVVJMID0gL151cmxcXChbJ1wiXT8oW15cXCldKz8pWydcIl0/XFwpJC9pLFxuICAgIGNvbG91clJlZ0V4cCA9IC9eXFxzKigoI1thLWZcXGRdezZ9KXwoI1thLWZcXGRdezN9KXxyZ2JhP1xcKFxccyooW1xcZFxcLl0rJT9cXHMqLFxccypbXFxkXFwuXSslP1xccyosXFxzKltcXGRcXC5dKyU/KD86XFxzKixcXHMqW1xcZFxcLl0rJT8pPylcXHMqXFwpfGhzYmE/XFwoXFxzKihbXFxkXFwuXSsoPzpkZWd8XFx4YjB8JSk/XFxzKixcXHMqW1xcZFxcLl0rJT9cXHMqLFxccypbXFxkXFwuXSsoPzolP1xccyosXFxzKltcXGRcXC5dKyk/JT8pXFxzKlxcKXxoc2xhP1xcKFxccyooW1xcZFxcLl0rKD86ZGVnfFxceGIwfCUpP1xccyosXFxzKltcXGRcXC5dKyU/XFxzKixcXHMqW1xcZFxcLl0rKD86JT9cXHMqLFxccypbXFxkXFwuXSspPyU/KVxccypcXCkpXFxzKiQvaSxcbiAgICBiZXppZXJyZyA9IC9eKD86Y3ViaWMtKT9iZXppZXJcXCgoW14sXSspLChbXixdKyksKFteLF0rKSwoW15cXCldKylcXCkvLFxuICAgIHJlVVJMVmFsdWUgPSAvXnVybFxcKCM/KFteKV0rKVxcKSQvLFxuICAgIHNlcGFyYXRvciA9IFNuYXAuXy5zZXBhcmF0b3IgPSAvWyxcXHNdKy8sXG4gICAgd2hpdGVzcGFjZSA9IC9bXFxzXS9nLFxuICAgIGNvbW1hU3BhY2VzID0gL1tcXHNdKixbXFxzXSovLFxuICAgIGhzcmcgPSB7aHM6IDEsIHJnOiAxfSxcbiAgICBwYXRoQ29tbWFuZCA9IC8oW2Etel0pW1xccyxdKigoLT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspP1tcXHNdKiw/W1xcc10qKSspL2lnLFxuICAgIHRDb21tYW5kID0gLyhbcnN0bV0pW1xccyxdKigoLT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspP1tcXHNdKiw/W1xcc10qKSspL2lnLFxuICAgIHBhdGhWYWx1ZXMgPSAvKC0/XFxkKlxcLj9cXGQqKD86ZVtcXC0rXT9cXFxcZCspPylbXFxzXSosP1tcXHNdKi9pZyxcbiAgICBpZGdlbiA9IDAsXG4gICAgaWRwcmVmaXggPSBcIlNcIiArICgrbmV3IERhdGUpLnRvU3RyaW5nKDM2KSxcbiAgICBJRCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gKGVsICYmIGVsLnR5cGUgPyBlbC50eXBlIDogRSkgKyBpZHByZWZpeCArIChpZGdlbisrKS50b1N0cmluZygzNik7XG4gICAgfSxcbiAgICB4bGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGh1YiA9IHt9LFxuICAgIFVSTCA9IFNuYXAudXJsID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gXCJ1cmwoJyNcIiArIHVybCArIFwiJylcIjtcbiAgICB9O1xuXG5mdW5jdGlvbiAkKGVsLCBhdHRyKSB7XG4gICAgaWYgKGF0dHIpIHtcbiAgICAgICAgaWYgKGVsID09IFwiI3RleHRcIikge1xuICAgICAgICAgICAgZWwgPSBnbG9iLmRvYy5jcmVhdGVUZXh0Tm9kZShhdHRyLnRleHQgfHwgYXR0cltcIiN0ZXh0XCJdIHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCA9PSBcIiNjb21tZW50XCIpIHtcbiAgICAgICAgICAgIGVsID0gZ2xvYi5kb2MuY3JlYXRlQ29tbWVudChhdHRyLnRleHQgfHwgYXR0cltcIiN0ZXh0XCJdIHx8IFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZWwgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZWwgPSAkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGF0dHIgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5zdWJzdHJpbmcoMCwgNikgPT0gXCJ4bGluazpcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlTlMoeGxpbmssIGF0dHIuc3Vic3RyaW5nKDYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIuc3Vic3RyaW5nKDAsIDQpID09IFwieG1sOlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGVOUyh4bWxucywgYXR0ci5zdWJzdHJpbmcoNCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyID09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyKSBpZiAoYXR0cltoYXNdKGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gU3RyKGF0dHJba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN1YnN0cmluZygwLCA2KSA9PSBcInhsaW5rOlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGluaywga2V5LnN1YnN0cmluZyg2KSwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkuc3Vic3RyaW5nKDAsIDQpID09IFwieG1sOlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bWxucywga2V5LnN1YnN0cmluZyg0KSwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ0ZXh0XCIgaW4gYXR0cikge1xuICAgICAgICAgICAgZWwubm9kZVZhbHVlID0gYXR0ci50ZXh0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwgPSBnbG9iLmRvYy5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xufVxuU25hcC5fLiQgPSAkO1xuU25hcC5fLmlkID0gSUQ7XG5mdW5jdGlvbiBnZXRBdHRycyhlbCkge1xuICAgIHZhciBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIG91dCA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGF0dHJzW2ldLm5hbWVzcGFjZVVSSSA9PSB4bGluaykge1xuICAgICAgICAgICAgbmFtZSA9IFwieGxpbms6XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBuYW1lICs9IGF0dHJzW2ldLm5hbWU7XG4gICAgICAgIG91dFtuYW1lXSA9IGF0dHJzW2ldLnRleHRDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuZnVuY3Rpb24gaXMobywgdHlwZSkge1xuICAgIHR5cGUgPSBTdHIucHJvdG90eXBlLnRvTG93ZXJDYXNlLmNhbGwodHlwZSk7XG4gICAgaWYgKHR5cGUgPT0gXCJmaW5pdGVcIikge1xuICAgICAgICByZXR1cm4gaXNGaW5pdGUobyk7XG4gICAgfVxuICAgIGlmICh0eXBlID09IFwiYXJyYXlcIiAmJlxuICAgICAgICAobyBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShvKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAgKHR5cGUgPT0gXCJudWxsXCIgJiYgbyA9PT0gbnVsbCkgfHxcbiAgICAgICAgICAgICh0eXBlID09IHR5cGVvZiBvICYmIG8gIT09IG51bGwpIHx8XG4gICAgICAgICAgICAodHlwZSA9PSBcIm9iamVjdFwiICYmIG8gPT09IE9iamVjdChvKSkgfHxcbiAgICAgICAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkgPT0gdHlwZTtcbn1cbi8qXFxcbiAqIFNuYXAuZm9ybWF0XG4gWyBtZXRob2QgXVxuICoqXG4gKiBSZXBsYWNlcyBjb25zdHJ1Y3Rpb24gb2YgdHlwZSBgezxuYW1lPn1gIHRvIHRoZSBjb3JyZXNwb25kaW5nIGFyZ3VtZW50XG4gKipcbiAtIHRva2VuIChzdHJpbmcpIHN0cmluZyB0byBmb3JtYXRcbiAtIGpzb24gKG9iamVjdCkgb2JqZWN0IHdoaWNoIHByb3BlcnRpZXMgYXJlIHVzZWQgYXMgYSByZXBsYWNlbWVudFxuID0gKHN0cmluZykgZm9ybWF0dGVkIHN0cmluZ1xuID4gVXNhZ2VcbiB8IC8vIHRoaXMgZHJhd3MgYSByZWN0YW5ndWxhciBzaGFwZSBlcXVpdmFsZW50IHRvIFwiTTEwLDIwaDQwdjUwaC00MHpcIlxuIHwgcGFwZXIucGF0aChTbmFwLmZvcm1hdChcIk17eH0se3l9aHtkaW0ud2lkdGh9dntkaW0uaGVpZ2h0fWh7ZGltWyduZWdhdGl2ZSB3aWR0aCddfXpcIiwge1xuIHwgICAgIHg6IDEwLFxuIHwgICAgIHk6IDIwLFxuIHwgICAgIGRpbToge1xuIHwgICAgICAgICB3aWR0aDogNDAsXG4gfCAgICAgICAgIGhlaWdodDogNTAsXG4gfCAgICAgICAgIFwibmVnYXRpdmUgd2lkdGhcIjogLTQwXG4gfCAgICAgfVxuIHwgfSkpO1xuXFwqL1xuU25hcC5mb3JtYXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0b2tlblJlZ2V4ID0gL1xceyhbXlxcfV0rKVxcfS9nLFxuICAgICAgICBvYmpOb3RhdGlvblJlZ2V4ID0gLyg/Oig/Ol58XFwuKSguKz8pKD89XFxbfFxcLnwkfFxcKCl8XFxbKCd8XCIpKC4rPylcXDJcXF0pKFxcKFxcKSk/L2csIC8vIG1hdGNoZXMgLnh4eHh4IG9yIFtcInh4eHh4XCJdIHRvIHJ1biBvdmVyIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAgICAgIHJlcGxhY2VyID0gZnVuY3Rpb24gKGFsbCwga2V5LCBvYmopIHtcbiAgICAgICAgICAgIHZhciByZXMgPSBvYmo7XG4gICAgICAgICAgICBrZXkucmVwbGFjZShvYmpOb3RhdGlvblJlZ2V4LCBmdW5jdGlvbiAoYWxsLCBuYW1lLCBxdW90ZSwgcXVvdGVkTmFtZSwgaXNGdW5jKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUgfHwgcXVvdGVkTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gcmVzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZXMgPT0gXCJmdW5jdGlvblwiICYmIGlzRnVuYyAmJiAocmVzID0gcmVzKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzID0gKHJlcyA9PSBudWxsIHx8IHJlcyA9PSBvYmogPyBhbGwgOiByZXMpICsgXCJcIjtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIsIG9iaikge1xuICAgICAgICByZXR1cm4gU3RyKHN0cikucmVwbGFjZSh0b2tlblJlZ2V4LCBmdW5jdGlvbiAoYWxsLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlcihhbGwsIGtleSwgb2JqKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKCk7XG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PSBcImZ1bmN0aW9uXCIgfHwgT2JqZWN0KG9iaikgIT09IG9iaikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICB2YXIgcmVzID0gbmV3IG9iai5jb25zdHJ1Y3RvcjtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAob2JqW2hhc10oa2V5KSkge1xuICAgICAgICByZXNba2V5XSA9IGNsb25lKG9ialtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblNuYXAuXy5jbG9uZSA9IGNsb25lO1xuZnVuY3Rpb24gcmVwdXNoKGFycmF5LCBpdGVtKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYXJyYXkubGVuZ3RoOyBpIDwgaWk7IGkrKykgaWYgKGFycmF5W2ldID09PSBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5wdXNoKGFycmF5LnNwbGljZShpLCAxKVswXSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2FjaGVyKGYsIHNjb3BlLCBwb3N0cHJvY2Vzc29yKSB7XG4gICAgZnVuY3Rpb24gbmV3ZigpIHtcbiAgICAgICAgdmFyIGFyZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICBhcmdzID0gYXJnLmpvaW4oXCJcXHUyNDAwXCIpLFxuICAgICAgICAgICAgY2FjaGUgPSBuZXdmLmNhY2hlID0gbmV3Zi5jYWNoZSB8fCB7fSxcbiAgICAgICAgICAgIGNvdW50ID0gbmV3Zi5jb3VudCA9IG5ld2YuY291bnQgfHwgW107XG4gICAgICAgIGlmIChjYWNoZVtoYXNdKGFyZ3MpKSB7XG4gICAgICAgICAgICByZXB1c2goY291bnQsIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3Rwcm9jZXNzb3IgPyBwb3N0cHJvY2Vzc29yKGNhY2hlW2FyZ3NdKSA6IGNhY2hlW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Lmxlbmd0aCA+PSAxZTMgJiYgZGVsZXRlIGNhY2hlW2NvdW50LnNoaWZ0KCldO1xuICAgICAgICBjb3VudC5wdXNoKGFyZ3MpO1xuICAgICAgICBjYWNoZVthcmdzXSA9IGYuYXBwbHkoc2NvcGUsIGFyZyk7XG4gICAgICAgIHJldHVybiBwb3N0cHJvY2Vzc29yID8gcG9zdHByb2Nlc3NvcihjYWNoZVthcmdzXSkgOiBjYWNoZVthcmdzXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld2Y7XG59XG5TbmFwLl8uY2FjaGVyID0gY2FjaGVyO1xuZnVuY3Rpb24gYW5nbGUoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuICAgIGlmICh4MyA9PSBudWxsKSB7XG4gICAgICAgIHZhciB4ID0geDEgLSB4MixcbiAgICAgICAgICAgIHkgPSB5MSAtIHkyO1xuICAgICAgICBpZiAoIXggJiYgIXkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoMTgwICsgbWF0aC5hdGFuMigteSwgLXgpICogMTgwIC8gUEkgKyAzNjApICUgMzYwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhbmdsZSh4MSwgeTEsIHgzLCB5MykgLSBhbmdsZSh4MiwgeTIsIHgzLCB5Myk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmFkKGRlZykge1xuICAgIHJldHVybiBkZWcgJSAzNjAgKiBQSSAvIDE4MDtcbn1cbmZ1bmN0aW9uIGRlZyhyYWQpIHtcbiAgICByZXR1cm4gcmFkICogMTgwIC8gUEkgJSAzNjA7XG59XG5mdW5jdGlvbiB4X3koKSB7XG4gICAgcmV0dXJuIHRoaXMueCArIFMgKyB0aGlzLnk7XG59XG5mdW5jdGlvbiB4X3lfd19oKCkge1xuICAgIHJldHVybiB0aGlzLnggKyBTICsgdGhpcy55ICsgUyArIHRoaXMud2lkdGggKyBcIiBcXHhkNyBcIiArIHRoaXMuaGVpZ2h0O1xufVxuXG4vKlxcXG4gKiBTbmFwLnJhZFxuIFsgbWV0aG9kIF1cbiAqKlxuICogVHJhbnNmb3JtIGFuZ2xlIHRvIHJhZGlhbnNcbiAtIGRlZyAobnVtYmVyKSBhbmdsZSBpbiBkZWdyZWVzXG4gPSAobnVtYmVyKSBhbmdsZSBpbiByYWRpYW5zXG5cXCovXG5TbmFwLnJhZCA9IHJhZDtcbi8qXFxcbiAqIFNuYXAuZGVnXG4gWyBtZXRob2QgXVxuICoqXG4gKiBUcmFuc2Zvcm0gYW5nbGUgdG8gZGVncmVlc1xuIC0gcmFkIChudW1iZXIpIGFuZ2xlIGluIHJhZGlhbnNcbiA9IChudW1iZXIpIGFuZ2xlIGluIGRlZ3JlZXNcblxcKi9cblNuYXAuZGVnID0gZGVnO1xuLypcXFxuICogU25hcC5zaW5cbiBbIG1ldGhvZCBdXG4gKipcbiAqIEVxdWl2YWxlbnQgdG8gYE1hdGguc2luKClgIG9ubHkgd29ya3Mgd2l0aCBkZWdyZWVzLCBub3QgcmFkaWFucy5cbiAtIGFuZ2xlIChudW1iZXIpIGFuZ2xlIGluIGRlZ3JlZXNcbiA9IChudW1iZXIpIHNpblxuXFwqL1xuU25hcC5zaW4gPSBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgICByZXR1cm4gbWF0aC5zaW4oU25hcC5yYWQoYW5nbGUpKTtcbn07XG4vKlxcXG4gKiBTbmFwLnRhblxuIFsgbWV0aG9kIF1cbiAqKlxuICogRXF1aXZhbGVudCB0byBgTWF0aC50YW4oKWAgb25seSB3b3JrcyB3aXRoIGRlZ3JlZXMsIG5vdCByYWRpYW5zLlxuIC0gYW5nbGUgKG51bWJlcikgYW5nbGUgaW4gZGVncmVlc1xuID0gKG51bWJlcikgdGFuXG5cXCovXG5TbmFwLnRhbiA9IGZ1bmN0aW9uIChhbmdsZSkge1xuICAgIHJldHVybiBtYXRoLnRhbihTbmFwLnJhZChhbmdsZSkpO1xufTtcbi8qXFxcbiAqIFNuYXAuY29zXG4gWyBtZXRob2QgXVxuICoqXG4gKiBFcXVpdmFsZW50IHRvIGBNYXRoLmNvcygpYCBvbmx5IHdvcmtzIHdpdGggZGVncmVlcywgbm90IHJhZGlhbnMuXG4gLSBhbmdsZSAobnVtYmVyKSBhbmdsZSBpbiBkZWdyZWVzXG4gPSAobnVtYmVyKSBjb3NcblxcKi9cblNuYXAuY29zID0gZnVuY3Rpb24gKGFuZ2xlKSB7XG4gICAgcmV0dXJuIG1hdGguY29zKFNuYXAucmFkKGFuZ2xlKSk7XG59O1xuLypcXFxuICogU25hcC5hc2luXG4gWyBtZXRob2QgXVxuICoqXG4gKiBFcXVpdmFsZW50IHRvIGBNYXRoLmFzaW4oKWAgb25seSB3b3JrcyB3aXRoIGRlZ3JlZXMsIG5vdCByYWRpYW5zLlxuIC0gbnVtIChudW1iZXIpIHZhbHVlXG4gPSAobnVtYmVyKSBhc2luIGluIGRlZ3JlZXNcblxcKi9cblNuYXAuYXNpbiA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gU25hcC5kZWcobWF0aC5hc2luKG51bSkpO1xufTtcbi8qXFxcbiAqIFNuYXAuYWNvc1xuIFsgbWV0aG9kIF1cbiAqKlxuICogRXF1aXZhbGVudCB0byBgTWF0aC5hY29zKClgIG9ubHkgd29ya3Mgd2l0aCBkZWdyZWVzLCBub3QgcmFkaWFucy5cbiAtIG51bSAobnVtYmVyKSB2YWx1ZVxuID0gKG51bWJlcikgYWNvcyBpbiBkZWdyZWVzXG5cXCovXG5TbmFwLmFjb3MgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIFNuYXAuZGVnKG1hdGguYWNvcyhudW0pKTtcbn07XG4vKlxcXG4gKiBTbmFwLmF0YW5cbiBbIG1ldGhvZCBdXG4gKipcbiAqIEVxdWl2YWxlbnQgdG8gYE1hdGguYXRhbigpYCBvbmx5IHdvcmtzIHdpdGggZGVncmVlcywgbm90IHJhZGlhbnMuXG4gLSBudW0gKG51bWJlcikgdmFsdWVcbiA9IChudW1iZXIpIGF0YW4gaW4gZGVncmVlc1xuXFwqL1xuU25hcC5hdGFuID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiBTbmFwLmRlZyhtYXRoLmF0YW4obnVtKSk7XG59O1xuLypcXFxuICogU25hcC5hdGFuMlxuIFsgbWV0aG9kIF1cbiAqKlxuICogRXF1aXZhbGVudCB0byBgTWF0aC5hdGFuMigpYCBvbmx5IHdvcmtzIHdpdGggZGVncmVlcywgbm90IHJhZGlhbnMuXG4gLSBudW0gKG51bWJlcikgdmFsdWVcbiA9IChudW1iZXIpIGF0YW4yIGluIGRlZ3JlZXNcblxcKi9cblNuYXAuYXRhbjIgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIFNuYXAuZGVnKG1hdGguYXRhbjIobnVtKSk7XG59O1xuLypcXFxuICogU25hcC5hbmdsZVxuIFsgbWV0aG9kIF1cbiAqKlxuICogUmV0dXJucyBhbiBhbmdsZSBiZXR3ZWVuIHR3byBvciB0aHJlZSBwb2ludHNcbiA+IFBhcmFtZXRlcnNcbiAtIHgxIChudW1iZXIpIHggY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHkxIChudW1iZXIpIHkgY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHgyIChudW1iZXIpIHggY29vcmQgb2Ygc2Vjb25kIHBvaW50XG4gLSB5MiAobnVtYmVyKSB5IGNvb3JkIG9mIHNlY29uZCBwb2ludFxuIC0geDMgKG51bWJlcikgI29wdGlvbmFsIHggY29vcmQgb2YgdGhpcmQgcG9pbnRcbiAtIHkzIChudW1iZXIpICNvcHRpb25hbCB5IGNvb3JkIG9mIHRoaXJkIHBvaW50XG4gPSAobnVtYmVyKSBhbmdsZSBpbiBkZWdyZWVzXG5cXCovXG5TbmFwLmFuZ2xlID0gYW5nbGU7XG4vKlxcXG4gKiBTbmFwLmxlblxuIFsgbWV0aG9kIF1cbiAqKlxuICogUmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcbiA+IFBhcmFtZXRlcnNcbiAtIHgxIChudW1iZXIpIHggY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHkxIChudW1iZXIpIHkgY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHgyIChudW1iZXIpIHggY29vcmQgb2Ygc2Vjb25kIHBvaW50XG4gLSB5MiAobnVtYmVyKSB5IGNvb3JkIG9mIHNlY29uZCBwb2ludFxuID0gKG51bWJlcikgZGlzdGFuY2VcblxcKi9cblNuYXAubGVuID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChTbmFwLmxlbjIoeDEsIHkxLCB4MiwgeTIpKTtcbn07XG4vKlxcXG4gKiBTbmFwLmxlbjJcbiBbIG1ldGhvZCBdXG4gKipcbiAqIFJldHVybnMgc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcbiA+IFBhcmFtZXRlcnNcbiAtIHgxIChudW1iZXIpIHggY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHkxIChudW1iZXIpIHkgY29vcmQgb2YgZmlyc3QgcG9pbnRcbiAtIHgyIChudW1iZXIpIHggY29vcmQgb2Ygc2Vjb25kIHBvaW50XG4gLSB5MiAobnVtYmVyKSB5IGNvb3JkIG9mIHNlY29uZCBwb2ludFxuID0gKG51bWJlcikgZGlzdGFuY2VcblxcKi9cblNuYXAubGVuMiA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHJldHVybiAoeDEgLSB4MikgKiAoeDEgLSB4MikgKyAoeTEgLSB5MikgKiAoeTEgLSB5Mik7XG59O1xuLypcXFxuICogU25hcC5jbG9zZXN0UG9pbnRcbiBbIG1ldGhvZCBdXG4gKipcbiAqIFJldHVybnMgY2xvc2VzdCBwb2ludCB0byBhIGdpdmVuIG9uZSBvbiBhIGdpdmVuIHBhdGguXG4gPiBQYXJhbWV0ZXJzXG4gLSBwYXRoIChFbGVtZW50KSBwYXRoIGVsZW1lbnRcbiAtIHggKG51bWJlcikgeCBjb29yZCBvZiBhIHBvaW50XG4gLSB5IChudW1iZXIpIHkgY29vcmQgb2YgYSBwb2ludFxuID0gKG9iamVjdCkgaW4gZm9ybWF0XG4ge1xuICAgIHggKG51bWJlcikgeCBjb29yZCBvZiB0aGUgcG9pbnQgb24gdGhlIHBhdGhcbiAgICB5IChudW1iZXIpIHkgY29vcmQgb2YgdGhlIHBvaW50IG9uIHRoZSBwYXRoXG4gICAgbGVuZ3RoIChudW1iZXIpIGxlbmd0aCBvZiB0aGUgcGF0aCB0byB0aGUgcG9pbnRcbiAgICBkaXN0YW5jZSAobnVtYmVyKSBkaXN0YW5jZSBmcm9tIHRoZSBnaXZlbiBwb2ludCB0byB0aGUgcGF0aFxuIH1cblxcKi9cbi8vIENvcGllZCBmcm9tIGh0dHA6Ly9ibC5vY2tzLm9yZy9tYm9zdG9jay84MDI3NjM3XG5TbmFwLmNsb3Nlc3RQb2ludCA9IGZ1bmN0aW9uIChwYXRoLCB4LCB5KSB7XG4gICAgZnVuY3Rpb24gZGlzdGFuY2UyKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0geCxcbiAgICAgICAgICAgIGR5ID0gcC55IC0geTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH1cbiAgICB2YXIgcGF0aE5vZGUgPSBwYXRoLm5vZGUsXG4gICAgICAgIHBhdGhMZW5ndGggPSBwYXRoTm9kZS5nZXRUb3RhbExlbmd0aCgpLFxuICAgICAgICBwcmVjaXNpb24gPSBwYXRoTGVuZ3RoIC8gcGF0aE5vZGUucGF0aFNlZ0xpc3QubnVtYmVyT2ZJdGVtcyAqIC4xMjUsXG4gICAgICAgIGJlc3QsXG4gICAgICAgIGJlc3RMZW5ndGgsXG4gICAgICAgIGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgLy8gbGluZWFyIHNjYW4gZm9yIGNvYXJzZSBhcHByb3hpbWF0aW9uXG4gICAgZm9yICh2YXIgc2Nhbiwgc2Nhbkxlbmd0aCA9IDAsIHNjYW5EaXN0YW5jZTsgc2Nhbkxlbmd0aCA8PSBwYXRoTGVuZ3RoOyBzY2FuTGVuZ3RoICs9IHByZWNpc2lvbikge1xuICAgICAgICBpZiAoKHNjYW5EaXN0YW5jZSA9IGRpc3RhbmNlMihzY2FuID0gcGF0aE5vZGUuZ2V0UG9pbnRBdExlbmd0aChzY2FuTGVuZ3RoKSkpIDwgYmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICBiZXN0ID0gc2NhbiwgYmVzdExlbmd0aCA9IHNjYW5MZW5ndGgsIGJlc3REaXN0YW5jZSA9IHNjYW5EaXN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJpbmFyeSBzZWFyY2ggZm9yIHByZWNpc2UgZXN0aW1hdGVcbiAgICBwcmVjaXNpb24gKj0gLjU7XG4gICAgd2hpbGUgKHByZWNpc2lvbiA+IC41KSB7XG4gICAgICAgIHZhciBiZWZvcmUsXG4gICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgIGJlZm9yZUxlbmd0aCxcbiAgICAgICAgICAgIGFmdGVyTGVuZ3RoLFxuICAgICAgICAgICAgYmVmb3JlRGlzdGFuY2UsXG4gICAgICAgICAgICBhZnRlckRpc3RhbmNlO1xuICAgICAgICBpZiAoKGJlZm9yZUxlbmd0aCA9IGJlc3RMZW5ndGggLSBwcmVjaXNpb24pID49IDAgJiYgKGJlZm9yZURpc3RhbmNlID0gZGlzdGFuY2UyKGJlZm9yZSA9IHBhdGhOb2RlLmdldFBvaW50QXRMZW5ndGgoYmVmb3JlTGVuZ3RoKSkpIDwgYmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICBiZXN0ID0gYmVmb3JlLCBiZXN0TGVuZ3RoID0gYmVmb3JlTGVuZ3RoLCBiZXN0RGlzdGFuY2UgPSBiZWZvcmVEaXN0YW5jZTtcbiAgICAgICAgfSBlbHNlIGlmICgoYWZ0ZXJMZW5ndGggPSBiZXN0TGVuZ3RoICsgcHJlY2lzaW9uKSA8PSBwYXRoTGVuZ3RoICYmIChhZnRlckRpc3RhbmNlID0gZGlzdGFuY2UyKGFmdGVyID0gcGF0aE5vZGUuZ2V0UG9pbnRBdExlbmd0aChhZnRlckxlbmd0aCkpKSA8IGJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgYmVzdCA9IGFmdGVyLCBiZXN0TGVuZ3RoID0gYWZ0ZXJMZW5ndGgsIGJlc3REaXN0YW5jZSA9IGFmdGVyRGlzdGFuY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmVjaXNpb24gKj0gLjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiZXN0ID0ge1xuICAgICAgICB4OiBiZXN0LngsXG4gICAgICAgIHk6IGJlc3QueSxcbiAgICAgICAgbGVuZ3RoOiBiZXN0TGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZTogTWF0aC5zcXJ0KGJlc3REaXN0YW5jZSlcbiAgICB9O1xuICAgIHJldHVybiBiZXN0O1xufVxuLypcXFxuICogU25hcC5pc1xuIFsgbWV0aG9kIF1cbiAqKlxuICogSGFuZHkgcmVwbGFjZW1lbnQgZm9yIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuIC0gbyAo4oCmKSBhbnkgb2JqZWN0IG9yIHByaW1pdGl2ZVxuIC0gdHlwZSAoc3RyaW5nKSBuYW1lIG9mIHRoZSB0eXBlLCBlLmcuLCBgc3RyaW5nYCwgYGZ1bmN0aW9uYCwgYG51bWJlcmAsIGV0Yy5cbiA9IChib29sZWFuKSBgdHJ1ZWAgaWYgZ2l2ZW4gdmFsdWUgaXMgb2YgZ2l2ZW4gdHlwZVxuXFwqL1xuU25hcC5pcyA9IGlzO1xuLypcXFxuICogU25hcC5zbmFwVG9cbiBbIG1ldGhvZCBdXG4gKipcbiAqIFNuYXBzIGdpdmVuIHZhbHVlIHRvIGdpdmVuIGdyaWRcbiAtIHZhbHVlcyAoYXJyYXl8bnVtYmVyKSBnaXZlbiBhcnJheSBvZiB2YWx1ZXMgb3Igc3RlcCBvZiB0aGUgZ3JpZFxuIC0gdmFsdWUgKG51bWJlcikgdmFsdWUgdG8gYWRqdXN0XG4gLSB0b2xlcmFuY2UgKG51bWJlcikgI29wdGlvbmFsIG1heGltdW0gZGlzdGFuY2UgdG8gdGhlIHRhcmdldCB2YWx1ZSB0aGF0IHdvdWxkIHRyaWdnZXIgdGhlIHNuYXAuIERlZmF1bHQgaXMgYDEwYC5cbiA9IChudW1iZXIpIGFkanVzdGVkIHZhbHVlXG5cXCovXG5TbmFwLnNuYXBUbyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHZhbHVlLCB0b2xlcmFuY2UpIHtcbiAgICB0b2xlcmFuY2UgPSBpcyh0b2xlcmFuY2UsIFwiZmluaXRlXCIpID8gdG9sZXJhbmNlIDogMTA7XG4gICAgaWYgKGlzKHZhbHVlcywgXCJhcnJheVwiKSkge1xuICAgICAgICB2YXIgaSA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIGlmIChhYnModmFsdWVzW2ldIC0gdmFsdWUpIDw9IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcyA9ICt2YWx1ZXM7XG4gICAgICAgIHZhciByZW0gPSB2YWx1ZSAlIHZhbHVlcztcbiAgICAgICAgaWYgKHJlbSA8IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC0gcmVtO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW0gPiB2YWx1ZXMgLSB0b2xlcmFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAtIHJlbSArIHZhbHVlcztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuLy8gQ29sb3VyXG4vKlxcXG4gKiBTbmFwLmdldFJHQlxuIFsgbWV0aG9kIF1cbiAqKlxuICogUGFyc2VzIGNvbG9yIHN0cmluZyBhcyBSR0Igb2JqZWN0XG4gLSBjb2xvciAoc3RyaW5nKSBjb2xvciBzdHJpbmcgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czpcbiAjIDx1bD5cbiAjICAgICA8bGk+Q29sb3IgbmFtZSAoPGNvZGU+cmVkPC9jb2RlPiwgPGNvZGU+Z3JlZW48L2NvZGU+LCA8Y29kZT5jb3JuZmxvd2VyYmx1ZTwvY29kZT4sIGV0Yyk8L2xpPlxuICMgICAgIDxsaT4j4oCi4oCi4oCiIOKAlCBzaG9ydGVuZWQgSFRNTCBjb2xvcjogKDxjb2RlPiMwMDA8L2NvZGU+LCA8Y29kZT4jZmMwPC9jb2RlPiwgZXRjLik8L2xpPlxuICMgICAgIDxsaT4j4oCi4oCi4oCi4oCi4oCi4oCiIOKAlCBmdWxsIGxlbmd0aCBIVE1MIGNvbG9yOiAoPGNvZGU+IzAwMDAwMDwvY29kZT4sIDxjb2RlPiNiZDIzMDA8L2NvZGU+KTwvbGk+XG4gIyAgICAgPGxpPnJnYijigKLigKLigKIsIOKAouKAouKAoiwg4oCi4oCi4oCiKSDigJQgcmVkLCBncmVlbiBhbmQgYmx1ZSBjaGFubmVscyB2YWx1ZXM6ICg8Y29kZT5yZ2IoMjAwLCZuYnNwOzEwMCwmbmJzcDswKTwvY29kZT4pPC9saT5cbiAjICAgICA8bGk+cmdiYSjigKLigKLigKIsIOKAouKAouKAoiwg4oCi4oCi4oCiLCDigKLigKLigKIpIOKAlCBhbHNvIHdpdGggb3BhY2l0eTwvbGk+XG4gIyAgICAgPGxpPnJnYijigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlKSDigJQgc2FtZSBhcyBhYm92ZSwgYnV0IGluICU6ICg8Y29kZT5yZ2IoMTAwJSwmbmJzcDsxNzUlLCZuYnNwOzAlKTwvY29kZT4pPC9saT5cbiAjICAgICA8bGk+cmdiYSjigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlKSDigJQgYWxzbyB3aXRoIG9wYWNpdHk8L2xpPlxuICMgICAgIDxsaT5oc2Io4oCi4oCi4oCiLCDigKLigKLigKIsIOKAouKAouKAoikg4oCUIGh1ZSwgc2F0dXJhdGlvbiBhbmQgYnJpZ2h0bmVzcyB2YWx1ZXM6ICg8Y29kZT5oc2IoMC41LCZuYnNwOzAuMjUsJm5ic3A7MSk8L2NvZGU+KTwvbGk+XG4gIyAgICAgPGxpPmhzYmEo4oCi4oCi4oCiLCDigKLigKLigKIsIOKAouKAouKAoiwg4oCi4oCi4oCiKSDigJQgYWxzbyB3aXRoIG9wYWNpdHk8L2xpPlxuICMgICAgIDxsaT5oc2Io4oCi4oCi4oCiJSwg4oCi4oCi4oCiJSwg4oCi4oCi4oCiJSkg4oCUIHNhbWUgYXMgYWJvdmUsIGJ1dCBpbiAlPC9saT5cbiAjICAgICA8bGk+aHNiYSjigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlKSDigJQgYWxzbyB3aXRoIG9wYWNpdHk8L2xpPlxuICMgICAgIDxsaT5oc2wo4oCi4oCi4oCiLCDigKLigKLigKIsIOKAouKAouKAoikg4oCUIGh1ZSwgc2F0dXJhdGlvbiBhbmQgbHVtaW5vc2l0eSB2YWx1ZXM6ICg8Y29kZT5oc2IoMC41LCZuYnNwOzAuMjUsJm5ic3A7MC41KTwvY29kZT4pPC9saT5cbiAjICAgICA8bGk+aHNsYSjigKLigKLigKIsIOKAouKAouKAoiwg4oCi4oCi4oCiLCDigKLigKLigKIpIOKAlCBhbHNvIHdpdGggb3BhY2l0eTwvbGk+XG4gIyAgICAgPGxpPmhzbCjigKLigKLigKIlLCDigKLigKLigKIlLCDigKLigKLigKIlKSDigJQgc2FtZSBhcyBhYm92ZSwgYnV0IGluICU8L2xpPlxuICMgICAgIDxsaT5oc2xhKOKAouKAouKAoiUsIOKAouKAouKAoiUsIOKAouKAouKAoiUsIOKAouKAouKAoiUpIOKAlCBhbHNvIHdpdGggb3BhY2l0eTwvbGk+XG4gIyA8L3VsPlxuICogTm90ZSB0aGF0IGAlYCBjYW4gYmUgdXNlZCBhbnkgdGltZTogYHJnYigyMCUsIDI1NSwgNTAlKWAuXG4gPSAob2JqZWN0KSBSR0Igb2JqZWN0IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuIG8ge1xuIG8gICAgIHIgKG51bWJlcikgcmVkLFxuIG8gICAgIGcgKG51bWJlcikgZ3JlZW4sXG4gbyAgICAgYiAobnVtYmVyKSBibHVlLFxuIG8gICAgIGhleCAoc3RyaW5nKSBjb2xvciBpbiBIVE1ML0NTUyBmb3JtYXQ6ICPigKLigKLigKLigKLigKLigKIsXG4gbyAgICAgZXJyb3IgKGJvb2xlYW4pIHRydWUgaWYgc3RyaW5nIGNhbid0IGJlIHBhcnNlZFxuIG8gfVxuXFwqL1xuU25hcC5nZXRSR0IgPSBjYWNoZXIoZnVuY3Rpb24gKGNvbG91cikge1xuICAgIGlmICghY29sb3VyIHx8ICEhKChjb2xvdXIgPSBTdHIoY29sb3VyKSkuaW5kZXhPZihcIi1cIikgKyAxKSkge1xuICAgICAgICByZXR1cm4ge3I6IC0xLCBnOiAtMSwgYjogLTEsIGhleDogXCJub25lXCIsIGVycm9yOiAxLCB0b1N0cmluZzogcmdidG9TdHJpbmd9O1xuICAgIH1cbiAgICBpZiAoY29sb3VyID09IFwibm9uZVwiKSB7XG4gICAgICAgIHJldHVybiB7cjogLTEsIGc6IC0xLCBiOiAtMSwgaGV4OiBcIm5vbmVcIiwgdG9TdHJpbmc6IHJnYnRvU3RyaW5nfTtcbiAgICB9XG4gICAgIShoc3JnW2hhc10oY29sb3VyLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDAsIDIpKSB8fCBjb2xvdXIuY2hhckF0KCkgPT0gXCIjXCIpICYmIChjb2xvdXIgPSB0b0hleChjb2xvdXIpKTtcbiAgICBpZiAoIWNvbG91cikge1xuICAgICAgICByZXR1cm4ge3I6IC0xLCBnOiAtMSwgYjogLTEsIGhleDogXCJub25lXCIsIGVycm9yOiAxLCB0b1N0cmluZzogcmdidG9TdHJpbmd9O1xuICAgIH1cbiAgICB2YXIgcmVzLFxuICAgICAgICByZWQsXG4gICAgICAgIGdyZWVuLFxuICAgICAgICBibHVlLFxuICAgICAgICBvcGFjaXR5LFxuICAgICAgICB0LFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHJnYiA9IGNvbG91ci5tYXRjaChjb2xvdXJSZWdFeHApO1xuICAgIGlmIChyZ2IpIHtcbiAgICAgICAgaWYgKHJnYlsyXSkge1xuICAgICAgICAgICAgYmx1ZSA9IHRvSW50KHJnYlsyXS5zdWJzdHJpbmcoNSksIDE2KTtcbiAgICAgICAgICAgIGdyZWVuID0gdG9JbnQocmdiWzJdLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgICAgICAgICAgcmVkID0gdG9JbnQocmdiWzJdLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZ2JbM10pIHtcbiAgICAgICAgICAgIGJsdWUgPSB0b0ludCgodCA9IHJnYlszXS5jaGFyQXQoMykpICsgdCwgMTYpO1xuICAgICAgICAgICAgZ3JlZW4gPSB0b0ludCgodCA9IHJnYlszXS5jaGFyQXQoMikpICsgdCwgMTYpO1xuICAgICAgICAgICAgcmVkID0gdG9JbnQoKHQgPSByZ2JbM10uY2hhckF0KDEpKSArIHQsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmdiWzRdKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSByZ2JbNF0uc3BsaXQoY29tbWFTcGFjZXMpO1xuICAgICAgICAgICAgcmVkID0gdG9GbG9hdCh2YWx1ZXNbMF0pO1xuICAgICAgICAgICAgdmFsdWVzWzBdLnNsaWNlKC0xKSA9PSBcIiVcIiAmJiAocmVkICo9IDIuNTUpO1xuICAgICAgICAgICAgZ3JlZW4gPSB0b0Zsb2F0KHZhbHVlc1sxXSk7XG4gICAgICAgICAgICB2YWx1ZXNbMV0uc2xpY2UoLTEpID09IFwiJVwiICYmIChncmVlbiAqPSAyLjU1KTtcbiAgICAgICAgICAgIGJsdWUgPSB0b0Zsb2F0KHZhbHVlc1syXSk7XG4gICAgICAgICAgICB2YWx1ZXNbMl0uc2xpY2UoLTEpID09IFwiJVwiICYmIChibHVlICo9IDIuNTUpO1xuICAgICAgICAgICAgcmdiWzFdLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgNCkgPT0gXCJyZ2JhXCIgJiYgKG9wYWNpdHkgPSB0b0Zsb2F0KHZhbHVlc1szXSkpO1xuICAgICAgICAgICAgdmFsdWVzWzNdICYmIHZhbHVlc1szXS5zbGljZSgtMSkgPT0gXCIlXCIgJiYgKG9wYWNpdHkgLz0gMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmdiWzVdKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSByZ2JbNV0uc3BsaXQoY29tbWFTcGFjZXMpO1xuICAgICAgICAgICAgcmVkID0gdG9GbG9hdCh2YWx1ZXNbMF0pO1xuICAgICAgICAgICAgdmFsdWVzWzBdLnNsaWNlKC0xKSA9PSBcIiVcIiAmJiAocmVkIC89IDEwMCk7XG4gICAgICAgICAgICBncmVlbiA9IHRvRmxvYXQodmFsdWVzWzFdKTtcbiAgICAgICAgICAgIHZhbHVlc1sxXS5zbGljZSgtMSkgPT0gXCIlXCIgJiYgKGdyZWVuIC89IDEwMCk7XG4gICAgICAgICAgICBibHVlID0gdG9GbG9hdCh2YWx1ZXNbMl0pO1xuICAgICAgICAgICAgdmFsdWVzWzJdLnNsaWNlKC0xKSA9PSBcIiVcIiAmJiAoYmx1ZSAvPSAxMDApO1xuICAgICAgICAgICAgKHZhbHVlc1swXS5zbGljZSgtMykgPT0gXCJkZWdcIiB8fCB2YWx1ZXNbMF0uc2xpY2UoLTEpID09IFwiXFx4YjBcIikgJiYgKHJlZCAvPSAzNjApO1xuICAgICAgICAgICAgcmdiWzFdLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCwgNCkgPT0gXCJoc2JhXCIgJiYgKG9wYWNpdHkgPSB0b0Zsb2F0KHZhbHVlc1szXSkpO1xuICAgICAgICAgICAgdmFsdWVzWzNdICYmIHZhbHVlc1szXS5zbGljZSgtMSkgPT0gXCIlXCIgJiYgKG9wYWNpdHkgLz0gMTAwKTtcbiAgICAgICAgICAgIHJldHVybiBTbmFwLmhzYjJyZ2IocmVkLCBncmVlbiwgYmx1ZSwgb3BhY2l0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJnYls2XSkge1xuICAgICAgICAgICAgdmFsdWVzID0gcmdiWzZdLnNwbGl0KGNvbW1hU3BhY2VzKTtcbiAgICAgICAgICAgIHJlZCA9IHRvRmxvYXQodmFsdWVzWzBdKTtcbiAgICAgICAgICAgIHZhbHVlc1swXS5zbGljZSgtMSkgPT0gXCIlXCIgJiYgKHJlZCAvPSAxMDApO1xuICAgICAgICAgICAgZ3JlZW4gPSB0b0Zsb2F0KHZhbHVlc1sxXSk7XG4gICAgICAgICAgICB2YWx1ZXNbMV0uc2xpY2UoLTEpID09IFwiJVwiICYmIChncmVlbiAvPSAxMDApO1xuICAgICAgICAgICAgYmx1ZSA9IHRvRmxvYXQodmFsdWVzWzJdKTtcbiAgICAgICAgICAgIHZhbHVlc1syXS5zbGljZSgtMSkgPT0gXCIlXCIgJiYgKGJsdWUgLz0gMTAwKTtcbiAgICAgICAgICAgICh2YWx1ZXNbMF0uc2xpY2UoLTMpID09IFwiZGVnXCIgfHwgdmFsdWVzWzBdLnNsaWNlKC0xKSA9PSBcIlxceGIwXCIpICYmIChyZWQgLz0gMzYwKTtcbiAgICAgICAgICAgIHJnYlsxXS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIDQpID09IFwiaHNsYVwiICYmIChvcGFjaXR5ID0gdG9GbG9hdCh2YWx1ZXNbM10pKTtcbiAgICAgICAgICAgIHZhbHVlc1szXSAmJiB2YWx1ZXNbM10uc2xpY2UoLTEpID09IFwiJVwiICYmIChvcGFjaXR5IC89IDEwMCk7XG4gICAgICAgICAgICByZXR1cm4gU25hcC5oc2wycmdiKHJlZCwgZ3JlZW4sIGJsdWUsIG9wYWNpdHkpO1xuICAgICAgICB9XG4gICAgICAgIHJlZCA9IG1taW4obWF0aC5yb3VuZChyZWQpLCAyNTUpO1xuICAgICAgICBncmVlbiA9IG1taW4obWF0aC5yb3VuZChncmVlbiksIDI1NSk7XG4gICAgICAgIGJsdWUgPSBtbWluKG1hdGgucm91bmQoYmx1ZSksIDI1NSk7XG4gICAgICAgIG9wYWNpdHkgPSBtbWluKG1tYXgob3BhY2l0eSwgMCksIDEpO1xuICAgICAgICByZ2IgPSB7cjogcmVkLCBnOiBncmVlbiwgYjogYmx1ZSwgdG9TdHJpbmc6IHJnYnRvU3RyaW5nfTtcbiAgICAgICAgcmdiLmhleCA9IFwiI1wiICsgKDE2Nzc3MjE2IHwgYmx1ZSB8IChncmVlbiA8PCA4KSB8IChyZWQgPDwgMTYpKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG4gICAgICAgIHJnYi5vcGFjaXR5ID0gaXMob3BhY2l0eSwgXCJmaW5pdGVcIikgPyBvcGFjaXR5IDogMTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG4gICAgcmV0dXJuIHtyOiAtMSwgZzogLTEsIGI6IC0xLCBoZXg6IFwibm9uZVwiLCBlcnJvcjogMSwgdG9TdHJpbmc6IHJnYnRvU3RyaW5nfTtcbn0sIFNuYXApO1xuLypcXFxuICogU25hcC5oc2JcbiBbIG1ldGhvZCBdXG4gKipcbiAqIENvbnZlcnRzIEhTQiB2YWx1ZXMgdG8gYSBoZXggcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yXG4gLSBoIChudW1iZXIpIGh1ZVxuIC0gcyAobnVtYmVyKSBzYXR1cmF0aW9uXG4gLSBiIChudW1iZXIpIHZhbHVlIG9yIGJyaWdodG5lc3NcbiA9IChzdHJpbmcpIGhleCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcblxcKi9cblNuYXAuaHNiID0gY2FjaGVyKGZ1bmN0aW9uIChoLCBzLCBiKSB7XG4gICAgcmV0dXJuIFNuYXAuaHNiMnJnYihoLCBzLCBiKS5oZXg7XG59KTtcbi8qXFxcbiAqIFNuYXAuaHNsXG4gWyBtZXRob2QgXVxuICoqXG4gKiBDb252ZXJ0cyBIU0wgdmFsdWVzIHRvIGEgaGV4IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvclxuIC0gaCAobnVtYmVyKSBodWVcbiAtIHMgKG51bWJlcikgc2F0dXJhdGlvblxuIC0gbCAobnVtYmVyKSBsdW1pbm9zaXR5XG4gPSAoc3RyaW5nKSBoZXggcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yXG5cXCovXG5TbmFwLmhzbCA9IGNhY2hlcihmdW5jdGlvbiAoaCwgcywgbCkge1xuICAgIHJldHVybiBTbmFwLmhzbDJyZ2IoaCwgcywgbCkuaGV4O1xufSk7XG4vKlxcXG4gKiBTbmFwLnJnYlxuIFsgbWV0aG9kIF1cbiAqKlxuICogQ29udmVydHMgUkdCIHZhbHVlcyB0byBhIGhleCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcbiAtIHIgKG51bWJlcikgcmVkXG4gLSBnIChudW1iZXIpIGdyZWVuXG4gLSBiIChudW1iZXIpIGJsdWVcbiA9IChzdHJpbmcpIGhleCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3JcblxcKi9cblNuYXAucmdiID0gY2FjaGVyKGZ1bmN0aW9uIChyLCBnLCBiLCBvKSB7XG4gICAgaWYgKGlzKG8sIFwiZmluaXRlXCIpKSB7XG4gICAgICAgIHZhciByb3VuZCA9IG1hdGgucm91bmQ7XG4gICAgICAgIHJldHVybiBcInJnYmEoXCIgKyBbcm91bmQociksIHJvdW5kKGcpLCByb3VuZChiKSwgK28udG9GaXhlZCgyKV0gKyBcIilcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiI1wiICsgKDE2Nzc3MjE2IHwgYiB8IChnIDw8IDgpIHwgKHIgPDwgMTYpKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59KTtcbnZhciB0b0hleCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHZhciBpID0gZ2xvYi5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdIHx8IGdsb2IuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdLFxuICAgICAgICByZWQgPSBcInJnYigyNTUsIDAsIDApXCI7XG4gICAgdG9IZXggPSBjYWNoZXIoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09IFwicmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaS5zdHlsZS5jb2xvciA9IHJlZDtcbiAgICAgICAgaS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICB2YXIgb3V0ID0gZ2xvYi5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShpLCBFKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29sb3JcIik7XG4gICAgICAgIHJldHVybiBvdXQgPT0gcmVkID8gbnVsbCA6IG91dDtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9IZXgoY29sb3IpO1xufSxcbmhzYnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcImhzYihcIiArIFt0aGlzLmgsIHRoaXMucywgdGhpcy5iXSArIFwiKVwiO1xufSxcbmhzbHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcImhzbChcIiArIFt0aGlzLmgsIHRoaXMucywgdGhpcy5sXSArIFwiKVwiO1xufSxcbnJnYnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm9wYWNpdHkgPT0gMSB8fCB0aGlzLm9wYWNpdHkgPT0gbnVsbCA/XG4gICAgICAgICAgICB0aGlzLmhleCA6XG4gICAgICAgICAgICBcInJnYmEoXCIgKyBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5vcGFjaXR5XSArIFwiKVwiO1xufSxcbnByZXBhcmVSR0IgPSBmdW5jdGlvbiAociwgZywgYikge1xuICAgIGlmIChnID09IG51bGwgJiYgaXMociwgXCJvYmplY3RcIikgJiYgXCJyXCIgaW4gciAmJiBcImdcIiBpbiByICYmIFwiYlwiIGluIHIpIHtcbiAgICAgICAgYiA9IHIuYjtcbiAgICAgICAgZyA9IHIuZztcbiAgICAgICAgciA9IHIucjtcbiAgICB9XG4gICAgaWYgKGcgPT0gbnVsbCAmJiBpcyhyLCBzdHJpbmcpKSB7XG4gICAgICAgIHZhciBjbHIgPSBTbmFwLmdldFJHQihyKTtcbiAgICAgICAgciA9IGNsci5yO1xuICAgICAgICBnID0gY2xyLmc7XG4gICAgICAgIGIgPSBjbHIuYjtcbiAgICB9XG4gICAgaWYgKHIgPiAxIHx8IGcgPiAxIHx8IGIgPiAxKSB7XG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBbciwgZywgYl07XG59LFxucGFja2FnZVJHQiA9IGZ1bmN0aW9uIChyLCBnLCBiLCBvKSB7XG4gICAgciA9IG1hdGgucm91bmQociAqIDI1NSk7XG4gICAgZyA9IG1hdGgucm91bmQoZyAqIDI1NSk7XG4gICAgYiA9IG1hdGgucm91bmQoYiAqIDI1NSk7XG4gICAgdmFyIHJnYiA9IHtcbiAgICAgICAgcjogcixcbiAgICAgICAgZzogZyxcbiAgICAgICAgYjogYixcbiAgICAgICAgb3BhY2l0eTogaXMobywgXCJmaW5pdGVcIikgPyBvIDogMSxcbiAgICAgICAgaGV4OiBTbmFwLnJnYihyLCBnLCBiKSxcbiAgICAgICAgdG9TdHJpbmc6IHJnYnRvU3RyaW5nXG4gICAgfTtcbiAgICBpcyhvLCBcImZpbml0ZVwiKSAmJiAocmdiLm9wYWNpdHkgPSBvKTtcbiAgICByZXR1cm4gcmdiO1xufTtcbi8qXFxcbiAqIFNuYXAuY29sb3JcbiBbIG1ldGhvZCBdXG4gKipcbiAqIFBhcnNlcyB0aGUgY29sb3Igc3RyaW5nIGFuZCByZXR1cm5zIGFuIG9iamVjdCBmZWF0dXJpbmcgdGhlIGNvbG9yJ3MgY29tcG9uZW50IHZhbHVlc1xuIC0gY2xyIChzdHJpbmcpIGNvbG9yIHN0cmluZyBpbiBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmb3JtYXRzIChzZWUgQFNuYXAuZ2V0UkdCKVxuID0gKG9iamVjdCkgQ29tYmluZWQgUkdCL0hTQiBvYmplY3QgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gbyB7XG4gbyAgICAgciAobnVtYmVyKSByZWQsXG4gbyAgICAgZyAobnVtYmVyKSBncmVlbixcbiBvICAgICBiIChudW1iZXIpIGJsdWUsXG4gbyAgICAgaGV4IChzdHJpbmcpIGNvbG9yIGluIEhUTUwvQ1NTIGZvcm1hdDogI+KAouKAouKAouKAouKAouKAoixcbiBvICAgICBlcnJvciAoYm9vbGVhbikgYHRydWVgIGlmIHN0cmluZyBjYW4ndCBiZSBwYXJzZWQsXG4gbyAgICAgaCAobnVtYmVyKSBodWUsXG4gbyAgICAgcyAobnVtYmVyKSBzYXR1cmF0aW9uLFxuIG8gICAgIHYgKG51bWJlcikgdmFsdWUgKGJyaWdodG5lc3MpLFxuIG8gICAgIGwgKG51bWJlcikgbGlnaHRuZXNzXG4gbyB9XG5cXCovXG5TbmFwLmNvbG9yID0gZnVuY3Rpb24gKGNscikge1xuICAgIHZhciByZ2I7XG4gICAgaWYgKGlzKGNsciwgXCJvYmplY3RcIikgJiYgXCJoXCIgaW4gY2xyICYmIFwic1wiIGluIGNsciAmJiBcImJcIiBpbiBjbHIpIHtcbiAgICAgICAgcmdiID0gU25hcC5oc2IycmdiKGNscik7XG4gICAgICAgIGNsci5yID0gcmdiLnI7XG4gICAgICAgIGNsci5nID0gcmdiLmc7XG4gICAgICAgIGNsci5iID0gcmdiLmI7XG4gICAgICAgIGNsci5vcGFjaXR5ID0gMTtcbiAgICAgICAgY2xyLmhleCA9IHJnYi5oZXg7XG4gICAgfSBlbHNlIGlmIChpcyhjbHIsIFwib2JqZWN0XCIpICYmIFwiaFwiIGluIGNsciAmJiBcInNcIiBpbiBjbHIgJiYgXCJsXCIgaW4gY2xyKSB7XG4gICAgICAgIHJnYiA9IFNuYXAuaHNsMnJnYihjbHIpO1xuICAgICAgICBjbHIuciA9IHJnYi5yO1xuICAgICAgICBjbHIuZyA9IHJnYi5nO1xuICAgICAgICBjbHIuYiA9IHJnYi5iO1xuICAgICAgICBjbHIub3BhY2l0eSA9IDE7XG4gICAgICAgIGNsci5oZXggPSByZ2IuaGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpcyhjbHIsIFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICBjbHIgPSBTbmFwLmdldFJHQihjbHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcyhjbHIsIFwib2JqZWN0XCIpICYmIFwiclwiIGluIGNsciAmJiBcImdcIiBpbiBjbHIgJiYgXCJiXCIgaW4gY2xyICYmICEoXCJlcnJvclwiIGluIGNscikpIHtcbiAgICAgICAgICAgIHJnYiA9IFNuYXAucmdiMmhzbChjbHIpO1xuICAgICAgICAgICAgY2xyLmggPSByZ2IuaDtcbiAgICAgICAgICAgIGNsci5zID0gcmdiLnM7XG4gICAgICAgICAgICBjbHIubCA9IHJnYi5sO1xuICAgICAgICAgICAgcmdiID0gU25hcC5yZ2IyaHNiKGNscik7XG4gICAgICAgICAgICBjbHIudiA9IHJnYi5iO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xyID0ge2hleDogXCJub25lXCJ9O1xuICAgICAgICAgICAgY2xyLnIgPSBjbHIuZyA9IGNsci5iID0gY2xyLmggPSBjbHIucyA9IGNsci52ID0gY2xyLmwgPSAtMTtcbiAgICAgICAgICAgIGNsci5lcnJvciA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xyLnRvU3RyaW5nID0gcmdidG9TdHJpbmc7XG4gICAgcmV0dXJuIGNscjtcbn07XG4vKlxcXG4gKiBTbmFwLmhzYjJyZ2JcbiBbIG1ldGhvZCBdXG4gKipcbiAqIENvbnZlcnRzIEhTQiB2YWx1ZXMgdG8gYW4gUkdCIG9iamVjdFxuIC0gaCAobnVtYmVyKSBodWVcbiAtIHMgKG51bWJlcikgc2F0dXJhdGlvblxuIC0gdiAobnVtYmVyKSB2YWx1ZSBvciBicmlnaHRuZXNzXG4gPSAob2JqZWN0KSBSR0Igb2JqZWN0IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuIG8ge1xuIG8gICAgIHIgKG51bWJlcikgcmVkLFxuIG8gICAgIGcgKG51bWJlcikgZ3JlZW4sXG4gbyAgICAgYiAobnVtYmVyKSBibHVlLFxuIG8gICAgIGhleCAoc3RyaW5nKSBjb2xvciBpbiBIVE1ML0NTUyBmb3JtYXQ6ICPigKLigKLigKLigKLigKLigKJcbiBvIH1cblxcKi9cblNuYXAuaHNiMnJnYiA9IGZ1bmN0aW9uIChoLCBzLCB2LCBvKSB7XG4gICAgaWYgKGlzKGgsIFwib2JqZWN0XCIpICYmIFwiaFwiIGluIGggJiYgXCJzXCIgaW4gaCAmJiBcImJcIiBpbiBoKSB7XG4gICAgICAgIHYgPSBoLmI7XG4gICAgICAgIHMgPSBoLnM7XG4gICAgICAgIG8gPSBoLm87XG4gICAgICAgIGggPSBoLmg7XG4gICAgfVxuICAgIGggKj0gMzYwO1xuICAgIHZhciBSLCBHLCBCLCBYLCBDO1xuICAgIGggPSAoaCAlIDM2MCkgLyA2MDtcbiAgICBDID0gdiAqIHM7XG4gICAgWCA9IEMgKiAoMSAtIGFicyhoICUgMiAtIDEpKTtcbiAgICBSID0gRyA9IEIgPSB2IC0gQztcblxuICAgIGggPSB+fmg7XG4gICAgUiArPSBbQywgWCwgMCwgMCwgWCwgQ11baF07XG4gICAgRyArPSBbWCwgQywgQywgWCwgMCwgMF1baF07XG4gICAgQiArPSBbMCwgMCwgWCwgQywgQywgWF1baF07XG4gICAgcmV0dXJuIHBhY2thZ2VSR0IoUiwgRywgQiwgbyk7XG59O1xuLypcXFxuICogU25hcC5oc2wycmdiXG4gWyBtZXRob2QgXVxuICoqXG4gKiBDb252ZXJ0cyBIU0wgdmFsdWVzIHRvIGFuIFJHQiBvYmplY3RcbiAtIGggKG51bWJlcikgaHVlXG4gLSBzIChudW1iZXIpIHNhdHVyYXRpb25cbiAtIGwgKG51bWJlcikgbHVtaW5vc2l0eVxuID0gKG9iamVjdCkgUkdCIG9iamVjdCBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiBvIHtcbiBvICAgICByIChudW1iZXIpIHJlZCxcbiBvICAgICBnIChudW1iZXIpIGdyZWVuLFxuIG8gICAgIGIgKG51bWJlcikgYmx1ZSxcbiBvICAgICBoZXggKHN0cmluZykgY29sb3IgaW4gSFRNTC9DU1MgZm9ybWF0OiAj4oCi4oCi4oCi4oCi4oCi4oCiXG4gbyB9XG5cXCovXG5TbmFwLmhzbDJyZ2IgPSBmdW5jdGlvbiAoaCwgcywgbCwgbykge1xuICAgIGlmIChpcyhoLCBcIm9iamVjdFwiKSAmJiBcImhcIiBpbiBoICYmIFwic1wiIGluIGggJiYgXCJsXCIgaW4gaCkge1xuICAgICAgICBsID0gaC5sO1xuICAgICAgICBzID0gaC5zO1xuICAgICAgICBoID0gaC5oO1xuICAgIH1cbiAgICBpZiAoaCA+IDEgfHwgcyA+IDEgfHwgbCA+IDEpIHtcbiAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgIHMgLz0gMTAwO1xuICAgICAgICBsIC89IDEwMDtcbiAgICB9XG4gICAgaCAqPSAzNjA7XG4gICAgdmFyIFIsIEcsIEIsIFgsIEM7XG4gICAgaCA9IChoICUgMzYwKSAvIDYwO1xuICAgIEMgPSAyICogcyAqIChsIDwgLjUgPyBsIDogMSAtIGwpO1xuICAgIFggPSBDICogKDEgLSBhYnMoaCAlIDIgLSAxKSk7XG4gICAgUiA9IEcgPSBCID0gbCAtIEMgLyAyO1xuXG4gICAgaCA9IH5+aDtcbiAgICBSICs9IFtDLCBYLCAwLCAwLCBYLCBDXVtoXTtcbiAgICBHICs9IFtYLCBDLCBDLCBYLCAwLCAwXVtoXTtcbiAgICBCICs9IFswLCAwLCBYLCBDLCBDLCBYXVtoXTtcbiAgICByZXR1cm4gcGFja2FnZVJHQihSLCBHLCBCLCBvKTtcbn07XG4vKlxcXG4gKiBTbmFwLnJnYjJoc2JcbiBbIG1ldGhvZCBdXG4gKipcbiAqIENvbnZlcnRzIFJHQiB2YWx1ZXMgdG8gYW4gSFNCIG9iamVjdFxuIC0gciAobnVtYmVyKSByZWRcbiAtIGcgKG51bWJlcikgZ3JlZW5cbiAtIGIgKG51bWJlcikgYmx1ZVxuID0gKG9iamVjdCkgSFNCIG9iamVjdCBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiBvIHtcbiBvICAgICBoIChudW1iZXIpIGh1ZSxcbiBvICAgICBzIChudW1iZXIpIHNhdHVyYXRpb24sXG4gbyAgICAgYiAobnVtYmVyKSBicmlnaHRuZXNzXG4gbyB9XG5cXCovXG5TbmFwLnJnYjJoc2IgPSBmdW5jdGlvbiAociwgZywgYikge1xuICAgIGIgPSBwcmVwYXJlUkdCKHIsIGcsIGIpO1xuICAgIHIgPSBiWzBdO1xuICAgIGcgPSBiWzFdO1xuICAgIGIgPSBiWzJdO1xuXG4gICAgdmFyIEgsIFMsIFYsIEM7XG4gICAgViA9IG1tYXgociwgZywgYik7XG4gICAgQyA9IFYgLSBtbWluKHIsIGcsIGIpO1xuICAgIEggPSAoQyA9PSAwID8gbnVsbCA6XG4gICAgICAgICBWID09IHIgPyAoZyAtIGIpIC8gQyA6XG4gICAgICAgICBWID09IGcgPyAoYiAtIHIpIC8gQyArIDIgOlxuICAgICAgICAgICAgICAgICAgKHIgLSBnKSAvIEMgKyA0XG4gICAgICAgICk7XG4gICAgSCA9ICgoSCArIDM2MCkgJSA2KSAqIDYwIC8gMzYwO1xuICAgIFMgPSBDID09IDAgPyAwIDogQyAvIFY7XG4gICAgcmV0dXJuIHtoOiBILCBzOiBTLCBiOiBWLCB0b1N0cmluZzogaHNidG9TdHJpbmd9O1xufTtcbi8qXFxcbiAqIFNuYXAucmdiMmhzbFxuIFsgbWV0aG9kIF1cbiAqKlxuICogQ29udmVydHMgUkdCIHZhbHVlcyB0byBhbiBIU0wgb2JqZWN0XG4gLSByIChudW1iZXIpIHJlZFxuIC0gZyAobnVtYmVyKSBncmVlblxuIC0gYiAobnVtYmVyKSBibHVlXG4gPSAob2JqZWN0KSBIU0wgb2JqZWN0IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuIG8ge1xuIG8gICAgIGggKG51bWJlcikgaHVlLFxuIG8gICAgIHMgKG51bWJlcikgc2F0dXJhdGlvbixcbiBvICAgICBsIChudW1iZXIpIGx1bWlub3NpdHlcbiBvIH1cblxcKi9cblNuYXAucmdiMmhzbCA9IGZ1bmN0aW9uIChyLCBnLCBiKSB7XG4gICAgYiA9IHByZXBhcmVSR0IociwgZywgYik7XG4gICAgciA9IGJbMF07XG4gICAgZyA9IGJbMV07XG4gICAgYiA9IGJbMl07XG5cbiAgICB2YXIgSCwgUywgTCwgTSwgbSwgQztcbiAgICBNID0gbW1heChyLCBnLCBiKTtcbiAgICBtID0gbW1pbihyLCBnLCBiKTtcbiAgICBDID0gTSAtIG07XG4gICAgSCA9IChDID09IDAgPyBudWxsIDpcbiAgICAgICAgIE0gPT0gciA/IChnIC0gYikgLyBDIDpcbiAgICAgICAgIE0gPT0gZyA/IChiIC0gcikgLyBDICsgMiA6XG4gICAgICAgICAgICAgICAgICAociAtIGcpIC8gQyArIDQpO1xuICAgIEggPSAoKEggKyAzNjApICUgNikgKiA2MCAvIDM2MDtcbiAgICBMID0gKE0gKyBtKSAvIDI7XG4gICAgUyA9IChDID09IDAgPyAwIDpcbiAgICAgICAgIEwgPCAuNSA/IEMgLyAoMiAqIEwpIDpcbiAgICAgICAgICAgICAgICAgIEMgLyAoMiAtIDIgKiBMKSk7XG4gICAgcmV0dXJuIHtoOiBILCBzOiBTLCBsOiBMLCB0b1N0cmluZzogaHNsdG9TdHJpbmd9O1xufTtcblxuLy8gVHJhbnNmb3JtYXRpb25zXG4vKlxcXG4gKiBTbmFwLnBhcnNlUGF0aFN0cmluZ1xuIFsgbWV0aG9kIF1cbiAqKlxuICogVXRpbGl0eSBtZXRob2RcbiAqKlxuICogUGFyc2VzIGdpdmVuIHBhdGggc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgYXJyYXlzIG9mIHBhdGggc2VnbWVudHNcbiAtIHBhdGhTdHJpbmcgKHN0cmluZ3xhcnJheSkgcGF0aCBzdHJpbmcgb3IgYXJyYXkgb2Ygc2VnbWVudHMgKGluIHRoZSBsYXN0IGNhc2UgaXQgaXMgcmV0dXJuZWQgc3RyYWlnaHQgYXdheSlcbiA9IChhcnJheSkgYXJyYXkgb2Ygc2VnbWVudHNcblxcKi9cblNuYXAucGFyc2VQYXRoU3RyaW5nID0gZnVuY3Rpb24gKHBhdGhTdHJpbmcpIHtcbiAgICBpZiAoIXBhdGhTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBwdGggPSBTbmFwLnBhdGgocGF0aFN0cmluZyk7XG4gICAgaWYgKHB0aC5hcnIpIHtcbiAgICAgICAgcmV0dXJuIFNuYXAucGF0aC5jbG9uZShwdGguYXJyKTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHBhcmFtQ291bnRzID0ge2E6IDcsIGM6IDYsIG86IDIsIGg6IDEsIGw6IDIsIG06IDIsIHI6IDQsIHE6IDQsIHM6IDQsIHQ6IDIsIHY6IDEsIHU6IDMsIHo6IDB9LFxuICAgICAgICBkYXRhID0gW107XG4gICAgaWYgKGlzKHBhdGhTdHJpbmcsIFwiYXJyYXlcIikgJiYgaXMocGF0aFN0cmluZ1swXSwgXCJhcnJheVwiKSkgeyAvLyByb3VnaCBhc3N1bXB0aW9uXG4gICAgICAgIGRhdGEgPSBTbmFwLnBhdGguY2xvbmUocGF0aFN0cmluZyk7XG4gICAgfVxuICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgU3RyKHBhdGhTdHJpbmcpLnJlcGxhY2UocGF0aENvbW1hbmQsIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gW10sXG4gICAgICAgICAgICAgICAgbmFtZSA9IGIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGMucmVwbGFjZShwYXRoVmFsdWVzLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIGIgJiYgcGFyYW1zLnB1c2goK2IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmFtZSA9PSBcIm1cIiAmJiBwYXJhbXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGRhdGEucHVzaChbYl0uY29uY2F0KHBhcmFtcy5zcGxpY2UoMCwgMikpKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJsXCI7XG4gICAgICAgICAgICAgICAgYiA9IGIgPT0gXCJtXCIgPyBcImxcIiA6IFwiTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJvXCIgJiYgcGFyYW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKFtiLCBwYXJhbXNbMF1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lID09IFwiclwiKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKFtiXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgICAgICB9IGVsc2Ugd2hpbGUgKHBhcmFtcy5sZW5ndGggPj0gcGFyYW1Db3VudHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goW2JdLmNvbmNhdChwYXJhbXMuc3BsaWNlKDAsIHBhcmFtQ291bnRzW25hbWVdKSkpO1xuICAgICAgICAgICAgICAgIGlmICghcGFyYW1Db3VudHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0YS50b1N0cmluZyA9IFNuYXAucGF0aC50b1N0cmluZztcbiAgICBwdGguYXJyID0gU25hcC5wYXRoLmNsb25lKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xufTtcbi8qXFxcbiAqIFNuYXAucGFyc2VUcmFuc2Zvcm1TdHJpbmdcbiBbIG1ldGhvZCBdXG4gKipcbiAqIFV0aWxpdHkgbWV0aG9kXG4gKipcbiAqIFBhcnNlcyBnaXZlbiB0cmFuc2Zvcm0gc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdHJhbnNmb3JtYXRpb25zXG4gLSBUU3RyaW5nIChzdHJpbmd8YXJyYXkpIHRyYW5zZm9ybSBzdHJpbmcgb3IgYXJyYXkgb2YgdHJhbnNmb3JtYXRpb25zIChpbiB0aGUgbGFzdCBjYXNlIGl0IGlzIHJldHVybmVkIHN0cmFpZ2h0IGF3YXkpXG4gPSAoYXJyYXkpIGFycmF5IG9mIHRyYW5zZm9ybWF0aW9uc1xuXFwqL1xudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gU25hcC5wYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIChUU3RyaW5nKSB7XG4gICAgaWYgKCFUU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgcGFyYW1Db3VudHMgPSB7cjogMywgczogNCwgdDogMiwgbTogNn0sXG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICBpZiAoaXMoVFN0cmluZywgXCJhcnJheVwiKSAmJiBpcyhUU3RyaW5nWzBdLCBcImFycmF5XCIpKSB7IC8vIHJvdWdoIGFzc3VtcHRpb25cbiAgICAgICAgZGF0YSA9IFNuYXAucGF0aC5jbG9uZShUU3RyaW5nKTtcbiAgICB9XG4gICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICBTdHIoVFN0cmluZykucmVwbGFjZSh0Q29tbWFuZCwgZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXSxcbiAgICAgICAgICAgICAgICBuYW1lID0gYi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgYy5yZXBsYWNlKHBhdGhWYWx1ZXMsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgYiAmJiBwYXJhbXMucHVzaCgrYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEucHVzaChbYl0uY29uY2F0KHBhcmFtcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGF0YS50b1N0cmluZyA9IFNuYXAucGF0aC50b1N0cmluZztcbiAgICByZXR1cm4gZGF0YTtcbn07XG5mdW5jdGlvbiBzdmdUcmFuc2Zvcm0yc3RyaW5nKHRzdHIpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgdHN0ciA9IHRzdHIucmVwbGFjZSgvKD86XnxcXHMpKFxcdyspXFwoKFteKV0rKVxcKS9nLCBmdW5jdGlvbiAoYWxsLCBuYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLnNwbGl0KC9cXHMqLFxccyp8XFxzKy8pO1xuICAgICAgICBpZiAobmFtZSA9PSBcInJvdGF0ZVwiICYmIHBhcmFtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcGFyYW1zLnB1c2goMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHBhcmFtc1swXSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJza2V3WFwiKSB7XG4gICAgICAgICAgICByZXMucHVzaChbXCJtXCIsIDEsIDAsIG1hdGgudGFuKHJhZChwYXJhbXNbMF0pKSwgMSwgMCwgMF0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJza2V3WVwiKSB7XG4gICAgICAgICAgICByZXMucHVzaChbXCJtXCIsIDEsIG1hdGgudGFuKHJhZChwYXJhbXNbMF0pKSwgMCwgMSwgMCwgMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnB1c2goW25hbWUuY2hhckF0KDApXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuU25hcC5fLnN2Z1RyYW5zZm9ybTJzdHJpbmcgPSBzdmdUcmFuc2Zvcm0yc3RyaW5nO1xuU25hcC5fLnJnVHJhbnNmb3JtID0gL15bYS16XVtcXHNdKi0/XFwuP1xcZC9pO1xuZnVuY3Rpb24gdHJhbnNmb3JtMm1hdHJpeCh0c3RyLCBiYm94KSB7XG4gICAgdmFyIHRkYXRhID0gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHN0ciksXG4gICAgICAgIG0gPSBuZXcgU25hcC5NYXRyaXg7XG4gICAgaWYgKHRkYXRhKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRkYXRhLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0ID0gdGRhdGFbaV0sXG4gICAgICAgICAgICAgICAgdGxlbiA9IHQubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQgPSBTdHIodFswXSkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZSA9IHRbMF0gIT0gY29tbWFuZCxcbiAgICAgICAgICAgICAgICBpbnZlciA9IGFic29sdXRlID8gbS5pbnZlcnQoKSA6IDAsXG4gICAgICAgICAgICAgICAgeDEsXG4gICAgICAgICAgICAgICAgeTEsXG4gICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgeTIsXG4gICAgICAgICAgICAgICAgYmI7XG4gICAgICAgICAgICBpZiAoY29tbWFuZCA9PSBcInRcIiAmJiB0bGVuID09IDIpe1xuICAgICAgICAgICAgICAgIG0udHJhbnNsYXRlKHRbMV0sIDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kID09IFwidFwiICYmIHRsZW4gPT0gMykge1xuICAgICAgICAgICAgICAgIGlmIChhYnNvbHV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB4MSA9IGludmVyLngoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHkxID0gaW52ZXIueSgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgeDIgPSBpbnZlci54KHRbMV0sIHRbMl0pO1xuICAgICAgICAgICAgICAgICAgICB5MiA9IGludmVyLnkodFsxXSwgdFsyXSk7XG4gICAgICAgICAgICAgICAgICAgIG0udHJhbnNsYXRlKHgyIC0geDEsIHkyIC0geTEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG0udHJhbnNsYXRlKHRbMV0sIHRbMl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZCA9PSBcInJcIikge1xuICAgICAgICAgICAgICAgIGlmICh0bGVuID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmIgPSBiYiB8fCBiYm94O1xuICAgICAgICAgICAgICAgICAgICBtLnJvdGF0ZSh0WzFdLCBiYi54ICsgYmIud2lkdGggLyAyLCBiYi55ICsgYmIuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bGVuID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFic29sdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MiA9IGludmVyLngodFsyXSwgdFszXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5MiA9IGludmVyLnkodFsyXSwgdFszXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLnJvdGF0ZSh0WzFdLCB4MiwgeTIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5yb3RhdGUodFsxXSwgdFsyXSwgdFszXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGxlbiA9PSAyIHx8IHRsZW4gPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBiYiA9IGJiIHx8IGJib3g7XG4gICAgICAgICAgICAgICAgICAgIG0uc2NhbGUodFsxXSwgdFt0bGVuIC0gMV0sIGJiLnggKyBiYi53aWR0aCAvIDIsIGJiLnkgKyBiYi5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRsZW4gPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyID0gaW52ZXIueCh0WzJdLCB0WzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyID0gaW52ZXIueSh0WzJdLCB0WzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc2NhbGUodFsxXSwgdFsxXSwgeDIsIHkyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc2NhbGUodFsxXSwgdFsxXSwgdFsyXSwgdFszXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRsZW4gPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyID0gaW52ZXIueCh0WzNdLCB0WzRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyID0gaW52ZXIueSh0WzNdLCB0WzRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc2NhbGUodFsxXSwgdFsyXSwgeDIsIHkyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc2NhbGUodFsxXSwgdFsyXSwgdFszXSwgdFs0XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT0gXCJtXCIgJiYgdGxlbiA9PSA3KSB7XG4gICAgICAgICAgICAgICAgbS5hZGQodFsxXSwgdFsyXSwgdFszXSwgdFs0XSwgdFs1XSwgdFs2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG07XG59XG5TbmFwLl8udHJhbnNmb3JtMm1hdHJpeCA9IHRyYW5zZm9ybTJtYXRyaXg7XG5TbmFwLl91bml0MnB4ID0gdW5pdDJweDtcbnZhciBjb250YWlucyA9IGdsb2IuZG9jLmNvbnRhaW5zIHx8IGdsb2IuZG9jLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID9cbiAgICBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09IDkgPyBhLmRvY3VtZW50RWxlbWVudCA6IGEsXG4gICAgICAgICAgICBidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHJldHVybiBhID09IGJ1cCB8fCAhIShidXAgJiYgYnVwLm5vZGVUeXBlID09IDEgJiYgKFxuICAgICAgICAgICAgICAgIGFkb3duLmNvbnRhaW5zID9cbiAgICAgICAgICAgICAgICAgICAgYWRvd24uY29udGFpbnMoYnVwKSA6XG4gICAgICAgICAgICAgICAgICAgIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihidXApICYgMTZcbiAgICAgICAgICAgICkpO1xuICAgIH0gOlxuICAgIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICB3aGlsZSAoYikge1xuICAgICAgICAgICAgICAgIGIgPSBiLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGIgPT0gYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5mdW5jdGlvbiBnZXRTb21lRGVmcyhlbCkge1xuICAgIHZhciBwID0gKGVsLm5vZGUub3duZXJTVkdFbGVtZW50ICYmIHdyYXAoZWwubm9kZS5vd25lclNWR0VsZW1lbnQpKSB8fFxuICAgICAgICAgICAgKGVsLm5vZGUucGFyZW50Tm9kZSAmJiB3cmFwKGVsLm5vZGUucGFyZW50Tm9kZSkpIHx8XG4gICAgICAgICAgICBTbmFwLnNlbGVjdChcInN2Z1wiKSB8fFxuICAgICAgICAgICAgU25hcCgwLCAwKSxcbiAgICAgICAgcGRlZnMgPSBwLnNlbGVjdChcImRlZnNcIiksXG4gICAgICAgIGRlZnMgID0gcGRlZnMgPT0gbnVsbCA/IGZhbHNlIDogcGRlZnMubm9kZTtcbiAgICBpZiAoIWRlZnMpIHtcbiAgICAgICAgZGVmcyA9IG1ha2UoXCJkZWZzXCIsIHAubm9kZSkubm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZnM7XG59XG5mdW5jdGlvbiBnZXRTb21lU1ZHKGVsKSB7XG4gICAgcmV0dXJuIGVsLm5vZGUub3duZXJTVkdFbGVtZW50ICYmIHdyYXAoZWwubm9kZS5vd25lclNWR0VsZW1lbnQpIHx8IFNuYXAuc2VsZWN0KFwic3ZnXCIpO1xufVxuU25hcC5fLmdldFNvbWVEZWZzID0gZ2V0U29tZURlZnM7XG5TbmFwLl8uZ2V0U29tZVNWRyA9IGdldFNvbWVTVkc7XG5mdW5jdGlvbiB1bml0MnB4KGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBzdmcgPSBnZXRTb21lU1ZHKGVsKS5ub2RlLFxuICAgICAgICBvdXQgPSB7fSxcbiAgICAgICAgbWdyID0gc3ZnLnF1ZXJ5U2VsZWN0b3IoXCIuc3ZnLS0tbWdyXCIpO1xuICAgIGlmICghbWdyKSB7XG4gICAgICAgIG1nciA9ICQoXCJyZWN0XCIpO1xuICAgICAgICAkKG1nciwge3g6IC05ZTksIHk6IC05ZTksIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgXCJjbGFzc1wiOiBcInN2Zy0tLW1nclwiLCBmaWxsOiBcIm5vbmVcIn0pO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQobWdyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Vyh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09ICt2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgJChtZ3IsIHt3aWR0aDogdmFsfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbWdyLmdldEJCb3goKS53aWR0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0SCh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09ICt2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgJChtZ3IsIHtoZWlnaHQ6IHZhbH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIG1nci5nZXRCQm94KCkuaGVpZ2h0O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXQobmFtLCBmKSB7XG4gICAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIG91dFtuYW1dID0gZihlbC5hdHRyKG5hbSkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtID09IG5hbWUpIHtcbiAgICAgICAgICAgIG91dCA9IGYodmFsdWUgPT0gbnVsbCA/IGVsLmF0dHIobmFtKSB8fCAwIDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoZWwudHlwZSkge1xuICAgICAgICBjYXNlIFwicmVjdFwiOlxuICAgICAgICAgICAgc2V0KFwicnhcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJyeVwiLCBnZXRIKTtcbiAgICAgICAgY2FzZSBcImltYWdlXCI6XG4gICAgICAgICAgICBzZXQoXCJ3aWR0aFwiLCBnZXRXKTtcbiAgICAgICAgICAgIHNldChcImhlaWdodFwiLCBnZXRIKTtcbiAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgIHNldChcInhcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJ5XCIsIGdldEgpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgICAgc2V0KFwiY3hcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJjeVwiLCBnZXRIKTtcbiAgICAgICAgICAgIHNldChcInJcIiwgZ2V0Vyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZWxsaXBzZVwiOlxuICAgICAgICAgICAgc2V0KFwiY3hcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJjeVwiLCBnZXRIKTtcbiAgICAgICAgICAgIHNldChcInJ4XCIsIGdldFcpO1xuICAgICAgICAgICAgc2V0KFwicnlcIiwgZ2V0SCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgc2V0KFwieDFcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJ4MlwiLCBnZXRXKTtcbiAgICAgICAgICAgIHNldChcInkxXCIsIGdldEgpO1xuICAgICAgICAgICAgc2V0KFwieTJcIiwgZ2V0SCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWFya2VyXCI6XG4gICAgICAgICAgICBzZXQoXCJyZWZYXCIsIGdldFcpO1xuICAgICAgICAgICAgc2V0KFwibWFya2VyV2lkdGhcIiwgZ2V0Vyk7XG4gICAgICAgICAgICBzZXQoXCJyZWZZXCIsIGdldEgpO1xuICAgICAgICAgICAgc2V0KFwibWFya2VySGVpZ2h0XCIsIGdldEgpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJhZGlhbEdyYWRpZW50XCI6XG4gICAgICAgICAgICBzZXQoXCJmeFwiLCBnZXRXKTtcbiAgICAgICAgICAgIHNldChcImZ5XCIsIGdldEgpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInRzcGFuXCI6XG4gICAgICAgICAgICBzZXQoXCJkeFwiLCBnZXRXKTtcbiAgICAgICAgICAgIHNldChcImR5XCIsIGdldEgpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNldChuYW1lLCBnZXRXKTtcbiAgICB9XG4gICAgc3ZnLnJlbW92ZUNoaWxkKG1ncik7XG4gICAgcmV0dXJuIG91dDtcbn1cbi8qXFxcbiAqIFNuYXAuc2VsZWN0XG4gWyBtZXRob2QgXVxuICoqXG4gKiBXcmFwcyBhIERPTSBlbGVtZW50IHNwZWNpZmllZCBieSBDU1Mgc2VsZWN0b3IgYXMgQEVsZW1lbnRcbiAtIHF1ZXJ5IChzdHJpbmcpIENTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudFxuID0gKEVsZW1lbnQpIHRoZSBjdXJyZW50IGVsZW1lbnRcblxcKi9cblNuYXAuc2VsZWN0ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSBTdHIocXVlcnkpLnJlcGxhY2UoLyhbXlxcXFxdKTovZywgXCIkMVxcXFw6XCIpO1xuICAgIHJldHVybiB3cmFwKGdsb2IuZG9jLnF1ZXJ5U2VsZWN0b3IocXVlcnkpKTtcbn07XG4vKlxcXG4gKiBTbmFwLnNlbGVjdEFsbFxuIFsgbWV0aG9kIF1cbiAqKlxuICogV3JhcHMgRE9NIGVsZW1lbnRzIHNwZWNpZmllZCBieSBDU1Mgc2VsZWN0b3IgYXMgc2V0IG9yIGFycmF5IG9mIEBFbGVtZW50XG4gLSBxdWVyeSAoc3RyaW5nKSBDU1Mgc2VsZWN0b3Igb2YgdGhlIGVsZW1lbnRcbiA9IChFbGVtZW50KSB0aGUgY3VycmVudCBlbGVtZW50XG5cXCovXG5TbmFwLnNlbGVjdEFsbCA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBub2RlbGlzdCA9IGdsb2IuZG9jLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpLFxuICAgICAgICBzZXQgPSAoU25hcC5zZXQgfHwgQXJyYXkpKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXQucHVzaCh3cmFwKG5vZGVsaXN0W2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBzZXQ7XG59O1xuXG5mdW5jdGlvbiBhZGQyZ3JvdXAobGlzdCkge1xuICAgIGlmICghaXMobGlzdCwgXCJhcnJheVwiKSkge1xuICAgICAgICBsaXN0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB9XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgbm9kZSA9IHRoaXMubm9kZTtcbiAgICB3aGlsZSAodGhpc1tpXSkgZGVsZXRlIHRoaXNbaSsrXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXS50eXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICAgIGxpc3RbaV0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsLm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGxpc3RbaV0ubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzW2orK10gPSB3cmFwKGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4vLyBIdWIgZ2FyYmFnZSBjb2xsZWN0b3IgZXZlcnkgMTBzXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGh1YikgaWYgKGh1YltoYXNdKGtleSkpIHtcbiAgICAgICAgdmFyIGVsID0gaHViW2tleV0sXG4gICAgICAgICAgICBub2RlID0gZWwubm9kZTtcbiAgICAgICAgaWYgKGVsLnR5cGUgIT0gXCJzdmdcIiAmJiAhbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgZWwudHlwZSA9PSBcInN2Z1wiICYmICghbm9kZS5wYXJlbnROb2RlIHx8IFwib3duZXJTVkdFbGVtZW50XCIgaW4gbm9kZS5wYXJlbnROb2RlICYmICFub2RlLm93bmVyU1ZHRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBodWJba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn0sIDFlNCk7XG5mdW5jdGlvbiBFbGVtZW50KGVsKSB7XG4gICAgaWYgKGVsLnNuYXAgaW4gaHViKSB7XG4gICAgICAgIHJldHVybiBodWJbZWwuc25hcF07XG4gICAgfVxuICAgIHZhciBzdmc7XG4gICAgdHJ5IHtcbiAgICAgICAgc3ZnID0gZWwub3duZXJTVkdFbGVtZW50O1xuICAgIH0gY2F0Y2goZSkge31cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5ub2RlXG4gICAgIFsgcHJvcGVydHkgKG9iamVjdCkgXVxuICAgICAqKlxuICAgICAqIEdpdmVzIHlvdSBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIG9iamVjdCwgc28geW91IGNhbiBhc3NpZ24gZXZlbnQgaGFuZGxlcnMgb3IganVzdCBtZXNzIGFyb3VuZC5cbiAgICAgPiBVc2FnZVxuICAgICB8IC8vIGRyYXcgYSBjaXJjbGUgYXQgY29vcmRpbmF0ZSAxMCwxMCB3aXRoIHJhZGl1cyBvZiAxMFxuICAgICB8IHZhciBjID0gcGFwZXIuY2lyY2xlKDEwLCAxMCwgMTApO1xuICAgICB8IGMubm9kZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICB8ICAgICBjLmF0dHIoXCJmaWxsXCIsIFwicmVkXCIpO1xuICAgICB8IH07XG4gICAgXFwqL1xuICAgIHRoaXMubm9kZSA9IGVsO1xuICAgIGlmIChzdmcpIHtcbiAgICAgICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcihzdmcpO1xuICAgIH1cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC50eXBlXG4gICAgIFsgcHJvcGVydHkgKHN0cmluZykgXVxuICAgICAqKlxuICAgICAqIFNWRyB0YWcgbmFtZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICBcXCovXG4gICAgdGhpcy50eXBlID0gZWwudGFnTmFtZSB8fCBlbC5ub2RlTmFtZTtcbiAgICB2YXIgaWQgPSB0aGlzLmlkID0gSUQodGhpcyk7XG4gICAgdGhpcy5hbmltcyA9IHt9O1xuICAgIHRoaXMuXyA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiBbXVxuICAgIH07XG4gICAgZWwuc25hcCA9IGlkO1xuICAgIGh1YltpZF0gPSB0aGlzO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gXCJnXCIpIHtcbiAgICAgICAgdGhpcy5hZGQgPSBhZGQyZ3JvdXA7XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgaW4ge2c6IDEsIG1hc2s6IDEsIHBhdHRlcm46IDEsIHN5bWJvbDogMX0pIHtcbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIFBhcGVyLnByb3RvdHlwZSkgaWYgKFBhcGVyLnByb3RvdHlwZVtoYXNdKG1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRoaXNbbWV0aG9kXSA9IFBhcGVyLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICB9XG4gICAgfVxufVxuICAgLypcXFxuICAgICAqIEVsZW1lbnQuYXR0clxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogR2V0cyBvciBzZXRzIGdpdmVuIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnQuXG4gICAgICoqXG4gICAgIC0gcGFyYW1zIChvYmplY3QpIGNvbnRhaW5zIGtleS12YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzIHlvdSB3YW50IHRvIHNldFxuICAgICAqIG9yXG4gICAgIC0gcGFyYW0gKHN0cmluZykgbmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gICAgID0gKEVsZW1lbnQpIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgKiBvclxuICAgICA9IChzdHJpbmcpIHZhbHVlIG9mIGF0dHJpYnV0ZVxuICAgICA+IFVzYWdlXG4gICAgIHwgZWwuYXR0cih7XG4gICAgIHwgICAgIGZpbGw6IFwiI2ZjMFwiLFxuICAgICB8ICAgICBzdHJva2U6IFwiIzAwMFwiLFxuICAgICB8ICAgICBzdHJva2VXaWR0aDogMiwgLy8gQ2FtZWxDYXNlLi4uXG4gICAgIHwgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAuNSwgLy8gb3IgZGFzaC1zZXBhcmF0ZWQgbmFtZXNcbiAgICAgfCAgICAgd2lkdGg6IFwiKj0yXCIgLy8gcHJlZml4ZWQgdmFsdWVzXG4gICAgIHwgfSk7XG4gICAgIHwgY29uc29sZS5sb2coZWwuYXR0cihcImZpbGxcIikpOyAvLyAjZmMwXG4gICAgICogUHJlZml4ZWQgdmFsdWVzIGluIGZvcm1hdCBgXCIrPTEwXCJgIHN1cHBvcnRlZC4gQWxsIGZvdXIgb3BlcmF0aW9uc1xuICAgICAqIChgK2AsIGAtYCwgYCpgIGFuZCBgL2ApIGNvdWxkIGJlIHVzZWQuIE9wdGlvbmFsbHkgeW91IGNhbiB1c2UgdW5pdHMgZm9yIGArYFxuICAgICAqIGFuZCBgLWA6IGBcIis9MmVtXCJgLlxuICAgIFxcKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24gKHBhcmFtcywgdmFsdWUpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBlbC5ub2RlO1xuICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG5vZGUubm9kZVZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhdHRyID0gbm9kZS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYXR0ci5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0W2F0dHJbaV0ubm9kZU5hbWVdID0gYXR0cltpXS5ub2RlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcyhwYXJhbXMsIFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IHt9O1xuICAgICAgICAgICAgICAgIGpzb25bcGFyYW1zXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IGpzb247XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmUoXCJzbmFwLnV0aWwuZ2V0YXR0ci5cIiArIHBhcmFtcywgZWwpLmZpcnN0RGVmaW5lZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGF0dCBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXNbaGFzXShhdHQpKSB7XG4gICAgICAgICAgICAgICAgZXZlKFwic25hcC51dGlsLmF0dHIuXCIgKyBhdHQsIGVsLCBwYXJhbXNbYXR0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG4vKlxcXG4gKiBTbmFwLnBhcnNlXG4gWyBtZXRob2QgXVxuICoqXG4gKiBQYXJzZXMgU1ZHIGZyYWdtZW50IGFuZCBjb252ZXJ0cyBpdCBpbnRvIGEgQEZyYWdtZW50XG4gKipcbiAtIHN2ZyAoc3RyaW5nKSBTVkcgc3RyaW5nXG4gPSAoRnJhZ21lbnQpIHRoZSBARnJhZ21lbnRcblxcKi9cblNuYXAucGFyc2UgPSBmdW5jdGlvbiAoc3ZnKSB7XG4gICAgdmFyIGYgPSBnbG9iLmRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgIGZ1bGwgPSB0cnVlLFxuICAgICAgICBkaXYgPSBnbG9iLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN2ZyA9IFN0cihzdmcpO1xuICAgIGlmICghc3ZnLm1hdGNoKC9eXFxzKjxcXHMqc3ZnKD86XFxzfD4pLykpIHtcbiAgICAgICAgc3ZnID0gXCI8c3ZnPlwiICsgc3ZnICsgXCI8L3N2Zz5cIjtcbiAgICAgICAgZnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gc3ZnO1xuICAgIHN2ZyA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICBpZiAoc3ZnKSB7XG4gICAgICAgIGlmIChmdWxsKSB7XG4gICAgICAgICAgICBmID0gc3ZnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHN2Zy5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZi5hcHBlbmRDaGlsZChzdmcuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGcmFnbWVudChmKTtcbn07XG5mdW5jdGlvbiBGcmFnbWVudChmcmFnKSB7XG4gICAgdGhpcy5ub2RlID0gZnJhZztcbn1cbi8qXFxcbiAqIFNuYXAuZnJhZ21lbnRcbiBbIG1ldGhvZCBdXG4gKipcbiAqIENyZWF0ZXMgYSBET00gZnJhZ21lbnQgZnJvbSBhIGdpdmVuIGxpc3Qgb2YgZWxlbWVudHMgb3Igc3RyaW5nc1xuICoqXG4gLSB2YXJhcmdzICjigKYpIFNWRyBzdHJpbmdcbiA9IChGcmFnbWVudCkgdGhlIEBGcmFnbWVudFxuXFwqL1xuU25hcC5mcmFnbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgIGYgPSBnbG9iLmRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYXJncy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKGl0ZW0ubm9kZSAmJiBpdGVtLm5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGYuYXBwZW5kQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgZi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZi5hcHBlbmRDaGlsZChTbmFwLnBhcnNlKGl0ZW0pLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgRnJhZ21lbnQoZik7XG59O1xuXG5mdW5jdGlvbiBtYWtlKG5hbWUsIHBhcmVudCkge1xuICAgIHZhciByZXMgPSAkKG5hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChyZXMpO1xuICAgIHZhciBlbCA9IHdyYXAocmVzKTtcbiAgICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiBQYXBlcih3LCBoKSB7XG4gICAgdmFyIHJlcyxcbiAgICAgICAgZGVzYyxcbiAgICAgICAgZGVmcyxcbiAgICAgICAgcHJvdG8gPSBQYXBlci5wcm90b3R5cGU7XG4gICAgaWYgKHcgJiYgdy50YWdOYW1lID09IFwic3ZnXCIpIHtcbiAgICAgICAgaWYgKHcuc25hcCBpbiBodWIpIHtcbiAgICAgICAgICAgIHJldHVybiBodWJbdy5zbmFwXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9jID0gdy5vd25lckRvY3VtZW50O1xuICAgICAgICByZXMgPSBuZXcgRWxlbWVudCh3KTtcbiAgICAgICAgZGVzYyA9IHcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkZXNjXCIpWzBdO1xuICAgICAgICBkZWZzID0gdy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRlZnNcIilbMF07XG4gICAgICAgIGlmICghZGVzYykge1xuICAgICAgICAgICAgZGVzYyA9ICQoXCJkZXNjXCIpO1xuICAgICAgICAgICAgZGVzYy5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoXCJDcmVhdGVkIHdpdGggU25hcFwiKSk7XG4gICAgICAgICAgICByZXMubm9kZS5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlZnMpIHtcbiAgICAgICAgICAgIGRlZnMgPSAkKFwiZGVmc1wiKTtcbiAgICAgICAgICAgIHJlcy5ub2RlLmFwcGVuZENoaWxkKGRlZnMpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5kZWZzID0gZGVmcztcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3RvKSBpZiAocHJvdG9baGFzXShrZXkpKSB7XG4gICAgICAgICAgICByZXNba2V5XSA9IHByb3RvW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnBhcGVyID0gcmVzLnJvb3QgPSByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzID0gbWFrZShcInN2Z1wiLCBnbG9iLmRvYy5ib2R5KTtcbiAgICAgICAgJChyZXMubm9kZSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgdmVyc2lvbjogMS4xLFxuICAgICAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgICAgICB4bWxuczogeG1sbnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB3cmFwKGRvbSkge1xuICAgIGlmICghZG9tKSB7XG4gICAgICAgIHJldHVybiBkb207XG4gICAgfVxuICAgIGlmIChkb20gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGRvbSBpbnN0YW5jZW9mIEZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBkb207XG4gICAgfVxuICAgIGlmIChkb20udGFnTmFtZSAmJiBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09IFwic3ZnXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXBlcihkb20pO1xuICAgIH1cbiAgICBpZiAoZG9tLnRhZ05hbWUgJiYgZG9tLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBcIm9iamVjdFwiICYmIGRvbS50eXBlID09IFwiaW1hZ2Uvc3ZnK3htbFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGFwZXIoZG9tLmNvbnRlbnREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRWxlbWVudChkb20pO1xufVxuXG5TbmFwLl8ubWFrZSA9IG1ha2U7XG5TbmFwLl8ud3JhcCA9IHdyYXA7XG4vKlxcXG4gKiBQYXBlci5lbFxuIFsgbWV0aG9kIF1cbiAqKlxuICogQ3JlYXRlcyBhbiBlbGVtZW50IG9uIHBhcGVyIHdpdGggYSBnaXZlbiBuYW1lIGFuZCBubyBhdHRyaWJ1dGVzXG4gKipcbiAtIG5hbWUgKHN0cmluZykgdGFnIG5hbWVcbiAtIGF0dHIgKG9iamVjdCkgYXR0cmlidXRlc1xuID0gKEVsZW1lbnQpIHRoZSBjdXJyZW50IGVsZW1lbnRcbiA+IFVzYWdlXG4gfCB2YXIgYyA9IHBhcGVyLmNpcmNsZSgxMCwgMTAsIDEwKTsgLy8gaXMgdGhlIHNhbWUgYXMuLi5cbiB8IHZhciBjID0gcGFwZXIuZWwoXCJjaXJjbGVcIikuYXR0cih7XG4gfCAgICAgY3g6IDEwLFxuIHwgICAgIGN5OiAxMCxcbiB8ICAgICByOiAxMFxuIHwgfSk7XG4gfCAvLyBhbmQgdGhlIHNhbWUgYXNcbiB8IHZhciBjID0gcGFwZXIuZWwoXCJjaXJjbGVcIiwge1xuIHwgICAgIGN4OiAxMCxcbiB8ICAgICBjeTogMTAsXG4gfCAgICAgcjogMTBcbiB8IH0pO1xuXFwqL1xuUGFwZXIucHJvdG90eXBlLmVsID0gZnVuY3Rpb24gKG5hbWUsIGF0dHIpIHtcbiAgICB2YXIgZWwgPSBtYWtlKG5hbWUsIHRoaXMubm9kZSk7XG4gICAgYXR0ciAmJiBlbC5hdHRyKGF0dHIpO1xuICAgIHJldHVybiBlbDtcbn07XG4vKlxcXG4gKiBFbGVtZW50LmNoaWxkcmVuXG4gWyBtZXRob2QgXVxuICoqXG4gKiBSZXR1cm5zIGFycmF5IG9mIGFsbCB0aGUgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQuXG4gPSAoYXJyYXkpIGFycmF5IG9mIEVsZW1lbnRzXG5cXCovXG5FbGVtZW50LnByb3RvdHlwZS5jaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3V0ID0gW10sXG4gICAgICAgIGNoID0gdGhpcy5ub2RlLmNoaWxkTm9kZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gY2gubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBTbmFwKGNoW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07XG5mdW5jdGlvbiBqc29uRmlsbGVyKHJvb3QsIG8pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSByb290Lmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogcm9vdFtpXS50eXBlLFxuICAgICAgICAgICAgICAgIGF0dHI6IHJvb3RbaV0uYXR0cigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gPSByb290W2ldLmNoaWxkcmVuKCk7XG4gICAgICAgIG8ucHVzaChpdGVtKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAganNvbkZpbGxlcihjaGlsZHJlbiwgaXRlbS5jaGlsZE5vZGVzID0gW10pO1xuICAgICAgICB9XG4gICAgfVxufVxuLypcXFxuICogRWxlbWVudC50b0pTT05cbiBbIG1ldGhvZCBdXG4gKipcbiAqIFJldHVybnMgb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBhbGwgaXRzIGNoaWxkcmVuLlxuID0gKG9iamVjdCkgaW4gZm9ybWF0XG4gbyB7XG4gbyAgICAgdHlwZSAoc3RyaW5nKSB0aGlzLnR5cGUsXG4gbyAgICAgYXR0ciAob2JqZWN0KSBhdHRyaWJ1dGVzIG1hcCxcbiBvICAgICBjaGlsZE5vZGVzIChhcnJheSkgb3B0aW9uYWwgYXJyYXkgb2YgY2hpbGRyZW4gaW4gdGhlIHNhbWUgZm9ybWF0XG4gbyB9XG5cXCovXG5FbGVtZW50LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGpzb25GaWxsZXIoW3RoaXNdLCBvdXQpO1xuICAgIHJldHVybiBvdXRbMF07XG59O1xuLy8gZGVmYXVsdFxuZXZlLm9uKFwic25hcC51dGlsLmdldGF0dHJcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBhdHQgPSBldmUubnQoKTtcbiAgICBhdHQgPSBhdHQuc3Vic3RyaW5nKGF0dC5sYXN0SW5kZXhPZihcIi5cIikgKyAxKTtcbiAgICB2YXIgY3NzID0gYXR0LnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gICAgaWYgKGNzc0F0dHJbaGFzXShjc3MpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMubm9kZSwgYXR0KTtcbiAgICB9XG59KTtcbnZhciBjc3NBdHRyID0ge1xuICAgIFwiYWxpZ25tZW50LWJhc2VsaW5lXCI6IDAsXG4gICAgXCJiYXNlbGluZS1zaGlmdFwiOiAwLFxuICAgIFwiY2xpcFwiOiAwLFxuICAgIFwiY2xpcC1wYXRoXCI6IDAsXG4gICAgXCJjbGlwLXJ1bGVcIjogMCxcbiAgICBcImNvbG9yXCI6IDAsXG4gICAgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCI6IDAsXG4gICAgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIjogMCxcbiAgICBcImNvbG9yLXByb2ZpbGVcIjogMCxcbiAgICBcImNvbG9yLXJlbmRlcmluZ1wiOiAwLFxuICAgIFwiY3Vyc29yXCI6IDAsXG4gICAgXCJkaXJlY3Rpb25cIjogMCxcbiAgICBcImRpc3BsYXlcIjogMCxcbiAgICBcImRvbWluYW50LWJhc2VsaW5lXCI6IDAsXG4gICAgXCJlbmFibGUtYmFja2dyb3VuZFwiOiAwLFxuICAgIFwiZmlsbFwiOiAwLFxuICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAsXG4gICAgXCJmaWxsLXJ1bGVcIjogMCxcbiAgICBcImZpbHRlclwiOiAwLFxuICAgIFwiZmxvb2QtY29sb3JcIjogMCxcbiAgICBcImZsb29kLW9wYWNpdHlcIjogMCxcbiAgICBcImZvbnRcIjogMCxcbiAgICBcImZvbnQtZmFtaWx5XCI6IDAsXG4gICAgXCJmb250LXNpemVcIjogMCxcbiAgICBcImZvbnQtc2l6ZS1hZGp1c3RcIjogMCxcbiAgICBcImZvbnQtc3RyZXRjaFwiOiAwLFxuICAgIFwiZm9udC1zdHlsZVwiOiAwLFxuICAgIFwiZm9udC12YXJpYW50XCI6IDAsXG4gICAgXCJmb250LXdlaWdodFwiOiAwLFxuICAgIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiOiAwLFxuICAgIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIjogMCxcbiAgICBcImltYWdlLXJlbmRlcmluZ1wiOiAwLFxuICAgIFwia2VybmluZ1wiOiAwLFxuICAgIFwibGV0dGVyLXNwYWNpbmdcIjogMCxcbiAgICBcImxpZ2h0aW5nLWNvbG9yXCI6IDAsXG4gICAgXCJtYXJrZXJcIjogMCxcbiAgICBcIm1hcmtlci1lbmRcIjogMCxcbiAgICBcIm1hcmtlci1taWRcIjogMCxcbiAgICBcIm1hcmtlci1zdGFydFwiOiAwLFxuICAgIFwibWFza1wiOiAwLFxuICAgIFwib3BhY2l0eVwiOiAwLFxuICAgIFwib3ZlcmZsb3dcIjogMCxcbiAgICBcInBvaW50ZXItZXZlbnRzXCI6IDAsXG4gICAgXCJzaGFwZS1yZW5kZXJpbmdcIjogMCxcbiAgICBcInN0b3AtY29sb3JcIjogMCxcbiAgICBcInN0b3Atb3BhY2l0eVwiOiAwLFxuICAgIFwic3Ryb2tlXCI6IDAsXG4gICAgXCJzdHJva2UtZGFzaGFycmF5XCI6IDAsXG4gICAgXCJzdHJva2UtZGFzaG9mZnNldFwiOiAwLFxuICAgIFwic3Ryb2tlLWxpbmVjYXBcIjogMCxcbiAgICBcInN0cm9rZS1saW5lam9pblwiOiAwLFxuICAgIFwic3Ryb2tlLW1pdGVybGltaXRcIjogMCxcbiAgICBcInN0cm9rZS1vcGFjaXR5XCI6IDAsXG4gICAgXCJzdHJva2Utd2lkdGhcIjogMCxcbiAgICBcInRleHQtYW5jaG9yXCI6IDAsXG4gICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogMCxcbiAgICBcInRleHQtcmVuZGVyaW5nXCI6IDAsXG4gICAgXCJ1bmljb2RlLWJpZGlcIjogMCxcbiAgICBcInZpc2liaWxpdHlcIjogMCxcbiAgICBcIndvcmQtc3BhY2luZ1wiOiAwLFxuICAgIFwid3JpdGluZy1tb2RlXCI6IDBcbn07XG5cbmV2ZS5vbihcInNuYXAudXRpbC5hdHRyXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBhdHQgPSBldmUubnQoKSxcbiAgICAgICAgYXR0ciA9IHt9O1xuICAgIGF0dCA9IGF0dC5zdWJzdHJpbmcoYXR0Lmxhc3RJbmRleE9mKFwiLlwiKSArIDEpO1xuICAgIGF0dHJbYXR0XSA9IHZhbHVlO1xuICAgIHZhciBzdHlsZSA9IGF0dC5yZXBsYWNlKC8tKFxcdykvZ2ksIGZ1bmN0aW9uIChhbGwsIGxldHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KSxcbiAgICAgICAgY3NzID0gYXR0LnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICBpZiAoY3NzQXR0cltoYXNdKGNzcykpIHtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlW3N0eWxlXSA9IHZhbHVlID09IG51bGwgPyBFIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzLm5vZGUsIGF0dHIpO1xuICAgIH1cbn0pO1xuKGZ1bmN0aW9uIChwcm90bykge30oUGFwZXIucHJvdG90eXBlKSk7XG5cbi8vIHNpbXBsZSBhamF4XG4vKlxcXG4gKiBTbmFwLmFqYXhcbiBbIG1ldGhvZCBdXG4gKipcbiAqIFNpbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBBamF4XG4gKipcbiAtIHVybCAoc3RyaW5nKSBVUkxcbiAtIHBvc3REYXRhIChvYmplY3R8c3RyaW5nKSBkYXRhIGZvciBwb3N0IHJlcXVlc3RcbiAtIGNhbGxiYWNrIChmdW5jdGlvbikgY2FsbGJhY2tcbiAtIHNjb3BlIChvYmplY3QpICNvcHRpb25hbCBzY29wZSBvZiBjYWxsYmFja1xuICogb3JcbiAtIHVybCAoc3RyaW5nKSBVUkxcbiAtIGNhbGxiYWNrIChmdW5jdGlvbikgY2FsbGJhY2tcbiAtIHNjb3BlIChvYmplY3QpICNvcHRpb25hbCBzY29wZSBvZiBjYWxsYmFja1xuID0gKFhNTEh0dHBSZXF1ZXN0KSB0aGUgWE1MSHR0cFJlcXVlc3Qgb2JqZWN0LCBqdXN0IGluIGNhc2VcblxcKi9cblNuYXAuYWpheCA9IGZ1bmN0aW9uICh1cmwsIHBvc3REYXRhLCBjYWxsYmFjaywgc2NvcGUpe1xuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QsXG4gICAgICAgIGlkID0gSUQoKTtcbiAgICBpZiAocmVxKSB7XG4gICAgICAgIGlmIChpcyhwb3N0RGF0YSwgXCJmdW5jdGlvblwiKSkge1xuICAgICAgICAgICAgc2NvcGUgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNhbGxiYWNrID0gcG9zdERhdGE7XG4gICAgICAgICAgICBwb3N0RGF0YSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaXMocG9zdERhdGEsIFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICB2YXIgcGQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwb3N0RGF0YSkgaWYgKHBvc3REYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwZC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocG9zdERhdGFba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zdERhdGEgPSBwZC5qb2luKFwiJlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXEub3BlbigocG9zdERhdGEgPyBcIlBPU1RcIiA6IFwiR0VUXCIpLCB1cmwsIHRydWUpO1xuICAgICAgICBpZiAocG9zdERhdGEpIHtcbiAgICAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBldmUub25jZShcInNuYXAuYWpheC5cIiArIGlkICsgXCIuMFwiLCBjYWxsYmFjayk7XG4gICAgICAgICAgICBldmUub25jZShcInNuYXAuYWpheC5cIiArIGlkICsgXCIuMjAwXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGV2ZS5vbmNlKFwic25hcC5hamF4LlwiICsgaWQgKyBcIi4zMDRcIiwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSAhPSA0KSByZXR1cm47XG4gICAgICAgICAgICBldmUoXCJzbmFwLmFqYXguXCIgKyBpZCArIFwiLlwiICsgcmVxLnN0YXR1cywgc2NvcGUsIHJlcSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxO1xuICAgICAgICB9XG4gICAgICAgIHJlcS5zZW5kKHBvc3REYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9XG59O1xuLypcXFxuICogU25hcC5sb2FkXG4gWyBtZXRob2QgXVxuICoqXG4gKiBMb2FkcyBleHRlcm5hbCBTVkcgZmlsZSBhcyBhIEBGcmFnbWVudCAoc2VlIEBTbmFwLmFqYXggZm9yIG1vcmUgYWR2YW5jZWQgQUpBWClcbiAqKlxuIC0gdXJsIChzdHJpbmcpIFVSTFxuIC0gY2FsbGJhY2sgKGZ1bmN0aW9uKSBjYWxsYmFja1xuIC0gc2NvcGUgKG9iamVjdCkgI29wdGlvbmFsIHNjb3BlIG9mIGNhbGxiYWNrXG5cXCovXG5TbmFwLmxvYWQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBTbmFwLmFqYXgodXJsLCBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciBmID0gU25hcC5wYXJzZShyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgc2NvcGUgPyBjYWxsYmFjay5jYWxsKHNjb3BlLCBmKSA6IGNhbGxiYWNrKGYpO1xuICAgIH0pO1xufTtcbnZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHZhciBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG4gICAgICAgIGJvZHkgPSBkb2MuYm9keSxcbiAgICAgICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDAsIGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDAsXG4gICAgICAgIHRvcCAgPSBib3gudG9wICArIChnLndpbi5wYWdlWU9mZnNldCB8fCBkb2NFbGVtLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcCApIC0gY2xpZW50VG9wLFxuICAgICAgICBsZWZ0ID0gYm94LmxlZnQgKyAoZy53aW4ucGFnZVhPZmZzZXQgfHwgZG9jRWxlbS5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdCkgLSBjbGllbnRMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHk6IHRvcCxcbiAgICAgICAgeDogbGVmdFxuICAgIH07XG59O1xuLypcXFxuICogU25hcC5nZXRFbGVtZW50QnlQb2ludFxuIFsgbWV0aG9kIF1cbiAqKlxuICogUmV0dXJucyB5b3UgdG9wbW9zdCBlbGVtZW50IHVuZGVyIGdpdmVuIHBvaW50LlxuICoqXG4gPSAob2JqZWN0KSBTbmFwIGVsZW1lbnQgb2JqZWN0XG4gLSB4IChudW1iZXIpIHggY29vcmRpbmF0ZSBmcm9tIHRoZSB0b3AgbGVmdCBjb3JuZXIgb2YgdGhlIHdpbmRvd1xuIC0geSAobnVtYmVyKSB5IGNvb3JkaW5hdGUgZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSB3aW5kb3dcbiA+IFVzYWdlXG4gfCBTbmFwLmdldEVsZW1lbnRCeVBvaW50KG1vdXNlWCwgbW91c2VZKS5hdHRyKHtzdHJva2U6IFwiI2YwMFwifSk7XG5cXCovXG5TbmFwLmdldEVsZW1lbnRCeVBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICB2YXIgcGFwZXIgPSB0aGlzLFxuICAgICAgICBzdmcgPSBwYXBlci5jYW52YXMsXG4gICAgICAgIHRhcmdldCA9IGdsb2IuZG9jLmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgaWYgKGdsb2Iud2luLm9wZXJhICYmIHRhcmdldC50YWdOYW1lID09IFwic3ZnXCIpIHtcbiAgICAgICAgdmFyIHNvID0gZ2V0T2Zmc2V0KHRhcmdldCksXG4gICAgICAgICAgICBzciA9IHRhcmdldC5jcmVhdGVTVkdSZWN0KCk7XG4gICAgICAgIHNyLnggPSB4IC0gc28ueDtcbiAgICAgICAgc3IueSA9IHkgLSBzby55O1xuICAgICAgICBzci53aWR0aCA9IHNyLmhlaWdodCA9IDE7XG4gICAgICAgIHZhciBoaXRzID0gdGFyZ2V0LmdldEludGVyc2VjdGlvbkxpc3Qoc3IsIG51bGwpO1xuICAgICAgICBpZiAoaGl0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGhpdHNbaGl0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0KTtcbn07XG4vKlxcXG4gKiBTbmFwLnBsdWdpblxuIFsgbWV0aG9kIF1cbiAqKlxuICogTGV0IHlvdSB3cml0ZSBwbHVnaW5zLiBZb3UgcGFzcyBpbiBhIGZ1bmN0aW9uIHdpdGggZml2ZSBhcmd1bWVudHMsIGxpa2UgdGhpczpcbiB8IFNuYXAucGx1Z2luKGZ1bmN0aW9uIChTbmFwLCBFbGVtZW50LCBQYXBlciwgZ2xvYmFsLCBGcmFnbWVudCkge1xuIHwgICAgIFNuYXAubmV3bWV0aG9kID0gZnVuY3Rpb24gKCkge307XG4gfCAgICAgRWxlbWVudC5wcm90b3R5cGUubmV3bWV0aG9kID0gZnVuY3Rpb24gKCkge307XG4gfCAgICAgUGFwZXIucHJvdG90eXBlLm5ld21ldGhvZCA9IGZ1bmN0aW9uICgpIHt9O1xuIHwgfSk7XG4gKiBJbnNpZGUgdGhlIGZ1bmN0aW9uIHlvdSBoYXZlIGFjY2VzcyB0byBhbGwgbWFpbiBvYmplY3RzIChhbmQgdGhlaXJcbiAqIHByb3RvdHlwZXMpLiBUaGlzIGFsbG93IHlvdSB0byBleHRlbmQgYW55dGhpbmcgeW91IHdhbnQuXG4gKipcbiAtIGYgKGZ1bmN0aW9uKSB5b3VyIHBsdWdpbiBib2R5XG5cXCovXG5TbmFwLnBsdWdpbiA9IGZ1bmN0aW9uIChmKSB7XG4gICAgZihTbmFwLCBFbGVtZW50LCBQYXBlciwgZ2xvYiwgRnJhZ21lbnQpO1xufTtcbmdsb2Iud2luLlNuYXAgPSBTbmFwO1xucmV0dXJuIFNuYXA7XG59KHdpbmRvdyB8fCB0aGlzKSk7XG5cbi8vIENvcHlyaWdodCAoYykgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblNuYXAucGx1Z2luKGZ1bmN0aW9uIChTbmFwLCBFbGVtZW50LCBQYXBlciwgZ2xvYiwgRnJhZ21lbnQpIHtcbiAgICB2YXIgZWxwcm90byA9IEVsZW1lbnQucHJvdG90eXBlLFxuICAgICAgICBpcyA9IFNuYXAuaXMsXG4gICAgICAgIFN0ciA9IFN0cmluZyxcbiAgICAgICAgdW5pdDJweCA9IFNuYXAuX3VuaXQycHgsXG4gICAgICAgICQgPSBTbmFwLl8uJCxcbiAgICAgICAgbWFrZSA9IFNuYXAuXy5tYWtlLFxuICAgICAgICBnZXRTb21lRGVmcyA9IFNuYXAuXy5nZXRTb21lRGVmcyxcbiAgICAgICAgaGFzID0gXCJoYXNPd25Qcm9wZXJ0eVwiLFxuICAgICAgICB3cmFwID0gU25hcC5fLndyYXA7XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuZ2V0QkJveFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgYm94IGRlc2NyaXB0b3IgZm9yIHRoZSBnaXZlbiBlbGVtZW50XG4gICAgICoqXG4gICAgID0gKG9iamVjdCkgYm91bmRpbmcgYm94IGRlc2NyaXB0b3I6XG4gICAgIG8ge1xuICAgICBvICAgICBjeDogKG51bWJlcikgeCBvZiB0aGUgY2VudGVyLFxuICAgICBvICAgICBjeTogKG51bWJlcikgeCBvZiB0aGUgY2VudGVyLFxuICAgICBvICAgICBoOiAobnVtYmVyKSBoZWlnaHQsXG4gICAgIG8gICAgIGhlaWdodDogKG51bWJlcikgaGVpZ2h0LFxuICAgICBvICAgICBwYXRoOiAoc3RyaW5nKSBwYXRoIGNvbW1hbmQgZm9yIHRoZSBib3gsXG4gICAgIG8gICAgIHIwOiAobnVtYmVyKSByYWRpdXMgb2YgYSBjaXJjbGUgdGhhdCBmdWxseSBlbmNsb3NlcyB0aGUgYm94LFxuICAgICBvICAgICByMTogKG51bWJlcikgcmFkaXVzIG9mIHRoZSBzbWFsbGVzdCBjaXJjbGUgdGhhdCBjYW4gYmUgZW5jbG9zZWQsXG4gICAgIG8gICAgIHIyOiAobnVtYmVyKSByYWRpdXMgb2YgdGhlIGxhcmdlc3QgY2lyY2xlIHRoYXQgY2FuIGJlIGVuY2xvc2VkLFxuICAgICBvICAgICB2YjogKHN0cmluZykgYm94IGFzIGEgdmlld2JveCBjb21tYW5kLFxuICAgICBvICAgICB3OiAobnVtYmVyKSB3aWR0aCxcbiAgICAgbyAgICAgd2lkdGg6IChudW1iZXIpIHdpZHRoLFxuICAgICBvICAgICB4MjogKG51bWJlcikgeCBvZiB0aGUgcmlnaHQgc2lkZSxcbiAgICAgbyAgICAgeDogKG51bWJlcikgeCBvZiB0aGUgbGVmdCBzaWRlLFxuICAgICBvICAgICB5MjogKG51bWJlcikgeSBvZiB0aGUgYm90dG9tIGVkZ2UsXG4gICAgIG8gICAgIHk6IChudW1iZXIpIHkgb2YgdGhlIHRvcCBlZGdlXG4gICAgIG8gfVxuICAgIFxcKi9cbiAgICBlbHByb3RvLmdldEJCb3ggPSBmdW5jdGlvbiAoaXNXaXRob3V0VHJhbnNmb3JtKSB7XG4gICAgICAgIGlmICghU25hcC5NYXRyaXggfHwgIVNuYXAucGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRCQm94KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsID0gdGhpcyxcbiAgICAgICAgICAgIG0gPSBuZXcgU25hcC5NYXRyaXg7XG4gICAgICAgIGlmIChlbC5yZW1vdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gU25hcC5fLmJveCgpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChlbC50eXBlID09IFwidXNlXCIpIHtcbiAgICAgICAgICAgIGlmICghaXNXaXRob3V0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgbSA9IG0uYWRkKGVsLnRyYW5zZm9ybSgpLmxvY2FsTWF0cml4LnRyYW5zbGF0ZShlbC5hdHRyKFwieFwiKSB8fCAwLCBlbC5hdHRyKFwieVwiKSB8fCAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWwub3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBlbCA9IGVsLm9yaWdpbmFsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGVsLmF0dHIoXCJ4bGluazpocmVmXCIpO1xuICAgICAgICAgICAgICAgIGVsID0gZWwub3JpZ2luYWwgPSBlbC5ub2RlLm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSArIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgXyA9IGVsLl8sXG4gICAgICAgICAgICBwYXRoZmluZGVyID0gU25hcC5wYXRoLmdldFtlbC50eXBlXSB8fCBTbmFwLnBhdGguZ2V0LmRlZmx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGlzV2l0aG91dFRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIF8uYmJveHd0ID0gcGF0aGZpbmRlciA/IFNuYXAucGF0aC5nZXRCQm94KGVsLnJlYWxQYXRoID0gcGF0aGZpbmRlcihlbCkpIDogU25hcC5fLmJveChlbC5ub2RlLmdldEJCb3goKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNuYXAuXy5ib3goXy5iYm94d3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5yZWFsUGF0aCA9IHBhdGhmaW5kZXIoZWwpO1xuICAgICAgICAgICAgICAgIGVsLm1hdHJpeCA9IGVsLnRyYW5zZm9ybSgpLmxvY2FsTWF0cml4O1xuICAgICAgICAgICAgICAgIF8uYmJveCA9IFNuYXAucGF0aC5nZXRCQm94KFNuYXAucGF0aC5tYXAoZWwucmVhbFBhdGgsIG0uYWRkKGVsLm1hdHJpeCkpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gU25hcC5fLmJveChfLmJib3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBGaXJlZm94IGRvZXNu4oCZdCBnaXZlIHlvdSBiYm94IG9mIGhpZGRlbiBlbGVtZW50XG4gICAgICAgICAgICByZXR1cm4gU25hcC5fLmJveCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcHJvcFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZXh0cmFjdFRyYW5zZm9ybShlbCwgdHN0cikge1xuICAgICAgICBpZiAodHN0ciA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZG9SZXR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT0gXCJsaW5lYXJHcmFkaWVudFwiIHx8IGVsLnR5cGUgPT0gXCJyYWRpYWxHcmFkaWVudFwiKSB7XG4gICAgICAgICAgICAgICAgdHN0ciA9IGVsLm5vZGUuZ2V0QXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsLnR5cGUgPT0gXCJwYXR0ZXJuXCIpIHtcbiAgICAgICAgICAgICAgICB0c3RyID0gZWwubm9kZS5nZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0c3RyID0gZWwubm9kZS5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNuYXAuTWF0cml4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHN0ciA9IFNuYXAuXy5zdmdUcmFuc2Zvcm0yc3RyaW5nKHRzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFTbmFwLl8ucmdUcmFuc2Zvcm0udGVzdCh0c3RyKSkge1xuICAgICAgICAgICAgICAgIHRzdHIgPSBTbmFwLl8uc3ZnVHJhbnNmb3JtMnN0cmluZyh0c3RyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHN0ciA9IFN0cih0c3RyKS5yZXBsYWNlKC9cXC57M318XFx1MjAyNi9nLCBlbC5fLnRyYW5zZm9ybSB8fCBFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpcyh0c3RyLCBcImFycmF5XCIpKSB7XG4gICAgICAgICAgICAgICAgdHN0ciA9IFNuYXAucGF0aCA/IFNuYXAucGF0aC50b1N0cmluZy5jYWxsKHRzdHIpIDogU3RyKHRzdHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWwuXy50cmFuc2Zvcm0gPSB0c3RyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtID0gU25hcC5fLnRyYW5zZm9ybTJtYXRyaXgodHN0ciwgZWwuZ2V0QkJveCgxKSk7XG4gICAgICAgIGlmIChkb1JldHVybikge1xuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5tYXRyaXggPSBtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnRyYW5zZm9ybVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogR2V0cyBvciBzZXRzIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICoqXG4gICAgIC0gdHN0ciAoc3RyaW5nKSB0cmFuc2Zvcm0gc3RyaW5nIGluIFNuYXAgb3IgU1ZHIGZvcm1hdFxuICAgICA9IChFbGVtZW50KSB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICogb3JcbiAgICAgPSAob2JqZWN0KSB0cmFuc2Zvcm1hdGlvbiBkZXNjcmlwdG9yOlxuICAgICBvIHtcbiAgICAgbyAgICAgc3RyaW5nIChzdHJpbmcpIHRyYW5zZm9ybSBzdHJpbmcsXG4gICAgIG8gICAgIGdsb2JhbE1hdHJpeCAoTWF0cml4KSBtYXRyaXggb2YgYWxsIHRyYW5zZm9ybWF0aW9ucyBhcHBsaWVkIHRvIGVsZW1lbnQgb3IgaXRzIHBhcmVudHMsXG4gICAgIG8gICAgIGxvY2FsTWF0cml4IChNYXRyaXgpIG1hdHJpeCBvZiB0cmFuc2Zvcm1hdGlvbnMgYXBwbGllZCBvbmx5IHRvIHRoZSBlbGVtZW50LFxuICAgICBvICAgICBkaWZmTWF0cml4IChNYXRyaXgpIG1hdHJpeCBvZiBkaWZmZXJlbmNlIGJldHdlZW4gZ2xvYmFsIGFuZCBsb2NhbCB0cmFuc2Zvcm1hdGlvbnMsXG4gICAgIG8gICAgIGdsb2JhbCAoc3RyaW5nKSBnbG9iYWwgdHJhbnNmb3JtYXRpb24gYXMgc3RyaW5nLFxuICAgICBvICAgICBsb2NhbCAoc3RyaW5nKSBsb2NhbCB0cmFuc2Zvcm1hdGlvbiBhcyBzdHJpbmcsXG4gICAgIG8gICAgIHRvU3RyaW5nIChmdW5jdGlvbikgcmV0dXJucyBgc3RyaW5nYCBwcm9wZXJ0eVxuICAgICBvIH1cbiAgICBcXCovXG4gICAgZWxwcm90by50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHN0cikge1xuICAgICAgICB2YXIgXyA9IHRoaXMuXztcbiAgICAgICAgaWYgKHRzdHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHBhcGEgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGdsb2JhbCA9IG5ldyBTbmFwLk1hdHJpeCh0aGlzLm5vZGUuZ2V0Q1RNKCkpLFxuICAgICAgICAgICAgICAgIGxvY2FsID0gZXh0cmFjdFRyYW5zZm9ybSh0aGlzKSxcbiAgICAgICAgICAgICAgICBtcyA9IFtsb2NhbF0sXG4gICAgICAgICAgICAgICAgbSA9IG5ldyBTbmFwLk1hdHJpeCxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGxvY2FsU3RyaW5nID0gbG9jYWwudG9UcmFuc2Zvcm1TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBTdHIobG9jYWwpID09IFN0cih0aGlzLm1hdHJpeCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cihfLnRyYW5zZm9ybSkgOiBsb2NhbFN0cmluZztcbiAgICAgICAgICAgIHdoaWxlIChwYXBhLnR5cGUgIT0gXCJzdmdcIiAmJiAocGFwYSA9IHBhcGEucGFyZW50KCkpKSB7XG4gICAgICAgICAgICAgICAgbXMucHVzaChleHRyYWN0VHJhbnNmb3JtKHBhcGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgPSBtcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgbS5hZGQobXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdHJpbmc6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBnbG9iYWxNYXRyaXg6IGdsb2JhbCxcbiAgICAgICAgICAgICAgICB0b3RhbE1hdHJpeDogbSxcbiAgICAgICAgICAgICAgICBsb2NhbE1hdHJpeDogbG9jYWwsXG4gICAgICAgICAgICAgICAgZGlmZk1hdHJpeDogZ2xvYmFsLmNsb25lKCkuYWRkKGxvY2FsLmludmVydCgpKSxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IGdsb2JhbC50b1RyYW5zZm9ybVN0cmluZygpLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBtLnRvVHJhbnNmb3JtU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgbG9jYWw6IGxvY2FsU3RyaW5nLFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBwcm9wU3RyaW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0c3RyIGluc3RhbmNlb2YgU25hcC5NYXRyaXgpIHtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdHN0cjtcbiAgICAgICAgICAgIHRoaXMuXy50cmFuc2Zvcm0gPSB0c3RyLnRvVHJhbnNmb3JtU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHRyYWN0VHJhbnNmb3JtKHRoaXMsIHRzdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImxpbmVhckdyYWRpZW50XCIgfHwgdGhpcy50eXBlID09IFwicmFkaWFsR3JhZGllbnRcIikge1xuICAgICAgICAgICAgICAgICQodGhpcy5ub2RlLCB7Z3JhZGllbnRUcmFuc2Zvcm06IHRoaXMubWF0cml4fSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcInBhdHRlcm5cIikge1xuICAgICAgICAgICAgICAgICQodGhpcy5ub2RlLCB7cGF0dGVyblRyYW5zZm9ybTogdGhpcy5tYXRyaXh9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLm5vZGUsIHt0cmFuc2Zvcm06IHRoaXMubWF0cml4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnBhcmVudFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCdzIHBhcmVudFxuICAgICAqKlxuICAgICA9IChFbGVtZW50KSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5wYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHRoaXMubm9kZS5wYXJlbnROb2RlKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmFwcGVuZFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gZWxlbWVudCB0byBjdXJyZW50IG9uZVxuICAgICAqKlxuICAgICAtIGVsIChFbGVtZW50fFNldCkgZWxlbWVudCB0byBhcHBlbmRcbiAgICAgPSAoRWxlbWVudCkgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmFkZFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogU2VlIEBFbGVtZW50LmFwcGVuZFxuICAgIFxcKi9cbiAgICBlbHByb3RvLmFwcGVuZCA9IGVscHJvdG8uYWRkID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIHZhciBpdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZWwuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaXQuYWRkKGVsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsID0gd3JhcChlbCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZWwubm9kZSk7XG4gICAgICAgICAgICBlbC5wYXBlciA9IHRoaXMucGFwZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5hcHBlbmRUb1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQXBwZW5kcyB0aGUgY3VycmVudCBlbGVtZW50IHRvIHRoZSBnaXZlbiBvbmVcbiAgICAgKipcbiAgICAgLSBlbCAoRWxlbWVudCkgcGFyZW50IGVsZW1lbnQgdG8gYXBwZW5kIHRvXG4gICAgID0gKEVsZW1lbnQpIHRoZSBjaGlsZCBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8uYXBwZW5kVG8gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbCA9IHdyYXAoZWwpO1xuICAgICAgICAgICAgZWwuYXBwZW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQucHJlcGVuZFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUHJlcGVuZHMgdGhlIGdpdmVuIGVsZW1lbnQgdG8gdGhlIGN1cnJlbnQgb25lXG4gICAgICoqXG4gICAgIC0gZWwgKEVsZW1lbnQpIGVsZW1lbnQgdG8gcHJlcGVuZFxuICAgICA9IChFbGVtZW50KSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5wcmVwZW5kID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIHZhciBpdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0O1xuICAgICAgICAgICAgICAgIGVsLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QuYWZ0ZXIoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXQucHJlcGVuZChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBlbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsID0gd3JhcChlbCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKGVsLm5vZGUsIHRoaXMubm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkICYmIHRoaXMuYWRkKCk7XG4gICAgICAgICAgICBlbC5wYXBlciA9IHRoaXMucGFwZXI7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCgpICYmIHRoaXMucGFyZW50KCkuYWRkKCk7XG4gICAgICAgICAgICBwYXJlbnQgJiYgcGFyZW50LmFkZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQucHJlcGVuZFRvXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBQcmVwZW5kcyB0aGUgY3VycmVudCBlbGVtZW50IHRvIHRoZSBnaXZlbiBvbmVcbiAgICAgKipcbiAgICAgLSBlbCAoRWxlbWVudCkgcGFyZW50IGVsZW1lbnQgdG8gcHJlcGVuZCB0b1xuICAgICA9IChFbGVtZW50KSB0aGUgY2hpbGQgZWxlbWVudFxuICAgIFxcKi9cbiAgICBlbHByb3RvLnByZXBlbmRUbyA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbCA9IHdyYXAoZWwpO1xuICAgICAgICBlbC5wcmVwZW5kKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmJlZm9yZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogSW5zZXJ0cyBnaXZlbiBlbGVtZW50IGJlZm9yZSB0aGUgY3VycmVudCBvbmVcbiAgICAgKipcbiAgICAgLSBlbCAoRWxlbWVudCkgZWxlbWVudCB0byBpbnNlcnRcbiAgICAgPSAoRWxlbWVudCkgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8uYmVmb3JlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC50eXBlID09IFwic2V0XCIpIHtcbiAgICAgICAgICAgIHZhciBpdCA9IHRoaXM7XG4gICAgICAgICAgICBlbC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgICBpdC5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLm5vZGUsIGl0Lm5vZGUpO1xuICAgICAgICAgICAgICAgIHBhcmVudCAmJiBwYXJlbnQuYWRkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50KCkuYWRkKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbCA9IHdyYXAoZWwpO1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbC5ub2RlLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLnBhcmVudCgpICYmIHRoaXMucGFyZW50KCkuYWRkKCk7XG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuYWRkKCk7XG4gICAgICAgIGVsLnBhcGVyID0gdGhpcy5wYXBlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5hZnRlclxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogSW5zZXJ0cyBnaXZlbiBlbGVtZW50IGFmdGVyIHRoZSBjdXJyZW50IG9uZVxuICAgICAqKlxuICAgICAtIGVsIChFbGVtZW50KSBlbGVtZW50IHRvIGluc2VydFxuICAgICA9IChFbGVtZW50KSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5hZnRlciA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbCA9IHdyYXAoZWwpO1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgIGlmICh0aGlzLm5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbC5ub2RlLCB0aGlzLm5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWwubm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXJlbnQoKSAmJiB0aGlzLnBhcmVudCgpLmFkZCgpO1xuICAgICAgICBwYXJlbnQgJiYgcGFyZW50LmFkZCgpO1xuICAgICAgICBlbC5wYXBlciA9IHRoaXMucGFwZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuaW5zZXJ0QmVmb3JlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBJbnNlcnRzIHRoZSBlbGVtZW50IGFmdGVyIHRoZSBnaXZlbiBvbmVcbiAgICAgKipcbiAgICAgLSBlbCAoRWxlbWVudCkgZWxlbWVudCBuZXh0IHRvIHdob20gaW5zZXJ0IHRvXG4gICAgID0gKEVsZW1lbnQpIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgIFxcKi9cbiAgICBlbHByb3RvLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbCA9IHdyYXAoZWwpO1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcbiAgICAgICAgZWwubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGUsIGVsLm5vZGUpO1xuICAgICAgICB0aGlzLnBhcGVyID0gZWwucGFwZXI7XG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuYWRkKCk7XG4gICAgICAgIGVsLnBhcmVudCgpICYmIGVsLnBhcmVudCgpLmFkZCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50Lmluc2VydEFmdGVyXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBJbnNlcnRzIHRoZSBlbGVtZW50IGFmdGVyIHRoZSBnaXZlbiBvbmVcbiAgICAgKipcbiAgICAgLSBlbCAoRWxlbWVudCkgZWxlbWVudCBuZXh0IHRvIHdob20gaW5zZXJ0IHRvXG4gICAgID0gKEVsZW1lbnQpIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgIFxcKi9cbiAgICBlbHByb3RvLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsID0gd3JhcChlbCk7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xuICAgICAgICBlbC5ub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMubm9kZSwgZWwubm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIHRoaXMucGFwZXIgPSBlbC5wYXBlcjtcbiAgICAgICAgcGFyZW50ICYmIHBhcmVudC5hZGQoKTtcbiAgICAgICAgZWwucGFyZW50KCkgJiYgZWwucGFyZW50KCkuYWRkKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQucmVtb3ZlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgID0gKEVsZW1lbnQpIHRoZSBkZXRhY2hlZCBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUgJiYgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGFwZXI7XG4gICAgICAgIHRoaXMucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuYWRkKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuc2VsZWN0XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBHYXRoZXJzIHRoZSBuZXN0ZWQgQEVsZW1lbnQgbWF0Y2hpbmcgdGhlIGdpdmVuIHNldCBvZiBDU1Mgc2VsZWN0b3JzXG4gICAgICoqXG4gICAgIC0gcXVlcnkgKHN0cmluZykgQ1NTIHNlbGVjdG9yXG4gICAgID0gKEVsZW1lbnQpIHJlc3VsdCBvZiBxdWVyeSBzZWxlY3Rpb25cbiAgICBcXCovXG4gICAgZWxwcm90by5zZWxlY3QgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkgPSBTdHIocXVlcnkpLnJlcGxhY2UoLyhbXlxcXFxdKTovZywgXCIkMVxcXFw6XCIpO1xuICAgICAgICByZXR1cm4gd3JhcCh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihxdWVyeSkpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuc2VsZWN0QWxsXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBHYXRoZXJzIG5lc3RlZCBARWxlbWVudCBvYmplY3RzIG1hdGNoaW5nIHRoZSBnaXZlbiBzZXQgb2YgQ1NTIHNlbGVjdG9yc1xuICAgICAqKlxuICAgICAtIHF1ZXJ5IChzdHJpbmcpIENTUyBzZWxlY3RvclxuICAgICA9IChTZXR8YXJyYXkpIHJlc3VsdCBvZiBxdWVyeSBzZWxlY3Rpb25cbiAgICBcXCovXG4gICAgZWxwcm90by5zZWxlY3RBbGwgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIG5vZGVsaXN0ID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpLFxuICAgICAgICAgICAgc2V0ID0gKFNuYXAuc2V0IHx8IEFycmF5KSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXQucHVzaCh3cmFwKG5vZGVsaXN0W2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmFzUFhcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgZ2l2ZW4gYXR0cmlidXRlIG9mIHRoZSBlbGVtZW50IGFzIGEgYHB4YCB2YWx1ZSAobm90ICUsIGVtLCBldGMuKVxuICAgICAqKlxuICAgICAtIGF0dHIgKHN0cmluZykgYXR0cmlidXRlIG5hbWVcbiAgICAgLSB2YWx1ZSAoc3RyaW5nKSAjb3B0aW9uYWwgYXR0cmlidXRlIHZhbHVlXG4gICAgID0gKEVsZW1lbnQpIHJlc3VsdCBvZiBxdWVyeSBzZWxlY3Rpb25cbiAgICBcXCovXG4gICAgZWxwcm90by5hc1BYID0gZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuYXR0cihhdHRyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gK3VuaXQycHgodGhpcywgYXR0ciwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8gU0lFUlJBIEVsZW1lbnQudXNlKCk6IEkgc3VnZ2VzdCBhZGRpbmcgYSBub3RlIGFib3V0IGhvdyB0byBhY2Nlc3MgdGhlIG9yaWdpbmFsIGVsZW1lbnQgdGhlIHJldHVybmVkIDx1c2U+IGluc3RhbnRpYXRlcy4gSXQncyBhIHBhcnQgb2YgU1ZHIHdpdGggd2hpY2ggb3JkaW5hcnkgd2ViIGRldmVsb3BlcnMgbWF5IGJlIGxlYXN0IGZhbWlsaWFyLlxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVzZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQ3JlYXRlcyBhIGA8dXNlPmAgZWxlbWVudCBsaW5rZWQgdG8gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAqKlxuICAgICA9IChFbGVtZW50KSB0aGUgYDx1c2U+YCBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8udXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXNlLFxuICAgICAgICAgICAgaWQgPSB0aGlzLm5vZGUuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIGlkID0gdGhpcy5pZDtcbiAgICAgICAgICAgICQodGhpcy5ub2RlLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwibGluZWFyR3JhZGllbnRcIiB8fCB0aGlzLnR5cGUgPT0gXCJyYWRpYWxHcmFkaWVudFwiIHx8XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT0gXCJwYXR0ZXJuXCIpIHtcbiAgICAgICAgICAgIHVzZSA9IG1ha2UodGhpcy50eXBlLCB0aGlzLm5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1c2UgPSBtYWtlKFwidXNlXCIsIHRoaXMubm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAkKHVzZS5ub2RlLCB7XG4gICAgICAgICAgICBcInhsaW5rOmhyZWZcIjogXCIjXCIgKyBpZFxuICAgICAgICB9KTtcbiAgICAgICAgdXNlLm9yaWdpbmFsID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHVzZTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGZpeGlkcyhlbCkge1xuICAgICAgICB2YXIgZWxzID0gZWwuc2VsZWN0QWxsKFwiKlwiKSxcbiAgICAgICAgICAgIGl0LFxuICAgICAgICAgICAgdXJsID0gL15cXHMqdXJsXFwoKFwifCd8KSguKilcXDFcXClcXHMqJC8sXG4gICAgICAgICAgICBpZHMgPSBbXSxcbiAgICAgICAgICAgIHVzZXMgPSB7fTtcbiAgICAgICAgZnVuY3Rpb24gdXJsdGVzdChpdCwgbmFtZSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9ICQoaXQubm9kZSwgbmFtZSk7XG4gICAgICAgICAgICB2YWwgPSB2YWwgJiYgdmFsLm1hdGNoKHVybCk7XG4gICAgICAgICAgICB2YWwgPSB2YWwgJiYgdmFsWzJdO1xuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuY2hhckF0KCkgPT0gXCIjXCIpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdXNlc1t2YWxdID0gKHVzZXNbdmFsXSB8fCBbXSkuY29uY2F0KGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBhdHRyW25hbWVdID0gVVJMKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgJChpdC5ub2RlLCBhdHRyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBsaW5rdGVzdChpdCkge1xuICAgICAgICAgICAgdmFyIHZhbCA9ICQoaXQubm9kZSwgXCJ4bGluazpocmVmXCIpO1xuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuY2hhckF0KCkgPT0gXCIjXCIpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdXNlc1t2YWxdID0gKHVzZXNbdmFsXSB8fCBbXSkuY29uY2F0KGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgICAgICBpdC5hdHRyKFwieGxpbms6aHJlZlwiLCBcIiNcIiArIGlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBlbHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgaXQgPSBlbHNbaV07XG4gICAgICAgICAgICB1cmx0ZXN0KGl0LCBcImZpbGxcIik7XG4gICAgICAgICAgICB1cmx0ZXN0KGl0LCBcInN0cm9rZVwiKTtcbiAgICAgICAgICAgIHVybHRlc3QoaXQsIFwiZmlsdGVyXCIpO1xuICAgICAgICAgICAgdXJsdGVzdChpdCwgXCJtYXNrXCIpO1xuICAgICAgICAgICAgdXJsdGVzdChpdCwgXCJjbGlwLXBhdGhcIik7XG4gICAgICAgICAgICBsaW5rdGVzdChpdCk7XG4gICAgICAgICAgICB2YXIgb2xkaWQgPSAkKGl0Lm5vZGUsIFwiaWRcIik7XG4gICAgICAgICAgICBpZiAob2xkaWQpIHtcbiAgICAgICAgICAgICAgICAkKGl0Lm5vZGUsIHtpZDogaXQuaWR9KTtcbiAgICAgICAgICAgICAgICBpZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG9sZDogb2xkaWQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDAsIGlpID0gaWRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmcyA9IHVzZXNbaWRzW2ldLm9sZF07XG4gICAgICAgICAgICBpZiAoZnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamogPSBmcy5sZW5ndGg7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZzW2pdKGlkc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmNsb25lXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGVsZW1lbnQgYW5kIGluc2VydHMgaXQgYWZ0ZXIgdGhlIGVsZW1lbnRcbiAgICAgKipcbiAgICAgPSAoRWxlbWVudCkgdGhlIGNsb25lXG4gICAgXFwqL1xuICAgIGVscHJvdG8uY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZSA9IHdyYXAodGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGlmICgkKGNsb25lLm5vZGUsIFwiaWRcIikpIHtcbiAgICAgICAgICAgICQoY2xvbmUubm9kZSwge2lkOiBjbG9uZS5pZH0pO1xuICAgICAgICB9XG4gICAgICAgIGZpeGlkcyhjbG9uZSk7XG4gICAgICAgIGNsb25lLmluc2VydEFmdGVyKHRoaXMpO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC50b0RlZnNcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIE1vdmVzIGVsZW1lbnQgdG8gdGhlIHNoYXJlZCBgPGRlZnM+YCBhcmVhXG4gICAgICoqXG4gICAgID0gKEVsZW1lbnQpIHRoZSBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8udG9EZWZzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVmcyA9IGdldFNvbWVEZWZzKHRoaXMpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudG9QYXR0ZXJuXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgYDxwYXR0ZXJuPmAgZWxlbWVudCBmcm9tIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgKipcbiAgICAgKiBUbyBjcmVhdGUgYSBwYXR0ZXJuIHlvdSBoYXZlIHRvIHNwZWNpZnkgdGhlIHBhdHRlcm4gcmVjdDpcbiAgICAgLSB4IChzdHJpbmd8bnVtYmVyKVxuICAgICAtIHkgKHN0cmluZ3xudW1iZXIpXG4gICAgIC0gd2lkdGggKHN0cmluZ3xudW1iZXIpXG4gICAgIC0gaGVpZ2h0IChzdHJpbmd8bnVtYmVyKVxuICAgICA9IChFbGVtZW50KSB0aGUgYDxwYXR0ZXJuPmAgZWxlbWVudFxuICAgICAqIFlvdSBjYW4gdXNlIHBhdHRlcm4gbGF0ZXIgb24gYXMgYW4gYXJndW1lbnQgZm9yIGBmaWxsYCBhdHRyaWJ1dGU6XG4gICAgIHwgdmFyIHAgPSBwYXBlci5wYXRoKFwiTTEwLTUtMTAsMTVNMTUsMCwwLDE1TTAtNS0yMCwxNVwiKS5hdHRyKHtcbiAgICAgfCAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICB8ICAgICAgICAgc3Ryb2tlOiBcIiNiYWRhNTVcIixcbiAgICAgfCAgICAgICAgIHN0cm9rZVdpZHRoOiA1XG4gICAgIHwgICAgIH0pLnBhdHRlcm4oMCwgMCwgMTAsIDEwKSxcbiAgICAgfCAgICAgYyA9IHBhcGVyLmNpcmNsZSgyMDAsIDIwMCwgMTAwKTtcbiAgICAgfCBjLmF0dHIoe1xuICAgICB8ICAgICBmaWxsOiBwXG4gICAgIHwgfSk7XG4gICAgXFwqL1xuICAgIGVscHJvdG8ucGF0dGVybiA9IGVscHJvdG8udG9QYXR0ZXJuID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIHAgPSBtYWtlKFwicGF0dGVyblwiLCBnZXRTb21lRGVmcyh0aGlzKSk7XG4gICAgICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXMoeCwgXCJvYmplY3RcIikgJiYgXCJ4XCIgaW4geCkge1xuICAgICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICAgIHdpZHRoID0geC53aWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHguaGVpZ2h0O1xuICAgICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgICAkKHAubm9kZSwge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHBhdHRlcm5Vbml0czogXCJ1c2VyU3BhY2VPblVzZVwiLFxuICAgICAgICAgICAgaWQ6IHAuaWQsXG4gICAgICAgICAgICB2aWV3Qm94OiBbeCwgeSwgd2lkdGgsIGhlaWdodF0uam9pbihcIiBcIilcbiAgICAgICAgfSk7XG4gICAgICAgIHAubm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9O1xuLy8gU0lFUlJBIEVsZW1lbnQubWFya2VyKCk6IGNsYXJpZnkgd2hhdCBhIHJlZmVyZW5jZSBwb2ludCBpcy4gRS5nLiwgaGVscHMgeW91IG9mZnNldCB0aGUgb2JqZWN0IGZyb20gaXRzIGVkZ2Ugc3VjaCBhcyB3aGVuIGNlbnRlcmluZyBpdCBvdmVyIGEgcGF0aC5cbi8vIFNJRVJSQSBFbGVtZW50Lm1hcmtlcigpOiBJIHN1Z2dlc3QgdGhlIG1ldGhvZCBzaG91bGQgYWNjZXB0IGRlZmF1bHQgcmVmZXJlbmNlIHBvaW50IHZhbHVlcy4gIFBlcmhhcHMgY2VudGVyZWQgd2l0aCAocmVmWCA9IHdpZHRoLzIpIGFuZCAocmVmWSA9IGhlaWdodC8yKT8gQWxzbywgY291bGRuJ3QgaXQgYXNzdW1lIHRoZSBlbGVtZW50J3MgY3VycmVudCBfd2lkdGhfIGFuZCBfaGVpZ2h0Xz8gQW5kIHBsZWFzZSBzcGVjaWZ5IHdoYXQgX3hfIGFuZCBfeV8gbWVhbjogb2Zmc2V0cz8gSWYgc28sIGZyb20gd2hlcmU/ICBDb3VsZG4ndCB0aGV5IGFsc28gYmUgYXNzaWduZWQgZGVmYXVsdCB2YWx1ZXM/XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQubWFya2VyXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgYDxtYXJrZXI+YCBlbGVtZW50IGZyb20gdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAqKlxuICAgICAqIFRvIGNyZWF0ZSBhIG1hcmtlciB5b3UgaGF2ZSB0byBzcGVjaWZ5IHRoZSBib3VuZGluZyByZWN0IGFuZCByZWZlcmVuY2UgcG9pbnQ6XG4gICAgIC0geCAobnVtYmVyKVxuICAgICAtIHkgKG51bWJlcilcbiAgICAgLSB3aWR0aCAobnVtYmVyKVxuICAgICAtIGhlaWdodCAobnVtYmVyKVxuICAgICAtIHJlZlggKG51bWJlcilcbiAgICAgLSByZWZZIChudW1iZXIpXG4gICAgID0gKEVsZW1lbnQpIHRoZSBgPG1hcmtlcj5gIGVsZW1lbnRcbiAgICAgKiBZb3UgY2FuIHNwZWNpZnkgdGhlIG1hcmtlciBsYXRlciBhcyBhbiBhcmd1bWVudCBmb3IgYG1hcmtlci1zdGFydGAsIGBtYXJrZXItZW5kYCwgYG1hcmtlci1taWRgLCBhbmQgYG1hcmtlcmAgYXR0cmlidXRlcy4gVGhlIGBtYXJrZXJgIGF0dHJpYnV0ZSBwbGFjZXMgdGhlIG1hcmtlciBhdCBldmVyeSBwb2ludCBhbG9uZyB0aGUgcGF0aCwgYW5kIGBtYXJrZXItbWlkYCBwbGFjZXMgdGhlbSBhdCBldmVyeSBwb2ludCBleGNlcHQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gICAgXFwqL1xuICAgIC8vIFRPRE8gYWRkIHVzYWdlIGZvciBtYXJrZXJzXG4gICAgZWxwcm90by5tYXJrZXIgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgcmVmWCwgcmVmWSkge1xuICAgICAgICB2YXIgcCA9IG1ha2UoXCJtYXJrZXJcIiwgZ2V0U29tZURlZnModGhpcykpO1xuICAgICAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICAgICAgICB4ID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzKHgsIFwib2JqZWN0XCIpICYmIFwieFwiIGluIHgpIHtcbiAgICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgICB3aWR0aCA9IHgud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB4LmhlaWdodDtcbiAgICAgICAgICAgIHJlZlggPSB4LnJlZlggfHwgeC5jeDtcbiAgICAgICAgICAgIHJlZlkgPSB4LnJlZlkgfHwgeC5jeTtcbiAgICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgICAgJChwLm5vZGUsIHtcbiAgICAgICAgICAgIHZpZXdCb3g6IFt4LCB5LCB3aWR0aCwgaGVpZ2h0XS5qb2luKFwiIFwiKSxcbiAgICAgICAgICAgIG1hcmtlcldpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIG1hcmtlckhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgb3JpZW50OiBcImF1dG9cIixcbiAgICAgICAgICAgIHJlZlg6IHJlZlggfHwgMCxcbiAgICAgICAgICAgIHJlZlk6IHJlZlkgfHwgMCxcbiAgICAgICAgICAgIGlkOiBwLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBwLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICAvLyBhbmltYXRpb25cbiAgICBmdW5jdGlvbiBzbGljZShmcm9tLCB0bywgZikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgdmFyIHJlcyA9IGFyci5zbGljZShmcm9tLCB0byk7XG4gICAgICAgICAgICBpZiAocmVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gcmVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGYgPyBmKHJlcykgOiByZXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBBbmltYXRpb24gPSBmdW5jdGlvbiAoYXR0ciwgbXMsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlYXNpbmcgPT0gXCJmdW5jdGlvblwiICYmICFlYXNpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICAgICAgICAgIGVhc2luZyA9IG1pbmEubGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0ciA9IGF0dHI7XG4gICAgICAgIHRoaXMuZHVyID0gbXM7XG4gICAgICAgIGVhc2luZyAmJiAodGhpcy5lYXNpbmcgPSBlYXNpbmcpO1xuICAgICAgICBjYWxsYmFjayAmJiAodGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIFNuYXAuXy5BbmltYXRpb24gPSBBbmltYXRpb247XG4gICAgLypcXFxuICAgICAqIFNuYXAuYW5pbWF0aW9uXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGFuIGFuaW1hdGlvbiBvYmplY3RcbiAgICAgKipcbiAgICAgLSBhdHRyIChvYmplY3QpIGF0dHJpYnV0ZXMgb2YgZmluYWwgZGVzdGluYXRpb25cbiAgICAgLSBkdXJhdGlvbiAobnVtYmVyKSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uLCBpbiBtaWxsaXNlY29uZHNcbiAgICAgLSBlYXNpbmcgKGZ1bmN0aW9uKSAjb3B0aW9uYWwgb25lIG9mIGVhc2luZyBmdW5jdGlvbnMgb2YgQG1pbmEgb3IgY3VzdG9tIG9uZVxuICAgICAtIGNhbGxiYWNrIChmdW5jdGlvbikgI29wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZmlyZXMgd2hlbiBhbmltYXRpb24gZW5kc1xuICAgICA9IChvYmplY3QpIGFuaW1hdGlvbiBvYmplY3RcbiAgICBcXCovXG4gICAgU25hcC5hbmltYXRpb24gPSBmdW5jdGlvbiAoYXR0ciwgbXMsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oYXR0ciwgbXMsIGVhc2luZywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuaW5BbmltXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGEgc2V0IG9mIGFuaW1hdGlvbnMgdGhhdCBtYXkgYmUgYWJsZSB0byBtYW5pcHVsYXRlIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgKipcbiAgICAgPSAob2JqZWN0KSBpbiBmb3JtYXQ6XG4gICAgIG8ge1xuICAgICBvICAgICBhbmltIChvYmplY3QpIGFuaW1hdGlvbiBvYmplY3QsXG4gICAgIG8gICAgIG1pbmEgKG9iamVjdCkgQG1pbmEgb2JqZWN0LFxuICAgICBvICAgICBjdXJTdGF0dXMgKG51bWJlcikgMC4uMSDigJQgc3RhdHVzIG9mIHRoZSBhbmltYXRpb246IDAg4oCUIGp1c3Qgc3RhcnRlZCwgMSDigJQganVzdCBmaW5pc2hlZCxcbiAgICAgbyAgICAgc3RhdHVzIChmdW5jdGlvbikgZ2V0cyBvciBzZXRzIHRoZSBzdGF0dXMgb2YgdGhlIGFuaW1hdGlvbixcbiAgICAgbyAgICAgc3RvcCAoZnVuY3Rpb24pIHN0b3BzIHRoZSBhbmltYXRpb25cbiAgICAgbyB9XG4gICAgXFwqL1xuICAgIGVscHJvdG8uaW5BbmltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLFxuICAgICAgICAgICAgcmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGlkIGluIGVsLmFuaW1zKSBpZiAoZWwuYW5pbXNbaGFzXShpZCkpIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbTogbmV3IEFuaW1hdGlvbihhLl9hdHRycywgYS5kdXIsIGEuZWFzaW5nLCBhLl9jYWxsYmFjayksXG4gICAgICAgICAgICAgICAgICAgIG1pbmE6IGEsXG4gICAgICAgICAgICAgICAgICAgIGN1clN0YXR1czogYS5zdGF0dXMoKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zdGF0dXModmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0oZWwuYW5pbXNbaWRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLmFuaW1hdGVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJ1bnMgZ2VuZXJpYyBhbmltYXRpb24gb2Ygb25lIG51bWJlciBpbnRvIGFub3RoZXIgd2l0aCBhIGNhcmluZyBmdW5jdGlvblxuICAgICAqKlxuICAgICAtIGZyb20gKG51bWJlcnxhcnJheSkgbnVtYmVyIG9yIGFycmF5IG9mIG51bWJlcnNcbiAgICAgLSB0byAobnVtYmVyfGFycmF5KSBudW1iZXIgb3IgYXJyYXkgb2YgbnVtYmVyc1xuICAgICAtIHNldHRlciAoZnVuY3Rpb24pIGNhcmluZyBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIG51bWJlciBhcmd1bWVudFxuICAgICAtIGR1cmF0aW9uIChudW1iZXIpIGR1cmF0aW9uLCBpbiBtaWxsaXNlY29uZHNcbiAgICAgLSBlYXNpbmcgKGZ1bmN0aW9uKSAjb3B0aW9uYWwgZWFzaW5nIGZ1bmN0aW9uIGZyb20gQG1pbmEgb3IgY3VzdG9tXG4gICAgIC0gY2FsbGJhY2sgKGZ1bmN0aW9uKSAjb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgID0gKG9iamVjdCkgYW5pbWF0aW9uIG9iamVjdCBpbiBAbWluYSBmb3JtYXRcbiAgICAgbyB7XG4gICAgIG8gICAgIGlkIChzdHJpbmcpIGFuaW1hdGlvbiBpZCwgY29uc2lkZXIgaXQgcmVhZC1vbmx5LFxuICAgICBvICAgICBkdXJhdGlvbiAoZnVuY3Rpb24pIGdldHMgb3Igc2V0cyB0aGUgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbixcbiAgICAgbyAgICAgZWFzaW5nIChmdW5jdGlvbikgZWFzaW5nLFxuICAgICBvICAgICBzcGVlZCAoZnVuY3Rpb24pIGdldHMgb3Igc2V0cyB0aGUgc3BlZWQgb2YgdGhlIGFuaW1hdGlvbixcbiAgICAgbyAgICAgc3RhdHVzIChmdW5jdGlvbikgZ2V0cyBvciBzZXRzIHRoZSBzdGF0dXMgb2YgdGhlIGFuaW1hdGlvbixcbiAgICAgbyAgICAgc3RvcCAoZnVuY3Rpb24pIHN0b3BzIHRoZSBhbmltYXRpb25cbiAgICAgbyB9XG4gICAgIHwgdmFyIHJlY3QgPSBTbmFwKCkucmVjdCgwLCAwLCAxMCwgMTApO1xuICAgICB8IFNuYXAuYW5pbWF0ZSgwLCAxMCwgZnVuY3Rpb24gKHZhbCkge1xuICAgICB8ICAgICByZWN0LmF0dHIoe1xuICAgICB8ICAgICAgICAgeDogdmFsXG4gICAgIHwgICAgIH0pO1xuICAgICB8IH0sIDEwMDApO1xuICAgICB8IC8vIGluIGdpdmVuIGNvbnRleHQgaXMgZXF1aXZhbGVudCB0b1xuICAgICB8IHJlY3QuYW5pbWF0ZSh7eDogMTB9LCAxMDAwKTtcbiAgICBcXCovXG4gICAgU25hcC5hbmltYXRlID0gZnVuY3Rpb24gKGZyb20sIHRvLCBzZXR0ZXIsIG1zLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09IFwiZnVuY3Rpb25cIiAmJiAhZWFzaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBlYXNpbmc7XG4gICAgICAgICAgICBlYXNpbmcgPSBtaW5hLmxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm93ID0gbWluYS50aW1lKCksXG4gICAgICAgICAgICBhbmltID0gbWluYShmcm9tLCB0bywgbm93LCBub3cgKyBtcywgbWluYS50aW1lLCBzZXR0ZXIsIGVhc2luZyk7XG4gICAgICAgIGNhbGxiYWNrICYmIGV2ZS5vbmNlKFwibWluYS5maW5pc2guXCIgKyBhbmltLmlkLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBhbmltO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuc3RvcFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogU3RvcHMgYWxsIHRoZSBhbmltYXRpb25zIGZvciB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICoqXG4gICAgID0gKEVsZW1lbnQpIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5pbXMgPSB0aGlzLmluQW5pbSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBhbmltcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBhbmltc1tpXS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5hbmltYXRlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBBbmltYXRlcyB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvZiB0aGUgZWxlbWVudFxuICAgICAqKlxuICAgICAtIGF0dHJzIChvYmplY3QpIGtleS12YWx1ZSBwYWlycyBvZiBkZXN0aW5hdGlvbiBhdHRyaWJ1dGVzXG4gICAgIC0gZHVyYXRpb24gKG51bWJlcikgZHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICAgLSBlYXNpbmcgKGZ1bmN0aW9uKSAjb3B0aW9uYWwgZWFzaW5nIGZ1bmN0aW9uIGZyb20gQG1pbmEgb3IgY3VzdG9tXG4gICAgIC0gY2FsbGJhY2sgKGZ1bmN0aW9uKSAjb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIHRoZSBhbmltYXRpb24gZW5kc1xuICAgICA9IChFbGVtZW50KSB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8uYW5pbWF0ZSA9IGZ1bmN0aW9uIChhdHRycywgbXMsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlYXNpbmcgPT0gXCJmdW5jdGlvblwiICYmICFlYXNpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICAgICAgICAgIGVhc2luZyA9IG1pbmEubGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRycyBpbnN0YW5jZW9mIEFuaW1hdGlvbikge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBhdHRycy5jYWxsYmFjaztcbiAgICAgICAgICAgIGVhc2luZyA9IGF0dHJzLmVhc2luZztcbiAgICAgICAgICAgIG1zID0gZWFzaW5nLmR1cjtcbiAgICAgICAgICAgIGF0dHJzID0gYXR0cnMuYXR0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmtleXMgPSBbXSwgdGtleXMgPSBbXSwga2V5cyA9IHt9LCBmcm9tLCB0bywgZiwgZXEsXG4gICAgICAgICAgICBlbCA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykgaWYgKGF0dHJzW2hhc10oa2V5KSkge1xuICAgICAgICAgICAgaWYgKGVsLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgZXEgPSBlbC5lcXVhbChrZXksIFN0cihhdHRyc1trZXldKSk7XG4gICAgICAgICAgICAgICAgZnJvbSA9IGVxLmZyb207XG4gICAgICAgICAgICAgICAgdG8gPSBlcS50bztcbiAgICAgICAgICAgICAgICBmID0gZXEuZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJvbSA9ICtlbC5hdHRyKGtleSk7XG4gICAgICAgICAgICAgICAgdG8gPSArYXR0cnNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsZW4gPSBpcyhmcm9tLCBcImFycmF5XCIpID8gZnJvbS5sZW5ndGggOiAxO1xuICAgICAgICAgICAga2V5c1trZXldID0gc2xpY2UoZmtleXMubGVuZ3RoLCBma2V5cy5sZW5ndGggKyBsZW4sIGYpO1xuICAgICAgICAgICAgZmtleXMgPSBma2V5cy5jb25jYXQoZnJvbSk7XG4gICAgICAgICAgICB0a2V5cyA9IHRrZXlzLmNvbmNhdCh0byk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vdyA9IG1pbmEudGltZSgpLFxuICAgICAgICAgICAgYW5pbSA9IG1pbmEoZmtleXMsIHRrZXlzLCBub3csIG5vdyArIG1zLCBtaW5hLnRpbWUsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBrZXlzKSBpZiAoa2V5c1toYXNdKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cltrZXldID0ga2V5c1trZXldKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLmF0dHIoYXR0cik7XG4gICAgICAgICAgICB9LCBlYXNpbmcpO1xuICAgICAgICBlbC5hbmltc1thbmltLmlkXSA9IGFuaW07XG4gICAgICAgIGFuaW0uX2F0dHJzID0gYXR0cnM7XG4gICAgICAgIGFuaW0uX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIGV2ZShcInNuYXAuYW5pbWNyZWF0ZWQuXCIgKyBlbC5pZCwgYW5pbSk7XG4gICAgICAgIGV2ZS5vbmNlKFwibWluYS5maW5pc2guXCIgKyBhbmltLmlkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgZWwuYW5pbXNbYW5pbS5pZF07XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZS5vbmNlKFwibWluYS5zdG9wLlwiICsgYW5pbS5pZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIGVsLmFuaW1zW2FuaW0uaWRdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG4gICAgdmFyIGVsZGF0YSA9IHt9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmRhdGFcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgb3IgcmV0cmlldmVzIGdpdmVuIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBnaXZlbiBrZXkuIChEb27igJl0IGNvbmZ1c2VcbiAgICAgKiB3aXRoIGBkYXRhLWAgYXR0cmlidXRlcylcbiAgICAgKlxuICAgICAqIFNlZSBhbHNvIEBFbGVtZW50LnJlbW92ZURhdGFcbiAgICAgLSBrZXkgKHN0cmluZykga2V5IHRvIHN0b3JlIGRhdGFcbiAgICAgLSB2YWx1ZSAoYW55KSAjb3B0aW9uYWwgdmFsdWUgdG8gc3RvcmVcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgICAqIG9yLCBpZiB2YWx1ZSBpcyBub3Qgc3BlY2lmaWVkOlxuICAgICA9IChhbnkpIHZhbHVlXG4gICAgID4gVXNhZ2VcbiAgICAgfCBmb3IgKHZhciBpID0gMCwgaSA8IDUsIGkrKykge1xuICAgICB8ICAgICBwYXBlci5jaXJjbGUoMTAgKyAxNSAqIGksIDEwLCAxMClcbiAgICAgfCAgICAgICAgICAuYXR0cih7ZmlsbDogXCIjMDAwXCJ9KVxuICAgICB8ICAgICAgICAgIC5kYXRhKFwiaVwiLCBpKVxuICAgICB8ICAgICAgICAgIC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgIHwgICAgICAgICAgICAgYWxlcnQodGhpcy5kYXRhKFwiaVwiKSk7XG4gICAgIHwgICAgICAgICAgfSk7XG4gICAgIHwgfVxuICAgIFxcKi9cbiAgICBlbHByb3RvLmRhdGEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZGF0YSA9IGVsZGF0YVt0aGlzLmlkXSA9IGVsZGF0YVt0aGlzLmlkXSB8fCB7fTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICBldmUoXCJzbmFwLmRhdGEuZ2V0LlwiICsgdGhpcy5pZCwgdGhpcywgZGF0YSwgbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoU25hcC5pcyhrZXksIFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBrZXkpIGlmIChrZXlbaGFzXShpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEoaSwga2V5W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmUoXCJzbmFwLmRhdGEuZ2V0LlwiICsgdGhpcy5pZCwgdGhpcywgZGF0YVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgZXZlKFwic25hcC5kYXRhLnNldC5cIiArIHRoaXMuaWQsIHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnJlbW92ZURhdGFcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGFuIGVsZW1lbnQgYnkgZ2l2ZW4ga2V5LlxuICAgICAqIElmIGtleSBpcyBub3QgcHJvdmlkZWQsIHJlbW92ZXMgYWxsIHRoZSBkYXRhIG9mIHRoZSBlbGVtZW50LlxuICAgICAtIGtleSAoc3RyaW5nKSAjb3B0aW9uYWwga2V5XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5yZW1vdmVEYXRhID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGVsZGF0YVt0aGlzLmlkXSA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxkYXRhW3RoaXMuaWRdICYmIGRlbGV0ZSBlbGRhdGFbdGhpcy5pZF1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50Lm91dGVyU1ZHXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIFNWRyBjb2RlIGZvciB0aGUgZWxlbWVudCwgZXF1aXZhbGVudCB0byBIVE1MJ3MgYG91dGVySFRNTGAuXG4gICAgICpcbiAgICAgKiBTZWUgYWxzbyBARWxlbWVudC5pbm5lclNWR1xuICAgICA9IChzdHJpbmcpIFNWRyBjb2RlIGZvciB0aGUgZWxlbWVudFxuICAgIFxcKi9cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC50b1N0cmluZ1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogU2VlIEBFbGVtZW50Lm91dGVyU1ZHXG4gICAgXFwqL1xuICAgIGVscHJvdG8ub3V0ZXJTVkcgPSBlbHByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmcoMSk7XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuaW5uZXJTVkdcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgU1ZHIGNvZGUgZm9yIHRoZSBlbGVtZW50J3MgY29udGVudHMsIGVxdWl2YWxlbnQgdG8gSFRNTCdzIGBpbm5lckhUTUxgXG4gICAgID0gKHN0cmluZykgU1ZHIGNvZGUgZm9yIHRoZSBlbGVtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8uaW5uZXJTVkcgPSB0b1N0cmluZygpO1xuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXMgPSB0eXBlID8gXCI8XCIgKyB0aGlzLnR5cGUgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHIgPSB0aGlzLm5vZGUuYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBjaGxkID0gdGhpcy5ub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGF0dHIubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXMgKz0gXCIgXCIgKyBhdHRyW2ldLm5hbWUgKyAnPVwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cltpXS52YWx1ZS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGxkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHR5cGUgJiYgKHJlcyArPSBcIj5cIik7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgaWkgPSBjaGxkLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNobGRbaV0ubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGNobGRbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNobGRbaV0ubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IHdyYXAoY2hsZFtpXSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0eXBlICYmIChyZXMgKz0gXCI8L1wiICsgdGhpcy50eXBlICsgXCI+XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eXBlICYmIChyZXMgKz0gXCIvPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVscHJvdG8udG9EYXRhVVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5idG9hKSB7XG4gICAgICAgICAgICB2YXIgYmIgPSB0aGlzLmdldEJCb3goKSxcbiAgICAgICAgICAgICAgICBzdmcgPSBTbmFwLmZvcm1hdCgnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwie3dpZHRofVwiIGhlaWdodD1cIntoZWlnaHR9XCIgdmlld0JveD1cInt4fSB7eX0ge3dpZHRofSB7aGVpZ2h0fVwiPntjb250ZW50c308L3N2Zz4nLCB7XG4gICAgICAgICAgICAgICAgeDogK2JiLngudG9GaXhlZCgzKSxcbiAgICAgICAgICAgICAgICB5OiArYmIueS50b0ZpeGVkKDMpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiArYmIud2lkdGgudG9GaXhlZCgzKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICtiYi5oZWlnaHQudG9GaXhlZCgzKSxcbiAgICAgICAgICAgICAgICBjb250ZW50czogdGhpcy5vdXRlclNWRygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdmcpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBGcmFnbWVudC5zZWxlY3RcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFNlZSBARWxlbWVudC5zZWxlY3RcbiAgICBcXCovXG4gICAgRnJhZ21lbnQucHJvdG90eXBlLnNlbGVjdCA9IGVscHJvdG8uc2VsZWN0O1xuICAgIC8qXFxcbiAgICAgKiBGcmFnbWVudC5zZWxlY3RBbGxcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFNlZSBARWxlbWVudC5zZWxlY3RBbGxcbiAgICBcXCovXG4gICAgRnJhZ21lbnQucHJvdG90eXBlLnNlbGVjdEFsbCA9IGVscHJvdG8uc2VsZWN0QWxsO1xufSk7XG5cbi8vIENvcHlyaWdodCAoYykgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8gXG4vLyBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vIFxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblNuYXAucGx1Z2luKGZ1bmN0aW9uIChTbmFwLCBFbGVtZW50LCBQYXBlciwgZ2xvYiwgRnJhZ21lbnQpIHtcbiAgICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgICAgICBTdHIgPSBTdHJpbmcsXG4gICAgICAgIG1hdGggPSBNYXRoLFxuICAgICAgICBFID0gXCJcIjtcbiAgICBmdW5jdGlvbiBNYXRyaXgoYSwgYiwgYywgZCwgZSwgZikge1xuICAgICAgICBpZiAoYiA9PSBudWxsICYmIG9iamVjdFRvU3RyaW5nLmNhbGwoYSkgPT0gXCJbb2JqZWN0IFNWR01hdHJpeF1cIikge1xuICAgICAgICAgICAgdGhpcy5hID0gYS5hO1xuICAgICAgICAgICAgdGhpcy5iID0gYS5iO1xuICAgICAgICAgICAgdGhpcy5jID0gYS5jO1xuICAgICAgICAgICAgdGhpcy5kID0gYS5kO1xuICAgICAgICAgICAgdGhpcy5lID0gYS5lO1xuICAgICAgICAgICAgdGhpcy5mID0gYS5mO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYSA9ICthO1xuICAgICAgICAgICAgdGhpcy5iID0gK2I7XG4gICAgICAgICAgICB0aGlzLmMgPSArYztcbiAgICAgICAgICAgIHRoaXMuZCA9ICtkO1xuICAgICAgICAgICAgdGhpcy5lID0gK2U7XG4gICAgICAgICAgICB0aGlzLmYgPSArZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYSA9IDE7XG4gICAgICAgICAgICB0aGlzLmIgPSAwO1xuICAgICAgICAgICAgdGhpcy5jID0gMDtcbiAgICAgICAgICAgIHRoaXMuZCA9IDE7XG4gICAgICAgICAgICB0aGlzLmUgPSAwO1xuICAgICAgICAgICAgdGhpcy5mID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAoZnVuY3Rpb24gKG1hdHJpeHByb3RvKSB7XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogTWF0cml4LmFkZFxuICAgICAgICAgWyBtZXRob2QgXVxuICAgICAgICAgKipcbiAgICAgICAgICogQWRkcyB0aGUgZ2l2ZW4gbWF0cml4IHRvIGV4aXN0aW5nIG9uZVxuICAgICAgICAgLSBhIChudW1iZXIpXG4gICAgICAgICAtIGIgKG51bWJlcilcbiAgICAgICAgIC0gYyAobnVtYmVyKVxuICAgICAgICAgLSBkIChudW1iZXIpXG4gICAgICAgICAtIGUgKG51bWJlcilcbiAgICAgICAgIC0gZiAobnVtYmVyKVxuICAgICAgICAgKiBvclxuICAgICAgICAgLSBtYXRyaXggKG9iamVjdCkgQE1hdHJpeFxuICAgICAgICBcXCovXG4gICAgICAgIG1hdHJpeHByb3RvLmFkZCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW1tdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgIG0gPSBbW3RoaXMuYSwgdGhpcy5jLCB0aGlzLmVdLCBbdGhpcy5iLCB0aGlzLmQsIHRoaXMuZl0sIFswLCAwLCAxXV0sXG4gICAgICAgICAgICAgICAgbWF0cml4ID0gW1thLCBjLCBlXSwgW2IsIGQsIGZdLCBbMCwgMCwgMV1dLFxuICAgICAgICAgICAgICAgIHgsIHksIHosIHJlcztcblxuICAgICAgICAgICAgaWYgKGEgJiYgYSBpbnN0YW5jZW9mIE1hdHJpeCkge1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IFtbYS5hLCBhLmMsIGEuZV0sIFthLmIsIGEuZCwgYS5mXSwgWzAsIDAsIDFdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCAzOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IDM7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IG1beF1bel0gKiBtYXRyaXhbel1beV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0W3hdW3ldID0gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYSA9IG91dFswXVswXTtcbiAgICAgICAgICAgIHRoaXMuYiA9IG91dFsxXVswXTtcbiAgICAgICAgICAgIHRoaXMuYyA9IG91dFswXVsxXTtcbiAgICAgICAgICAgIHRoaXMuZCA9IG91dFsxXVsxXTtcbiAgICAgICAgICAgIHRoaXMuZSA9IG91dFswXVsyXTtcbiAgICAgICAgICAgIHRoaXMuZiA9IG91dFsxXVsyXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC5pbnZlcnRcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIFJldHVybnMgYW4gaW52ZXJ0ZWQgdmVyc2lvbiBvZiB0aGUgbWF0cml4XG4gICAgICAgICA9IChvYmplY3QpIEBNYXRyaXhcbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by5pbnZlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHggPSBtZS5hICogbWUuZCAtIG1lLmIgKiBtZS5jO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgobWUuZCAvIHgsIC1tZS5iIC8geCwgLW1lLmMgLyB4LCBtZS5hIC8geCwgKG1lLmMgKiBtZS5mIC0gbWUuZCAqIG1lLmUpIC8geCwgKG1lLmIgKiBtZS5lIC0gbWUuYSAqIG1lLmYpIC8geCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogTWF0cml4LmNsb25lXG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgbWF0cml4XG4gICAgICAgICA9IChvYmplY3QpIEBNYXRyaXhcbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4KHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy5lLCB0aGlzLmYpO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC50cmFuc2xhdGVcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIFRyYW5zbGF0ZSB0aGUgbWF0cml4XG4gICAgICAgICAtIHggKG51bWJlcikgaG9yaXpvbnRhbCBvZmZzZXQgZGlzdGFuY2VcbiAgICAgICAgIC0geSAobnVtYmVyKSB2ZXJ0aWNhbCBvZmZzZXQgZGlzdGFuY2VcbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKDEsIDAsIDAsIDEsIHgsIHkpO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC5zY2FsZVxuICAgICAgICAgWyBtZXRob2QgXVxuICAgICAgICAgKipcbiAgICAgICAgICogU2NhbGVzIHRoZSBtYXRyaXhcbiAgICAgICAgIC0geCAobnVtYmVyKSBhbW91bnQgdG8gYmUgc2NhbGVkLCB3aXRoIGAxYCByZXN1bHRpbmcgaW4gbm8gY2hhbmdlXG4gICAgICAgICAtIHkgKG51bWJlcikgI29wdGlvbmFsIGFtb3VudCB0byBzY2FsZSBhbG9uZyB0aGUgdmVydGljYWwgYXhpcy4gKE90aGVyd2lzZSBgeGAgYXBwbGllcyB0byBib3RoIGF4ZXMuKVxuICAgICAgICAgLSBjeCAobnVtYmVyKSAjb3B0aW9uYWwgaG9yaXpvbnRhbCBvcmlnaW4gcG9pbnQgZnJvbSB3aGljaCB0byBzY2FsZVxuICAgICAgICAgLSBjeSAobnVtYmVyKSAjb3B0aW9uYWwgdmVydGljYWwgb3JpZ2luIHBvaW50IGZyb20gd2hpY2ggdG8gc2NhbGVcbiAgICAgICAgICogRGVmYXVsdCBjeCwgY3kgaXMgdGhlIG1pZGRsZSBwb2ludCBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5LCBjeCwgY3kpIHtcbiAgICAgICAgICAgIHkgPT0gbnVsbCAmJiAoeSA9IHgpO1xuICAgICAgICAgICAgKGN4IHx8IGN5KSAmJiB0aGlzLmFkZCgxLCAwLCAwLCAxLCBjeCwgY3kpO1xuICAgICAgICAgICAgdGhpcy5hZGQoeCwgMCwgMCwgeSwgMCwgMCk7XG4gICAgICAgICAgICAoY3ggfHwgY3kpICYmIHRoaXMuYWRkKDEsIDAsIDAsIDEsIC1jeCwgLWN5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC5yb3RhdGVcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIFJvdGF0ZXMgdGhlIG1hdHJpeFxuICAgICAgICAgLSBhIChudW1iZXIpIGFuZ2xlIG9mIHJvdGF0aW9uLCBpbiBkZWdyZWVzXG4gICAgICAgICAtIHggKG51bWJlcikgaG9yaXpvbnRhbCBvcmlnaW4gcG9pbnQgZnJvbSB3aGljaCB0byByb3RhdGVcbiAgICAgICAgIC0geSAobnVtYmVyKSB2ZXJ0aWNhbCBvcmlnaW4gcG9pbnQgZnJvbSB3aGljaCB0byByb3RhdGVcbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by5yb3RhdGUgPSBmdW5jdGlvbiAoYSwgeCwgeSkge1xuICAgICAgICAgICAgYSA9IFNuYXAucmFkKGEpO1xuICAgICAgICAgICAgeCA9IHggfHwgMDtcbiAgICAgICAgICAgIHkgPSB5IHx8IDA7XG4gICAgICAgICAgICB2YXIgY29zID0gK21hdGguY29zKGEpLnRvRml4ZWQoOSksXG4gICAgICAgICAgICAgICAgc2luID0gK21hdGguc2luKGEpLnRvRml4ZWQoOSk7XG4gICAgICAgICAgICB0aGlzLmFkZChjb3MsIHNpbiwgLXNpbiwgY29zLCB4LCB5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZCgxLCAwLCAwLCAxLCAteCwgLXkpO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC54XG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBSZXR1cm5zIHggY29vcmRpbmF0ZSBmb3IgZ2l2ZW4gcG9pbnQgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gZGVzY3JpYmVkIGJ5IHRoZSBtYXRyaXguIFNlZSBhbHNvIEBNYXRyaXgueVxuICAgICAgICAgLSB4IChudW1iZXIpXG4gICAgICAgICAtIHkgKG51bWJlcilcbiAgICAgICAgID0gKG51bWJlcikgeFxuICAgICAgICBcXCovXG4gICAgICAgIG1hdHJpeHByb3RvLnggPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHggKiB0aGlzLmEgKyB5ICogdGhpcy5jICsgdGhpcy5lO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC55XG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBSZXR1cm5zIHkgY29vcmRpbmF0ZSBmb3IgZ2l2ZW4gcG9pbnQgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gZGVzY3JpYmVkIGJ5IHRoZSBtYXRyaXguIFNlZSBhbHNvIEBNYXRyaXgueFxuICAgICAgICAgLSB4IChudW1iZXIpXG4gICAgICAgICAtIHkgKG51bWJlcilcbiAgICAgICAgID0gKG51bWJlcikgeVxuICAgICAgICBcXCovXG4gICAgICAgIG1hdHJpeHByb3RvLnkgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHggKiB0aGlzLmIgKyB5ICogdGhpcy5kICsgdGhpcy5mO1xuICAgICAgICB9O1xuICAgICAgICBtYXRyaXhwcm90by5nZXQgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuICt0aGlzW1N0ci5mcm9tQ2hhckNvZGUoOTcgKyBpKV0udG9GaXhlZCg0KTtcbiAgICAgICAgfTtcbiAgICAgICAgbWF0cml4cHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtYXRyaXgoXCIgKyBbdGhpcy5nZXQoMCksIHRoaXMuZ2V0KDEpLCB0aGlzLmdldCgyKSwgdGhpcy5nZXQoMyksIHRoaXMuZ2V0KDQpLCB0aGlzLmdldCg1KV0uam9pbigpICsgXCIpXCI7XG4gICAgICAgIH07XG4gICAgICAgIG1hdHJpeHByb3RvLm9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5lLnRvRml4ZWQoNCksIHRoaXMuZi50b0ZpeGVkKDQpXTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gbm9ybShhKSB7XG4gICAgICAgICAgICByZXR1cm4gYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBub3JtYWxpemUoYSkge1xuICAgICAgICAgICAgdmFyIG1hZyA9IG1hdGguc3FydChub3JtKGEpKTtcbiAgICAgICAgICAgIGFbMF0gJiYgKGFbMF0gLz0gbWFnKTtcbiAgICAgICAgICAgIGFbMV0gJiYgKGFbMV0gLz0gbWFnKTtcbiAgICAgICAgfVxuICAgICAgICAvKlxcXG4gICAgICAgICAqIE1hdHJpeC5kZXRlcm1pbmFudFxuICAgICAgICAgWyBtZXRob2QgXVxuICAgICAgICAgKipcbiAgICAgICAgICogRmluZHMgZGV0ZXJtaW5hbnQgb2YgdGhlIGdpdmVuIG1hdHJpeC5cbiAgICAgICAgID0gKG51bWJlcikgZGV0ZXJtaW5hbnRcbiAgICAgICAgXFwqL1xuICAgICAgICBtYXRyaXhwcm90by5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmEgKiB0aGlzLmQgLSB0aGlzLmIgKiB0aGlzLmM7XG4gICAgICAgIH07XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogTWF0cml4LnNwbGl0XG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBTcGxpdHMgbWF0cml4IGludG8gcHJpbWl0aXZlIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgICAgPSAob2JqZWN0KSBpbiBmb3JtYXQ6XG4gICAgICAgICBvIGR4IChudW1iZXIpIHRyYW5zbGF0aW9uIGJ5IHhcbiAgICAgICAgIG8gZHkgKG51bWJlcikgdHJhbnNsYXRpb24gYnkgeVxuICAgICAgICAgbyBzY2FsZXggKG51bWJlcikgc2NhbGUgYnkgeFxuICAgICAgICAgbyBzY2FsZXkgKG51bWJlcikgc2NhbGUgYnkgeVxuICAgICAgICAgbyBzaGVhciAobnVtYmVyKSBzaGVhclxuICAgICAgICAgbyByb3RhdGUgKG51bWJlcikgcm90YXRpb24gaW4gZGVnXG4gICAgICAgICBvIGlzU2ltcGxlIChib29sZWFuKSBjb3VsZCBpdCBiZSByZXByZXNlbnRlZCB2aWEgc2ltcGxlIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgICBcXCovXG4gICAgICAgIG1hdHJpeHByb3RvLnNwbGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG91dCA9IHt9O1xuICAgICAgICAgICAgLy8gdHJhbnNsYXRpb25cbiAgICAgICAgICAgIG91dC5keCA9IHRoaXMuZTtcbiAgICAgICAgICAgIG91dC5keSA9IHRoaXMuZjtcblxuICAgICAgICAgICAgLy8gc2NhbGUgYW5kIHNoZWFyXG4gICAgICAgICAgICB2YXIgcm93ID0gW1t0aGlzLmEsIHRoaXMuY10sIFt0aGlzLmIsIHRoaXMuZF1dO1xuICAgICAgICAgICAgb3V0LnNjYWxleCA9IG1hdGguc3FydChub3JtKHJvd1swXSkpO1xuICAgICAgICAgICAgbm9ybWFsaXplKHJvd1swXSk7XG5cbiAgICAgICAgICAgIG91dC5zaGVhciA9IHJvd1swXVswXSAqIHJvd1sxXVswXSArIHJvd1swXVsxXSAqIHJvd1sxXVsxXTtcbiAgICAgICAgICAgIHJvd1sxXSA9IFtyb3dbMV1bMF0gLSByb3dbMF1bMF0gKiBvdXQuc2hlYXIsIHJvd1sxXVsxXSAtIHJvd1swXVsxXSAqIG91dC5zaGVhcl07XG5cbiAgICAgICAgICAgIG91dC5zY2FsZXkgPSBtYXRoLnNxcnQobm9ybShyb3dbMV0pKTtcbiAgICAgICAgICAgIG5vcm1hbGl6ZShyb3dbMV0pO1xuICAgICAgICAgICAgb3V0LnNoZWFyIC89IG91dC5zY2FsZXk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRldGVybWluYW50KCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgb3V0LnNjYWxleCA9IC1vdXQuc2NhbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGlvblxuICAgICAgICAgICAgdmFyIHNpbiA9IC1yb3dbMF1bMV0sXG4gICAgICAgICAgICAgICAgY29zID0gcm93WzFdWzFdO1xuICAgICAgICAgICAgaWYgKGNvcyA8IDApIHtcbiAgICAgICAgICAgICAgICBvdXQucm90YXRlID0gU25hcC5kZWcobWF0aC5hY29zKGNvcykpO1xuICAgICAgICAgICAgICAgIGlmIChzaW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5yb3RhdGUgPSAzNjAgLSBvdXQucm90YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0LnJvdGF0ZSA9IFNuYXAuZGVnKG1hdGguYXNpbihzaW4pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0LmlzU2ltcGxlID0gIStvdXQuc2hlYXIudG9GaXhlZCg5KSAmJiAob3V0LnNjYWxleC50b0ZpeGVkKDkpID09IG91dC5zY2FsZXkudG9GaXhlZCg5KSB8fCAhb3V0LnJvdGF0ZSk7XG4gICAgICAgICAgICBvdXQuaXNTdXBlclNpbXBsZSA9ICErb3V0LnNoZWFyLnRvRml4ZWQoOSkgJiYgb3V0LnNjYWxleC50b0ZpeGVkKDkpID09IG91dC5zY2FsZXkudG9GaXhlZCg5KSAmJiAhb3V0LnJvdGF0ZTtcbiAgICAgICAgICAgIG91dC5ub1JvdGF0aW9uID0gIStvdXQuc2hlYXIudG9GaXhlZCg5KSAmJiAhb3V0LnJvdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogTWF0cml4LnRvVHJhbnNmb3JtU3RyaW5nXG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBSZXR1cm5zIHRyYW5zZm9ybSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIGdpdmVuIG1hdHJpeFxuICAgICAgICAgPSAoc3RyaW5nKSB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIFxcKi9cbiAgICAgICAgbWF0cml4cHJvdG8udG9UcmFuc2Zvcm1TdHJpbmcgPSBmdW5jdGlvbiAoc2hvcnRlcikge1xuICAgICAgICAgICAgdmFyIHMgPSBzaG9ydGVyIHx8IHRoaXMuc3BsaXQoKTtcbiAgICAgICAgICAgIGlmICghK3Muc2hlYXIudG9GaXhlZCg5KSkge1xuICAgICAgICAgICAgICAgIHMuc2NhbGV4ID0gK3Muc2NhbGV4LnRvRml4ZWQoNCk7XG4gICAgICAgICAgICAgICAgcy5zY2FsZXkgPSArcy5zY2FsZXkudG9GaXhlZCg0KTtcbiAgICAgICAgICAgICAgICBzLnJvdGF0ZSA9ICtzLnJvdGF0ZS50b0ZpeGVkKDQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAgKHMuZHggfHwgcy5keSA/IFwidFwiICsgWytzLmR4LnRvRml4ZWQoNCksICtzLmR5LnRvRml4ZWQoNCldIDogRSkgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLnNjYWxleCAhPSAxIHx8IHMuc2NhbGV5ICE9IDEgPyBcInNcIiArIFtzLnNjYWxleCwgcy5zY2FsZXksIDAsIDBdIDogRSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHMucm90YXRlID8gXCJyXCIgKyBbK3Mucm90YXRlLnRvRml4ZWQoNCksIDAsIDBdIDogRSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm1cIiArIFt0aGlzLmdldCgwKSwgdGhpcy5nZXQoMSksIHRoaXMuZ2V0KDIpLCB0aGlzLmdldCgzKSwgdGhpcy5nZXQoNCksIHRoaXMuZ2V0KDUpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KShNYXRyaXgucHJvdG90eXBlKTtcbiAgICAvKlxcXG4gICAgICogU25hcC5NYXRyaXhcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIE1hdHJpeCBjb25zdHJ1Y3RvciwgZXh0ZW5kIG9uIHlvdXIgb3duIHJpc2suXG4gICAgICogVG8gY3JlYXRlIG1hdHJpY2VzIHVzZSBAU25hcC5tYXRyaXguXG4gICAgXFwqL1xuICAgIFNuYXAuTWF0cml4ID0gTWF0cml4O1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLm1hdHJpeFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogVXRpbGl0eSBtZXRob2RcbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGEgbWF0cml4IGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzXG4gICAgIC0gYSAobnVtYmVyKVxuICAgICAtIGIgKG51bWJlcilcbiAgICAgLSBjIChudW1iZXIpXG4gICAgIC0gZCAobnVtYmVyKVxuICAgICAtIGUgKG51bWJlcilcbiAgICAgLSBmIChudW1iZXIpXG4gICAgICogb3JcbiAgICAgLSBzdmdNYXRyaXggKFNWR01hdHJpeClcbiAgICAgPSAob2JqZWN0KSBATWF0cml4XG4gICAgXFwqL1xuICAgIFNuYXAubWF0cml4ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgoYSwgYiwgYywgZCwgZSwgZik7XG4gICAgfTtcbn0pO1xuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuU25hcC5wbHVnaW4oZnVuY3Rpb24gKFNuYXAsIEVsZW1lbnQsIFBhcGVyLCBnbG9iLCBGcmFnbWVudCkge1xuICAgIHZhciBoYXMgPSBcImhhc093blByb3BlcnR5XCIsXG4gICAgICAgIG1ha2UgPSBTbmFwLl8ubWFrZSxcbiAgICAgICAgd3JhcCA9IFNuYXAuXy53cmFwLFxuICAgICAgICBpcyA9IFNuYXAuaXMsXG4gICAgICAgIGdldFNvbWVEZWZzID0gU25hcC5fLmdldFNvbWVEZWZzLFxuICAgICAgICByZVVSTFZhbHVlID0gL151cmxcXCgjPyhbXildKylcXCkkLyxcbiAgICAgICAgJCA9IFNuYXAuXy4kLFxuICAgICAgICBVUkwgPSBTbmFwLnVybCxcbiAgICAgICAgU3RyID0gU3RyaW5nLFxuICAgICAgICBzZXBhcmF0b3IgPSBTbmFwLl8uc2VwYXJhdG9yLFxuICAgICAgICBFID0gXCJcIjtcbiAgICAvLyBBdHRyaWJ1dGVzIGV2ZW50IGhhbmRsZXJzXG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIubWFza1wiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZyYWdtZW50KSB7XG4gICAgICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnJhZ21lbnQgJiYgdmFsdWUubm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5ub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgZ2V0U29tZURlZnModGhpcykuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUudHlwZSA9PSBcIm1hc2tcIikge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hc2sgPSBtYWtlKFwibWFza1wiLCBnZXRTb21lRGVmcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgbWFzay5ub2RlLmFwcGVuZENoaWxkKHZhbHVlLm5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIW1hc2subm9kZS5pZCAmJiAkKG1hc2subm9kZSwge1xuICAgICAgICAgICAgICAgIGlkOiBtYXNrLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodGhpcy5ub2RlLCB7XG4gICAgICAgICAgICAgICAgbWFzazogVVJMKG1hc2suaWQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIChmdW5jdGlvbiAoY2xpcEl0KSB7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLmNsaXBcIiwgY2xpcEl0KTtcbiAgICAgICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIuY2xpcC1wYXRoXCIsIGNsaXBJdCk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLmNsaXBQYXRoXCIsIGNsaXBJdCk7XG4gICAgfShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZyYWdtZW50KSB7XG4gICAgICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT0gXCJjbGlwUGF0aFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsaXAgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xpcCA9IG1ha2UoXCJjbGlwUGF0aFwiLCBnZXRTb21lRGVmcyh0aGlzKSk7XG4gICAgICAgICAgICAgICAgY2xpcC5ub2RlLmFwcGVuZENoaWxkKHZhbHVlLm5vZGUpO1xuICAgICAgICAgICAgICAgICFjbGlwLm5vZGUuaWQgJiYgJChjbGlwLm5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNsaXAuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcy5ub2RlLCB7XG4gICAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogVVJMKGNsaXAubm9kZS5pZCB8fCBjbGlwLmlkKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KSk7XG4gICAgZnVuY3Rpb24gZmlsbFN0cm9rZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGcmFnbWVudCAmJiB2YWx1ZS5ub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgICAgICAodmFsdWUubm9kZS5maXJzdENoaWxkLnRhZ05hbWUgPT0gXCJyYWRpYWxHcmFkaWVudFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUubm9kZS5maXJzdENoaWxkLnRhZ05hbWUgPT0gXCJsaW5lYXJHcmFkaWVudFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUubm9kZS5maXJzdENoaWxkLnRhZ05hbWUgPT0gXCJwYXR0ZXJuXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5ub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgZ2V0U29tZURlZnModGhpcykuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT0gXCJyYWRpYWxHcmFkaWVudFwiIHx8IHZhbHVlLnR5cGUgPT0gXCJsaW5lYXJHcmFkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgfHwgdmFsdWUudHlwZSA9PSBcInBhdHRlcm5cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLm5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUubm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YWx1ZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGwgPSBVUkwodmFsdWUubm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbCA9IHZhbHVlLmF0dHIobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWxsID0gU25hcC5jb2xvcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGwuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyYWQgPSBTbmFwKGdldFNvbWVEZWZzKHRoaXMpLm93bmVyU1ZHRWxlbWVudCkuZ3JhZGllbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFncmFkLm5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGdyYWQubm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZ3JhZC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCA9IFVSTChncmFkLm5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbCA9IFN0cihmaWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXR0cnMgPSB7fTtcbiAgICAgICAgICAgIGF0dHJzW25hbWVdID0gZmlsbDtcbiAgICAgICAgICAgICQodGhpcy5ub2RlLCBhdHRycyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGVbbmFtZV0gPSBFO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci5maWxsXCIsIGZpbGxTdHJva2UoXCJmaWxsXCIpKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci5zdHJva2VcIiwgZmlsbFN0cm9rZShcInN0cm9rZVwiKSk7XG4gICAgdmFyIGdyYWRyZyA9IC9eKFtscl0pKD86XFwoKFteKV0qKVxcKSk/KC4qKSQvaTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuZ3JhZC5wYXJzZVwiLCBmdW5jdGlvbiBwYXJzZUdyYWQoc3RyaW5nKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cihzdHJpbmcpO1xuICAgICAgICB2YXIgdG9rZW5zID0gc3RyaW5nLm1hdGNoKGdyYWRyZyk7XG4gICAgICAgIGlmICghdG9rZW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IHRva2Vuc1sxXSxcbiAgICAgICAgICAgIHBhcmFtcyA9IHRva2Vuc1syXSxcbiAgICAgICAgICAgIHN0b3BzID0gdG9rZW5zWzNdO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuc3BsaXQoL1xccyosXFxzKi8pLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiArZWwgPT0gZWwgPyArZWwgOiBlbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID09IDEgJiYgcGFyYW1zWzBdID09IDApIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHN0b3BzID0gc3RvcHMuc3BsaXQoXCItXCIpO1xuICAgICAgICBzdG9wcyA9IHN0b3BzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsID0gZWwuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgdmFyIG91dCA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZWxbMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZWxbMV0pIHtcbiAgICAgICAgICAgICAgICBvdXQub2Zmc2V0ID0gcGFyc2VGbG9hdChlbFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIHN0b3BzOiBzdG9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIuZFwiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgaWYgKGlzKHZhbHVlLCBcImFycmF5XCIpICYmIGlzKHZhbHVlWzBdLCBcImFycmF5XCIpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFNuYXAucGF0aC50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IFN0cih2YWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvW3J1b10vaSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gU25hcC5wYXRoLnRvQWJzb2x1dGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy5ub2RlLCB7ZDogdmFsdWV9KTtcbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIuI3RleHRcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgIHZhbHVlID0gU3RyKHZhbHVlKTtcbiAgICAgICAgdmFyIHR4dCA9IGdsb2IuZG9jLmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcbiAgICAgICAgd2hpbGUgKHRoaXMubm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0eHQpO1xuICAgIH0pKC0xKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci5wYXRoXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICB0aGlzLmF0dHIoe2Q6IHZhbHVlfSk7XG4gICAgfSkoLTEpO1xuICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLmNsYXNzXCIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NOYW1lLmJhc2VWYWwgPSB2YWx1ZTtcbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIudmlld0JveFwiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHZiO1xuICAgICAgICBpZiAoaXModmFsdWUsIFwib2JqZWN0XCIpICYmIFwieFwiIGluIHZhbHVlKSB7XG4gICAgICAgICAgICB2YiA9IFt2YWx1ZS54LCB2YWx1ZS55LCB2YWx1ZS53aWR0aCwgdmFsdWUuaGVpZ2h0XS5qb2luKFwiIFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChpcyh2YWx1ZSwgXCJhcnJheVwiKSkge1xuICAgICAgICAgICAgdmIgPSB2YWx1ZS5qb2luKFwiIFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZiID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLm5vZGUsIHtcbiAgICAgICAgICAgIHZpZXdCb3g6IHZiXG4gICAgICAgIH0pO1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgIH0pKC0xKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci50cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIuclwiLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInJlY3RcIikge1xuICAgICAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgICAgICQodGhpcy5ub2RlLCB7XG4gICAgICAgICAgICAgICAgcng6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHJ5OiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIudGV4dHBhdGhcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIHZhciBpZCwgdHAsIG5vZGU7XG4gICAgICAgICAgICBpZiAoIXZhbHVlICYmIHRoaXMudGV4dFBhdGgpIHtcbiAgICAgICAgICAgICAgICB0cCA9IHRoaXMudGV4dFBhdGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRwLm5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodHAubm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHAucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMudGV4dFBhdGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzKHZhbHVlLCBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZzID0gZ2V0U29tZURlZnModGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB3cmFwKGRlZnMucGFyZW50Tm9kZSkucGF0aCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChwYXRoLm5vZGUpO1xuICAgICAgICAgICAgICAgIGlkID0gcGF0aC5pZDtcbiAgICAgICAgICAgICAgICBwYXRoLmF0dHIoe2lkOiBpZH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXAodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB2YWx1ZS5hdHRyKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdmFsdWUuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5hdHRyKHtpZDogaWR9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICAgIHRwID0gdGhpcy50ZXh0UGF0aDtcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGlmICh0cCkge1xuICAgICAgICAgICAgICAgICAgICB0cC5hdHRyKHtcInhsaW5rOmhyZWZcIjogXCIjXCIgKyBpZH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRwID0gJChcInRleHRQYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieGxpbms6aHJlZlwiOiBcIiNcIiArIGlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cC5hcHBlbmRDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodHApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRQYXRoID0gd3JhcCh0cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoLTEpO1xuICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLnRleHRcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgICAgICAgIHR1bmVyID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXQgPSAkKFwidHNwYW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpcyhjaHVuaywgXCJhcnJheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaHVuay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dC5hcHBlbmRDaGlsZCh0dW5lcihjaHVua1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LmFwcGVuZENoaWxkKGdsb2IuZG9jLmNyZWF0ZVRleHROb2RlKGNodW5rKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0Lm5vcm1hbGl6ZSAmJiBvdXQubm9ybWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHVuZWQgPSB0dW5lcih2YWx1ZSk7XG4gICAgICAgICAgICB3aGlsZSAodHVuZWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodHVuZWQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICB9KSgtMSk7XG4gICAgZnVuY3Rpb24gc2V0Rm9udFNpemUodmFsdWUpIHtcbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgaWYgKHZhbHVlID09ICt2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgKz0gXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5mb250U2l6ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci5mb250U2l6ZVwiLCBzZXRGb250U2l6ZSkoLTEpO1xuICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLmZvbnQtc2l6ZVwiLCBzZXRGb250U2l6ZSkoLTEpO1xuXG5cbiAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci50cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oKTtcbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmdldGF0dHIudGV4dHBhdGhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UGF0aDtcbiAgICB9KSgtMSk7XG4gICAgLy8gTWFya2Vyc1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldHRlcihlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBnbG9iLmRvYy5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmtlci1cIiArIGVuZCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU25hcChnbG9iLmRvYy5nZXRFbGVtZW50QnlJZChzdHlsZS5tYXRjaChyZVVSTFZhbHVlKVsxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0dGVyKGVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBcIm1hcmtlclwiICsgZW5kLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZW5kLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJcIiB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlW25hbWVdID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT0gXCJtYXJrZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSB2YWx1ZS5ub2RlLmlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLm5vZGUsIHtpZDogdmFsdWUuaWR9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGVbbmFtZV0gPSBVUkwoaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5tYXJrZXItZW5kXCIsIGdldHRlcihcImVuZFwiKSkoLTEpO1xuICAgICAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5tYXJrZXJFbmRcIiwgZ2V0dGVyKFwiZW5kXCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5nZXRhdHRyLm1hcmtlci1zdGFydFwiLCBnZXR0ZXIoXCJzdGFydFwiKSkoLTEpO1xuICAgICAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5tYXJrZXJTdGFydFwiLCBnZXR0ZXIoXCJzdGFydFwiKSkoLTEpO1xuICAgICAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5tYXJrZXItbWlkXCIsIGdldHRlcihcIm1pZFwiKSkoLTEpO1xuICAgICAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5tYXJrZXJNaWRcIiwgZ2V0dGVyKFwibWlkXCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLm1hcmtlci1lbmRcIiwgc2V0dGVyKFwiZW5kXCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLm1hcmtlckVuZFwiLCBzZXR0ZXIoXCJlbmRcIikpKC0xKTtcbiAgICAgICAgZXZlLm9uKFwic25hcC51dGlsLmF0dHIubWFya2VyLXN0YXJ0XCIsIHNldHRlcihcInN0YXJ0XCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLm1hcmtlclN0YXJ0XCIsIHNldHRlcihcInN0YXJ0XCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLm1hcmtlci1taWRcIiwgc2V0dGVyKFwibWlkXCIpKSgtMSk7XG4gICAgICAgIGV2ZS5vbihcInNuYXAudXRpbC5hdHRyLm1hcmtlck1pZFwiLCBzZXR0ZXIoXCJtaWRcIikpKC0xKTtcbiAgICB9KCkpO1xuICAgIGV2ZS5vbihcInNuYXAudXRpbC5nZXRhdHRyLnJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwicmVjdFwiICYmICQodGhpcy5ub2RlLCBcInJ4XCIpID09ICQodGhpcy5ub2RlLCBcInJ5XCIpKSB7XG4gICAgICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuICQodGhpcy5ub2RlLCBcInJ4XCIpO1xuICAgICAgICB9XG4gICAgfSkoLTEpO1xuICAgIGZ1bmN0aW9uIHRleHRFeHRyYWN0KG5vZGUpIHtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGkgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjaGkubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKGNoaS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaS50YWdOYW1lID09IFwidHNwYW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChjaGkuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSAmJiBjaGkuZmlyc3RDaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKGNoaS5maXJzdENoaWxkLm5vZGVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2godGV4dEV4dHJhY3QoY2hpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGV2ZS5vbihcInNuYXAudXRpbC5nZXRhdHRyLnRleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwidGV4dFwiIHx8IHRoaXMudHlwZSA9PSBcInRzcGFuXCIpIHtcbiAgICAgICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgICAgICB2YXIgb3V0ID0gdGV4dEV4dHJhY3QodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBvdXQubGVuZ3RoID09IDEgPyBvdXRbMF0gOiBvdXQ7XG4gICAgICAgIH1cbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmdldGF0dHIuI3RleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnRleHRDb250ZW50O1xuICAgIH0pKC0xKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci52aWV3Qm94XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgdmFyIHZiID0gJCh0aGlzLm5vZGUsIFwidmlld0JveFwiKTtcbiAgICAgICAgaWYgKHZiKSB7XG4gICAgICAgICAgICB2YiA9IHZiLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgICAgICAgICByZXR1cm4gU25hcC5fLmJveCgrdmJbMF0sICt2YlsxXSwgK3ZiWzJdLCArdmJbM10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSkoLTEpO1xuICAgIGV2ZS5vbihcInNuYXAudXRpbC5nZXRhdHRyLnBvaW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gJCh0aGlzLm5vZGUsIFwicG9pbnRzXCIpO1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIHAuc3BsaXQoc2VwYXJhdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pKC0xKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5wYXRoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSAkKHRoaXMubm9kZSwgXCJkXCIpO1xuICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9KSgtMSk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmdldGF0dHIuY2xhc3NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNsYXNzTmFtZS5iYXNlVmFsO1xuICAgIH0pKC0xKTtcbiAgICBmdW5jdGlvbiBnZXRGb250U2l6ZSgpIHtcbiAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdHlsZS5mb250U2l6ZTtcbiAgICB9XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmdldGF0dHIuZm9udFNpemVcIiwgZ2V0Rm9udFNpemUpKC0xKTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuZ2V0YXR0ci5mb250LXNpemVcIiwgZ2V0Rm9udFNpemUpKC0xKTtcbn0pO1xuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5TbmFwLnBsdWdpbihmdW5jdGlvbiAoU25hcCwgRWxlbWVudCwgUGFwZXIsIGdsb2IsIEZyYWdtZW50KSB7XG4gICAgdmFyIHJnTm90U3BhY2UgPSAvXFxTKy9nLFxuICAgICAgICByZ0JhZFNwYWNlID0gL1tcXHRcXHJcXG5cXGZdL2csXG4gICAgICAgIHJnVHJpbSA9IC8oXlxccyt8XFxzKyQpL2csXG4gICAgICAgIFN0ciA9IFN0cmluZyxcbiAgICAgICAgZWxwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmFkZENsYXNzXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBBZGRzIGdpdmVuIGNsYXNzIG5hbWUgb3IgbGlzdCBvZiBjbGFzcyBuYW1lcyB0byB0aGUgZWxlbWVudC5cbiAgICAgLSB2YWx1ZSAoc3RyaW5nKSBjbGFzcyBuYW1lIG9yIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzXG4gICAgICoqXG4gICAgID0gKEVsZW1lbnQpIG9yaWdpbmFsIGVsZW1lbnQuXG4gICAgXFwqL1xuICAgIGVscHJvdG8uYWRkQ2xhc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdHIodmFsdWUgfHwgXCJcIikubWF0Y2gocmdOb3RTcGFjZSkgfHwgW10sXG4gICAgICAgICAgICBlbGVtID0gdGhpcy5ub2RlLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUuYmFzZVZhbCxcbiAgICAgICAgICAgIGN1ckNsYXNzZXMgPSBjbGFzc05hbWUubWF0Y2gocmdOb3RTcGFjZSkgfHwgW10sXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgcG9zLFxuICAgICAgICAgICAgY2xhenosXG4gICAgICAgICAgICBmaW5hbFZhbHVlO1xuXG4gICAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xuICAgICAgICAgICAgICAgIHBvcyA9IGN1ckNsYXNzZXMuaW5kZXhPZihjbGF6eik7XG4gICAgICAgICAgICAgICAgaWYgKCF+cG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNsYXNzZXMucHVzaChjbGF6eik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaW5hbFZhbHVlID0gY3VyQ2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUgIT0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lLmJhc2VWYWwgPSBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQucmVtb3ZlQ2xhc3NcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgZ2l2ZW4gY2xhc3MgbmFtZSBvciBsaXN0IG9mIGNsYXNzIG5hbWVzIGZyb20gdGhlIGVsZW1lbnQuXG4gICAgIC0gdmFsdWUgKHN0cmluZykgY2xhc3MgbmFtZSBvciBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBjbGFzcyBuYW1lc1xuICAgICAqKlxuICAgICA9IChFbGVtZW50KSBvcmlnaW5hbCBlbGVtZW50LlxuICAgIFxcKi9cbiAgICBlbHByb3RvLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gU3RyKHZhbHVlIHx8IFwiXCIpLm1hdGNoKHJnTm90U3BhY2UpIHx8IFtdLFxuICAgICAgICAgICAgZWxlbSA9IHRoaXMubm9kZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLmJhc2VWYWwsXG4gICAgICAgICAgICBjdXJDbGFzc2VzID0gY2xhc3NOYW1lLm1hdGNoKHJnTm90U3BhY2UpIHx8IFtdLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIHBvcyxcbiAgICAgICAgICAgIGNsYXp6LFxuICAgICAgICAgICAgZmluYWxWYWx1ZTtcbiAgICAgICAgaWYgKGN1ckNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlICgoY2xhenogPSBjbGFzc2VzW2orK10pKSB7XG4gICAgICAgICAgICAgICAgcG9zID0gY3VyQ2xhc3Nlcy5pbmRleE9mKGNsYXp6KTtcbiAgICAgICAgICAgICAgICBpZiAofnBvcykge1xuICAgICAgICAgICAgICAgICAgICBjdXJDbGFzc2VzLnNwbGljZShwb3MsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmluYWxWYWx1ZSA9IGN1ckNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lICE9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTmFtZS5iYXNlVmFsID0gZmluYWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50Lmhhc0NsYXNzXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGVsZW1lbnQgaGFzIGEgZ2l2ZW4gY2xhc3MgbmFtZSBpbiB0aGUgbGlzdCBvZiBjbGFzcyBuYW1lcyBhcHBsaWVkIHRvIGl0LlxuICAgICAtIHZhbHVlIChzdHJpbmcpIGNsYXNzIG5hbWVcbiAgICAgKipcbiAgICAgPSAoYm9vbGVhbikgYHRydWVgIGlmIHRoZSBlbGVtZW50IGhhcyBnaXZlbiBjbGFzc1xuICAgIFxcKi9cbiAgICBlbHByb3RvLmhhc0NsYXNzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBlbGVtID0gdGhpcy5ub2RlLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUuYmFzZVZhbCxcbiAgICAgICAgICAgIGN1ckNsYXNzZXMgPSBjbGFzc05hbWUubWF0Y2gocmdOb3RTcGFjZSkgfHwgW107XG4gICAgICAgIHJldHVybiAhIX5jdXJDbGFzc2VzLmluZGV4T2YodmFsdWUpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudG9nZ2xlQ2xhc3NcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZCBvciByZW1vdmUgb25lIG9yIG1vcmUgY2xhc3NlcyBmcm9tIHRoZSBlbGVtZW50LCBkZXBlbmRpbmcgb24gZWl0aGVyXG4gICAgICogdGhlIGNsYXNz4oCZcyBwcmVzZW5jZSBvciB0aGUgdmFsdWUgb2YgdGhlIGBmbGFnYCBhcmd1bWVudC5cbiAgICAgLSB2YWx1ZSAoc3RyaW5nKSBjbGFzcyBuYW1lIG9yIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzXG4gICAgIC0gZmxhZyAoYm9vbGVhbikgdmFsdWUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGNsYXNzIHNob3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gICAgICoqXG4gICAgID0gKEVsZW1lbnQpIG9yaWdpbmFsIGVsZW1lbnQuXG4gICAgXFwqL1xuICAgIGVscHJvdG8udG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAodmFsdWUsIGZsYWcpIHtcbiAgICAgICAgaWYgKGZsYWcgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRDbGFzcyh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZUNsYXNzKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xhc3NlcyA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChyZ05vdFNwYWNlKSB8fCBbXSxcbiAgICAgICAgICAgIGVsZW0gPSB0aGlzLm5vZGUsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5iYXNlVmFsLFxuICAgICAgICAgICAgY3VyQ2xhc3NlcyA9IGNsYXNzTmFtZS5tYXRjaChyZ05vdFNwYWNlKSB8fCBbXSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBwb3MsXG4gICAgICAgICAgICBjbGF6eixcbiAgICAgICAgICAgIGZpbmFsVmFsdWU7XG4gICAgICAgIGogPSAwO1xuICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xuICAgICAgICAgICAgcG9zID0gY3VyQ2xhc3Nlcy5pbmRleE9mKGNsYXp6KTtcbiAgICAgICAgICAgIGlmICh+cG9zKSB7XG4gICAgICAgICAgICAgICAgY3VyQ2xhc3Nlcy5zcGxpY2UocG9zLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyQ2xhc3Nlcy5wdXNoKGNsYXp6KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpbmFsVmFsdWUgPSBjdXJDbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgICBpZiAoY2xhc3NOYW1lICE9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lLmJhc2VWYWwgPSBmaW5hbFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59KTtcblxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuU25hcC5wbHVnaW4oZnVuY3Rpb24gKFNuYXAsIEVsZW1lbnQsIFBhcGVyLCBnbG9iLCBGcmFnbWVudCkge1xuICAgIHZhciBvcGVyYXRvcnMgPSB7XG4gICAgICAgICAgICBcIitcIjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggKyB5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIi1cIjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggLSB5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIi9cIjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggLyB5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIipcIjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHggKiB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgU3RyID0gU3RyaW5nLFxuICAgICAgICByZVVuaXQgPSAvW2Etel0rJC9pLFxuICAgICAgICByZUFkZG9uID0gL15cXHMqKFsrXFwtXFwvKl0pXFxzKj1cXHMqKFtcXGQuZUUrXFwtXSspXFxzKihbXlxcZFxcc10rKT9cXHMqJC87XG4gICAgZnVuY3Rpb24gZ2V0TnVtYmVyKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRVbml0KHVuaXQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiArdmFsLnRvRml4ZWQoMykgKyB1bml0O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0clwiLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBwbHVzID0gU3RyKHZhbCkubWF0Y2gocmVBZGRvbik7XG4gICAgICAgIGlmIChwbHVzKSB7XG4gICAgICAgICAgICB2YXIgZXZudCA9IGV2ZS5udCgpLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBldm50LnN1YnN0cmluZyhldm50Lmxhc3RJbmRleE9mKFwiLlwiKSArIDEpLFxuICAgICAgICAgICAgICAgIGEgPSB0aGlzLmF0dHIobmFtZSksXG4gICAgICAgICAgICAgICAgYXRyID0ge307XG4gICAgICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICAgICAgdmFyIHVuaXQgPSBwbHVzWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgYVVuaXQgPSBhLm1hdGNoKHJlVW5pdCksXG4gICAgICAgICAgICAgICAgb3AgPSBvcGVyYXRvcnNbcGx1c1sxXV07XG4gICAgICAgICAgICBpZiAoYVVuaXQgJiYgYVVuaXQgPT0gdW5pdCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IG9wKHBhcnNlRmxvYXQoYSksICtwbHVzWzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYSA9IHRoaXMuYXNQWChuYW1lKTtcbiAgICAgICAgICAgICAgICB2YWwgPSBvcCh0aGlzLmFzUFgobmFtZSksIHRoaXMuYXNQWChuYW1lLCBwbHVzWzJdICsgdW5pdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKGEpIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHJbbmFtZV0gPSB2YWw7XG4gICAgICAgICAgICB0aGlzLmF0dHIoYXRyKTtcbiAgICAgICAgfVxuICAgIH0pKC0xMCk7XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmVxdWFsXCIsIGZ1bmN0aW9uIChuYW1lLCBiKSB7XG4gICAgICAgIHZhciBBLCBCLCBhID0gU3RyKHRoaXMuYXR0cihuYW1lKSB8fCBcIlwiKSxcbiAgICAgICAgICAgIGVsID0gdGhpcyxcbiAgICAgICAgICAgIGJwbHVzID0gU3RyKGIpLm1hdGNoKHJlQWRkb24pO1xuICAgICAgICBpZiAoYnBsdXMpIHtcbiAgICAgICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgICAgICB2YXIgdW5pdCA9IGJwbHVzWzNdIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgYVVuaXQgPSBhLm1hdGNoKHJlVW5pdCksXG4gICAgICAgICAgICAgICAgb3AgPSBvcGVyYXRvcnNbYnBsdXNbMV1dO1xuICAgICAgICAgICAgaWYgKGFVbml0ICYmIGFVbml0ID09IHVuaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBwYXJzZUZsb2F0KGEpLFxuICAgICAgICAgICAgICAgICAgICB0bzogb3AocGFyc2VGbG9hdChhKSwgK2JwbHVzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgZjogZ2V0VW5pdChhVW5pdClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhID0gdGhpcy5hc1BYKG5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGEsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBvcChhLCB0aGlzLmFzUFgobmFtZSwgYnBsdXNbMl0gKyB1bml0KSksXG4gICAgICAgICAgICAgICAgICAgIGY6IGdldE51bWJlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSgtMTApO1xufSk7XG4vLyBDb3B5cmlnaHQgKGMpIDIwMTMgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vIFxuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLyBcbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5TbmFwLnBsdWdpbihmdW5jdGlvbiAoU25hcCwgRWxlbWVudCwgUGFwZXIsIGdsb2IsIEZyYWdtZW50KSB7XG4gICAgdmFyIHByb3RvID0gUGFwZXIucHJvdG90eXBlLFxuICAgICAgICBpcyA9IFNuYXAuaXM7XG4gICAgLypcXFxuICAgICAqIFBhcGVyLnJlY3RcbiAgICAgWyBtZXRob2QgXVxuICAgICAqXG4gICAgICogRHJhd3MgYSByZWN0YW5nbGVcbiAgICAgKipcbiAgICAgLSB4IChudW1iZXIpIHggY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyXG4gICAgIC0geSAobnVtYmVyKSB5IGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lclxuICAgICAtIHdpZHRoIChudW1iZXIpIHdpZHRoXG4gICAgIC0gaGVpZ2h0IChudW1iZXIpIGhlaWdodFxuICAgICAtIHJ4IChudW1iZXIpICNvcHRpb25hbCBob3Jpem9udGFsIHJhZGl1cyBmb3Igcm91bmRlZCBjb3JuZXJzLCBkZWZhdWx0IGlzIDBcbiAgICAgLSByeSAobnVtYmVyKSAjb3B0aW9uYWwgdmVydGljYWwgcmFkaXVzIGZvciByb3VuZGVkIGNvcm5lcnMsIGRlZmF1bHQgaXMgcnggb3IgMFxuICAgICA9IChvYmplY3QpIHRoZSBgcmVjdGAgZWxlbWVudFxuICAgICAqKlxuICAgICA+IFVzYWdlXG4gICAgIHwgLy8gcmVndWxhciByZWN0YW5nbGVcbiAgICAgfCB2YXIgYyA9IHBhcGVyLnJlY3QoMTAsIDEwLCA1MCwgNTApO1xuICAgICB8IC8vIHJlY3RhbmdsZSB3aXRoIHJvdW5kZWQgY29ybmVyc1xuICAgICB8IHZhciBjID0gcGFwZXIucmVjdCg0MCwgNDAsIDUwLCA1MCwgMTApO1xuICAgIFxcKi9cbiAgICBwcm90by5yZWN0ID0gZnVuY3Rpb24gKHgsIHksIHcsIGgsIHJ4LCByeSkge1xuICAgICAgICB2YXIgYXR0cjtcbiAgICAgICAgaWYgKHJ5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJ5ID0gcng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzKHgsIFwib2JqZWN0XCIpICYmIHggPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgYXR0ciA9IHg7XG4gICAgICAgIH0gZWxzZSBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyID0ge1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocnggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHIucnggPSByeDtcbiAgICAgICAgICAgICAgICBhdHRyLnJ5ID0gcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJyZWN0XCIsIGF0dHIpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFBhcGVyLmNpcmNsZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogRHJhd3MgYSBjaXJjbGVcbiAgICAgKipcbiAgICAgLSB4IChudW1iZXIpIHggY29vcmRpbmF0ZSBvZiB0aGUgY2VudHJlXG4gICAgIC0geSAobnVtYmVyKSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNlbnRyZVxuICAgICAtIHIgKG51bWJlcikgcmFkaXVzXG4gICAgID0gKG9iamVjdCkgdGhlIGBjaXJjbGVgIGVsZW1lbnRcbiAgICAgKipcbiAgICAgPiBVc2FnZVxuICAgICB8IHZhciBjID0gcGFwZXIuY2lyY2xlKDUwLCA1MCwgNDApO1xuICAgIFxcKi9cbiAgICBwcm90by5jaXJjbGUgPSBmdW5jdGlvbiAoY3gsIGN5LCByKSB7XG4gICAgICAgIHZhciBhdHRyO1xuICAgICAgICBpZiAoaXMoY3gsIFwib2JqZWN0XCIpICYmIGN4ID09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICAgICAgICAgIGF0dHIgPSBjeDtcbiAgICAgICAgfSBlbHNlIGlmIChjeCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyID0ge1xuICAgICAgICAgICAgICAgIGN4OiBjeCxcbiAgICAgICAgICAgICAgICBjeTogY3ksXG4gICAgICAgICAgICAgICAgcjogclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbChcImNpcmNsZVwiLCBhdHRyKTtcbiAgICB9O1xuXG4gICAgdmFyIHByZWxvYWQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBvbmVycm9yKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3JjLCBmKSB7XG4gICAgICAgICAgICB2YXIgaW1nID0gZ2xvYi5kb2MuY3JlYXRlRWxlbWVudChcImltZ1wiKSxcbiAgICAgICAgICAgICAgICBib2R5ID0gZ2xvYi5kb2MuYm9keTtcbiAgICAgICAgICAgIGltZy5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTk5ZW07dG9wOi05OTk5ZW1cIjtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZi5jYWxsKGltZyk7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGltZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgfTtcbiAgICB9KCkpO1xuXG4gICAgLypcXFxuICAgICAqIFBhcGVyLmltYWdlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBQbGFjZXMgYW4gaW1hZ2Ugb24gdGhlIHN1cmZhY2VcbiAgICAgKipcbiAgICAgLSBzcmMgKHN0cmluZykgVVJJIG9mIHRoZSBzb3VyY2UgaW1hZ2VcbiAgICAgLSB4IChudW1iZXIpIHggb2Zmc2V0IHBvc2l0aW9uXG4gICAgIC0geSAobnVtYmVyKSB5IG9mZnNldCBwb3NpdGlvblxuICAgICAtIHdpZHRoIChudW1iZXIpIHdpZHRoIG9mIHRoZSBpbWFnZVxuICAgICAtIGhlaWdodCAobnVtYmVyKSBoZWlnaHQgb2YgdGhlIGltYWdlXG4gICAgID0gKG9iamVjdCkgdGhlIGBpbWFnZWAgZWxlbWVudFxuICAgICAqIG9yXG4gICAgID0gKG9iamVjdCkgU25hcCBlbGVtZW50IG9iamVjdCB3aXRoIHR5cGUgYGltYWdlYFxuICAgICAqKlxuICAgICA+IFVzYWdlXG4gICAgIHwgdmFyIGMgPSBwYXBlci5pbWFnZShcImFwcGxlLnBuZ1wiLCAxMCwgMTAsIDgwLCA4MCk7XG4gICAgXFwqL1xuICAgIHByb3RvLmltYWdlID0gZnVuY3Rpb24gKHNyYywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLmVsKFwiaW1hZ2VcIik7XG4gICAgICAgIGlmIChpcyhzcmMsIFwib2JqZWN0XCIpICYmIFwic3JjXCIgaW4gc3JjKSB7XG4gICAgICAgICAgICBlbC5hdHRyKHNyYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3JjICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBzZXQgPSB7XG4gICAgICAgICAgICAgICAgXCJ4bGluazpocmVmXCI6IHNyYyxcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcIm5vbmVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0LnggPSB4O1xuICAgICAgICAgICAgICAgIHNldC55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aWR0aCAhPSBudWxsICYmIGhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0LndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgc2V0LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJlbG9hZChzcmMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgU25hcC5fLiQoZWwubm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMub2Zmc2V0SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU25hcC5fLiQoZWwubm9kZSwgc2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogUGFwZXIuZWxsaXBzZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogRHJhd3MgYW4gZWxsaXBzZVxuICAgICAqKlxuICAgICAtIHggKG51bWJlcikgeCBjb29yZGluYXRlIG9mIHRoZSBjZW50cmVcbiAgICAgLSB5IChudW1iZXIpIHkgY29vcmRpbmF0ZSBvZiB0aGUgY2VudHJlXG4gICAgIC0gcnggKG51bWJlcikgaG9yaXpvbnRhbCByYWRpdXNcbiAgICAgLSByeSAobnVtYmVyKSB2ZXJ0aWNhbCByYWRpdXNcbiAgICAgPSAob2JqZWN0KSB0aGUgYGVsbGlwc2VgIGVsZW1lbnRcbiAgICAgKipcbiAgICAgPiBVc2FnZVxuICAgICB8IHZhciBjID0gcGFwZXIuZWxsaXBzZSg1MCwgNTAsIDQwLCAyMCk7XG4gICAgXFwqL1xuICAgIHByb3RvLmVsbGlwc2UgPSBmdW5jdGlvbiAoY3gsIGN5LCByeCwgcnkpIHtcbiAgICAgICAgdmFyIGF0dHI7XG4gICAgICAgIGlmIChpcyhjeCwgXCJvYmplY3RcIikgJiYgY3ggPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgICAgYXR0ciA9IGN4O1xuICAgICAgICB9IGVsc2UgaWYgKGN4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHIgPXtcbiAgICAgICAgICAgICAgICBjeDogY3gsXG4gICAgICAgICAgICAgICAgY3k6IGN5LFxuICAgICAgICAgICAgICAgIHJ4OiByeCxcbiAgICAgICAgICAgICAgICByeTogcnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJlbGxpcHNlXCIsIGF0dHIpO1xuICAgIH07XG4gICAgLy8gU0lFUlJBIFBhcGVyLnBhdGgoKTogVW5jbGVhciBmcm9tIHRoZSBsaW5rIHdoYXQgYSBDYXRtdWxsLVJvbSBjdXJ2ZXRvIGlzLCBhbmQgd2h5IGl0IHdvdWxkIG1ha2UgbGlmZSBhbnkgZWFzaWVyLlxuICAgIC8qXFxcbiAgICAgKiBQYXBlci5wYXRoXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgYDxwYXRoPmAgZWxlbWVudCB1c2luZyB0aGUgZ2l2ZW4gc3RyaW5nIGFzIHRoZSBwYXRoJ3MgZGVmaW5pdGlvblxuICAgICAtIHBhdGhTdHJpbmcgKHN0cmluZykgI29wdGlvbmFsIHBhdGggc3RyaW5nIGluIFNWRyBmb3JtYXRcbiAgICAgKiBQYXRoIHN0cmluZyBjb25zaXN0cyBvZiBvbmUtbGV0dGVyIGNvbW1hbmRzLCBmb2xsb3dlZCBieSBjb21tYSBzZXByYXJhdGVkIGFyZ3VtZW50cyBpbiBudW1lcmljYWwgZm9ybS4gRXhhbXBsZTpcbiAgICAgfCBcIk0xMCwyMEwzMCw0MFwiXG4gICAgICogVGhpcyBleGFtcGxlIGZlYXR1cmVzIHR3byBjb21tYW5kczogYE1gLCB3aXRoIGFyZ3VtZW50cyBgKDEwLCAyMClgIGFuZCBgTGAgd2l0aCBhcmd1bWVudHMgYCgzMCwgNDApYC4gVXBwZXJjYXNlIGxldHRlciBjb21tYW5kcyBleHByZXNzIGNvb3JkaW5hdGVzIGluIGFic29sdXRlIHRlcm1zLCB3aGlsZSBsb3dlcmNhc2UgY29tbWFuZHMgZXhwcmVzcyB0aGVtIGluIHJlbGF0aXZlIHRlcm1zIGZyb20gdGhlIG1vc3QgcmVjZW50bHkgZGVjbGFyZWQgY29vcmRpbmF0ZXMuXG4gICAgICpcbiAgICAgIyA8cD5IZXJlIGlzIHNob3J0IGxpc3Qgb2YgY29tbWFuZHMgYXZhaWxhYmxlLCBmb3IgbW9yZSBkZXRhaWxzIHNlZSA8YSBocmVmPVwiaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL3BhdGhzLmh0bWwjUGF0aERhdGFcIiB0aXRsZT1cIkRldGFpbHMgb2YgYSBwYXRoJ3MgZGF0YSBhdHRyaWJ1dGUncyBmb3JtYXQgYXJlIGRlc2NyaWJlZCBpbiB0aGUgU1ZHIHNwZWNpZmljYXRpb24uXCI+U1ZHIHBhdGggc3RyaW5nIGZvcm1hdDwvYT4gb3IgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL1NWRy9UdXRvcmlhbC9QYXRoc1wiPmFydGljbGUgYWJvdXQgcGF0aCBzdHJpbmdzIGF0IE1ETjwvYT4uPC9wPlxuICAgICAjIDx0YWJsZT48dGhlYWQ+PHRyPjx0aD5Db21tYW5kPC90aD48dGg+TmFtZTwvdGg+PHRoPlBhcmFtZXRlcnM8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+XG4gICAgICMgPHRyPjx0ZD5NPC90ZD48dGQ+bW92ZXRvPC90ZD48dGQ+KHggeSkrPC90ZD48L3RyPlxuICAgICAjIDx0cj48dGQ+WjwvdGQ+PHRkPmNsb3NlcGF0aDwvdGQ+PHRkPihub25lKTwvdGQ+PC90cj5cbiAgICAgIyA8dHI+PHRkPkw8L3RkPjx0ZD5saW5ldG88L3RkPjx0ZD4oeCB5KSs8L3RkPjwvdHI+XG4gICAgICMgPHRyPjx0ZD5IPC90ZD48dGQ+aG9yaXpvbnRhbCBsaW5ldG88L3RkPjx0ZD54KzwvdGQ+PC90cj5cbiAgICAgIyA8dHI+PHRkPlY8L3RkPjx0ZD52ZXJ0aWNhbCBsaW5ldG88L3RkPjx0ZD55KzwvdGQ+PC90cj5cbiAgICAgIyA8dHI+PHRkPkM8L3RkPjx0ZD5jdXJ2ZXRvPC90ZD48dGQ+KHgxIHkxIHgyIHkyIHggeSkrPC90ZD48L3RyPlxuICAgICAjIDx0cj48dGQ+UzwvdGQ+PHRkPnNtb290aCBjdXJ2ZXRvPC90ZD48dGQ+KHgyIHkyIHggeSkrPC90ZD48L3RyPlxuICAgICAjIDx0cj48dGQ+UTwvdGQ+PHRkPnF1YWRyYXRpYyBCw6l6aWVyIGN1cnZldG88L3RkPjx0ZD4oeDEgeTEgeCB5KSs8L3RkPjwvdHI+XG4gICAgICMgPHRyPjx0ZD5UPC90ZD48dGQ+c21vb3RoIHF1YWRyYXRpYyBCw6l6aWVyIGN1cnZldG88L3RkPjx0ZD4oeCB5KSs8L3RkPjwvdHI+XG4gICAgICMgPHRyPjx0ZD5BPC90ZD48dGQ+ZWxsaXB0aWNhbCBhcmM8L3RkPjx0ZD4ocnggcnkgeC1heGlzLXJvdGF0aW9uIGxhcmdlLWFyYy1mbGFnIHN3ZWVwLWZsYWcgeCB5KSs8L3RkPjwvdHI+XG4gICAgICMgPHRyPjx0ZD5SPC90ZD48dGQ+PGEgaHJlZj1cImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2F0bXVsbOKAk1JvbV9zcGxpbmUjQ2F0bXVsbC5FMi44MC45M1JvbV9zcGxpbmVcIj5DYXRtdWxsLVJvbSBjdXJ2ZXRvPC9hPio8L3RkPjx0ZD54MSB5MSAoeCB5KSs8L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPlxuICAgICAqICogX0NhdG11bGwtUm9tIGN1cnZldG9fIGlzIGEgbm90IHN0YW5kYXJkIFNWRyBjb21tYW5kIGFuZCBhZGRlZCB0byBtYWtlIGxpZmUgZWFzaWVyLlxuICAgICAqIE5vdGU6IHRoZXJlIGlzIGEgc3BlY2lhbCBjYXNlIHdoZW4gYSBwYXRoIGNvbnNpc3RzIG9mIG9ubHkgdGhyZWUgY29tbWFuZHM6IGBNMTAsMTBS4oCmemAuIEluIHRoaXMgY2FzZSB0aGUgcGF0aCBjb25uZWN0cyBiYWNrIHRvIGl0cyBzdGFydGluZyBwb2ludC5cbiAgICAgPiBVc2FnZVxuICAgICB8IHZhciBjID0gcGFwZXIucGF0aChcIk0xMCAxMEw5MCA5MFwiKTtcbiAgICAgfCAvLyBkcmF3IGEgZGlhZ29uYWwgbGluZTpcbiAgICAgfCAvLyBtb3ZlIHRvIDEwLDEwLCBsaW5lIHRvIDkwLDkwXG4gICAgXFwqL1xuICAgIHByb3RvLnBhdGggPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICB2YXIgYXR0cjtcbiAgICAgICAgaWYgKGlzKGQsIFwib2JqZWN0XCIpICYmICFpcyhkLCBcImFycmF5XCIpKSB7XG4gICAgICAgICAgICBhdHRyID0gZDtcbiAgICAgICAgfSBlbHNlIGlmIChkKSB7XG4gICAgICAgICAgICBhdHRyID0ge2Q6IGR9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsKFwicGF0aFwiLCBhdHRyKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5nXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgZ3JvdXAgZWxlbWVudFxuICAgICAqKlxuICAgICAtIHZhcmFyZ3MgKOKApikgI29wdGlvbmFsIGVsZW1lbnRzIHRvIG5lc3Qgd2l0aGluIHRoZSBncm91cFxuICAgICA9IChvYmplY3QpIHRoZSBgZ2AgZWxlbWVudFxuICAgICAqKlxuICAgICA+IFVzYWdlXG4gICAgIHwgdmFyIGMxID0gcGFwZXIuY2lyY2xlKCksXG4gICAgIHwgICAgIGMyID0gcGFwZXIucmVjdCgpLFxuICAgICB8ICAgICBnID0gcGFwZXIuZyhjMiwgYzEpOyAvLyBub3RlIHRoYXQgdGhlIG9yZGVyIG9mIGVsZW1lbnRzIGlzIGRpZmZlcmVudFxuICAgICAqIG9yXG4gICAgIHwgdmFyIGMxID0gcGFwZXIuY2lyY2xlKCksXG4gICAgIHwgICAgIGMyID0gcGFwZXIucmVjdCgpLFxuICAgICB8ICAgICBnID0gcGFwZXIuZygpO1xuICAgICB8IGcuYWRkKGMyLCBjMSk7XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5ncm91cFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogU2VlIEBQYXBlci5nXG4gICAgXFwqL1xuICAgIHByb3RvLmdyb3VwID0gcHJvdG8uZyA9IGZ1bmN0aW9uIChmaXJzdCkge1xuICAgICAgICB2YXIgYXR0cixcbiAgICAgICAgICAgIGVsID0gdGhpcy5lbChcImdcIik7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEgJiYgZmlyc3QgJiYgIWZpcnN0LnR5cGUpIHtcbiAgICAgICAgICAgIGVsLmF0dHIoZmlyc3QpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsLmFkZChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogUGFwZXIuc3ZnXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBDcmVhdGVzIGEgbmVzdGVkIFNWRyBlbGVtZW50LlxuICAgICAtIHggKG51bWJlcikgQG9wdGlvbmFsIFggb2YgdGhlIGVsZW1lbnRcbiAgICAgLSB5IChudW1iZXIpIEBvcHRpb25hbCBZIG9mIHRoZSBlbGVtZW50XG4gICAgIC0gd2lkdGggKG51bWJlcikgQG9wdGlvbmFsIHdpZHRoIG9mIHRoZSBlbGVtZW50XG4gICAgIC0gaGVpZ2h0IChudW1iZXIpIEBvcHRpb25hbCBoZWlnaHQgb2YgdGhlIGVsZW1lbnRcbiAgICAgLSB2YnggKG51bWJlcikgQG9wdGlvbmFsIHZpZXdib3ggWFxuICAgICAtIHZieSAobnVtYmVyKSBAb3B0aW9uYWwgdmlld2JveCBZXG4gICAgIC0gdmJ3IChudW1iZXIpIEBvcHRpb25hbCB2aWV3Ym94IHdpZHRoXG4gICAgIC0gdmJoIChudW1iZXIpIEBvcHRpb25hbCB2aWV3Ym94IGhlaWdodFxuICAgICAqKlxuICAgICA9IChvYmplY3QpIHRoZSBgc3ZnYCBlbGVtZW50XG4gICAgICoqXG4gICAgXFwqL1xuICAgIHByb3RvLnN2ZyA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCB2YngsIHZieSwgdmJ3LCB2YmgpIHtcbiAgICAgICAgdmFyIGF0dHJzID0ge307XG4gICAgICAgIGlmIChpcyh4LCBcIm9iamVjdFwiKSAmJiB5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHJzID0geDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRycy54ID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRycy55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YnggIT0gbnVsbCAmJiB2YnkgIT0gbnVsbCAmJiB2YncgIT0gbnVsbCAmJiB2YmggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHJzLnZpZXdCb3ggPSBbdmJ4LCB2YnksIHZidywgdmJoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbChcInN2Z1wiLCBhdHRycyk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogUGFwZXIubWFza1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogRXF1aXZhbGVudCBpbiBiZWhhdmlvdXIgdG8gQFBhcGVyLmcsIGV4Y2VwdCBpdOKAmXMgYSBtYXNrLlxuICAgICAqKlxuICAgICA9IChvYmplY3QpIHRoZSBgbWFza2AgZWxlbWVudFxuICAgICAqKlxuICAgIFxcKi9cbiAgICBwcm90by5tYXNrID0gZnVuY3Rpb24gKGZpcnN0KSB7XG4gICAgICAgIHZhciBhdHRyLFxuICAgICAgICAgICAgZWwgPSB0aGlzLmVsKFwibWFza1wiKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiBmaXJzdCAmJiAhZmlyc3QudHlwZSkge1xuICAgICAgICAgICAgZWwuYXR0cihmaXJzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZWwuYWRkKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5wdHJuXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBFcXVpdmFsZW50IGluIGJlaGF2aW91ciB0byBAUGFwZXIuZywgZXhjZXB0IGl04oCZcyBhIHBhdHRlcm4uXG4gICAgIC0geCAobnVtYmVyKSBAb3B0aW9uYWwgWCBvZiB0aGUgZWxlbWVudFxuICAgICAtIHkgKG51bWJlcikgQG9wdGlvbmFsIFkgb2YgdGhlIGVsZW1lbnRcbiAgICAgLSB3aWR0aCAobnVtYmVyKSBAb3B0aW9uYWwgd2lkdGggb2YgdGhlIGVsZW1lbnRcbiAgICAgLSBoZWlnaHQgKG51bWJlcikgQG9wdGlvbmFsIGhlaWdodCBvZiB0aGUgZWxlbWVudFxuICAgICAtIHZieCAobnVtYmVyKSBAb3B0aW9uYWwgdmlld2JveCBYXG4gICAgIC0gdmJ5IChudW1iZXIpIEBvcHRpb25hbCB2aWV3Ym94IFlcbiAgICAgLSB2YncgKG51bWJlcikgQG9wdGlvbmFsIHZpZXdib3ggd2lkdGhcbiAgICAgLSB2YmggKG51bWJlcikgQG9wdGlvbmFsIHZpZXdib3ggaGVpZ2h0XG4gICAgICoqXG4gICAgID0gKG9iamVjdCkgdGhlIGBwYXR0ZXJuYCBlbGVtZW50XG4gICAgICoqXG4gICAgXFwqL1xuICAgIHByb3RvLnB0cm4gPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgdngsIHZ5LCB2dywgdmgpIHtcbiAgICAgICAgaWYgKGlzKHgsIFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRyID0ge3BhdHRlcm5Vbml0czogXCJ1c2VyU3BhY2VPblVzZVwifTtcbiAgICAgICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICAgICAgYXR0ci54ID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICAgICAgYXR0ci55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0ci53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodnggIT0gbnVsbCAmJiB2eSAhPSBudWxsICYmIHZ3ICE9IG51bGwgJiYgdmggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF0dHIudmlld0JveCA9IFt2eCwgdnksIHZ3LCB2aF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF0dHIudmlld0JveCA9IFt4IHx8IDAsIHkgfHwgMCwgd2lkdGggfHwgMCwgaGVpZ2h0IHx8IDBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsKFwicGF0dGVyblwiLCBhdHRyKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci51c2VcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIENyZWF0ZXMgYSA8dXNlPiBlbGVtZW50LlxuICAgICAtIGlkIChzdHJpbmcpIEBvcHRpb25hbCBpZCBvZiBlbGVtZW50IHRvIGxpbmtcbiAgICAgKiBvclxuICAgICAtIGlkIChFbGVtZW50KSBAb3B0aW9uYWwgZWxlbWVudCB0byBsaW5rXG4gICAgICoqXG4gICAgID0gKG9iamVjdCkgdGhlIGB1c2VgIGVsZW1lbnRcbiAgICAgKipcbiAgICBcXCovXG4gICAgcHJvdG8udXNlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaWQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpZC5hdHRyKFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWQuYXR0cih7aWQ6IFNuYXAuXy5pZChpZCl9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWQgPSBpZC5hdHRyKFwiaWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoU3RyaW5nKGlkKS5jaGFyQXQoKSA9PSBcIiNcIikge1xuICAgICAgICAgICAgICAgIGlkID0gaWQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJ1c2VcIiwge1wieGxpbms6aHJlZlwiOiBcIiNcIiArIGlkfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUudXNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5zeW1ib2xcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIENyZWF0ZXMgYSA8c3ltYm9sPiBlbGVtZW50LlxuICAgICAtIHZieCAobnVtYmVyKSBAb3B0aW9uYWwgdmlld2JveCBYXG4gICAgIC0gdmJ5IChudW1iZXIpIEBvcHRpb25hbCB2aWV3Ym94IFlcbiAgICAgLSB2YncgKG51bWJlcikgQG9wdGlvbmFsIHZpZXdib3ggd2lkdGhcbiAgICAgLSB2YmggKG51bWJlcikgQG9wdGlvbmFsIHZpZXdib3ggaGVpZ2h0XG4gICAgID0gKG9iamVjdCkgdGhlIGBzeW1ib2xgIGVsZW1lbnRcbiAgICAgKipcbiAgICBcXCovXG4gICAgcHJvdG8uc3ltYm9sID0gZnVuY3Rpb24gKHZ4LCB2eSwgdncsIHZoKSB7XG4gICAgICAgIHZhciBhdHRyID0ge307XG4gICAgICAgIGlmICh2eCAhPSBudWxsICYmIHZ5ICE9IG51bGwgJiYgdncgIT0gbnVsbCAmJiB2aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyLnZpZXdCb3ggPSBbdngsIHZ5LCB2dywgdmhdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJzeW1ib2xcIiwgYXR0cik7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogUGFwZXIudGV4dFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogRHJhd3MgYSB0ZXh0IHN0cmluZ1xuICAgICAqKlxuICAgICAtIHggKG51bWJlcikgeCBjb29yZGluYXRlIHBvc2l0aW9uXG4gICAgIC0geSAobnVtYmVyKSB5IGNvb3JkaW5hdGUgcG9zaXRpb25cbiAgICAgLSB0ZXh0IChzdHJpbmd8YXJyYXkpIFRoZSB0ZXh0IHN0cmluZyB0byBkcmF3IG9yIGFycmF5IG9mIHN0cmluZ3MgdG8gbmVzdCB3aXRoaW4gc2VwYXJhdGUgYDx0c3Bhbj5gIGVsZW1lbnRzXG4gICAgID0gKG9iamVjdCkgdGhlIGB0ZXh0YCBlbGVtZW50XG4gICAgICoqXG4gICAgID4gVXNhZ2VcbiAgICAgfCB2YXIgdDEgPSBwYXBlci50ZXh0KDUwLCA1MCwgXCJTbmFwXCIpO1xuICAgICB8IHZhciB0MiA9IHBhcGVyLnRleHQoNTAsIDUwLCBbXCJTXCIsXCJuXCIsXCJhXCIsXCJwXCJdKTtcbiAgICAgfCAvLyBUZXh0IHBhdGggdXNhZ2VcbiAgICAgfCB0MS5hdHRyKHt0ZXh0cGF0aDogXCJNMTAsMTBMMTAwLDEwMFwifSk7XG4gICAgIHwgLy8gb3JcbiAgICAgfCB2YXIgcHRoID0gcGFwZXIucGF0aChcIk0xMCwxMEwxMDAsMTAwXCIpO1xuICAgICB8IHQxLmF0dHIoe3RleHRwYXRoOiBwdGh9KTtcbiAgICBcXCovXG4gICAgcHJvdG8udGV4dCA9IGZ1bmN0aW9uICh4LCB5LCB0ZXh0KSB7XG4gICAgICAgIHZhciBhdHRyID0ge307XG4gICAgICAgIGlmIChpcyh4LCBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgYXR0ciA9IHg7XG4gICAgICAgIH0gZWxzZSBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyID0ge1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0IHx8IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJ0ZXh0XCIsIGF0dHIpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFBhcGVyLmxpbmVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIERyYXdzIGEgbGluZVxuICAgICAqKlxuICAgICAtIHgxIChudW1iZXIpIHggY29vcmRpbmF0ZSBwb3NpdGlvbiBvZiB0aGUgc3RhcnRcbiAgICAgLSB5MSAobnVtYmVyKSB5IGNvb3JkaW5hdGUgcG9zaXRpb24gb2YgdGhlIHN0YXJ0XG4gICAgIC0geDIgKG51bWJlcikgeCBjb29yZGluYXRlIHBvc2l0aW9uIG9mIHRoZSBlbmRcbiAgICAgLSB5MiAobnVtYmVyKSB5IGNvb3JkaW5hdGUgcG9zaXRpb24gb2YgdGhlIGVuZFxuICAgICA9IChvYmplY3QpIHRoZSBgbGluZWAgZWxlbWVudFxuICAgICAqKlxuICAgICA+IFVzYWdlXG4gICAgIHwgdmFyIHQxID0gcGFwZXIubGluZSg1MCwgNTAsIDEwMCwgMTAwKTtcbiAgICBcXCovXG4gICAgcHJvdG8ubGluZSA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICB2YXIgYXR0ciA9IHt9O1xuICAgICAgICBpZiAoaXMoeDEsIFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICBhdHRyID0geDE7XG4gICAgICAgIH0gZWxzZSBpZiAoeDEgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0ciA9IHtcbiAgICAgICAgICAgICAgICB4MTogeDEsXG4gICAgICAgICAgICAgICAgeDI6IHgyLFxuICAgICAgICAgICAgICAgIHkxOiB5MSxcbiAgICAgICAgICAgICAgICB5MjogeTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJsaW5lXCIsIGF0dHIpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFBhcGVyLnBvbHlsaW5lXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBEcmF3cyBhIHBvbHlsaW5lXG4gICAgICoqXG4gICAgIC0gcG9pbnRzIChhcnJheSkgYXJyYXkgb2YgcG9pbnRzXG4gICAgICogb3JcbiAgICAgLSB2YXJhcmdzICjigKYpIHBvaW50c1xuICAgICA9IChvYmplY3QpIHRoZSBgcG9seWxpbmVgIGVsZW1lbnRcbiAgICAgKipcbiAgICAgPiBVc2FnZVxuICAgICB8IHZhciBwMSA9IHBhcGVyLnBvbHlsaW5lKFsxMCwgMTAsIDEwMCwgMTAwXSk7XG4gICAgIHwgdmFyIHAyID0gcGFwZXIucG9seWxpbmUoMTAsIDEwLCAxMDAsIDEwMCk7XG4gICAgXFwqL1xuICAgIHByb3RvLnBvbHlsaW5lID0gZnVuY3Rpb24gKHBvaW50cykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHBvaW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHIgPSB7fTtcbiAgICAgICAgaWYgKGlzKHBvaW50cywgXCJvYmplY3RcIikgJiYgIWlzKHBvaW50cywgXCJhcnJheVwiKSkge1xuICAgICAgICAgICAgYXR0ciA9IHBvaW50cztcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0ciA9IHtwb2ludHM6IHBvaW50c307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWwoXCJwb2x5bGluZVwiLCBhdHRyKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5wb2x5Z29uXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBEcmF3cyBhIHBvbHlnb24uIFNlZSBAUGFwZXIucG9seWxpbmVcbiAgICBcXCovXG4gICAgcHJvdG8ucG9seWdvbiA9IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwb2ludHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyID0ge307XG4gICAgICAgIGlmIChpcyhwb2ludHMsIFwib2JqZWN0XCIpICYmICFpcyhwb2ludHMsIFwiYXJyYXlcIikpIHtcbiAgICAgICAgICAgIGF0dHIgPSBwb2ludHM7XG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHIgPSB7cG9pbnRzOiBwb2ludHN9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsKFwicG9seWdvblwiLCBhdHRyKTtcbiAgICB9O1xuICAgIC8vIGdyYWRpZW50c1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkID0gU25hcC5fLiQ7XG4gICAgICAgIC8vIGdyYWRpZW50cycgaGVscGVyc1xuICAgICAgICBmdW5jdGlvbiBHc3RvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBbGwoXCJzdG9wXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIEdhZGRTdG9wKGNvbG9yLCBvZmZzZXQpIHtcbiAgICAgICAgICAgIHZhciBzdG9wID0gJChcInN0b3BcIiksXG4gICAgICAgICAgICAgICAgYXR0ciA9IHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiArb2Zmc2V0ICsgXCIlXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29sb3IgPSBTbmFwLmNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIGF0dHJbXCJzdG9wLWNvbG9yXCJdID0gY29sb3IuaGV4O1xuICAgICAgICAgICAgaWYgKGNvbG9yLm9wYWNpdHkgPCAxKSB7XG4gICAgICAgICAgICAgICAgYXR0cltcInN0b3Atb3BhY2l0eVwiXSA9IGNvbG9yLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHN0b3AsIGF0dHIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHN0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gR2dldEJCb3goKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwibGluZWFyR3JhZGllbnRcIikge1xuICAgICAgICAgICAgICAgIHZhciB4MSA9ICQodGhpcy5ub2RlLCBcIngxXCIpIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIHgyID0gJCh0aGlzLm5vZGUsIFwieDJcIikgfHwgMSxcbiAgICAgICAgICAgICAgICAgICAgeTEgPSAkKHRoaXMubm9kZSwgXCJ5MVwiKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICB5MiA9ICQodGhpcy5ub2RlLCBcInkyXCIpIHx8IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNuYXAuXy5ib3goeDEsIHkxLCBtYXRoLmFicyh4MiAtIHgxKSwgbWF0aC5hYnMoeTIgLSB5MSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY3ggPSB0aGlzLm5vZGUuY3ggfHwgLjUsXG4gICAgICAgICAgICAgICAgICAgIGN5ID0gdGhpcy5ub2RlLmN5IHx8IC41LFxuICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5ub2RlLnIgfHwgMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gU25hcC5fLmJveChjeCAtIHIsIGN5IC0gciwgciAqIDIsIHIgKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBncmFkaWVudChkZWZzLCBzdHIpIHtcbiAgICAgICAgICAgIHZhciBncmFkID0gZXZlKFwic25hcC51dGlsLmdyYWQucGFyc2VcIiwgbnVsbCwgc3RyKS5maXJzdERlZmluZWQoKSxcbiAgICAgICAgICAgICAgICBlbDtcbiAgICAgICAgICAgIGlmICghZ3JhZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JhZC5wYXJhbXMudW5zaGlmdChkZWZzKTtcbiAgICAgICAgICAgIGlmIChncmFkLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImxcIikge1xuICAgICAgICAgICAgICAgIGVsID0gZ3JhZGllbnRMaW5lYXIuYXBwbHkoMCwgZ3JhZC5wYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbCA9IGdyYWRpZW50UmFkaWFsLmFwcGx5KDAsIGdyYWQucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncmFkLnR5cGUgIT0gZ3JhZC50eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAkKGVsLm5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RvcHMgPSBncmFkLnN0b3BzLFxuICAgICAgICAgICAgICAgIGxlbiA9IHN0b3BzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICBmdW5jdGlvbiBzZWVkKGksIGVuZCkge1xuICAgICAgICAgICAgICAgIHZhciBzdGVwID0gKGVuZCAtIHN0YXJ0KSAvIChpIC0gaik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IGo7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcHNba10ub2Zmc2V0ID0gKygrc3RhcnQgKyBzdGVwICogKGsgLSBqKSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBlbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIGlmIChcIm9mZnNldFwiIGluIHN0b3BzW2ldKSB7XG4gICAgICAgICAgICAgICAgc2VlZChpLCBzdG9wc1tpXS5vZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcHNbbGVuXS5vZmZzZXQgPSBzdG9wc1tsZW5dLm9mZnNldCB8fCAxMDA7XG4gICAgICAgICAgICBzZWVkKGxlbiwgc3RvcHNbbGVuXS5vZmZzZXQpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzdG9wID0gc3RvcHNbaV07XG4gICAgICAgICAgICAgICAgZWwuYWRkU3RvcChzdG9wLmNvbG9yLCBzdG9wLm9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ3JhZGllbnRMaW5lYXIoZGVmcywgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IFNuYXAuXy5tYWtlKFwibGluZWFyR3JhZGllbnRcIiwgZGVmcyk7XG4gICAgICAgICAgICBlbC5zdG9wcyA9IEdzdG9wcztcbiAgICAgICAgICAgIGVsLmFkZFN0b3AgPSBHYWRkU3RvcDtcbiAgICAgICAgICAgIGVsLmdldEJCb3ggPSBHZ2V0QkJveDtcbiAgICAgICAgICAgIGlmICh4MSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJChlbC5ub2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIHgxOiB4MSxcbiAgICAgICAgICAgICAgICAgICAgeTE6IHkxLFxuICAgICAgICAgICAgICAgICAgICB4MjogeDIsXG4gICAgICAgICAgICAgICAgICAgIHkyOiB5MlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdyYWRpZW50UmFkaWFsKGRlZnMsIGN4LCBjeSwgciwgZngsIGZ5KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBTbmFwLl8ubWFrZShcInJhZGlhbEdyYWRpZW50XCIsIGRlZnMpO1xuICAgICAgICAgICAgZWwuc3RvcHMgPSBHc3RvcHM7XG4gICAgICAgICAgICBlbC5hZGRTdG9wID0gR2FkZFN0b3A7XG4gICAgICAgICAgICBlbC5nZXRCQm94ID0gR2dldEJCb3g7XG4gICAgICAgICAgICBpZiAoY3ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoZWwubm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjeDogY3gsXG4gICAgICAgICAgICAgICAgICAgIGN5OiBjeSxcbiAgICAgICAgICAgICAgICAgICAgcjogclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZ4ICE9IG51bGwgJiYgZnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoZWwubm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBmeDogZngsXG4gICAgICAgICAgICAgICAgICAgIGZ5OiBmeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogUGFwZXIuZ3JhZGllbnRcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIENyZWF0ZXMgYSBncmFkaWVudCBlbGVtZW50XG4gICAgICAgICAqKlxuICAgICAgICAgLSBncmFkaWVudCAoc3RyaW5nKSBncmFkaWVudCBkZXNjcmlwdG9yXG4gICAgICAgICA+IEdyYWRpZW50IERlc2NyaXB0b3JcbiAgICAgICAgICogVGhlIGdyYWRpZW50IGRlc2NyaXB0b3IgaXMgYW4gZXhwcmVzc2lvbiBmb3JtYXR0ZWQgYXNcbiAgICAgICAgICogZm9sbG93czogYDx0eXBlPig8Y29vcmRzPik8Y29sb3JzPmAuICBUaGUgYDx0eXBlPmAgY2FuIGJlXG4gICAgICAgICAqIGVpdGhlciBsaW5lYXIgb3IgcmFkaWFsLiAgVGhlIHVwcGVyY2FzZSBgTGAgb3IgYFJgIGxldHRlcnNcbiAgICAgICAgICogaW5kaWNhdGUgYWJzb2x1dGUgY29vcmRpbmF0ZXMgb2Zmc2V0IGZyb20gdGhlIFNWRyBzdXJmYWNlLlxuICAgICAgICAgKiBMb3dlcmNhc2UgYGxgIG9yIGByYCBsZXR0ZXJzIGluZGljYXRlIGNvb3JkaW5hdGVzXG4gICAgICAgICAqIGNhbGN1bGF0ZWQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGdyYWRpZW50IGlzXG4gICAgICAgICAqIGFwcGxpZWQuICBDb29yZGluYXRlcyBzcGVjaWZ5IGEgbGluZWFyIGdyYWRpZW50IHZlY3RvciBhc1xuICAgICAgICAgKiBgeDFgLCBgeTFgLCBgeDJgLCBgeTJgLCBvciBhIHJhZGlhbCBncmFkaWVudCBhcyBgY3hgLCBgY3lgLFxuICAgICAgICAgKiBgcmAgYW5kIG9wdGlvbmFsIGBmeGAsIGBmeWAgc3BlY2lmeWluZyBhIGZvY2FsIHBvaW50IGF3YXlcbiAgICAgICAgICogZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGUuIFNwZWNpZnkgYDxjb2xvcnM+YCBhcyBhIGxpc3RcbiAgICAgICAgICogb2YgZGFzaC1zZXBhcmF0ZWQgQ1NTIGNvbG9yIHZhbHVlcy4gIEVhY2ggY29sb3IgbWF5IGJlXG4gICAgICAgICAqIGZvbGxvd2VkIGJ5IGEgY3VzdG9tIG9mZnNldCB2YWx1ZSwgc2VwYXJhdGVkIHdpdGggYSBjb2xvblxuICAgICAgICAgKiBjaGFyYWN0ZXIuXG4gICAgICAgICA+IEV4YW1wbGVzXG4gICAgICAgICAqIExpbmVhciBncmFkaWVudCwgcmVsYXRpdmUgZnJvbSB0b3AtbGVmdCBjb3JuZXIgdG8gYm90dG9tLXJpZ2h0XG4gICAgICAgICAqIGNvcm5lciwgZnJvbSBibGFjayB0aHJvdWdoIHJlZCB0byB3aGl0ZTpcbiAgICAgICAgIHwgdmFyIGcgPSBwYXBlci5ncmFkaWVudChcImwoMCwgMCwgMSwgMSkjMDAwLSNmMDAtI2ZmZlwiKTtcbiAgICAgICAgICogTGluZWFyIGdyYWRpZW50LCBhYnNvbHV0ZSBmcm9tICgwLCAwKSB0byAoMTAwLCAxMDApLCBmcm9tIGJsYWNrXG4gICAgICAgICAqIHRocm91Z2ggcmVkIGF0IDI1JSB0byB3aGl0ZTpcbiAgICAgICAgIHwgdmFyIGcgPSBwYXBlci5ncmFkaWVudChcIkwoMCwgMCwgMTAwLCAxMDApIzAwMC0jZjAwOjI1LSNmZmZcIik7XG4gICAgICAgICAqIFJhZGlhbCBncmFkaWVudCwgcmVsYXRpdmUgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBlbGVtZW50IHdpdGggcmFkaXVzXG4gICAgICAgICAqIGhhbGYgdGhlIHdpZHRoLCBmcm9tIGJsYWNrIHRvIHdoaXRlOlxuICAgICAgICAgfCB2YXIgZyA9IHBhcGVyLmdyYWRpZW50KFwicigwLjUsIDAuNSwgMC41KSMwMDAtI2ZmZlwiKTtcbiAgICAgICAgICogVG8gYXBwbHkgdGhlIGdyYWRpZW50OlxuICAgICAgICAgfCBwYXBlci5jaXJjbGUoNTAsIDUwLCA0MCkuYXR0cih7XG4gICAgICAgICB8ICAgICBmaWxsOiBnXG4gICAgICAgICB8IH0pO1xuICAgICAgICAgPSAob2JqZWN0KSB0aGUgYGdyYWRpZW50YCBlbGVtZW50XG4gICAgICAgIFxcKi9cbiAgICAgICAgcHJvdG8uZ3JhZGllbnQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JhZGllbnQodGhpcy5kZWZzLCBzdHIpO1xuICAgICAgICB9O1xuICAgICAgICBwcm90by5ncmFkaWVudExpbmVhciA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgICAgcmV0dXJuIGdyYWRpZW50TGluZWFyKHRoaXMuZGVmcywgeDEsIHkxLCB4MiwgeTIpO1xuICAgICAgICB9O1xuICAgICAgICBwcm90by5ncmFkaWVudFJhZGlhbCA9IGZ1bmN0aW9uIChjeCwgY3ksIHIsIGZ4LCBmeSkge1xuICAgICAgICAgICAgcmV0dXJuIGdyYWRpZW50UmFkaWFsKHRoaXMuZGVmcywgY3gsIGN5LCByLCBmeCwgZnkpO1xuICAgICAgICB9O1xuICAgICAgICAvKlxcXG4gICAgICAgICAqIFBhcGVyLnRvU3RyaW5nXG4gICAgICAgICBbIG1ldGhvZCBdXG4gICAgICAgICAqKlxuICAgICAgICAgKiBSZXR1cm5zIFNWRyBjb2RlIGZvciB0aGUgQFBhcGVyXG4gICAgICAgICA9IChzdHJpbmcpIFNWRyBjb2RlIGZvciB0aGUgQFBhcGVyXG4gICAgICAgIFxcKi9cbiAgICAgICAgcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZG9jID0gdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgZiA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICAgICAgZCA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgIHN2ZyA9IHRoaXMubm9kZS5jbG9uZU5vZGUodHJ1ZSksXG4gICAgICAgICAgICAgICAgcmVzO1xuICAgICAgICAgICAgZi5hcHBlbmRDaGlsZChkKTtcbiAgICAgICAgICAgIGQuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgIFNuYXAuXy4kKHN2Zywge3htbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9KTtcbiAgICAgICAgICAgIHJlcyA9IGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgZi5yZW1vdmVDaGlsZChmLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgLypcXFxuICAgICAgICAgKiBQYXBlci50b0RhdGFVUkxcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIFJldHVybnMgU1ZHIGNvZGUgZm9yIHRoZSBAUGFwZXIgYXMgRGF0YSBVUkkgc3RyaW5nLlxuICAgICAgICAgPSAoc3RyaW5nKSBEYXRhIFVSSSBzdHJpbmdcbiAgICAgICAgXFwqL1xuICAgICAgICBwcm90by50b0RhdGFVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5idG9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qXFxcbiAgICAgICAgICogUGFwZXIuY2xlYXJcbiAgICAgICAgIFsgbWV0aG9kIF1cbiAgICAgICAgICoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBwYXBlciwgZXhjZXB0IDxkZWZzPi5cbiAgICAgICAgXFwqL1xuICAgICAgICBwcm90by5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5ub2RlLmZpcnN0Q2hpbGQsXG4gICAgICAgICAgICAgICAgbmV4dDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSAhPSBcImRlZnNcIikge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8uY2xlYXIuY2FsbCh7bm9kZTogbm9kZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KCkpO1xufSk7XG5cbi8vIENvcHlyaWdodCAoYykgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8gXG4vLyBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vIFxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblNuYXAucGx1Z2luKGZ1bmN0aW9uIChTbmFwLCBFbGVtZW50LCBQYXBlciwgZ2xvYikge1xuICAgIHZhciBlbHByb3RvID0gRWxlbWVudC5wcm90b3R5cGUsXG4gICAgICAgIGlzID0gU25hcC5pcyxcbiAgICAgICAgY2xvbmUgPSBTbmFwLl8uY2xvbmUsXG4gICAgICAgIGhhcyA9IFwiaGFzT3duUHJvcGVydHlcIixcbiAgICAgICAgcDJzID0gLyw/KFthLXpdKSw/L2dpLFxuICAgICAgICB0b0Zsb2F0ID0gcGFyc2VGbG9hdCxcbiAgICAgICAgbWF0aCA9IE1hdGgsXG4gICAgICAgIFBJID0gbWF0aC5QSSxcbiAgICAgICAgbW1pbiA9IG1hdGgubWluLFxuICAgICAgICBtbWF4ID0gbWF0aC5tYXgsXG4gICAgICAgIHBvdyA9IG1hdGgucG93LFxuICAgICAgICBhYnMgPSBtYXRoLmFicztcbiAgICBmdW5jdGlvbiBwYXRocyhwcykge1xuICAgICAgICB2YXIgcCA9IHBhdGhzLnBzID0gcGF0aHMucHMgfHwge307XG4gICAgICAgIGlmIChwW3BzXSkge1xuICAgICAgICAgICAgcFtwc10uc2xlZXAgPSAxMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwW3BzXSA9IHtcbiAgICAgICAgICAgICAgICBzbGVlcDogMTAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHApIGlmIChwW2hhc10oa2V5KSAmJiBrZXkgIT0gcHMpIHtcbiAgICAgICAgICAgICAgICBwW2tleV0uc2xlZXAtLTtcbiAgICAgICAgICAgICAgICAhcFtrZXldLnNsZWVwICYmIGRlbGV0ZSBwW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcFtwc107XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgICAgICAgIHggPSB5ID0gd2lkdGggPSBoZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgICB3aWR0aCA9IHgud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSB4LmhlaWdodDtcbiAgICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGg6IGhlaWdodCxcbiAgICAgICAgICAgIHgyOiB4ICsgd2lkdGgsXG4gICAgICAgICAgICB5MjogeSArIGhlaWdodCxcbiAgICAgICAgICAgIGN4OiB4ICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgY3k6IHkgKyBoZWlnaHQgLyAyLFxuICAgICAgICAgICAgcjE6IG1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHIyOiBtYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDIsXG4gICAgICAgICAgICByMDogbWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHBhdGg6IHJlY3RQYXRoKHgsIHksIHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgICAgdmI6IFt4LCB5LCB3aWR0aCwgaGVpZ2h0XS5qb2luKFwiIFwiKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuam9pbihcIixcIikucmVwbGFjZShwMnMsIFwiJDFcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGhDbG9uZShwYXRoQXJyYXkpIHtcbiAgICAgICAgdmFyIHJlcyA9IGNsb25lKHBhdGhBcnJheSk7XG4gICAgICAgIHJlcy50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQb2ludEF0U2VnbWVudExlbmd0aChwMXgsIHAxeSwgYzF4LCBjMXksIGMyeCwgYzJ5LCBwMngsIHAyeSwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChsZW5ndGggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGJlemxlbihwMXgsIHAxeSwgYzF4LCBjMXksIGMyeCwgYzJ5LCBwMngsIHAyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmluZERvdHNBdFNlZ21lbnQocDF4LCBwMXksIGMxeCwgYzF5LCBjMngsIGMyeSwgcDJ4LCBwMnksXG4gICAgICAgICAgICAgICAgZ2V0VG90TGVuKHAxeCwgcDF5LCBjMXgsIGMxeSwgYzJ4LCBjMnksIHAyeCwgcDJ5LCBsZW5ndGgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRMZW5ndGhGYWN0b3J5KGlzdG90YWwsIHN1YnBhdGgpIHtcbiAgICAgICAgZnVuY3Rpb24gTyh2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiArKCt2YWwpLnRvRml4ZWQoMyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNuYXAuXy5jYWNoZXIoZnVuY3Rpb24gKHBhdGgsIGxlbmd0aCwgb25seXN0YXJ0KSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5hdHRyKFwiZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGggPSBwYXRoMmN1cnZlKHBhdGgpO1xuICAgICAgICAgICAgdmFyIHgsIHksIHAsIGwsIHNwID0gXCJcIiwgc3VicGF0aHMgPSB7fSwgcG9pbnQsXG4gICAgICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHBhdGgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIHAgPSBwYXRoW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwWzBdID09IFwiTVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSArcFsxXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9ICtwWzJdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBnZXRQb2ludEF0U2VnbWVudExlbmd0aCh4LCB5LCBwWzFdLCBwWzJdLCBwWzNdLCBwWzRdLCBwWzVdLCBwWzZdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbiArIGwgPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJwYXRoICYmICFzdWJwYXRocy5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ID0gZ2V0UG9pbnRBdFNlZ21lbnRMZW5ndGgoeCwgeSwgcFsxXSwgcFsyXSwgcFszXSwgcFs0XSwgcFs1XSwgcFs2XSwgbGVuZ3RoIC0gbGVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcCArPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ1wiICsgTyhwb2ludC5zdGFydC54KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyhwb2ludC5zdGFydC55KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyhwb2ludC5tLngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPKHBvaW50Lm0ueSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8ocG9pbnQueCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8ocG9pbnQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5c3RhcnQpIHtyZXR1cm4gc3A7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnBhdGhzLnN0YXJ0ID0gc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3AgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTVwiICsgTyhwb2ludC54KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyhwb2ludC55KSArIFwiQ1wiICsgTyhwb2ludC5uLngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPKHBvaW50Lm4ueSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8ocG9pbnQuZW5kLngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPKHBvaW50LmVuZC55KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyhwWzVdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyhwWzZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiArPSBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSArcFs1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gK3BbNl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzdG90YWwgJiYgIXN1YnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludCA9IGdldFBvaW50QXRTZWdtZW50TGVuZ3RoKHgsIHksIHBbMV0sIHBbMl0sIHBbM10sIHBbNF0sIHBbNV0sIHBbNl0sIGxlbmd0aCAtIGxlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlbiArPSBsO1xuICAgICAgICAgICAgICAgICAgICB4ID0gK3BbNV07XG4gICAgICAgICAgICAgICAgICAgIHkgPSArcFs2XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3AgKz0gcC5zaGlmdCgpICsgcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YnBhdGhzLmVuZCA9IHNwO1xuICAgICAgICAgICAgcG9pbnQgPSBpc3RvdGFsID8gbGVuIDogc3VicGF0aCA/IHN1YnBhdGhzIDogZmluZERvdHNBdFNlZ21lbnQoeCwgeSwgcFswXSwgcFsxXSwgcFsyXSwgcFszXSwgcFs0XSwgcFs1XSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH0sIG51bGwsIFNuYXAuXy5jbG9uZSk7XG4gICAgfVxuICAgIHZhciBnZXRUb3RhbExlbmd0aCA9IGdldExlbmd0aEZhY3RvcnkoMSksXG4gICAgICAgIGdldFBvaW50QXRMZW5ndGggPSBnZXRMZW5ndGhGYWN0b3J5KCksXG4gICAgICAgIGdldFN1YnBhdGhzQXRMZW5ndGggPSBnZXRMZW5ndGhGYWN0b3J5KDAsIDEpO1xuICAgIGZ1bmN0aW9uIGZpbmREb3RzQXRTZWdtZW50KHAxeCwgcDF5LCBjMXgsIGMxeSwgYzJ4LCBjMnksIHAyeCwgcDJ5LCB0KSB7XG4gICAgICAgIHZhciB0MSA9IDEgLSB0LFxuICAgICAgICAgICAgdDEzID0gcG93KHQxLCAzKSxcbiAgICAgICAgICAgIHQxMiA9IHBvdyh0MSwgMiksXG4gICAgICAgICAgICB0MiA9IHQgKiB0LFxuICAgICAgICAgICAgdDMgPSB0MiAqIHQsXG4gICAgICAgICAgICB4ID0gdDEzICogcDF4ICsgdDEyICogMyAqIHQgKiBjMXggKyB0MSAqIDMgKiB0ICogdCAqIGMyeCArIHQzICogcDJ4LFxuICAgICAgICAgICAgeSA9IHQxMyAqIHAxeSArIHQxMiAqIDMgKiB0ICogYzF5ICsgdDEgKiAzICogdCAqIHQgKiBjMnkgKyB0MyAqIHAyeSxcbiAgICAgICAgICAgIG14ID0gcDF4ICsgMiAqIHQgKiAoYzF4IC0gcDF4KSArIHQyICogKGMyeCAtIDIgKiBjMXggKyBwMXgpLFxuICAgICAgICAgICAgbXkgPSBwMXkgKyAyICogdCAqIChjMXkgLSBwMXkpICsgdDIgKiAoYzJ5IC0gMiAqIGMxeSArIHAxeSksXG4gICAgICAgICAgICBueCA9IGMxeCArIDIgKiB0ICogKGMyeCAtIGMxeCkgKyB0MiAqIChwMnggLSAyICogYzJ4ICsgYzF4KSxcbiAgICAgICAgICAgIG55ID0gYzF5ICsgMiAqIHQgKiAoYzJ5IC0gYzF5KSArIHQyICogKHAyeSAtIDIgKiBjMnkgKyBjMXkpLFxuICAgICAgICAgICAgYXggPSB0MSAqIHAxeCArIHQgKiBjMXgsXG4gICAgICAgICAgICBheSA9IHQxICogcDF5ICsgdCAqIGMxeSxcbiAgICAgICAgICAgIGN4ID0gdDEgKiBjMnggKyB0ICogcDJ4LFxuICAgICAgICAgICAgY3kgPSB0MSAqIGMyeSArIHQgKiBwMnksXG4gICAgICAgICAgICBhbHBoYSA9ICg5MCAtIG1hdGguYXRhbjIobXggLSBueCwgbXkgLSBueSkgKiAxODAgLyBQSSk7XG4gICAgICAgIC8vIChteCA+IG54IHx8IG15IDwgbnkpICYmIChhbHBoYSArPSAxODApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICBtOiB7eDogbXgsIHk6IG15fSxcbiAgICAgICAgICAgIG46IHt4OiBueCwgeTogbnl9LFxuICAgICAgICAgICAgc3RhcnQ6IHt4OiBheCwgeTogYXl9LFxuICAgICAgICAgICAgZW5kOiB7eDogY3gsIHk6IGN5fSxcbiAgICAgICAgICAgIGFscGhhOiBhbHBoYVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBiZXppZXJCQm94KHAxeCwgcDF5LCBjMXgsIGMxeSwgYzJ4LCBjMnksIHAyeCwgcDJ5KSB7XG4gICAgICAgIGlmICghU25hcC5pcyhwMXgsIFwiYXJyYXlcIikpIHtcbiAgICAgICAgICAgIHAxeCA9IFtwMXgsIHAxeSwgYzF4LCBjMXksIGMyeCwgYzJ5LCBwMngsIHAyeV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJib3ggPSBjdXJ2ZURpbS5hcHBseShudWxsLCBwMXgpO1xuICAgICAgICByZXR1cm4gYm94KFxuICAgICAgICAgICAgYmJveC5taW4ueCxcbiAgICAgICAgICAgIGJib3gubWluLnksXG4gICAgICAgICAgICBiYm94Lm1heC54IC0gYmJveC5taW4ueCxcbiAgICAgICAgICAgIGJib3gubWF4LnkgLSBiYm94Lm1pbi55XG4gICAgICAgICk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzUG9pbnRJbnNpZGVCQm94KGJib3gsIHgsIHkpIHtcbiAgICAgICAgcmV0dXJuICB4ID49IGJib3gueCAmJlxuICAgICAgICAgICAgICAgIHggPD0gYmJveC54ICsgYmJveC53aWR0aCAmJlxuICAgICAgICAgICAgICAgIHkgPj0gYmJveC55ICYmXG4gICAgICAgICAgICAgICAgeSA8PSBiYm94LnkgKyBiYm94LmhlaWdodDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNCQm94SW50ZXJzZWN0KGJib3gxLCBiYm94Mikge1xuICAgICAgICBiYm94MSA9IGJveChiYm94MSk7XG4gICAgICAgIGJib3gyID0gYm94KGJib3gyKTtcbiAgICAgICAgcmV0dXJuIGlzUG9pbnRJbnNpZGVCQm94KGJib3gyLCBiYm94MS54LCBiYm94MS55KVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDIsIGJib3gxLngyLCBiYm94MS55KVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDIsIGJib3gxLngsIGJib3gxLnkyKVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDIsIGJib3gxLngyLCBiYm94MS55MilcbiAgICAgICAgICAgIHx8IGlzUG9pbnRJbnNpZGVCQm94KGJib3gxLCBiYm94Mi54LCBiYm94Mi55KVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDEsIGJib3gyLngyLCBiYm94Mi55KVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDEsIGJib3gyLngsIGJib3gyLnkyKVxuICAgICAgICAgICAgfHwgaXNQb2ludEluc2lkZUJCb3goYmJveDEsIGJib3gyLngyLCBiYm94Mi55MilcbiAgICAgICAgICAgIHx8IChiYm94MS54IDwgYmJveDIueDIgJiYgYmJveDEueCA+IGJib3gyLnhcbiAgICAgICAgICAgICAgICB8fCBiYm94Mi54IDwgYmJveDEueDIgJiYgYmJveDIueCA+IGJib3gxLngpXG4gICAgICAgICAgICAmJiAoYmJveDEueSA8IGJib3gyLnkyICYmIGJib3gxLnkgPiBiYm94Mi55XG4gICAgICAgICAgICAgICAgfHwgYmJveDIueSA8IGJib3gxLnkyICYmIGJib3gyLnkgPiBiYm94MS55KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmFzZTModCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgdmFyIHQxID0gLTMgKiBwMSArIDkgKiBwMiAtIDkgKiBwMyArIDMgKiBwNCxcbiAgICAgICAgICAgIHQyID0gdCAqIHQxICsgNiAqIHAxIC0gMTIgKiBwMiArIDYgKiBwMztcbiAgICAgICAgcmV0dXJuIHQgKiB0MiAtIDMgKiBwMSArIDMgKiBwMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmV6bGVuKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMsIHg0LCB5NCwgeikge1xuICAgICAgICBpZiAoeiA9PSBudWxsKSB7XG4gICAgICAgICAgICB6ID0gMTtcbiAgICAgICAgfVxuICAgICAgICB6ID0geiA+IDEgPyAxIDogeiA8IDAgPyAwIDogejtcbiAgICAgICAgdmFyIHoyID0geiAvIDIsXG4gICAgICAgICAgICBuID0gMTIsXG4gICAgICAgICAgICBUdmFsdWVzID0gWy0uMTI1MiwuMTI1MiwtLjM2NzgsLjM2NzgsLS41ODczLC41ODczLC0uNzY5OSwuNzY5OSwtLjkwNDEsLjkwNDEsLS45ODE2LC45ODE2XSxcbiAgICAgICAgICAgIEN2YWx1ZXMgPSBbMC4yNDkxLDAuMjQ5MSwwLjIzMzUsMC4yMzM1LDAuMjAzMiwwLjIwMzIsMC4xNjAxLDAuMTYwMSwwLjEwNjksMC4xMDY5LDAuMDQ3MiwwLjA0NzJdLFxuICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjdCA9IHoyICogVHZhbHVlc1tpXSArIHoyLFxuICAgICAgICAgICAgICAgIHhiYXNlID0gYmFzZTMoY3QsIHgxLCB4MiwgeDMsIHg0KSxcbiAgICAgICAgICAgICAgICB5YmFzZSA9IGJhc2UzKGN0LCB5MSwgeTIsIHkzLCB5NCksXG4gICAgICAgICAgICAgICAgY29tYiA9IHhiYXNlICogeGJhc2UgKyB5YmFzZSAqIHliYXNlO1xuICAgICAgICAgICAgc3VtICs9IEN2YWx1ZXNbaV0gKiBtYXRoLnNxcnQoY29tYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHoyICogc3VtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRUb3RMZW4oeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCBsbCkge1xuICAgICAgICBpZiAobGwgPCAwIHx8IGJlemxlbih4MSwgeTEsIHgyLCB5MiwgeDMsIHkzLCB4NCwgeTQpIDwgbGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IDEsXG4gICAgICAgICAgICBzdGVwID0gdCAvIDIsXG4gICAgICAgICAgICB0MiA9IHQgLSBzdGVwLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGUgPSAuMDE7XG4gICAgICAgIGwgPSBiZXpsZW4oeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCB0Mik7XG4gICAgICAgIHdoaWxlIChhYnMobCAtIGxsKSA+IGUpIHtcbiAgICAgICAgICAgIHN0ZXAgLz0gMjtcbiAgICAgICAgICAgIHQyICs9IChsIDwgbGwgPyAxIDogLTEpICogc3RlcDtcbiAgICAgICAgICAgIGwgPSBiZXpsZW4oeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0LCB0Mik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnRlcnNlY3QoeDEsIHkxLCB4MiwgeTIsIHgzLCB5MywgeDQsIHk0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1tYXgoeDEsIHgyKSA8IG1taW4oeDMsIHg0KSB8fFxuICAgICAgICAgICAgbW1pbih4MSwgeDIpID4gbW1heCh4MywgeDQpIHx8XG4gICAgICAgICAgICBtbWF4KHkxLCB5MikgPCBtbWluKHkzLCB5NCkgfHxcbiAgICAgICAgICAgIG1taW4oeTEsIHkyKSA+IG1tYXgoeTMsIHk0KVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbnggPSAoeDEgKiB5MiAtIHkxICogeDIpICogKHgzIC0geDQpIC0gKHgxIC0geDIpICogKHgzICogeTQgLSB5MyAqIHg0KSxcbiAgICAgICAgICAgIG55ID0gKHgxICogeTIgLSB5MSAqIHgyKSAqICh5MyAtIHk0KSAtICh5MSAtIHkyKSAqICh4MyAqIHk0IC0geTMgKiB4NCksXG4gICAgICAgICAgICBkZW5vbWluYXRvciA9ICh4MSAtIHgyKSAqICh5MyAtIHk0KSAtICh5MSAtIHkyKSAqICh4MyAtIHg0KTtcblxuICAgICAgICBpZiAoIWRlbm9taW5hdG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHB4ID0gbnggLyBkZW5vbWluYXRvcixcbiAgICAgICAgICAgIHB5ID0gbnkgLyBkZW5vbWluYXRvcixcbiAgICAgICAgICAgIHB4MiA9ICtweC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgcHkyID0gK3B5LnRvRml4ZWQoMik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHB4MiA8ICttbWluKHgxLCB4MikudG9GaXhlZCgyKSB8fFxuICAgICAgICAgICAgcHgyID4gK21tYXgoeDEsIHgyKS50b0ZpeGVkKDIpIHx8XG4gICAgICAgICAgICBweDIgPCArbW1pbih4MywgeDQpLnRvRml4ZWQoMikgfHxcbiAgICAgICAgICAgIHB4MiA+ICttbWF4KHgzLCB4NCkudG9GaXhlZCgyKSB8fFxuICAgICAgICAgICAgcHkyIDwgK21taW4oeTEsIHkyKS50b0ZpeGVkKDIpIHx8XG4gICAgICAgICAgICBweTIgPiArbW1heCh5MSwgeTIpLnRvRml4ZWQoMikgfHxcbiAgICAgICAgICAgIHB5MiA8ICttbWluKHkzLCB5NCkudG9GaXhlZCgyKSB8fFxuICAgICAgICAgICAgcHkyID4gK21tYXgoeTMsIHk0KS50b0ZpeGVkKDIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7eDogcHgsIHk6IHB5fTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50ZXIoYmV6MSwgYmV6Mikge1xuICAgICAgICByZXR1cm4gaW50ZXJIZWxwZXIoYmV6MSwgYmV6Mik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludGVyQ291bnQoYmV6MSwgYmV6Mikge1xuICAgICAgICByZXR1cm4gaW50ZXJIZWxwZXIoYmV6MSwgYmV6MiwgMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludGVySGVscGVyKGJlejEsIGJlejIsIGp1c3RDb3VudCkge1xuICAgICAgICB2YXIgYmJveDEgPSBiZXppZXJCQm94KGJlejEpLFxuICAgICAgICAgICAgYmJveDIgPSBiZXppZXJCQm94KGJlejIpO1xuICAgICAgICBpZiAoIWlzQkJveEludGVyc2VjdChiYm94MSwgYmJveDIpKSB7XG4gICAgICAgICAgICByZXR1cm4ganVzdENvdW50ID8gMCA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsMSA9IGJlemxlbi5hcHBseSgwLCBiZXoxKSxcbiAgICAgICAgICAgIGwyID0gYmV6bGVuLmFwcGx5KDAsIGJlejIpLFxuICAgICAgICAgICAgbjEgPSB+fihsMSAvIDgpLFxuICAgICAgICAgICAgbjIgPSB+fihsMiAvIDgpLFxuICAgICAgICAgICAgZG90czEgPSBbXSxcbiAgICAgICAgICAgIGRvdHMyID0gW10sXG4gICAgICAgICAgICB4eSA9IHt9LFxuICAgICAgICAgICAgcmVzID0ganVzdENvdW50ID8gMCA6IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4xICsgMTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcCA9IGZpbmREb3RzQXRTZWdtZW50LmFwcGx5KDAsIGJlejEuY29uY2F0KGkgLyBuMSkpO1xuICAgICAgICAgICAgZG90czEucHVzaCh7eDogcC54LCB5OiBwLnksIHQ6IGkgLyBuMX0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMiArIDE7IGkrKykge1xuICAgICAgICAgICAgcCA9IGZpbmREb3RzQXRTZWdtZW50LmFwcGx5KDAsIGJlejIuY29uY2F0KGkgLyBuMikpO1xuICAgICAgICAgICAgZG90czIucHVzaCh7eDogcC54LCB5OiBwLnksIHQ6IGkgLyBuMn0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGkgPSBkb3RzMVtpXSxcbiAgICAgICAgICAgICAgICAgICAgZGkxID0gZG90czFbaSArIDFdLFxuICAgICAgICAgICAgICAgICAgICBkaiA9IGRvdHMyW2pdLFxuICAgICAgICAgICAgICAgICAgICBkajEgPSBkb3RzMltqICsgMV0sXG4gICAgICAgICAgICAgICAgICAgIGNpID0gYWJzKGRpMS54IC0gZGkueCkgPCAuMDAxID8gXCJ5XCIgOiBcInhcIixcbiAgICAgICAgICAgICAgICAgICAgY2ogPSBhYnMoZGoxLnggLSBkai54KSA8IC4wMDEgPyBcInlcIiA6IFwieFwiLFxuICAgICAgICAgICAgICAgICAgICBpcyA9IGludGVyc2VjdChkaS54LCBkaS55LCBkaTEueCwgZGkxLnksIGRqLngsIGRqLnksIGRqMS54LCBkajEueSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4eVtpcy54LnRvRml4ZWQoNCldID09IGlzLnkudG9GaXhlZCg0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHlbaXMueC50b0ZpeGVkKDQpXSA9IGlzLnkudG9GaXhlZCg0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQxID0gZGkudCArIGFicygoaXNbY2ldIC0gZGlbY2ldKSAvIChkaTFbY2ldIC0gZGlbY2ldKSkgKiAoZGkxLnQgLSBkaS50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQyID0gZGoudCArIGFicygoaXNbY2pdIC0gZGpbY2pdKSAvIChkajFbY2pdIC0gZGpbY2pdKSkgKiAoZGoxLnQgLSBkai50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQxID49IDAgJiYgdDEgPD0gMSAmJiB0MiA+PSAwICYmIHQyIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqdXN0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpcy54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpcy55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MTogdDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQyOiB0MlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGhJbnRlcnNlY3Rpb24ocGF0aDEsIHBhdGgyKSB7XG4gICAgICAgIHJldHVybiBpbnRlclBhdGhIZWxwZXIocGF0aDEsIHBhdGgyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0aEludGVyc2VjdGlvbk51bWJlcihwYXRoMSwgcGF0aDIpIHtcbiAgICAgICAgcmV0dXJuIGludGVyUGF0aEhlbHBlcihwYXRoMSwgcGF0aDIsIDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnRlclBhdGhIZWxwZXIocGF0aDEsIHBhdGgyLCBqdXN0Q291bnQpIHtcbiAgICAgICAgcGF0aDEgPSBwYXRoMmN1cnZlKHBhdGgxKTtcbiAgICAgICAgcGF0aDIgPSBwYXRoMmN1cnZlKHBhdGgyKTtcbiAgICAgICAgdmFyIHgxLCB5MSwgeDIsIHkyLCB4MW0sIHkxbSwgeDJtLCB5Mm0sIGJlejEsIGJlejIsXG4gICAgICAgICAgICByZXMgPSBqdXN0Q291bnQgPyAwIDogW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHBhdGgxLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwaSA9IHBhdGgxW2ldO1xuICAgICAgICAgICAgaWYgKHBpWzBdID09IFwiTVwiKSB7XG4gICAgICAgICAgICAgICAgeDEgPSB4MW0gPSBwaVsxXTtcbiAgICAgICAgICAgICAgICB5MSA9IHkxbSA9IHBpWzJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGlbMF0gPT0gXCJDXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmV6MSA9IFt4MSwgeTFdLmNvbmNhdChwaS5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgICAgIHgxID0gYmV6MVs2XTtcbiAgICAgICAgICAgICAgICAgICAgeTEgPSBiZXoxWzddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJlejEgPSBbeDEsIHkxLCB4MSwgeTEsIHgxbSwgeTFtLCB4MW0sIHkxbV07XG4gICAgICAgICAgICAgICAgICAgIHgxID0geDFtO1xuICAgICAgICAgICAgICAgICAgICB5MSA9IHkxbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpqID0gcGF0aDIubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGogPSBwYXRoMltqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBqWzBdID09IFwiTVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MiA9IHgybSA9IHBqWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeTIgPSB5Mm0gPSBwalsyXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwalswXSA9PSBcIkNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlejIgPSBbeDIsIHkyXS5jb25jYXQocGouc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyID0gYmV6Mls2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MiA9IGJlejJbN107XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlejIgPSBbeDIsIHkyLCB4MiwgeTIsIHgybSwgeTJtLCB4Mm0sIHkybV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDIgPSB4Mm07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTIgPSB5Mm07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW50ciA9IGludGVySGVscGVyKGJlejEsIGJlejIsIGp1c3RDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanVzdENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzICs9IGludHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwLCBrayA9IGludHIubGVuZ3RoOyBrIDwga2s7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRyW2tdLnNlZ21lbnQxID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50cltrXS5zZWdtZW50MiA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludHJba10uYmV6MSA9IGJlejE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludHJba10uYmV6MiA9IGJlejI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5jb25jYXQoaW50cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNQb2ludEluc2lkZVBhdGgocGF0aCwgeCwgeSkge1xuICAgICAgICB2YXIgYmJveCA9IHBhdGhCQm94KHBhdGgpO1xuICAgICAgICByZXR1cm4gaXNQb2ludEluc2lkZUJCb3goYmJveCwgeCwgeSkgJiZcbiAgICAgICAgICAgICAgIGludGVyUGF0aEhlbHBlcihwYXRoLCBbW1wiTVwiLCB4LCB5XSwgW1wiSFwiLCBiYm94LngyICsgMTBdXSwgMSkgJSAyID09IDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGhCQm94KHBhdGgpIHtcbiAgICAgICAgdmFyIHB0aCA9IHBhdGhzKHBhdGgpO1xuICAgICAgICBpZiAocHRoLmJib3gpIHtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZShwdGguYmJveCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm94KCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aCA9IHBhdGgyY3VydmUocGF0aCk7XG4gICAgICAgIHZhciB4ID0gMCwgXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIFggPSBbXSxcbiAgICAgICAgICAgIFkgPSBbXSxcbiAgICAgICAgICAgIHA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHBhdGgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgcCA9IHBhdGhbaV07XG4gICAgICAgICAgICBpZiAocFswXSA9PSBcIk1cIikge1xuICAgICAgICAgICAgICAgIHggPSBwWzFdO1xuICAgICAgICAgICAgICAgIHkgPSBwWzJdO1xuICAgICAgICAgICAgICAgIFgucHVzaCh4KTtcbiAgICAgICAgICAgICAgICBZLnB1c2goeSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkaW0gPSBjdXJ2ZURpbSh4LCB5LCBwWzFdLCBwWzJdLCBwWzNdLCBwWzRdLCBwWzVdLCBwWzZdKTtcbiAgICAgICAgICAgICAgICBYID0gWC5jb25jYXQoZGltLm1pbi54LCBkaW0ubWF4LngpO1xuICAgICAgICAgICAgICAgIFkgPSBZLmNvbmNhdChkaW0ubWluLnksIGRpbS5tYXgueSk7XG4gICAgICAgICAgICAgICAgeCA9IHBbNV07XG4gICAgICAgICAgICAgICAgeSA9IHBbNl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHhtaW4gPSBtbWluLmFwcGx5KDAsIFgpLFxuICAgICAgICAgICAgeW1pbiA9IG1taW4uYXBwbHkoMCwgWSksXG4gICAgICAgICAgICB4bWF4ID0gbW1heC5hcHBseSgwLCBYKSxcbiAgICAgICAgICAgIHltYXggPSBtbWF4LmFwcGx5KDAsIFkpLFxuICAgICAgICAgICAgYmIgPSBib3goeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICAgICAgcHRoLmJib3ggPSBjbG9uZShiYik7XG4gICAgICAgIHJldHVybiBiYjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVjdFBhdGgoeCwgeSwgdywgaCwgcikge1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBbXCJNXCIsICt4ICsgKCtyKSwgeV0sXG4gICAgICAgICAgICAgICAgW1wibFwiLCB3IC0gciAqIDIsIDBdLFxuICAgICAgICAgICAgICAgIFtcImFcIiwgciwgciwgMCwgMCwgMSwgciwgcl0sXG4gICAgICAgICAgICAgICAgW1wibFwiLCAwLCBoIC0gciAqIDJdLFxuICAgICAgICAgICAgICAgIFtcImFcIiwgciwgciwgMCwgMCwgMSwgLXIsIHJdLFxuICAgICAgICAgICAgICAgIFtcImxcIiwgciAqIDIgLSB3LCAwXSxcbiAgICAgICAgICAgICAgICBbXCJhXCIsIHIsIHIsIDAsIDAsIDEsIC1yLCAtcl0sXG4gICAgICAgICAgICAgICAgW1wibFwiLCAwLCByICogMiAtIGhdLFxuICAgICAgICAgICAgICAgIFtcImFcIiwgciwgciwgMCwgMCwgMSwgciwgLXJdLFxuICAgICAgICAgICAgICAgIFtcInpcIl1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcyA9IFtbXCJNXCIsIHgsIHldLCBbXCJsXCIsIHcsIDBdLCBbXCJsXCIsIDAsIGhdLCBbXCJsXCIsIC13LCAwXSwgW1wielwiXV07XG4gICAgICAgIHJlcy50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGxpcHNlUGF0aCh4LCB5LCByeCwgcnksIGEpIHtcbiAgICAgICAgaWYgKGEgPT0gbnVsbCAmJiByeSA9PSBudWxsKSB7XG4gICAgICAgICAgICByeSA9IHJ4O1xuICAgICAgICB9XG4gICAgICAgIHggPSAreDtcbiAgICAgICAgeSA9ICt5O1xuICAgICAgICByeCA9ICtyeDtcbiAgICAgICAgcnkgPSArcnk7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciByYWQgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgICAgICAgICAgIHgxID0geCArIHJ4ICogTWF0aC5jb3MoLXJ5ICogcmFkKSxcbiAgICAgICAgICAgICAgICB4MiA9IHggKyByeCAqIE1hdGguY29zKC1hICogcmFkKSxcbiAgICAgICAgICAgICAgICB5MSA9IHkgKyByeCAqIE1hdGguc2luKC1yeSAqIHJhZCksXG4gICAgICAgICAgICAgICAgeTIgPSB5ICsgcnggKiBNYXRoLnNpbigtYSAqIHJhZCksXG4gICAgICAgICAgICAgICAgcmVzID0gW1tcIk1cIiwgeDEsIHkxXSwgW1wiQVwiLCByeCwgcngsIDAsICsoYSAtIHJ5ID4gMTgwKSwgMCwgeDIsIHkyXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBbXG4gICAgICAgICAgICAgICAgW1wiTVwiLCB4LCB5XSxcbiAgICAgICAgICAgICAgICBbXCJtXCIsIDAsIC1yeV0sXG4gICAgICAgICAgICAgICAgW1wiYVwiLCByeCwgcnksIDAsIDEsIDEsIDAsIDIgKiByeV0sXG4gICAgICAgICAgICAgICAgW1wiYVwiLCByeCwgcnksIDAsIDEsIDEsIDAsIC0yICogcnldLFxuICAgICAgICAgICAgICAgIFtcInpcIl1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHZhciB1bml0MnB4ID0gU25hcC5fdW5pdDJweCxcbiAgICAgICAgZ2V0UGF0aCA9IHtcbiAgICAgICAgcGF0aDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwuYXR0cihcInBhdGhcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNpcmNsZTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgYXR0ciA9IHVuaXQycHgoZWwpO1xuICAgICAgICAgICAgcmV0dXJuIGVsbGlwc2VQYXRoKGF0dHIuY3gsIGF0dHIuY3ksIGF0dHIucik7XG4gICAgICAgIH0sXG4gICAgICAgIGVsbGlwc2U6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB1bml0MnB4KGVsKTtcbiAgICAgICAgICAgIHJldHVybiBlbGxpcHNlUGF0aChhdHRyLmN4IHx8IDAsIGF0dHIuY3kgfHwgMCwgYXR0ci5yeCwgYXR0ci5yeSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY3Q6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB1bml0MnB4KGVsKTtcbiAgICAgICAgICAgIHJldHVybiByZWN0UGF0aChhdHRyLnggfHwgMCwgYXR0ci55IHx8IDAsIGF0dHIud2lkdGgsIGF0dHIuaGVpZ2h0LCBhdHRyLnJ4LCBhdHRyLnJ5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB1bml0MnB4KGVsKTtcbiAgICAgICAgICAgIHJldHVybiByZWN0UGF0aChhdHRyLnggfHwgMCwgYXR0ci55IHx8IDAsIGF0dHIud2lkdGgsIGF0dHIuaGVpZ2h0KTtcbiAgICAgICAgfSxcbiAgICAgICAgbGluZTogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJNXCIgKyBbZWwuYXR0cihcIngxXCIpIHx8IDAsIGVsLmF0dHIoXCJ5MVwiKSB8fCAwLCBlbC5hdHRyKFwieDJcIiksIGVsLmF0dHIoXCJ5MlwiKV07XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlsaW5lOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIk1cIiArIGVsLmF0dHIoXCJwb2ludHNcIik7XG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb246IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiTVwiICsgZWwuYXR0cihcInBvaW50c1wiKSArIFwielwiO1xuICAgICAgICB9LFxuICAgICAgICBkZWZsdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgYmJveCA9IGVsLm5vZGUuZ2V0QkJveCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlY3RQYXRoKGJib3gueCwgYmJveC55LCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHBhdGhUb1JlbGF0aXZlKHBhdGhBcnJheSkge1xuICAgICAgICB2YXIgcHRoID0gcGF0aHMocGF0aEFycmF5KSxcbiAgICAgICAgICAgIGxvd2VyQ2FzZSA9IFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2U7XG4gICAgICAgIGlmIChwdGgucmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aENsb25lKHB0aC5yZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghU25hcC5pcyhwYXRoQXJyYXksIFwiYXJyYXlcIikgfHwgIVNuYXAuaXMocGF0aEFycmF5ICYmIHBhdGhBcnJheVswXSwgXCJhcnJheVwiKSkge1xuICAgICAgICAgICAgcGF0aEFycmF5ID0gU25hcC5wYXJzZVBhdGhTdHJpbmcocGF0aEFycmF5KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gW10sXG4gICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgbXggPSAwLFxuICAgICAgICAgICAgbXkgPSAwLFxuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICBpZiAocGF0aEFycmF5WzBdWzBdID09IFwiTVwiKSB7XG4gICAgICAgICAgICB4ID0gcGF0aEFycmF5WzBdWzFdO1xuICAgICAgICAgICAgeSA9IHBhdGhBcnJheVswXVsyXTtcbiAgICAgICAgICAgIG14ID0geDtcbiAgICAgICAgICAgIG15ID0geTtcbiAgICAgICAgICAgIHN0YXJ0Kys7XG4gICAgICAgICAgICByZXMucHVzaChbXCJNXCIsIHgsIHldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQsIGlpID0gcGF0aEFycmF5Lmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciByID0gcmVzW2ldID0gW10sXG4gICAgICAgICAgICAgICAgcGEgPSBwYXRoQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAocGFbMF0gIT0gbG93ZXJDYXNlLmNhbGwocGFbMF0pKSB7XG4gICAgICAgICAgICAgICAgclswXSA9IGxvd2VyQ2FzZS5jYWxsKHBhWzBdKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbMV0gPSBwYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbMl0gPSBwYVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbM10gPSBwYVszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbNF0gPSBwYVs0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbNV0gPSBwYVs1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbNl0gPSArKHBhWzZdIC0geCkudG9GaXhlZCgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbN10gPSArKHBhWzddIC0geSkudG9GaXhlZCgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgclsxXSA9ICsocGFbMV0gLSB5KS50b0ZpeGVkKDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBteCA9IHBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSBwYVsyXTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxLCBqaiA9IHBhLmxlbmd0aDsgaiA8IGpqOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByW2pdID0gKyhwYVtqXSAtICgoaiAlIDIpID8geCA6IHkpKS50b0ZpeGVkKDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHJlc1tpXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwYVswXSA9PSBcIm1cIikge1xuICAgICAgICAgICAgICAgICAgICBteCA9IHBhWzFdICsgeDtcbiAgICAgICAgICAgICAgICAgICAgbXkgPSBwYVsyXSArIHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwLCBrayA9IHBhLmxlbmd0aDsgayA8IGtrOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2ldW2tdID0gcGFba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxlbiA9IHJlc1tpXS5sZW5ndGg7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc1tpXVswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgICAgICAgICAgIHggPSBteDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IG15O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgICAgICAgICB4ICs9ICtyZXNbaV1bbGVuIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2XCI6XG4gICAgICAgICAgICAgICAgICAgIHkgKz0gK3Jlc1tpXVtsZW4gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgeCArPSArcmVzW2ldW2xlbiAtIDJdO1xuICAgICAgICAgICAgICAgICAgICB5ICs9ICtyZXNbaV1bbGVuIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgICAgIHB0aC5yZWwgPSBwYXRoQ2xvbmUocmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0aFRvQWJzb2x1dGUocGF0aEFycmF5KSB7XG4gICAgICAgIHZhciBwdGggPSBwYXRocyhwYXRoQXJyYXkpO1xuICAgICAgICBpZiAocHRoLmFicykge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhDbG9uZShwdGguYWJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzKHBhdGhBcnJheSwgXCJhcnJheVwiKSB8fCAhaXMocGF0aEFycmF5ICYmIHBhdGhBcnJheVswXSwgXCJhcnJheVwiKSkgeyAvLyByb3VnaCBhc3N1bXB0aW9uXG4gICAgICAgICAgICBwYXRoQXJyYXkgPSBTbmFwLnBhcnNlUGF0aFN0cmluZyhwYXRoQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGF0aEFycmF5IHx8ICFwYXRoQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1tcIk1cIiwgMCwgMF1dO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXMgPSBbXSxcbiAgICAgICAgICAgIHggPSAwLFxuICAgICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgICBteCA9IDAsXG4gICAgICAgICAgICBteSA9IDAsXG4gICAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgICBwYTA7XG4gICAgICAgIGlmIChwYXRoQXJyYXlbMF1bMF0gPT0gXCJNXCIpIHtcbiAgICAgICAgICAgIHggPSArcGF0aEFycmF5WzBdWzFdO1xuICAgICAgICAgICAgeSA9ICtwYXRoQXJyYXlbMF1bMl07XG4gICAgICAgICAgICBteCA9IHg7XG4gICAgICAgICAgICBteSA9IHk7XG4gICAgICAgICAgICBzdGFydCsrO1xuICAgICAgICAgICAgcmVzWzBdID0gW1wiTVwiLCB4LCB5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3J6ID0gcGF0aEFycmF5Lmxlbmd0aCA9PSAzICYmXG4gICAgICAgICAgICBwYXRoQXJyYXlbMF1bMF0gPT0gXCJNXCIgJiZcbiAgICAgICAgICAgIHBhdGhBcnJheVsxXVswXS50b1VwcGVyQ2FzZSgpID09IFwiUlwiICYmXG4gICAgICAgICAgICBwYXRoQXJyYXlbMl1bMF0udG9VcHBlckNhc2UoKSA9PSBcIlpcIjtcbiAgICAgICAgZm9yICh2YXIgciwgcGEsIGkgPSBzdGFydCwgaWkgPSBwYXRoQXJyYXkubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgcmVzLnB1c2gociA9IFtdKTtcbiAgICAgICAgICAgIHBhID0gcGF0aEFycmF5W2ldO1xuICAgICAgICAgICAgcGEwID0gcGFbMF07XG4gICAgICAgICAgICBpZiAocGEwICE9IHBhMC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgclswXSA9IHBhMC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoclswXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgclsxXSA9IHBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgclsyXSA9IHBhWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgclszXSA9IHBhWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcls0XSA9IHBhWzRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcls1XSA9IHBhWzVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcls2XSA9ICtwYVs2XSArIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByWzddID0gK3BhWzddICsgeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgclsxXSA9ICtwYVsxXSArIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbMV0gPSArcGFbMV0gKyB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJSXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG90cyA9IFt4LCB5XS5jb25jYXQocGEuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDIsIGpqID0gZG90cy5sZW5ndGg7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90c1tqXSA9ICtkb3RzW2pdICsgeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzWysral0gPSArZG90c1tqXSArIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSByZXMuY29uY2F0KGNhdG11bGxSb20yYmV6aWVyKGRvdHMsIGNyeikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJPXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzID0gZWxsaXBzZVBhdGgoeCwgeSwgcGFbMV0sIHBhWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHMucHVzaChkb3RzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5jb25jYXQoZG90cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5jb25jYXQoZWxsaXBzZVBhdGgoeCwgeSwgcGFbMV0sIHBhWzJdLCBwYVszXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IFtcIlVcIl0uY29uY2F0KHJlc1tyZXMubGVuZ3RoIC0gMV0uc2xpY2UoLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbXggPSArcGFbMV0gKyB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSArcGFbMl0gKyB5O1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMSwgamogPSBwYS5sZW5ndGg7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcltqXSA9ICtwYVtqXSArICgoaiAlIDIpID8geCA6IHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGEwID09IFwiUlwiKSB7XG4gICAgICAgICAgICAgICAgZG90cyA9IFt4LCB5XS5jb25jYXQocGEuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIHJlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXMgPSByZXMuY29uY2F0KGNhdG11bGxSb20yYmV6aWVyKGRvdHMsIGNyeikpO1xuICAgICAgICAgICAgICAgIHIgPSBbXCJSXCJdLmNvbmNhdChwYS5zbGljZSgtMikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYTAgPT0gXCJPXCIpIHtcbiAgICAgICAgICAgICAgICByZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgZG90cyA9IGVsbGlwc2VQYXRoKHgsIHksIHBhWzFdLCBwYVsyXSk7XG4gICAgICAgICAgICAgICAgZG90cy5wdXNoKGRvdHNbMF0pO1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcy5jb25jYXQoZG90cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhMCA9PSBcIlVcIikge1xuICAgICAgICAgICAgICAgIHJlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXMgPSByZXMuY29uY2F0KGVsbGlwc2VQYXRoKHgsIHksIHBhWzFdLCBwYVsyXSwgcGFbM10pKTtcbiAgICAgICAgICAgICAgICByID0gW1wiVVwiXS5jb25jYXQocmVzW3Jlcy5sZW5ndGggLSAxXS5zbGljZSgtMikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMCwga2sgPSBwYS5sZW5ndGg7IGsgPCBrazsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJba10gPSBwYVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYTAgPSBwYTAudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChwYTAgIT0gXCJPXCIpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSArbXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gK215O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gclsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG14ID0gcltyLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXkgPSByW3IubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gcltyLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJbci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4gICAgICAgIHB0aC5hYnMgPSBwYXRoQ2xvbmUocmVzKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgZnVuY3Rpb24gbDJjKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIHJldHVybiBbeDEsIHkxLCB4MiwgeTIsIHgyLCB5Ml07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHEyYyh4MSwgeTEsIGF4LCBheSwgeDIsIHkyKSB7XG4gICAgICAgIHZhciBfMTMgPSAxIC8gMyxcbiAgICAgICAgICAgIF8yMyA9IDIgLyAzO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF8xMyAqIHgxICsgXzIzICogYXgsXG4gICAgICAgICAgICAgICAgXzEzICogeTEgKyBfMjMgKiBheSxcbiAgICAgICAgICAgICAgICBfMTMgKiB4MiArIF8yMyAqIGF4LFxuICAgICAgICAgICAgICAgIF8xMyAqIHkyICsgXzIzICogYXksXG4gICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgeTJcbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGEyYyh4MSwgeTEsIHJ4LCByeSwgYW5nbGUsIGxhcmdlX2FyY19mbGFnLCBzd2VlcF9mbGFnLCB4MiwgeTIsIHJlY3Vyc2l2ZSkge1xuICAgICAgICAvLyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvZiB3aGVyZSB0aGlzIG1hdGggY2FtZSBmcm9tIHZpc2l0OlxuICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcbiAgICAgICAgdmFyIF8xMjAgPSBQSSAqIDEyMCAvIDE4MCxcbiAgICAgICAgICAgIHJhZCA9IFBJIC8gMTgwICogKCthbmdsZSB8fCAwKSxcbiAgICAgICAgICAgIHJlcyA9IFtdLFxuICAgICAgICAgICAgeHksXG4gICAgICAgICAgICByb3RhdGUgPSBTbmFwLl8uY2FjaGVyKGZ1bmN0aW9uICh4LCB5LCByYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgWCA9IHggKiBtYXRoLmNvcyhyYWQpIC0geSAqIG1hdGguc2luKHJhZCksXG4gICAgICAgICAgICAgICAgICAgIFkgPSB4ICogbWF0aC5zaW4ocmFkKSArIHkgKiBtYXRoLmNvcyhyYWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7eDogWCwgeTogWX07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIHh5ID0gcm90YXRlKHgxLCB5MSwgLXJhZCk7XG4gICAgICAgICAgICB4MSA9IHh5Lng7XG4gICAgICAgICAgICB5MSA9IHh5Lnk7XG4gICAgICAgICAgICB4eSA9IHJvdGF0ZSh4MiwgeTIsIC1yYWQpO1xuICAgICAgICAgICAgeDIgPSB4eS54O1xuICAgICAgICAgICAgeTIgPSB4eS55O1xuICAgICAgICAgICAgdmFyIGNvcyA9IG1hdGguY29zKFBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgICAgIHNpbiA9IG1hdGguc2luKFBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgICAgIHggPSAoeDEgLSB4MikgLyAyLFxuICAgICAgICAgICAgICAgIHkgPSAoeTEgLSB5MikgLyAyO1xuICAgICAgICAgICAgdmFyIGggPSAoeCAqIHgpIC8gKHJ4ICogcngpICsgKHkgKiB5KSAvIChyeSAqIHJ5KTtcbiAgICAgICAgICAgIGlmIChoID4gMSkge1xuICAgICAgICAgICAgICAgIGggPSBtYXRoLnNxcnQoaCk7XG4gICAgICAgICAgICAgICAgcnggPSBoICogcng7XG4gICAgICAgICAgICAgICAgcnkgPSBoICogcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcngyID0gcnggKiByeCxcbiAgICAgICAgICAgICAgICByeTIgPSByeSAqIHJ5LFxuICAgICAgICAgICAgICAgIGsgPSAobGFyZ2VfYXJjX2ZsYWcgPT0gc3dlZXBfZmxhZyA/IC0xIDogMSkgKlxuICAgICAgICAgICAgICAgICAgICBtYXRoLnNxcnQoYWJzKChyeDIgKiByeTIgLSByeDIgKiB5ICogeSAtIHJ5MiAqIHggKiB4KSAvIChyeDIgKiB5ICogeSArIHJ5MiAqIHggKiB4KSkpLFxuICAgICAgICAgICAgICAgIGN4ID0gayAqIHJ4ICogeSAvIHJ5ICsgKHgxICsgeDIpIC8gMixcbiAgICAgICAgICAgICAgICBjeSA9IGsgKiAtcnkgKiB4IC8gcnggKyAoeTEgKyB5MikgLyAyLFxuICAgICAgICAgICAgICAgIGYxID0gbWF0aC5hc2luKCgoeTEgLSBjeSkgLyByeSkudG9GaXhlZCg5KSksXG4gICAgICAgICAgICAgICAgZjIgPSBtYXRoLmFzaW4oKCh5MiAtIGN5KSAvIHJ5KS50b0ZpeGVkKDkpKTtcblxuICAgICAgICAgICAgZjEgPSB4MSA8IGN4ID8gUEkgLSBmMSA6IGYxO1xuICAgICAgICAgICAgZjIgPSB4MiA8IGN4ID8gUEkgLSBmMiA6IGYyO1xuICAgICAgICAgICAgZjEgPCAwICYmIChmMSA9IFBJICogMiArIGYxKTtcbiAgICAgICAgICAgIGYyIDwgMCAmJiAoZjIgPSBQSSAqIDIgKyBmMik7XG4gICAgICAgICAgICBpZiAoc3dlZXBfZmxhZyAmJiBmMSA+IGYyKSB7XG4gICAgICAgICAgICAgICAgZjEgPSBmMSAtIFBJICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3dlZXBfZmxhZyAmJiBmMiA+IGYxKSB7XG4gICAgICAgICAgICAgICAgZjIgPSBmMiAtIFBJICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGYxID0gcmVjdXJzaXZlWzBdO1xuICAgICAgICAgICAgZjIgPSByZWN1cnNpdmVbMV07XG4gICAgICAgICAgICBjeCA9IHJlY3Vyc2l2ZVsyXTtcbiAgICAgICAgICAgIGN5ID0gcmVjdXJzaXZlWzNdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZiA9IGYyIC0gZjE7XG4gICAgICAgIGlmIChhYnMoZGYpID4gXzEyMCkge1xuICAgICAgICAgICAgdmFyIGYyb2xkID0gZjIsXG4gICAgICAgICAgICAgICAgeDJvbGQgPSB4MixcbiAgICAgICAgICAgICAgICB5Mm9sZCA9IHkyO1xuICAgICAgICAgICAgZjIgPSBmMSArIF8xMjAgKiAoc3dlZXBfZmxhZyAmJiBmMiA+IGYxID8gMSA6IC0xKTtcbiAgICAgICAgICAgIHgyID0gY3ggKyByeCAqIG1hdGguY29zKGYyKTtcbiAgICAgICAgICAgIHkyID0gY3kgKyByeSAqIG1hdGguc2luKGYyKTtcbiAgICAgICAgICAgIHJlcyA9IGEyYyh4MiwgeTIsIHJ4LCByeSwgYW5nbGUsIDAsIHN3ZWVwX2ZsYWcsIHgyb2xkLCB5Mm9sZCwgW2YyLCBmMm9sZCwgY3gsIGN5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZGYgPSBmMiAtIGYxO1xuICAgICAgICB2YXIgYzEgPSBtYXRoLmNvcyhmMSksXG4gICAgICAgICAgICBzMSA9IG1hdGguc2luKGYxKSxcbiAgICAgICAgICAgIGMyID0gbWF0aC5jb3MoZjIpLFxuICAgICAgICAgICAgczIgPSBtYXRoLnNpbihmMiksXG4gICAgICAgICAgICB0ID0gbWF0aC50YW4oZGYgLyA0KSxcbiAgICAgICAgICAgIGh4ID0gNCAvIDMgKiByeCAqIHQsXG4gICAgICAgICAgICBoeSA9IDQgLyAzICogcnkgKiB0LFxuICAgICAgICAgICAgbTEgPSBbeDEsIHkxXSxcbiAgICAgICAgICAgIG0yID0gW3gxICsgaHggKiBzMSwgeTEgLSBoeSAqIGMxXSxcbiAgICAgICAgICAgIG0zID0gW3gyICsgaHggKiBzMiwgeTIgLSBoeSAqIGMyXSxcbiAgICAgICAgICAgIG00ID0gW3gyLCB5Ml07XG4gICAgICAgIG0yWzBdID0gMiAqIG0xWzBdIC0gbTJbMF07XG4gICAgICAgIG0yWzFdID0gMiAqIG0xWzFdIC0gbTJbMV07XG4gICAgICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBbbTIsIG0zLCBtNF0uY29uY2F0KHJlcykuam9pbigpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHZhciBuZXdyZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3cmVzW2ldID0gaSAlIDIgPyByb3RhdGUocmVzW2kgLSAxXSwgcmVzW2ldLCByYWQpLnkgOiByb3RhdGUocmVzW2ldLCByZXNbaSArIDFdLCByYWQpLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3cmVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpbmREb3RBdFNlZ21lbnQocDF4LCBwMXksIGMxeCwgYzF5LCBjMngsIGMyeSwgcDJ4LCBwMnksIHQpIHtcbiAgICAgICAgdmFyIHQxID0gMSAtIHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb3codDEsIDMpICogcDF4ICsgcG93KHQxLCAyKSAqIDMgKiB0ICogYzF4ICsgdDEgKiAzICogdCAqIHQgKiBjMnggKyBwb3codCwgMykgKiBwMngsXG4gICAgICAgICAgICB5OiBwb3codDEsIDMpICogcDF5ICsgcG93KHQxLCAyKSAqIDMgKiB0ICogYzF5ICsgdDEgKiAzICogdCAqIHQgKiBjMnkgKyBwb3codCwgMykgKiBwMnlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgLy8gUmV0dXJucyBib3VuZGluZyBib3ggb2YgY3ViaWMgYmV6aWVyIGN1cnZlLlxuICAgIC8vIFNvdXJjZTogaHR0cDovL2Jsb2cuaGFja2Vycy1jYWZlLm5ldC8yMDA5LzA2L2hvdy10by1jYWxjdWxhdGUtYmV6aWVyLWN1cnZlcy1ib3VuZGluZy5odG1sXG4gICAgLy8gT3JpZ2luYWwgdmVyc2lvbjogTklTSElPIEhpcm9rYXp1XG4gICAgLy8gTW9kaWZpY2F0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL3RpbW8yMjM0NVxuICAgIGZ1bmN0aW9uIGN1cnZlRGltKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuICAgICAgICB2YXIgdHZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgYm91bmRzID0gW1tdLCBbXV0sXG4gICAgICAgICAgICBhLCBiLCBjLCB0LCB0MSwgdDIsIGIyYWMsIHNxcnRiMmFjO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7ICsraSkge1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGIgPSA2ICogeDAgLSAxMiAqIHgxICsgNiAqIHgyO1xuICAgICAgICAgICAgICAgIGEgPSAtMyAqIHgwICsgOSAqIHgxIC0gOSAqIHgyICsgMyAqIHgzO1xuICAgICAgICAgICAgICAgIGMgPSAzICogeDEgLSAzICogeDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGIgPSA2ICogeTAgLSAxMiAqIHkxICsgNiAqIHkyO1xuICAgICAgICAgICAgICAgIGEgPSAtMyAqIHkwICsgOSAqIHkxIC0gOSAqIHkyICsgMyAqIHkzO1xuICAgICAgICAgICAgICAgIGMgPSAzICogeTEgLSAzICogeTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWJzKGEpIDwgMWUtMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWJzKGIpIDwgMWUtMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQgPSAtYyAvIGI7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0ICYmIHQgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHR2YWx1ZXMucHVzaCh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiMmFjID0gYiAqIGIgLSA0ICogYyAqIGE7XG4gICAgICAgICAgICBzcXJ0YjJhYyA9IG1hdGguc3FydChiMmFjKTtcbiAgICAgICAgICAgIGlmIChiMmFjIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdDEgPSAoLWIgKyBzcXJ0YjJhYykgLyAoMiAqIGEpO1xuICAgICAgICAgICAgaWYgKDAgPCB0MSAmJiB0MSA8IDEpIHtcbiAgICAgICAgICAgICAgICB0dmFsdWVzLnB1c2godDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdDIgPSAoLWIgLSBzcXJ0YjJhYykgLyAoMiAqIGEpO1xuICAgICAgICAgICAgaWYgKDAgPCB0MiAmJiB0MiA8IDEpIHtcbiAgICAgICAgICAgICAgICB0dmFsdWVzLnB1c2godDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHgsIHksIGogPSB0dmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgIGpsZW4gPSBqLFxuICAgICAgICAgICAgbXQ7XG4gICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICAgIHQgPSB0dmFsdWVzW2pdO1xuICAgICAgICAgICAgbXQgPSAxIC0gdDtcbiAgICAgICAgICAgIGJvdW5kc1swXVtqXSA9IChtdCAqIG10ICogbXQgKiB4MCkgKyAoMyAqIG10ICogbXQgKiB0ICogeDEpICsgKDMgKiBtdCAqIHQgKiB0ICogeDIpICsgKHQgKiB0ICogdCAqIHgzKTtcbiAgICAgICAgICAgIGJvdW5kc1sxXVtqXSA9IChtdCAqIG10ICogbXQgKiB5MCkgKyAoMyAqIG10ICogbXQgKiB0ICogeTEpICsgKDMgKiBtdCAqIHQgKiB0ICogeTIpICsgKHQgKiB0ICogdCAqIHkzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvdW5kc1swXVtqbGVuXSA9IHgwO1xuICAgICAgICBib3VuZHNbMV1bamxlbl0gPSB5MDtcbiAgICAgICAgYm91bmRzWzBdW2psZW4gKyAxXSA9IHgzO1xuICAgICAgICBib3VuZHNbMV1bamxlbiArIDFdID0geTM7XG4gICAgICAgIGJvdW5kc1swXS5sZW5ndGggPSBib3VuZHNbMV0ubGVuZ3RoID0gamxlbiArIDI7XG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1pbjoge3g6IG1taW4uYXBwbHkoMCwgYm91bmRzWzBdKSwgeTogbW1pbi5hcHBseSgwLCBib3VuZHNbMV0pfSxcbiAgICAgICAgICBtYXg6IHt4OiBtbWF4LmFwcGx5KDAsIGJvdW5kc1swXSksIHk6IG1tYXguYXBwbHkoMCwgYm91bmRzWzFdKX1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXRoMmN1cnZlKHBhdGgsIHBhdGgyKSB7XG4gICAgICAgIHZhciBwdGggPSAhcGF0aDIgJiYgcGF0aHMocGF0aCk7XG4gICAgICAgIGlmICghcGF0aDIgJiYgcHRoLmN1cnZlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aENsb25lKHB0aC5jdXJ2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHAgPSBwYXRoVG9BYnNvbHV0ZShwYXRoKSxcbiAgICAgICAgICAgIHAyID0gcGF0aDIgJiYgcGF0aFRvQWJzb2x1dGUocGF0aDIpLFxuICAgICAgICAgICAgYXR0cnMgPSB7eDogMCwgeTogMCwgYng6IDAsIGJ5OiAwLCBYOiAwLCBZOiAwLCBxeDogbnVsbCwgcXk6IG51bGx9LFxuICAgICAgICAgICAgYXR0cnMyID0ge3g6IDAsIHk6IDAsIGJ4OiAwLCBieTogMCwgWDogMCwgWTogMCwgcXg6IG51bGwsIHF5OiBudWxsfSxcbiAgICAgICAgICAgIHByb2Nlc3NQYXRoID0gZnVuY3Rpb24gKHBhdGgsIGQsIHBjb20pIHtcbiAgICAgICAgICAgICAgICB2YXIgbngsIG55O1xuICAgICAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1wiQ1wiLCBkLngsIGQueSwgZC54LCBkLnksIGQueCwgZC55XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIShwYXRoWzBdIGluIHtUOiAxLCBROiAxfSkgJiYgKGQucXggPSBkLnF5ID0gbnVsbCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXRoWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkLlggPSBwYXRoWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5ZID0gcGF0aFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFtcIkNcIl0uY29uY2F0KGEyYy5hcHBseSgwLCBbZC54LCBkLnldLmNvbmNhdChwYXRoLnNsaWNlKDEpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGNvbSA9PSBcIkNcIiB8fCBwY29tID09IFwiU1wiKSB7IC8vIEluIFwiU1wiIGNhc2Ugd2UgaGF2ZSB0byB0YWtlIGludG8gYWNjb3VudCwgaWYgdGhlIHByZXZpb3VzIGNvbW1hbmQgaXMgQy9TLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG54ID0gZC54ICogMiAtIGQuYng7ICAgICAgICAgIC8vIEFuZCByZWZsZWN0IHRoZSBwcmV2aW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG55ID0gZC55ICogMiAtIGQuYnk7ICAgICAgICAgIC8vIGNvbW1hbmQncyBjb250cm9sIHBvaW50IHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHBvaW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIHNvbWUgZWxzZSBvciBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnggPSBkLng7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnkgPSBkLnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gW1wiQ1wiLCBueCwgbnldLmNvbmNhdChwYXRoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBjb20gPT0gXCJRXCIgfHwgcGNvbSA9PSBcIlRcIikgeyAvLyBJbiBcIlRcIiBjYXNlIHdlIGhhdmUgdG8gdGFrZSBpbnRvIGFjY291bnQsIGlmIHRoZSBwcmV2aW91cyBjb21tYW5kIGlzIFEvVC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnF4ID0gZC54ICogMiAtIGQucXg7ICAgICAgICAvLyBBbmQgbWFrZSBhIHJlZmxlY3Rpb24gc2ltaWxhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucXkgPSBkLnkgKiAyIC0gZC5xeTsgICAgICAgIC8vIHRvIGNhc2UgXCJTXCIuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3Igc29tZXRoaW5nIGVsc2Ugb3Igbm90aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQucXggPSBkLng7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5xeSA9IGQueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBbXCJDXCJdLmNvbmNhdChxMmMoZC54LCBkLnksIGQucXgsIGQucXksIHBhdGhbMV0sIHBhdGhbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZC5xeCA9IHBhdGhbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkLnF5ID0gcGF0aFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBbXCJDXCJdLmNvbmNhdChxMmMoZC54LCBkLnksIHBhdGhbMV0sIHBhdGhbMl0sIHBhdGhbM10sIHBhdGhbNF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFtcIkNcIl0uY29uY2F0KGwyYyhkLngsIGQueSwgcGF0aFsxXSwgcGF0aFsyXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gW1wiQ1wiXS5jb25jYXQobDJjKGQueCwgZC55LCBwYXRoWzFdLCBkLnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFtcIkNcIl0uY29uY2F0KGwyYyhkLngsIGQueSwgZC54LCBwYXRoWzFdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBbXCJDXCJdLmNvbmNhdChsMmMoZC54LCBkLnksIGQuWCwgZC5ZKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZml4QXJjID0gZnVuY3Rpb24gKHBwLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBwW2ldLmxlbmd0aCA+IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHBbaV0uc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBpID0gcHBbaV07XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwaS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBjb21zMVtpXSA9IFwiQVwiOyAvLyBpZiBjcmVhdGVkIG11bHRpcGxlIEM6cywgdGhlaXIgb3JpZ2luYWwgc2VnIGlzIHNhdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwMiAmJiAocGNvbXMyW2ldID0gXCJBXCIpOyAvLyB0aGUgc2FtZSBhcyBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcHAuc3BsaWNlKGkrKywgMCwgW1wiQ1wiXS5jb25jYXQocGkuc3BsaWNlKDAsIDYpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHAuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBpaSA9IG1tYXgocC5sZW5ndGgsIHAyICYmIHAyLmxlbmd0aCB8fCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZml4TSA9IGZ1bmN0aW9uIChwYXRoMSwgcGF0aDIsIGExLCBhMiwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoMSAmJiBwYXRoMiAmJiBwYXRoMVtpXVswXSA9PSBcIk1cIiAmJiBwYXRoMltpXVswXSAhPSBcIk1cIikge1xuICAgICAgICAgICAgICAgICAgICBwYXRoMi5zcGxpY2UoaSwgMCwgW1wiTVwiLCBhMi54LCBhMi55XSk7XG4gICAgICAgICAgICAgICAgICAgIGExLmJ4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYTEuYnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBhMS54ID0gcGF0aDFbaV1bMV07XG4gICAgICAgICAgICAgICAgICAgIGExLnkgPSBwYXRoMVtpXVsyXTtcbiAgICAgICAgICAgICAgICAgICAgaWkgPSBtbWF4KHAubGVuZ3RoLCBwMiAmJiBwMi5sZW5ndGggfHwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBjb21zMSA9IFtdLCAvLyBwYXRoIGNvbW1hbmRzIG9mIG9yaWdpbmFsIHBhdGggcFxuICAgICAgICAgICAgcGNvbXMyID0gW10sIC8vIHBhdGggY29tbWFuZHMgb2Ygb3JpZ2luYWwgcGF0aCBwMlxuICAgICAgICAgICAgcGZpcnN0ID0gXCJcIiwgLy8gdGVtcG9yYXJ5IGhvbGRlciBmb3Igb3JpZ2luYWwgcGF0aCBjb21tYW5kXG4gICAgICAgICAgICBwY29tID0gXCJcIjsgLy8gaG9sZGVyIGZvciBwcmV2aW91cyBwYXRoIGNvbW1hbmQgb2Ygb3JpZ2luYWwgcGF0aFxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBtbWF4KHAubGVuZ3RoLCBwMiAmJiBwMi5sZW5ndGggfHwgMCk7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBwW2ldICYmIChwZmlyc3QgPSBwW2ldWzBdKTsgLy8gc2F2ZSBjdXJyZW50IHBhdGggY29tbWFuZFxuXG4gICAgICAgICAgICBpZiAocGZpcnN0ICE9IFwiQ1wiKSAvLyBDIGlzIG5vdCBzYXZlZCB5ZXQsIGJlY2F1c2UgaXQgbWF5IGJlIHJlc3VsdCBvZiBjb252ZXJzaW9uXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGNvbXMxW2ldID0gcGZpcnN0OyAvLyBTYXZlIGN1cnJlbnQgcGF0aCBjb21tYW5kXG4gICAgICAgICAgICAgICAgaSAmJiAoIHBjb20gPSBwY29tczFbaSAtIDFdKTsgLy8gR2V0IHByZXZpb3VzIHBhdGggY29tbWFuZCBwY29tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwW2ldID0gcHJvY2Vzc1BhdGgocFtpXSwgYXR0cnMsIHBjb20pOyAvLyBQcmV2aW91cyBwYXRoIGNvbW1hbmQgaXMgaW5wdXR0ZWQgdG8gcHJvY2Vzc1BhdGhcblxuICAgICAgICAgICAgaWYgKHBjb21zMVtpXSAhPSBcIkFcIiAmJiBwZmlyc3QgPT0gXCJDXCIpIHBjb21zMVtpXSA9IFwiQ1wiOyAvLyBBIGlzIHRoZSBvbmx5IGNvbW1hbmRcbiAgICAgICAgICAgIC8vIHdoaWNoIG1heSBwcm9kdWNlIG11bHRpcGxlIEM6c1xuICAgICAgICAgICAgLy8gc28gd2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCBDIGlzIGFsc28gQyBpbiBvcmlnaW5hbCBwYXRoXG5cbiAgICAgICAgICAgIGZpeEFyYyhwLCBpKTsgLy8gZml4QXJjIGFkZHMgYWxzbyB0aGUgcmlnaHQgYW1vdW50IG9mIEE6cyB0byBwY29tczFcblxuICAgICAgICAgICAgaWYgKHAyKSB7IC8vIHRoZSBzYW1lIHByb2NlZHVyZXMgaXMgZG9uZSB0byBwMlxuICAgICAgICAgICAgICAgIHAyW2ldICYmIChwZmlyc3QgPSBwMltpXVswXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBmaXJzdCAhPSBcIkNcIikge1xuICAgICAgICAgICAgICAgICAgICBwY29tczJbaV0gPSBwZmlyc3Q7XG4gICAgICAgICAgICAgICAgICAgIGkgJiYgKHBjb20gPSBwY29tczJbaSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcDJbaV0gPSBwcm9jZXNzUGF0aChwMltpXSwgYXR0cnMyLCBwY29tKTtcblxuICAgICAgICAgICAgICAgIGlmIChwY29tczJbaV0gIT0gXCJBXCIgJiYgcGZpcnN0ID09IFwiQ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBjb21zMltpXSA9IFwiQ1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpeEFyYyhwMiwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaXhNKHAsIHAyLCBhdHRycywgYXR0cnMyLCBpKTtcbiAgICAgICAgICAgIGZpeE0ocDIsIHAsIGF0dHJzMiwgYXR0cnMsIGkpO1xuICAgICAgICAgICAgdmFyIHNlZyA9IHBbaV0sXG4gICAgICAgICAgICAgICAgc2VnMiA9IHAyICYmIHAyW2ldLFxuICAgICAgICAgICAgICAgIHNlZ2xlbiA9IHNlZy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgc2VnMmxlbiA9IHAyICYmIHNlZzIubGVuZ3RoO1xuICAgICAgICAgICAgYXR0cnMueCA9IHNlZ1tzZWdsZW4gLSAyXTtcbiAgICAgICAgICAgIGF0dHJzLnkgPSBzZWdbc2VnbGVuIC0gMV07XG4gICAgICAgICAgICBhdHRycy5ieCA9IHRvRmxvYXQoc2VnW3NlZ2xlbiAtIDRdKSB8fCBhdHRycy54O1xuICAgICAgICAgICAgYXR0cnMuYnkgPSB0b0Zsb2F0KHNlZ1tzZWdsZW4gLSAzXSkgfHwgYXR0cnMueTtcbiAgICAgICAgICAgIGF0dHJzMi5ieCA9IHAyICYmICh0b0Zsb2F0KHNlZzJbc2VnMmxlbiAtIDRdKSB8fCBhdHRyczIueCk7XG4gICAgICAgICAgICBhdHRyczIuYnkgPSBwMiAmJiAodG9GbG9hdChzZWcyW3NlZzJsZW4gLSAzXSkgfHwgYXR0cnMyLnkpO1xuICAgICAgICAgICAgYXR0cnMyLnggPSBwMiAmJiBzZWcyW3NlZzJsZW4gLSAyXTtcbiAgICAgICAgICAgIGF0dHJzMi55ID0gcDIgJiYgc2VnMltzZWcybGVuIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwMikge1xuICAgICAgICAgICAgcHRoLmN1cnZlID0gcGF0aENsb25lKHApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwMiA/IFtwLCBwMl0gOiBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBQYXRoKHBhdGgsIG1hdHJpeCkge1xuICAgICAgICBpZiAoIW1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHgsIHksIGksIGosIGlpLCBqaiwgcGF0aGk7XG4gICAgICAgIHBhdGggPSBwYXRoMmN1cnZlKHBhdGgpO1xuICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IHBhdGgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgcGF0aGkgPSBwYXRoW2ldO1xuICAgICAgICAgICAgZm9yIChqID0gMSwgamogPSBwYXRoaS5sZW5ndGg7IGogPCBqajsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgeCA9IG1hdHJpeC54KHBhdGhpW2pdLCBwYXRoaVtqICsgMV0pO1xuICAgICAgICAgICAgICAgIHkgPSBtYXRyaXgueShwYXRoaVtqXSwgcGF0aGlbaiArIDFdKTtcbiAgICAgICAgICAgICAgICBwYXRoaVtqXSA9IHg7XG4gICAgICAgICAgICAgICAgcGF0aGlbaiArIDFdID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICAvLyBodHRwOi8vc2NoZXBlcnMuY2MvZ2V0dGluZy10by10aGUtcG9pbnRcbiAgICBmdW5jdGlvbiBjYXRtdWxsUm9tMmJlemllcihjcnAsIHopIHtcbiAgICAgICAgdmFyIGQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlMZW4gPSBjcnAubGVuZ3RoOyBpTGVuIC0gMiAqICF6ID4gaTsgaSArPSAyKSB7XG4gICAgICAgICAgICB2YXIgcCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiArY3JwW2kgLSAyXSwgeTogK2NycFtpIC0gMV19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3g6ICtjcnBbaV0sICAgICB5OiArY3JwW2kgKyAxXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogK2NycFtpICsgMl0sIHk6ICtjcnBbaSArIDNdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiArY3JwW2kgKyA0XSwgeTogK2NycFtpICsgNV19XG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAoeikge1xuICAgICAgICAgICAgICAgIGlmICghaSkge1xuICAgICAgICAgICAgICAgICAgICBwWzBdID0ge3g6ICtjcnBbaUxlbiAtIDJdLCB5OiArY3JwW2lMZW4gLSAxXX07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpTGVuIC0gNCA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBbM10gPSB7eDogK2NycFswXSwgeTogK2NycFsxXX07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpTGVuIC0gMiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBbMl0gPSB7eDogK2NycFswXSwgeTogK2NycFsxXX07XG4gICAgICAgICAgICAgICAgICAgIHBbM10gPSB7eDogK2NycFsyXSwgeTogK2NycFszXX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaUxlbiAtIDQgPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBwWzNdID0gcFsyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBbMF0gPSB7eDogK2NycFtpXSwgeTogK2NycFtpICsgMV19O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQucHVzaChbXCJDXCIsXG4gICAgICAgICAgICAgICAgICAoLXBbMF0ueCArIDYgKiBwWzFdLnggKyBwWzJdLngpIC8gNixcbiAgICAgICAgICAgICAgICAgICgtcFswXS55ICsgNiAqIHBbMV0ueSArIHBbMl0ueSkgLyA2LFxuICAgICAgICAgICAgICAgICAgKHBbMV0ueCArIDYgKiBwWzJdLnggLSBwWzNdLngpIC8gNixcbiAgICAgICAgICAgICAgICAgIChwWzFdLnkgKyA2KnBbMl0ueSAtIHBbM10ueSkgLyA2LFxuICAgICAgICAgICAgICAgICAgcFsyXS54LFxuICAgICAgICAgICAgICAgICAgcFsyXS55XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cblxuICAgIC8vIGV4cG9ydFxuICAgIFNuYXAucGF0aCA9IHBhdGhzO1xuXG4gICAgLypcXFxuICAgICAqIFNuYXAucGF0aC5nZXRUb3RhbExlbmd0aFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBnaXZlbiBwYXRoIGluIHBpeGVsc1xuICAgICAqKlxuICAgICAtIHBhdGggKHN0cmluZykgU1ZHIHBhdGggc3RyaW5nXG4gICAgICoqXG4gICAgID0gKG51bWJlcikgbGVuZ3RoXG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5nZXRUb3RhbExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoO1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLnBhdGguZ2V0UG9pbnRBdExlbmd0aFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBvaW50IGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGxlbmd0aCBhbG9uZyB0aGUgZ2l2ZW4gcGF0aFxuICAgICAqKlxuICAgICAtIHBhdGggKHN0cmluZykgU1ZHIHBhdGggc3RyaW5nXG4gICAgIC0gbGVuZ3RoIChudW1iZXIpIGxlbmd0aCwgaW4gcGl4ZWxzLCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgcGF0aCwgZXhjbHVkaW5nIG5vbi1yZW5kZXJpbmcganVtcHNcbiAgICAgKipcbiAgICAgPSAob2JqZWN0KSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9pbnQ6XG4gICAgIG8ge1xuICAgICBvICAgICB4OiAobnVtYmVyKSB4IGNvb3JkaW5hdGUsXG4gICAgIG8gICAgIHk6IChudW1iZXIpIHkgY29vcmRpbmF0ZSxcbiAgICAgbyAgICAgYWxwaGE6IChudW1iZXIpIGFuZ2xlIG9mIGRlcml2YXRpdmVcbiAgICAgbyB9XG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5nZXRQb2ludEF0TGVuZ3RoID0gZ2V0UG9pbnRBdExlbmd0aDtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLmdldFN1YnBhdGhcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgdGhlIHN1YnBhdGggb2YgYSBnaXZlbiBwYXRoIGJldHdlZW4gZ2l2ZW4gc3RhcnQgYW5kIGVuZCBsZW5ndGhzXG4gICAgICoqXG4gICAgIC0gcGF0aCAoc3RyaW5nKSBTVkcgcGF0aCBzdHJpbmdcbiAgICAgLSBmcm9tIChudW1iZXIpIGxlbmd0aCwgaW4gcGl4ZWxzLCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgcGF0aCB0byB0aGUgc3RhcnQgb2YgdGhlIHNlZ21lbnRcbiAgICAgLSB0byAobnVtYmVyKSBsZW5ndGgsIGluIHBpeGVscywgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhdGggdG8gdGhlIGVuZCBvZiB0aGUgc2VnbWVudFxuICAgICAqKlxuICAgICA9IChzdHJpbmcpIHBhdGggc3RyaW5nIGRlZmluaXRpb24gZm9yIHRoZSBzZWdtZW50XG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5nZXRTdWJwYXRoID0gZnVuY3Rpb24gKHBhdGgsIGZyb20sIHRvKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFRvdGFsTGVuZ3RoKHBhdGgpIC0gdG8gPCAxZS02KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U3VicGF0aHNBdExlbmd0aChwYXRoLCBmcm9tKS5lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSBnZXRTdWJwYXRoc0F0TGVuZ3RoKHBhdGgsIHRvLCAxKTtcbiAgICAgICAgcmV0dXJuIGZyb20gPyBnZXRTdWJwYXRoc0F0TGVuZ3RoKGEsIGZyb20pLmVuZCA6IGE7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5nZXRUb3RhbExlbmd0aFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBwYXRoIGluIHBpeGVscyAob25seSB3b3JrcyBmb3IgYHBhdGhgIGVsZW1lbnRzKVxuICAgICA9IChudW1iZXIpIGxlbmd0aFxuICAgIFxcKi9cbiAgICBlbHByb3RvLmdldFRvdGFsTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmdldFRvdGFsTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFNJRVJSQSBFbGVtZW50LmdldFBvaW50QXRMZW5ndGgoKS9FbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk6IElmIGEgPHBhdGg+IGlzIGJyb2tlbiBpbnRvIGRpZmZlcmVudCBzZWdtZW50cywgaXMgdGhlIGp1bXAgZGlzdGFuY2UgdG8gdGhlIG5ldyBjb29yZGluYXRlcyBzZXQgYnkgdGhlIF9NXyBvciBfbV8gY29tbWFuZHMgY2FsY3VsYXRlZCBhcyBwYXJ0IG9mIHRoZSBwYXRoJ3MgdG90YWwgbGVuZ3RoP1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmdldFBvaW50QXRMZW5ndGhcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgY29vcmRpbmF0ZXMgb2YgdGhlIHBvaW50IGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGxlbmd0aCBvbiB0aGUgZ2l2ZW4gcGF0aCAob25seSB3b3JrcyBmb3IgYHBhdGhgIGVsZW1lbnRzKVxuICAgICAqKlxuICAgICAtIGxlbmd0aCAobnVtYmVyKSBsZW5ndGgsIGluIHBpeGVscywgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhdGgsIGV4Y2x1ZGluZyBub24tcmVuZGVyaW5nIGp1bXBzXG4gICAgICoqXG4gICAgID0gKG9iamVjdCkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvaW50OlxuICAgICBvIHtcbiAgICAgbyAgICAgeDogKG51bWJlcikgeCBjb29yZGluYXRlLFxuICAgICBvICAgICB5OiAobnVtYmVyKSB5IGNvb3JkaW5hdGUsXG4gICAgIG8gICAgIGFscGhhOiAobnVtYmVyKSBhbmdsZSBvZiBkZXJpdmF0aXZlXG4gICAgIG8gfVxuICAgIFxcKi9cbiAgICBlbHByb3RvLmdldFBvaW50QXRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2ludEF0TGVuZ3RoKHRoaXMuYXR0cihcImRcIiksIGxlbmd0aCk7XG4gICAgfTtcbiAgICAvLyBTSUVSUkEgRWxlbWVudC5nZXRTdWJwYXRoKCk6IFNpbWlsYXIgdG8gdGhlIHByb2JsZW0gZm9yIEVsZW1lbnQuZ2V0UG9pbnRBdExlbmd0aCgpLiBVbmNsZWFyIGhvdyB0aGlzIHdvdWxkIHdvcmsgZm9yIGEgc2VnbWVudGVkIHBhdGguIE92ZXJhbGwsIHRoZSBjb25jZXB0IG9mIF9zdWJwYXRoXyBhbmQgd2hhdCBJJ20gY2FsbGluZyBhIF9zZWdtZW50XyAoc2VyaWVzIG9mIG5vbi1fTV8gb3IgX1pfIGNvbW1hbmRzKSBpcyB1bmNsZWFyLlxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmdldFN1YnBhdGhcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgc3VicGF0aCBvZiBhIGdpdmVuIGVsZW1lbnQgZnJvbSBnaXZlbiBzdGFydCBhbmQgZW5kIGxlbmd0aHMgKG9ubHkgd29ya3MgZm9yIGBwYXRoYCBlbGVtZW50cylcbiAgICAgKipcbiAgICAgLSBmcm9tIChudW1iZXIpIGxlbmd0aCwgaW4gcGl4ZWxzLCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgcGF0aCB0byB0aGUgc3RhcnQgb2YgdGhlIHNlZ21lbnRcbiAgICAgLSB0byAobnVtYmVyKSBsZW5ndGgsIGluIHBpeGVscywgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhdGggdG8gdGhlIGVuZCBvZiB0aGUgc2VnbWVudFxuICAgICAqKlxuICAgICA9IChzdHJpbmcpIHBhdGggc3RyaW5nIGRlZmluaXRpb24gZm9yIHRoZSBzZWdtZW50XG4gICAgXFwqL1xuICAgIGVscHJvdG8uZ2V0U3VicGF0aCA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gU25hcC5wYXRoLmdldFN1YnBhdGgodGhpcy5hdHRyKFwiZFwiKSwgZnJvbSwgdG8pO1xuICAgIH07XG4gICAgU25hcC5fLmJveCA9IGJveDtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLmZpbmREb3RzQXRTZWdtZW50XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZFxuICAgICAqKlxuICAgICAqIEZpbmRzIGRvdCBjb29yZGluYXRlcyBvbiB0aGUgZ2l2ZW4gY3ViaWMgYmV6acOpciBjdXJ2ZSBhdCB0aGUgZ2l2ZW4gdFxuICAgICAtIHAxeCAobnVtYmVyKSB4IG9mIHRoZSBmaXJzdCBwb2ludCBvZiB0aGUgY3VydmVcbiAgICAgLSBwMXkgKG51bWJlcikgeSBvZiB0aGUgZmlyc3QgcG9pbnQgb2YgdGhlIGN1cnZlXG4gICAgIC0gYzF4IChudW1iZXIpIHggb2YgdGhlIGZpcnN0IGFuY2hvciBvZiB0aGUgY3VydmVcbiAgICAgLSBjMXkgKG51bWJlcikgeSBvZiB0aGUgZmlyc3QgYW5jaG9yIG9mIHRoZSBjdXJ2ZVxuICAgICAtIGMyeCAobnVtYmVyKSB4IG9mIHRoZSBzZWNvbmQgYW5jaG9yIG9mIHRoZSBjdXJ2ZVxuICAgICAtIGMyeSAobnVtYmVyKSB5IG9mIHRoZSBzZWNvbmQgYW5jaG9yIG9mIHRoZSBjdXJ2ZVxuICAgICAtIHAyeCAobnVtYmVyKSB4IG9mIHRoZSBzZWNvbmQgcG9pbnQgb2YgdGhlIGN1cnZlXG4gICAgIC0gcDJ5IChudW1iZXIpIHkgb2YgdGhlIHNlY29uZCBwb2ludCBvZiB0aGUgY3VydmVcbiAgICAgLSB0IChudW1iZXIpIHBvc2l0aW9uIG9uIHRoZSBjdXJ2ZSAoMC4uMSlcbiAgICAgPSAob2JqZWN0KSBwb2ludCBpbmZvcm1hdGlvbiBpbiBmb3JtYXQ6XG4gICAgIG8ge1xuICAgICBvICAgICB4OiAobnVtYmVyKSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50LFxuICAgICBvICAgICB5OiAobnVtYmVyKSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50LFxuICAgICBvICAgICBtOiB7XG4gICAgIG8gICAgICAgICB4OiAobnVtYmVyKSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgYW5jaG9yLFxuICAgICBvICAgICAgICAgeTogKG51bWJlcikgeSBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IGFuY2hvclxuICAgICBvICAgICB9LFxuICAgICBvICAgICBuOiB7XG4gICAgIG8gICAgICAgICB4OiAobnVtYmVyKSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IGFuY2hvcixcbiAgICAgbyAgICAgICAgIHk6IChudW1iZXIpIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgYW5jaG9yXG4gICAgIG8gICAgIH0sXG4gICAgIG8gICAgIHN0YXJ0OiB7XG4gICAgIG8gICAgICAgICB4OiAobnVtYmVyKSB4IGNvb3JkaW5hdGUgb2YgdGhlIHN0YXJ0IG9mIHRoZSBjdXJ2ZSxcbiAgICAgbyAgICAgICAgIHk6IChudW1iZXIpIHkgY29vcmRpbmF0ZSBvZiB0aGUgc3RhcnQgb2YgdGhlIGN1cnZlXG4gICAgIG8gICAgIH0sXG4gICAgIG8gICAgIGVuZDoge1xuICAgICBvICAgICAgICAgeDogKG51bWJlcikgeCBjb29yZGluYXRlIG9mIHRoZSBlbmQgb2YgdGhlIGN1cnZlLFxuICAgICBvICAgICAgICAgeTogKG51bWJlcikgeSBjb29yZGluYXRlIG9mIHRoZSBlbmQgb2YgdGhlIGN1cnZlXG4gICAgIG8gICAgIH0sXG4gICAgIG8gICAgIGFscGhhOiAobnVtYmVyKSBhbmdsZSBvZiB0aGUgY3VydmUgZGVyaXZhdGl2ZSBhdCB0aGUgcG9pbnRcbiAgICAgbyB9XG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5maW5kRG90c0F0U2VnbWVudCA9IGZpbmREb3RzQXRTZWdtZW50O1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLnBhdGguYmV6aWVyQkJveFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogVXRpbGl0eSBtZXRob2RcbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIHRoZSBib3VuZGluZyBib3ggb2YgYSBnaXZlbiBjdWJpYyBiZXppw6lyIGN1cnZlXG4gICAgIC0gcDF4IChudW1iZXIpIHggb2YgdGhlIGZpcnN0IHBvaW50IG9mIHRoZSBjdXJ2ZVxuICAgICAtIHAxeSAobnVtYmVyKSB5IG9mIHRoZSBmaXJzdCBwb2ludCBvZiB0aGUgY3VydmVcbiAgICAgLSBjMXggKG51bWJlcikgeCBvZiB0aGUgZmlyc3QgYW5jaG9yIG9mIHRoZSBjdXJ2ZVxuICAgICAtIGMxeSAobnVtYmVyKSB5IG9mIHRoZSBmaXJzdCBhbmNob3Igb2YgdGhlIGN1cnZlXG4gICAgIC0gYzJ4IChudW1iZXIpIHggb2YgdGhlIHNlY29uZCBhbmNob3Igb2YgdGhlIGN1cnZlXG4gICAgIC0gYzJ5IChudW1iZXIpIHkgb2YgdGhlIHNlY29uZCBhbmNob3Igb2YgdGhlIGN1cnZlXG4gICAgIC0gcDJ4IChudW1iZXIpIHggb2YgdGhlIHNlY29uZCBwb2ludCBvZiB0aGUgY3VydmVcbiAgICAgLSBwMnkgKG51bWJlcikgeSBvZiB0aGUgc2Vjb25kIHBvaW50IG9mIHRoZSBjdXJ2ZVxuICAgICAqIG9yXG4gICAgIC0gYmV6IChhcnJheSkgYXJyYXkgb2Ygc2l4IHBvaW50cyBmb3IgYmV6acOpciBjdXJ2ZVxuICAgICA9IChvYmplY3QpIGJvdW5kaW5nIGJveFxuICAgICBvIHtcbiAgICAgbyAgICAgeDogKG51bWJlcikgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHRvcCBwb2ludCBvZiB0aGUgYm94LFxuICAgICBvICAgICB5OiAobnVtYmVyKSB5IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgdG9wIHBvaW50IG9mIHRoZSBib3gsXG4gICAgIG8gICAgIHgyOiAobnVtYmVyKSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IGJvdHRvbSBwb2ludCBvZiB0aGUgYm94LFxuICAgICBvICAgICB5MjogKG51bWJlcikgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBib3R0b20gcG9pbnQgb2YgdGhlIGJveCxcbiAgICAgbyAgICAgd2lkdGg6IChudW1iZXIpIHdpZHRoIG9mIHRoZSBib3gsXG4gICAgIG8gICAgIGhlaWdodDogKG51bWJlcikgaGVpZ2h0IG9mIHRoZSBib3hcbiAgICAgbyB9XG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5iZXppZXJCQm94ID0gYmV6aWVyQkJveDtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLmlzUG9pbnRJbnNpZGVCQm94XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZFxuICAgICAqKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGdpdmVuIHBvaW50IGlzIGluc2lkZSBib3VuZGluZyBib3hcbiAgICAgLSBiYm94IChzdHJpbmcpIGJvdW5kaW5nIGJveFxuICAgICAtIHggKHN0cmluZykgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICAgICAtIHkgKHN0cmluZykgeSBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICAgICA9IChib29sZWFuKSBgdHJ1ZWAgaWYgcG9pbnQgaXMgaW5zaWRlXG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5pc1BvaW50SW5zaWRlQkJveCA9IGlzUG9pbnRJbnNpZGVCQm94O1xuICAgIFNuYXAuY2xvc2VzdCA9IGZ1bmN0aW9uICh4LCB5LCBYLCBZKSB7XG4gICAgICAgIHZhciByID0gMTAwLFxuICAgICAgICAgICAgYiA9IGJveCh4IC0gciAvIDIsIHkgLSByIC8gMiwgciwgciksXG4gICAgICAgICAgICBpbnNpZGUgPSBbXSxcbiAgICAgICAgICAgIGdldHRlciA9IFhbMF0uaGFzT3duUHJvcGVydHkoXCJ4XCIpID8gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB4OiBYW2ldLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IFhbaV0ueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB4OiBYW2ldLFxuICAgICAgICAgICAgICAgICAgICB5OiBZW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3VuZCA9IDA7XG4gICAgICAgIHdoaWxlIChyIDw9IDFlNiAmJiAhZm91bmQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IFgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB4eSA9IGdldHRlcihpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQb2ludEluc2lkZUJCb3goYiwgeHkueCwgeHkueSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQrKztcbiAgICAgICAgICAgICAgICAgICAgaW5zaWRlLnB1c2goeHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgciAqPSAyO1xuICAgICAgICAgICAgICAgIGIgPSBib3goeCAtIHIgLyAyLCB5IC0gciAvIDIsIHIsIHIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIgPT0gMWU2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IEluZmluaXR5LFxuICAgICAgICAgICAgcmVzO1xuICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IGluc2lkZS5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbCA9IFNuYXAubGVuKHgsIHksIGluc2lkZVtpXS54LCBpbnNpZGVbaV0ueSk7XG4gICAgICAgICAgICBpZiAobGVuID4gbCkge1xuICAgICAgICAgICAgICAgIGxlbiA9IGw7XG4gICAgICAgICAgICAgICAgaW5zaWRlW2ldLmxlbiA9IGw7XG4gICAgICAgICAgICAgICAgcmVzID0gaW5zaWRlW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLmlzQkJveEludGVyc2VjdFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogVXRpbGl0eSBtZXRob2RcbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0d28gYm91bmRpbmcgYm94ZXMgaW50ZXJzZWN0XG4gICAgIC0gYmJveDEgKHN0cmluZykgZmlyc3QgYm91bmRpbmcgYm94XG4gICAgIC0gYmJveDIgKHN0cmluZykgc2Vjb25kIGJvdW5kaW5nIGJveFxuICAgICA9IChib29sZWFuKSBgdHJ1ZWAgaWYgYm91bmRpbmcgYm94ZXMgaW50ZXJzZWN0XG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5pc0JCb3hJbnRlcnNlY3QgPSBpc0JCb3hJbnRlcnNlY3Q7XG4gICAgLypcXFxuICAgICAqIFNuYXAucGF0aC5pbnRlcnNlY3Rpb25cbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kXG4gICAgICoqXG4gICAgICogRmluZHMgaW50ZXJzZWN0aW9ucyBvZiB0d28gcGF0aHNcbiAgICAgLSBwYXRoMSAoc3RyaW5nKSBwYXRoIHN0cmluZ1xuICAgICAtIHBhdGgyIChzdHJpbmcpIHBhdGggc3RyaW5nXG4gICAgID0gKGFycmF5KSBkb3RzIG9mIGludGVyc2VjdGlvblxuICAgICBvIFtcbiAgICAgbyAgICAge1xuICAgICBvICAgICAgICAgeDogKG51bWJlcikgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludCxcbiAgICAgbyAgICAgICAgIHk6IChudW1iZXIpIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQsXG4gICAgIG8gICAgICAgICB0MTogKG51bWJlcikgdCB2YWx1ZSBmb3Igc2VnbWVudCBvZiBwYXRoMSxcbiAgICAgbyAgICAgICAgIHQyOiAobnVtYmVyKSB0IHZhbHVlIGZvciBzZWdtZW50IG9mIHBhdGgyLFxuICAgICBvICAgICAgICAgc2VnbWVudDE6IChudW1iZXIpIG9yZGVyIG51bWJlciBmb3Igc2VnbWVudCBvZiBwYXRoMSxcbiAgICAgbyAgICAgICAgIHNlZ21lbnQyOiAobnVtYmVyKSBvcmRlciBudW1iZXIgZm9yIHNlZ21lbnQgb2YgcGF0aDIsXG4gICAgIG8gICAgICAgICBiZXoxOiAoYXJyYXkpIGVpZ2h0IGNvb3JkaW5hdGVzIHJlcHJlc2VudGluZyBiZXppw6lyIGN1cnZlIGZvciB0aGUgc2VnbWVudCBvZiBwYXRoMSxcbiAgICAgbyAgICAgICAgIGJlejI6IChhcnJheSkgZWlnaHQgY29vcmRpbmF0ZXMgcmVwcmVzZW50aW5nIGJlemnDqXIgY3VydmUgZm9yIHRoZSBzZWdtZW50IG9mIHBhdGgyXG4gICAgIG8gICAgIH1cbiAgICAgbyBdXG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC5pbnRlcnNlY3Rpb24gPSBwYXRoSW50ZXJzZWN0aW9uO1xuICAgIFNuYXAucGF0aC5pbnRlcnNlY3Rpb25OdW1iZXIgPSBwYXRoSW50ZXJzZWN0aW9uTnVtYmVyO1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLnBhdGguaXNQb2ludEluc2lkZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogVXRpbGl0eSBtZXRob2RcbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBnaXZlbiBwb2ludCBpcyBpbnNpZGUgYSBnaXZlbiBjbG9zZWQgcGF0aC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGZpbGwgbW9kZSBkb2VzbuKAmXQgYWZmZWN0IHRoZSByZXN1bHQgb2YgdGhpcyBtZXRob2QuXG4gICAgIC0gcGF0aCAoc3RyaW5nKSBwYXRoIHN0cmluZ1xuICAgICAtIHggKG51bWJlcikgeCBvZiB0aGUgcG9pbnRcbiAgICAgLSB5IChudW1iZXIpIHkgb2YgdGhlIHBvaW50XG4gICAgID0gKGJvb2xlYW4pIGB0cnVlYCBpZiBwb2ludCBpcyBpbnNpZGUgdGhlIHBhdGhcbiAgICBcXCovXG4gICAgU25hcC5wYXRoLmlzUG9pbnRJbnNpZGUgPSBpc1BvaW50SW5zaWRlUGF0aDtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLmdldEJCb3hcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kXG4gICAgICoqXG4gICAgICogUmV0dXJucyB0aGUgYm91bmRpbmcgYm94IG9mIGEgZ2l2ZW4gcGF0aFxuICAgICAtIHBhdGggKHN0cmluZykgcGF0aCBzdHJpbmdcbiAgICAgPSAob2JqZWN0KSBib3VuZGluZyBib3hcbiAgICAgbyB7XG4gICAgIG8gICAgIHg6IChudW1iZXIpIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCB0b3AgcG9pbnQgb2YgdGhlIGJveCxcbiAgICAgbyAgICAgeTogKG51bWJlcikgeSBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHRvcCBwb2ludCBvZiB0aGUgYm94LFxuICAgICBvICAgICB4MjogKG51bWJlcikgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBib3R0b20gcG9pbnQgb2YgdGhlIGJveCxcbiAgICAgbyAgICAgeTI6IChudW1iZXIpIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgYm90dG9tIHBvaW50IG9mIHRoZSBib3gsXG4gICAgIG8gICAgIHdpZHRoOiAobnVtYmVyKSB3aWR0aCBvZiB0aGUgYm94LFxuICAgICBvICAgICBoZWlnaHQ6IChudW1iZXIpIGhlaWdodCBvZiB0aGUgYm94XG4gICAgIG8gfVxuICAgIFxcKi9cbiAgICBTbmFwLnBhdGguZ2V0QkJveCA9IHBhdGhCQm94O1xuICAgIFNuYXAucGF0aC5nZXQgPSBnZXRQYXRoO1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLnBhdGgudG9SZWxhdGl2ZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogVXRpbGl0eSBtZXRob2RcbiAgICAgKipcbiAgICAgKiBDb252ZXJ0cyBwYXRoIGNvb3JkaW5hdGVzIGludG8gcmVsYXRpdmUgdmFsdWVzXG4gICAgIC0gcGF0aCAoc3RyaW5nKSBwYXRoIHN0cmluZ1xuICAgICA9IChhcnJheSkgcGF0aCBzdHJpbmdcbiAgICBcXCovXG4gICAgU25hcC5wYXRoLnRvUmVsYXRpdmUgPSBwYXRoVG9SZWxhdGl2ZTtcbiAgICAvKlxcXG4gICAgICogU25hcC5wYXRoLnRvQWJzb2x1dGVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kXG4gICAgICoqXG4gICAgICogQ29udmVydHMgcGF0aCBjb29yZGluYXRlcyBpbnRvIGFic29sdXRlIHZhbHVlc1xuICAgICAtIHBhdGggKHN0cmluZykgcGF0aCBzdHJpbmdcbiAgICAgPSAoYXJyYXkpIHBhdGggc3RyaW5nXG4gICAgXFwqL1xuICAgIFNuYXAucGF0aC50b0Fic29sdXRlID0gcGF0aFRvQWJzb2x1dGU7XG4gICAgLypcXFxuICAgICAqIFNuYXAucGF0aC50b0N1YmljXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZFxuICAgICAqKlxuICAgICAqIENvbnZlcnRzIHBhdGggdG8gYSBuZXcgcGF0aCB3aGVyZSBhbGwgc2VnbWVudHMgYXJlIGN1YmljIGJlemnDqXIgY3VydmVzXG4gICAgIC0gcGF0aFN0cmluZyAoc3RyaW5nfGFycmF5KSBwYXRoIHN0cmluZyBvciBhcnJheSBvZiBzZWdtZW50c1xuICAgICA9IChhcnJheSkgYXJyYXkgb2Ygc2VnbWVudHNcbiAgICBcXCovXG4gICAgU25hcC5wYXRoLnRvQ3ViaWMgPSBwYXRoMmN1cnZlO1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLnBhdGgubWFwXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIHBhdGggc3RyaW5nIHdpdGggdGhlIGdpdmVuIG1hdHJpeFxuICAgICAtIHBhdGggKHN0cmluZykgcGF0aCBzdHJpbmdcbiAgICAgLSBtYXRyaXggKG9iamVjdCkgc2VlIEBNYXRyaXhcbiAgICAgPSAoc3RyaW5nKSB0cmFuc2Zvcm1lZCBwYXRoIHN0cmluZ1xuICAgIFxcKi9cbiAgICBTbmFwLnBhdGgubWFwID0gbWFwUGF0aDtcbiAgICBTbmFwLnBhdGgudG9TdHJpbmcgPSB0b1N0cmluZztcbiAgICBTbmFwLnBhdGguY2xvbmUgPSBwYXRoQ2xvbmU7XG59KTtcblxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuU25hcC5wbHVnaW4oZnVuY3Rpb24gKFNuYXAsIEVsZW1lbnQsIFBhcGVyLCBnbG9iKSB7XG4gICAgdmFyIG1tYXggPSBNYXRoLm1heCxcbiAgICAgICAgbW1pbiA9IE1hdGgubWluO1xuXG4gICAgLy8gU2V0XG4gICAgdmFyIFNldCA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG5cdHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnR5cGUgPSBcInNldFwiO1xuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGl0ZW1zLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1t0aGlzLml0ZW1zLmxlbmd0aF0gPSB0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoXSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0cHJvdG8gPSBTZXQucHJvdG90eXBlO1xuICAgIC8qXFxcbiAgICAgKiBTZXQucHVzaFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQWRkcyBlYWNoIGFyZ3VtZW50IHRvIHRoZSBjdXJyZW50IHNldFxuICAgICA9IChvYmplY3QpIG9yaWdpbmFsIGVsZW1lbnRcbiAgICBcXCovXG4gICAgc2V0cHJvdG8ucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW0sXG4gICAgICAgICAgICBsZW47XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzW2xlbl0gPSB0aGlzLml0ZW1zW2xlbl0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU2V0LnBvcFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmVtb3ZlcyBsYXN0IGVsZW1lbnQgYW5kIHJldHVybnMgaXRcbiAgICAgPSAob2JqZWN0KSBlbGVtZW50XG4gICAgXFwqL1xuICAgIHNldHByb3RvLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggJiYgZGVsZXRlIHRoaXNbdGhpcy5sZW5ndGgtLV07XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnBvcCgpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNldC5mb3JFYWNoXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBFeGVjdXRlcyBnaXZlbiBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXRcbiAgICAgKlxuICAgICAqIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoZSBsb29wIHN0b3BzIHJ1bm5pbmcuXG4gICAgICoqXG4gICAgIC0gY2FsbGJhY2sgKGZ1bmN0aW9uKSBmdW5jdGlvbiB0byBydW5cbiAgICAgLSB0aGlzQXJnIChvYmplY3QpIGNvbnRleHQgb2JqZWN0IGZvciB0aGUgY2FsbGJhY2tcbiAgICAgPSAob2JqZWN0KSBTZXQgb2JqZWN0XG4gICAgXFwqL1xuICAgIHNldHByb3RvLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLml0ZW1zW2ldLCBpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBTZXQuYW5pbWF0ZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQW5pbWF0ZXMgZWFjaCBlbGVtZW50IGluIHNldCBpbiBzeW5jLlxuICAgICAqXG4gICAgICoqXG4gICAgIC0gYXR0cnMgKG9iamVjdCkga2V5LXZhbHVlIHBhaXJzIG9mIGRlc3RpbmF0aW9uIGF0dHJpYnV0ZXNcbiAgICAgLSBkdXJhdGlvbiAobnVtYmVyKSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgICAtIGVhc2luZyAoZnVuY3Rpb24pICNvcHRpb25hbCBlYXNpbmcgZnVuY3Rpb24gZnJvbSBAbWluYSBvciBjdXN0b21cbiAgICAgLSBjYWxsYmFjayAoZnVuY3Rpb24pICNvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIGFuaW1hdGlvbiBlbmRzXG4gICAgICogb3JcbiAgICAgLSBhbmltYXRpb24gKGFycmF5KSBhcnJheSBvZiBhbmltYXRpb24gcGFyYW1ldGVyIGZvciBlYWNoIGVsZW1lbnQgaW4gc2V0IGluIGZvcm1hdCBgW2F0dHJzLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFja11gXG4gICAgID4gVXNhZ2VcbiAgICAgfCAvLyBhbmltYXRlIGFsbCBlbGVtZW50cyBpbiBzZXQgdG8gcmFkaXVzIDEwXG4gICAgIHwgc2V0LmFuaW1hdGUoe3I6IDEwfSwgNTAwLCBtaW5hLmVhc2Vpbik7XG4gICAgIHwgLy8gb3JcbiAgICAgfCAvLyBhbmltYXRlIGZpcnN0IGVsZW1lbnQgdG8gcmFkaXVzIDEwLCBidXQgc2Vjb25kIHRvIHJhZGl1cyAyMCBhbmQgaW4gZGlmZmVyZW50IHRpbWVcbiAgICAgfCBzZXQuYW5pbWF0ZShbe3I6IDEwfSwgNTAwLCBtaW5hLmVhc2Vpbl0sIFt7cjogMjB9LCAxNTAwLCBtaW5hLmVhc2Vpbl0pO1xuICAgICA9IChFbGVtZW50KSB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgXFwqL1xuICAgIHNldHByb3RvLmFuaW1hdGUgPSBmdW5jdGlvbiAoYXR0cnMsIG1zLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09IFwiZnVuY3Rpb25cIiAmJiAhZWFzaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBlYXNpbmc7XG4gICAgICAgICAgICBlYXNpbmcgPSBtaW5hLmxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cnMgaW5zdGFuY2VvZiBTbmFwLl8uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGF0dHJzLmNhbGxiYWNrO1xuICAgICAgICAgICAgZWFzaW5nID0gYXR0cnMuZWFzaW5nO1xuICAgICAgICAgICAgbXMgPSBlYXNpbmcuZHVyO1xuICAgICAgICAgICAgYXR0cnMgPSBhdHRycy5hdHRyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAoU25hcC5pcyhhdHRycywgXCJhcnJheVwiKSAmJiBTbmFwLmlzKGFyZ3NbYXJncy5sZW5ndGggLSAxXSwgXCJhcnJheVwiKSkge1xuICAgICAgICAgICAgdmFyIGVhY2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiZWdpbixcbiAgICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJlZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYiA9IGJlZ2luO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luID0gdGhpcy5iO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYiA9IDAsXG4gICAgICAgICAgICBzZXQgPSB0aGlzLFxuICAgICAgICAgICAgY2FsbGJhY2tlciA9IGNhbGxiYWNrICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKytjYiA9PSBzZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICAgIGV2ZS5vbmNlKFwic25hcC5hbmltY3JlYXRlZC5cIiArIGVsLmlkLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChlYWNoKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSAmJiBlbC5hbmltYXRlLmFwcGx5KGVsLCBhcmdzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYW5pbWF0ZShhdHRycywgbXMsIGVhc2luZywgY2FsbGJhY2tlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgc2V0cHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9wKCkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU2V0LmJpbmRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFNwZWNpZmllcyBob3cgdG8gaGFuZGxlIGEgc3BlY2lmaWMgYXR0cmlidXRlIHdoZW4gYXBwbGllZFxuICAgICAqIHRvIGEgc2V0LlxuICAgICAqXG4gICAgICoqXG4gICAgIC0gYXR0ciAoc3RyaW5nKSBhdHRyaWJ1dGUgbmFtZVxuICAgICAtIGNhbGxiYWNrIChmdW5jdGlvbikgZnVuY3Rpb24gdG8gcnVuXG4gICAgICogb3JcbiAgICAgLSBhdHRyIChzdHJpbmcpIGF0dHJpYnV0ZSBuYW1lXG4gICAgIC0gZWxlbWVudCAoRWxlbWVudCkgc3BlY2lmaWMgZWxlbWVudCBpbiB0aGUgc2V0IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGUgdG9cbiAgICAgKiBvclxuICAgICAtIGF0dHIgKHN0cmluZykgYXR0cmlidXRlIG5hbWVcbiAgICAgLSBlbGVtZW50IChFbGVtZW50KSBzcGVjaWZpYyBlbGVtZW50IGluIHRoZSBzZXQgdG8gYXBwbHkgdGhlIGF0dHJpYnV0ZSB0b1xuICAgICAtIGVhdHRyIChzdHJpbmcpIGF0dHJpYnV0ZSBvbiB0aGUgZWxlbWVudCB0byBiaW5kIHRoZSBhdHRyaWJ1dGUgdG9cbiAgICAgPSAob2JqZWN0KSBTZXQgb2JqZWN0XG4gICAgXFwqL1xuICAgIHNldHByb3RvLmJpbmQgPSBmdW5jdGlvbiAoYXR0ciwgYSwgYikge1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGEgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzW2F0dHJdID0gYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbmFtZSA9IGIgfHwgYXR0cjtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbYXR0cl0gPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGRhdGFbYW5hbWVdID0gdjtcbiAgICAgICAgICAgICAgICBhLmF0dHIoZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgc2V0cHJvdG8uYXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdW5ib3VuZCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1trXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZGluZ3Nba10odmFsdWVba10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmJvdW5kW2tdID0gdmFsdWVba107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmF0dHIodW5ib3VuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU2V0LmNsZWFyXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBzZXRcbiAgICBcXCovXG4gICAgc2V0cHJvdG8uY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNldC5zcGxpY2VcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgcmFuZ2Ugb2YgZWxlbWVudHMgZnJvbSB0aGUgc2V0XG4gICAgICoqXG4gICAgIC0gaW5kZXggKG51bWJlcikgcG9zaXRpb24gb2YgdGhlIGRlbGV0aW9uXG4gICAgIC0gY291bnQgKG51bWJlcikgbnVtYmVyIG9mIGVsZW1lbnQgdG8gcmVtb3ZlXG4gICAgIC0gaW5zZXJ0aW9u4oCmIChvYmplY3QpICNvcHRpb25hbCBlbGVtZW50cyB0byBpbnNlcnRcbiAgICAgPSAob2JqZWN0KSBzZXQgZWxlbWVudHMgdGhhdCB3ZXJlIGRlbGV0ZWRcbiAgICBcXCovXG4gICAgc2V0cHJvdG8uc3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBjb3VudCwgaW5zZXJ0aW9uKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPCAwID8gbW1heCh0aGlzLmxlbmd0aCArIGluZGV4LCAwKSA6IGluZGV4O1xuICAgICAgICBjb3VudCA9IG1tYXgoMCwgbW1pbih0aGlzLmxlbmd0aCAtIGluZGV4LCBjb3VudCkpO1xuICAgICAgICB2YXIgdGFpbCA9IFtdLFxuICAgICAgICAgICAgdG9kZWwgPSBbXSxcbiAgICAgICAgICAgIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0b2RlbC5wdXNoKHRoaXNbaW5kZXggKyBpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxlbmd0aCAtIGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHRhaWwucHVzaCh0aGlzW2luZGV4ICsgaV0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcmdsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ2xlbiArIHRhaWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXggKyBpXSA9IHRoaXNbaW5kZXggKyBpXSA9IGkgPCBhcmdsZW4gPyBhcmdzW2ldIDogdGFpbFtpIC0gYXJnbGVuXTtcbiAgICAgICAgfVxuICAgICAgICBpID0gdGhpcy5pdGVtcy5sZW5ndGggPSB0aGlzLmxlbmd0aCAtPSBjb3VudCAtIGFyZ2xlbjtcbiAgICAgICAgd2hpbGUgKHRoaXNbaV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2krK107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodG9kZWwpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNldC5leGNsdWRlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGdpdmVuIGVsZW1lbnQgZnJvbSB0aGUgc2V0XG4gICAgICoqXG4gICAgIC0gZWxlbWVudCAob2JqZWN0KSBlbGVtZW50IHRvIHJlbW92ZVxuICAgICA9IChib29sZWFuKSBgdHJ1ZWAgaWYgb2JqZWN0IHdhcyBmb3VuZCBhbmQgcmVtb3ZlZCBmcm9tIHRoZSBzZXRcbiAgICBcXCovXG4gICAgc2V0cHJvdG8uZXhjbHVkZSA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSB0aGlzLmxlbmd0aDsgaSA8IGlpOyBpKyspIGlmICh0aGlzW2ldID09IGVsKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHNldHByb3RvLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uaW5zZXJ0QWZ0ZXIoZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgc2V0cHJvdG8uZ2V0QkJveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSBbXSxcbiAgICAgICAgICAgIHkgPSBbXSxcbiAgICAgICAgICAgIHgyID0gW10sXG4gICAgICAgICAgICB5MiA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5pdGVtcy5sZW5ndGg7IGktLTspIGlmICghdGhpcy5pdGVtc1tpXS5yZW1vdmVkKSB7XG4gICAgICAgICAgICB2YXIgYm94ID0gdGhpcy5pdGVtc1tpXS5nZXRCQm94KCk7XG4gICAgICAgICAgICB4LnB1c2goYm94LngpO1xuICAgICAgICAgICAgeS5wdXNoKGJveC55KTtcbiAgICAgICAgICAgIHgyLnB1c2goYm94LnggKyBib3gud2lkdGgpO1xuICAgICAgICAgICAgeTIucHVzaChib3gueSArIGJveC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHggPSBtbWluLmFwcGx5KDAsIHgpO1xuICAgICAgICB5ID0gbW1pbi5hcHBseSgwLCB5KTtcbiAgICAgICAgeDIgPSBtbWF4LmFwcGx5KDAsIHgyKTtcbiAgICAgICAgeTIgPSBtbWF4LmFwcGx5KDAsIHkyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgeDI6IHgyLFxuICAgICAgICAgICAgeTI6IHkyLFxuICAgICAgICAgICAgd2lkdGg6IHgyIC0geCxcbiAgICAgICAgICAgIGhlaWdodDogeTIgLSB5LFxuICAgICAgICAgICAgY3g6IHggKyAoeDIgLSB4KSAvIDIsXG4gICAgICAgICAgICBjeTogeSArICh5MiAtIHkpIC8gMlxuICAgICAgICB9O1xuICAgIH07XG4gICAgc2V0cHJvdG8uY2xvbmUgPSBmdW5jdGlvbiAocykge1xuICAgICAgICBzID0gbmV3IFNldDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBzLnB1c2godGhpcy5pdGVtc1tpXS5jbG9uZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIHNldHByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJTbmFwXFx1MjAxOHMgc2V0XCI7XG4gICAgfTtcbiAgICBzZXRwcm90by50eXBlID0gXCJzZXRcIjtcbiAgICAvLyBleHBvcnRcbiAgICBTbmFwLlNldCA9IFNldDtcbiAgICBTbmFwLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNldCA9IG5ldyBTZXQ7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXQucHVzaC5hcHBseShzZXQsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfTtcbn0pO1xuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTMgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vIFxuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLyBcbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5TbmFwLnBsdWdpbihmdW5jdGlvbiAoU25hcCwgRWxlbWVudCwgUGFwZXIsIGdsb2IpIHtcbiAgICB2YXIgbmFtZXMgPSB7fSxcbiAgICAgICAgcmVVbml0ID0gL1thLXpdKyQvaSxcbiAgICAgICAgU3RyID0gU3RyaW5nO1xuICAgIG5hbWVzLnN0cm9rZSA9IG5hbWVzLmZpbGwgPSBcImNvbG91clwiO1xuICAgIGZ1bmN0aW9uIGdldEVtcHR5KGl0ZW0pIHtcbiAgICAgICAgdmFyIGwgPSBpdGVtWzBdO1xuICAgICAgICBzd2l0Y2ggKGwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcInRcIjogcmV0dXJuIFtsLCAwLCAwXTtcbiAgICAgICAgICAgIGNhc2UgXCJtXCI6IHJldHVybiBbbCwgMSwgMCwgMCwgMSwgMCwgMF07XG4gICAgICAgICAgICBjYXNlIFwiclwiOiBpZiAoaXRlbS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbCwgMCwgaXRlbVsyXSwgaXRlbVszXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbCwgMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwic1wiOiBpZiAoaXRlbS5sZW5ndGggPT0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbCwgMSwgMSwgaXRlbVszXSwgaXRlbVs0XV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2wsIDEsIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2wsIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVxdWFsaXNlVHJhbnNmb3JtKHQxLCB0MiwgZ2V0QkJveCkge1xuICAgICAgICB0MiA9IFN0cih0MikucmVwbGFjZSgvXFwuezN9fFxcdTIwMjYvZywgdDEpO1xuICAgICAgICB0MSA9IFNuYXAucGFyc2VUcmFuc2Zvcm1TdHJpbmcodDEpIHx8IFtdO1xuICAgICAgICB0MiA9IFNuYXAucGFyc2VUcmFuc2Zvcm1TdHJpbmcodDIpIHx8IFtdO1xuICAgICAgICB2YXIgbWF4bGVuZ3RoID0gTWF0aC5tYXgodDEubGVuZ3RoLCB0Mi5sZW5ndGgpLFxuICAgICAgICAgICAgZnJvbSA9IFtdLFxuICAgICAgICAgICAgdG8gPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLCBqLCBqaixcbiAgICAgICAgICAgIHR0MSwgdHQyO1xuICAgICAgICBmb3IgKDsgaSA8IG1heGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0dDEgPSB0MVtpXSB8fCBnZXRFbXB0eSh0MltpXSk7XG4gICAgICAgICAgICB0dDIgPSB0MltpXSB8fCBnZXRFbXB0eSh0dDEpO1xuICAgICAgICAgICAgaWYgKCh0dDFbMF0gIT0gdHQyWzBdKSB8fFxuICAgICAgICAgICAgICAgICh0dDFbMF0udG9Mb3dlckNhc2UoKSA9PSBcInJcIiAmJiAodHQxWzJdICE9IHR0MlsyXSB8fCB0dDFbM10gIT0gdHQyWzNdKSkgfHxcbiAgICAgICAgICAgICAgICAodHQxWzBdLnRvTG93ZXJDYXNlKCkgPT0gXCJzXCIgJiYgKHR0MVszXSAhPSB0dDJbM10gfHwgdHQxWzRdICE9IHR0Mls0XSkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHQxID0gU25hcC5fLnRyYW5zZm9ybTJtYXRyaXgodDEsIGdldEJCb3goKSk7XG4gICAgICAgICAgICAgICAgICAgIHQyID0gU25hcC5fLnRyYW5zZm9ybTJtYXRyaXgodDIsIGdldEJCb3goKSk7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSBbW1wibVwiLCB0MS5hLCB0MS5iLCB0MS5jLCB0MS5kLCB0MS5lLCB0MS5mXV07XG4gICAgICAgICAgICAgICAgICAgIHRvID0gW1tcIm1cIiwgdDIuYSwgdDIuYiwgdDIuYywgdDIuZCwgdDIuZSwgdDIuZl1dO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZyb21baV0gPSBbXTtcbiAgICAgICAgICAgIHRvW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGogPSAwLCBqaiA9IE1hdGgubWF4KHR0MS5sZW5ndGgsIHR0Mi5sZW5ndGgpOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgIGogaW4gdHQxICYmIChmcm9tW2ldW2pdID0gdHQxW2pdKTtcbiAgICAgICAgICAgICAgICBqIGluIHR0MiAmJiAodG9baV1bal0gPSB0dDJbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmcm9tOiBwYXRoMmFycmF5KGZyb20pLFxuICAgICAgICAgICAgdG86IHBhdGgyYXJyYXkodG8pLFxuICAgICAgICAgICAgZjogZ2V0UGF0aChmcm9tKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROdW1iZXIodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFVuaXQodW5pdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuICt2YWwudG9GaXhlZCgzKSArIHVuaXQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZpZXdCb3godmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldENvbG91cihjbHIpIHtcbiAgICAgICAgcmV0dXJuIFNuYXAucmdiKGNsclswXSwgY2xyWzFdLCBjbHJbMl0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQYXRoKHBhdGgpIHtcbiAgICAgICAgdmFyIGsgPSAwLCBpLCBpaSwgaiwgamosIG91dCwgYSwgYiA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IHBhdGgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgb3V0ID0gXCJbXCI7XG4gICAgICAgICAgICBhID0gWydcIicgKyBwYXRoW2ldWzBdICsgJ1wiJ107XG4gICAgICAgICAgICBmb3IgKGogPSAxLCBqaiA9IHBhdGhbaV0ubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgIGFbal0gPSBcInZhbFtcIiArIChrKyspICsgXCJdXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXQgKz0gYSArIFwiXVwiO1xuICAgICAgICAgICAgYltpXSA9IG91dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRnVuY3Rpb24oXCJ2YWxcIiwgXCJyZXR1cm4gU25hcC5wYXRoLnRvU3RyaW5nLmNhbGwoW1wiICsgYiArIFwiXSlcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBhdGgyYXJyYXkocGF0aCkge1xuICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHBhdGgubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDEsIGpqID0gcGF0aFtpXS5sZW5ndGg7IGogPCBqajsgaisrKSB7XG4gICAgICAgICAgICAgICAgb3V0LnB1c2gocGF0aFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNOdW1lcmljKG9iaikge1xuICAgICAgICByZXR1cm4gaXNGaW5pdGUocGFyc2VGbG9hdChvYmopKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXJyYXlFcXVhbChhcnIxLCBhcnIyKSB7XG4gICAgICAgIGlmICghU25hcC5pcyhhcnIxLCBcImFycmF5XCIpIHx8ICFTbmFwLmlzKGFycjIsIFwiYXJyYXlcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyMS50b1N0cmluZygpID09IGFycjIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgRWxlbWVudC5wcm90b3R5cGUuZXF1YWwgPSBmdW5jdGlvbiAobmFtZSwgYikge1xuICAgICAgICByZXR1cm4gZXZlKFwic25hcC51dGlsLmVxdWFsXCIsIHRoaXMsIG5hbWUsIGIpLmZpcnN0RGVmaW5lZCgpO1xuICAgIH07XG4gICAgZXZlLm9uKFwic25hcC51dGlsLmVxdWFsXCIsIGZ1bmN0aW9uIChuYW1lLCBiKSB7XG4gICAgICAgIHZhciBBLCBCLCBhID0gU3RyKHRoaXMuYXR0cihuYW1lKSB8fCBcIlwiKSxcbiAgICAgICAgICAgIGVsID0gdGhpcztcbiAgICAgICAgaWYgKGlzTnVtZXJpYyhhKSAmJiBpc051bWVyaWMoYikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZnJvbTogcGFyc2VGbG9hdChhKSxcbiAgICAgICAgICAgICAgICB0bzogcGFyc2VGbG9hdChiKSxcbiAgICAgICAgICAgICAgICBmOiBnZXROdW1iZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWVzW25hbWVdID09IFwiY29sb3VyXCIpIHtcbiAgICAgICAgICAgIEEgPSBTbmFwLmNvbG9yKGEpO1xuICAgICAgICAgICAgQiA9IFNuYXAuY29sb3IoYik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZyb206IFtBLnIsIEEuZywgQS5iLCBBLm9wYWNpdHldLFxuICAgICAgICAgICAgICAgIHRvOiBbQi5yLCBCLmcsIEIuYiwgQi5vcGFjaXR5XSxcbiAgICAgICAgICAgICAgICBmOiBnZXRDb2xvdXJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ2aWV3Qm94XCIpIHtcbiAgICAgICAgICAgIEEgPSB0aGlzLmF0dHIobmFtZSkudmIuc3BsaXQoXCIgXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICAgICAgQiA9IGIuc3BsaXQoXCIgXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmcm9tOiBBLFxuICAgICAgICAgICAgICAgIHRvOiBCLFxuICAgICAgICAgICAgICAgIGY6IGdldFZpZXdCb3hcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ0cmFuc2Zvcm1cIiB8fCBuYW1lID09IFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiB8fCBuYW1lID09IFwicGF0dGVyblRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBpZiAoYiBpbnN0YW5jZW9mIFNuYXAuTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgYiA9IGIudG9UcmFuc2Zvcm1TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghU25hcC5fLnJnVHJhbnNmb3JtLnRlc3QoYikpIHtcbiAgICAgICAgICAgICAgICBiID0gU25hcC5fLnN2Z1RyYW5zZm9ybTJzdHJpbmcoYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXF1YWxpc2VUcmFuc2Zvcm0oYSwgYiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5nZXRCQm94KDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJkXCIgfHwgbmFtZSA9PSBcInBhdGhcIikge1xuICAgICAgICAgICAgQSA9IFNuYXAucGF0aC50b0N1YmljKGEsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmcm9tOiBwYXRoMmFycmF5KEFbMF0pLFxuICAgICAgICAgICAgICAgIHRvOiBwYXRoMmFycmF5KEFbMV0pLFxuICAgICAgICAgICAgICAgIGY6IGdldFBhdGgoQVswXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gXCJwb2ludHNcIikge1xuICAgICAgICAgICAgQSA9IFN0cihhKS5zcGxpdChTbmFwLl8uc2VwYXJhdG9yKTtcbiAgICAgICAgICAgIEIgPSBTdHIoYikuc3BsaXQoU25hcC5fLnNlcGFyYXRvcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZyb206IEEsXG4gICAgICAgICAgICAgICAgdG86IEIsXG4gICAgICAgICAgICAgICAgZjogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBhVW5pdCA9IGEubWF0Y2gocmVVbml0KSxcbiAgICAgICAgICAgIGJVbml0ID0gU3RyKGIpLm1hdGNoKHJlVW5pdCk7XG4gICAgICAgIGlmIChhVW5pdCAmJiBhcnJheUVxdWFsKGFVbml0LCBiVW5pdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZnJvbTogcGFyc2VGbG9hdChhKSxcbiAgICAgICAgICAgICAgICB0bzogcGFyc2VGbG9hdChiKSxcbiAgICAgICAgICAgICAgICBmOiBnZXRVbml0KGFVbml0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZnJvbTogdGhpcy5hc1BYKG5hbWUpLFxuICAgICAgICAgICAgICAgIHRvOiB0aGlzLmFzUFgobmFtZSwgYiksXG4gICAgICAgICAgICAgICAgZjogZ2V0TnVtYmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuU25hcC5wbHVnaW4oZnVuY3Rpb24gKFNuYXAsIEVsZW1lbnQsIFBhcGVyLCBnbG9iKSB7XG4gICAgdmFyIGVscHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZSxcbiAgICBoYXMgPSBcImhhc093blByb3BlcnR5XCIsXG4gICAgc3VwcG9ydHNUb3VjaCA9IFwiY3JlYXRlVG91Y2hcIiBpbiBnbG9iLmRvYyxcbiAgICBldmVudHMgPSBbXG4gICAgICAgIFwiY2xpY2tcIiwgXCJkYmxjbGlja1wiLCBcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcIm1vdXNlb3V0XCIsXG4gICAgICAgIFwibW91c2VvdmVyXCIsIFwibW91c2V1cFwiLCBcInRvdWNoc3RhcnRcIiwgXCJ0b3VjaG1vdmVcIiwgXCJ0b3VjaGVuZFwiLFxuICAgICAgICBcInRvdWNoY2FuY2VsXCJcbiAgICBdLFxuICAgIHRvdWNoTWFwID0ge1xuICAgICAgICBtb3VzZWRvd246IFwidG91Y2hzdGFydFwiLFxuICAgICAgICBtb3VzZW1vdmU6IFwidG91Y2htb3ZlXCIsXG4gICAgICAgIG1vdXNldXA6IFwidG91Y2hlbmRcIlxuICAgIH0sXG4gICAgZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKHh5LCBlbCkge1xuICAgICAgICB2YXIgbmFtZSA9IHh5ID09IFwieVwiID8gXCJzY3JvbGxUb3BcIiA6IFwic2Nyb2xsTGVmdFwiLFxuICAgICAgICAgICAgZG9jID0gZWwgJiYgZWwubm9kZSA/IGVsLm5vZGUub3duZXJEb2N1bWVudCA6IGdsb2IuZG9jO1xuICAgICAgICByZXR1cm4gZG9jW25hbWUgaW4gZG9jLmRvY3VtZW50RWxlbWVudCA/IFwiZG9jdW1lbnRFbGVtZW50XCIgOiBcImJvZHlcIl1bbmFtZV07XG4gICAgfSxcbiAgICBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgcHJldmVudFRvdWNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBzdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHN0b3BUb3VjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuICAgIGFkZEV2ZW50ID0gZnVuY3Rpb24gKG9iaiwgdHlwZSwgZm4sIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHJlYWxOYW1lID0gc3VwcG9ydHNUb3VjaCAmJiB0b3VjaE1hcFt0eXBlXSA/IHRvdWNoTWFwW3R5cGVdIDogdHlwZSxcbiAgICAgICAgICAgIGYgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZ2V0U2Nyb2xsKFwieVwiLCBlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWCA9IGdldFNjcm9sbChcInhcIiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzVG91Y2ggJiYgdG91Y2hNYXBbaGFzXSh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXNbaV0udGFyZ2V0ID09IG9iaiB8fCBvYmouY29udGFpbnMoZS50YXJnZXRUb3VjaGVzW2ldLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUudGFyZ2V0VG91Y2hlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQgPSBvbGRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPSBwcmV2ZW50VG91Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24gPSBzdG9wVG91Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHggPSBlLmNsaWVudFggKyBzY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgICB5ID0gZS5jbGllbnRZICsgc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uY2FsbChlbGVtZW50LCBlLCB4LCB5KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IHJlYWxOYW1lKSB7XG4gICAgICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcihyZWFsTmFtZSwgZiwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gcmVhbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKHJlYWxOYW1lLCBmLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGRyYWcgPSBbXSxcbiAgICBkcmFnTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB4ID0gZS5jbGllbnRYLFxuICAgICAgICAgICAgeSA9IGUuY2xpZW50WSxcbiAgICAgICAgICAgIHNjcm9sbFkgPSBnZXRTY3JvbGwoXCJ5XCIpLFxuICAgICAgICAgICAgc2Nyb2xsWCA9IGdldFNjcm9sbChcInhcIiksXG4gICAgICAgICAgICBkcmFnaSxcbiAgICAgICAgICAgIGogPSBkcmFnLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgICAgZHJhZ2kgPSBkcmFnW2pdO1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzVG91Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB0b3VjaDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoID0gZS50b3VjaGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PSBkcmFnaS5lbC5fZHJhZy5pZCB8fCBkcmFnaS5lbC5ub2RlLmNvbnRhaW5zKHRvdWNoLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5vcmlnaW5hbEV2ZW50ID8gZS5vcmlnaW5hbEV2ZW50IDogZSkucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRyYWdpLmVsLm5vZGUsXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICBuZXh0ID0gbm9kZS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IG5vZGUuc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIC8vIGdsb2Iud2luLm9wZXJhICYmIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgICAgIC8vIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgLy8gbyA9IGRyYWdpLmVsLnBhcGVyLmdldEVsZW1lbnRCeVBvaW50KHgsIHkpO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgICAgIC8vIGdsb2Iud2luLm9wZXJhICYmIChuZXh0ID8gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBuZXh0KSA6IHBhcmVudC5hcHBlbmRDaGlsZChub2RlKSk7XG4gICAgICAgICAgICAvLyBvICYmIGV2ZShcInNuYXAuZHJhZy5vdmVyLlwiICsgZHJhZ2kuZWwuaWQsIGRyYWdpLmVsLCBvKTtcbiAgICAgICAgICAgIHggKz0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgKz0gc2Nyb2xsWTtcbiAgICAgICAgICAgIGV2ZShcInNuYXAuZHJhZy5tb3ZlLlwiICsgZHJhZ2kuZWwuaWQsIGRyYWdpLm1vdmVfc2NvcGUgfHwgZHJhZ2kuZWwsIHggLSBkcmFnaS5lbC5fZHJhZy54LCB5IC0gZHJhZ2kuZWwuX2RyYWcueSwgeCwgeSwgZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdVcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFNuYXAudW5tb3VzZW1vdmUoZHJhZ01vdmUpLnVubW91c2V1cChkcmFnVXApO1xuICAgICAgICB2YXIgaSA9IGRyYWcubGVuZ3RoLFxuICAgICAgICAgICAgZHJhZ2k7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGRyYWdpID0gZHJhZ1tpXTtcbiAgICAgICAgICAgIGRyYWdpLmVsLl9kcmFnID0ge307XG4gICAgICAgICAgICBldmUoXCJzbmFwLmRyYWcuZW5kLlwiICsgZHJhZ2kuZWwuaWQsIGRyYWdpLmVuZF9zY29wZSB8fCBkcmFnaS5zdGFydF9zY29wZSB8fCBkcmFnaS5tb3ZlX3Njb3BlIHx8IGRyYWdpLmVsLCBlKTtcbiAgICAgICAgICAgIGV2ZS5vZmYoXCJzbmFwLmRyYWcuKi5cIiArIGRyYWdpLmVsLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBkcmFnID0gW107XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5jbGlja1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudW5jbGlja1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmVtb3ZlcyBhIGNsaWNrIGV2ZW50IGhhbmRsZXIgZnJvbSB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICBcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5kYmxjbGlja1xuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQWRkcyBhIGRvdWJsZSBjbGljayBldmVudCBoYW5kbGVyIHRvIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVuZGJsY2xpY2tcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSBkb3VibGUgY2xpY2sgZXZlbnQgaGFuZGxlciBmcm9tIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIFxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50Lm1vdXNlZG93blxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQWRkcyBhIG1vdXNlZG93biBldmVudCBoYW5kbGVyIHRvIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVubW91c2Vkb3duXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGEgbW91c2Vkb3duIGV2ZW50IGhhbmRsZXIgZnJvbSB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICBcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5tb3VzZW1vdmVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSBtb3VzZW1vdmUgZXZlbnQgaGFuZGxlciB0byB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC51bm1vdXNlbW92ZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmVtb3ZlcyBhIG1vdXNlbW92ZSBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQubW91c2VvdXRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSBtb3VzZW91dCBldmVudCBoYW5kbGVyIHRvIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVubW91c2VvdXRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSBtb3VzZW91dCBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQubW91c2VvdmVyXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBBZGRzIGEgbW91c2VvdmVyIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudW5tb3VzZW92ZXJcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSBtb3VzZW92ZXIgZXZlbnQgaGFuZGxlciBmcm9tIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIFxuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50Lm1vdXNldXBcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSBtb3VzZXVwIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudW5tb3VzZXVwXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGEgbW91c2V1cCBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudG91Y2hzdGFydFxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogQWRkcyBhIHRvdWNoc3RhcnQgZXZlbnQgaGFuZGxlciB0byB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC51bnRvdWNoc3RhcnRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSB0b3VjaHN0YXJ0IGV2ZW50IGhhbmRsZXIgZnJvbSB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICBcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC50b3VjaG1vdmVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSB0b3VjaG1vdmUgZXZlbnQgaGFuZGxlciB0byB0aGUgZWxlbWVudFxuICAgICAtIGhhbmRsZXIgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciB0aGUgZXZlbnRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICAvKlxcXG4gICAgICogRWxlbWVudC51bnRvdWNobW92ZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmVtb3ZlcyBhIHRvdWNobW92ZSBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudG91Y2hlbmRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSB0b3VjaGVuZCBldmVudCBoYW5kbGVyIHRvIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVudG91Y2hlbmRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSB0b3VjaGVuZCBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgXG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudG91Y2hjYW5jZWxcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgYSB0b3VjaGNhbmNlbCBldmVudCBoYW5kbGVyIHRvIHRoZSBlbGVtZW50XG4gICAgIC0gaGFuZGxlciAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIHRoZSBldmVudFxuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgXFwqL1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LnVudG91Y2hjYW5jZWxcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJlbW92ZXMgYSB0b3VjaGNhbmNlbCBldmVudCBoYW5kbGVyIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgLSBoYW5kbGVyIChmdW5jdGlvbikgaGFuZGxlciBmb3IgdGhlIGV2ZW50XG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgZm9yICh2YXIgaSA9IGV2ZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIFNuYXBbZXZlbnROYW1lXSA9IGVscHJvdG9bZXZlbnROYW1lXSA9IGZ1bmN0aW9uIChmbiwgc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoU25hcC5pcyhmbiwgXCJmdW5jdGlvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMuZXZlbnRzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGY6IGZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5iaW5kOiBhZGRFdmVudCh0aGlzLm5vZGUgfHwgZG9jdW1lbnQsIGV2ZW50TmFtZSwgZm4sIHNjb3BlIHx8IHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIGlmICh0aGlzLmV2ZW50c1tpXS5uYW1lID09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tpXS5mLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFNuYXBbXCJ1blwiICsgZXZlbnROYW1lXSA9XG4gICAgICAgICAgICBlbHByb3RvW1widW5cIiArIGV2ZW50TmFtZV0gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgIGwgPSBldmVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHdoaWxlIChsLS0pIGlmIChldmVudHNbbF0ubmFtZSA9PSBldmVudE5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnRzW2xdLmYgPT0gZm4gfHwgIWZuKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudHNbbF0udW5iaW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UobCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICFldmVudHMubGVuZ3RoICYmIGRlbGV0ZSB0aGlzLmV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoZXZlbnRzW2ldKTtcbiAgICB9XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuaG92ZXJcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgaG92ZXIgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGVsZW1lbnRcbiAgICAgLSBmX2luIChmdW5jdGlvbikgaGFuZGxlciBmb3IgaG92ZXIgaW5cbiAgICAgLSBmX291dCAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIGhvdmVyIG91dFxuICAgICAtIGljb250ZXh0IChvYmplY3QpICNvcHRpb25hbCBjb250ZXh0IGZvciBob3ZlciBpbiBoYW5kbGVyXG4gICAgIC0gb2NvbnRleHQgKG9iamVjdCkgI29wdGlvbmFsIGNvbnRleHQgZm9yIGhvdmVyIG91dCBoYW5kbGVyXG4gICAgID0gKG9iamVjdCkgQEVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by5ob3ZlciA9IGZ1bmN0aW9uIChmX2luLCBmX291dCwgc2NvcGVfaW4sIHNjb3BlX291dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZW92ZXIoZl9pbiwgc2NvcGVfaW4pLm1vdXNlb3V0KGZfb3V0LCBzY29wZV9vdXQgfHwgc2NvcGVfaW4pO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudW5ob3ZlclxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmVtb3ZlcyBob3ZlciBldmVudCBoYW5kbGVycyBmcm9tIHRoZSBlbGVtZW50XG4gICAgIC0gZl9pbiAoZnVuY3Rpb24pIGhhbmRsZXIgZm9yIGhvdmVyIGluXG4gICAgIC0gZl9vdXQgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciBob3ZlciBvdXRcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICBlbHByb3RvLnVuaG92ZXIgPSBmdW5jdGlvbiAoZl9pbiwgZl9vdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5tb3VzZW92ZXIoZl9pbikudW5tb3VzZW91dChmX291dCk7XG4gICAgfTtcbiAgICB2YXIgZHJhZ2dhYmxlID0gW107XG4gICAgLy8gU0lFUlJBIHVuY2xlYXIgd2hhdCBfY29udGV4dF8gcmVmZXJzIHRvIGZvciBzdGFydGluZywgZW5kaW5nLCBtb3ZpbmcgdGhlIGRyYWcgZ2VzdHVyZS5cbiAgICAvLyBTSUVSUkEgRWxlbWVudC5kcmFnKCk6IF94IHBvc2l0aW9uIG9mIHRoZSBtb3VzZV86IFdoZXJlIGFyZSB0aGUgeC95IHZhbHVlcyBvZmZzZXQgZnJvbT9cbiAgICAvLyBTSUVSUkEgRWxlbWVudC5kcmFnKCk6IG11Y2ggb2YgdGhpcyBtZW1iZXIncyBkb2MgYXBwZWFycyB0byBiZSBkdXBsaWNhdGVkIGZvciBzb21lIHJlYXNvbi5cbiAgICAvLyBTSUVSUkEgVW5jbGVhciBhYm91dCB0aGlzIHNlbnRlbmNlOiBfQWRkaXRpb25hbGx5IGZvbGxvd2luZyBkcmFnIGV2ZW50cyB3aWxsIGJlIHRyaWdnZXJlZDogZHJhZy5zdGFydC48aWQ+IG9uIHN0YXJ0LCBkcmFnLmVuZC48aWQ+IG9uIGVuZCBhbmQgZHJhZy5tb3ZlLjxpZD4gb24gZXZlcnkgbW92ZS5fIElzIHRoZXJlIGEgZ2xvYmFsIF9kcmFnXyBvYmplY3QgdG8gd2hpY2ggeW91IGNhbiBhc3NpZ24gaGFuZGxlcnMga2V5ZWQgYnkgYW4gZWxlbWVudCdzIElEP1xuICAgIC8qXFxcbiAgICAgKiBFbGVtZW50LmRyYWdcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIGFuIGVsZW1lbnQncyBkcmFnIGdlc3R1cmVcbiAgICAgKipcbiAgICAgLSBvbm1vdmUgKGZ1bmN0aW9uKSBoYW5kbGVyIGZvciBtb3ZpbmdcbiAgICAgLSBvbnN0YXJ0IChmdW5jdGlvbikgaGFuZGxlciBmb3IgZHJhZyBzdGFydFxuICAgICAtIG9uZW5kIChmdW5jdGlvbikgaGFuZGxlciBmb3IgZHJhZyBlbmRcbiAgICAgLSBtY29udGV4dCAob2JqZWN0KSAjb3B0aW9uYWwgY29udGV4dCBmb3IgbW92aW5nIGhhbmRsZXJcbiAgICAgLSBzY29udGV4dCAob2JqZWN0KSAjb3B0aW9uYWwgY29udGV4dCBmb3IgZHJhZyBzdGFydCBoYW5kbGVyXG4gICAgIC0gZWNvbnRleHQgKG9iamVjdCkgI29wdGlvbmFsIGNvbnRleHQgZm9yIGRyYWcgZW5kIGhhbmRsZXJcbiAgICAgKiBBZGRpdGlvbmFseSBmb2xsb3dpbmcgYGRyYWdgIGV2ZW50cyBhcmUgdHJpZ2dlcmVkOiBgZHJhZy5zdGFydC48aWQ+YCBvbiBzdGFydCwgXG4gICAgICogYGRyYWcuZW5kLjxpZD5gIG9uIGVuZCBhbmQgYGRyYWcubW92ZS48aWQ+YCBvbiBldmVyeSBtb3ZlLiBXaGVuIGVsZW1lbnQgaXMgZHJhZ2dlZCBvdmVyIGFub3RoZXIgZWxlbWVudCBcbiAgICAgKiBgZHJhZy5vdmVyLjxpZD5gIGZpcmVzIGFzIHdlbGwuXG4gICAgICpcbiAgICAgKiBTdGFydCBldmVudCBhbmQgc3RhcnQgaGFuZGxlciBhcmUgY2FsbGVkIGluIHNwZWNpZmllZCBjb250ZXh0IG9yIGluIGNvbnRleHQgb2YgdGhlIGVsZW1lbnQgd2l0aCBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgbyB4IChudW1iZXIpIHggcG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgIG8geSAobnVtYmVyKSB5IHBvc2l0aW9uIG9mIHRoZSBtb3VzZVxuICAgICBvIGV2ZW50IChvYmplY3QpIERPTSBldmVudCBvYmplY3RcbiAgICAgKiBNb3ZlIGV2ZW50IGFuZCBtb3ZlIGhhbmRsZXIgYXJlIGNhbGxlZCBpbiBzcGVjaWZpZWQgY29udGV4dCBvciBpbiBjb250ZXh0IG9mIHRoZSBlbGVtZW50IHdpdGggZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAgIG8gZHggKG51bWJlcikgc2hpZnQgYnkgeCBmcm9tIHRoZSBzdGFydCBwb2ludFxuICAgICBvIGR5IChudW1iZXIpIHNoaWZ0IGJ5IHkgZnJvbSB0aGUgc3RhcnQgcG9pbnRcbiAgICAgbyB4IChudW1iZXIpIHggcG9zaXRpb24gb2YgdGhlIG1vdXNlXG4gICAgIG8geSAobnVtYmVyKSB5IHBvc2l0aW9uIG9mIHRoZSBtb3VzZVxuICAgICBvIGV2ZW50IChvYmplY3QpIERPTSBldmVudCBvYmplY3RcbiAgICAgKiBFbmQgZXZlbnQgYW5kIGVuZCBoYW5kbGVyIGFyZSBjYWxsZWQgaW4gc3BlY2lmaWVkIGNvbnRleHQgb3IgaW4gY29udGV4dCBvZiB0aGUgZWxlbWVudCB3aXRoIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICAgICBvIGV2ZW50IChvYmplY3QpIERPTSBldmVudCBvYmplY3RcbiAgICAgPSAob2JqZWN0KSBARWxlbWVudFxuICAgIFxcKi9cbiAgICBlbHByb3RvLmRyYWcgPSBmdW5jdGlvbiAob25tb3ZlLCBvbnN0YXJ0LCBvbmVuZCwgbW92ZV9zY29wZSwgc3RhcnRfc2NvcGUsIGVuZF9zY29wZSkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBvcmlnVHJhbnNmb3JtO1xuICAgICAgICAgICAgcmV0dXJuIGVsLmRyYWcoZnVuY3Rpb24gKGR4LCBkeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogb3JpZ1RyYW5zZm9ybSArIChvcmlnVHJhbnNmb3JtID8gXCJUXCIgOiBcInRcIikgKyBbZHgsIGR5XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybSgpLmxvY2FsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoZSwgeCwgeSkge1xuICAgICAgICAgICAgKGUub3JpZ2luYWxFdmVudCB8fCBlKS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZWwuX2RyYWcueCA9IHg7XG4gICAgICAgICAgICBlbC5fZHJhZy55ID0geTtcbiAgICAgICAgICAgIGVsLl9kcmFnLmlkID0gZS5pZGVudGlmaWVyO1xuICAgICAgICAgICAgIWRyYWcubGVuZ3RoICYmIFNuYXAubW91c2Vtb3ZlKGRyYWdNb3ZlKS5tb3VzZXVwKGRyYWdVcCk7XG4gICAgICAgICAgICBkcmFnLnB1c2goe2VsOiBlbCwgbW92ZV9zY29wZTogbW92ZV9zY29wZSwgc3RhcnRfc2NvcGU6IHN0YXJ0X3Njb3BlLCBlbmRfc2NvcGU6IGVuZF9zY29wZX0pO1xuICAgICAgICAgICAgb25zdGFydCAmJiBldmUub24oXCJzbmFwLmRyYWcuc3RhcnQuXCIgKyBlbC5pZCwgb25zdGFydCk7XG4gICAgICAgICAgICBvbm1vdmUgJiYgZXZlLm9uKFwic25hcC5kcmFnLm1vdmUuXCIgKyBlbC5pZCwgb25tb3ZlKTtcbiAgICAgICAgICAgIG9uZW5kICYmIGV2ZS5vbihcInNuYXAuZHJhZy5lbmQuXCIgKyBlbC5pZCwgb25lbmQpO1xuICAgICAgICAgICAgZXZlKFwic25hcC5kcmFnLnN0YXJ0LlwiICsgZWwuaWQsIHN0YXJ0X3Njb3BlIHx8IG1vdmVfc2NvcGUgfHwgZWwsIHgsIHksIGUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGluaXQoZSwgeCwgeSkge1xuICAgICAgICAgICAgZXZlKFwic25hcC5kcmFnaW5pdC5cIiArIGVsLmlkLCBlbCwgZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlLm9uKFwic25hcC5kcmFnaW5pdC5cIiArIGVsLmlkLCBzdGFydCk7XG4gICAgICAgIGVsLl9kcmFnID0ge307XG4gICAgICAgIGRyYWdnYWJsZS5wdXNoKHtlbDogZWwsIHN0YXJ0OiBzdGFydCwgaW5pdDogaW5pdH0pO1xuICAgICAgICBlbC5tb3VzZWRvd24oaW5pdCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9O1xuICAgIC8qXG4gICAgICogRWxlbWVudC5vbkRyYWdPdmVyXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBTaG9ydGN1dCB0byBhc3NpZ24gZXZlbnQgaGFuZGxlciBmb3IgYGRyYWcub3Zlci48aWQ+YCBldmVudCwgd2hlcmUgYGlkYCBpcyB0aGUgZWxlbWVudCdzIGBpZGAgKHNlZSBARWxlbWVudC5pZClcbiAgICAgLSBmIChmdW5jdGlvbikgaGFuZGxlciBmb3IgZXZlbnQsIGZpcnN0IGFyZ3VtZW50IHdvdWxkIGJlIHRoZSBlbGVtZW50IHlvdSBhcmUgZHJhZ2dpbmcgb3ZlclxuICAgIFxcKi9cbiAgICAvLyBlbHByb3RvLm9uRHJhZ092ZXIgPSBmdW5jdGlvbiAoZikge1xuICAgIC8vICAgICBmID8gZXZlLm9uKFwic25hcC5kcmFnLm92ZXIuXCIgKyB0aGlzLmlkLCBmKSA6IGV2ZS51bmJpbmQoXCJzbmFwLmRyYWcub3Zlci5cIiArIHRoaXMuaWQpO1xuICAgIC8vIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQudW5kcmFnXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZW1vdmVzIGFsbCBkcmFnIGV2ZW50IGhhbmRsZXJzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnRcbiAgICBcXCovXG4gICAgZWxwcm90by51bmRyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gZHJhZ2dhYmxlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkgaWYgKGRyYWdnYWJsZVtpXS5lbCA9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLnVubW91c2Vkb3duKGRyYWdnYWJsZVtpXS5pbml0KTtcbiAgICAgICAgICAgIGRyYWdnYWJsZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBldmUudW5iaW5kKFwic25hcC5kcmFnLiouXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgICAgIGV2ZS51bmJpbmQoXCJzbmFwLmRyYWdpbml0LlwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgIWRyYWdnYWJsZS5sZW5ndGggJiYgU25hcC51bm1vdXNlbW92ZShkcmFnTW92ZSkudW5tb3VzZXVwKGRyYWdVcCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59KTtcblxuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLyBcbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8gXG4vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuU25hcC5wbHVnaW4oZnVuY3Rpb24gKFNuYXAsIEVsZW1lbnQsIFBhcGVyLCBnbG9iKSB7XG4gICAgdmFyIGVscHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZSxcbiAgICAgICAgcHByb3RvID0gUGFwZXIucHJvdG90eXBlLFxuICAgICAgICByZ3VybCA9IC9eXFxzKnVybFxcKCguKylcXCkvLFxuICAgICAgICBTdHIgPSBTdHJpbmcsXG4gICAgICAgICQgPSBTbmFwLl8uJDtcbiAgICBTbmFwLmZpbHRlciA9IHt9O1xuICAgIC8qXFxcbiAgICAgKiBQYXBlci5maWx0ZXJcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIENyZWF0ZXMgYSBgPGZpbHRlcj5gIGVsZW1lbnRcbiAgICAgKipcbiAgICAgLSBmaWxzdHIgKHN0cmluZykgU1ZHIGZyYWdtZW50IG9mIGZpbHRlciBwcm92aWRlZCBhcyBhIHN0cmluZ1xuICAgICA9IChvYmplY3QpIEBFbGVtZW50XG4gICAgICogTm90ZTogSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIGZpbHRlcnMgZW1iZWRkZWQgaW50byB0aGUgcGFnZSBpbnNpZGUgYW4gZW1wdHkgU1ZHIGVsZW1lbnQuXG4gICAgID4gVXNhZ2VcbiAgICAgfCB2YXIgZiA9IHBhcGVyLmZpbHRlcignPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjJcIi8+JyksXG4gICAgIHwgICAgIGMgPSBwYXBlci5jaXJjbGUoMTAsIDEwLCAxMCkuYXR0cih7XG4gICAgIHwgICAgICAgICBmaWx0ZXI6IGZcbiAgICAgfCAgICAgfSk7XG4gICAgXFwqL1xuICAgIHBwcm90by5maWx0ZXIgPSBmdW5jdGlvbiAoZmlsc3RyKSB7XG4gICAgICAgIHZhciBwYXBlciA9IHRoaXM7XG4gICAgICAgIGlmIChwYXBlci50eXBlICE9IFwic3ZnXCIpIHtcbiAgICAgICAgICAgIHBhcGVyID0gcGFwZXIucGFwZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGYgPSBTbmFwLnBhcnNlKFN0cihmaWxzdHIpKSxcbiAgICAgICAgICAgIGlkID0gU25hcC5fLmlkKCksXG4gICAgICAgICAgICB3aWR0aCA9IHBhcGVyLm5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBwYXBlci5ub2RlLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGZpbHRlciA9ICQoXCJmaWx0ZXJcIik7XG4gICAgICAgICQoZmlsdGVyLCB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmaWx0ZXJVbml0czogXCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBmaWx0ZXIuYXBwZW5kQ2hpbGQoZi5ub2RlKTtcbiAgICAgICAgcGFwZXIuZGVmcy5hcHBlbmRDaGlsZChmaWx0ZXIpO1xuICAgICAgICByZXR1cm4gbmV3IEVsZW1lbnQoZmlsdGVyKTtcbiAgICB9O1xuICAgIFxuICAgIGV2ZS5vbihcInNuYXAudXRpbC5nZXRhdHRyLmZpbHRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2ZS5zdG9wKCk7XG4gICAgICAgIHZhciBwID0gJCh0aGlzLm5vZGUsIFwiZmlsdGVyXCIpO1xuICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gU3RyKHApLm1hdGNoKHJndXJsKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCAmJiBTbmFwLnNlbGVjdChtYXRjaFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBldmUub24oXCJzbmFwLnV0aWwuYXR0ci5maWx0ZXJcIiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdmFsdWUudHlwZSA9PSBcImZpbHRlclwiKSB7XG4gICAgICAgICAgICBldmUuc3RvcCgpO1xuICAgICAgICAgICAgdmFyIGlkID0gdmFsdWUubm9kZS5pZDtcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAkKHZhbHVlLm5vZGUsIHtpZDogdmFsdWUuaWR9KTtcbiAgICAgICAgICAgICAgICBpZCA9IHZhbHVlLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzLm5vZGUsIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IFNuYXAudXJsKGlkKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZXZlLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKlxcXG4gICAgICogU25hcC5maWx0ZXIuYmx1clxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyBhbiBTVkcgbWFya3VwIHN0cmluZyBmb3IgdGhlIGJsdXIgZmlsdGVyXG4gICAgICoqXG4gICAgIC0geCAobnVtYmVyKSBhbW91bnQgb2YgaG9yaXpvbnRhbCBibHVyLCBpbiBwaXhlbHNcbiAgICAgLSB5IChudW1iZXIpICNvcHRpb25hbCBhbW91bnQgb2YgdmVydGljYWwgYmx1ciwgaW4gcGl4ZWxzXG4gICAgID0gKHN0cmluZykgZmlsdGVyIHJlcHJlc2VudGF0aW9uXG4gICAgID4gVXNhZ2VcbiAgICAgfCB2YXIgZiA9IHBhcGVyLmZpbHRlcihTbmFwLmZpbHRlci5ibHVyKDUsIDEwKSksXG4gICAgIHwgICAgIGMgPSBwYXBlci5jaXJjbGUoMTAsIDEwLCAxMCkuYXR0cih7XG4gICAgIHwgICAgICAgICBmaWx0ZXI6IGZcbiAgICAgfCAgICAgfSk7XG4gICAgXFwqL1xuICAgIFNuYXAuZmlsdGVyLmJsdXIgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICAgICAgICB4ID0gMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVmID0geSA9PSBudWxsID8geCA6IFt4LCB5XTtcbiAgICAgICAgcmV0dXJuIFNuYXAuZm9ybWF0KCdcXDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCJ7ZGVmfVwiLz4nLCB7XG4gICAgICAgICAgICBkZWY6IGRlZlxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNuYXAuZmlsdGVyLmJsdXIudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzKCk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU25hcC5maWx0ZXIuc2hhZG93XG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGFuIFNWRyBtYXJrdXAgc3RyaW5nIGZvciB0aGUgc2hhZG93IGZpbHRlclxuICAgICAqKlxuICAgICAtIGR4IChudW1iZXIpICNvcHRpb25hbCBob3Jpem9udGFsIHNoaWZ0IG9mIHRoZSBzaGFkb3csIGluIHBpeGVsc1xuICAgICAtIGR5IChudW1iZXIpICNvcHRpb25hbCB2ZXJ0aWNhbCBzaGlmdCBvZiB0aGUgc2hhZG93LCBpbiBwaXhlbHNcbiAgICAgLSBibHVyIChudW1iZXIpICNvcHRpb25hbCBhbW91bnQgb2YgYmx1clxuICAgICAtIGNvbG9yIChzdHJpbmcpICNvcHRpb25hbCBjb2xvciBvZiB0aGUgc2hhZG93XG4gICAgIC0gb3BhY2l0eSAobnVtYmVyKSAjb3B0aW9uYWwgYDAuLjFgIG9wYWNpdHkgb2YgdGhlIHNoYWRvd1xuICAgICAqIG9yXG4gICAgIC0gZHggKG51bWJlcikgI29wdGlvbmFsIGhvcml6b250YWwgc2hpZnQgb2YgdGhlIHNoYWRvdywgaW4gcGl4ZWxzXG4gICAgIC0gZHkgKG51bWJlcikgI29wdGlvbmFsIHZlcnRpY2FsIHNoaWZ0IG9mIHRoZSBzaGFkb3csIGluIHBpeGVsc1xuICAgICAtIGNvbG9yIChzdHJpbmcpICNvcHRpb25hbCBjb2xvciBvZiB0aGUgc2hhZG93XG4gICAgIC0gb3BhY2l0eSAobnVtYmVyKSAjb3B0aW9uYWwgYDAuLjFgIG9wYWNpdHkgb2YgdGhlIHNoYWRvd1xuICAgICAqIHdoaWNoIG1ha2VzIGJsdXIgZGVmYXVsdCB0byBgNGAuIE9yXG4gICAgIC0gZHggKG51bWJlcikgI29wdGlvbmFsIGhvcml6b250YWwgc2hpZnQgb2YgdGhlIHNoYWRvdywgaW4gcGl4ZWxzXG4gICAgIC0gZHkgKG51bWJlcikgI29wdGlvbmFsIHZlcnRpY2FsIHNoaWZ0IG9mIHRoZSBzaGFkb3csIGluIHBpeGVsc1xuICAgICAtIG9wYWNpdHkgKG51bWJlcikgI29wdGlvbmFsIGAwLi4xYCBvcGFjaXR5IG9mIHRoZSBzaGFkb3dcbiAgICAgPSAoc3RyaW5nKSBmaWx0ZXIgcmVwcmVzZW50YXRpb25cbiAgICAgPiBVc2FnZVxuICAgICB8IHZhciBmID0gcGFwZXIuZmlsdGVyKFNuYXAuZmlsdGVyLnNoYWRvdygwLCAyLCAzKSksXG4gICAgIHwgICAgIGMgPSBwYXBlci5jaXJjbGUoMTAsIDEwLCAxMCkuYXR0cih7XG4gICAgIHwgICAgICAgICBmaWx0ZXI6IGZcbiAgICAgfCAgICAgfSk7XG4gICAgXFwqL1xuICAgIFNuYXAuZmlsdGVyLnNoYWRvdyA9IGZ1bmN0aW9uIChkeCwgZHksIGJsdXIsIGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmx1ciA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb2xvciA9IGJsdXI7XG4gICAgICAgICAgICBvcGFjaXR5ID0gY29sb3I7XG4gICAgICAgICAgICBibHVyID0gNDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbG9yICE9IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSBjb2xvcjtcbiAgICAgICAgICAgIGNvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29sb3IgPSBjb2xvciB8fCBcIiMwMDBcIjtcbiAgICAgICAgaWYgKGJsdXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgYmx1ciA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wYWNpdHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgb3BhY2l0eSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR4ID09IG51bGwpIHtcbiAgICAgICAgICAgIGR4ID0gMDtcbiAgICAgICAgICAgIGR5ID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHkgPT0gbnVsbCkge1xuICAgICAgICAgICAgZHkgPSBkeDtcbiAgICAgICAgfVxuICAgICAgICBjb2xvciA9IFNuYXAuY29sb3IoY29sb3IpO1xuICAgICAgICByZXR1cm4gU25hcC5mb3JtYXQoJzxmZUdhdXNzaWFuQmx1ciBpbj1cIlNvdXJjZUFscGhhXCIgc3RkRGV2aWF0aW9uPVwie2JsdXJ9XCIvPjxmZU9mZnNldCBkeD1cIntkeH1cIiBkeT1cIntkeX1cIiByZXN1bHQ9XCJvZmZzZXRibHVyXCIvPjxmZUZsb29kIGZsb29kLWNvbG9yPVwie2NvbG9yfVwiLz48ZmVDb21wb3NpdGUgaW4yPVwib2Zmc2V0Ymx1clwiIG9wZXJhdG9yPVwiaW5cIi8+PGZlQ29tcG9uZW50VHJhbnNmZXI+PGZlRnVuY0EgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwie29wYWNpdHl9XCIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVNZXJnZT48ZmVNZXJnZU5vZGUvPjxmZU1lcmdlTm9kZSBpbj1cIlNvdXJjZUdyYXBoaWNcIi8+PC9mZU1lcmdlPicsIHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGR4OiBkeCxcbiAgICAgICAgICAgIGR5OiBkeSxcbiAgICAgICAgICAgIGJsdXI6IGJsdXIsXG4gICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuc2hhZG93LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcygpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNuYXAuZmlsdGVyLmdyYXlzY2FsZVxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyBhbiBTVkcgbWFya3VwIHN0cmluZyBmb3IgdGhlIGdyYXlzY2FsZSBmaWx0ZXJcbiAgICAgKipcbiAgICAgLSBhbW91bnQgKG51bWJlcikgYW1vdW50IG9mIGZpbHRlciAoYDAuLjFgKVxuICAgICA9IChzdHJpbmcpIGZpbHRlciByZXByZXNlbnRhdGlvblxuICAgIFxcKi9cbiAgICBTbmFwLmZpbHRlci5ncmF5c2NhbGUgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU25hcC5mb3JtYXQoJzxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCJ7YX0ge2J9IHtjfSAwIDAge2R9IHtlfSB7Zn0gMCAwIHtnfSB7Yn0ge2h9IDAgMCAwIDAgMCAxIDBcIi8+Jywge1xuICAgICAgICAgICAgYTogMC4yMTI2ICsgMC43ODc0ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgYjogMC43MTUyIC0gMC43MTUyICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgYzogMC4wNzIyIC0gMC4wNzIyICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZDogMC4yMTI2IC0gMC4yMTI2ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZTogMC43MTUyICsgMC4yODQ4ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZjogMC4wNzIyIC0gMC4wNzIyICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZzogMC4yMTI2IC0gMC4yMTI2ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgaDogMC4wNzIyICsgMC45Mjc4ICogKDEgLSBhbW91bnQpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuZ3JheXNjYWxlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcygpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNuYXAuZmlsdGVyLnNlcGlhXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGFuIFNWRyBtYXJrdXAgc3RyaW5nIGZvciB0aGUgc2VwaWEgZmlsdGVyXG4gICAgICoqXG4gICAgIC0gYW1vdW50IChudW1iZXIpIGFtb3VudCBvZiBmaWx0ZXIgKGAwLi4xYClcbiAgICAgPSAoc3RyaW5nKSBmaWx0ZXIgcmVwcmVzZW50YXRpb25cbiAgICBcXCovXG4gICAgU25hcC5maWx0ZXIuc2VwaWEgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU25hcC5mb3JtYXQoJzxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCJ7YX0ge2J9IHtjfSAwIDAge2R9IHtlfSB7Zn0gMCAwIHtnfSB7aH0ge2l9IDAgMCAwIDAgMCAxIDBcIi8+Jywge1xuICAgICAgICAgICAgYTogMC4zOTMgKyAwLjYwNyAqICgxIC0gYW1vdW50KSxcbiAgICAgICAgICAgIGI6IDAuNzY5IC0gMC43NjkgKiAoMSAtIGFtb3VudCksXG4gICAgICAgICAgICBjOiAwLjE4OSAtIDAuMTg5ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZDogMC4zNDkgLSAwLjM0OSAqICgxIC0gYW1vdW50KSxcbiAgICAgICAgICAgIGU6IDAuNjg2ICsgMC4zMTQgKiAoMSAtIGFtb3VudCksXG4gICAgICAgICAgICBmOiAwLjE2OCAtIDAuMTY4ICogKDEgLSBhbW91bnQpLFxuICAgICAgICAgICAgZzogMC4yNzIgLSAwLjI3MiAqICgxIC0gYW1vdW50KSxcbiAgICAgICAgICAgIGg6IDAuNTM0IC0gMC41MzQgKiAoMSAtIGFtb3VudCksXG4gICAgICAgICAgICBpOiAwLjEzMSArIDAuODY5ICogKDEgLSBhbW91bnQpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuc2VwaWEudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzKCk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU25hcC5maWx0ZXIuc2F0dXJhdGVcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgYW4gU1ZHIG1hcmt1cCBzdHJpbmcgZm9yIHRoZSBzYXR1cmF0ZSBmaWx0ZXJcbiAgICAgKipcbiAgICAgLSBhbW91bnQgKG51bWJlcikgYW1vdW50IG9mIGZpbHRlciAoYDAuLjFgKVxuICAgICA9IChzdHJpbmcpIGZpbHRlciByZXByZXNlbnRhdGlvblxuICAgIFxcKi9cbiAgICBTbmFwLmZpbHRlci5zYXR1cmF0ZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PSBudWxsKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTbmFwLmZvcm1hdCgnPGZlQ29sb3JNYXRyaXggdHlwZT1cInNhdHVyYXRlXCIgdmFsdWVzPVwie2Ftb3VudH1cIi8+Jywge1xuICAgICAgICAgICAgYW1vdW50OiAxIC0gYW1vdW50XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuc2F0dXJhdGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzKCk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU25hcC5maWx0ZXIuaHVlUm90YXRlXG4gICAgIFsgbWV0aG9kIF1cbiAgICAgKipcbiAgICAgKiBSZXR1cm5zIGFuIFNWRyBtYXJrdXAgc3RyaW5nIGZvciB0aGUgaHVlLXJvdGF0ZSBmaWx0ZXJcbiAgICAgKipcbiAgICAgLSBhbmdsZSAobnVtYmVyKSBhbmdsZSBvZiByb3RhdGlvblxuICAgICA9IChzdHJpbmcpIGZpbHRlciByZXByZXNlbnRhdGlvblxuICAgIFxcKi9cbiAgICBTbmFwLmZpbHRlci5odWVSb3RhdGUgPSBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgICAgICAgYW5nbGUgPSBhbmdsZSB8fCAwO1xuICAgICAgICByZXR1cm4gU25hcC5mb3JtYXQoJzxmZUNvbG9yTWF0cml4IHR5cGU9XCJodWVSb3RhdGVcIiB2YWx1ZXM9XCJ7YW5nbGV9XCIvPicsIHtcbiAgICAgICAgICAgIGFuZ2xlOiBhbmdsZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNuYXAuZmlsdGVyLmh1ZVJvdGF0ZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMoKTtcbiAgICB9O1xuICAgIC8qXFxcbiAgICAgKiBTbmFwLmZpbHRlci5pbnZlcnRcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgYW4gU1ZHIG1hcmt1cCBzdHJpbmcgZm9yIHRoZSBpbnZlcnQgZmlsdGVyXG4gICAgICoqXG4gICAgIC0gYW1vdW50IChudW1iZXIpIGFtb3VudCBvZiBmaWx0ZXIgKGAwLi4xYClcbiAgICAgPSAoc3RyaW5nKSBmaWx0ZXIgcmVwcmVzZW50YXRpb25cbiAgICBcXCovXG4gICAgU25hcC5maWx0ZXIuaW52ZXJ0ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDE7XG4gICAgICAgIH1cbi8vICAgICAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPVwibWF0cml4XCIgdmFsdWVzPVwiLTEgMCAwIDAgMSAgMCAtMSAwIDAgMSAgMCAwIC0xIDAgMSAgMCAwIDAgMSAwXCIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPVwic1JHQlwiLz5cbiAgICAgICAgcmV0dXJuIFNuYXAuZm9ybWF0KCc8ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPVwidGFibGVcIiB0YWJsZVZhbHVlcz1cInthbW91bnR9IHthbW91bnQyfVwiLz48ZmVGdW5jRyB0eXBlPVwidGFibGVcIiB0YWJsZVZhbHVlcz1cInthbW91bnR9IHthbW91bnQyfVwiLz48ZmVGdW5jQiB0eXBlPVwidGFibGVcIiB0YWJsZVZhbHVlcz1cInthbW91bnR9IHthbW91bnQyfVwiLz48L2ZlQ29tcG9uZW50VHJhbnNmZXI+Jywge1xuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICBhbW91bnQyOiAxIC0gYW1vdW50XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuaW52ZXJ0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcygpO1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIFNuYXAuZmlsdGVyLmJyaWdodG5lc3NcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgYW4gU1ZHIG1hcmt1cCBzdHJpbmcgZm9yIHRoZSBicmlnaHRuZXNzIGZpbHRlclxuICAgICAqKlxuICAgICAtIGFtb3VudCAobnVtYmVyKSBhbW91bnQgb2YgZmlsdGVyIChgMC4uMWApXG4gICAgID0gKHN0cmluZykgZmlsdGVyIHJlcHJlc2VudGF0aW9uXG4gICAgXFwqL1xuICAgIFNuYXAuZmlsdGVyLmJyaWdodG5lc3MgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU25hcC5mb3JtYXQoJzxmZUNvbXBvbmVudFRyYW5zZmVyPjxmZUZ1bmNSIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cInthbW91bnR9XCIvPjxmZUZ1bmNHIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cInthbW91bnR9XCIvPjxmZUZ1bmNCIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cInthbW91bnR9XCIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj4nLCB7XG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNuYXAuZmlsdGVyLmJyaWdodG5lc3MudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzKCk7XG4gICAgfTtcbiAgICAvKlxcXG4gICAgICogU25hcC5maWx0ZXIuY29udHJhc3RcbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIFJldHVybnMgYW4gU1ZHIG1hcmt1cCBzdHJpbmcgZm9yIHRoZSBjb250cmFzdCBmaWx0ZXJcbiAgICAgKipcbiAgICAgLSBhbW91bnQgKG51bWJlcikgYW1vdW50IG9mIGZpbHRlciAoYDAuLjFgKVxuICAgICA9IChzdHJpbmcpIGZpbHRlciByZXByZXNlbnRhdGlvblxuICAgIFxcKi9cbiAgICBTbmFwLmZpbHRlci5jb250cmFzdCA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PSBudWxsKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTbmFwLmZvcm1hdCgnPGZlQ29tcG9uZW50VHJhbnNmZXI+PGZlRnVuY1IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwie2Ftb3VudH1cIiBpbnRlcmNlcHQ9XCJ7YW1vdW50Mn1cIi8+PGZlRnVuY0cgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwie2Ftb3VudH1cIiBpbnRlcmNlcHQ9XCJ7YW1vdW50Mn1cIi8+PGZlRnVuY0IgdHlwZT1cImxpbmVhclwiIHNsb3BlPVwie2Ftb3VudH1cIiBpbnRlcmNlcHQ9XCJ7YW1vdW50Mn1cIi8+PC9mZUNvbXBvbmVudFRyYW5zZmVyPicsIHtcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgYW1vdW50MjogLjUgLSBhbW91bnQgLyAyXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU25hcC5maWx0ZXIuY29udHJhc3QudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzKCk7XG4gICAgfTtcbn0pO1xuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5TbmFwLnBsdWdpbihmdW5jdGlvbiAoU25hcCwgRWxlbWVudCwgUGFwZXIsIGdsb2IsIEZyYWdtZW50KSB7XG4gICAgdmFyIGJveCA9IFNuYXAuXy5ib3gsXG4gICAgICAgIGlzID0gU25hcC5pcyxcbiAgICAgICAgZmlyc3RMZXR0ZXIgPSAvXlteYS16XSooW3RibWxyY10pL2ksXG4gICAgICAgIHRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiVFwiICsgdGhpcy5keCArIFwiLFwiICsgdGhpcy5keTtcbiAgICAgICAgfTtcbiAgICAvKlxcXG4gICAgICogRWxlbWVudC5nZXRBbGlnblxuICAgICBbIG1ldGhvZCBdXG4gICAgICoqXG4gICAgICogUmV0dXJucyBzaGlmdCBuZWVkZWQgdG8gYWxpZ24gdGhlIGVsZW1lbnQgcmVsYXRpdmVseSB0byBnaXZlbiBlbGVtZW50LlxuICAgICAqIElmIG5vIGVsZW1lbnRzIHNwZWNpZmllZCwgcGFyZW50IGA8c3ZnPmAgY29udGFpbmVyIHdpbGwgYmUgdXNlZC5cbiAgICAgLSBlbCAob2JqZWN0KSBAb3B0aW9uYWwgYWxpZ25tZW50IGVsZW1lbnRcbiAgICAgLSB3YXkgKHN0cmluZykgb25lIG9mIHNpeCB2YWx1ZXM6IGBcInRvcFwiYCwgYFwibWlkZGxlXCJgLCBgXCJib3R0b21cImAsIGBcImxlZnRcImAsIGBcImNlbnRlclwiYCwgYFwicmlnaHRcImBcbiAgICAgPSAob2JqZWN0fHN0cmluZykgT2JqZWN0IGluIGZvcm1hdCBge2R4OiAsIGR5OiB9YCBhbHNvIGhhcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBhcyBhIHRyYW5zZm9ybWF0aW9uIHN0cmluZ1xuICAgICA+IFVzYWdlXG4gICAgIHwgZWwudHJhbnNmb3JtKGVsLmdldEFsaWduKGVsMiwgXCJ0b3BcIikpO1xuICAgICAqIG9yXG4gICAgIHwgdmFyIGR5ID0gZWwuZ2V0QWxpZ24oZWwyLCBcInRvcFwiKS5keTtcbiAgICBcXCovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0QWxpZ24gPSBmdW5jdGlvbiAoZWwsIHdheSkge1xuICAgICAgICBpZiAod2F5ID09IG51bGwgJiYgaXMoZWwsIFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICB3YXkgPSBlbDtcbiAgICAgICAgICAgIGVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsIHx8IHRoaXMucGFwZXI7XG4gICAgICAgIHZhciBieCA9IGVsLmdldEJCb3ggPyBlbC5nZXRCQm94KCkgOiBib3goZWwpLFxuICAgICAgICAgICAgYmIgPSB0aGlzLmdldEJCb3goKSxcbiAgICAgICAgICAgIG91dCA9IHt9O1xuICAgICAgICB3YXkgPSB3YXkgJiYgd2F5Lm1hdGNoKGZpcnN0TGV0dGVyKTtcbiAgICAgICAgd2F5ID0gd2F5ID8gd2F5WzFdLnRvTG93ZXJDYXNlKCkgOiBcImNcIjtcbiAgICAgICAgc3dpdGNoICh3YXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0XCI6XG4gICAgICAgICAgICAgICAgb3V0LmR4ID0gMDtcbiAgICAgICAgICAgICAgICBvdXQuZHkgPSBieC55IC0gYmIueTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICBvdXQuZHggPSAwO1xuICAgICAgICAgICAgICAgIG91dC5keSA9IGJ4LnkyIC0gYmIueTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICAgICAgb3V0LmR4ID0gMDtcbiAgICAgICAgICAgICAgICBvdXQuZHkgPSBieC5jeSAtIGJiLmN5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibFwiOlxuICAgICAgICAgICAgICAgIG91dC5keCA9IGJ4LnggLSBiYi54O1xuICAgICAgICAgICAgICAgIG91dC5keSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyXCI6XG4gICAgICAgICAgICAgICAgb3V0LmR4ID0gYngueDIgLSBiYi54MjtcbiAgICAgICAgICAgICAgICBvdXQuZHkgPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG91dC5keCA9IGJ4LmN4IC0gYmIuY3g7XG4gICAgICAgICAgICAgICAgb3V0LmR5ID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIG91dC50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLypcXFxuICAgICAqIEVsZW1lbnQuYWxpZ25cbiAgICAgWyBtZXRob2QgXVxuICAgICAqKlxuICAgICAqIEFsaWducyB0aGUgZWxlbWVudCByZWxhdGl2ZWx5IHRvIGdpdmVuIG9uZSB2aWEgdHJhbnNmb3JtYXRpb24uXG4gICAgICogSWYgbm8gZWxlbWVudHMgc3BlY2lmaWVkLCBwYXJlbnQgYDxzdmc+YCBjb250YWluZXIgd2lsbCBiZSB1c2VkLlxuICAgICAtIGVsIChvYmplY3QpIEBvcHRpb25hbCBhbGlnbm1lbnQgZWxlbWVudFxuICAgICAtIHdheSAoc3RyaW5nKSBvbmUgb2Ygc2l4IHZhbHVlczogYFwidG9wXCJgLCBgXCJtaWRkbGVcImAsIGBcImJvdHRvbVwiYCwgYFwibGVmdFwiYCwgYFwiY2VudGVyXCJgLCBgXCJyaWdodFwiYFxuICAgICA9IChvYmplY3QpIHRoaXMgZWxlbWVudFxuICAgICA+IFVzYWdlXG4gICAgIHwgZWwuYWxpZ24oZWwyLCBcInRvcFwiKTtcbiAgICAgKiBvclxuICAgICB8IGVsLmFsaWduKFwibWlkZGxlXCIpO1xuICAgIFxcKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5hbGlnbiA9IGZ1bmN0aW9uIChlbCwgd2F5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybShcIi4uLlwiICsgdGhpcy5nZXRBbGlnbihlbCwgd2F5KSk7XG4gICAgfTtcbn0pO1xuXG5yZXR1cm4gU25hcDtcbn0pKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWxleGlzIG9uIDI1LzA1LzIwMTYuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb25maWcge1xuICAgIHN0YXRpYyBkdXJhdGlvbiA9IHJlcXVpcmUoXCIuLi9jZmcvU2ltdWxhdGlvbi5jZmcuanNvblwiKTtcbn07IiwidmFyIFNuYXAgPSByZXF1aXJlKFwic25hcHN2Z1wiKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBEaXNwbGF5TWFuYWdlciB7XHJcblxyXG4gICAgc3RhdGljIGNmZyA9IHJlcXVpcmUoXCIuLi9jZmcvRGlzcGxheU1hbmFnZXIuY2ZnLmpzb25cIik7XHJcblxyXG4gICAgc3RhdGljIGluaXQoX2luaSkge1xyXG4gICAgICAgIERpc3BsYXlNYW5hZ2VyLnBhcGVyID0gU25hcChfaW5pLncsIF9pbmkuaCk7XHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIuYXR0cih7XHJcbiAgICAgICAgICAgIHZpZXdCb3g6IFswLCAwLCBfaW5pLnZ3LCBfaW5pLnZoXS5qb2luKFwiIFwiKSxcclxuICAgICAgICAgICAgc3R5bGU6ICBcImJhY2tncm91bmQtY29sb3I6XCIgKyAgRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLmJhY2tncm91bmQgKyBcIjtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRDT1xyXG4gICAgICAgIERpc3BsYXlNYW5hZ2VyLnBhcGVyLnJlY3QoX2luaS5UQ08ucG9zLngsIF9pbmkuVENPLnBvcy55LCBfaW5pLlRDTy5zaXplLncsIF9pbmkuVENPLnNpemUuaCkuYXR0cih7XHJcbiAgICAgICAgICAgIGZpbGw6IERpc3BsYXlNYW5hZ2VyLmNmZy5jb2xvci5UQ08uYmFja2dyb3VuZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBHcmlkXHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIgPSBfaW5pLmdyaWQ7XHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuY29sdW1uV2lkdGggPSBEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5zaXplLncgLyBEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5uYkNvbHVtbnM7XHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIucm93SGVpZ2h0ID0gRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuc2l6ZS5oIC8gRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIubmJSb3dzO1xyXG4gICAgICAgIC8vIEJhY2tncm91bmQgZ3JpZFxyXG4gICAgICAgIERpc3BsYXlNYW5hZ2VyLnBhcGVyLnJlY3QoX2luaS5ncmlkLnBvcy54LCBfaW5pLmdyaWQucG9zLnksIF9pbmkuZ3JpZC5zaXplLncsIF9pbmkuZ3JpZC5zaXplLmgpXHJcbiAgICAgICAgICAgIC5hdHRyKERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLmdyaWQpO1xyXG4gICAgICAgIC8vIEdyaWQgbGluZXNcclxuICAgICAgICBmb3IobGV0IHggPSAxOyB4IDwgX2luaS5ncmlkLm5iQ29sdW1uczsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2ZWN0b3IgPSBEaXNwbGF5TWFuYWdlci5jb252ZXJ0VmVjdG9yVG9HcmlkKHt4OiB4LCB5OiAwfSk7XHJcbiAgICAgICAgICAgIERpc3BsYXlNYW5hZ2VyLnBhcGVyLmxpbmUodmVjdG9yLngsIHZlY3Rvci55LCB2ZWN0b3IueCwgdmVjdG9yLnkgKyBfaW5pLmdyaWQuc2l6ZS5oKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuZ3JpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgeSA9IDE7IHkgPCBfaW5pLmdyaWQubmJSb3dzOyB5KyspIHtcclxuICAgICAgICAgICAgbGV0IHZlY3RvciA9IERpc3BsYXlNYW5hZ2VyLmNvbnZlcnRWZWN0b3JUb0dyaWQoe3g6IDAsIHk6IHl9KTtcclxuICAgICAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIubGluZSh2ZWN0b3IueCwgdmVjdG9yLnksIHZlY3Rvci54ICsgX2luaS5ncmlkLnNpemUudywgdmVjdG9yLnkpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5ncmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnZlcnRWZWN0b3JUb0dyaWQodSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLnBvcy54ICsgdS54ICogRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuY29sdW1uV2lkdGgsXHJcbiAgICAgICAgICAgIHk6IERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLnBvcy55ICsgdS55ICogRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIucm93SGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U3ltbWV0cmljYWxQb2ludHMocG9pbnRzLCB4U3ltLCB5U3ltKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAoKHBvaW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB4OiB4U3ltICE9IG51bGwgPyAyICogeFN5bSAtIHBvaW50LnggOiBwb2ludC54LFxyXG4gICAgICAgICAgICAgICAgeTogeVN5bSAhPSBudWxsID8gMiAqIHlTeW0gLSBwb2ludC55IDogcG9pbnQueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTeW1tZXRyaWNhbFJlY3QocmVjdCwgeFN5bSwgeVN5bSkge1xyXG4gICAgICAgIGxldCBzeW1tZXRyaWNhbFBvcyA9IERpc3BsYXlNYW5hZ2VyLmdldFN5bW1ldHJpY2FsUG9pbnRzKFt7eDogcmVjdC54LCB5OiByZWN0Lnl9XSwgeFN5bSwgeVN5bSlbMF07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogc3ltbWV0cmljYWxQb3MueCAtICh4U3ltICE9IG51bGwgPyByZWN0LncgOiAwKSxcclxuICAgICAgICAgICAgeTogc3ltbWV0cmljYWxQb3MueSAtICh5U3ltICE9IG51bGwgPyByZWN0LmggOiAwKSxcclxuICAgICAgICAgICAgdzogcmVjdC53LFxyXG4gICAgICAgICAgICBoOiByZWN0LmhcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGFuZ2Ugb2NjdXJyZWQgb24gYSBHYXRlLlxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZSgpIHt9O1xyXG59O1xyXG4iLCJ2YXIgQ29uZmlnID0gcmVxdWlyZShcIi4vQ29uZmlnXCIpO1xyXG5cclxuLyoqXHJcbiAqIE9LXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRyYWluTWFuYWdlciB7XHJcbiAgICB3YWl0aW5nVHJhaW5zID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX3RyYWlucywgX3JvdXRlcywgX3NvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLnRyYWlucyA9IF90cmFpbnM7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBfcm91dGVzO1xyXG4gICAgICAgIHRoaXMuc291cmNlcyA9IF9zb3VyY2VzO1xyXG5cclxuICAgICAgICB0aGlzLnRyYWlucy5mb3JFYWNoKHRyYWluID0+IHtcclxuICAgICAgICAgICAgdHJhaW4ub25Bbm5vdW5jZWQgPSAoKSA9PiB0aGlzLm9uQW5ub3VuY2VkKHRyYWluKTtcclxuICAgICAgICAgICAgdHJhaW4ub25BcnJpdmVkID0gKCkgPT4gdGhpcy5vbkFycml2ZWQodHJhaW4pO1xyXG4gICAgICAgICAgICB0cmFpbi5vblJlbGVhc2VHYXRlcyA9IChnYXRlcykgPT4gdGhpcy5vblJlbGVhc2VHYXRlcyh0cmFpbiwgZ2F0ZXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiByb3V0ZS5vbkVzdGFibGlzaGVkID0gKCkgPT4gdGhpcy5vbkVzdGFibGlzaGVkKHJvdXRlKSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLmZvckVhY2goc291cmNlID0+IHRoaXMud2FpdGluZ1RyYWluc1tzb3VyY2UuaWRdID0gW10pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQW5ub3VuY2VkKHRyYWluKSB7XHJcbiAgICAgICAgbGV0IGxlZExhYmVsID0gdHJhaW4uYmFzZUFubm91bmNlbWVudDtcclxuICAgICAgICBsZWRMYWJlbC5vbigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbGVkTGFiZWwub2ZmKCksIENvbmZpZy5kdXJhdGlvbi5hbm5vdW5jZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXJyaXZlZCh0cmFpbikge1xyXG4gICAgICAgIGxldCByb3V0ZSA9IHRoaXMuZ2V0Um91dGVGcm9tU291cmNlKHRyYWluLmJhc2VTb3VyY2UpO1xyXG4gICAgICAgIGlmKHJvdXRlID09IG51bGwgfHwgIXRoaXMuc2V0VHJhaW5PblJvdXRlKHRyYWluLCByb3V0ZSwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMud2FpdGluZ1RyYWluc1t0cmFpbi5iYXNlU291cmNlLmlkXS5pbmRleE9mKHRyYWluKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ1RyYWluc1t0cmFpbi5iYXNlU291cmNlLmlkXS5wdXNoKHRyYWluKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlbGVhc2VHYXRlcyh0cmFpbiwgZ2F0ZXMpIHtcclxuICAgICAgICB0aGlzLnJvdXRlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKHJvdXRlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRlLmN1cnJlbnRUcmFpbiA9PT0gdHJhaW4gJiYgIXRyYWluLnJlc2VydmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGUuZ2F0ZXMuZXZlcnkoZyA9PiAhZy5pc1RyYWluT24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLmN1cnJlbnRUcmFpbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlLmlzRXN0YWJsaXNoZWQoKSAmJiAhcm91dGUuaXNUUDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2gocm91dGUgPT4gcm91dGUuYXV0b1JlbGVhc2VHYXRlcyhnYXRlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXN0YWJsaXNoZWQocm91dGUpIHtcclxuICAgICAgICB0aGlzLnNldFRyYWluT25Sb3V0ZSh0aGlzLndhaXRpbmdUcmFpbnNbcm91dGUuc291cmNlLmlkXS5zaGlmdCgpLCByb3V0ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHJhaW5PblJvdXRlKHRyYWluLCByb3V0ZSwgd2FzV2FpdGluZykge1xyXG4gICAgICAgIGlmKHRyYWluICE9IG51bGwgJiYgcm91dGUuY3VycmVudFRyYWluID09IG51bGwpIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudFRyYWluID0gdHJhaW47XHJcbiAgICAgICAgICAgIHRyYWluLnJlc2VydmVSb3V0ZSgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyYWluLmFkZFJvdXRlKHJvdXRlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlLnNvdXJjZS5zd2l0Y2hTdG9wbGlnaHQoXCJvblwiKTtcclxuICAgICAgICAgICAgfSwgd2FzV2FpdGluZyA/IENvbmZpZy5kdXJhdGlvbi50cmFpblN0YXJ0aW5nRGVsYXkgOiAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3V0ZUZyb21Tb3VyY2Uoc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUuc291cmNlID09PSBzb3VyY2UgJiYgcm91dGUuaXNFc3RhYmxpc2hlZCgpKTtcclxuICAgIH1cclxufTsiLCJ2YXIgRGlzcGxheU1hbmFnZXIgPSByZXF1aXJlKFwiLi9EaXNwbGF5TWFuYWdlclwiKTtcclxudmFyIFRyYWNrID0gcmVxdWlyZShcIi4vb2JqZWN0cy9UcmFja1wiKTtcclxudmFyIFN3aXRjaCA9IHJlcXVpcmUoXCIuL29iamVjdHMvU3dpdGNoXCIpO1xyXG52YXIgR2F0ZSA9IHJlcXVpcmUoXCIuL29iamVjdHMvR2F0ZVwiKTtcclxudmFyIFpvbmUgPSByZXF1aXJlKFwiLi9vYmplY3RzL1pvbmVcIik7XHJcbnZhciBTb3VyY2UgPSByZXF1aXJlKFwiLi9vYmplY3RzL1NvdXJjZVwiKTtcclxudmFyIFJvdXRlID0gcmVxdWlyZShcIi4vb2JqZWN0cy9Sb3V0ZVwiKTtcclxudmFyIFN0b3BCdG4gPSByZXF1aXJlKFwiLi9vYmplY3RzL1N0b3BCdG5cIik7XHJcbnZhciBMZWRMYWJlbCA9IHJlcXVpcmUoXCIuL29iamVjdHMvTGVkTGFiZWxcIik7XHJcbnZhciBUcmFpbiA9IHJlcXVpcmUoXCIuL29iamVjdHMvVHJhaW5cIik7XHJcbnZhciBUcmFpbk1hbmFnZXIgPSByZXF1aXJlKFwiLi9UcmFpbk1hbmFnZXJcIik7XHJcblxyXG5kb2N1bWVudC5ib2R5Lm9ubG9hZCA9IHN0YXJ0O1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICBEaXNwbGF5TWFuYWdlci5pbml0KHJlcXVpcmUoXCIuLi9jZmcvRGlzcGxheUdyaWQuY2ZnLmpzb25cIikpO1xyXG5cclxuICAgIHZhciBnYXJlID0gcmVxdWlyZShcIi4uL2NmZy9HYXJlMS5jZmcuanNvblwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgZ2F0ZSBhbmQgdmlldyBnYXRlc1xyXG4gICAgdmFyIGdhdGVzID0ge307XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnYXJlLmdhdGVzKS5mb3JFYWNoKChnYXRlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCBnYXRlID0gZ2FyZS5nYXRlc1tnYXRlTmFtZV07XHJcbiAgICAgICAgc3dpdGNoIChnYXRlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlRyYWNrXCI6XHJcbiAgICAgICAgICAgICAgICBnYXRlc1tnYXRlTmFtZV0gPSBuZXcgVHJhY2soZ2F0ZU5hbWUsIGdhdGUudmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlN3aXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgZ2F0ZXNbZ2F0ZU5hbWVdID0gbmV3IFN3aXRjaChnYXRlTmFtZSwgZ2F0ZS52aWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBsaW5rc1xyXG4gICAgZ2FyZS53aXJlcy5mb3JFYWNoKCh3aXJlKSA9PiBHYXRlLmFkZExpbmsoZ2F0ZXNbd2lyZVswXV0sIHdpcmVbMV0sIGdhdGVzW3dpcmVbMl1dLCB3aXJlWzNdKSk7XHJcblxyXG4gICAgLy8gQWRkIGNvbWJpbmVkIHN3aXRjaGVzXHJcbiAgICBnYXJlLmNvbWJpbmVkU3dpdGNoZXMuZm9yRWFjaCgocykgPT4gU3dpdGNoLmNvbWJpbmVkU3dpdGNoZXMoZ2F0ZXNbc1swXV0sIGdhdGVzW3NbMV1dKSk7XHJcblxyXG4gICAgLy8gQWRkIHpvbmVzXHJcbiAgICB2YXIgem9uZXMgPSB7fTtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGdhcmUuem9uZXMpLmZvckVhY2goKHpvbmVOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHpvbmUgPSBnYXJlLnpvbmVzW3pvbmVOYW1lXTtcclxuICAgICAgICBsZXQgem9uZUdhdGVzID0gem9uZS5nYXRlcy5tYXAoKG5hbWUpID0+IGdhdGVzW25hbWVdKTtcclxuICAgICAgICB6b25lc1t6b25lTmFtZV0gPSBuZXcgWm9uZSh6b25lTmFtZSwgem9uZUdhdGVzLCB6b25lLnZpZXcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIHNvdXJjZXNcclxuICAgIHZhciBzb3VyY2VzID0ge307XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnYXJlLnNvdXJjZXMpLmZvckVhY2goKHNvdXJjZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgc291cmNlID0gZ2FyZS5zb3VyY2VzW3NvdXJjZU5hbWVdO1xyXG4gICAgICAgIHNvdXJjZXNbc291cmNlTmFtZV0gPSBuZXcgU291cmNlKHNvdXJjZU5hbWUsIHNvdXJjZS52aWV3KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBzdG9wIGJ0blxyXG4gICAgdmFyIHN0b3BCdG5zID0ge307XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnYXJlLnN0b3BCdG4pLmZvckVhY2goKGJ0bk5hbWUpID0+IHtcclxuICAgICAgICBsZXQgYnRuID0gZ2FyZS5zdG9wQnRuW2J0bk5hbWVdO1xyXG4gICAgICAgIGxldCBidG5Tb3VyY2VzID0gYnRuLnNvdXJjZXMubWFwKChuYW1lKSA9PiBzb3VyY2VzW25hbWVdKTtcclxuICAgICAgICBzdG9wQnRuc1tidG5OYW1lXSA9IG5ldyBTdG9wQnRuKGJ0bk5hbWUsIGJ0blNvdXJjZXMsIGJ0bi52aWV3KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCByb3V0ZXNcclxuICAgIHZhciByb3V0ZXMgPSB7fTtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGdhcmUucm91dGVzKS5mb3JFYWNoKChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcm91dGUgPSBnYXJlLnJvdXRlc1tyb3V0ZU5hbWVdO1xyXG4gICAgICAgIGxldCBzb3VyY2UgPSBzb3VyY2VzW3JvdXRlLnNvdXJjZV07XHJcbiAgICAgICAgbGV0IG5leHRTb3VyY2UgPSByb3V0ZS5uZXh0U291cmNlICYmIHNvdXJjZXNbcm91dGUubmV4dFNvdXJjZV07XHJcbiAgICAgICAgbGV0IHJvdXRlWm9uZXMgPSByb3V0ZS56b25lcy5tYXAoKG5hbWUpID0+IHpvbmVzW25hbWVdKTtcclxuICAgICAgICBsZXQgcm91dGVHYXRlcyA9IHJvdXRlLmdhdGVzLm1hcCgobmFtZSkgPT4gZ2F0ZXNbbmFtZV0pO1xyXG4gICAgICAgIHJvdXRlc1tyb3V0ZU5hbWVdID0gbmV3IFJvdXRlKHJvdXRlTmFtZSwgc291cmNlLCBuZXh0U291cmNlLCByb3V0ZVpvbmVzLCByb3V0ZUdhdGVzLFxyXG4gICAgICAgICAgICByb3V0ZS5zd2l0Y2hEaXJzLCByb3V0ZS50cmFuc2l0LCByb3V0ZS5UUCwgcm91dGUudmlldyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbGVkIGxhYmVsc1xyXG4gICAgdmFyIGxlZExhYmVscyA9IHt9O1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZ2FyZS5sZWRMYWJlbHMpLmZvckVhY2goKGxlZE5hbWUpID0+IHtcclxuICAgICAgICBsZXQgbGVkID0gZ2FyZS5sZWRMYWJlbHNbbGVkTmFtZV07XHJcbiAgICAgICAgbGVkTGFiZWxzW2xlZE5hbWVdID0gbmV3IExlZExhYmVsKGxlZE5hbWUsIGxlZC52aWV3KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCB0cmFpbnNcclxuICAgIHZhciB0cmFpbnMgPSB7fTtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGdhcmUudHJhaW5zKS5mb3JFYWNoKCh0cmFpbk5hbWUpID0+IHtcclxuICAgICAgICBsZXQgdHJhaW4gPSBnYXJlLnRyYWluc1t0cmFpbk5hbWVdO1xyXG4gICAgICAgIGxldCBzb3VyY2UgPSBzb3VyY2VzW3RyYWluLmJhc2VTb3VyY2VdO1xyXG4gICAgICAgIGxldCBsZWRMYWJlbCA9IGxlZExhYmVsc1t0cmFpbi5iYXNlQW5ub3VuY2VtZW50XTtcclxuICAgICAgICB0cmFpbnNbdHJhaW5OYW1lXSA9IG5ldyBUcmFpbih0cmFpbk5hbWUsIHRyYWluLnZlbG9jaXR5LCB0cmFpbi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRyYWluLmFubm91bmNlbWVudFRpbWUsIHRyYWluLmFycml2YWxUaW1lLCB0cmFpbi5tYXhTdG9wVGltZSxcclxuICAgICAgICAgICAgc291cmNlLCBsZWRMYWJlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdHJhaW5zQXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0cmFpbnMpLm1hcCgodHJhaW5OYW1lKSA9PiB0cmFpbnNbdHJhaW5OYW1lXSk7XHJcbiAgICB2YXIgcm91dGVzQXJyYXkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhyb3V0ZXMpLm1hcCgocm91dGVOYW1lKSA9PiByb3V0ZXNbcm91dGVOYW1lXSk7XHJcbiAgICB2YXIgc291cmNlc0FycmF5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlcykubWFwKChzb3VyY2VOYW1lKSA9PiBzb3VyY2VzW3NvdXJjZU5hbWVdKTtcclxuICAgIHZhciB0cmFpbk1hbmFnZXIgPSBuZXcgVHJhaW5NYW5hZ2VyKHRyYWluc0FycmF5LCByb3V0ZXNBcnJheSwgc291cmNlc0FycmF5KTtcclxufSIsIlxyXG4vKipcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5jbGFzcyBFbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihfaWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gX2lkO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gRWw7IiwidmFyIEVsID0gcmVxdWlyZShcIi4vRWxcIik7XHJcblxyXG4vKipcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5jbGFzcyBHYXRlIGV4dGVuZHMgRWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUm91dGUgdHlwZS4gQ2FuIGJlIGZyZWVcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHJvdXRlVHlwZSA9IFwiZnJlZVwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBhIHRyYWluIGlzIGFjdHVhbGx5IG9uIHRoZSB0cmFjay5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc1RyYWluT24gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxpbmsgYmV0d2VlbiB0d28gR2F0ZSBvYmplY3RzIGF0IHRoZSBnaXZlbiBwb3J0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZExpbmsoZnJvbSwgZnJvbVBvcnQsIHRvLCB0b1BvcnQpIHtcclxuICAgICAgICBmcm9tLnBvcnRzW2Zyb21Qb3J0XSA9IHRvO1xyXG4gICAgICAgIHRvLnBvcnRzW3RvUG9ydF0gPSBmcm9tO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBMb2dpY1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvY2sgdGhlIGdhdGUuIEEgbG9ja2VyIGhhcyB0byBiZSBzZW50IGFzIGZpcnN0IHBhcmFtZXRlci4gVGhpcyBsb2NrZXIgd2lsbCBiZSB0aGUgb25seSBvbmNlIHdobyBjYW4gdW5sb2NrLlxyXG4gICAgICogQHBhcmFtIGxvY2tlciAtIEFueSBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gaXNUUCAtXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgbG9jayhsb2NrZXIsIGlzVFApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGVUeXBlID0gaXNUUCA/IFwiVFBcIiA6IFwiREFcIjtcclxuICAgICAgICBpZih0aGlzLl9sb2NrZXIgPT0gbnVsbCB8fCB0aGlzLl9sb2NrZXIgPT09IGxvY2tlciAmJiB0aGlzLnJvdXRlVHlwZSAhPT0gbmV3Um91dGVUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvY2tlciA9IGxvY2tlcjtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZVR5cGUgPSBuZXdSb3V0ZVR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmxvY2sobG9ja2VyKSB7XHJcbiAgICAgICAgaWYodGhpcy5fbG9ja2VyID09PSBsb2NrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9ja2VyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZVR5cGUgPSBcImZyZWVcIjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9ja2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NrZXIgIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUcmFpbihpc1RyYWluT24pIHtcclxuICAgICAgICB0aGlzLmlzVHJhaW5PbiA9IGlzVHJhaW5PbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBhYnN0cmFjdFxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7fVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBWaWV3XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGFic3RyYWN0XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVZpZXcoKSB7fVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gR2F0ZTsiLCJ2YXIgRGlzcGxheU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vRGlzcGxheU1hbmFnZXJcIik7XHJcbnZhciBFbCA9IHJlcXVpcmUoXCIuL0VsXCIpO1xyXG5cclxudmFyIFN0YXRlID0geyBPTjogXCJPTlwiLCBPRkY6IFwiT0ZGXCIgfTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTGVkTGFiZWwgZXh0ZW5kcyBFbCB7XHJcbiAgICBzdGF0ZSA9IFN0YXRlLk9GRjtcclxuXHJcbiAgICB2aWV3ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfdmlldykge1xyXG4gICAgICAgIHN1cGVyKF9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVmlldyhfdmlldyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIExvZ2ljXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIG9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5PTjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLk9GRjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gVmlld1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjcmVhdGVWaWV3KF92aWV3KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsZWRcclxuICAgICAgICBsZXQgciA9IERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLmxlZC5zaXplO1xyXG4gICAgICAgIHRoaXMudmlldy5sZWQgPSBEaXNwbGF5TWFuYWdlci5wYXBlci5jaXJjbGUoX3ZpZXcucG9zLngsIF92aWV3LnBvcy55LCByKS5hdHRyKHtcclxuICAgICAgICAgICAgZmlsbDogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLmJhY2tncm91bmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsYWJlbFxyXG4gICAgICAgIGlmKF92aWV3LmxhYmVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsWCA9IF92aWV3LmxhYmVsLnBvcy54O1xyXG4gICAgICAgICAgICBsZXQgbGFiZWxZID0gX3ZpZXcubGFiZWwucG9zLnlcclxuICAgICAgICAgICAgICAgICsgRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIubGVkTGFiZWwuZm9udFNpemUgKiAwLjM3XHJcbiAgICAgICAgICAgICAgICArIERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLmxlZExhYmVsLm9mZnNldFkgKiAoX3ZpZXcubGFiZWwuYWJvdmUgPyAtMSA6IDEpO1xyXG4gICAgICAgICAgICBEaXNwbGF5TWFuYWdlci5wYXBlci50ZXh0KGxhYmVsWCwgbGFiZWxZLCBfdmlldy5sYWJlbC52YWx1ZSkuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5sZWRMYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBsZWRcclxuICAgICAgICB0aGlzLnZpZXcubGVkLmF0dHIoe1xyXG4gICAgICAgICAgICBmaWxsOiBEaXNwbGF5TWFuYWdlci5jZmcuY29sb3IubGVkW3RoaXMuc3RhdGUgPT09IFN0YXRlLk9OID8gXCJvblwiIDogXCJvZmZcIl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IExlZExhYmVsOyIsInZhciBEaXNwbGF5TWFuYWdlciA9IHJlcXVpcmUoXCIuLi9EaXNwbGF5TWFuYWdlclwiKTtcclxudmFyIEVsID0gcmVxdWlyZShcIi4vRWxcIik7XHJcbnZhciBTb3VyY2UgPSByZXF1aXJlKFwiLi9Tb3VyY2VcIik7XHJcbnZhciBab25lID0gcmVxdWlyZShcIi4vWm9uZVwiKTtcclxudmFyIEdhdGUgPSByZXF1aXJlKFwiLi9HYXRlXCIpO1xyXG52YXIgU3dpdGNoID0gcmVxdWlyZShcIi4vU3dpdGNoXCIpO1xyXG52YXIgQ29uZmlnID0gcmVxdWlyZShcIi4uL0NvbmZpZ1wiKTtcclxudmFyIFRyYWluID0gcmVxdWlyZShcIi4vVHJhaW5cIik7XHJcblxyXG5jb25zdCBTdGF0ZSA9IHsgU0FWRUQ6IFwiU0FWRURcIiwgUFJFUEFSSU5HOiBcIlBSRVBBUklOR1wiLCBFU1RBQkxJU0hFRDogXCJFU1RBQkxJU0hFRFwiLCBSRUxFQVNFRDogXCJSRUxFQVNFRFwiIH07XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFJvdXRlIGV4dGVuZHMgRWwge1xyXG4gICAgaXNUUCA9IGZhbHNlO1xyXG4gICAgc3RhdGUgPSBTdGF0ZS5SRUxFQVNFRDtcclxuICAgIGN1cnJlbnRUcmFpbiA9IG51bGw7XHJcblxyXG4gICAgZ2F0ZXNCeVpvbmUgPSB7fTtcclxuICAgIG5vdEZyZWVab25lcyA9IFtdO1xyXG5cclxuICAgIHZpZXcgPSB7fTtcclxuICAgIHRpbWVvdXRCbGluayA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfc291cmNlLCBfbmV4dFNvdXJjZSwgX3pvbmVzLCBfZ2F0ZXMsIF9zd2l0Y2hEaXJzLCBfdHJhbnNpdCwgX1RQLCBfdmlldykge1xyXG4gICAgICAgIHN1cGVyKF9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFzVFAgPSBfVFA7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBfc291cmNlO1xyXG4gICAgICAgIHRoaXMubmV4dFNvdXJjZSA9IF9uZXh0U291cmNlO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdCA9IF90cmFuc2l0O1xyXG4gICAgICAgIHRoaXMuem9uZXMgPSBfem9uZXM7XHJcbiAgICAgICAgdGhpcy5nYXRlcyA9IF9nYXRlcztcclxuICAgICAgICB0aGlzLnN3aXRjaERpcnMgPSBfc3dpdGNoRGlycztcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVWaWV3KF92aWV3KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuXHJcbiAgICAgICAgdGhpcy56b25lcy5mb3JFYWNoKHpvbmUgPT4gdGhpcy5nYXRlc0J5Wm9uZVt6b25lLmlkXSA9IHpvbmUuZ2F0ZXMuZmlsdGVyKGdhdGUgPT4gdGhpcy5nYXRlcy5pbmRleE9mKGdhdGUpID49IDApKTtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmKHN0YXRlID09PSBTdGF0ZS5SRUxFQVNFRCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5zd2l0Y2hTdG9wbGlnaHQoXCJvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRQKFRQKSB7XHJcbiAgICAgICAgdGhpcy5pc1RQID0gVFA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIExvZ2ljXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjbGljayBvbiB0aGUgcm91dGUgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICAqIEBwYXJhbSByb3V0ZVR5cGVcclxuICAgICAqL1xyXG4gICAgb25DbGljayhyb3V0ZVR5cGUpIHtcclxuICAgICAgICBsZXQgVFAgPSByb3V0ZVR5cGUgPT09IFwiVFBcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTdGF0ZS5SRUxFQVNFRDpcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXIoVFApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdGUuU0FWRUQ6XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdGUuUFJFUEFSSU5HOlxyXG4gICAgICAgICAgICBjYXNlIFN0YXRlLkVTVEFCTElTSEVEOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub3RGcmVlWm9uZXMubGVuZ3RoID09PSB0aGlzLnpvbmVzLmxlbmd0aCB8fCB0aGlzLnN0YXRlICE9PSBTdGF0ZS5FU1RBQkxJU0hFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1RQICYmIFRQICE9PSB0aGlzLmlzVFApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUUChUUCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW51YWxSZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXRlLlNBVkVEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0ZS5QUkVQQVJJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9yZGVyIGEgcm91dGUuIElmIGFsbCB0cmFuc2l0cyBhcmUgZnJlZSwgZ28gdG8gU2F2ZSgpIHN0ZXAuXHJcbiAgICAgKiBAcGFyYW0gVFAgLSB0cnVlIGlmIFRQIG1vZGUgaXMgYXNrZWQuXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgb3JkZXIoVFApIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09PSBTdGF0ZS5SRUxFQVNFRCkge1xyXG4gICAgICAgICAgICBpZih0cnVlIHx8IHRoaXMuYXJlQWxsQ29tcGF0aWJsZVRyYW5zaXRGcmVlKCkpIHsgLy8gVE9ETyBuZXogw6AgbmV6IG91IGRvcyDDoCBkb3NcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUUCA9IFRQO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIGEgcm91dGUuIElmIGFsbCBvcHBvc2l0ZSB0cmFuc2l0cyBhcmUgZnJlZSwgZ28gdG8gUHJlcGFyZSgpIHN0ZXAuXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFN0YXRlLlNBVkVEKTtcclxuICAgICAgICB0aGlzLm5vdEZyZWVab25lcyA9IHRoaXMuem9uZXMuc2xpY2UoKTtcclxuICAgICAgICBpZih0aGlzLmFyZUFsbFRyYW5zaXRGcmVlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZSBhIHJvdXRlLiBDaGFuZ2UgYWxsIHN3aXRjaGVzIGlmIGluY29ycmVjdCBhbmQgdGhlbiBnbyB0byBJbnRlcmxvY2soKSBzdGVwLlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHByZXBhcmUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSAhPT0gU3RhdGUuUFJFUEFSSU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGUuUFJFUEFSSU5HKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrVHJhbnNpdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3dpdGNoZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5hcmVBbGxTd2l0Y2hlc0NvcnJlY3QoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVzdGFibGlzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVzdGFibGlzaCB0aGUgcm91dGUgYnkgc3dpdGNoIG9mZiB0aGUgc3RvcCBsaWdodHMuXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgZXN0YWJsaXNoKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGUuRVNUQUJMSVNIRUQpO1xyXG4gICAgICAgIHRoaXMuc291cmNlLnN3aXRjaFN0b3BsaWdodChcIm9mZlwiKTtcclxuICAgICAgICB0aGlzLm9uRXN0YWJsaXNoZWQoKTtcclxuICAgICAgICB0aGlzLnNob3dJblRDTygpO1xyXG4gICAgfVxyXG4gICAgb25Fc3RhYmxpc2hlZCgpe31cclxuXHJcbiAgICBpc0VzdGFibGlzaGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBTdGF0ZS5FU1RBQkxJU0hFRDtcclxuICAgIH1cclxuXHJcbiAgICBtYW51YWxSZWxlYXNlKCkge1xyXG4gICAgICAgIC8vIFRPRE8gOiBDYW50IHJlbGVhc2UgaWYgYSB0cmFpbiBpcyBpbiB0aGUgWmFQXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VHJhaW4gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFN0YXRlLlJFTEVBU0VEKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlSW5UQ08oKTtcclxuICAgICAgICAgICAgdGhpcy51bmxvY2tUcmFuc2l0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdXRvUmVsZWFzZUdhdGVzKGdhdGVzKSB7XHJcbiAgICAgICAgdGhpcy5ub3RGcmVlWm9uZXMgPSB0aGlzLm5vdEZyZWVab25lcy5maWx0ZXIoem9uZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBldmVyeUdhdGVzQXJlRnJlZUluVGhlWm9uZSA9IHRoaXMuZ2F0ZXNCeVpvbmVbem9uZS5pZF0uZXZlcnkoZ2F0ZSA9PiBnYXRlcy5pbmRleE9mKGdhdGUpID49IDApO1xyXG4gICAgICAgICAgICBpZihldmVyeUdhdGVzQXJlRnJlZUluVGhlWm9uZSAmJiAhdGhpcy5pc1RQKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9ja1RyYW5zaXQoem9uZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVab25lSW5UQ08oem9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICFldmVyeUdhdGVzQXJlRnJlZUluVGhlWm9uZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNUUCAmJiB0aGlzLm5vdEZyZWVab25lcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHpvbmUgPSB0aGlzLm5vdEZyZWVab25lcy5wb3AoKTtcclxuICAgICAgICAgICAgdGhpcy51bmxvY2tUcmFuc2l0KHpvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVab25lSW5UQ08oem9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhbGwgem9uZXMgYXJlIGZyZWUsIHJlbGVhc2UgdGhlIHJvdXRlXHJcbiAgICAgICAgaWYodGhpcy5ub3RGcmVlWm9uZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzVFApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGUuUkVMRUFTRUQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RGcmVlWm9uZXMgPSB0aGlzLnpvbmVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVzdGFibGlzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBMb2dpYyBoZWxwZXJzXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICBhcmVBbGxUcmFuc2l0RnJlZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VHJhaW4gPT0gbnVsbCAmJiB0aGlzLmFyZUFsbENvbXBhdGlibGVUcmFuc2l0RnJlZSgpICYmIHRoaXMuYXJlQWxsT3Bwb3NpdGVUcmFuc2l0RnJlZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRydWUgaWYgYWxsIGNvbXBhdGlibGUgdHJhbnNpdCAoZWcuIGluIHRoZSB3YXkgdGhlIHJvdXRlIGlzLCBmb3IgZXhhbXBsZSBhbGwgXCJsZWZ0XCIgdHJhbnNpdCkgYXJlIGZyZWUgdG8gdXNlLlxyXG4gICAgICovXHJcbiAgICBhcmVBbGxDb21wYXRpYmxlVHJhbnNpdEZyZWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuem9uZXMuZXZlcnkoem9uZSA9PiAhem9uZS5pc0xvY2tlZCh0aGlzLnRyYW5zaXQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0cnVlIGlmIGFsbCBvcHBvc2l0ZSB0cmFuc2l0IGFyZSBmcmVlXHJcbiAgICAgKi9cclxuICAgIGFyZUFsbE9wcG9zaXRlVHJhbnNpdEZyZWUoKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zaXROYW1lID0gdGhpcy50cmFuc2l0ID09PSBcImxlZnRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnpvbmVzLmV2ZXJ5KHpvbmUgPT4gIXpvbmUuaXNMb2NrZWQodHJhbnNpdE5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU3dpdGNoZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYXRlcy5mb3JFYWNoKChnYXRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdhdGUgaW5zdGFuY2VvZiBTd2l0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGdhdGUubW92ZVRvKHRoaXMuc3dpdGNoRGlyc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcmVBbGxTd2l0Y2hlc0NvcnJlY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2F0ZXMuZXZlcnkoKGdhdGUsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYoZ2F0ZSBpbnN0YW5jZW9mIFN3aXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhdGUubWF0Y2hTdGF0ZSh0aGlzLnN3aXRjaERpcnNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2NrVHJhbnNpdHMoKSB7XHJcbiAgICAgICAgdGhpcy56b25lcy5mb3JFYWNoKHpvbmUgPT4gem9uZS5sb2NrKHRoaXMsIHRoaXMudHJhbnNpdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVubG9ja1RyYW5zaXRzKCkge1xyXG4gICAgICAgIHRoaXMuem9uZXMuZm9yRWFjaCh6b25lID0+IHRoaXMudW5sb2NrVHJhbnNpdCh6b25lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2NrVHJhbnNpdCh6b25lKSB7XHJcbiAgICAgICAgem9uZS51bmxvY2sodGhpcywgdGhpcy50cmFuc2l0KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5UQ08oKSB7XHJcbiAgICAgICAgdGhpcy5nYXRlcy5mb3JFYWNoKGdhdGUgPT4gZ2F0ZS5sb2NrKHRoaXMsIHRoaXMuaXNUUCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVJblRDTygpIHtcclxuICAgICAgICB0aGlzLnpvbmVzLmZvckVhY2goem9uZSA9PiB0aGlzLmhpZGVab25lSW5UQ08oem9uZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVab25lSW5UQ08oem9uZSkge1xyXG4gICAgICAgIHRoaXMuZ2F0ZXNCeVpvbmVbem9uZS5pZF0uZm9yRWFjaChnYXRlID0+IGdhdGUudW5sb2NrKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gVmlld1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjcmVhdGVWaWV3KF92aWV3KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsYWJlbFxyXG4gICAgICAgIGlmKF92aWV3LmJ0biAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy50ZXh0QmcgPSB7fTtcclxuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoX3ZpZXcuYnRuLnBvcykuZm9yRWFjaCgocm91dGVUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuUG9zID0gRGlzcGxheU1hbmFnZXIuY29udmVydFZlY3RvclRvR3JpZChfdmlldy5idG4ucG9zW3JvdXRlVHlwZV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgbGV0IHBhZGRpbmcgPSBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5yb3V0ZUJ0bkJnW3JvdXRlVHlwZV0ucGFkZGluZztcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy50ZXh0Qmdbcm91dGVUeXBlXSA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuUG9zLnggKyBwYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0blBvcy55ICsgcGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5jb2x1bW5XaWR0aCAtIDIgKiBwYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLnJvd0hlaWdodCAtIDIgKiBwYWRkaW5nXHJcbiAgICAgICAgICAgICAgICApLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIucm91dGVCdG5CZ1tyb3V0ZVR5cGVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRleHRcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gRGlzcGxheU1hbmFnZXIucGFwZXIudGV4dChcclxuICAgICAgICAgICAgICAgICAgICBidG5Qb3MueCArIERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLmNvbHVtbldpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICBidG5Qb3MueSArIERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLnJvd0hlaWdodCAvIDIgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5yb3V0ZUJ0bi5vZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgICAgIF92aWV3LmJ0bi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgKS5hdHRyKERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLnJvdXRlQnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBEaXNwbGF5TWFuYWdlci5wYXBlci5ncm91cCh0aGlzLnZpZXcudGV4dEJnW3JvdXRlVHlwZV0sIHRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoeyBjdXJzb3I6IFwicG9pbnRlclwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsaWNrKCgpID0+IHRoaXMub25DbGljayhyb3V0ZVR5cGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlVmlldygpLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgaWYodGhpcy52aWV3LnRleHRCZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBidG5EQSA9IFwib2ZmXCI7XHJcbiAgICAgICAgICAgIGxldCBidG5UUCA9IFwib2ZmXCI7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuRVNUQUJMSVNIRUQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLlBSRVBBUklORzpcclxuICAgICAgICAgICAgICAgICAgICBidG5EQSA9IHRoaXMuaXNUUCA/IFwib2ZmXCIgOiBcIm9uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuVFAgPSB0aGlzLmlzVFAgPyBcIm9uXCIgOiBcIm9mZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5TQVZFRDpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZUJldHdlZW5CbGluayA9IENvbmZpZy5kdXJhdGlvbi5ibGlua0J1dHRvbkludGVydmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAlICh0aW1lQmV0d2VlbkJsaW5rICogMikpIDwgdGltZUJldHdlZW5CbGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5pc1RQICYmIChidG5EQSA9IGJ0bkRBID09PSBcIm9mZlwiID8gXCJvblwiIDogXCJvZmZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUUCAmJiAoYnRuVFAgPSBidG5UUCA9PT0gXCJvZmZcIiA/IFwib25cIiA6IFwib2ZmXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWV3LnRleHRCZy5EQS5hdHRyKHtcclxuICAgICAgICAgICAgICAgIGZpbGw6IERpc3BsYXlNYW5hZ2VyLmNmZy5jb2xvci5yb3V0ZUJ0bkJnLkRBW2J0bkRBXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5oYXNUUCAmJiB0aGlzLnZpZXcudGV4dEJnLlRQLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgZmlsbDogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLnJvdXRlQnRuQmcuVFBbYnRuVFBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlOyIsInZhciBEaXNwbGF5TWFuYWdlciA9IHJlcXVpcmUoXCIuLi9EaXNwbGF5TWFuYWdlclwiKTtcclxudmFyIEVsID0gcmVxdWlyZShcIi4vRWxcIik7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFNvdXJjZSBleHRlbmRzIEVsIHtcclxuICAgIHN0b3BsaWdodCA9IFwib25cIjtcclxuICAgIG1hbnVhbFN0b3AgPSBcIm9mZlwiO1xyXG4gICAgWkFwID0gXCJvZmZcIjtcclxuXHJcbiAgICB2aWV3ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfdmlldykge1xyXG4gICAgICAgIHN1cGVyKF9pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVmlldyhfdmlldyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFudWFsU3RvcChzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubWFudWFsU3RvcCA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFN0b3BsaWdodChzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RvcGxpZ2h0ID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVmlldyhfdmlldykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc3RvcGxpZ2h0XHJcbiAgICAgICAgdmFyIHJlY3RBdHRyID0gRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3RvcGxpZ2h0LnJlY3Q7XHJcbiAgICAgICAgdmFyIHN5bVggPSBfdmlldy5zdG9wbGlnaHQuZGlyID09PSBcImxlZnRcIiA/IF92aWV3LnN0b3BsaWdodC5wb3MueCA6IG51bGw7XHJcbiAgICAgICAgdmFyIHN5bVkgPSBfdmlldy5zdG9wbGlnaHQuZGlyID09PSBcImxlZnRcIiA/IF92aWV3LnN0b3BsaWdodC5wb3MueSA6IG51bGw7XHJcbiAgICAgICAgdmFyIG9mZnNldFkgPSAtRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIubGluZS5zdHJva2VXaWR0aCAvIDI7XHJcbiAgICAgICAgdmFyIHJlY3RQYXJhbXMgPSBEaXNwbGF5TWFuYWdlci5nZXRTeW1tZXRyaWNhbFJlY3Qoe1xyXG4gICAgICAgICAgICB4OiBfdmlldy5zdG9wbGlnaHQucG9zLnggLSByZWN0QXR0ci53LFxyXG4gICAgICAgICAgICB5OiBfdmlldy5zdG9wbGlnaHQucG9zLnkgLSByZWN0QXR0ci5oIC8gMiAtIHJlY3RBdHRyLmxpbmUuaCArIG9mZnNldFksXHJcbiAgICAgICAgICAgIHc6IHJlY3RBdHRyLncsXHJcbiAgICAgICAgICAgIGg6IHJlY3RBdHRyLmhcclxuICAgICAgICB9LCBzeW1YLCBzeW1ZKTtcclxuICAgICAgICB0aGlzLnZpZXcuc3RvcGxpZ2h0ID0gRGlzcGxheU1hbmFnZXIucGFwZXIucmVjdChyZWN0UGFyYW1zLngsIHJlY3RQYXJhbXMueSwgcmVjdFBhcmFtcy53LCByZWN0UGFyYW1zLmgpLmF0dHIocmVjdEF0dHIpO1xyXG4gICAgICAgIGxldCBsaW5lID0gRGlzcGxheU1hbmFnZXIuZ2V0U3ltbWV0cmljYWxQb2ludHMoW3tcclxuICAgICAgICAgICAgeDogX3ZpZXcuc3RvcGxpZ2h0LnBvcy54IC0gcmVjdEF0dHIudyxcclxuICAgICAgICAgICAgeTogX3ZpZXcuc3RvcGxpZ2h0LnBvcy55IC0gcmVjdEF0dHIubGluZS5oICsgb2Zmc2V0WVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICB4OiBfdmlldy5zdG9wbGlnaHQucG9zLnggLSByZWN0QXR0ci53IC0gcmVjdEF0dHIubGluZS53LFxyXG4gICAgICAgICAgICB5OiBfdmlldy5zdG9wbGlnaHQucG9zLnkgLSByZWN0QXR0ci5saW5lLmggKyBvZmZzZXRZXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHg6IF92aWV3LnN0b3BsaWdodC5wb3MueCAtIHJlY3RBdHRyLncgLSByZWN0QXR0ci5saW5lLncsXHJcbiAgICAgICAgICAgIHk6IF92aWV3LnN0b3BsaWdodC5wb3MueSArIG9mZnNldFlcclxuICAgICAgICB9XSwgc3ltWCwgc3ltWSk7XHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIucG9seWxpbmUobGluZS5tYXAoKHApID0+IFtwLngsIHAueV0pKS5hdHRyKHJlY3RBdHRyKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzdG9wbGlnaHQgbGFiZWxcclxuICAgICAgICB0aGlzLnZpZXcuc3RvcGxpZ2h0TGFiZWwgPSBEaXNwbGF5TWFuYWdlci5wYXBlci50ZXh0KFxyXG4gICAgICAgICAgICByZWN0UGFyYW1zLnggKyByZWN0UGFyYW1zLncgLyAyLFxyXG4gICAgICAgICAgICByZWN0UGFyYW1zLnkgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zdG9wbGlnaHRMYWJlbFtcIm9mZnNldFlfXCIgKyBfdmlldy5zdG9wbGlnaHQuZGlyIF0sXHJcbiAgICAgICAgICAgIF92aWV3LnN0b3BsaWdodC52YWx1ZVxyXG4gICAgICAgICkuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zdG9wbGlnaHRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgWkFwXHJcbiAgICAgICAgaWYoX3ZpZXcuWkFwID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcmVjdCBhcm91bmQgdGhlIFphcCBsaWdodFxyXG4gICAgICAgICAgICBsZXQgemFwQXR0ciA9IERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLlpBcDtcclxuICAgICAgICAgICAgbGV0IHphcFBhcmFtcyA9IERpc3BsYXlNYW5hZ2VyLmdldFN5bW1ldHJpY2FsUmVjdCh7XHJcbiAgICAgICAgICAgICAgICB4OiBfdmlldy5zdG9wbGlnaHQucG9zLnggKyB6YXBBdHRyLm9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICB5OiBfdmlldy5zdG9wbGlnaHQucG9zLnkgKyB6YXBBdHRyLm9mZnNldFkgLSB6YXBBdHRyLmgsXHJcbiAgICAgICAgICAgICAgICB3OiB6YXBBdHRyLncsXHJcbiAgICAgICAgICAgICAgICBoOiB6YXBBdHRyLmhcclxuICAgICAgICAgICAgfSwgc3ltWCwgc3ltWSk7XHJcbiAgICAgICAgICAgIERpc3BsYXlNYW5hZ2VyLnBhcGVyLnJlY3QoemFwUGFyYW1zLngsIHphcFBhcmFtcy55LCB6YXBQYXJhbXMudywgemFwUGFyYW1zLmgpLmF0dHIoemFwQXR0cik7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNpcmNsZVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcuWkFwID0gRGlzcGxheU1hbmFnZXIucGFwZXIuY2lyY2xlKFxyXG4gICAgICAgICAgICAgICAgemFwUGFyYW1zLnggKyB6YXBQYXJhbXMudyAvIDIsXHJcbiAgICAgICAgICAgICAgICB6YXBQYXJhbXMueSArIHphcFBhcmFtcy5oIC8gMixcclxuICAgICAgICAgICAgICAgIHphcFBhcmFtcy53ICogemFwQXR0ci5jaXJjbGVSYXRpb1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBsZWdlbmRcclxuICAgICAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIudGV4dChcclxuICAgICAgICAgICAgICAgIHphcFBhcmFtcy54ICsgemFwUGFyYW1zLncgLyAyLFxyXG4gICAgICAgICAgICAgICAgemFwUGFyYW1zLnkgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5aQXBMYWJlbFtcIm9mZnNldFlfXCIgKyBfdmlldy5zdG9wbGlnaHQuZGlyIF0sXHJcbiAgICAgICAgICAgICAgICBcIlpBcFwiXHJcbiAgICAgICAgICAgICkuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5aQXBMYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGxhYmVsXHJcbiAgICAgICAgaWYoX3ZpZXcubGFiZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWxQb3MgPSBEaXNwbGF5TWFuYWdlci5jb252ZXJ0VmVjdG9yVG9HcmlkKF92aWV3LmxhYmVsLnBvcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGJhY2tncm91bmRcclxuICAgICAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIucmVjdChcclxuICAgICAgICAgICAgICAgIGxhYmVsUG9zLngsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvcy55LFxyXG4gICAgICAgICAgICAgICAgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuY29sdW1uV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5yb3dIZWlnaHRcclxuICAgICAgICAgICAgKS5hdHRyKERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLnNvdXJjZUxhYmVsQmcpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5sYWJlbCA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnRleHQoXHJcbiAgICAgICAgICAgICAgICBsYWJlbFBvcy54ICsgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuY29sdW1uV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3MueSArIERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLnJvd0hlaWdodCAvIDIgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zb3VyY2VMYWJlbC5vZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgX3ZpZXcubGFiZWwudmFsdWVcclxuICAgICAgICAgICAgKSAuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zb3VyY2VMYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnN0b3BsaWdodC5hdHRyKHtcclxuICAgICAgICAgICAgZmlsbDogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLnN0b3BsaWdodFt0aGlzLnN0b3BsaWdodF1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnZpZXcuc3RvcGxpZ2h0TGFiZWwuYXR0cih7XHJcbiAgICAgICAgICAgIGZpbGw6IERpc3BsYXlNYW5hZ2VyLmNmZy5jb2xvci5zdG9wbGlnaHRMYWJlbFt0aGlzLm1hbnVhbFN0b3BdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3LlpBcCAmJiB0aGlzLnZpZXcuWkFwLmF0dHIoe1xyXG4gICAgICAgICAgICBmaWxsOiBEaXNwbGF5TWFuYWdlci5jZmcuY29sb3IuWkFwW3RoaXMuWkFwXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU291cmNlO1xyXG4iLCJ2YXIgRGlzcGxheU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vRGlzcGxheU1hbmFnZXJcIik7XHJcbnZhciBFbCA9IHJlcXVpcmUoXCIuL0VsXCIpO1xyXG52YXIgU291cmNlID0gcmVxdWlyZShcIi4vU291cmNlXCIpO1xyXG52YXIgR2F0ZSA9IHJlcXVpcmUoXCIuL0dhdGVcIik7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFN0b3BCdG4gZXh0ZW5kcyBFbCB7XHJcbiAgICBzb3VyY2VzID0gbnVsbDtcclxuICAgIHN0YXRlID0gXCJvZmZcIjtcclxuXHJcbiAgICB2aWV3ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfc291cmNlcywgX3ZpZXcpIHtcclxuICAgICAgICBzdXBlcihfaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBfc291cmNlcztcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVWaWV3KF92aWV3KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFwib25cIiA/IFwib2ZmXCIgOiBcIm9uXCI7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4gc291cmNlLnNldE1hbnVhbFN0b3AodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVZpZXcoX3ZpZXcpIHtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNpcmNsZVxyXG4gICAgICAgIGxldCBidG5Qb3MgPSBEaXNwbGF5TWFuYWdlci5jb252ZXJ0VmVjdG9yVG9HcmlkKF92aWV3LnBvcyk7XHJcbiAgICAgICAgdGhpcy52aWV3LmNpcmNsZUJnID0gRGlzcGxheU1hbmFnZXIucGFwZXIuY2lyY2xlKFxyXG4gICAgICAgICAgICBidG5Qb3MueCArIERpc3BsYXlNYW5hZ2VyLmdyaWRBdHRyLmNvbHVtbldpZHRoIC8gMixcclxuICAgICAgICAgICAgYnRuUG9zLnkgKyBEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5yb3dIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBNYXRoLm1pbihEaXNwbGF5TWFuYWdlci5ncmlkQXR0ci5jb2x1bW5XaWR0aCwgRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIucm93SGVpZ2h0KSAvIDIgLSBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zdG9wQnRuQ2lyY2xlLnBhZGRpbmdcclxuICAgICAgICApLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3RvcEJ0bkNpcmNsZSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYXJyb3dcclxuICAgICAgICBsZXQgcG9pbnRzID0gRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3RvcEJ0bkFycm93Ll9wb2ludHMubWFwKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGkgJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuUG9zLnggKyBwICogRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIuY29sdW1uV2lkdGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuUG9zLnkgKyBwICogRGlzcGxheU1hbmFnZXIuZ3JpZEF0dHIucm93SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3LmFycm93ID0gRGlzcGxheU1hbmFnZXIucGFwZXIucG9seWdvbihwb2ludHMpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3RvcEJ0bkFycm93KTtcclxuXHJcbiAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIuZ3JvdXAodGhpcy52aWV3LmNpcmNsZUJnLCB0aGlzLnZpZXcuYXJyb3cpXHJcbiAgICAgICAgICAgIC5hdHRyKHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9KVxyXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4gdGhpcy5vbkNsaWNrKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoYW5pbWF0ZWQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmNpcmNsZUJnLmF0dHIoe1xyXG4gICAgICAgICAgICBmaWxsOiBEaXNwbGF5TWFuYWdlci5jZmcuY29sb3Iuc3RvcEJ0bkNpcmNsZVt0aGlzLnN0YXRlXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFNuYXAuYW5pbWF0ZSgwLCAxODAsIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmFycm93LnRyYW5zZm9ybShcInJcIiArICh0aGlzLnN0YXRlID09PSBcIm9uXCIgPyB2YWx1ZSAtIDE4MCAgOiAtdmFsdWUpKTtcclxuICAgICAgICB9LCBhbmltYXRlZCA/IDEwMCA6IDApO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcEJ0bjtcclxuIiwidmFyIFNuYXAgPSByZXF1aXJlKFwic25hcHN2Z1wiKTtcclxuXHJcbnZhciBHYXRlID0gcmVxdWlyZShcIi4vR2F0ZVwiKTtcclxudmFyIERpc3BsYXlNYW5hZ2VyID0gcmVxdWlyZShcIi4uL0Rpc3BsYXlNYW5hZ2VyXCIpO1xyXG52YXIgQ29uZmlnID0gcmVxdWlyZShcIi4uL0NvbmZpZ1wiKTtcclxudmFyIFN0b3BCdG4gPSByZXF1aXJlKFwiLi9TdG9wQnRuXCIpO1xyXG5cclxuY29uc3QgU3RhdGUgPSB7IExFRlQ6IFwiTEVGVFwiLCBSSUdIVDogXCJSSUdIVFwiLCBVTktOT1dOOiBcIlVOS05PV05cIiB9O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBHYXRlIHtcclxuICAgIHBvcnRzID0ge307XHJcblxyXG4gICAgc3RhdGUgPSBTdGF0ZS5MRUZUO1xyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIGNvbWJpbmVkU3dpdGNoID0gbnVsbDtcclxuXHJcbiAgICBsZWZ0TGVuZ3RoO1xyXG4gICAgcmlnaHRMZW5ndGg7XHJcblxyXG4gICAgdmlldyA9IHtcclxuICAgICAgICBsZWZ0TGVmOiBudWxsLFxyXG4gICAgICAgIHJpZ2h0TGVmOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9pZCwgX3ZpZXcpIHtcclxuICAgICAgICBzdXBlcihfaWQpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVmlldyhfdmlldyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbWJpbmVkU3dpdGNoZXMoc3dpdGNoMSwgc3dpdGNoMikge1xyXG4gICAgICAgIHN3aXRjaDEuY29tYmluZWRTd2l0Y2ggPSBzd2l0Y2gyO1xyXG4gICAgICAgIHN3aXRjaDIuY29tYmluZWRTd2l0Y2ggPSBzd2l0Y2gxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBMb2dpY1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBtb3ZlVG8oZGlyKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlVG9HbyA9IFN3aXRjaC5jb252ZXJ0U3RyaW5nVG9TdGF0ZShkaXIpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzTW92aW5nIHx8IHRoaXMuc3RhdGUgPT09IHN0YXRlVG9HbyB8fCB0aGlzLmNvbWJpbmVkU3dpdGNoICYmIHRoaXMuY29tYmluZWRTd2l0Y2guaXNMb2NrZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuVU5LTk9XTjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlVG9HbztcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCBDb25maWcuZHVyYXRpb24uc3dpdGNoQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21iaW5lZFN3aXRjaCAmJiB0aGlzLmNvbWJpbmVkU3dpdGNoLm1vdmVUbyhkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoU3RhdGUoZGlyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IFN3aXRjaC5jb252ZXJ0U3RyaW5nVG9TdGF0ZShkaXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFN0YXRlLkxFRlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0TGVuZ3RoO1xyXG4gICAgICAgICAgICBjYXNlIFN0YXRlLlJJR0hUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlnaHRMZW5ndGg7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdGUuVU5LTk9XTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29udmVydFN0cmluZ1RvU3RhdGUocykge1xyXG4gICAgICAgIHN3aXRjaChzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGUuTEVGVDtcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGUuUklHSFQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RhdGUuVU5LTk9XTjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIFZpZXdcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY3JlYXRlVmlldyhfdmlldykge1xyXG4gICAgICAgIC8vIENvbnZlcnQgcG9pbnRzXHJcbiAgICAgICAgbGV0IGNlbnRlclBvaW50ID0gW192aWV3LmNlbnRlci54LCBfdmlldy5jZW50ZXIueV07XHJcbiAgICAgICAgbGV0IGxvbmVQb2ludHMgPSBfdmlldy5sb25lLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZS5jb25jYXQoW2N1ci54LCBjdXIueV0pLCBbXSk7XHJcbiAgICAgICAgbGV0IGxlZnRQb2ludHMgPSBfdmlldy5sZWZ0LnJlZHVjZSgocHJlLCBjdXIpID0+IHByZS5jb25jYXQoW2N1ci54LCBjdXIueV0pLCBbXSk7XHJcbiAgICAgICAgbGV0IHJpZ2h0UG9pbnRzID0gX3ZpZXcucmlnaHQucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlLmNvbmNhdChbY3VyLngsIGN1ci55XSksIFtdKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0d28gbGluZXMgbG9uZTwtPmxlZnQgYW5kIGxvbmU8LT5yaWdodFxyXG4gICAgICAgIGxldCBsb25lTGVmdFBvaW50cyA9IGxvbmVQb2ludHMuY29uY2F0KGNlbnRlclBvaW50KS5jb25jYXQobGVmdFBvaW50cyk7XHJcbiAgICAgICAgbGV0IGxvbmVSaWdodFBvaW50cyA9IGxvbmVQb2ludHMuY29uY2F0KGNlbnRlclBvaW50KS5jb25jYXQocmlnaHRQb2ludHMpO1xyXG4gICAgICAgIHRoaXMudmlldy5sZWZ0TGluZSA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnBvbHlsaW5lKGxvbmVMZWZ0UG9pbnRzKS5hdHRyKERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLmxpbmUpO1xyXG4gICAgICAgIHRoaXMudmlldy5yaWdodExpbmUgPSBEaXNwbGF5TWFuYWdlci5wYXBlci5wb2x5bGluZShsb25lUmlnaHRQb2ludHMpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIubGluZSk7XHJcblxyXG4gICAgICAgIC8vIENvbXB1dGUgbGVuZ3RoXHJcbiAgICAgICAgbGV0IGxlZnRQYXRoID0gRGlzcGxheU1hbmFnZXIucGFwZXIucGF0aChcIk1cIiArIFtsb25lUG9pbnRzLCBjZW50ZXJQb2ludCwgbGVmdFBvaW50c10ubWFwKHAgPT4gcC5qb2luKFwiIFwiKSkuam9pbihcIkxcIikpO1xyXG4gICAgICAgIHRoaXMubGVmdExlbmd0aCA9IGxlZnRQYXRoLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgICAgICAgbGVmdFBhdGgucmVtb3ZlKCk7XHJcbiAgICAgICAgbGV0IHJpZ2h0UGF0aCA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnBhdGgoXCJNXCIgKyBbbG9uZVBvaW50cywgY2VudGVyUG9pbnQsIHJpZ2h0UG9pbnRzXS5tYXAocCA9PiBwLmpvaW4oXCIgXCIpKS5qb2luKFwiTFwiKSk7XHJcbiAgICAgICAgdGhpcy5yaWdodExlbmd0aCA9IHJpZ2h0UGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIHJpZ2h0UGF0aC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsZWRzXHJcbiAgICAgICAgW1wibGVmdFwiLCBcInJpZ2h0XCJdLmZvckVhY2goKGRpcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IFwiTVwiICsgW192aWV3LmNlbnRlcl0uY29uY2F0KF92aWV3W2Rpcl0pLm1hcCgocCkgPT4gcC54ICsgXCIsXCIgKyBwLnkpLmpvaW4oXCJMXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGVkUG9zID0gU25hcC5wYXRoLmdldFBvaW50QXRMZW5ndGgocGF0aCwgRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3dpdGNoTGVkLmRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIGxldCByID0gRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIubGluZS5zdHJva2VXaWR0aCAqIERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLnN3aXRjaExlZC5zaXplUmF0aW87XHJcbiAgICAgICAgICAgIHRoaXMudmlld1tkaXIgKyBcIkxlZFwiXSA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLmNpcmNsZShsZWRQb3MueCwgbGVkUG9zLnksIHIpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgZmlsbDogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLmJhY2tncm91bmRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWxcclxuICAgICAgICBpZihfdmlldy5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbFggPSBfdmlldy5sYWJlbC5wb3MueDtcclxuICAgICAgICAgICAgbGV0IGxhYmVsWSA9IF92aWV3LmxhYmVsLnBvcy55XHJcbiAgICAgICAgICAgICAgICArIERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLnN3aXRjaExhYmVsLmZvbnRTaXplICogMC4zN1xyXG4gICAgICAgICAgICAgICAgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5zd2l0Y2hMYWJlbC5vZmZzZXRZICogKF92aWV3LmxhYmVsLmFib3ZlID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgRGlzcGxheU1hbmFnZXIucGFwZXIudGV4dChsYWJlbFgsIGxhYmVsWSwgX3ZpZXcubGFiZWwudmFsdWUpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuc3dpdGNoTGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3dpdGNoIHN0YXRlXHJcbiAgICAgICAgdGhpcy52aWV3LmxlZnRMZWQuYXR0cih7XHJcbiAgICAgICAgICAgIGZpbGw6IERpc3BsYXlNYW5hZ2VyLmNmZy5jb2xvci5zd2l0Y2hMZWRbdGhpcy5zdGF0ZSA9PT0gU3RhdGUuTEVGVCA/IFwib25cIiA6IFwib2ZmXCJdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3LnJpZ2h0TGVkLmF0dHIoe1xyXG4gICAgICAgICAgICBmaWxsOiBEaXNwbGF5TWFuYWdlci5jZmcuY29sb3Iuc3dpdGNoTGVkW3RoaXMuc3RhdGUgPT09IFN0YXRlLlJJR0hUID8gXCJvblwiIDogXCJvZmZcIl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRUcmFpblJvdXRlID0gdGhpcy5zdGF0ZSA9PT0gU3RhdGUuTEVGVCA/ICh0aGlzLmlzVHJhaW5PbiA/IFwidHJhaW5PblwiIDogdGhpcy5yb3V0ZVR5cGUpIDogXCJmcmVlXCI7XHJcbiAgICAgICAgbGV0IHJpZ2h0VHJhaW5Sb3V0ZSA9IHRoaXMuc3RhdGUgPT09IFN0YXRlLlJJR0hUID8gKHRoaXMuaXNUcmFpbk9uID8gXCJ0cmFpbk9uXCIgOiB0aGlzLnJvdXRlVHlwZSkgOiBcImZyZWVcIjtcclxuICAgICAgICB0aGlzLnZpZXcubGVmdExpbmUuYXR0cih7XHJcbiAgICAgICAgICAgIHN0cm9rZTogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLnJvdXRlW2xlZnRUcmFpblJvdXRlXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlldy5yaWdodExpbmUuYXR0cih7XHJcbiAgICAgICAgICAgIHN0cm9rZTogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLnJvdXRlW3JpZ2h0VHJhaW5Sb3V0ZV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PT0gU3RhdGUuUklHSFQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnJpZ2h0TGluZS5pbnNlcnRBZnRlcih0aGlzLnZpZXcubGVmdExpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5sZWZ0TGluZS5pbnNlcnRBZnRlcih0aGlzLnZpZXcucmlnaHRMaW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBTd2l0Y2g7IiwidmFyIEdhdGUgPSByZXF1aXJlKFwiLi9HYXRlXCIpO1xyXG52YXIgRGlzcGxheU1hbmFnZXIgPSByZXF1aXJlKFwiLi4vRGlzcGxheU1hbmFnZXJcIik7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIFRyYWNrIGV4dGVuZHMgR2F0ZSB7XHJcbiAgICBwb3J0cyA9IHt9O1xyXG5cclxuICAgIGxlbmd0aDtcclxuXHJcbiAgICB2aWV3ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfdmlldykge1xyXG4gICAgICAgIHN1cGVyKF9pZCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVWaWV3KF92aWV3KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gTG9naWNcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gVmlld1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjcmVhdGVWaWV3KF92aWV3KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaW5lXHJcbiAgICAgICAgbGV0IHBvaW50cyA9IF92aWV3LmxpbmUucmVkdWNlKChwcmUsIGN1cikgPT4gcHJlLmNvbmNhdChbY3VyLngsIGN1ci55XSksIFtdKTtcclxuICAgICAgICB0aGlzLnZpZXcubGluZSA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnBvbHlsaW5lKHBvaW50cykuYXR0cihEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci5saW5lKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcHV0ZSBsZW5ndGhcclxuICAgICAgICBsZXQgcGF0aCA9IERpc3BsYXlNYW5hZ2VyLnBhcGVyLnBhdGgoXCJNXCIgKyBfdmlldy5saW5lLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZS5jb25jYXQoW2N1ci54LCBjdXIueV0uam9pbihcIiBcIikpLCBbXSkuam9pbihcIkxcIikpO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIHBhdGgucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWxcclxuICAgICAgICBpZihfdmlldy5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbFggPSBfdmlldy5sYWJlbC5wb3MueDtcclxuICAgICAgICAgICAgbGV0IGxhYmVsWSA9IF92aWV3LmxhYmVsLnBvcy55ICsgRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIudHJhY2tMYWJlbFtcImZvbnQtc2l6ZVwiXSAqIDAuMzM1O1xyXG4gICAgICAgICAgICBsZXQgdHh0ID0gRGlzcGxheU1hbmFnZXIucGFwZXIudGV4dChsYWJlbFgsIGxhYmVsWSwgX3ZpZXcubGFiZWwudmFsdWUpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIudHJhY2tMYWJlbCk7XHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gdHh0LmdldEJCb3goKTtcclxuICAgICAgICAgICAgbGV0IGJnWCA9IGJib3gueCArIGJib3gudyAvIDI7XHJcbiAgICAgICAgICAgIGxldCBiZ1kgPSBiYm94LnkgKyBiYm94LmggLyAyO1xyXG4gICAgICAgICAgICBsZXQgYmdSID0gTWF0aC5tYXgoYmJveC53LCBiYm94LmgpICogRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIudHJhY2tCZ0xhYmVsLnNpemVDb2VmZjtcclxuICAgICAgICAgICAgbGV0IHR4dEJnID0gRGlzcGxheU1hbmFnZXIucGFwZXIuY2lyY2xlKGJnWCwgYmdZLCBiZ1IpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIudHJhY2tCZ0xhYmVsKTtcclxuICAgICAgICAgICAgdHh0QmcuaW5zZXJ0QmVmb3JlKHR4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmxpbmUuYXR0cih7XHJcbiAgICAgICAgICAgIHN0cm9rZTogRGlzcGxheU1hbmFnZXIuY2ZnLmNvbG9yLnJvdXRlW3RoaXMuaXNUcmFpbk9uID8gXCJ0cmFpbk9uXCIgOiB0aGlzLnJvdXRlVHlwZV1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNrO1xyXG4iLCJ2YXIgRWwgPSByZXF1aXJlKFwiLi9FbFwiKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgVHJhaW4gZXh0ZW5kcyBFbCB7XHJcbiAgICBnYXRlcyA9IFtdO1xyXG4gICAgcG9zID0gMDtcclxuICAgIHJlc2VydmVkID0gZmFsc2U7XHJcblxyXG4gICAgdXBkYXRlSW50ZXJ2YWxJRCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfdmVsb2NpdHksIF9sZW5ndGgsIF9hbm5vdW5jZW1lbnRUaW1lLCBfYXJyaXZhbFRpbWUsIF9tYXhTdG9wVGltZSwgX2Jhc2VTb3VyY2UsIF9iYXNlQW5ub3VuY2VtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoX2lkKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gX3ZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gX2xlbmd0aDtcclxuICAgICAgICB0aGlzLmFubm91bmNlbWVudFRpbWUgPSBfYW5ub3VuY2VtZW50VGltZTtcclxuICAgICAgICB0aGlzLmFycml2YWxUaW1lID0gX2Fycml2YWxUaW1lO1xyXG4gICAgICAgIHRoaXMubWF4U3RvcFRpbWUgPSBfbWF4U3RvcFRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzZVNvdXJjZSA9IF9iYXNlU291cmNlO1xyXG4gICAgICAgIHRoaXMuYmFzZUFubm91bmNlbWVudCA9IF9iYXNlQW5ub3VuY2VtZW50O1xyXG4gICAgICAgIHRoaXMuYmFzZVRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25Bbm5vdW5jZWQoKSwgdGhpcy5hbm5vdW5jZW1lbnRUaW1lKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25BcnJpdmVkKCksIHRoaXMuYXJyaXZhbFRpbWUpO1xyXG4gICAgICAgIHZhciB0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgobm93IC0gdCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgdCA9IG5vdztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQW5ub3VuY2VkKCl7fVxyXG4gICAgb25BcnJpdmVkKCl7fVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBMb2dpY1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBhZGRSb3V0ZShyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucmVzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhdGVzID0gdGhpcy5nYXRlcy5jb25jYXQocm91dGUuZ2F0ZXMpO1xyXG4gICAgICAgIHRoaXMuYmFzZVNvdXJjZSA9IHJvdXRlLm5leHRTb3VyY2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNlcnZlUm91dGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNlcnZlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuZ2F0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaXN0ID0gdGhpcy52ZWxvY2l0eSAqIGR0O1xyXG4gICAgICAgIGxldCBnYXRlSW5mbyA9IHRoaXMuZ2V0R2F0ZUluZm9CeVBvcyh0aGlzLnBvcyArIGRpc3QpO1xyXG5cclxuICAgICAgICBpZihnYXRlSW5mby5pbmRleCA8IHRoaXMuZ2F0ZXMubGVuZ3RoIHx8IHRoaXMuYmFzZVNvdXJjZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gdGhpcy5wb3MgKyBkaXN0O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdhdGVzU3RhdGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IGdhdGVJbmZvLmVuZDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVHYXRlc1N0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlc2VydmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXJyaXZlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBMb2dpYyBoZWxwZXJzXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHVwZGF0ZUdhdGVzU3RhdGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5wb3MgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1pbkluZGV4ID0gdGhpcy5nZXRHYXRlSW5mb0J5UG9zKHRoaXMucG9zIC0gdGhpcy5sZW5ndGgpLmluZGV4O1xyXG4gICAgICAgIGxldCBtYXhJbmRleCA9IHRoaXMuZ2V0R2F0ZUluZm9CeVBvcyh0aGlzLnBvcykuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5nYXRlcy5mb3JFYWNoKChnYXRlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGdhdGUuc2V0VHJhaW4obWluSW5kZXggPD0gaSAmJiBpIDw9IG1heEluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uUmVsZWFzZUdhdGVzKHRoaXMuZ2F0ZXMuc2xpY2UoMCwgbWluSW5kZXgpKTtcclxuXHJcbiAgICAgICAgaWYobWluSW5kZXggPT09IHRoaXMuZ2F0ZXMubGVuZ3RoICYmIHRoaXMuYmFzZVNvdXJjZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbElEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWxlYXNlR2F0ZXMoKXt9XHJcblxyXG4gICAgZ2V0R2F0ZUluZm9CeVBvcyhwb3MpIHtcclxuICAgICAgICBsZXQgaVBvcyA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaVBvcyArPSB0aGlzLmdhdGVzW2ldLmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBpZihpUG9zID4gcG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogaVBvc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2F0ZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBlbmQ6IGlQb3NcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVHJhaW47XHJcbiIsInZhciBEaXNwbGF5TWFuYWdlciA9IHJlcXVpcmUoXCIuLi9EaXNwbGF5TWFuYWdlclwiKTtcclxudmFyIEVsID0gcmVxdWlyZShcIi4vRWxcIik7XHJcblxyXG5jbGFzcyBab25lIGV4dGVuZHMgRWwge1xyXG5cclxuICAgIHRyYW5zaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbnVsbCxcclxuICAgICAgICByaWdodDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICB2aWV3ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoX2lkLCBfZ2F0ZXMsIF92aWV3KSB7XHJcbiAgICAgICAgc3VwZXIoX2lkKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYXRlcyA9IF9nYXRlcztcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVWaWV3KF92aWV3KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy8gTG9naWNcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgbG9jayhsb2NrZXIsIF90cmFuc2l0KSB7XHJcbiAgICAgICAgaWYodGhpcy50cmFuc2l0W190cmFuc2l0XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdFtfdHJhbnNpdF0gPSBsb2NrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVubG9jayhsb2NrZXIsIF90cmFuc2l0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0xvY2tlZChfdHJhbnNpdCkgJiYgdGhpcy50cmFuc2l0W190cmFuc2l0XSA9PT0gbG9ja2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdFtfdHJhbnNpdF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0xvY2tlZChfdHJhbnNpdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRbX3RyYW5zaXRdICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vIFZpZXdcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY3JlYXRlVmlldyhfdmlldykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGFiZWxcclxuICAgICAgICBpZihfdmlldy5sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbFggPSBfdmlldy5sYWJlbC5wb3MueDtcclxuICAgICAgICAgICAgbGV0IGxhYmVsWSA9IF92aWV3LmxhYmVsLnBvcy55XHJcbiAgICAgICAgICAgICAgICArIERpc3BsYXlNYW5hZ2VyLmNmZy5hdHRyLnpvbmVMYWJlbFtcImZvbnQtc2l6ZVwiXSAqIDAuNFxyXG4gICAgICAgICAgICAgICAgKyBEaXNwbGF5TWFuYWdlci5jZmcuYXR0ci56b25lTGFiZWwub2Zmc2V0WSAqIChfdmlldy5sYWJlbC5hYm92ZSA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy50ZXh0ID0gRGlzcGxheU1hbmFnZXIucGFwZXIudGV4dChsYWJlbFgsIGxhYmVsWSwgX3ZpZXcubGFiZWwudmFsdWUpLmF0dHIoRGlzcGxheU1hbmFnZXIuY2ZnLmF0dHIuem9uZUxhYmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldygpIHtcclxuXHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBab25lO1xyXG4iXX0=
