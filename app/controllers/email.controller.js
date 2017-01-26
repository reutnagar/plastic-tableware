var nodemailer = require("nodemailer");
//app.controller('sendemailCtrl',function($scope, $http,$routeParams,$location) {
	console.log("nodemailer");
var text = 'hi';
//STEP 4: Cre­ate a sim­ple JSON object with the nec­es­sary val­ues for send­ing the email.

var mailOptions = {
    from: 'plastictableware.cs@gmail.com', // sender address
    to: 'klugmantova@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
	console.log("mailOptions",mailOptions);

 var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'plastictableware.cs@gmail.com', // Your email id
            pass: 'plastictableware' // Your password
        }
    });

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
  /*
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };*/
//});


// create reusable transporter object using the default SMTP transport
//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// send mail with defined transport object










	/*$scope.subCategory = $routeParams.subCategory;
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
	};*/




 
