var bg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obstaclesGroup;
function preload(){

backgroundImage = loadImage("path.png");
jakeimage=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png")
collidesound=loadSound("sounds/collided.wav")
jumpsound=loadSound("sounds/jump.wav");
// gamoverimg=loadImage("gameOver.png");
// restartimg=loadImage("restart.png");
obstacleimg=loadImage("ob1.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg = createSprite(width/2,0,width-100,height-2000);
 bg.addImage(backgroundImage);
 bg.scale = 1.5
 bg.velocityY = -7;
 jake=createSprite(width/2,height/2+220,30,30)
 jake.addAnimation("running",jakeimage)

 obstaclesGroup = new Group();
//  gameOver = createSprite(width/2,height/2- 50);
//  gameOver.addImage(gameOverImg);
 
//  restart = createSprite(width/2,height/2);
//  restart.addImage(restartImg);
 
//  gameOver.scale = 0.5;
//  restart.scale = 0.1;

//  gameOver.visible = false;
//  restart.visible = false;
 
}

function draw() 
{
  background(30);

  if (gameState===PLAY){
  if (bg.y < 500){
    bg.y = 600;
  }
  // jake.x=World.mouseX;
  if(keyIsDown(LEFT_ARROW)){
    jake.x=jake.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    jake.x=jake.x+5;
  }
  spawnObstacles()
  }
  else if (gameState === END) {



  }
  drawSprites()
}
function spawnObstacles() {
  //write code here to spawn theobstacles
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(width/2,height-800,40,10);
   obstacle.x= Math.round(random(width/2,width/2+300));
   obstacle.addImage(obstacleimg);
   obstacle.scale = 0.5;
   obstacle.velocityY = 3;
    
     //assign lifetime to the variable
   obstacle.lifetime = 300;
    
    //adjust the depth

    
    //add eachobstacle to the group
   obstaclesGroup.add(obstacle);
  }
  
}


function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
 obstaclesGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  score = 0;
  
}