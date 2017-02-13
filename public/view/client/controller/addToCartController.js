app.controller('cartCtrl',function($scope, $http,$location,$rootScope,quantityService,$log,emailService) {

	$scope.myList=JSON.parse(localStorage.getItem('myList'));
	var cart =[];
	var product;
	$scope.user={};
	$scope.string="";
	$scope.total=0;
	$scope.flag=false;

if($scope.myList==null){ $scope.myList = "no products";	$scope.empty=false;}
else $scope.empty=true;

$scope.validation=function(){
	console.log($scope.user);
	// var promise = quantityService.quantity($scope.myList);
 // 	        promise.then(
 //          function(data) { 
 //              $scope.quantity = data.data;
 //              console.log($scope.quantity);
 //              for (var j = 0; j < $scope.myList.length; j++){
 //              	for (var i = 0; i < $scope.quantity.length ; i++) 
 //              	 {
 //              		if($scope.myList[j]._id == $scope.quantity[i]._id )
 //              			$scope.string+="אין זמינות של מוצר "+$scope.myList[j].name+" בכמות זאת אלא"+$scope.quantity[i].quantity+'\n';
 //              	}
              
 // 	 	 	}


 //          },
 //          function(errordata) {
 //              $log.error('failure loading quantity', errordata);
 //          });
 	 	 	if($scope.string != "" && $scope.string != null){
 	 	 			alert($scope.string);
 	 	 			$scope.string = "";
 	 	 		return false;
 	 	 	} 	 	 
 	 	 	else{
 	 	 		var flag = $scope.makeAnOrder($scope.user);
				   $scope.flag=flag;
 	 	 		console.log("true");
 	 	 		if(flag)
				{
					var SEND_EMAIL  = emailService.sendEmail($scope.user.email,"order","");
					alert("הזמנתך התקבלה!"+'\n'+"תודה שקניתה אצלנו");
				}
				else{
					alert("falid to conect to make your order try agian later");
				}
				//$location.path("/");
 	 	 	}
 	 	 		
};	

$scope.makeAnOrder = function(user){
	console.log("user",user);
		user = angular.toJson(user);			
	myList = angular.toJson($scope.myList);			
				var data = $.param({
					user : user,
					myList : myList
				});
				var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
					}
				}
				return $http.post('/makeAnOrder', data, config)
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
	$scope.total=total;
    return total;
}
});

