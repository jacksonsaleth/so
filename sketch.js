
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,stone,plants,mango,mango1,mango2,mango3,mango4,sling,man;
function preload()
{
}

function setup() {
  engine = Engine.create();
	world = engine.world;
	createCanvas(1000, 500);
 

  //Create the Bodies Here.
  ground=new Ground(500,400,width,10);
  plants=new Tree(450,200,400,400);
  mango=new Mangoes(450,150,50,50);
  mango1=new Mangoes(435,50,50,50);
  mango2=new Mangoes(320,150,50,50);
  mango3=new Mangoes(545,150,50,50);
  mango4=new Mangoes(500,100,50,50);
  stone=new Stone(100,250,30,30);
  man=new Boy(100,370,150,150);
  sling=new Sling(stone.body,{x:50,y:325}); 
  plants.debug=true;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  ground.display();
  man.display();
  plants.display();
 stone.display();
 mango.display();
 sling.display(); 
mango1.display();
mango2.display();
mango3.display();
mango4.display();
detectCollision(stone,mango);
drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


function keyPressed(){
if(keyCode===32){
Matter.body.setPosition(stone.body,{x:700,y:700})
sling.attach(stone.body); 
}

}

function  detectCollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){

  Matter.Body.setStatic(mango.body,false);
}
}