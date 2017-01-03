var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/fun-ecards");

var ECard = require('./ecards');
var Theme = require('./themes');
var Question = require('./questions');

module.exports.ECard = ECard;
module.exports.Theme = Theme;
module.exports.Question = Question;

