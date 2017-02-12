app.controller('cartCtrl',function($scope, $http,$location,$rootScope,quantityService,$log) {

	$scope.myList=JSON.parse(localStorage.getItem('myList'));
	var cart =[];
	var product;
	var quantity;

if($scope.myList==null){ $scope.myList = "no products";	$scope.empty=false;}
else $scope.empty=true;

console.log("myList~~~~~~~~~~",$scope.myList);
		
$scope.validation=function(){
	//console.log("user detailes",$scope.user);
var promise
	for (var i = 0; i < $scope.myList.length ; i++) {
 	 	product = $scope.myList[i];
 	 console.log(i);
 	  quantityService.quantity(product._id,product.name).then(
          function(payload) { 
              $scope.quantity = payload.data;
			console.log("~~~~this is the resualt from itration ~~~~~",i,"~~");
			console.log($scope.quantity+"---");
			if(product.quantity > $scope.quantity)
			 {
			 	console.log("there is only",quantity ,"and you order",product.quantity);
			 	return;
			 }
			 
          },
          function(errordata) {
              $log.error('failure loading quantity', errordata);
          });


 	 //$scope.Quantity = $scope.quantity(product._id,product.name);
 	 
 	 
 }
 if(i>0)
			 {
			 	console.log("a product is not validation",i,$scope.myList);
			 	return;
			 }
//send to function that checkes if all the item realy exsit
//if true
//update the db
//$scope.makeAnOrder();
//SEND EMAIL
};	
// $scope.quantity = function(_id,name){
// 	console.log("quantity",name,_id);
// 				var data = $.param({
// 					_id : _id,
// 					name : name,
// 				});
// 				var config = {
// 					headers : {
// 						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
// 					}
// 				}
// 				$http.get('/quantity', data, config)
// 				.success(function (data, status, headers, config) {
// 					// console.log("Succeed get quantity");
// 					// console.log("get quantity ", data);
// 					$scope.Quantity = data;
// 				})
// 				.error(function (data, status, header, config) {
// 					console.log("Error: "+ data);
// 					$scope.ResponseDetails = "get quantity " + data +
// 						"<hr />status: " + status +
// 						"<hr />headers: " + header +
// 						"<hr />config: " + config;
// 				});
// 		};
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

