var app = angular.module("clientApp", ['ngRoute']);
//routing
            app.config(function ($routeProvider,$locationProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/homePage.html',
                        controller: 'mainController' 
                       
                    })
                    .when('/create_an_account', {
                        templateUrl: 'pages/create_an_account.html'
                    })
                  .when('/order_info', {
                      templateUrl: 'pages/order_info.html'
                  })
                    .when('/orders_list', {
                        templateUrl: 'pages/orders_list.html'
                    })
                  .when('/shopping_cart', {
                      templateUrl: 'pages/shopping_cart.html'
                  })
                  .when('/singleProduct/:_id?', {
                      templateUrl: 'pages/singleProduct.html',
                      controller:"productCtrl"
                  })
                  .when('/subCategory/:category?', {
                      templateUrl: 'pages/subCategoryPage.html',
                      controller:"subCategoryCtrl"
                  })
                  .when('/productPage/:subCategory?', {
                      templateUrl: 'pages/productPage.html',
                      controller:'listProductCtrl'
                  })
                  .when('/payment', {
                      templateUrl: 'pages/payment.html'
                  })
                .when('/shopping_cart', {
                      templateUrl: 'pages/shopping_cart.html'
                  })
                .otherwise({ redirectTo: '/' });
            });
