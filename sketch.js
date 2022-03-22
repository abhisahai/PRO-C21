const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

var ball;
var num1, num2;
var ground, wall1, wall2

var num1 = prompt('Write what the X velocity of the ball should be. (It is less than 0.25)')
var num2 = prompt('Write what the Y velocity of the ball should be. (It is less than 0.25)')

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	ellipseMode(RADIUS)

	//Create the Bodies Here.
	ballOptions = {
		restitution:0.25,
		friction:1,
	}
	ball = Bodies.circle(50, 680, 10, ballOptions);
	World.add(world, ball);
	
	ground = new Ground(400, 690, 800, 5);
	wall1 = new Ground(600, 640, 5, 100);
	wall2 = new Ground(700, 640, 5, 100);
}


function draw() {
	background(0);
	
	Engine.update(engine);
	
	fill('yellow');

	ellipse(ball.position.x, ball.position.y, 10);
	ground.display();
	wall1.display();
	wall2.display();

}

function keyPressed(){
	if(keyCode == 32){
		Body.applyForce(ball, ball.position, {x:num1, y:-(num2)});
	}
}