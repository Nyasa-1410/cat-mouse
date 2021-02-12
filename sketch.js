var cat,catImg,catImg2,catImg3,catImg4;
var mouse,mouseImg,mouseImg2,mouseImg3,mouseImg4;
var backgroundImg;

function preload() {
    catImg=loadImage("cat1.png");
    catImg2=loadImage("cat2.png");
    catImg3=loadImage("cat3.png");
    catImg4=loadImage("cat4.png");
    mouseImg=loadImage("mouse1.png");
    mouseImg2=loadImage("mouse2.png");
    mouseImg3=loadImage("mouse3.png");
    mouseImg4=loadImage("mouse4.png");
    backgroundImg=loadImage("garden.png");
    mouse.loadAnimation("teasing", mouseImg2,mouseImg3);
    cat.loadAnimation("catRunning",catImg2,catImg3);
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(700,500,30,30);
    cat.addImage(catImg);

    mouse=createSprite(700,200,20,20);
    mouse.addImage(mouseImg);

}

function draw() {

    background("backgroundImg");
    if(cat.x-mouse.x <(cat.width-mouse.width/2)){
        cat.addAnimation("catLastImage", catImg4);
        cat.changeAnimation("catLastImage");
        cat.velocityX=0;
        mouse.addAnimation("mouseLastImage", mouseImg4);
        mouse.changeAnimation("mouseLastImage");
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyCode=== LEFT_ARROW){
      cat.velocityX= -5;
      cat.addAnimation("catRunning", catImg2,catImg3);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("teasing",mouseImg2,mouseImg3);
      mouse.changeAnimation("teasing");
  }
}
