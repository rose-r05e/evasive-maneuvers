class Asteroid {
    constructor(size) {

        let R = size;
        let r = size/4;

        let points = new Array();

        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(0, R), getRandomInt(0, r)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(3*r, R), getRandomInt(r, 3*r)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(0, R), getRandomInt(3*r, R)));
        }
        for (i=0; i <= getRandomInt(2,3); i++) {
            points.push(new Point(getRandomInt(0, r), getRandomInt(r, 3*r)));
        }

        this._location = new Point(getRandomInt(0,GAME_SIZE.width), -150);

        this._shape = new Polygon(points);
        this.shape.translate(this.location.x, this.location.y);

        this._movementVector = new Vector(getRandomInt(-200,200)/1000,1 + getRandomInt(0,10)/10);

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

    get movementVector() {
        return this._movementVector;
    }

    spawn() {
        drawPolygon(this.shape);
    }
    move() {
        this.location.translate(this.movementVector);
        this.shape.translate(this.movementVector);
        drawPolygon(this.shape);
    }
}
