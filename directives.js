// DIRECTIVES - From Jeetan Madaan

app.directive("customHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-header.html',
        replace: true
    }
});

app.directive("learnjsSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/learnjs-side-menu.html',
        replace: true
    }
});

app.directive("nodejsSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/nodejs-side-menu.html',
        replace: true
    }
});