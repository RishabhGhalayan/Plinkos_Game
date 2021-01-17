var  Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var gameState = "start"


function setup() {
  createCanvas(800, 1200);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(width/2,height,width,20);
  ground1 = new Ground(-10,600,20,1200);
  ground2 = new Ground(810,height/2,20,1200);



   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 

  }

    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,475));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,575));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,675));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,775));
    }

   

}

 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);



  fill("white")
  textSize(30)
  text("500",735, 1100-divisionHeight/2)

  text("400",655, 1100-divisionHeight/2)

  text("500",15, 1100-divisionHeight/2)

  text("400",95, 1100-divisionHeight/2)

  text("300",175, 1100-divisionHeight/2)

  text("300",575, 1100-divisionHeight/2)

  text("200",495, 1100-divisionHeight/2)

  text("200",255, 1100-divisionHeight/2)

  text("100",335, 1100-divisionHeight/2)
  
  text("100",415, 1100-divisionHeight/2)

  text("Score:"+score,50,50)





  ground.display()
  ground1.display()
  ground2.display()

 

   if(frameCount%50===0){
     particles.push(new Particle(random(mouseX, width/2+50), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
      
   }

   for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      

    }  
   for (var k = 0; k < divisions.length; k++) {

     divisions[k].display();
   
}
 if(gameState==="end"){
 
  }
 
   
}


