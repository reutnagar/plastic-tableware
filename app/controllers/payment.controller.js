// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_8T2YukejfHPC3CNeR6PqqJD3");


module.exports = {
    processPayment: processPayment
}

function processPayment(req,res){
    // Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
    var token = req.body.stripeToken; // Using Express

// Charge the user's card:
    var charge = stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "Example charge",
        source: token,
    }, function(err, charge) {
        if(!err){
            console.log("user is successfully charged!");
        }
    });
}
