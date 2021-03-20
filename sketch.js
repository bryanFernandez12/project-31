const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground
var engine, world
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height, width, 20 )

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 35; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 110, 10));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 145, 10));
  }
  
  for (var j = 35; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 180, 10));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 215, 10));
  }

 

}

function draw() {
  background("black"); 
  ground.display()
Engine.update(engine)
  for (var k = 0; k < divisions.length; k++){

    divisions[k].display();

  }

  for (var k = 0; k < plinkos.length; k++){

    plinkos[k].display();

  }

  for (var k = 0; k < particles.length; k++){

    particles[k].display();

  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(40, 440), 10, 10));
  }

  drawSprites();
}