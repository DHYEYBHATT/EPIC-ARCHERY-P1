const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./background.png");
  baseimage = loadImage("./base.png");
  playerimage = loadImage("./player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  var options = {
    isStatic: true
  };
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world, playerBase);
  
    
  //create player body
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world, player);



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,10);
  image(playerimage,player.position.x,player.position.y,50,160);
  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
