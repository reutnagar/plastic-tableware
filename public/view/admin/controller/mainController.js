
app.controller('mainController',function($scope, $http) {
	//$scope.formData = {};

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

});