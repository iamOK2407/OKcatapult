class Catapult {
     constructor (BodyA,pointB){
    var puff={
        bodyA:BodyA,
        pointB:pointB,
        stiffness:0.2,
        length:14
    }
    this.kirti=Constraint.create(puff)
    this.Image=loadImage("Cataplult.png")
    World.add(world,this.kirti)
     }
    display(){
        image(this.Image,150,90,150,150)
        if(this.kirti.bodyA){
        line(this.kirti.bodyA.position.x,this.kirti.bodyA.position.y,this.kirti.pointB.x,this.kirti.pointB.y)
        }
    }
//because of this below fly function we released
// our body or me from kirti constraint and then to
// help for not disapearing the body we gave this above display and gave the if condition!
    fly(){
        this.kirti.bodyA=null
    }

}