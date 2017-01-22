
var order = require('../models/order');

module.exports = {
  showAllOrders: showAllOrders
 }

function showAllOrders(req,res) {
	/*order.find({}, function(err,orders) {
    var orderMap = {};
	if (err) {
      res.status(404);
      res.send('ORDERS WERE NOT FOUND!');
    }
	res.render('pages/orders', { 
      order: order,
      success: req.flash('success')
    });*/
	//if we need it to be shown on the screen...
    /*orders.forEach(function(order) {
      orderMap[order._id] = order;
    });
    res.send(userMap);  
  });*/
	Order.find({}, (err, order) => {
        if (err) {
            res.status(404);
            res.send('Orders not found!');
        }
        else{
            res.json(order);
        }      
        console.log("in showAllOrders");
		console.log(order);
	});
}