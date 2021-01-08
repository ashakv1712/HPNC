class Rope {
    constructor(body1, body2, xOffset){
        var option = {
            bodyA: body1, 
            bodyB: body2
            pointB: {x: xOffset, y: 0}
        }
        this.rope = Constraint.create(option);
        this.xOffset = xOffset;
        World.add(world,this.body)
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y)
    }
}