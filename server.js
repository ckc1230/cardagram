/* MODULE IMPORTS */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

/* SERVER SET UP */ 

app.listen(process.env.PORT || 3000, function() {
  console.log('Your server is running on port 3000');
})