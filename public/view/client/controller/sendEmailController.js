/*app.controller('sendEmailCtrl',function($scope, $http,$routeParams,$rootScope) {
    console.log("send email to"); 

    console.log("$rootScope.product",$rootScope.product);
	$scope.sendEmail=function(EmailAdres){
				var data = $.param({
					Email_Adres : EmailAdres,
				});
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				$http.post('/sendEmail', data, config)
				.success(function (data, status, headers, config) {
					console.log("Succeed post sendEmail");
					//cart.push (data);
					console.log("sendEmail ", data);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ data);
					$scope.ResponseDetails = "sendEmail " + data +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		};
		
});

*/