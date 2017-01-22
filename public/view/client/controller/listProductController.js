app.controller('listProductCtrl',function($scope, $http,$routeParams,$location) {
	$scope.subCategory = $routeParams.subCategory;
	$scope.getProductsOfSubCategory=function(subCategory){
			var data = $scope.subCategory;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/getProductsOfSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post getProductsOfSubCategory",data);
				//$scope.PostDataResponse = data;
                $scope.products=data;
                $scope.category = data[0].category;
                console.log("items", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "items: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};



});