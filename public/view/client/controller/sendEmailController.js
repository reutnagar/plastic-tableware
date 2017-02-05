app.controller('sendEmailCtrl',function($scope, $http,$routeParams,$rootScope) {
    console.log("send email to"); 

    
	$scope.sendEmail=function(EmailAdres){
				 
				var config = {
					headers : {
						'Content-Type':'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				$http.post('/sendEmailserver', EmailAdres, config)
				.success(function (data, status, headers, config) {
					console.log("Succeed post sendEmail");
					//cart.push (data);
					console.log("sendEmail ", EmailAdres);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ EmailAdres);
					$scope.ResponseDetails = "sendEmailserver" + EmailAdres +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		};
		
});

