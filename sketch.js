
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2
var cyan1,cyan2,cyan3,cyan4,cyan5;
var lime1,lime2,lime3;
var red1;
var hexagon1;
var rope;
var backgroundImg1,backgroundImg;

function preload()
{
  backgroundImg1 = loadImage("Day.png");
  getBackgroundImage();
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,475,800,50)
	ground2 = new Ground(600,275,120,10)
	lime1 = new greenbox(580,215,20,50)
	lime2 = new greenbox(600,215,20,50)
	lime3 = new greenbox(620,215,20,50)
	cyan1 = new bluebox(560,265,20,50);
	cyan2 = new bluebox(580,265,20,50);
	cyan3 = new bluebox(600,265,20,50);
	cyan4 = new bluebox(620,265,20,50);
	cyan5 = new bluebox(640,265,20,50);
	red1 = new redbox(600,165,20,50);
	hexagon1 = new Hexagon(380,230,40,40);
	rope = new SlingShot(hexagon1.body,{x:400,y:230})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg1);
  Engine.update(engine);
  
  ground1.display();
  ground2.display();
  cyan1.display();
  cyan2.display();
  cyan3.display();
  cyan4.display();
  cyan5.display();
  lime1.display();
  lime2.display();
  lime3.display();
  red1.display();
  hexagon1.display();
  rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
	rope.fly();
	//hexagon1.body.setVelocity = 10;
}

async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=06&&hour<18){
     bg = loadImage("Day.png")
    }
    else{
     bg = loadImage("bg.png");
    }
    backgroundImg = loadImage(bg);
}