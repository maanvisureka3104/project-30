class Bob{
    constructor(x,y){
    var option={
    'isStatic' : true,
    'restitution' : 0.3,
     'friction': 0.3,
     'density': 0.1,
      }
    this.body=Bodies.circle(x,y,100,option);
    this.x=x;
    this.y=y;             
    this.radius=100;
    World.add(world,this.body); 
    }
            
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    fill("black");
    rotate(angle);
    rectMode(CENTER);
    ellipse(this.x,this.y,this.radius,this.radius);
    pop();     
    }    
}