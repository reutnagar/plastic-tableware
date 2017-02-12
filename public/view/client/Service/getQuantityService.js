app.factory('quantityService',function ($http){
	console.log("hello world!!");
	return{

		quantity:function(){
	console.log("in function quantity");
				return $http.get('/quantity');
		}

	}
});



