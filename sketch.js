
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var ground, stand;
var polygonImg;

function preload() {
    
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.rectangle(150, 300, 100, 50);
    
    
    ground = new Ground(200, 100, 200, 50);
    stand = new Ground(400, 200, 100, 30);
    
    box1 = new box(420, 240, 30, 40);
    box2 = new box(400, 280, 30, 40);
    box3 = new box(420, 280, 30, 40);
    box4 = new box(440, 280, 30, 40);
    box5 = new box(380, 320, 30, 40);
    box6 = new box(400, 320, 30, 40);
    box7 = new box(420, 320, 30, 40);
    box8 = new box(440, 320, 30, 40);
    box9 = new box(460, 320, 30, 40);
    box10 = new box(360, 360, 30, 40);
    box11 = new box(380, 360, 30, 40);
    box12 = new box(400, 360, 30, 40);
    box13 = new box(420, 360, 30, 40);
    box14 = new box(440, 360, 30, 40);
    box15 = new box(460, 360, 30, 40);
    box16 = new box(480, 360, 30, 40);

    slingshot = new Slingshot(polygon.body, {x : 300, y: 300});
    


    
}

function draw(){

    background(0);

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   slingshot.display();

    ground.display();
    stand.display();
    //slingshot.display();

    Engine.update(engine);
   
}


function mouseDragged(){
    
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

