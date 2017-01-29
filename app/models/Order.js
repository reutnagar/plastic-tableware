var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var OrderedItem= new mongoose.Schema({
	item_id: String,
	sum: Number,
	color:String
});	

module.exports = mongoose.model('Order',{
    userName: String,
	email: String,
	address: String,
	status: String,
	date:{type: Date, default: Date.now},
	// function(){return new Date().getTime()} }
	numItems: Number,
	payment : Number,
	orderedItems: [OrderedItem]
});
