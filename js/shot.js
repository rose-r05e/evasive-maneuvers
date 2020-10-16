class Shot {
    constructor(startingPoint) {
        this._location = startingPoint;
        this._velocity = -10;
        this.draw();
    }

    get location() {
        return this._location;
    }
    set location(newLocation) {
        this._location = newLocation;
    }

    get velocity() {
        return this._velocity;
    }

    update() {
        this.location.y += this.velocity;
        this.draw();
    }

    draw() {
        CONTEXT.fillStyle = "#00cc00";
        CONTEXT.fillRect(this.location.x-1,this.location.y-1,3,7);
    }

    isOutOfScreen() {
        if (this.location.y < -7) {
            return true;
        }
        else return false;
    }
}