app.controller('signInController', function ($scope, $http) {
        $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});
    console.log("signInController");
  // $scope.session = {};

     $scope.signing = function (user) {
       
        console.log('in sign in');

        if ($scope.inForm.$valid) {

                console.log('after validation');
         
                 var data = $.param({
                userName : user.userName,
                password : user.password
            });
                    var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                        }
                    }
            $http.post('/admin/signIn', data, config)
                          .success(function (data, status, headers, config) {
                           $scope.PostDataResponse = data;
                           console.log( data);
                           console.log('after login');
                      if(data=="logged in succesfully")
                             window.location.replace('#/dashboard');
                    else
                      console.log("try again");
            })
                            .error(function (data, status, header, config) {
                                console.log("Error: "+data);
                                $scope.ResponseDetails = "Data: " + data +
                                    "<hr />status: " + status +
                                    "<hr />headers: " + header +
                                    "<hr />config: " + config;
                            });  
         }
                    
    }

});