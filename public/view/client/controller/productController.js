app.controller('productCtrl',function($scope, $http,$routeParams) {
	//$scope.master = {};
    $scope.id = $routeParams.id;
	$scope.product = {};
	$scope.products = {};

	$scope.getProductDetails=function(id){
            console.log("id",id);
			var data = id;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/getProductDetails', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post showItem");
				//$scope.PostDataResponse = data;
                $scope.product=data[0];
                console.log("item", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "id: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	
	
});