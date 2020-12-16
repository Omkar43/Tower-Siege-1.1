const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;
var chain1

function preload(){
 polygonImg=loadImage("sprites/polygon.png");
  
}
function setup(){
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

platform1 = new Ground(600,500,250,10);

platform2 = new Ground(950,300,200,10);

// platform 1 , level 1

box1 = new Box(510,340,30,40);
box2 = new Box(540,340,30,40);
box3 = new Box(570,340,30,40);
box4 = new Box(600,340,30,40);
box5 = new Box(630,340,30,40);
box6 = new Box(660,340,30,40);
box7 = new Box(691,340,30,40);

//level 2

box8 = new Box(540,280,30,40);
box9 = new Box(570,280,30,40);
box10 = new Box(600,280,30,40);
box11 = new Box(630,280,30,40);
box12 = new Box(660,280,30,40);

//level 3

box13 = new Box(570,240,30,40);
box14 = new Box(600,240,30,40);
box15 = new Box(630,240,30,40);

//level 4

box16 = new Box(600,200,30,40)


// platform 2 , level 1

box17 = new Box(890,290,30,40);
box18 = new Box(920,290,30,40);
box19 = new Box(950,290,30,40);
box20 = new Box(980,290,30,40);
box21 = new Box(1000,290,30,40);

// level 2

box22 = new Box(920,260,30,40);
box23 = new Box(950,260,30,40);
box24 = new Box(980,260,30,40);

//level 3

box25 = new Box(950,220,30,40)

var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}


function draw(){

    background("lightpink");
    Engine.update(engine);
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
     fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("green");
    box13.display();
    box14.display();
    box15.display();
    fill("white");
    box16.display();
    fill("green");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("white");
    box22.display();
    box23.display();
    box24.display();
    fill("orange");
   box25.display();
    platform1.display();
    platform2.display();
    imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
chain1.display();
   drawSprites();
    
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
