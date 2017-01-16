app.controller('mainController',function($scope, $http) {
	//$scope.formData = {};
  console.log("in the main mainController in routing page");
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
   
    });
    $scope.shoppingCart = {
        totalPrice: 0,
        tax: 0,
        items: [],
    };
    
    
});