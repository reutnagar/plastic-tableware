app.controller('mainController',function($scope, $http,$location) {
	//$scope.formData = {}; 
    $scope.master = {}; 
    $scope.subCategories={};
    $scope.categories={};
   $scope.goToSubCtegory=function(category){
       $location.path("/subCategory/"+category);
    }
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
   
    });
    $scope.shoppingCart = {
        totalPrice: 0,
        tax: 0,
        items: [],
    };

    
    $scope.showAllCategories=function(){
    $http.get('showAllCategories')
                    .success(function(data){
                        $scope.categories = data;
                    })
                    .error(function(data){
                        console.log("Error: "+data);
                    });
                     $scope.initSubCategory();
    }
    $scope.initSubCategory=function(){
        angular.forEach($scope.categories, function(value,key){
           console.log("username is thomas",value,key);
         });
    };
    $scope.showAllSubCategory=function(category){
            var data = category;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/showAllSubCategory', data, config)
            .success(function (data, status, headers, config) {
                $scope.subCategories=data;
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