var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theme = require('./themes');

var ECardSchema = new Schema({
  message: String,
  theme: {
    type: Schema.Types.Object, 
    ref: 'Theme'
  },
  ecardSent: { type: Boolean, default: false }
});

var ECard = mongoose.model('ECard', ECardSchema);

module.exports = ECard;
