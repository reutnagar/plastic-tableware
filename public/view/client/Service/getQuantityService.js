app.factory('quantityService',function ($http){
	console.log("hello world!!");
	return{

		quantity:function(myList){
	console.log("in function quantity");
				return $http.get('/quantity/'+myList);
		}

	}
});



