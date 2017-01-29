
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
	addToCart = JSON.parse(retrievedObject);
	
	_userName = addToCart.userName;
	_email = addToCart.email;
	_address = addToCart.address;
	_numItems = addToCart.numItems;
	_payment : addToCart.payment;
	
	_item_id = addToCart._id;
	_color = addToCart.color;
	_sum = addToCart.sum;
	
	var newOrder = new Order {{userName:_userName,email: _email,address:_address,status:"התקבלה הזמנה",numItems:_numItems,payment:_payment});
	var newOrderedItem = new OrderedItem({item_id:_item_id,color:_color,sum:_sum});
	newOrderedItem.save(function(err, newOrderedItem){
	newOrder.quantities.push(newOrderedItem);
	newOrder.save();
	}):
	
}