// DIRECTIVES - From Jeetan Madaan

app.directive("customHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-header.html',
        replace: true
    }
});

app.directive("customFooter", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-footer.html',
        replace: true,
        scope:{
            authorname:"@",
            linkurl:"@"
        }
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

app.directive("integrationSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/integration-side-menu.html',
        replace: true
    }
});

app.directive("platformSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/platform-side-menu.html',
        replace: true
    }
});

app.directive("homeSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/home-side-menu.html',
        replace: true
    }
});