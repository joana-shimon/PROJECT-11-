var jaxonrunnig,jaxon
var path,pathimage
var invisibleEdgeRight
var invisibleEdgeLeft

function preload(){
  //pre-load images

  jaxonrunning= loadAnimation("Runner-1.png","Runner-2.png");
  pathimage = loadImage("path.png")



}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
    //creating path
  path= createSprite(200,200);
  path.addImage("path",pathimage);
  path.velocityY = 4
  path.scale= 1.2;

//creating invisible right edge
invisibleEdgeRight=createSprite(375,200,10,400)  
invisibleEdgeRight.visible=false
 
//creating invisible left edge
invisibleEdgeLeft = createSprite(25,200,10,400)
invisibleEdgeLeft.visible=false

  jaxon = createSprite(50,160,20,50);
  jaxon.addAnimation("runner", jaxonrunning);
  jaxon.scale = 0.08;



}
 
function draw() {
  background(0);

 //  if condition to reset the background
 if(path.y>400) 
 { path.y= height/2 }


 


   jaxon.x=mouseX
 


   jaxon.collide(invisibleEdgeLeft)
   jaxon.collide(invisibleEdgeRight)
   
  







drawSprites()
}
