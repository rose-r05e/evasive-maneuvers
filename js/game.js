import {Vector} from './vector.js';
//const Vector = require('./vector');

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

const FPS = 30;

var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var keyState = {
    up: false,
    down: false,
    left: false,
    right: false
}

var ship = {
    x: canvas.width * 1/2,
    y: canvas.height * 3/4,
    r: canvas.width * 1/20,
    speed: canvas.height * 1/50
}

var gameData = {
  a: 1.5 * Math.PI
}
//????Przechowywać punkty i wartości do rysowania?

function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}
//PRZEANALIZOWAĆ

function drawShip() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //czyszczenie pola gry
  ctx.strokeStyle = "white";
  ctx.lineWidth = canvas.width/300;
  ctx.beginPath();
  ctx.moveTo( // rear left
    ship.x - ship.r * (2 / 3 * Math.cos(gameData.a) + 0.5 * Math.sin(gameData.a)),
    ship.y + ship.r * (2 / 3 * Math.sin(gameData.a) - 0.5 * Math.cos(gameData.a))
  );
  ctx.lineTo( // rear centre (behind the ship)
      ship.x - ship.r * 5 / 3 * Math.cos(gameData.a),
      ship.y + ship.r * 5 / 3 * Math.sin(gameData.a)
  );
  ctx.lineTo( // rear right
      ship.x - ship.r * (2 / 3 * Math.cos(gameData.a) - 0.5 * Math.sin(gameData.a)),
      ship.y + ship.r * (2 / 3 * Math.sin(gameData.a) + 0.5 * Math.cos(gameData.a))
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
//DOBRZE ALE ZOPTYMALIZOWAĆ, ŻEBY NIE LICZYŁO CIĄGLE TYCH SAMYCH SINusów i COSinusów

function moveShip() {
    let direction = new Vector(0,0);
    if(keyState.up) {
        direction.add(-1,0);
    }
    if(keyState.down) {
        direction.add(1,0);
    }
    if(keyState.left) {
        direction.add(0,-1);
    }
    if(keyState.right) {
        direction.add(0,1);
    }
    direction = direction.normalize();
    ship.x += direction.x * ship.speed;
    ship.y += direction.y * ship.speed;
    console.log("x=" + ship.x +" y=" + ship.y);
}
//DOBRZE

function update(e) {
  moveShip();
  drawShip();
}
//DOBRZE, ale nieskończone chyba

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

//init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
setInterval(update, 1000 / FPS);
//DOBRZE!
