	
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderedItemSchema = new Schema({
	item_id:String,
	sum: Number,
	color:String
});
module.exports = mongoose.model('OrderedItem', OrderedItemSchema);