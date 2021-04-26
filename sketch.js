const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new Iron(700,320,70,70);
    box2 = new Iron(300,320,70,50);
    rubber = new Rubber(900,450,70)
    stone1 = new Stone(310,320,10)
    stone2 = new Stone(320,320,10)
    stone3 = new Stone(330,320,10)
    stone4 = new Stone(340,320,10)
    stone5 = new Stone(350,320,10)
    stone6= new Stone(360,320,10)
    stone7 = new Stone(370,320,10)
    stone8 = new Stone(380,320,10)
    stone9 = new Stone(390,320,10)
    stone10 = new Stone(400,320,10)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display()
    box2.display()
   rubber.display()
  stone1.display()
  stone2.display()
  stone3.display()
  stone4.display()
  stone5.display()
  stone6.display()
  stone7.display()
  stone8.display()
  stone9.display()
  stone10.display()
}