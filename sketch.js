var thickness,wall;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);
 //(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //car.shapeColor="red";
  wall.shapeColor="blue";
  bullet.velocityX=speed;
  //bullet.collide(wall);

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0 ;
    var damage=0.5 *weight* speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor(0,255,0);
    }
  }
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 *weight*speed*speed/22509;
    if(deformation<180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x=bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
