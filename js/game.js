const ARROW_UP = 38;
const ARROW_DOWN = 40;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

const W = 87;
const S = 83;
const A = 65;
const D = 68;

const SPACE = 32;
const ENTER = 13;
const ESC = 27;

var game_size = {
    height: 848,
    width: 470
}
const FPS = 30;


var gameData = {
  a: 1.5 * Math.PI
}
//????Przechowywać punkty i wartości do rysowania?

// function clamp(v, min, max) {
//   if (v < min) {
//     return min;
//   } else if (v > max) {
//     return max;
//   } else {
//     return v;
//   }
// }
//PRZEANALIZOWAĆ

function init() {
    let cnv = createCanvas(game_size.width, game_size.height);
    cnv.parent('gameContainer');
    var ship = new Ship();
}

function update(e) {
    ship.move();
}
//DOBRZE, ale nieskończone

function keyPressed() {
    let tempVector = createVector(0,0);
    if(keyCode == ARROW_UP) {
        tempVector.add(0,-1);
    }
    if(keyCode == ARROW_DOWN) {
        tempVector.add(0,1);
    }
    if(keyCode == ARROW_LEFT) {
        tempVector.add(-1,0);
    }
    if(keyCode == ARROW_RIGHT) {
        tempVector.add(1,0);
    }
    ship.movement = tempVector;
}

init();
setInterval(update, 1000 / FPS);
//DOBRZE!