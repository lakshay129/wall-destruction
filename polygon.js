class polygon{
    constructor(x,y,radius,angle){
        var options={
            density:1,
            frictionAir:0.005
            
        }
        
        this.x=x;
        this.y=y;
        this.radius=radius
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
       
        World.add (world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop ();
    }
}