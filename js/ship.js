class Ship {

    constructor(game_size) {
        this.x = game_size.width * 1/2;
        this.y = game_size.height * 3/4;
        this.r = game_size.wight * 1/20;
        this.speed = game_size.height * 1/50;
        this.movement = new Vector(0,0);
        this.initialize();
    }

    set movement(newMovement) {
        this.movement = new Vector(newMovement.x,newMovement.y);
    }

    move() {
        movement.normalize();
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

//export {Ship};
