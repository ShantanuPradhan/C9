var box



function setup() {
  createCanvas(600,600);
  box = createSprite(200,200,100,100)
}

function draw() 
{
  background("blue");
  if(keyIsDown(RIGHT_ARROW)){
box.x +=5
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x -=5
      }
drawSprites()
}




