// DIRECTIVES - From Jeetan Madaan

app.directive("customHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/custom-header.html',
        replace: true
    }
});