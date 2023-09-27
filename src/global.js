const CANVAS_MAIN = new Canvas(document.querySelector("#c1"), window.innerWidth, window.innerHeight);
const CANVAS_UI = new Canvas(document.querySelector("#c2"), window.innerWidth, window.innerHeight);
const CANVAS_EFFECT = new Canvas(document.querySelector("#c3"), window.innerWidth, window.innerHeight);

const CTXM = CANVAS_MAIN.ctx;
const CTXU = CANVAS_UI.ctx;
const CTXE = CANVAS_EFFECT.ctx;

let CANVAS_CENTER = {x: CANVAS_MAIN.c.width / 2, y: CANVAS_MAIN.c.height / 2};
let TILE_SIZE;
let MAP_SIZE;
let GAME_LEVEL = 1;

let PLAYER_VISION = 20;
