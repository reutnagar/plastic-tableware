var app = angular.module("adminApp", ["ngRoute"]);
app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'login.Controller.js',
                        controllerAs: 'vm',
                    })
                    .when('/dashboard', {
                        templateUrl: 'pages/dashboard.html'
                    })
                  .when('/orders', {
                      templateUrl: 'pages/orders.html'
                  })
                    .when('/stock', {
                        templateUrl: 'pages/stock.html',
                        controller: 'itemCtrl'

                    })
                    .when('/main', {
                    templateUrl: 'pages/dashboard.html',
                    controller: 'mainController'

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