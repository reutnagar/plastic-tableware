var mongoose = require('mongoose');
var Schema= mongoose.Schema;


var OrderSchema = new Schema({
    userName: String,
	email: String,
	address: String,
	status: String,
	date:{type: Date, default: Date.now},
	// function(){return new Date().getTime()} }
	numItems: Number,
	payment : Number,
	orderedItems: [{ type: Schema.ObjectId, ref: 'OrderedItem'}]
});

module.exports = mongoose.model('Order',OrderSchema);
