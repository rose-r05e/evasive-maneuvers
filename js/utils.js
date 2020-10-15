function drawPolygon(poly) {
    CONTEXT.lineWidth = 2;
    CONTEXT.strokeStyle = '#FFFFFF';
    CONTEXT.beginPath();
    CONTEXT.moveTo(poly.points[0].x, poly.points[0].y);
    //console.log("start w x="+poly.points[0].x + " y=" +poly.points[0].y);
    for (i = 1; i < poly.points.length; i++) {
        CONTEXT.lineTo(poly.points[i].x, poly.points[i].y);
        //console.log("Linia narysowana do x="+poly.points[i].x + " y=" +poly.points[i].y);
    }
    CONTEXT.lineTo(poly.points[0].x, poly.points[0].y);
    //console.log("Linia do konca w x="+poly.points[0].x + " y=" +poly.points[0].y);
    CONTEXT.closePath();
    CONTEXT.stroke();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }