const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){

}
function setup(){
  createCanvas(1400,800)
  engine=Engine.create();
  world=engine.world;
  wall1=new Maze(800,260,300,PI/3)
}
function draw(){
  background("purple")
  Engine.update(engine);
  wall1.display();
}
