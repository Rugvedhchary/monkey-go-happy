
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var  obstacleGroup
var score
var ground
var bananaGroup




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 

}



function setup() {
createCanvas(400,400)
monkey=createSprite(50,310,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
 ground=createSprite(60,350,690,20)
  ground.velocityX = -7
ground.x = ground.width /2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
 
  
}


function draw() {
background("red") ; 
  
 
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
monkey.velocityY = monkey.velocityY + 0.8
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
    monkey.collide(ground);
   
food()  
 obstacle()
  
  
  drawSprites()
}    
  
function food(){
if(frameCount%80===0){
  banana=createSprite(400,60,100,20);
  banana.velocityX=-6;
  banana.y = Math.round(random(80,120));
   banana.addImage("banana",bananaImage);
   banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  
  bananaGroup.add(banana)
}
  
}  
 function obstacle(){
  if(frameCount%300===0){
  obstacles=createSprite(400,300,100,20);
  obstacles.velocityX=-6;
   obstacles.addImage("obstacle",obstacleImage);
   obstacles.scale = 0.1;
  obstacles.velocityX = -3;
  
    obstacles.lifetime = 200;
    
    obstacleGroup.add(obstacles)
 } 
  
 } 
  
  
  
  

