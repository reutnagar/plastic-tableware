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
                      templateUrl: 'pages/shopping_cart.html',
                    // controller:'sendEmailCtrl'
                     
                  })
                    .when('/orders_list', {
                        templateUrl: 'pages/orders_list.html',
                        controller: 'orderCtrl'
                    })

                    //  .when('/home_v2', {
                    //     templateUrl: 'pages/home_v2.html',
                    //     //controller: 'orderCtrl'
                    // })


                  .when('/text_page', {
                      templateUrl: 'pages/text_page.html',
                      controller:'contactCtrl'
                     
                  })  
                  .when('/shopping_cart', {
                      templateUrl: 'pages/shopping_cart.html',
                      controller : 'cartCtrl'
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
