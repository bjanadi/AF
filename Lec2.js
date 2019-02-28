//Constructor Functions-Starts with a capital letter
//example 1
console.log("EXAMPLE 1");

function Vehicle(){
    this.type="Toyota";
    this.colour="Blue";
    this.getType = function(){
            return this.type;
    }
    this.getColour=function(){
        return this.colour;
    }
};

//when a constructor function is used with the 'new' keyword it becomes a class
var vehicle = new Vehicle();
console.log(vehicle.getType());
console.log(vehicle.getColour());
console.log(vehicle);


//example 2

console.log("EXAMPLE 2");

function Vehicle1(){
    this.type1="Nissan";
    this.colour1="red";
};

Vehicle1.prototype.getType1= function(){
    return this.type1;
};
Vehicle1.prototype.getColour1=function () {
    return this.colour1;
};

const vehicle1=new Vehicle1();
console.log(vehicle1.getType1());
console.log(vehicle1.getColour1());
console.log(vehicle1);


//example 3
console.log("EXAMPLE 3- creating a copy of the prototype Vehicle");


function Car(){

    Vehicle.call(this);
}

const car = new Car();

console.log(car);

Car.prototype= Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
console.log(car.getType());


//example 4

console.log("EXAMPLE 4");

function Vehicle2(type2) {
    this.type2=type2;

}

Vehicle2.prototype.getType2= function () {
    return this.type2;
}



function Car2(type2) {

     Vehicle2.call(this.type2);
 }
  const car2= new Car2("hyundai");

   console.log(car2);

