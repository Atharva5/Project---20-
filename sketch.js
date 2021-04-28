var car, wall;



var  weight, speed;


function setup() {
  createCanvas(800,400);

  weight = random(400,1500);
speed = random(55,90);


  car = createSprite(50,200,80,30);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(750,200,20,300);
  wall.shapeColor = "brown";
  
}

function draw() {
  background(0);
  
  

  

  if(car.isTouching(wall)){
    car.velocityX = 0;
  



   var deformation = 0.5 *weight *speed *speed/22509;
   if(deformation > 180)
   {
     car.shapeColor = color(255,0,0);
   }
   if(deformation < 180 && deformation > 100)
   {
     car.shapeColor = color(230,230,0);
   }
   if(deformation < 100)
   {
     car.shapeColor = color(0,255,0);
   }
}


  drawSprites();
}
