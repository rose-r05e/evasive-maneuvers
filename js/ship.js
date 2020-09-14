class Ship {

    constructor() {
        this.x = CANVAS.width * 1/2;
        this.y = CANVAS.height * 3/4;
        this.r = CANVAS.width * 1/20;
        this.speed = CANVAS.height * 1/50;
        this.movement = createVector(0,0);
        this.initialize();
    }

    set x(newX) {
        this.x = newX;
    }
    get x() {
        return this.x;
    }

    set y(newY) {
        this.y = newY;
    }
    get y() {
        return this.y;
    }

    set movement(newMovement) {
        this.movement = newMovement;
    }
    get movement() {
        return this.movement;
    }

    move() {
        if (this.movement.x != 0 && this.movement.y != 0) { movement.normalize(); }
        console.log("vx=" + movement.x +" vy=" + movement.y);
        this.x += movement.x * this.speed;
        this.y += movement.y * this.speed;
        console.log("x=" + this.x +" y=" + this.y);
        translate(this.pos.x, this.pos.y);
        noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, this.r);
    }

    initialize() {
        translate(this.pos.x, this.pos.y);
        noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, this.r);
    }
}