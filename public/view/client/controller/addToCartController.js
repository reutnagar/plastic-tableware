app.controller('cartCtrl',function($scope, $http,$location,$rootScope) {
	console.log("cartCtrl");
	$scope.myList=JSON.parse(localStorage.getItem('myList'));



if($scope.myList==null){ $scope.myList = "no products";	$scope.empty=false;}
else $scope.empty=true;
		console.log("order~~~~~~~~~~~~~~",$scope.myList,$scope.empty);
		var cart =[];
	$scope.addToCart=function(_id,color,sum){
				var data = $.param({
					item_id : _id,
					color : color,
					sum : sum
				});
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				$http.post('/addToCart', data, config)
				.success(function (data, status, headers, config) {
					console.log("Succeed post addToCart");
					cart.push (data);
					console.log("addToCart ", data);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ data);
					$scope.ResponseDetails = "addToCart " + data +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		};
		
});
