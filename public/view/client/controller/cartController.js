
app.controller('cartCtrl', function($scope, $http) {  
   console.log("cart controller````````````````"); 
   
//????????????????????????
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});

    var cart =[];
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
		
});