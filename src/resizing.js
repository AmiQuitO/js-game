setInterval(WindowResize, 100)

function WindowResize(){
    if (CANVAS_MAIN.width != window.innerWidth || CANVAS_MAIN.height != window.innerHeight) {

        CANVAS_MAIN.c.width = window.innerWidth;
        CANVAS_MAIN.c.height = window.innerHeight;

        CANVAS_UI.c.width = window.innerWidth;
        CANVAS_UI.c.height = window.innerHeight;

        CANVAS_EFFECT.c.width = window.innerWidth;
        CANVAS_EFFECT.c.height = window.innerHeight;

        CANVAS_CENTER = {x: CANVAS_MAIN.c.width / 2, y: CANVAS_MAIN.c.height / 2};
        TILE_SIZE = CANVAS_MAIN.c.width / PLAYER_VISION; // final 20 test 80 100
    }
}