var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ECardSchema = new Schema({
  message: String
});

var ECard = mongoose.model('ECard', ECardSchema);

module.exports = ECard;
