var configValues = require('./config');
// File with require call to module pattern
var modulePatterns = require('./module-patterns');
// only exporting the function and not the entire module.exports object
var onlyFunctionExport = require('./module-patterns').funcPattern;
console.log('Hello NodeJS');
console.log(configValues.dbConfig.DATABASE_URL);

console.log(modulePatterns);
modulePatterns.funcPattern();
onlyFunctionExport();

console.log(modulePatterns.PersonObject);

var revealingModule = (function () {
    var privateVar = "Ben Thomas";
    function setNameFn( strName ) {
        privateVar = strName;
        console.log(privateVar);
    }
return {
        setName: setNameFn,
    };
})();
revealingModule.setName( "Paul Adams" );

modulePatterns.revealingModule.setName('Paul Adams');

