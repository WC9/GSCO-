var car;
var wall;
var speed, weight;
var deformity;
var edges;

function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(750,200,30,200);
  edges = createEdgeSprites();
}

function draw() {
  background(0);
  
  car.collide(edges); 

  speed = random(30,100);
  weight = random(2000,3500);
  

  launchCar();
  calculate();
  
  car.collide(wall);

  


  drawSprites();
}

function launchCar(){
 if(keyDown("space")&&car.y===200){
   car.velocityX = speed;
 }
}

function calculate(){
  deformity = (speed*weight*0.5*speed)/22500;

  if(deformity<100
    &&
    car.x - wall.x < wall.width/2 + car.width/2
    && 
    wall.x - car.x < wall.width/2 + car.width/2
    && 
    car.y - wall.y < wall.height/2 + car.height/2
    && 
    wall.y - car.y < wall.height/2 + car.height/2){
    car.shapeColor="green";
  }

  if(deformity>100
    &&
    deformity<180
    &&
    car.x - wall.x < wall.width/2 + car.width/2
    && 
    wall.x - car.x < wall.width/2 + car.width/2
    && 
    car.y - wall.y < wall.height/2 + car.height/2
    && 
    wall.y - car.y < wall.height/2 + car.height/2){
    car.shapeColor="yellow";
  }

  if(deformity>180
    &&
    car.x - wall.x < wall.width/2 + car.width/2
    && 
    wall.x - car.x < wall.width/2 + car.width/2
    && 
    car.y - wall.y < wall.height/2 + car.height/2
    && 
    wall.y - car.y < wall.height/2 + car.height/2){
    car.shapeColor="yellow";
  }

  
}



