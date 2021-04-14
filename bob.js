class Bob{
    constructor(x,y){
    var option={
    isStatic : false,
    restitution : 1,
     friction: 0,
     density: 0.5,
      }
    this.body=Bodies.circle(x,y,100,option);
    this.x=x;
    this.y=y;             
    this.radius=50;
    World.add(world,this.body); 
    }
            
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    //translate(pos.x,pos.y);
    fill("black");
    //rotate(angle);
    //rectMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,50,50);
    pop();     
    }    
}