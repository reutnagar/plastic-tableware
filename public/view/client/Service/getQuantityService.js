app.factory('quantityService',function ($http,$rootScope){
	console.log("hello world!!");
	return{

		quantity:function(_id,name){
	//console.log("quantity",name,_id);
				return $http.get('/quantity');
		}

	}
});



