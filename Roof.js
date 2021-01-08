class Roof {
    constructor(){
        var option = {
            isStatic: true


        }
        this.body = Bodies.rectangle(400,100,300,10,option)
        World.add(world,this.body)
    }
    display(){
        rect(this.body.position.x,this.body.position.y,300,10);
    }
}