var qs = require('querystring');
var Item = require('../models/Item');
var Quantity = require('../models/Quantity');

module.exports = {
	showAllItems: showAllItems,
	getQuantities: getQuantities,
	addItem: addItem,
	countItem: countItem,
	checkQuantity: checkQuantity,
	deleteItem: deleteItem,
	deleteItemById: deleteItemById,
	deleteAllItems: deleteAllItems,
	changeItem: changeItem,
	getProductDetails:getProductDetails,
	getProductsOfSubCategory:getProductsOfSubCategory,
	checkIfItemExistsInStock :checkIfItemExistsInStock
	
}

function getQuantities(req,res){
	console.log("in getQuantities");
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
		var POST=JSON.parse(POST.quantities);
		console.log("POST~~~~~~~~",POST);
		console.log("POST.quantities~~~~~",POST[0]);
	// 	console.log("POST[0]~~~~~~",POST.quantities[0]);
	// 	var POST = qs.parse(POST.quantities);
	// 	console.log(" POST ~~~~~ after parse 2~~~",POST);
	// console.log("POST[0]~~~~~~",POST[0]);
	// 	console.log("POST parse~~~~~~~~",POST);
	// 		console.log("POST parse~~~~~~~~",POST);
	var results=[],length=0;
			// for (var i=0;i<POST.length;i++)
			// 	{
				console.log("POST~~~~~~~~",POST.length);
				Quantity.find({_id:{$in:POST}},(err, results)=>{
					if (err) 
					{
						return err;
					}
					else
					{
						res.json(results);
						console.log("result~~~~~~~~"+results);
						// results.push(result);
						// console.log("results~~~~~~~"+results);
						// length++;
					}      
				});
				// }
			// if(length==POST.length-1)
			// {
			// 	console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~results~~~~~~~~~~~~~~~");
			
			//}
		});
}

function showAllItems(req,res) { 
	console.log("in showAllItems");	   
	Item.find({}, (err, stock) => {
		if (err) {
			res.status(404);
			res.send('Items not found!');
		}
		else{
			console.log(stock);
			res.json(stock);
		}      
		
	});
	
}


function ifItemExsists(newItem) {
	//Item.find({this.category:newItem.category,this.subCategory:newItem.subCategory,this.name:newItem.name},function(err,docs){
		Item.find({}).where('category').equals(newItem.category).exec(function(err,docs){
			var count = docs.length;
			console.log(newItem.category);
			if (err) {
				throw err;
			}
			else 
			{
				if (count!=0)
				{
					console.log("!=0"+docs + "count:" + count);
					console.log("item exsists "+docs);
					return true;
				}
				else 
				{
					console.log("0"+docs +  "count:" + count);
					console.log("item is not Exsists");
					return false;
				}
			}
		});
	}


	function addItem(req,res) {
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
        //console.log("POST",POST);
        //console.log("body",body);
        var a=JSON.parse(POST.quantities);
		//console.log("add body "+body);
		var newItem = new Item({ category : POST.category,subCategory :  POST.subCategory ,name : POST.name , description : POST.description,price: POST.price, location : POST.location});
		//console.log("POST.quantities now in json",POST.quantities);
//console.log("first parse:",a[0].name);
//console.log("second parse",a[0]);
var newQuantity = [];
for(var i=0; i<a.length;i++)

{
	newQuantity[i] = new Quantity({name: a[i].name,quantity: a[i].quantity,minQuantity: a[i].minQuantity,image: a[i].image});
	

		//var newQuantity = new Quantity({name:POST.quantitiesName,quantity: POST.quantitiesQuantity});
		//console.log("POST.quantities: "+POST.quantitiesName);
		//console.log("a.quantities: "+a.quantities);
		newQuantity[i].save();
		newItem.quantities.push(newQuantity[i]);}
		newItem.save();
			//}); 
	//newItem.isNew;
			/*newItem.save();
	
		
		if(ifItemExsists(newItem))
		{
			console.log("this item exsists already");
			res.send("this item exsists already");
		}
		else  
		{
			var newItem = new Item({ category : POST.category,subCategory :  POST.subCategory ,name : POST.name , description : POST.description,price: POST.price, location : POST.location});
			//var newQuantity = new Quantity({quantities: POST.quantities});
			console.log("in else");
			//newQuantity.save(function(err, newQuantity){
			//newItem.quantities.push(newQuantity);
			//newItem.save();
			//});   
			
		}*/
		res.send(newItem);
	});
	}

	function countItem(req,res) {   
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
			Item.find({ category : POST.category,name : POST.name}, (err, result) => {
				if (err) {
					res.status(404);
					res.send('Items not found!');
				}
				else{
					res.send(result);
				}      
				console.log("in countItem");
				console.log(result);
			});
		});
		
	}

