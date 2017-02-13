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

				var newOrder = new Order ({firstName:user.firstName,lastName:user.lastName,street:user.street,country:user.country,zip:user.zip , email : user.email ,telephone : user.telephone, cellphone : user.cellphone,payment:POST.total });
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
		//console.log("In getItemById")
		var id = shopingCartItem._id;

		Item.find({_id: id}, function(err, doc) {
			if (err) {
				res.status(404);
				res.send('Item not found!');
			}
			callback(err, doc, shopingCartItem, updateQuantity , globalCallback , res);
		});
	}

	function findQuantityIdByColor(err, item, shopingCartItem, callback, globalCallback,res){
	//console.log("In getQuantityByColor")

	if(err) {
		//console.log("Got ERROR instead of item")
	} else {
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
			if (err) {
				console.log("ERROR getting times")
			} else {			console.log("in updateQuantity");

				new_quantity = quantity.quantity-shopingCartItem.quantity;
				console.log("in updateQuantity````````````````",quantity.quantity,shopingCartItem.quantity);
				Quantity.findOne({ _id: quantity._id }).update({$set: { quantity: new_quantity }}).exec(function(err,result){
					if(err)
					{
										console.log("ERROR getting times");

					}
					else {
										console.log("result",result);

					}
				});
			
			}
			globalCallback(res);
		}



// function colorConverterId(id,color,callback,res){

// 	Item.find({_id:id},(err, doc) => {
// 			if (err) {
// 				console.log("doc not found");
// 			}
// 			console.log("doc"+doc);
// 			for(var i=0;i<doc[0].quantities.length;i++)
// 			{
// 				console.log(doc[0].quantities[i]);
// 				Quantity.find({_id:doc[0].quantities[i]},(err, result) => {
// 					if (err) {
// 						throw err;
// 					}
// 					console.log(result[0].name);
// 					if(result[0].name==color)
// 					{
// 						console.log("_id of color "+result[0].name+" is: "+result[0]._id);
// 						return result[0]._id;
// 					}
// 				});
// 			}
// 		});	
// }

// function colorConverterId(id,color){
	
// 		Item.find({_id:id},(err, doc) => {
// 			if (err) {
// 				console.log("doc not found");
// 			}
// 			console.log("doc"+doc);
// 			for(var i=0;i<doc[0].quantities.length;i++)
// 			{
// 				console.log(doc[0].quantities[i]);
// 				Quantity.find({_id:doc[0].quantities[i]},(err, result) => {
// 					if (err) {
// 						throw err;
// 					}
// 					console.log(result[0].name);
// 					if(result[0].name==color)
// 					{
// 						console.log("_id of color "+result[0].name+" is: "+result[0]._id);
// 						return result[0]._id;
// 					}
// 				});
// 			}
// 		});	
// 	}	


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

	

	function checkShoppingCartItem(res) {
  		var shopingCartItem = myList.shift(); //removes the first from the array, and stores in variable 'url'
  		getItemById(shopingCartItem, getQuantityByColor, iterateOverShoppingCartItems,res);
  	};

  	function iterateOverShoppingCartItems(res) {
		 if (myList.length > 0) {   //callback
		 	checkShoppingCartItem(res);

		 }
		 else
		 {
		 	//console.log("***problemsDocs1111****"+problemsDocs);
		 	res.json(problemsDocs);
		 }

		}

		function quantity(req,res) {
			problemsDocs=[];
			//console.log("in quantity");
			//console.log("get post request in server side");  
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
				console.log("POST 0",POST);
				myList=JSON.parse(POST.myList);

				checkShoppingCartItem(res);
				
				

				

			});
		}
		function getItemById(shopingCartItem, callback ,globalCallback,res){
			//console.log("In getItemById")
			var id = shopingCartItem._id;

			Item.find({_id: id}, function(err, doc) {
				if (err) {
					res.status(404);
					res.send('Item not found!');
				}
				callback(err, doc, shopingCartItem, compare,globalCallback,res);
			});
		}
		function getQuantityByColor(err, item, shopingCartItem, callback,globalCallback,res){
			//console.log("In getQuantityByColor")

			if(err) {
				//console.log("Got ERROR instead of item")
			} else {
				var quantityIds = item[0].quantities;
				var color = shopingCartItem.color;
			}
			Quantity.find({_id: {$in:quantityIds}, name:color},(err, result) => {
				if (err) {
					throw err;
				}
				callback(err, result,shopingCartItem,globalCallback,res);
			});
		}

		function consoleLog(err,result){
			if (err) {
				console.log("ERROR getting times")
			} else {
				//console.log("//////////////quantity result/////////",result);
			}
		}

		function compare(err, item, shopingCartItem,globalCallback,res) {
			//console.log("in compare");
			if (err) {
				//console.log("ERROR getting times")
			} else {
				if(item[0].quantity < shopingCartItem.quantity)
				{
					obj._id = shopingCartItem._id;
					obj.color = shopingCartItem.color;
					obj.quantity = item[0].quantity;
					problemsDocs.push(obj);
					//console.log("/////obj/////",obj);
					//console.log("***problemsDocs****"+problemsDocs);
				}
				else
					console.log("true");
			}
			globalCallback(res);
		}