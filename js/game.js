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

const GAME_SIZE = {
    height: 848,
    width: 470
}
const FPS = 30;

var canvas = document.getElementById('gameContainer');
var context = canvas.getContext('2d');

var ship;
//var asteroids[];

var keyState = {
    up: false,
    down: false,
    left: false,
    right: false
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
    ship = new Ship(GAME_SIZE, context);
}

function update(e) {
    ship.move(keyState, canvasContext);
    //dodac kontekst do move()
}
//DOBRZE, ale nieskończone


function onKeyDown(e) {
    if (e.keyCode == ARROW_UP) {
       keyState.up = true;
    }
    if (e.keyCode == ARROW_DOWN) {
       keyState.down = true;
    }
    if (e.keyCode == ARROW_LEFT) {
       keyState.left = true;
    }
    if (e.keyCode == ARROW_RIGHT) {
        keyState.right = true;
    }
}
//DOBRZE
function onKeyUp(e) {
    if (e.keyCode == ARROW_UP) {
        keyState.up = false;
    }
    if (e.keyCode == ARROW_DOWN) {
        keyState.down = false;
    }
    if (e.keyCode == ARROW_LEFT) {
        keyState.left = false;
    }
    if (e.keyCode == ARROW_RIGHT) {
        keyState.right = false;
    }
}
//DOBRZE


init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
setInterval(update, 1000 / FPS);
//DOBRZE!
