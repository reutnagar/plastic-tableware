app.controller('productCtrl',function($scope, $http) {

	console.log("this is the productCtrl!!!!!!!");
	//$scope.master = {};
	$scope.oneItem = {};
	
	$scope.getProductDetails=function(id){
        console.log("showItem function");
            console.log("id",id);
			var data = id;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/showAllSubCategories', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post showItem");
				//$scope.PostDataResponse = data;
                $scope.product=data;
                console.log("item", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "category: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};

});