class Constraints{
    constructor(bodyA, bodyB){
        var constraintOptions = {
            stiffness : 0.5,
            objectA : bodyA,
            objectB : bodyB,
            legnth : 10
            }

        this.cons = Matter.Constraint.create(constraintOptions);
        World.add(world, this.cons);
        
    }

    showConstraints(){
        strokeWeight(5);
        line(bodyA.position.x, this.cons.bodyA.position.y, this.cons.bodyB.position.y, this.cons,bodyB,position.y);
    }
}