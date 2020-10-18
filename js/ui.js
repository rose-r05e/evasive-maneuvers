class UI {
    constructor() {
        this._timer = new Timer();
        this.timer.start();
    }

    get timer() {
        return this._timer;
    }

    update() {
        CONTEXT.clearRect(0, 0, UI_SIZE.width, UI_SIZE.height);
        drawLine(new Point(0, UI_SIZE.height), new Point(CANVAS.width, UI_SIZE.height));
        CONTEXT.fillStyle = UI_SIZE.color;
        CONTEXT.font = UI_SIZE.font;
        CONTEXT.fillText(this.timer.formattedTime, 6*UI_SIZE.width/10, UI_SIZE.height/2 +11);
    }
}