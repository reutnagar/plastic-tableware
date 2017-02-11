app.controller('cartCtrl',function($scope, $http,$location,$rootScope) {
	console.log("cartCtrl");
	$scope.myList=JSON.parse(localStorage.getItem('myList'));
	$scope.UserName="";
	$scope.address="";
	$scope.email="";


if($scope.myList==null){ $scope.myList = "no products";	$scope.empty=false;}
else $scope.empty=true;
		console.log("order~~~~~~~~~~~~~~",$scope.myList,$scope.empty);
		var cart =[];

console.log("email",$scope.email);


	$scope.validation=function(){
		console.log("validation")
		console.log("email",$scope.email.email);

//send to function that checkes if all the item realy exsit
//if true
//update the db
//$scope.makeAnOrder();
//SEND EMAIL
	};	

$scope.makeAnOrder = function(UserName,address,email){
	console.log("makeAnOrder",UserName,address,email);
				var data = $.param({
					UserName : $scope.UserName,
					address :$scope.address,
					email : $scope.email
				});
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				$http.post('/makeAnOrder', data, config)
				.success(function (data, status, headers, config) {
					console.log("Succeed post addToCart");
					console.log("makeAnOrder ", data);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ data);
					$scope.ResponseDetails = "makeAnOrder " + data +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		};
		

	$scope.addToCart=function(_id,color,sum){
				var data = $.param({
					item_id : _id,
					color : color,
					sum : sum
				});
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				$http.post('/addToCart', data, config)
				.success(function (data, status, headers, config) {
					console.log("Succeed post addToCart");
					cart.push (data);
					console.log("addToCart ", data);
				})
				.error(function (data, status, header, config) {
					console.log("Error: "+ data);
					$scope.ResponseDetails = "addToCart " + data +
						"<hr />status: " + status +
						"<hr />headers: " + header +
						"<hr />config: " + config;
				});
		};

$scope.updateQuantity = function(index,new_quantity){
  console.log("indexOf",index);
    $scope.myList[index].quantity = new_quantity; 
  console.log("updateQuantity",$scope.myList[index]); 
  localStorage.setItem('myList', JSON.stringify($scope.myList));
 };

$scope.removeItem = function(index){

  console.log("index",index);
  $scope.myList.splice(index, 1); 
  console.log("removeItem   "+ index+"    "+$scope.myList);   
   localStorage.setItem('myList', JSON.stringify($scope.myList)); 
};		

$scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.myList.length; i++){
        var product = $scope.myList[i];
        total += (product.price * product.quantity);
    }
    return total;
}
});

