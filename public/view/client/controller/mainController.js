app.controller('mainController',function($scope, $http,$location) {
	//$scope.formData = {}; 
    $scope.master = {}; 
    $scope.subCategories={};
    $scope.categories={};
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

    
    $scope.showAllCategories=function(){
        console.log("in the showAllCategories function");
    $http.get('showAllCategories')
                    .success(function(data){
                        $scope.categories = data;
                        console.log("Succeed loading",$scope.categories);
                    })
                    .error(function(data){
                        console.log("Error: "+data);
                    });
    }

    $scope.showAllSubCategory=function(category){
            console.log("category",category);
            var data = category;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/showAllSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post showAllSubCategory");
                $scope.subCategories=data;
                console.log("category from ", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "category: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };


});