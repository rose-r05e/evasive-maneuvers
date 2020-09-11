class Vector {
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }
  
    set x(newX) {
        this._x = newX;
    }
    get x() {
        return this._x;
    }
  
    set y(newY) {
        this._y = newY;
    }
    get y() {
        return this._y;
    }
  
    get length() {
        let x = this._x, y = this._y;
        return Math.sqrt(x * x + y * y);
    }
  
    add(vec) {
        try {
            this._x += vec._x;
            this._y += vec._y;
        } catch (error) {
            console.log(`ERROR: ${error}`);
        }
    }
    
    add(vx,vy) {
        try {
            this._x += vx;
            this._y += vy;
        } catch (error) {
        console.log(`ERROR: ${error}`);
        }
    }

    normalize() {
        if (this._x != 0 && this._y != 0) {
            let mag = this.length;
            this._x /= mag;
            this._y /= mag; 
        }
    }
}

export {Vector};
