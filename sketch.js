var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-50;
  ground.x=ground.width/2;
  console.log(ground.x) 
  
  score = 0;

  
}


function draw() {
  background(255);
  
 text("Score"+ score , 500 , 50);
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime , 100, 50)
  
  
  spawnObstacles();
  spawnBanana();
 
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

    if(keyDown("space") ) {
      monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
  obstaclesGroup = createGroup();
 
  drawSprites();
  
}

function spawnObstacles(){
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,350,40,10);
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;  
    
    //add each cloud to the group
    obstaclesGroup.add(obstacle);
  }
  
   
}

function spawnBanana(){
  
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,350,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    
     //assign lifetime to the variable
    banana.lifetime = -1;
  }
  
}





