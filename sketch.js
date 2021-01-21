var movingRect,fixedRect;

var value, rect1,rect2,rect3;
var up,down;
function setup() {

  createCanvas(800,400);
 fixedRect= createSprite(600, 200, 100, 100);
 movingRect=createSprite(100,200,60,70);

rect1 = createSprite(200, 200,50,50);
rect2 = createSprite(300, 200,50,50);
rect3 = createSprite(400, 200,50,50);

up= createSprite(650,100,50,50);
down = createSprite(650,300,50,50)

up.velocityY = 4;
down.velocityY = -4;


 fixedRect.shapeColor="green";
 movingRect.shapeColor="green";

 movingRect.debug=true;
 fixedRect.debug=true;

}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  value = collide(movingRect,rect2);

  if(value === true){
    fixedRect.shapeColor="orange";
    rect2.shapeColor="orange";
  }
  else{
    fixedRect.shapeColor="green";
    rect2.shapeColor="green";
  }

  bounceoff(up,down);

 
     
  
  drawSprites();
}

