
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


engine = Engine.create();
world=engine.world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);



	boxleft = Bodies.rectangle(700, 600, 20, 100 , {isStatic:true} );
	 World.add(world, boxleft);

	 boxbottom = Bodies.rectangle(789, 650, 200, 20 , {isStatic:true} );
	 World.add(world, boxbottom);

	 boxright = Bodies.rectangle(882, 600, 20, 100 , {isStatic:true} );
	 World.add(world, boxright);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
	Engine.run(engine);

	ball=new Ball(80,674);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
	ball.display();


  fill("red");
	rectMode(CENTER);
	rect(boxleft.position.x,boxleft.position.y,20,100);


	rectMode(CENTER);
	rect(boxbottom.position.x,boxbottom.position.y,200,20);

	rectMode(CENTER);
	rect(boxright.position.x,boxright.position.y,20,100);

	

  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 10,30);

}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:23,y:-15})
	}



}


