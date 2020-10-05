class Point {
    /**
    * A point is defined as a pair of X and Y coordinates.
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
    * translates a point
    * point.translate(vector) or point.translate(x,y)
    * @param {(number|Object)} arg1 - x or Vector object.
    * @param {(number|undefined)} arg2 - y or blank.
    */
    translate(arg1,arg2) {
        if(arg1 instanceof Vector && typeof arg2 === 'undefined') {
            this._x += arg1.x;
            this._y += arg1.y;
        }
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            this._x += arg1;
            this._y += arg2;
        }
        else throw new TypeError('Wrong type of arguments in point.translate().');
    }

    // Returns true if the point p lies  
    // inside the polygon[] with n vertices 
    get isInside(polygon) 
    { 
        let n = polygon.points.lenght;
        let inf = 10000; 
  
        // Create a point for line segment from p to infinite 
        let extreme = new Point(inf, p.y); 
  
        // Count intersections of the above line  
        // with sides of polygon 
        let count = 0, i = 0; 
        do 
        { 
            let next = (i + 1) % n; 
  
            // Check if the line segment from 'p' to  
            // 'extreme' intersects with the line  
            // segment from 'polygon[i]' to 'polygon[next]' 
            if (doIntersect(polygon[i], polygon[next], p, extreme))  
            { 
                // If the point 'p' is colinear with line  
                // segment 'i-next', then check if it lies  
                // on segment. If it lies, return true, otherwise false 
                if (pointOrientation(polygon[i], p, polygon[next]) == 0) 
                { 
                    return onSegment(polygon[i], p, polygon[next]); 
                } 
  
                count++; 
            } 
            i = next; 
        } while (i != 0); 
  
        // Return true if count is odd, false otherwise 
        return (count % 2 === 1); // Same as (count%2 == 1) 
    } 

}

/**
 * returns a distance between two points
 * @param {Object} point1 - Point
 * @param {Object} point2 - Point
 */
function distance(point1, point2) {
    if(point1 instanceof Point && point2 instanceof Point) {
        let a = Math.abs(point1.x - point2.x);
        let b = Math.abs(point1.y - point2.y);
        return Math.sqrt(a*a + b*b);
    }
    else throw new TypeError('Wrong type of arguments in distance().');
}

// Given three colinear points p, q, r,  
// the function checks if point q lies 
// on line segment 'pr' 
function onSegment(p, q, r)  
{ 
    if (q.x <= Math.max(p.x, r.x) && 
        q.x >= Math.min(p.x, r.x) && 
        q.y <= Math.max(p.y, r.y) && 
        q.y >= Math.min(p.y, r.y)) 
    { 
        return true; 
    } 
    return false; 
}

// To find orientation of ordered triplet (p, q, r). 
// The function returns following values 
// 0 --> p, q and r are colinear 
// 1 --> Clockwise 
// 2 --> Counterclockwise 
function pointOrientation(p, q, r)  
{ 
    let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y); 

    if (val == 0)  
    { 
        return 0; // colinear 
    } 
    else if (val > 0) {return 1;}
    else {return 2;} // clock or counterclock wise 
}

// The function that returns true if  
// line segment 'p1q1' and 'p2q2' letersect. 
function doIntersect(p1, q1, p2, q2)  
{ 
// Find the four orientations needed for  
// general and special cases 
let o1 = pointOrientation(p1, q1, p2); 
let o2 = pointOrientation(p1, q1, q2); 
let o3 = pointOrientation(p2, q2, p1); 
let o4 = pointOrientation(p2, q2, q1); 

// General case 
if (o1 != o2 && o3 != o4) 
{ 
return true; 
} 

// Special Cases 
// p1, q1 and p2 are colinear and 
// p2 lies on segment p1q1 
if (o1 == 0 && onSegment(p1, p2, q1))  
{ 
return true; 
} 

// p1, q1 and p2 are colinear and 
// q2 lies on segment p1q1 
if (o2 == 0 && onSegment(p1, q2, q1))  
{ 
return true; 
} 

// p2, q2 and p1 are colinear and 
// p1 lies on segment p2q2 
if (o3 == 0 && onSegment(p2, p1, q2)) 
{ 
return true; 
} 

// p2, q2 and q1 are colinear and 
// q1 lies on segment p2q2 
if (o4 == 0 && onSegment(p2, q1, q2)) 
{ 
return true; 
} 

// Doesn't fall in any of the above cases 
return false;  
} 
