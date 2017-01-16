app.controller('categoryCtrl',function($scope, $http) {
	
	
  $scope.master = {}; 
	$scope.subCategories={};
    $scope.categories={};
	$scope.showAllCategories=function(){
        console.log("in the showAllCategories function");
    $http.get('showAllCategories')
                    .success(function(data){
                        $scope.categories = data;
                        console.log("Succeed loading");
                    })
                    .error(function(data){
                        console.log("Error: "+data);
					});
	}
	


	$scope.showAllSubCategory=function(category){
	// use $.param jQuery function to serialize data from JSON 
            var data = category;
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/showAllSubCategory', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed post showAllSubCategory");
                $scope.subCategories.push(data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

     console.log("showAllSubCategory function"+ category);
     $scope.master = angular.copy(subCategory);

};

});
