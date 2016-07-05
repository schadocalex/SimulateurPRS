var El = require("./El");

/**
 *
 */
class Train extends El {
    gates = [];
    pos = 0;

    updateIntervalID = null;

    constructor(_id, _velocity, _length, _announcementTime, _arrivalTime, _maxStopTime, _baseSource, _baseAnnouncement) {
        super(_id);
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
            this.update((now - t) / 1000);
            t = now;
        }, 500);
    }

    onAnnounced(){}
    onArrived(){}

    //////////////////////////////////////////////////
    // Logic
    //////////////////////////////////////////////////

    addRoute(route) {
        this.gates = this.gates.concat(route.gates);
        this.baseSource = route.nextSource;
    }

    update(dt) {
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
            gate.setTrain(minIndex <= i && i <= maxIndex);
        });
        this.onReleaseGates(this.gates.slice(0, minIndex));

        if(minIndex === this.gates.length && this.baseSource == null) {
            clearInterval(this.updateIntervalID);
        }
    }

    onReleaseGates(){}

    getGateInfoByPos(pos) {
        let iPos = 0;
        for(let i = 0; i < this.gates.length; i++) {
            iPos += this.gates[i].getLength();
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
module.exports = Train;
