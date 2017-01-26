app.controller('notificationCtrl', function($scope, $http) {  
$scope.type="הוזל מן המלאי"; 
$scope.reduce=true;;  
console.log("notification controller````````````````"); 
   $scope.checkQuantity = function() {
	 console.log("checkQuantity");
	$http.get('/admin/checkQuantity')
					.success(function(data){
						$scope.quantity = data;
						data="";
						if(data=="")$scope.reduce=false;
						console.log("Succeed loading");
					})
					.error(function(data){
						console.log("Error: "+data);
		 });
}


});
