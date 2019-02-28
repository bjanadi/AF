//example 1
console.log("EXAMPLE 1");

Person={
    name: "Janadi",
    getName : function() {
        console.log(this.name);
    }
}

Person.getName(); //Janadi
console.log(this); //Window object


//example 2
console.log("EXAMPLE 2");

function printName() {
    console.log(this.name);
}

printName();

 user={
    name: "Peter",
    printName: printName()
};

user.printName; //undefined


//example 3

console.log("EXAMPLE 3");

user2={
    name:"Himaya",
    age:20,
    getName: function () {
        console.log(this.name);
    },
    getAge : function () {
            console.log(this.age);

    },
    getAddress: function () {
        return function () {
            console.log("Maradana");
        }
    }
};

user2.getName();
user2.getAge();

var execute2= user2.getAddress();
execute2();

user3= {
    name: "BB",
    age: 23,
    Address: "Kandy"
};

console.log(user3.name + "\n" + user3.age);
execute2.call(user3);  // execute method is called to get user2's address therefore this is incorrect

var execute3= user3.Address;
console.log(execute3);

var boundedException=execute2.bind(user3);
boundedException();



