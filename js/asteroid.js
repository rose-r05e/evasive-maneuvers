class Asteroid {
    constructor(size) {

        let R = size;
        let r = size/2;
        let rr = size/4;

        let points = new Array();

        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(-r, rr), getRandomInt(-r, -rr)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(rr, r), getRandomInt(-r, rr)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(-rr, r), getRandomInt(rr, r)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(-r, -rr), getRandomInt(-rr, r)));
        }

        this._location = new Point(getRandomInt(0,GAME_SIZE.width), -150);

        this._shape = new Polygon(points);
        this.shape.translate(this.location.x, this.location.y);

        this._movementVector = new Vector(getRandomInt(-200,200)/1000,1 + getRandomInt(0,10)/10);

        this._rotationSpeed = getRandomInt(-10,10)/1000;

        this.spawn();
    }

    set location(newLocation) {
        this._location = newLocation;
    }
    get location() {
        return this._location;
    }

    get shape() {
        return this._shape;
    }

    get rotationSpeed() {
        return this._rotationSpeed;
    }

    get movementVector() {
        return this._movementVector;
    }

    spawn() {
        drawPolygon(this.shape);
    }
    move() {
        this.shape.rotate(this.rotationSpeed, this.location);
        this.location.translate(this.movementVector);
        this.shape.translate(this.movementVector);
        drawPolygon(this.shape);
        CONTEXT.fillStyle = "#FF0000";
        CONTEXT.fillRect(this.location.x-1,this.location.y+1,3,3);
    }
}
