const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var computerBase, playerBase;
var computerPlayer, player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(windowWidth - windowWidth + 200, random(450, height - 300), 180, 150);
  playerBase = new PlayerBase(windowWidth - 500, random(450, height - 300), 180, 150);
  computerPlayer = new ComputerPlayer(windowWidth - windowWidth + 200,200, 150, 250 );
  player = new Player(windowWidth - 500,200, 150, 250);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#f5e000");
  textAlign("center");
  textSize(60);
  text("EPIC ", width / 3, 100);
  fill("#001be6");
  text(" ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerBase.display();
  playerBase.display();

   //display Player and computerplayer
  computerPlayer.display();
  player.display();

}
