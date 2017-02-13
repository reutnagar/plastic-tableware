var mongoose = require('mongoose');
var Schema= mongoose.Schema;


var OrderSchema = new Schema({
    firsName: String,
    lastName: String,
	street: String,
	country: String,
	zip: Number,
	email: String,
	telephone: Number,
	cellphone : Number,
	date:{type: Date, default: Date.now},
	status: String,
	//numItems: Number,
	payment : Number,
	orderedItems: [{ type: Schema.ObjectId, ref: 'OrderedItem'}]
});

module.exports = mongoose.model('Order',OrderSchema);
