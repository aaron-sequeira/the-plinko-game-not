class Plinko {
constructor(x,y,r){
var options = {

isStatic:true 
 
}

this.plinko = Bodies.circle(x,y,this.r,options);
this.r = r;


World.add(world,this.plinko);


}

display(){
var pos = this.body.position;

fill("white")
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.r); 


}




}