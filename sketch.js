var spacebg,spacecraft1,spacecraft2,spacecraft3,spacecraft4,iss_img;
var iss;
var spacecraft;
var hasDocked=false;
function preload(){
  spacebg=loadImage("spacebg.jpg")
  spacecraft1=loadImage("spacecraft1.png")
spacecraft2=loadImage("spacecraft2.png")
spacecraft3=loadImage("spacecraft3.png")
spacecraft4=loadImage("spacecraft4.png")
iss_img=loadImage("iss.png");




}
function setup() {
  createCanvas(1200,800);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(iss_img,"iss_pic");
  iss.scale=0.75;
  spacecraft=createSprite(200,200);
  spacecraft.scale=0.2;
  spacecraft.addImage(spacecraft1,"spacecraft_pic1");
  if(!hasDocked){
    spacecraft.x=random(200,1000);
    spacecraft.y=random(200,600);
  }
}

function draw() {
  background(spacebg); 
  if(!hasDocked){
    spacecraft.x+=random(-1,1);
    
  }
  if(!hasDocked){
    console.log(spacecraft.x+"x");
    console.log(spacecraft.y +"y");
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3);
      spacecraft.x-=2;
      
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4)
      spacecraft.x+=2;
      
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2;
      
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2);
      spacecraft.y+=2;
      
    }
  }
  if(spacecraft.x<=iss.x-20 && spacecraft.y<=iss.y+80){
    console.log(spacecraft.x)
    console.log(spacecraft.y)
    hasDocked=true;
    textSize(50);
    text("Docking Successful!", 500,300)
  }
  drawSprites();
}