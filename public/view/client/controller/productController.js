app.controller('productCtrl',function($scope, $http) {

	console.log("this is the productCtrl!!!!!!!");
	//$scope.master = {};
	$scope.product = {};
	$scope.products = {};
	
	$scope.getProductDetails=function(id){
        console.log("getProductDetails function");
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
	
	$scope.getProductsOfSubCategory=function(subCategory){
        console.log("getProductsOfSubCategory function");
            console.log("subCategory",subCategory);
			var data = subCategory;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/getProductsOfSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post getProductsOfSubCategory");
				//$scope.PostDataResponse = data;
                $scope.products=data;
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