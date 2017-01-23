app.controller('orderCtrl',function($scope, $http) {  
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

  $scope.master = {}; 
  $scope.showMe = {};


 $scope.showAllOrders=function(){
     console.log("request all orders");
    $http.get('/admin/showAllOrders')
                    .success(function(data){
                        $scope.orders = data;
                        console.log("Succeed loading",$scope.orders);
                        for (var i = 0, length = $scope.orders.length; i < length; i++) {
							$scope.showMe[$scope.orders[i]._id] = true;
						}
                    })
                    .error(function(data){
                        console.log("Error: "+data);
         });
}