class Canvas{
    constructor(canvas, width, height){
        this.c = canvas;
        this.ctx = this.c.getContext("2d");
        this.c.width = width;
        this.c.height = height;
    }
}