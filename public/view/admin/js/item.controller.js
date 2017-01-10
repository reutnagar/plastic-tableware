
function itemCtrl($scope, $http) {
	
 $scope.showAllItems=function(){
 $http.get('/itemCtrlServer/showAllItems')
                    .success(function(data){
                        $scope.items = data;
                        console.log("Succeed loading");
                    })
                    .error(function(data){
                        console.log("Error: "+data);
         });
}



$scope.master = {};

$scope.addItem=function(item){
// use $.param jQuery function to serialize data from JSON 
            alert("it ok????");
            var data = $.param({
                name : item.name,
                category : item.category,
                subCategory : item.subCategory,
                description : item.description,
                location : item.location,
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/itemCtrlServer/addItem', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed post addItem");
                $scope.items.push(data);
            })
            .error(function (data, status, header, config) {
            	console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

	 console.log("addItem function"+ item.name+item.location);
	 $scope.master = angular.copy(item);
/*
	 $http.get('/itemCtrlServer/addItem')
         .success(function(data){
             $scope.items = data;
             console.log("Succeed loading");
            })
          .error(function(data){
             console.log("Error: "+data);
         });
 */
$scope.reset();
};

$scope.deleteItem = function(item){
	alert("Are you sure that you want to delete this item?");
            var data = $.param({
                name : item.name,
                category : item.category,
            });
	var config = {
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		}
	}
            $http.post('/itemCtrlServer/deleteItem', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed post deleteItem");
                $scope.items.push(data);
            })
            .error(function (data, status, header, config) {
            	console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	 $scope.master = angular.copy(item);
	 
	 $scope.reset();
};

$scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.item = angular.copy($scope.master);
  };
};