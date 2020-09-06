// Object Literal

var carLiteral = { make: 'Nissan', model: 'Altima' }
console.log ('Object with object literal '  + JSON.stringify(carLiteral));

// Object Constructor
const carObjectConstructor = new Object();
carObjectConstructor.make = 'nissan';
console.log('Object Constructor ' + JSON.stringify(carObjectConstructor));

//Function Constructor
function carFunctionContructor(make, model) {
	this.make = make;
	this.model =  model;
}

carFunctionContructor.prototype.displayCarInfo = function () {
    console.log ('Car with Make: ' + this.make + ' Model: ' + this.model);
} 

let vehicleA = new carFunctionContructor('toyota', 'camry');
let vehicleB = new carFunctionContructor('honda', 'civic');
console.log('Object with Function Constructor ' + JSON.stringify(vehicleA));
console.log('VehicleA will have a prototype of Construtor Function Object: '+ vehicleA.__proto__);
console.log(vehicleA.__proto__.constructor) ;
console.log(vehicleB.__proto__.constructor) ;
console.log(carFunctionContructor.constructor) ;

vehicleA.displayCarInfo();
vehicleB.displayCarInfo();

// Creating objects with prototype
var car = { make: 'Default', model: 'Default', 
            displayInfo: function () 
                        {
                            console.log('Car with Make: ' + this.make + ' Model: ' + this.model);
                        }
        } 
const camry = Object.create(car);
camry.make = 'Toyota';
camry.model = 'Camry';
console.log( 'Proto Object    : ' + JSON.stringify(camry.__proto__));

// Prototype Inheritance

function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname 
}
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
var john = new Person('John', 'Doe');
console.log(john.getFullName());

// ES6 Class

class carES6 { 
	constructor(make, model) {
		this.make = make;
        this.model =  model;
    }
    displayCar() {
        return ('Car with Make: ' + this.make + ' Model: ' + this.model);
    }
}
let vehicleES6 = new carES6('toyota', 'camry');
console.log(vehicleES6.displayCar());

// Encapsulation
function PersonEnc(firstname, lastname) {
   let fname= firstname;
   let lname= lastname;
   this.getFullName = function() {
    return fname + ' ' + lname; 
   } 
}
var johnenc = new PersonEnc('John', 'Doe');
console.log('fname and lname can only bbe accessed in getFullName: ' +johnenc.fname);
console.log(johnenc.getFullName());
