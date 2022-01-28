var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var obstical1,obstical2,obstical3,obstical4,obstical5,obstical6;
var score

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 obstical1 = loadImage("obstacle1.png")
 obstical2 = loadImage("obstacle2.png")
 obstical3 = loadImage("obstacle3.png")
 obstical4 = loadImage("obstacle4.png")
 obstical5 = loadImage("obstacle5.png")
 obstical6 = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  score = 0

}

function draw() {
  background(180);
  text("Score"+score,500,50)
  score = score + Math.round(frameCount/60)
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnobsticals();
  drawSprites();
}
function spawnobsticals()
{
if(frameCount % 60 === 0){

var obstical = createSprite(600,165,10,40)
obstical.velocityX = -5
var rand = Math.round(random(1,6))
switch(rand){
case 1:obstical.addImage(obstical1);
break;

case 2:obstical.addImage(obstical2);
break;

case 3:obstical.addImage(obstical3);
break;

case 4:obstical.addImage(obstical4);
break;

case 5:obstical.addImage(obstical5);
break;

case 6:obstical.addImage(obstical6);
break;
default:break;


}
obstical.scale = 0.5
obstical.lifetime = 300

}
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

