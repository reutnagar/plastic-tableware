var app = angular.module("adminApp", ["ngRoute"]);
app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'signInController'
                       
                    })
                    .when('/dashboard', {
                        templateUrl: 'pages/dashboard.html',
                        controller:'notificationCtrl'
                    })
                  .when('/orders', {
                      templateUrl: 'pages/orders.html'
                  })
                    .when('/stock', {
                        templateUrl: 'pages/stock.html',
                        controller: 'itemCtrl'   
                    })
                  .when('/newItem', {
                      templateUrl: 'pages/new_item.html'
                  })
                  .when('/statistics', {
                      templateUrl: 'pages/statistics.html'
                  })
                  .when('/users', {
                      templateUrl: 'pages/users.html'
                  })
                  
                  .otherwise({ redirectTo: 'pages/dashboard.html' });
            });