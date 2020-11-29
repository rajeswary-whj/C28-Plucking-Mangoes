class Stone{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            density: 1.2,
            friction: 1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("pics/Stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
 display() {
     var stonepos = this.body.position;
     push();
     translate(stonepos.x, stonepos.y);
     imageMode(CENTER);
     ellipseMode(RADIUS);
     image(this.image, stonepos.x,stonepos.y,this.r*2,this.r*2);
     pop();
 }   
}