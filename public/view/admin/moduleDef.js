var app = angular.module("adminApp", ["ngRoute"]);
console.log("moduleDef page");
app.config(function ($routeProvider) {
                $routeProvider
                  .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'signInController'
                       
                    })
                    .when('/dashboard', {
                        templateUrl: 'pages/dashboard.html',
                        controller:'notificationCtrl',
                        resolve: {
                    factory: checkRouting
                }
                    })
                  .when('/orders', {
                      templateUrl: 'pages/orders.html',
                     resolve: {
                    factory: checkRouting
                }
                  })
                    .when('/stock', {
                        templateUrl: 'pages/stock.html',
                        controller: 'itemCtrl',
                       resolve: {
                    factory: checkRouting
                }
                    })
                  .when('/newItem', {
                      templateUrl: 'pages/new_item.html',
                       resolve: {
                    factory: checkRouting
                } 
                  })
                  .when('/statistics', {
                      templateUrl: 'pages/statistics.html',
                       resolve: {
                    factory: checkRouting
                }
                  })
                  .when('/users', {
                      templateUrl: 'pages/users.html',
                       resolve: {
                    factory: checkRouting
                } 
                  })
                  
                  .otherwise({ redirectTo: 'pages/dashboard.html' });
            });


            var checkRouting= function ( $http,$q, $rootScope, $location) {
    if ($rootScope.user) {
        return true;
    } else {
        var deferred = $q.defer();
        $http.get('/admin/getSessionInfo')
           .success(function (data) {
                 if(!data.user)
                  { deferred.reject();
                         $location.path("/");
                     console.log(data.user);
                  }
                   else{
                        $rootScope.user =data.user;
                        console.log('after session info');
                        deferred.resolve(true);
                   }
            })
             .error(function (data) {
                                console.log("Error: "+data);
                                deferred.reject();
                                $location.path("/");
             });
        return deferred.promise;
    }
};

