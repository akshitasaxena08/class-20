
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;
let rock;
let wall;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    isStatic: false, frictionAir: 0.5
  }
  ball = Bodies.circle(300,10,20,ball_options);
  World.add(world, ball);
  console.log(ball);

  var rock_options = {
    restitution:1
  }
  rock = Bodies.circle(50,10,20,rock_options);
  World.add(world, rock);
  console.log(rock);

  //create ground
  var groundA = {
    isStatic: true
  }
  ground = Bodies.rectangle(0,370,400,10,groundA);
  World.add(world, ground);
  console.log(ground);

  wall = Bodies.rectangle(300,200,200,20,groundA);
  World.add(world, wall);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  //rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,400,10);
}

