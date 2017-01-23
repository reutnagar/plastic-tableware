app.controller('orderCtrl',function($scope, $http) {  
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

  $scope.master = {}; 
  $scope.showMe = true;


 $scope.showAllOrders=function(){
     console.log("request all orders");
    $http.get('/admin/showAllOrders')
                    .success(function(data){
                        $scope.orders = data;
                        console.log("Succeed loading",$scope.orders);
							          $scope.showMe= false;
                    })
                    .error(function(data){
                        console.log("Error: "+data);
                    });
}