/*
var qs = require('querystring');
var Item = require('../models/Item');
var Quantity = require('../models/Quantity');

function addToCart(req,res) {
	console.log("in addToCart");
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
		Item.findOne({_id : POST.item_id,'quantities':{name:POST.color}).where(quantities.quantity).gt(POST.sum).exec(function(err, item) { 
		if (err) {
            res.status(404);
            res.send('item not found!');
        }
        else{
			cart.push(body);
			console.log("body:" +body+"item: "+item);
        }      
	});
});
}

function makeAnOrder(req,res) {
	console.log("in makeAnOrder");
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('addToCart');
	myList = JSON.parse(retrievedObject);
	
	item_id = myList._id;
	color = myList.color;
	sum = myList.sum;
	
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
		Item.findByIdAndUpdate(POST._id, {quantities.quantity : quantiy-POST.sum}.where(quantities.quantity ).gt(POST.sum).exec(function(err, doc) {
			if(err){
				throw err;
			}
			console.log("this is the doc variable: "+doc);
			console.log("updated");
		});
		var newOrder = new Order {{userName:POST.userName,email:POST.email,address:POST.address,status:"התקבלה הזמנה",numItems:POST.numItems,payment:POST.payment});
		var newOrderedItem = new OrderedItem({item_id:item_id,color:color,sum:sum});
		newOrderedItem.save(function(err, newOrderedItem){
		newOrder.quantities.push(newOrderedItem);
		newOrder.save();
		}):
	
}

function quantity(req,res) {
	console.log("in makeAnOrder");
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
		Item.findOne({_id : POST._id,'quantities':{name:POST.color}},{ quantities.quantity:1}).exec(function(err, quantity) { 
		//Item.findOne({_id : POST._id,'quantities':{name:POST.color}}).where(quantities.quantity).gt(POST.sum).exec(function(err, item) { 
		if (err) {
            res.status(404);
            res.send('item not found!');
        }
        else{
			console.log("quantity: "+quantity);
			res.send(quantity);
        }      
		});
	});
	
}*/