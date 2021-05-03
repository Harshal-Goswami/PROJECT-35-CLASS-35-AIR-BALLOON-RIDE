var AirBalloon1 , AirBalloonImg;

function preload(){
  var AirBalloonImg = loadImage ("Hot AirBalloon-01.png;")
}

function setup() {
  createCanvas(800,400);
var AirBalloon1 =   createSprite(400, 200, 50, 50);
AirBalloon1.addImage(AirBalloonIimg);
AirBalloon.scale = 0.2;
}

function draw() {
  background(255,255,255);
    if(keyDown(RIGHT_ARROW)){
    AirBalloon.X = AirBalloon.x+1;
  }
  if(keyDown(LEFT_ARROW)){
    AirBalloon.x = AirBalloon.x-1;
  }
  if(keyDown(UP_ARROW)){
    AirBalloon.y = AirBalloon.y-1;
  }
  if(keyDown(DOWN_ARROW)){
    AirBalloon.y = AirBalloon.y+1;
  }
  drawSprites();
}

function updateHeight(x,y){
 database.ref(AirBalloon/height).set({
  'x':height.x+ x ,
   'y':height.y+ y
 })
}

function readHeight(){
 height = data.val();
 AirBalloon.x = height.x;
 AirBalloon.y = height.y;
}

 function showError(){
  console.log("Error in writing to the database.");
 }