app.factory('emailService',function ($http){

		return {
			
			sendEmail : function(EmailAdres,type,content){
						 console.log("emailService");
						var config = {
							headers : {
								'Content-Type':'application/x-www-form-urlencoded;charset=utf-8;'
							}
						}
						var data = $.param({
							email : EmailAdres,
							type : type,
							content : content 
						});
						return $http.post('/sendEmailserver', data, config)
						.success(function (data, status, headers, config) {
							console.log("Succeed post sendEmail");
							//cart.push (data);
							console.log("sendEmail ", data);
						})
						.error(function (data, status, header, config) {
							console.log("Error: "+ data);
							var ResponseDetails = "sendEmailserver" + EmailAdres +
								"<hr />status: " + status +
								"<hr />headers: " + header +
								"<hr />config: " + config;
						});
				}
			}
});
