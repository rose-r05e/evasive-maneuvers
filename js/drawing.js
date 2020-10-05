function drawPolygon(poly, ctx) {
    ctx.beginPath();
    ctx.moveTo(poly.points[0].x, poly.points[0].y);
    for (i = 1; i < poly.lenght; i++) {
        ctx.lineTo(poly.points[i].x, poly.points[i].y);
    }
    ctx.lineTo(poly.points[0].x, poly.points[0].y);
    ctx.closePath();
    ctx.stroke();
}