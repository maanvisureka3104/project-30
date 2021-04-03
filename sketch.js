
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
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
	bob1=new Bob(100,300);
	bob2=new Bob(150,300);
	bob3=new Bob(200,300);
	bob4=new Bob(250,300);
	bob5=new Bob(300,300);
	rope1=new Rope(bob1.body,roof.body,-bob1.radius*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



