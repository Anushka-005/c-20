var FR;
var MR;


function setup() {
  createCanvas(1200,800);
  FR = createSprite(200,200,50,80);
  MR = createSprite(400,200,80,30);
  FR.shapeColor = "green";
  MR.shapeColor= "green";

  
}

function draw() {
  background(0);  
  MR.x = World.mouseX;
  MR.y = World.mouseY;
  console.log(MR.x - FR.x);
  if(MR.x - FR.x < FR.width/2 + MR.width/2&&FR.x - MR.x<FR.width/2 + MR.width/2&&
    FR.y - MR.y < FR.height/2 + MR.height/2&& MR.y - FR.y < MR.height/2 + FR.height/2){
    FR.shapeColor = "red";
    MR.shapeColor= "red";
  }
  else{
    FR.shapeColor = "green";
    MR.shapeColor= "green";
  }
  drawSprites();
}