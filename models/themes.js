var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ECard = require('./ecards');

var ThemeSchema = new Schema({
  title: String,
  image: String
});

var Theme = mongoose.model('Theme', ThemeSchema);

module.exports = Theme;
