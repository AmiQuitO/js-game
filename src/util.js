function Random(min, max) {
    if(min == max){
        return min;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    IsEqual(vector){
        return this.x == vector.x && this.y == vector.y;
    }
}