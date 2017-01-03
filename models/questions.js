var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Question = require('./questions');

var QuestionSchema = new Schema({
  prompt: String,
  response: String,
  image: String,
  theme: String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
