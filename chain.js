class chain {

    constructor (bodyA,bodyB){
        var options= {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.08,
            length:10
        }

        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }

    display (){
var pointA =this.chain.bodyA.position;
var pointB =this.chain.bodyB.position;
strokeWeight(6)
line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}