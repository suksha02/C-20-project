var fixedRect,movRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,200,50,50);
  movRect = createSprite(600,200,80,30);
  
  fixedRect.shapeColor = "green";
  movRect.shapeColor = "green";
}

function draw() {
  background("blue"); 
  
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if(movRect.x - fixedRect.x < fixedRect.width/2 + movRect.width/2 &&
     fixedRect.x - movRect.x < fixedRect.width/2 + movRect.width/2 &&
      movRect.y - fixedRect.y < fixedRect.width/2 + movRect.width/2 &&
     fixedRect.y - movRect.y < fixedRect.width/2 + movRect.width/2)
  {
    fixedRect.shapeColor = "red";
    movRect.shapeColor = "red";
  }
else 
  {
    fixedRect.shapeColor = "green";
    movRect.shapeColor = "green";
  }

  drawSprites();
}