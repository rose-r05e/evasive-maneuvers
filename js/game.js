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
const INTERSPACE = 20;
const FPS = 60;

const CANVAS = document.getElementById('gameContainer');
CANVAS.height = GAME_SIZE.height;
CANVAS.width = GAME_SIZE.width;
const CONTEXT = CANVAS.getContext('2d');

const UI_SIZE = {
    height: GAME_SIZE.height/10,
    width: GAME_SIZE.width,
    font: "30px Arial",
    color: "#FFFFFF"
}

const ASTEROID_SIZE = {
    max: 150,
    min: 50,
    splitLimit: 75
}

var ui;
var ship;
var asteroids = new Array();
var shots = new Array();

var shotDelay = 30;
var sinceLastShot = shotDelay;

var keyState = {
    up: false,
    down: false,
    left: false,
    right: false,
    fire: false
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
    ui = new UI();
    ship = new Ship();
}

function update() {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

    ship.move(keyState);

    if (keyState.fire == true && sinceLastShot > shotDelay) {
        shots.push(new Shot(new Point(ship.center.x, ship.center.y - ship.size)));
        sinceLastShot = 0;
    }
    sinceLastShot += 1;


    if (shots.length > 0) {
        for (const shot of shots) {
            shot.update();
            if (shot.isOutOfScreen()) {
                shots.splice(shots.indexOf(shot),1);
            }
        }
    }

    if (getRandomInt(1,100) > 99) {
        asteroids.push(new Asteroid(getRandomInt(50,150)));
    }

    if (asteroids.length > 0) {
        for(const asteroid of asteroids) {
            asteroid.update();
            if (asteroid.isOutOfScreen()) {
                asteroids.splice(asteroids.indexOf(asteroid),1);
            }
        }
    }

    if (asteroids.length > 0 && shots.length > 0) {
        for (const asteroid of asteroids) {
            for (const shot of shots) {
                if (asteroid.isHit(shot)) {
                    if (asteroid.size > ASTEROID_SIZE.splitLimit) {
                        let splitted = asteroid.split();
                        for (let newAsteroid of splitted) {
                            asteroids.push(newAsteroid);
                        }
                    }
                    asteroids.splice(asteroids.indexOf(asteroid),1);
                    shots.splice(shots.indexOf(shot),1);
                }
            }
        }
    }

    ui.update();

    for (const asteroid of asteroids) {
        if (ship.isCollided(asteroid)) {
            ui.timer.stop();
            clearInterval(gameLoop);
        }
    }

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
    if (e.keyCode == SPACE) {
        keyState.fire = true;
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
    if (e.keyCode == SPACE) {
        keyState.fire = false;
    }
}
//DOBRZE


init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
var gameLoop = setInterval(update, 1000 / FPS);
//DOBRZE!
