app.controller('listProductCtrl',function($scope, $http,$routeParams,$location) {
	$scope.subCategory = $routeParams.subCategory;
    $scope.image = "";
     $scope.myList=[];
	$scope.getProductsOfSubCategory=function(subCategory){
			var data = $scope.subCategory;
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            $http.post('/getProductsOfSubCategory', data, config)
            .success(function (data, status, headers, config) {
                console.log("Succeed post getProductsOfSubCategory",data);
				//$scope.PostDataResponse = data;
                $scope.products=data;
                $scope.category = data[0].category;
                console.log("items", data);
            })
            .error(function (data, status, header, config) {
                console.log("Error: "+ data);
                $scope.ResponseDetails = "items: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};

$scope.setImageModal=function (image) {
  $scope.image ='css/'+image;  
  console.log("$scope.image",$scope.image);
};


    
    $scope.addToCart = function(product){
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
                _id : product._id,
                name : product.name,
                price : product.price,
                quantity : '1',
                image : product.image,
                //color : color
            };
        $scope.myList.push($scope.addItem);
         localStorage.setItem('myList', JSON.stringify($scope.myList));
         console.log("myList from localStorage",$scope.myList);
    };
});