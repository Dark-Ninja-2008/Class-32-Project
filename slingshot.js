class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 2
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
        
    }

    display(){
        line(this.sling1,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(0,0,0);
            strokeWeight(3);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            
            pop();
        }
    }
}