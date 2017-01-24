var qs = require('querystring');
var Order = require('../models/Order');

module.exports = {
  showAllOrders: showAllOrders,
  showLastOrders: showLastOrders,
  ordersOfUserName: ordersOfUserName
 }

function showAllOrders(req,res) {
    console.log("showAllOrders");
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
	/*var newStartTime; //Start time for class to be created.
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
	});*/
	//Order.find({}).sort({lastModifiedDate:-1}).limit(10)
	console.log("in showlastOrders");
	//addOrder(req,res);
	Order.find({}).sort({date: -1}).limit(2).exec(function(err, orders) { 
		if (err) {
            res.status(404);
            res.send('Orders not found!');
        }
        else{
            res.json(orders);
			console.log(orders);
        }      
	});
}

function addOrder(req,res) {
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
        var newOrder = new Order({ userName : "userName",status :  "status"});
        newOrder.save();           
        res.send(newOrder);
        //showAllItems(req,res);
        });
}

function ordersOfUserName(req,res) {
	console.log("in ordersOfUserName");
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
		Order.find({userName : POST.userName}).sort({date: -1}).exec(function(err, orders) { 
		if (err) {
            res.status(404);
            res.send('Orders not found!');
        }
        else{
            res.json(orders);
			console.log(orders);
        }      
	});
});
}
