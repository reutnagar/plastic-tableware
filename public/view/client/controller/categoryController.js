app.controller('categoryCtrl',function($scope, $http) {
	
	
  $scope.master = {}; 
	
	$scope.showAllCategories=function(){
    $http.get('/itemCtrlServer/showAllCategories')
                    .success(function(data){
                        $scope.categories = data;
                        console.log("Succeed loading");
                    })
                    .error(function(data){
                        console.log("Error: "+data);
					});
	}
	
}

	$scope.showAllSubCategory=function(category){
	// use $.param jQuery function to serialize data from JSON 
            var data = category;
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/itemCtrlServer/showAllSubCategory', data, config)
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
