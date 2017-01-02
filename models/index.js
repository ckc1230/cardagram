var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/fun-ecards");

var ECard = require('./ecards');

module.exports.ECard = ECard;