var castleImg, castle;
var princessImg, princess, princessesGroup;
var dragonImg1, dragon1, dragonImg2, dragon2, dragonImg3, dragon3, dragonsGroup;

var knight, knightImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var sky, skyImg

function preload(){
  castleImg = loadImage("castle.png");
  princessImg = loadImage("princess.png");
  dragonImg = loadImage("dragon.png");
  knightImg = loadImage("knight.png");
  skyImg = loadImage("sky.jpg");
 // spookySound = load
}
function setup() {
  createCanvas(600,600);
//  spookySound.loop();
  castle = createSprite(250,250,100,100);
  castle.scale = 3.3;
  castle.addImage("castle",castleImg);
//  castle.velocityY = 1;
  
  princessesGroup = new Group();
  dragonsGroup = new Group();
  invisibleBlockGroup = new Group();
 
  knight = createSprite(160,365,50,50);
  knight.scale = 0.7;
  knight.addImage("knight", knightImg);
}


function draw() {
  background(skyImg);
  spawnPrincesses();

knight.x = World.mouseX

   if(castle.y > 600) {
      castle.y = 300
    } 
  
     


  
     if(dragonsGroup.isTouching(knight)){
      dragonsGroup.destroy();
    
    }
    if(invisibleBlockGroup.y>370){
       gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }




function spawnPrincesses()
 {

  if (frameCount % 390 === 0) {
    var princess = createSprite(290, -50);
    princess.scale = 0.6;
    var dragon = createSprite(290,10);
    
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = dragon.width;
    invisibleBlock.height = 2;
    
    princess.addImage(princessImg);
    dragon.addImage(dragonImg);
    
    princess.velocityY = 3;
    dragon.velocityY = 3;
    invisibleBlock.velocityY = 3;

  
    
     
knight.depth = princess.depth;
    knight.depth = knight.depth+1;
    
  
 princess.lifetime = 800;
    dragon.lifetime = 800;
    invisibleBlock.lifetime = 800;
    
    
     princessesGroup.add(princess);
    invisibleBlock.debug = false;
    dragonsGroup.add(dragon);
    invisibleBlockGroup.add(invisibleBlock);
  }
} 

