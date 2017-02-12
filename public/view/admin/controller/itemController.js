app.controller('itemCtrl',function($scope, $http) {  
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

	$scope.master = {}; 
	$scope.editItem = {};
	$scope.showMe = {};
       $scope.new_item = { 
                name : "",
                category : "",
                subCategory : "",
                description : "",
                price :"",
                location : "",
                quantities: []
            }
//console.log("new_item",$scope.new_item);
	$scope.showAllItems=function(){
		 console.log("request all items");
		$http.get('/admin/showAllItems')
						.success(function(data){
							$scope.items = data;
							console.log("Succeed loading");
							console.log("data"+data);
                            // $scope.items=[{              
                            //     name : "a",
                            //     category : "a",
                            //     subCategory : "a",
                            //     description : "a",
                            //     price :"a",
                            //     location : "a",
                            //     quantities: [ {name:"dddd",
                            //                   quantity:"dddd",
                            //                   minQuantity:"dddd",
                            //                   image:"dddd"},
                            //                   {name:"aaaaa",
                            //                   quantity:"aaaaa",
                            //                   minQuantity:"aaaaa",
                            //                   image:"aaaaa"}
                            //                   ]
                            //               },
                            //               {              
                            //     name : "a",
                            //     category : "a",
                            //     subCategory : "a",
                            //     description : "a",
                            //     price :"a",
                            //     location : "a",
                            //     quantities: [ {name:"dddd",
                            //                   quantity:"dddd",
                            //                   minQuantity:"dddd",
                            //                   image:"dddd"},
                            //                   {name:"aaaaa",
                            //                   quantity:"aaaaa",
                            //                   minQuantity:"aaaaa",
                            //                   image:"aaaaa"}
                            //                   ]
                            //               }
                            //               ];
                                      console.log("item",$scope.items);
							for (var i = 0, length = $scope.items.length; i < length; i++) {
								$scope.showMe[$scope.items[i]._id] = true;
                                $scope.getQuantities($scope.items.quantities);
                                console.log(i);
							}
						})
						.error(function(data){
							console.log("Error: "+data);
			 });
	}

$scope.getQuantities=function(quantities){
   console.log(quantities);
            var data = $.param({
                quantities : angular.toJson(quantities)
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/admin/getQuantities', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed getQuantities");
                //$scope.items.push(data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
            console.log($scope.PostDataResponse);
};

        $scope.add = function () {
          $scope.new_item.quantities.push({
          name:"",
          quantity:"",
          minQuantity:"",
          image:"" 
          });
          console.log("angular.toJson(item.quantities)",angular.toJson($scope.new_item.quantities));
        };
$scope.addItem=function(item){
// use $.param jQuery function to serialize data from JSON 
var quant = angular.toJson(item.quantities);
console.log("angular.toJson(item.quantities)",quant);
            var data = $.param({
                name : item.name,
                category : item.category,
                subCategory : item.subCategory,
                description : item.description,
				price : item.price,
                location : item.location,
				quantities:quant
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
                console.log("data.quantities",data.quantities);
            $http.post('/admin/addItem', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed post addItem");
				console.log("data"+data);
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

$scope.reset();
};


$scope.changeItem=function(item){
    console.log("in change item in the client side");
    for (var i = 0, length = $scope.items.length; i < length; i++) {
              $scope.editItem[$scope.items[i]._id] = false;
            }
            var data = $.param({
				_id : item._id,
                name : item.name,
                category : item.category,
                subCategory : item.subCategory,
                description : item.description,
				price : item.price,
                location : item.location,
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/admin/changeItem', data, config)
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

$scope.update(item);
$scope.reset();
};

            $scope.showAndHide = function(item){
                console.log( "showMe[item.id] before: "+$scope.showMe[item._id]);
                $scope.showMe[item._id] = !$scope.showMe[item._id];
                console.log( "showMe[item.id] after: "+ $scope.showMe[item._id]);

            };
            $scope.modify = function(item){
                $scope.editItem[item._id] = true;

            };

            $scope.update = function(item){
                $scope.editItem[item._id] = false;
                $scope.showAllItems();
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
            $http.post('/admin/deleteItem', data, config)
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
            $scope.showAllItems();
};
$scope.deleteItemById = function(_id){
            var data = _id

    var config = {
    headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }
            $http.post('/admin/deleteItemById', data, config)
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
$scope.showAllItems();
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
            $http.post('/admin/countItem', data, config)
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

/*$scope.checkIfItemExistsInStock = function(item){
  console.log("in checkIfItemExistsInStock in the client side");
            var data = $.param({
				_id : item._id,
                //colors.quantity: item.colors.quantity;
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/checkIfItemExistsInStock', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("Succeed checkIfItemExistsInStock");
                //$scope.items.push(data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+data);
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};*/

$scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.item = angular.copy($scope.master);
  };
  
});
