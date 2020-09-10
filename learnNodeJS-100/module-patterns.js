// Creating export object to display differnt ways of exporting modules
var patternexports = {
    message : 'Export Object to display differnt ways of exporting modules'
}
// module-pattern.js: Exporting function with a function definition
patternexports.funcPattern =  function() {
    console.log ('Exporting as a function with funcPattern');
}

function Person () {
    this.firstName = 'John';
    this.lastName = 'Doe';
}
// Exporting Object created from Function Constructor
patternexports.PersonObject = new Person();


var privateName = "Ben Thomas";
var publicName = 'John Doe'; 
function setNameFn( strName ) {
    publicName = strName;
    console.log('With Node Object: ' + publicName);
}   
function getPrivateNameFn() {
    return privateName;
}
patternexports.revealingModule = {
    setName : setNameFn,
    getName: getPrivateNameFn
}
module.exports = patternexports; 