/*function checkQuantity (req,res){
	console.log("in checkQuantity");
	Item.$where('this.quantity <= this.minQuantity').exec(function(err, result) {
	if (err) {
	  throw err;
	}
	console.log(result);
	res.json(result);
	});
};*/

/*function checkQuantity (req,res){
	console.log("in checkQuantity");
	var items = [],j=0;
	Quantity.$where('this.quantity <= this.minQuantity').exec(function(err, results) {
		if (err) {
		  throw err;
		}
		else {
		console.log(results);
		console.log(results.length);
		for(var i=0;i<results.length;i++)
		{
		
			
			console.log(results[i]._id);
				Item.find({'quantities._id': results[i]._id},function(err, doc) {
					//Item.find({ 'quantities': { $elemMatch: { '_id': '589c41f7885f303794df6939'}}}, function(err, doc) {
						if (err) {
							throw err;
						}
						else{
							//j++;
						console.log("item "+doc+" is going to finish");
						items.push(doc);
						
						}
				});
			
		}
		if(j==results.length)
			{
			console.log("a");
			res.json(items);
			}
		}
	});
}*/

function checkQuantity (req,res){
	console.log("in checkQuantity");
	var items = [];
	Quantity.$where('this.quantity <= this.minQuantity').exec(function(err, results) {
		if (err) {
			throw err;
		}
		else 
		{
			for(var f=0;f<results.length;f++)
				items[f]=new Object();
			console.log(results);
			console.log(results.length);
			Item.find({}).exec(function(err,docs){
				for(var i=0;i<docs.length;i++)
				{
					for(var j=0;j<docs[i].quantities.length;j++)
					{
						console.log(docs[i].quantities[j]);
						console.log(results[0]._id);
						for(var k=0;k<results.length;k++)
						{
							if(docs[i].quantities[j] != results[k]._id)
							{
								
								console.log("Aaaaaaaaaaaaa");
								items[k].name=docs[i].name;
								items[k].color = results[k].name;
								items[k].quantity=results[k].quantity;
								console.log(items);
							}
						}
					}
				}
				console.log("S"+items);
				res.json(items);
			});
			
		}
	});
}

function deleteAllItems(req,res) {
	Item.remove ({},function(err, result) {
		if (err) {
			throw err;
		}
		console.log(result);
		res.json(result);
	});
}

function deleteItem(req,res) {
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
		Item.remove({ category:POST.category , name:POST.name},function(err, result) {
			if (err) {
				throw err;
			}
			res.send("success");
		});
	});
};


function deleteItemById(req,res) {
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
		Item.remove({_id:body},function(err, result) {
			if (err) {
				throw err;
			}
			res.send("success");
		});
	});
};

function changeItem(req,res) {
	console.log("in changeItem");
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
		Item.findByIdAndUpdate(POST._id, {category : POST.category,subCategory :  POST.subCategory , description : POST.description,price: POST.price, location : POST.location, name : POST.name }, function(err, doc){
			if(err){
				throw err;
			}
			console.log("thid is the doc variable: "+doc);
			console.log("updated");
			//res.json("Item");
		});
	});
}

function getProductDetails(req,res) {
	console.log("in getProductDetails");
	console.log("get post request in server side");  
	var body = '';
	req.on('data', function (data) {
		body += data;
		console.log('body',body)
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });   
	req.on('end', function () {
		console.log('body',body);	
		Item.find({_id:body}, (err, item) => {
			if (err) {
				res.status(404);
				res.send('item not found!');
			}
			else{
				res.json(item);
			}      
			console.log(item);
		});
	});
}

function getProductsOfSubCategory (req,res) {
	console.log("in getProductsOfSubCategory");
	var body = '';
	req.on('data', function (data) {
		body += data;
		console.log('body',body)
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });  
	req.on('end', function () {
		console.log('body',body);	
		Item.find({subCategory:body}, (err, items) => {
			if (err) {
				res.status(404);
				res.send('items not found!');
			}
			else{
				res.json(items);
			}      
			console.log(items);
		});
	});
}	

function checkIfItemExistsInStock(req,res){
	console.log("in checkIfItemExistsInStock");
	var body = '';
	req.on('data', function (data) {
		body += data;
		console.log('body',body)
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });  
	req.on('end', function () {
		console.log('body',body);	
		Item.find({_id:body}, (err, items) => {
			if (err) {
				res.status(404);
				res.send('items not found!');
			}
			else{
				res.json(items);
			}      
			console.log(items);
		});
	});
}	
