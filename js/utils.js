function drawPolygon(poly) {
    CONTEXT.lineWidth = 2;
    CONTEXT.strokeStyle = '#FFFFFF';
    CONTEXT.beginPath();
    CONTEXT.moveTo(poly.points[0].x, poly.points[0].y);
    //console.log("start w x="+poly.points[0].x + " y=" +poly.points[0].y);
    for (i = 1; i < poly.points.length; i++) {
        CONTEXT.lineTo(poly.points[i].x, poly.points[i].y);
        //console.log("Linia narysowana do x="+poly.points[i].x + " y=" +poly.points[i].y);
    }
    CONTEXT.lineTo(poly.points[0].x, poly.points[0].y);
    //console.log("Linia do konca w x="+poly.points[0].x + " y=" +poly.points[0].y);
    CONTEXT.closePath();
    CONTEXT.stroke();
}

function drawLine(beginPoint, endPoint) {
    CONTEXT.lineWidth = 2;
    CONTEXT.strokeStyle = '#FFFFFF';
    CONTEXT.beginPath();
    CONTEXT.moveTo(beginPoint.x, beginPoint.y);
    CONTEXT.lineTo(endPoint.x, endPoint.y);
    CONTEXT.closePath();
    CONTEXT.stroke();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class Timer {
    constructor() {
        this._run = false;
        this._startTime;
        this._endTime;
    }

    set run(newRun) {
        this._run = newRun;
    }
    get run() {
        return this._run;
    }
    set startTime(newStartTime) {
        this._startTime = newStartTime;
    }
    get startTime() {
        return this._startTime
    }
    set endTime(newEndTime) {
        this._endTime = newEndTime;
    }
    get endTime() {
        return this._endTime;
    }

    get time() {
        if (this.run) {
            return Date.now() - this.startTime;
        }
        else {
            return this.endTime - this.startTime;
        }
    }

    get formattedTime() {
        var t = this.time;
        var ms = t % 1000;
        t = (t - ms) / 1000;
        ms = Math.floor(ms/10);
        var secs = t % 60;
        t = (t - secs) / 60;
        var mins = t % 60;
        var hrs = (t - mins) / 60;

        if (ms<10) { ms = "0" + ms; }
        if (secs<10) { secs = "0" + secs; }
        if (mins<10) { mins = "0" + mins; }
        if (hrs<10) { hrs = "0" + hrs; }

        return hrs + ":" + mins + ":" + secs + ":" + ms;
    }

    start() {
        this.startTime = Date.now();
        this.run = true;
    }
    stop() {
        this.endTime = Date.now();
        this.run = false;
    }
}