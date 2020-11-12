const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var polygon1;
var ground1,ground2;
var string;
var bg;


function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;


 
  
    polygon1=new polygon(450,600,30)

    box1 = new Box(650,500,50,70,PI);
    box2 = new Box(650,600,50,70,PI);
    box3 = new Box(650,700,50,70,PI);
    box10 = new Box(650,400,50,70,PI);

    box4= new Box(730,500,50,70,PI);
    box5 = new Box(730,600,50,70,PI);
    box6 = new Box(730,700,50,70,PI);
    box11= new Box(730,400,50,70,PI);

    box7= new Box(810,500,50,70,PI);
    box8 = new Box(810,600,50,70,PI);
    box9 = new Box(810,700,50,70,PI);
    box12 = new Box(810,400,50,70,PI);

   
   
    ground1 = new Ground(700,800,400,20);
    ground2 = new Ground(450,400,50,20);

    string= new wire(polygon1.body,{x:450, y:400});
    getTime(); 
}

function draw(){
    if(bg){

    background(bg);
    Engine.update(engine);

   
    polygon1.display();

    ground1.display();
    ground2.display();
    
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


  
    string.display();    
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}






    async function getTime(){
    var response =await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rjson = await response.json();
    var st =rjson.datetime;
    var ht=st.slice(11,13);
    
    if(ht>=6 && ht<=18){
        bg="white";
    } else{
        bg="black";
    }

    }
 
