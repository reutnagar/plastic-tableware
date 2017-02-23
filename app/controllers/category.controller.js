var qs = require('querystring');
var Item = require('../models/Item');

module.exports = {
    showAllCategories: showAllCategories,
    showAllSubCategories: showAllSubCategories
};

function showAllCategories(req, res) {
    console.log("in the showAllCategories");
    //Item.find({},{ category:1, _id: 0 }).exec(function(err, category){
    Item.find({}).distinct('category').exec(function (err, category) {
        if (err) {
            res.status(404);
            res.send('categories not found!');
        } else {
            res.json(category);
        }
        console.log("in showAllCategories");
        console.log(category);
    });

}

function showAllSubCategories(req, res) {

    console.log("get post request in server side");
    var body = '';
    req.on('data', function (data) {
        body += data;
        console.log('body', body)
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) {
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            req.connection.destroy();
        }
        console.log('data', data);
    });
    req.on('end', function () {
        console.log('body', body);
        Item.find({
            category: body
        }).distinct('subCategory').exec(function (err, subCategory) {
            if (err) {
                res.status(404);
                res.send('subCategories not found!');
            } else {
                console.log("subCategory", subCategory);
                res.json(subCategory);
            }
            console.log("in showAllSubCategories");
            console.log(subCategory);
        });

    });
}