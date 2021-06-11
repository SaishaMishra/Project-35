var ballon, backgroundImage1, ballonImage;

function preload(){
backgroundImage1 = loadImage("images/Hot Air Ballon-01.png")
ballonImage = loadAnimation("images/Hot Air Ballon-02.png", "images/Hot Air Ballon-03.png","images/Hot Air Ballon-04.png")

}
function setup() {
  createCanvas(1000,500);


  ballon = createSprite(200,200,50,50)
  ballon.addAnimation('ballonImages', ballonImage )

  
}

function draw() {
  background(backgroundImage1);
  
  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x+10
  }
  if(keyDown(UP_ARROW)){
    ballon.y = ballon.y-10
    ballon.scale = ballon.scale-0.01;
  }
  if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y+10
    ballon.scale = ballon.scale+0.01;
  }
  drawSprites();
}