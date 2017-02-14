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

var obj = {
	_id : "",
	color : "",
	quantity : ""
}
var problemsDocs = []; 

function cutShoppingCartItem(res) {
  		var shopingCartItem = myList.shift(); //removes the first from the array, and stores in variable 'url'
  		findItemById(shopingCartItem, findQuantityIdByColor, iterateOverShoppingCartItems,res);
  	};

function iterateOverShoppingCartItems(res) {
		 if (myList.length > 0) {   //callback
		 	cutShoppingCartItem(res);

		 }
		 else
		 {
		 	console.log("***updated***");
		 	res.send("goodd");
		 }

}
		
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
		console.log("POST.total",POST.total);
		myList = JSON.parse(POST.myList);
		cutShoppingCartItem(res);

		var newOrder = new Order ({firstName:user.firstName,lastName:user.lastName,street:user.street,country:user.country,zip:user.zip , email : user.email ,telephone : user.telephone, cellphone : user.cellphone,numItems:myList.length,payment:POST.total });
		var newOrderedItem = [];
		for(var i=0; i<myList.length;i++)
		{
			newOrderedItem[i] = new OrderedItem({item_id:myList[i].item_id,color:myList[i].color,sum:myList[i].sum});
			newOrderedItem[i].save();
			newOrder.orderedItems.push(newOrderedItem[i]);
		}
			newOrder.save();
	});

}

function findItemById(shopingCartItem, callback ,globalCallback,res){
	console.log("In findItemById")
	var id = shopingCartItem._id;
	Item.find({_id: id}, function(err, doc) {
		if (err) 
		{
			res.status(404);
			res.send('Item not found!');
		}
		callback(err, doc, shopingCartItem, updateQuantity , globalCallback , res);
	});
}

function findQuantityIdByColor(err, item, shopingCartItem, callback, globalCallback,res){
	console.log("In findQuantityByColor")
	if(err) 
	{
		console.log("Got ERROR instead of item")
	} 
	else 
	{
		var quantityIds = item[0].quantities;
		var color = shopingCartItem.color;
	}
	Quantity.find({_id: {$in:quantityIds}, name:color},(err, result) => {
		if (err) {
			throw err;
		}
		callback(err, result[0],shopingCartItem,globalCallback,res);
	});
}

function updateQuantity(err,quantity,shopingCartItem,globalCallback,res) {
	if (err) 
	{
		console.log("ERROR getting times")
	} 
	else 
	{			
		console.log("in updateQuantity");
		new_quantity = quantity.quantity-shopingCartItem.quantity;
		console.log("in updateQuantity````````````````",quantity.quantity,shopingCartItem.quantity);
		Quantity.findOne({ _id: quantity._id }).update({$set: { quantity: new_quantity }}).exec(function(err,result){
			if(err)
			{
				console.log("ERROR getting times");

			}
			else 
			{
				console.log("result",result);
			}
		});	
	}
globalCallback(res);
}

function checkShoppingCartItem(res) {
  		var shopingCartItem = myList.shift(); //removes the first from the array, and stores in variable 'url'
  		getItemById(shopingCartItem, getQuantityByColor, iterateOverShoppingCartItems,res);
};

function iterateOverShoppingCartItems(res) {
	if (myList.length > 0) 
	{   //callback
		checkShoppingCartItem(res);
	}
	else
	{
		console.log("***problemsDocs1111****"+problemsDocs);
		 res.json(problemsDocs);
	}

}

function quantity(req,res) {
	problemsDocs=[];
	console.log("in quantity");
	console.log("get post request in server side");  
	var body = '';
	req.on('data', function (data) {
		body += data;
		// 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) 
		{ 
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            req.connection.destroy();
        }
    });   
	req.on('end', function () {
		var POST = qs.parse(body); 
		console.log("POST 0",POST);
		myList=JSON.parse(POST.myList);

		checkShoppingCartItem(res);
	});
}
		
function getItemById(shopingCartItem, callback ,globalCallback,res){
	console.log("In getItemById");
	var id = shopingCartItem._id;
	Item.find({_id: id}, function(err, doc) {
		if (err) 
		{
			res.status(404);
			res.send('Item not found!');
		}
		callback(err, doc, shopingCartItem, compare,globalCallback,res);
	});
}

function getQuantityByColor(err, item, shopingCartItem, callback,globalCallback,res){
	console.log("In getQuantityByColor");
	if(err) 
	{
		console.log("Got ERROR instead of item")
	} 
	else 
	{
		var quantityIds = item[0].quantities;
		var color = shopingCartItem.color;
	}
	Quantity.find({_id: {$in:quantityIds}, name:color},(err, result) => {
		if (err) 
		{
			throw err;
		}
		console.log("!~~~~~~~~~~~~",result[0],quantityIds,shopingCartItem);
		callback(err, result,shopingCartItem,globalCallback,res);
	});
}

function consoleLog(err,result){
	if (err)
	{
		console.log("ERROR getting times")
	} 
	else 
	{
		console.log("//////////////quantity result/////////",result);
	}
}

function compare(err, item, shopingCartItem,globalCallback,res) {
	console.log("in compare");
	if (err) 
	{
		console.log("ERROR getting times")
	} 
	else 
	{
		if(item[0].quantity < shopingCartItem.quantity)
		{
			obj._id = shopingCartItem._id;
			obj.color = shopingCartItem.color;
			obj.quantity = item[0].quantity;
			problemsDocs.push(obj);
			console.log("/////obj/////",obj);
			console.log("***problemsDocs****"+problemsDocs);
		}
		else
		{
			console.log("true");
		}
			globalCallback(res);
	}
}