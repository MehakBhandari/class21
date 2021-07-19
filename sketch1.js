var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(300 , 100,50,60);
  gameObject1.shapeColor= "pink";

  gameObject2 = createSprite(800 , 100,50,60);
  gameObject2.shapeColor= "pink";
  movingRect.velocityY = -2;
  fixedRect.velocityY = 2;
  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {

    background(0); 
    
    
    
    
  
    bounceOff(movingRect,fixedRect);
    bounceOff(gameObject1,gameObject2);
    drawSprites();
    

  }

 