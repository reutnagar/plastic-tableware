
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

function showLastOrders(req,res) {
	var newStartTime; //Start time for class to be created.
	var newEndTime;   //End time for class to be created.

	Order.find({$and: [
	{$or: [{$and: [{start_time: {$lte: newStartTime}}, {end_time: {$gte: newStartTime}}]}, {$and: [{start_time: {$lte: newEndTime}}, {end_time: {$gte: newEndTime}}]}]},
	{$not: {$or: [{start_time: {$eq: newEndTime}}, {end_time: {$eq: newStartTime}}]}}
	]}, function (err, results) {

		if (err) {
			//handle error
			return;
		}

		if (results.length > 0)
		{
			//Clashing class, handle
		}
	});
}
