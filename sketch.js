
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var suvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  monkey=createSprite(60,230);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(375,290,1500,20);
  ground.velocityX=-4;
  
  score=0;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
  
  background("white");
  
  
  if(ground.x<=0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y>230){
    monkey.velocityY=-12;
  }
  
  
  
  console.log(monkey.y);
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  
  if(monkey.isTouching(FoodGroup)){
    
    monkey.velocityY=0;
    
    FoodGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
  }
  
  else if(monkey.isTouching(obstacleGroup)){
    
    monkey.velocityY=0;
    
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     
     
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  suvivalTime=Math.ceil(frameCount/frameRate())
  text("suvivalTime "+suvivalTime,100,50);
  
  obstacle();
  banana();
  drawSprites();
}

function banana(){
  if(frameCount%80===0){
    var banana = createSprite(600,165,10,40);
    banana.y=Math.round(random(30,150));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    
    banana.velocityX = -6;
    
    banana.lifetime=100;
    
    FoodGroup.add(banana);
  }
  
}

function obstacle(){
  if(frameCount%100===0){
    var obstacle = createSprite(600,245,10,40);
    // obstacle.y=Math.round(random(30,150));
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.scale=0.2;
    
    obstacle.velocityX = -7;
    
    obstacle.lifetime=100;
    
    obstacleGroup.add(obstacle);
  }
  
}