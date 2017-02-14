
app.controller('mainController',function($scope, $http,$location, $rootScope) {
	//$scope.formData = {};
   $scope.session = {};
   $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});


   $scope.signOut = function () {
     
    console.log('in sign out');
    
    $http.post('/admin/signOut')
    .success(function (data) {
     $scope.PostDataResponse = data;
     console.log( data);
     if (data.out = true) {
        
        window.location.reload();
        window.location.replace('#/');
    }
})
    
    .error(function (data, status, header, config) {
        console.log("Error: "+data);
        $scope.ResponseDetails = "Data: " + data +
        "<hr />status: " + status +
        "<hr />headers: " + header +
        "<hr />config: " + config;
    });                      
}








//     //  $scope.user = userService.user;
//  $scope.$on('$routeChangeStart', function (e, next, current) { 
//       $http.get('/admin/getSessionInfo')
//                           .success(function (data) {
//                            $scope.PostDataResponse = data;
//                            console.log('after session info');
//                            $scope.session =data.session;
//                       })
//                             .error(function (data) {
//                                 console.log("Error: "+data);
//                                 $scope.ResponseDetails = "Data: " + data ;
//                             });  
//       console.log($scope.session);           

//      if (next.access != undefined && !next.access.allowAnonymous&&!$scope.session ) {
//                 $location.path("/");        
//                  alert('You are not logged in!');           
//             }
//         });

//              $http.get('/admin/getSessionInfo')
//                           .success(function (data) {
//                            $scope.PostDataResponse = data;
//                            console.log('after session info');
//                            $scope.session =data.session;
//                       })
//                             .error(function (data) {
//                                 console.log("Error: "+data);
//                                 $scope.ResponseDetails = "Data: " + data ;
//                             });  
//       console.log($scope.session); 

//         // $scope.logout = function () {
//         //     authenticationService.logout()
//         //         .success(function (response) {
 
//         //             alert( 'You are logged out.');
//         //         });
//         // };

//  $rootScope.$on("$locationChangeStart", function (event, next, current) {
//   for (var i in window.routes) {
//     if (next.indexOf(i) != -1) {
//      if (!window.routes[i].access.allowAnonymous&& !$scope.session ) {
//           alert('You are not logged in!');
//              $location.path("/");                                                 
//                     }
//                 }
//             }
//         });





});