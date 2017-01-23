app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'signInController'
                    })
                    .when('/dashboard', {
                        templateUrl: 'pages/dashboard.html'
                    })
                  .when('/orders', {
                      templateUrl: 'pages/orders.html',
                      controller: 'orderCtrl'
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


//app.controller("signInController", ["$scope", "$routeParams", "$http", signInController]);//calling the login controller
//app.controller("itemCtrl", ["$scope", "$http", itemCtrl]);

