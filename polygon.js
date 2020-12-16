class polygon{
constructor(x,y){
    var options={
'restitution':0.8,
'friction':0.3,
'density':1.0

}

polygon = Bodies.circle(50,200,20,options);
this.radius = 20
World.add(world,polygon);
}
display(){
var pos = this.body.position;
pos.x = mouseX;
pos.y = mouseY;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
circleMode(CENTER);
fill("orange");
circle(0,0,this.radius);
pop();

}



}