class Sling{
    constructor(bodyA1,pointB1){
        var options = {
            bodyA : bodyA1,
            pointB : pointB1,
            length : 10,
            stiffness: 0.004
        }
        this.sling =  Matter.Constraint.create(options);
       
       this.pointB = pointB1;
       World.add(world, this.sling);
    
  

}
fly(){
  this.sling.bodyA = null;
}
attach(){
this.bodyA=bodyA1

};




    display(){
        
          if(this.sling.bodyA){
            var pointA =this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(10);
            line(pointA.x,pointA.y, pointB.x, pointB.y);
          }
     
       
    }
     
    }
  
 