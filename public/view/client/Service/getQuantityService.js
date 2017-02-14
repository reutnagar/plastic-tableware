app.factory('quantityService',function ($http){
	console.log("hello world!!");
	return{

		quantity:function(myList){
			console.log("in function quantity");	
			myList = angular.toJson(myList);			
			var data = $.param({
				myList : myList
			});
			var config = {
				headers : {
					'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
				}
			}
			return $http.post('/quantity', data, config)
			.success(function (data, status, headers, config) {
				console.log("Succeed post quantity");
				console.log("array of pruduct that their quantity is not good ", data);
			})
			.error(function (data, status, header, config) {
				console.log("Error: "+ data);
				var ResponseDetails = "quantity " + data +
				"<hr />status: " + status +
				"<hr />headers: " + header +
				"<hr />config: " + config;
			})
		}

	}
});



