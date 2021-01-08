
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rop1, rop2, rop3, rop4, rop5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof();

	bob1 = new Bob(300,300);
	bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);
	
	rop1 = new Rope(bob1.body,roof.body);
	rop2 = new Rope(bob2.body,roof.body);
	rop3 = new Rope(bob3.body,roof.body);
	rop4 = new Rope(bob4.body,roof.body);
	rop5 = new Rope(bob5.body,roof.body);
	
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();

}



