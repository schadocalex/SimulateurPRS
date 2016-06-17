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
    Object.getOwnPropertyNames(gare.gates).forEach((gateName) => {
        let gate = gare.gates[gateName];
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
    gare.wires.forEach((wire) => Gate.addLink(gates[wire[0]], wire[1], gates[wire[2]], wire[3]));

    // Add combined switches
    gare.combinedSwitches.forEach((s) => Switch.combinedSwitches(gates[s[0]], gates[s[1]]));

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
        let nextSource = route.nextSource && sources[route.nextSource];
        let routeZones = route.zones.map((name) => zones[name]);
        let routeGates = route.gates.map((name) => gates[name]);
        routes[routeName] = new Route(routeName, source, nextSource, routeZones, routeGates,
            route.switchDirs, route.transit, route.TP, route.view);
    });

    // Create led labels
    var ledLabels = {};
    Object.getOwnPropertyNames(gare.ledLabels).forEach((ledName) => {
        let led = gare.ledLabels[ledName];
        ledLabels[ledName] = new LedLabel(ledName, led.view);
    });

    // Add trains
    var trains = {};
    Object.getOwnPropertyNames(gare.trains).forEach((trainName) => {
        let train = gare.trains[trainName];
        let source = sources[train.baseSource];
        let ledLabel = ledLabels[train.baseAnnouncement];
        trains[trainName] = new Train(trainName, train.velocity, train.length,
            train.announcementTime, train.arrivalTime, train.maxStopTime,
            source, ledLabel);
    });

    var trainsArray = Object.getOwnPropertyNames(trains).map((trainName) => trains[trainName]);
    var routesArray = Object.getOwnPropertyNames(routes).map((routeName) => routes[routeName]);
    var sourcesArray = Object.getOwnPropertyNames(sources).map((sourceName) => sources[sourceName]);
    var trainManager = new TrainManager(trainsArray, routesArray, sourcesArray);
}