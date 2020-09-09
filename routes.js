// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/learnjs.html',
        controller: 'homeController'
    })
    .when('/learnjs', {
        templateUrl: 'pages/learnjs.html',
        controller: 'learnjsController'
    }).
    when('/learnjs/learnjs100', {
        templateUrl: 'pages/learnjs_100.html',
        controller: 'learnjsController'
    }).
    otherwise('/');
    
});