// Logging in JS
console.log('In Learn JS-100');

// Hoisting
var xHoisting; // x should be undefined
console.log('Initial value of x: ' + xHoisting);
xHoisting = 3;

fHoisting();
function fHoisting() {
    console.log ('Function is hoisted before it is called');
}

// Scope Chain
var xScopeVar = 5;
console.log ('Variable in Global Scope: ' + xScopeVar );
var fScope = function () {
    var xScopeVar = 4;
    console.log ('Variable in function Scope: ' + xScopeVar);

    //Variable Assignment without var in function scope
    /* Variable will be hoisted in global scope with value of undefined, 
    though  we are trying to assign in function scope */
    yScopeVar = 2;
    console.log ('Trying to create variable in function scope without var keyword: ' + fScope.yScopeVar);
    console.log ('Variable gets created in global scope: ' + yScopeVar);
}
fScope();

// Objects
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}
console.log ('Person Object: ' + JSON.stringify(person));

// Arrays
var arr =  ['hello', 2, {fname: 'john', lname: 'doe' }, true];
console.log('Array: ' + arr);

// Fuunctions
var logPerson= function () {
    var fname = person.firstname;
    var lname = person.lastname; 
    var name = 'fname' + ' ' + 'lname';
    console.log ('In Log Name Function: ' + name);
}
logPerson();

//IIFE
(function (name) {  var greeting = 'Hello'; 
                    console.log('IIFE: ' + greeting + ' '+ name);
                 }('John'));

// Closure
function greetLater() { 
                        var greeting = 'Hello John'; 
                        setTimeout(function()
                            {
                                console.log('Inner Function has a closure on greeting');
                                console.log('Closure: ' + greeting);
                            },3000);
                    } 
greetLater();

// Call, Apply, Bind
var logName= function (param1, param2) {
     console.log("Function to use bind, call and apply");
     console.log('Logged: ' + this.getFullName());
}

// Use bind to make copy of the function
var logPersonName = logName.bind(person);
logPersonName();

// Use Call or Apply for function borrowing

var jane = {
    firstname: 'Jane',
    lastname: 'Doe'
}
console.log("Use call to log Jane by borrowing function from person: " + person.getFullName.call(jane, 'a1', 'a2'));
console.log("Use apply to log Jane by borrowing function from person: " + person.getFullName.apply(jane, ['a1', 'a2']));

// Currying

function multiply (a,b) {
    return a*b;
}

var multiplyBy2 = multiply.bind(this, 2);
console.log('preset parameters with currying: ' + multiplyBy2(5));