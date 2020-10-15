class Ship {

    constructor() {
        this._size = 15;
        this._center = new Point(GAME_SIZE.width * 1/2, GAME_SIZE.height * 3/4);
        this._shape = new Polygon([new Point(0,-this.size), new Point(-this.size,this.size), new Point(this.size, this.size)]);
        this.shape.translate(this.center.x, this.center.y);
        this._speed = GAME_SIZE.height * 1/200;
        this.initialize();
    }
    set size(newSize) {
        this._size = newSize;
    }
    get size() {
        return this._size;
    }

    get shape() {
        return this._shape;
    }

    get speed() {
        return this._speed;
    }

    set center(newCenter) {
        this._center = newCenter;
    }
    get center() {
        return this._center;
    }

    move(keyState) {
        let movementVector = new Vector(0,0);
        if(keyState.up && INTERSPACE < this.center.y) {
            movementVector.add(0,-1);
        }
        if(keyState.down && this.center.y < GAME_SIZE.height - INTERSPACE) {
            movementVector.add(0,1);
        }
        if(keyState.left && INTERSPACE < this.center.x) {
            movementVector.add(-1,0);
        }
        if(keyState.right && this.center.x < GAME_SIZE.width - INTERSPACE) {
            movementVector.add(1,0);
        }
        movementVector.normalize();
        movementVector.multiply(this.speed);
        this.center.translate(movementVector);
        this.shape.translate(movementVector);
        drawPolygon(this.shape);
        CONTEXT.fillStyle = "#FF0000";
        CONTEXT.fillRect(this.center.x-1,this.center.y-1,3,3);
    }

    initialize() {
        drawPolygon(this.shape);
    }
}

//export {Ship};
