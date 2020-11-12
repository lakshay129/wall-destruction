class Box{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.4,
            friction:0.8,
            density:1,
            isStatic:false
        }
      
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        this.color=color(random(0,225),random(0,225),random(0,255));
        World.add (world,this.body);


    }
    display(){
     
            var angle=this.body.angle;
            var pos=this.body.position;
            push ();
            translate(pos.x,pos.y);
            rotate(angle);
            fill (this.color)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ();
        }

}
