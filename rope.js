class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:tjis.offsetx, y:this.offsetY}
        } 
    this.Rope = Constraint.create(options);
    World.add(world,this.Rope);

    display(){
        var pointA = this.Rope.bodyA.position
        var pointB = this.Rope.bodyB.position
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
    }
}