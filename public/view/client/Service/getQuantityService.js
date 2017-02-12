app.factory('quantityService',function ($http,$rootScope){
	console.log("hello world!!");
	return{

		quantity:function(){
	//console.log("quantity",name,_id);
				return $http.get('/quantity')
				.success(function (data, status, headers, config) {
					// console.log("Succeed get quantity");
					console.log("get quantity ", data);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ data);
					$scope.ResponseDetails = "get quantity " + data +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		}
		}
});



