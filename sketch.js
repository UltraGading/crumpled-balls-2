const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var paper1
var dustbin1
var ground, groundSprite
var binImg,bin;
var paperImg
function preload(){
binImg = loadImage('images/dustbingreen.png')	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
paper1 = new Paper(100,300,20)
bin = createSprite(680,600,20,20);
bin.addImage(binImg);
bin.scale = 0.45;
dustbin1 = new Dustbin()
ground = Bodies.rectangle(400,665,800,10,{isStatic: true})
World.add(world, ground)
groundSprite = createSprite(400,665,800,10)
groundSprite.shapeColor = '#ffc600'
}

function draw() {
  background(0);
  paper1.display()
  dustbin1.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode == UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position, {x:16.5,y:-16.5})
}
}



