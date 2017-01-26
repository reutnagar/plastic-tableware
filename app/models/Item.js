var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	
var ItemSchema = new Schema({
    category: String,
	subCategory: String,
	name: String,
	description: String,
	location: String,
	price: Number,
	quantities:  [{ type: Schema.ObjectId, ref: 'Quantity' }]
	
});

module.exports = mongoose.model('Item',ItemSchema);

