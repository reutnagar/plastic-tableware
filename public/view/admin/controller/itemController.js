app.controller('itemCtrl',function($scope, $http) {
  

  $scope.master = {}; 
  $scope.editItem = {};
  $scope.showMe = {};


 $scope.showAllItems=function(){
    $http.get('/itemCtrlServer/showAllItems')
                    .success(function(data){
                        $scope.items = data;
                        console.log("Succeed loading");
                        for (var i = 0, length = $scope.items.length; i < length; i++) {
                        $scope.showMe[$scope.items[i].index] = true;
            }
                    })
                    .error(function(data){
                        console.log("Error: "+data);
         });
}
$scope.addItem=function(item){
// use $.param jQuery function to serialize data from JSON 
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
/*angular.element(document.querySelector('#addModal')).modal('hide');*/
$scope.reset();
};


$scope.changeItem=function(item){
    console.log("in change item in the client side");
    for (var i = 0, length = $scope.items.length; i < length; i++) {
              $scope.editItem[$scope.items[i].index] = false;
            }
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

            $http.post('/itemCtrlServer/changeItem', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed changeItem Item");
                //$scope.items.push(data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

     console.log("finish to change item"+ item.name+item.location);
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
$scope.update(item);
$scope.reset();
};
            $scope.showAndHide = function(item){
                console.log( "showMe[item.index] before: "+$scope.showMe[item.index]);
                $scope.showMe[item.index] = !$scope.showMe[item.index];
                console.log( "showMe[item.index] after: "+ $scope.showMe[item.index]);

            };
            $scope.modify = function(item){
                $scope.editItem[item.index] = true;
            };

            $scope.update = function(item){
                $scope.editItem[item.index] = false;
            };
$scope.deleteItem = function(item){
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
                console.log("Succeed");
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });            
};

$scope.countItem = function(item){
    alert("count");
            var data = $.param({
                name : item.name,
                category : item.category,
            });
    var config = {
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
            $http.post('/itemCtrlServer/countItem', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed post countItem");
                $scope.items.push(data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
};


$scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.item = angular.copy($scope.master);
  };
});

