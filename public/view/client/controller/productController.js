app.controller('productCtrl',function($scope, $http,$routeParams,$rootScope) {
	//$scope.master = {};
    $scope._id = $routeParams._id;
	$scope.product = {};
	$scope.products = {};

    $scope.item = { 
                name : "",
                category : "",
                subCategory : "",
                price :"",
                quantity : "",
                image: "",
                _id:""
            }
            $scope.quantity="",
             $scope.color="",
    $scope.order =[{num:"1"},{num:"1"},{num:"1"},{num:"1"}];

	$scope.getProductDetails=function(_id){
            console.log("_id",_id);
			var data = _id;
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
                $scope.ResponseDetails = "_id: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	
	
    $scope.addToCart = function(){
        console.log("addToCart", $scope.product,$scope.quantity, $scope.color);
        $rootScope.product=$scope.product;
    };
});