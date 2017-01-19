app.controller('mainController',function($scope, $http,$location) {
	//$scope.formData = {}; 
   $scope.goToSubCtegory=function(category){
    console.log("goToSubCtegory with category variable",category);
       $location.path("/subCategory/"+category);
    }
  console.log("in the main mainController in routing page");
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
   
    });
    $scope.shoppingCart = {
        totalPrice: 0,
        tax: 0,
        items: [],
    };
    
    $scope.products = ["product1","product1","product3","product3","product4","product4","product4","product4","product4","product4"];

});