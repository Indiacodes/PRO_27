const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bob1, Bob2, Bob3, Bob4;
var conecBob1,conecBob2,conecBob3,conecBob4;
var hanger, hangerrender;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//bobs
	Bob1 = new Bob(260, 500);
	Bob2 = new Bob(361, 500);
	Bob3 = new Bob(462, 500);
	Bob4 = new Bob(563, 500);

	//hanger
	//hanger = Bodies.rectangle(400.5, 200, 320, 80);
	

	//constraints
	conecBob1 = new Constraints(Bob1, hanger);

	World.add(world, hanger);
	hangerrender = rect(400.5 , 200, 320, 80);
	World.add(world, Bob1);
	World.add(world, Bob2);
	World.add(world, Bob3);
	World.add(world, Bob4);
	World.add(world, conecBob1);
	//World.add(world, conecBob2);
	//World.add(world, conecBob3);
	//World.add(world, conecBob4);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
	//display
		Bob1.showBob();
		Bob2.showBob();
		Bob3.showBob();
		Bob4.showBob();
		conecBob1.showConstraint();

  drawSprites();
 
}