//CLOSURES
//function inside a function is called a closure

console.log("CLOSURES\n");

//function is treated as an object

function Vehicle(type,colour){
    Vehicle.INSTANCE_COUNT ++;
    this.type=type;
    this.colour=colour;
}

Vehicle.INSTANCE_COUNT=0;
Vehicle.prototype.getType= function () {
    return this.type;
}
Vehicle.prototype.getColour= function () {
    return this.colour;
}


function Car(type) {
    Vehicle.call(this,type); // 'this' is important
}

//creating a copy of the prototype
Car.prototype=Object.create(Vehicle.prototype);

Car.prototype.constructor=Car;

const car=new Car("Toyota");

console.log(car.getType());



function Car2(type,colour){
    Vehicle.call(this,type,colour);

}

Car2.prototype=Object.create(Vehicle.prototype);

Car2.prototype.constructor= Car2;

const car2= new Car2("Alto","Black");
console.log(car2.getType());
console.log(car2.getColour());