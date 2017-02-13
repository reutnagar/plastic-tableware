var qs = require('querystring');
var Item = require('../models/Item');
var Quantity = require('../models/Quantity');
var Order = require('../models/Order');
var OrderedItem = require('../models/OrderedItem');

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
var myList = new Object();

module.exports = {
	quantity: quantity,
	makeAnOrder: makeAnOrder
}
	
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

function makeAnOrder(req,res) {
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
        console.log("body",body);
        console.log("POST",POST);
        var user = JSON.parse(POST.user);
        console.log("user.userName",user.firstName);
        var myList = JSON.parse(POST.myList);
		myList.forEach(function (value, index) {
			var colorId=colorConverterId(mylist[index]._id,myList.name);
			Quantity.findByIdAndUpdate(colorId, {quantity : POST.sum}).where(quantity ).gt(POST.sum).exec(function(err, doc) {
				if(err){
					throw err;
				}
				console.log("this is the doc variable: "+doc);
				console.log("updated");
			});
			var newOrder = new Order ({userName:POST.userName,email:POST.email,address:POST.address,status:"התקבלה הזמנה",numItems:POST.numItems,payment:POST.payment});
			var newOrderedItem = [];
			var o=JSON.parse(POST.orderedItems);
			for(var i=0; i<o.length;i++)
			{
				newOrderedItem[i] = new OrderedItem({item_id:0[i].item_id,color:o[i].color,sum:o[i].sum});
				newOrderedItem[i].save();
				newOrder.orderedItems.push(newOrderedItem[i]);
			}
			newOrder.save();
			});
		});
}

function colorConverterId(id,color){
	for(var i=0;i<size;i++)	
	{
		Item.find({id:id},(err, doc) => {
				if (err) {
					console.log("doc not found");
				}
				console.log("doc"+doc);
				for(var i=0;i<doc[0].quantities.length;i++)
				{
					console.log(doc[0].quantities[i]);
					Quantity.find({_id:doc[0].quantities[i]},(err, result) => {
					if (err) {
						throw err;
					}
					console.log(result[0].name);
					if(result[0].name==color)
					{
						console.log("_id of color "+result[0].name+" is: "+result[0]._id);
						return result[0]._id;
					}
					});
				}
	});	
	}	
}
	
//do not delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*

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
}*/

function quantity(req,res) {
	console.log("in quantity");

	var obj = {
			_id : "",
			color : "",
			quantity : ""
	}
	var problemsDocs = []; 

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
        	var l =0;
        		

        var POST = qs.parse(body); 
console.log("POST 0",POST);
		myList=JSON.parse(POST.myList);
// console.log("POST 1",myList);
// console.log("POST 2",myList[0]);
		for(var j=0;j<myList.length;j++)
		{console.log("myList[]",myList[j]);
			Item.find({_id: myList[j]._id},(err, doc) => {
				if (err) {
					res.status(404);
					res.send('Item not found!');
				}
				console.log("doc~~~~~~~~~~~"+doc[0].quantities);
				for(var i=0;i<doc[0].quantities.length;i++)
				{
					console.log("~~~~~~~~~~~~~"+i+doc[0].quantities[i]);
					Quantity.find({_id:doc[0].quantities[i]},(err, result) => {
					if (err) {
						throw err;
					}
					
					if(result[0].name==myList[l].color)
					{
						
						console.log("~~~~~~~~~~~~~"+myList[l].color);
						console.log("yes");
						console.log("sum "+result[0].quantity);
						if(result[0].quantity < myList[l].quantity)
						{
							obj._id = myList[l]._id;
							obj.color = myList[l].color;
							obj.quantity = result[0].quantity;
							problemsDocs.push(obj);
							console.log("//////////////"+obj._id);
						}
						l++;
						if(l==myList.length)
		{

			res.json(problemsDocs);	
		}	
						console.log("l"+l);
					}
				
					});
				}
			});
		}

	});

}
					