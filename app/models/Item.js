var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	
/*var ItemSchema = new Schema({
    category: String,
	subCategory: String,
	name: String,
	description: String,
	location: String,
	price: Number,
	quantities:  [{ type: Schema.ObjectId, ref: 'Quantity' }]
	
});
*/

var ItemSchema = new Schema({
    category: String,
	subCategory: String,
	name: String,
	description: String,
	location: String,
	price: Number,
	colors:[String],
	quantities:[Number], 
	minQuantities:[Number],
	images:[Buffer]
});
module.exports = mongoose.model('Item',ItemSchema);
