app.controller('signInController', function ($scope, $http,$rootScope) {
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
        options.async = true;
    });
    console.log("signInController");
    $scope.session = {};
//   $("#navbar-custom-menu1").hide();
$("#main-sidebar1").hide();

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
         console.log( data.msg);
         console.log('after login');
         if(data.msg=="התחברת בהצלחה")
            {$scope.session.user =data.user;
                $rootScope.user=data.user;
                window.location.replace('#/dashboard');
                alert("logged in successfully");
                $("#main-sidebar1").show();
                document.getElementById("hidden-xs1").textContent = $scope.session.user.userName;
            }
            else
               {   alert(data.msg);
                   
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
    
}

});