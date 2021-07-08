const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var division=[];
var plinko=[];
var particle=[];
var divisionHeight=300;

function setup() {
  createCanvas(805,700);
  engine = Engine.create();
  world=engine.world;

  ground=new Ground(400,700,810,20);

  for (var k=0; k<width; k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
    for (var j=75; j<=width; j = j+50) {
      plinko.push(new Plinko(j, 50));
    }
    for (var j=50; j<=width-10; j=j+50) {
      plinko.push(new Plinko(j,150));
    }
    for (var j=75; j<=width; j=j+50) {
      plinko.push(new Plinko(j,250));
    }
    for (var j=50; j<=width-10; j=j+50) {
      plinko.push(new Plinko(j,350));
    }
  
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER)
  background(0);  
  drawSprites();
  for (var n=0; n<division.length;n++){
    division[n].display();
  }
  for (var j=0; j<plinko.length;j++){
    plinko[j].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for (var h=0; h<particle.length;h++){
    particle[h].display();
  }
  ground.display();
}
