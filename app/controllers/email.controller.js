var nodemailer = require("nodemailer");
var Order = require('../models/Order');
var qs = require('querystring');

module.exports = {
   sendEmailserver: sendEmailserver,
};
//app.controller('sendemailCtrl',function($scope, $http,$routeParams,$location) {
	
 
function sendEmailserver(req, res) {
    console.log("get post request in server side");  




        
  var body = '';
        req.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });   
        req.on('end', function () {
        var POST = qs.parse(body); 
        var email = new Order({ email : POST.email});
                 //*************

                 
            });




        console.log("nodemailer");
//var text = 'hi'+Order.userName+'ure order will be deleverd to'+Order.address;
var text='tuhmvmbjbn'

var mailOptions = {
    from: 'plastictableware.cs@gmail.com', // sender address
   to:'klugmantova@gmail.com',
   // to: emailto,
   // to:'plastictableware.cs@gmail.com', // list of receivers
   // to:  email,
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    
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
 }
       
       
        

	

 

 




 




 
