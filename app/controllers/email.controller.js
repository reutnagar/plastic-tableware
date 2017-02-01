var nodemailer = require("nodemailer");

//module.exports = {
    
//};
//app.controller('sendemailCtrl',function($scope, $http,$routeParams,$location) {
	


	console.log("nodemailer");
//var text = 'hi'+Order.userName+'ure order will be deleverd to'+Order.address;
var text='hi hi'
//STEP 4: Cre­ate a sim­ple JSON object with the nec­es­sary val­ues for send­ing the email.
//var emailto = qs.parse(body);
var mailOptions = {
    from: 'plastictableware.cs@gmail.com', // sender address
   //to:'klugmantova@gmail.com',
   // to: emailto,
    to:'plastictableware.cs@gmail.com', // list of receivers
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
/* userName: String,
	email: String,
	address: String,
	status: String,
	date:{type: Date, default: Date.now},
	numItems: Number,
	payment : Number,
	item_id: [Schema.Types.ObjectId],
	color : [String],
	sum :[Number]
});*/








 




 
