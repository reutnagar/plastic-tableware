var app = angular.module("adminApp", ["ngRoute"]);
console.log("moduleDef page");
app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'signInController',
                         access: {allowAnonymous:true} 
                       
                    })
                    .when('/dashboard', {
                        templateUrl: 'pages/dashboard.html',
                        controller:'notificationCtrl',
                         access: {allowAnonymous:false} 
                    })
                  .when('/orders', {
                      templateUrl: 'pages/orders.html',
                       access: {allowAnonymous:false} 
                  })
                    .when('/stock', {
                        templateUrl: 'pages/stock.html',
                        controller: 'itemCtrl',
                        access: {allowAnonymous:false} 
                    })
                  .when('/newItem', {
                      templateUrl: 'pages/new_item.html',
                       access: {allowAnonymous:false} 
                  })
                  .when('/statistics', {
                      templateUrl: 'pages/statistics.html',
                       access: {allowAnonymous:false} 
                  })
                  .when('/users', {
                      templateUrl: 'pages/users.html',
                       access: {allowAnonymous:false} 
                  })
                  
                  .otherwise({ redirectTo: 'pages/dashboard.html' });
            });