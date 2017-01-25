var qs = require('querystring');
var Item = require('../models/Item');

module.exports = {
  showAllItems: showAllItems,
  addItem: addItem,
  countItem: countItem,
  checkQuantity: checkQuantity,
  deleteItem: deleteItem,
  deleteAllItems: deleteAllItems,
  changeItem: changeItem,
  getProductDetails:getProductDetails,
  getProductsOfSubCategory:getProductsOfSubCategory
}

function showAllItems(req,res) {    
	Item.find({}, (err, stock) => {
        if (err) {
            res.status(404);
            res.send('Items not found!');
        }
        else{
            res.json(stock);
        }      
        console.log("in showAllItems");
		console.log(stock);
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
        var newItem = new Item({ category : POST.category,subCategory :  POST.subCategory ,name : POST.name , description : POST.description,price: POST.price, location : POST.location,"colors":{name:POST.name,quantity:POST.quantity}});
        newItem.save();           
        res.send(newItem);
        //showAllItems(req,res);
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

function checkQuantity (req,res){
	console.log("in checkQuantity");
	Item.$where('this.quantity <= this.minQuantity').exec(function(err, result) {
	if (err) {
	  throw err;
	}
	console.log(result);
	res.json(result);
	});
};

/*function checkQuantity (req,res){
	Item.$where('this.quantity <= this.minQuantity').exec(function(err, result) {
	if (err) {
	  throw err;
	}
  console.log(result);
  res.json(result);
	});

}*/

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
