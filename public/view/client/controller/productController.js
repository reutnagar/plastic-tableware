app.controller('productCtrl',function($scope, $http,$routeParams,$rootScope,$window) {
	//$scope.master = {};
    $scope._id = $routeParams._id;
	$scope.product = {};
	$scope.myList = [];
    $scope.addItem = { 
                _id:"",
                name : "",
                price :"",
                quantity : "",
                image: "",
                color:""
            }
    $scope.item = { 
                name : "",
                category : "",
                subCategory : "",
                price :"",
                quantity : "",
                image: "",
                _id:"",
                color:""
            }
            $scope.quantity="",
             $scope.color="",
    $scope.order =[{num:"1"},{num:"1"},{num:"1"},{num:"1"}];

	$scope.getProductDetails=function(_id){
            console.log("_id",_id);
			var data = _id;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/getProductDetails', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post showItem");
				//$scope.PostDataResponse = data;
                $scope.product=data[0];
                console.log("item", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "_id: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	
	
    $scope.addToCart = function(){
        /*if($scope.myList==""){
            console.log("myList is empty");

           $scope.myList.push(JSON.parse(localStorage.getItem('myList')));
           localStorage.setItem('myList', JSON.stringify($scope.myList));
           $scope.myList="";
                    console.log("myList",$scope.myList);
                }*/
        if(JSON.parse(localStorage.getItem('myList'))!== null)
            $scope.myList = JSON.parse(localStorage.getItem('myList'));

        console.log("myList from localStorage",$scope.myList);
        $scope.addItem=
            {
                _id : $scope.product._id,
                name : $scope.product.name,
                price : $scope.product.price,
                quantity : $scope.quantity,
                image : $scope.product.image,
                color : $scope.color
            };
        $scope.myList.push($scope.addItem);
         localStorage.setItem('myList', JSON.stringify($scope.myList));
         console.log("myList from localStorage",$scope.myList);
    };
});