
const
Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;
Mouse = Matter.Mouse;
MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

var platform;

var boxes;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

var dragBody;

var con;

var released;

var attempts, score;

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  box1 = new BaseClass(820, 575, 40, 40);
  box2 = new BaseClass(860, 575, 40, 40);
  box3 = new BaseClass(900, 575, 40, 40);
  box4 = new BaseClass(940, 575, 40, 40);
  box5 = new BaseClass(980, 575, 40, 40);
  box6 = new BaseClass(1020, 575, 40, 40);
  box7 = new BaseClass(1060, 575, 40, 40);
  
  box8 = new BaseClass(860, 535, 40, 40);
  box9 = new BaseClass(900, 535, 40, 40);
  box10 = new BaseClass(940, 535, 40, 40);
  box11 = new BaseClass(980, 535, 40, 40);
  box12 = new BaseClass(1020, 535, 40, 40);
  
  box13 = new BaseClass(900, 495, 40, 40);
  box14 = new BaseClass(940, 495, 40, 40);
  box15 = new BaseClass(980, 495, 40, 40);
  
  box16 = new BaseClass(940, 455, 40, 40);

  boxes = [];
  boxes.push(box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16);

  dragBody = new DragBody(400, 400);

  ground = new Ground(800, 780, 1600, 40, [139,69,19]);
  platform = new Ground(940, 600, 280, 10, [139,69,19]);

  con = new Slingshot(dragBody.body, 50, 0.01, {x:0, y:0}, {x:400, y:400});

  birdReleased = false;

  attempts = 0;
  score = 0;

  Engine.run(engine);
}

function draw()
{
  background(25);

  
  
  ground.display();
  platform.display();

  dragBody.display();

  for (var i = 0; i < boxes.length; i++)
  {
      boxes[i].display("skyblue");
      if (!con.bodyReleased && attempts == 0)
    {
        boxes[i].resetPosition();
    }
  }

  dragBody.display();

  con.drawLine([45, 23, 11], 10);

  fill("white");
  textAlign(CENTER);
  textSize(50);
  text("Attempts: " + attempts + "/3 used", width/2, height/5);
//   text("Score: " + score, width/2, height*2/5);
}

function mouseDragged()
{
  if (con.bodyReleased)
  {
    return;
  }
  Matter.Body.setPosition(dragBody.body, {x:mouseX, y:mouseY});
  Matter.Body.setAngularVelocity(dragBody.body, 0);
  Matter.Body.setAngle(dragBody.body, 0);
}

function mouseReleased()
{
  if (con.bodyReleased)
  {
    return;
  }
  con.shootBody();
  attempts++;
}

function keyPressed()
{
  if (keyCode == 32 && (dragBody.body.speed <= 1 || (dragBody.body.position.x > width || dragBody.body.position.x < 0 || dragBody.body.position.y > height || dragBody.body.position.y < 0)))
  {
    if (attempts >= 3)
    {
      attempts = 0;
      score = 0;
    }
    con.resetBody(dragBody.body);
  }
}