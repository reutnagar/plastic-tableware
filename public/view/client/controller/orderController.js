app.controller('orderCtrl',function($scope, $http,$location) {
	console.log("orderCtrl");
	$scope.hello="hello";
	$scope.order =[{num:"1"},{num:"1"},{num:"1"},{num:"1"}];
	console.log("order",$scope.order);
});
