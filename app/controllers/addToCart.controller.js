
/*function addToCart(req,res) {
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
}*/

/*function makeAnOrder(req,res) {
	console.log("in makeAnOrder");
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('myList');
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
	
}*/


//do not delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
var qs = require('querystring');
var Item = require('../models/Item');
var Quantity = require('../models/Quantity');

module.exports = {
	quantity: quantity,
	//addToCart:addToCart,
	makeAnOrder: makeAnOrder
}
	

function makeAnOrder(req,res) {
	console.log("in makeAnOrder");
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('myList');
	myList = JSON.parse(retrievedObject);
	
	item_id = myList.item_id;
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
			for(var i = 0 ; i < item_id.length ; i++)
			{
				Item.find({_id: item_id[i]},function(err,doc){
					if(err){
						throw err;
					}
				console.log(doc);
				var colorsDoc = doc.colors;
				for(var j = 0 ; j < colorsDoc.length ; j++)
					if(color[i]==colorsDoc[j])
					{
						Item.findByIdAndUpdate(item_id[i], {quantities[j] : quantities[j]-sum[i]}).exec(function(err, result) {
						if(err){
							throw err;
						}
						console.log("this is the doc variable: "+result);
						console.log("updated");
						});
					}
				});
			} 
		var newOrder = new Order ({userName:POST.userName,email:POST.email,address:POST.address,status:"התקבלה הזמנה",numItems:POST.numItems,payment:POST.payment});
		for(var k=0 ; k < item_id.length ;k++)
		{
			newOrder.item_id.push(item_id[k]);
			newOrder.color.push(color[k]);
			newOrder.sum.push(sum[k]);
		}
		newOrder.save();
		}):
}



function quantity(req,res) {
	console.log("in quantity");
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
			Item.find({_id: item_id[i]},function(err,doc){
						if(err){
							throw err;
						}
					console.log(doc);
					var colorsDoc = doc.colors;
					for(var j = 0 ; j < colorsDoc.length ; j++)
						if(POST.color==colorsDoc[j])
						{
							Item.findOne({_id : POST._id},{ quantities[j]:1}).exec(function(err, quantity) { 
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
						}						
			});
		});
	
}*/