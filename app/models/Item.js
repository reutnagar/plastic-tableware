var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Color = new Schema({
  name:   String,
  image:  Buffer,
  quantity: Number,
  minQuantity: Number
});

module.exports = mongoose.model('Item',{
    category: String,
	subCategory: String,
	id: Number,
	name: String,
	description: String,
	location: String,
	price: Number,
	//quantity: Number,
	//minQuantity: Number,
	colors:   [Color]    
});

/*var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
 
var connection = mongoose.createConnection("mongodb://test:1234qwer@ds054619.mlab.com:54619/plastic-tableware");
 
autoIncrement.initialize(connection);
 
var itemSchema = new Schema({
    category: String,
	subCategory: String,
	index:{ type: Number, ref: 'index' },
	name: String,
	description: String,
	location: String,
	quantity: Number,
	minQuantity: Number,
	//colors:   [Color]   
});

var indexSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Item',itemSchema);
//module.exports = mongoose.model('index',indexSchema);
 
//itemSchema.plugin(autoIncrement.plugin, 'Item');
//var Item = connection.model('Item', itemSchema);
//indexSchema.plugin(autoIncrement.plugin, 'index');
itemSchema.plugin(autoIncrement.plugin, {
    model: 'Item',
    field: 'itemId',
    startAt: 100,
    incrementBy: 100
});*/