class Asteroid {
    constructor(size, startPoint) {

        this._size = size;
        let R = size/2;
        let r = size/4;

        let points = new Array();

        
        for (i=0; i <= getRandomInt(1,2); i++) {
            points.push(new Point(getRandomInt(-r, r), getRandomInt(-R, -r)));
        }
        for (i=0; i <= getRandomInt(1,2); i++) {
            points.push(new Point(getRandomInt(r, R), getRandomInt(-r, r)));
        }
        for (i=0; i <= getRandomInt(1,2); i++) {
            points.push(new Point(getRandomInt(-r, r), getRandomInt(r, R)));
        }
        for (i=0; i <= getRandomInt(1,2); i++) {
            points.push(new Point(getRandomInt(-R, -r), getRandomInt(-r, r)));
        }
        

        if (startPoint instanceof Point) {
            this._location = startPoint;
        }
        else {
            this._location = new Point(getRandomInt(0,GAME_SIZE.width), -100);
        }

        this._shape = new Polygon(points);
        this.shape.translate(this.location.x, this.location.y);

        this._movementVector = new Vector(getRandomInt(-200,200)/1000,1 + getRandomInt(0,10)/10);

        this._rotationSpeed = getRandomInt(-10,10)/1000;

        this.spawn();
    }

    get size() {
        return this._size;
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

    update() {
        this.shape.rotate(this.rotationSpeed, this.location);
        this.location.translate(this.movementVector);
        this.shape.translate(this.movementVector);
        drawPolygon(this.shape);
        CONTEXT.fillStyle = "#FF0000";
        CONTEXT.fillRect(this.location.x-1,this.location.y-1,3,3);
    }

    split() {
        let afterSplit = new Array();
        afterSplit.push(new Asteroid(this.size/2, new Point(this.location.x - this.size/4, this.location.y)));
        afterSplit.push(new Asteroid(this.size/2, new Point(this.location.x + this.size/4, this.location.y)));
        return afterSplit;
    }

    isOutOfScreen() {
        if (this.location.y > GAME_SIZE.height + this.size || this.location.x < -this.size || this.location.x > GAME_SIZE.width + this.size) {
            return true;
        }
        else return false;
    }

    isHit(shot) {
        return shot.location.isInside(this.shape);
    }
}
