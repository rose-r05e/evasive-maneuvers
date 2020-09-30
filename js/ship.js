class Ship {

    constructor(game_size) {
        this.x = game_size.width * 1/2;
        this.y = game_size.height * 3/4;
        this.r = game_size.wight * 1/20;
        this.speed = game_size.height * 1/50;
        this.initialize();
    }
    move(ks) {
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
        console.log("vx=" + movementVector.x +" vy=" + movementVector.y);
        this.x += movementVector.x * this.speed;
        this.y += movementVector.y * this.speed;
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
