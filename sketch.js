var R1,R1
function setup() {
  createCanvas(800,400);
  R1 = createSprite(400, 100, 50, 50);
  R2 = createSprite(400, 300, 50, 50);
  R1.velocityY=5;
  R2.velocityY=-5;
  R1.shapeColor = "blue"
  R2.shapeColor = "red"
}

function draw() {
  background("black"); 
  if(R1.x-R2.x<R1.width/2+R2.width/2 && R2.x-R1.x<R1.width/2+R2.width/2){
    R1.velocityX=R1.velocityX*(-1);
    R2.velocityX=R2.velocityX*(-1);


  }
    
  if(R1.y-R2.y<R1.height/2+R2.height/2 && R2.y-R1.y<R1.height/2+R2.height/2){
    R1.velocityY=R1.velocityY*(-1);
    R2.velocityY=R2.velocityY*(-1);
  }
  drawSprites();
}