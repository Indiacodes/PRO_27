class Bob{
    constructor(x, y){
        this.bob = Bodies.circle(x, y, 100);
        this.x = x;
        this.y = y;
    }

    showBob(){
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 100);
    }
}