class rop {
    constructor(a,b,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options_constarint={
    bodyA:a,
    bodyB:b,
   pointB:{x:this.offsetX,y:this.offsetY}
     }
    this.chain= Constraint.create(options_constarint) 
    World.add(world,this.rop)  ;
    
    }
    display(){
    strokeWeight(4);
    line(this.rop.bodyA.position.x,this.rop.bodyA.position.y,this.rop.bodyB.position.x,this.rop.bodyB.position.y);
    
    }
    
    
    
    }