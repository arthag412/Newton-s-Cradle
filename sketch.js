
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;
var platform,b1,b2,b3,b4,b5;
var s2,s2,s3,s4,s5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=70;

	platform=new ground(width/2,height/4,width/7,20);
	b1=new Bob(260,250,70);
	b2=new Bob(330,250,70);
	b3=new Bob(400,250,70);
	b4=new Bob(470,250,70);
	b5=new Bob(540,250,70);

	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { width: 1200, height: 700, wireframes: false } 
	});

	s1=new rope(b1,platform,-bobDiameter*2,0);
	s2=new rope(platform,b2,-bobDiameter*1,0);
	s3=new rope(platform,b3,0,0);
	s4=new rope(platform,b4,bobDiameter*2,0);
	s5=new rope(platform,b5,bobDiameter*1,0);

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  platform.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-85,y:-85});
  
	}
}


