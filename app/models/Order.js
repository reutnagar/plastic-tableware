var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var orderedItem= new mongoose.Schema({
	name: String,
	quantity: Number,
	color:String
});	

module.exports = mongoose.model('Order',{
    userName: String,
	email: String,
	address: String,
	status: String,
	date:{type: Date, default: Date.now},
	// function(){return new Date().getTime()} }
	orderedItems: [orderedItem]
});
