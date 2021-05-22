const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
  roof=new Roof(400,100,500,30);
	bob1=new Bob(300,300);
	bob2=new Bob(350,300);
	bob3=new Bob(400,300);
	bob4=new Bob(450,300);
	bob5=new Bob(500,300);
	rope1=new Rope(bob1.body,{x:300,y:100});
  rope2=new Rope(bob2.body,{x:350,y:100});
  rope3=new Rope(bob3.body,{x:400,y:100});
  rope4=new Rope(bob4.body,{x:450,y:100});
  rope5=new Rope(bob5.body,{x:500,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  text(mouseX+","+mouseY, 50,50);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
    Matter.body.applyForce(bob1.body,bob1.body.position,{x:-50,y:50})
  }
}



