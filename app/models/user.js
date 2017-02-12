var mongoose = require('mongoose');
var Schema= mongoose.Schema;

module.exports = mongoose.model('User',{

    userName : String,
    password : String
});