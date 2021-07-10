
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var circle;
var groundObj;
var leftSide;
var rightSide;
function preload(){

}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
    groundObj = new Ground(width/2,400,width,20);
	leftSide = new Ground(350,300,10,200);
	rightSide = new Ground(450,300,200,20);
	//Create the Bodies Here.
    var ball_options = {
		restitution:0.3,
		density:1.2
	}
    circle = Matter.Bodies.circle(200,200,10,ball_options);
	World.add(world,circle);
    ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
  ellipse(circle.position.x,circle.position.y,10,10)
}
function keyDown(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(circle,{x:0,y:0},{x:0.01,y:-0.01})
	}
}


