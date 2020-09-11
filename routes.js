// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/learnjs', {
        templateUrl: 'pages/learnjs/learnjs_100.html',
        controller: 'learnjsController'
    }).
    // when('/learnjs/learnjs100', {
    //     templateUrl: 'pages/learnjs_100.html',
    //     controller: 'learnjsController'
    // }).
    when('/learnjs/:learnjsid', {
        templateUrl: function (param) {
            return 'pages/learnjs/learnjs_' + param.learnjsid + '.html'
        },
        controller: 'learnjsController'
    })
    .when('/nodejs', {
        templateUrl: 'pages/nodejs/nodejs_100.html',
        controller: 'learnjsController'
    })
    .when('/nodejs/:nodejsid', {
        templateUrl: function (param) {
            return 'pages/nodejs/nodejs_' + param.nodejsid + '.html'
        },
        controller: 'learnjsController'
    }).
    when('/integration', {
        templateUrl: 'pages/integration/integration_100.html',
        controller: 'learnjsController'
    })
    .when('/integration/:integrationid', {
        templateUrl: function (param) {
            return 'pages/integration/integration_' + param.integrationid + '.html'
        },
        controller: 'learnjsController'
    })
    .
    otherwise('/');
    
});