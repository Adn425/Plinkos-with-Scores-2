Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var particle;

var divisionHeight = 300;
var score = 0;

var count = 0;

var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");

  stroke("white");
  textSize(18);
  fill("white");
  text("Score: " + score, 650, 35);
  text("500", 25, 525);
  text("500", 100, 525);
  text("300", 180, 525);
  text("300", 260, 525);
  text("100", 340, 525);
  text("100", 420, 525);
  text("300", 500, 525);
  text("300", 580, 525);
  text("500", 660, 525);
  text("500", 740, 525);

  Engine.update(engine);
 
 
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     
   }
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 */
  /*for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
  
   if(particle!=null){
      particle.display();
       
       if (particle.body.position.y>760) {
          if (particle.body.position.x < 150) {
            score=score+500;      
            particle=null;
            if ( count>= 15) gameState ="end";                           
          }

          else if (particle.body.position.x < 340 && particle.body.position.x > 151) {
            score = score + 300;
            particle=null;
              if ( count>= 5) gameState ="end";
          }
        
          else if (particle.body.position.x < 500 && particle.body.position.x > 341) {
            score = score + 100;
            particle=null;
              if ( count>= 5)  gameState ="end";
          }     
          else if (particle.body.position.x < 580 && particle.body.position.x > 501) {
            score = score + 300;
            particle=null;
              if ( count>= 5) gameState ="end";
          } 
          else if (particle.body.position.x < 800 && particle.body.position.x > 581) {
            score = score + 500;
            particle=null;
              if ( count>= 5) gameState ="end";
          } 
       }
     }
     if(gameState == "end") {
      stroke("white");
      textSize(30);
      fill("white");
      text("Game Over!", 300, 230);
     }
}

function mousePressed() {
  if(gameState === "start") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
