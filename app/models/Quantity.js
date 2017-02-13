var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuantitySchema = new Schema({
  name:   String,
 image:  String,
  quantity: Number,
  minQuantity: Number
});
module.exports = mongoose.model('Quantity', QuantitySchema);