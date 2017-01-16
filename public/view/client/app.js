var app = angular.module("clientApp", ["ngRoute"]);
//routing
            app.config(function ($routeProvider) {
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
                  .when('/products_page', {
                      templateUrl: 'pages/products_page_v1.html'
                  })
                  .when('/category_page', {
                      templateUrl: 'pages/category_v1.html'
                  })
                  .when('/payment', {
                      templateUrl: 'pages/payment.html'
                  })
                 /*  .otherwise({ redirectTo: 'pages/dashboard.html' }); */
            });

app.controller('mainController',function($scope, $http) {
	//$scope.formData = {};
  console.log("in the main mainController in routing page");
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});
    });
	

//app.controller("mainController", ["$scope", "$routeParams", "$http", mainController]);//calling the login controller