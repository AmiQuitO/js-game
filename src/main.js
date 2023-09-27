window.addEventListener("keydown", function (e) {
    if(e.key == "w") player.yvu = -1;
    if(e.key == "a") player.xvl = -1;
    if(e.key == "s") player.yvd = 1;
    if(e.key == "d") player.xvr = 1;
});

window.addEventListener("keyup", function (e) {
    if(e.key == "w") player.yvu = 0;
    if(e.key == "a") player.xvl = 0;
    if(e.key == "s") player.yvd = 0;
    if(e.key == "d") player.xvr = 0;
});

window.addEventListener("DOMContentLoaded", function(){
});

class Player{
    constructor(x, y){
        this.modelR = document.getElementsByClassName("playerR");
        this.modelL = document.getElementsByClassName("playerL");
        this.currentModel = this.modelR[0];
        //this.animation = new AnimationMovable(this.model);

        this.time = 0;

        this.x = x;
        this.y = y;
        this.xvl = 0;
        this.xvr = 0;
        this.yvu = 0;
        this.yvd = 0;
        this.lastDirection = 'l';
    }
    Move(){
        this.x += this.xvl;
        this.x += this.xvr;
        this.y += this.yvu;
        this.y += this.yvd;

        if(this.xvl == -1){
            if(this.time%50==0) this.currentModel = this.modelL[1];
            if(this.time%100==0) this.currentModel = this.modelL[2];
            this.lastDirection = 'l';
            this.time++;
        }
        if(this.xvr == 1){
            if(this.time%50==0) this.currentModel = this.modelR[1];
            if(this.time%100==0) this.currentModel = this.modelR[2];
            this.lastDirection = 'r';
            this.time++;
        }
        if(this.lastDirection == 'l' && (this.xvr == 0 && this.xvl == 0)){
            if(this.time%50==0) this.currentModel = this.modelL[1];
            if(this.time%100==0) this.currentModel = this.modelL[2];
            this.lastDirection = 'l';
            this.time++;
        }
        if(this.lastDirection == 'r' && (this.xvr == 0 && this.xvl == 0)){
            if(this.time%50==0) this.currentModel = this.modelR[1];
            if(this.time%100==0) this.currentModel = this.modelR[2];
            this.lastDirection = 'r';
            this.time++;
        }
        if(this.lastDirection == 'l' && (this.xvr == 0 && this.xvl == 0) && (this.yvu == 0 && this.yvd == 0)) 
        {
            this.currentModel = this.modelL[0];
            this.time = 0;
        }
        if(this.lastDirection == 'r' && (this.xvr == 0 && this.xvl == 0) && (this.yvu == 0 && this.yvd == 0)) 
        {
            this.currentModel = this.modelR[0];
            this.time = 0;
        }
    }
    Draw(){
        CTXM.drawImage(this.currentModel, this.x, this.y, 80, 80);
    }

}

m = document.getElementById("m");

function Update(){

    CTXM.drawImage(m, 0, 0, 720, 720);

    player.Move();
    player.Draw();

    CTXM.imageSmoothingEnabled = false;
    CTXM.mozImageSmoothingEnabled = false;
    CTXM.webkitImageSmoothingEnabled = false;
    requestAnimationFrame(Update);
}



player = new Player(0, 0);

Update();