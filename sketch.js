const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var division=[];
var divisionHeight=300;
function setup() {
  
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground=new Ground(250,790,480,20)
  for(var k=0;k<=width;k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

  }
  console.log(width)
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k=0;k<division.length;k=k+1){
    division[k].display()

  }
for(var k=0;k<plinkos.length;k++){
  plinkos[k].display()
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
for(var k=0;k<particles.length;k++){
  particles[k].display()
}
ground.display()
  drawSprites();

}