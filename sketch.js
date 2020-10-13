
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1=new roof (400,300,450,20);
	bob1= new Bob(200,300,30,30);
	bob2= new Bob (250,350,30,30);
	bob3= new Bob(300,400,30,30);
	bob4= new Bob (350,450,30,30);
	bob5=new Bob (400,500,30,30);
	rop1=new rop(bob1.body,roof1.body,-bobDiameter*2,0);
	rop2=new rop(bob2.body,roof1.body,-bobDiameter*2,0);
	rop3=new rop(bob3.body,roof1.body,-bobDiameter*2,0);
	rop4=new rop(bob4.body,roof1.body,-bobDiameter*2,0);
	rop5=new rop(bob5.body,roof1.body,-bobDiameter*2,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rop1.display();
rop2.display();
rop3.display();
rop4.display();
rop5.dipslay();
  drawSprites();
 
}



