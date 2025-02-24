/**
 * @name VectorJS
 * @description An implementation of two dimensional mathematical vectors in JavaScript.
 * @author Rose A.K.A. R05E
 */

class Vector {
    /**
    * A vector is defined as a pair of X and Y coordinates with magnitude and direction.
    * Each operational method can accept either a Vector object or X and Y coordinates.
    *
    * @param {x} x
    * @param {y} y
    */
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

    /**
    * length() is implemented as a getter, so you can just call 'vector.length'
    * calculates the magnitude of the vector based on the following equation:
    * length^2 = x^2 + y^2
    */
    get length() {
        let x = this._x, y = this._y;
        return Math.sqrt(x * x + y * y);
    }
  
    /**
    * adds two vectors
    * vector.add(vector) or vector.add(x,y)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    add(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x += arg1.x;
            this._y += arg1.y;
         }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
             this._x += arg1;
             this._y += arg2;
         }
         else throw new TypeError('Wrong type of arguments in vector.add().')
    }
    
    /**
    * subtracts two vectors
    * vector.subtract(vector) or vector.subtract(x,y)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    subtract(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x -= arg1.x;
            this._y -= arg1.y;
         }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
             this._x -= arg1;
             this._y -= arg2;
         }
         else throw new TypeError('Wrong type of arguments in vector.subtract().')
    }
    
    /**
    * multiplies two vectors
    * vector.multiply(vector) or vector.multiply(x,y) or vector.multiply(n)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    multiply(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x *= arg1.x;
            this._y *= arg1.y;
         }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
             this._x *= arg1;
             this._y *= arg2;
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'undefined') {
             this._x *= arg1;
             this._y *= arg1;
        }
        else throw new TypeError('Wrong type of arguments in vector.multiply().')
    }
    
    /**
    * divides two vectors
    * vector.divide(vector) or vector.divide(x,y) or vector.divide(n)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    divide(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x /= arg1.x;
            this._y /= arg1.y;
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
             this._x /= arg1;
             this._y /= arg2;
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'undefined') {
             this._x /= arg1;
             this._y /= arg1;
        }
        else throw new TypeError('Wrong type of arguments in vector.divide().')
    }

    /**
    * A method to normalize a vector.
    */
    normalize() {
        if (this._x != 0 && this._y != 0) {
            let mag = this.length;
            this._x /= mag;
            this._y /= mag; 
        }
    }

}
