
var express = require('express');
var qs = require('querystring');
var router = express.Router();
router.get('/showAllCategories', showAllCategories);
router.post('/showAllSubCategories', showAllSubCategories);

var Item = require('../models/Item');
var path = require('path');

module.exports = router;

function showAllCategories(req,res) {    
    console.log("in the showAllCategories");
	Item.find({}).select('category').exec(function(err, category){
        if (err) {
            res.status(404);
            res.send('categories not found!');
        }
        else{
            res.json(category);
        }      
        console.log("in showAllCategories");
		console.log(category);
  });
  
}

function showAllSubCategories(req,res) { 

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
		Item.find({category: POST.category }).select('subCategory').exec(function(err, subCategory){
        if (err) {
            res.status(404);
            res.send('subCategories not found!');
        }
        else{
            res.send(subCategory);
        }      
        console.log("in showAllSubCategories");
		console.log(subCategory);
  });
  
});
}
