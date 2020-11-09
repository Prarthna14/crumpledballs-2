
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var box1,box2,box3;
var dustbinIMG;
function preload()
{
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ground1=new ground(400,690,800,20);
paper1=new paper(200,560,50);
    box1=new crate(600,680,200,20);
	

	box2=new crate(500,600,20,150);
	

	box3=new crate(700,600,20,150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  box2.display();
  box3.display();
  image(dustbinIMG,460,445,300,250);
  paper1.display();
  ground1.display();
  
  
  
  drawSprites();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		//Matter.body.setStatic(paper1.body,false);
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-200});
	}
}


