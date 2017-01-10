var app = angular.module("clientApp", ["ngRoute"]);
//routing
            app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'index.html',
                        controller: 'homePageController' 
                       
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
                  .when('/products_page_v1', {
                      templateUrl: 'pages/products_page_v1.html'
                  })
                 
                  
                 /*  .otherwise({ redirectTo: 'pages/dashboard.html' }); */
            });

app.controller('mainController',function($scope, $http) {
	//$scope.formData = {};

    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});
    });
	

app.controller("signInController", ["$scope", "$routeParams", "$http", homePageController]);//calling the login controller