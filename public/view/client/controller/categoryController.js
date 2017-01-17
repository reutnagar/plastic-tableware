app.controller('categoryCtrl',function($scope, $http) {
	
	
  $scope.master = {}; 
	$scope.subCategories={};
    $scope.categories={};
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
            //console.log("category",category);
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/showAllSubCategory', category, config)
            .success(function (subCategory, status, headers, config) {
                console.log("Succeed post showAllSubCategory");
                $scope.subCategories=subCategory;
                //console.log("category from ", subCategory);
            })
            .error(function (subCategory, status, header, config) {
                console.log("Error: "+ subCategory);
                $scope.ResponseDetails = "category: " + subCategory +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
};

});
