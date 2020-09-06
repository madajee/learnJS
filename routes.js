// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
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