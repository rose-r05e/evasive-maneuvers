class Ship {

    constructor(game_size, ctx) {

        this._shipShape = new Polygon([new Point(0,5), new Point(-5, -5), new Point(5, -5)]);
        this._shipCenter = new Point(game_size.width * 1/2, game_size.height * 3/4);
        this._speed = game_size.height * 1/50;
        this.initialize(ctx);
    }
    move(ks, ctx) {
        let movementVector = new Vector(0,0);
        if(ks.up) {
            tempVector.add(0,-1);
        }
        if(ks.down) {
            tempVector.add(0,1);
        }
        if(ks.left) {
            tempVector.add(-1,0);
        }
        if(ks.right) {
            tempVector.add(1,0);
        }
        movementVector.normalize();
        movementVector.multiply(this._speed);
        this._shipCenter.translate(movementVector);
        this._shipShape.translate(this._shipCenter);
        drawPolygon(this._shipShape, ctx);
    }

    initialize(ctx) {
        this._shipShape.translate(this._shipCenter);
        drawPolygon(this._shipShape, ctx);
    }
}

//export {Ship};
