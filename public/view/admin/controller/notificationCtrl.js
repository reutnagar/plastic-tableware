app.controller('notificationCtrl', function($scope, $http) {  
	$scope.type="הוזל מן המלאי"; 
	$scope.reduce=true;;  
	$scope.checkQuantity = function() {
		$http.get('/admin/checkQuantity')
		.success(function(data){
			$scope.quantity = data;
			if(data=="")$scope.reduce=false;
						//console.log("Succeed loading");
					})
		.error(function(data){
			console.log("Error: "+data);
		});
	}


});
