var nodemailer = require("nodemailer");
var Order = require('../models/Order');
var qs = require('querystring');

module.exports = {
 sendEmailserver: sendEmailserver,
};
//app.controller('sendemailCtrl',function($scope, $http,$routeParams,$location) {
	
 
  function sendEmailserver(req, res) {
    console.log("send Mail");  

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
      var email = POST.email;
      if(POST.type=="order"){
        var text='שלום וברכה!'+"\n"+ "אנו שמחים";
        var mailOptions = {
            from: 'plastictableware.cs@gmail.com', // sender address
            to:email,
            subject: 'הזמנתך התקבלה', // Subject line
            text: text //, // plaintext body
          };
        }
        else
        {
          var mailOptions = {
          from: 'plastictableware.cs@gmail.com', // sender address
          to:'plastictableware.cs@gmail.com',
          subject: '   מ פניה    '+ email, // Subject line
          text: POST.content //, // plaintext body
        };
      }
      console.log("mailOptions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",mailOptions);
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
      res.send('הזמנתך התקבלה!');
    });


    
  }
  
  
  

  

  

  




  




  
