import LedLabel from "./LedLabel";
import Gate from "./Gate";
import Source from "./Source";
import Route from "./Route";

/**
 *
 */
class Train {
    id: string;
    velocity: number;
    length: number;
    announcementTime: number;
    arrivalTime: number;
    maxStopTime: number;
    baseSource: Source;
    baseAnnouncement: LedLabel;
    baseTime: number;

    gates: Gate[] = [];
    pos: number = 0;

    updateIntervalID = null;

    constructor(_id: string, _velocity: number, _length: number,
                _announcementTime: number, _arrivalTime: number, _maxStopTime: number,
                _baseSource: Source, _baseAnnouncement: LedLabel) {
        this.id = _id;
        this.velocity = _velocity;
        this.length = _length;
        this.announcementTime = _announcementTime;
        this.arrivalTime = _arrivalTime;
        this.maxStopTime = _maxStopTime;

        this.baseSource = _baseSource;
        this.baseAnnouncement = _baseAnnouncement;
        this.baseTime = Date.now();

        setTimeout(() => this.onAnnounced(), this.announcementTime);
        setTimeout(() => this.onArrived(), this.arrivalTime);
        var t = Date.now();
        this.updateIntervalID = setInterval(() => {
            let now = Date.now();
            this.Update((now - t) / 1000);
            t = now;
        }, 500);
    }

    onAnnounced(){}
    onArrived(){}

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    AddRoute(route: Route) {
        this.gates = this.gates.concat(route.gates);
        this.baseSource = route.nextSource;
        route.currentTrain = this;
    }

    Update(dt: number) {
        if(this.gates.length === 0) {
            return;
        }

        let dist = this.velocity * dt;
        let gateInfo = this.getGateInfoByPos(this.pos + dist);

        if(gateInfo.index < this.gates.length || this.baseSource == null) {
            this.pos = this.pos + dist;
            this.updateGatesState();
        } else {
            this.pos = gateInfo.end;
            this.updateGatesState();
            this.onArrived();
        }
    }

    //////////////////////////////////////////////////
    // Logic helpers
    //////////////////////////////////////////////////

    updateGatesState() {
        if(this.pos === 0) {
            return;
        }

        let minIndex = this.getGateInfoByPos(this.pos - this.length).index;
        let maxIndex = this.getGateInfoByPos(this.pos).index;
        this.gates.forEach((gate, i) => {
            gate.Train(minIndex <= i && i <= maxIndex);
        });
        this.onReleaseGates(this.gates.slice(0, minIndex));

        if(minIndex === this.gates.length && this.baseSource == null) {
            clearInterval(this.updateIntervalID);
        }
    }

    onReleaseGates(gate: Gate[]){}

    getGateInfoByPos(pos: number) {
        let iPos = 0;
        for(let i = 0; i < this.gates.length; i++) {
            iPos += this.gates[i].GetLength();
            if(iPos > pos) {
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
}
export default Train;