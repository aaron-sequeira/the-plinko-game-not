const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies
var world,engine;

var particles = [];
var plinkos = [];
var divisions= [];
var divisionHeight = 300; 
function setup() {
 
  createCanvas(480,800);
  
//engine and world has been created 
    engine = Engine.create();
    world = engine.world; 

 for (var k = 0; k <= width; k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  
}

for (var j = 40; j <= width; j=j+50){

   plinkos.push(new Plinko(j,75));
}

  for (var j = 15; j <= width-10; j=j+50) {
      
    plinkos.push(new Plinko(j,175));
  } 
 





}

function draw() {
  background(255,255,255);  
  drawSprites();

 for (var j = 0; j < particles.length; j++) {
   particles[j].display();  
 }

 for (var j = 0; j < divisions.length; k++) {
  divisions[k].display();
}
for (var j = 0; j < plinkos.length; j++) {
  plinkos[j].display();    
} 

if (frameCount%90===0) {
 particles.push(new Particle(random(width/2-10,width/2+10),10,10));  
}

}








