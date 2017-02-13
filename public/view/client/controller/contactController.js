app.controller('contactCtrl',function($scope, $http,$location,$rootScope,quantityService,$log,emailService) {
console.log("contact  controller");
$scope.sendEmail = function(user){
		console.log("contact  controller",user);
		var SEND_EMAIL  = emailService.sendEmail($scope.user.email,"contact",user.content);
	console.log("contact  controller");
$location.path("/");
}

	 
});
