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
        let x = this._x, y = this._y;
        let result = false;
        try {
            result = new Vector(x + vec._x, y + vec._y);
        } catch (error) {
            console.log(`ERROR: ${error}`);
        } finally {
            return result;
        }
    }

    add(vx,vy) {
        let x = this._x, y = this._y;
        let result = false;
        try {
            result = new Vector(x + vx, y + vy);
        } catch (error) {
        console.log(`ERROR: ${error}`);
        }
        finally {
            return result;
        }
    }

    normalize() {
        let x = this._x, y = this._y;
        let mag = this.length;
        return new Vector(x / mag, y / mag);
    }

}

export {Vector};
