/* MODULE IMPORTS */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


/* DATABASE */

var db = require('./models');

/* HTML ROUTES */ 

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/* API ROUTES */ 

app.get('/api/ecards', function indexECards(req, res) {
  db.ECard.find({}, function(err, allECards) {
    if (err) { throw err; };
    res.json(allECards);
  });
});

app.get('/api/themes', function indexThemes(req, res) {
  db.Theme.find({}, function(err, allThemes) {
    if (err) { throw err; };
    res.json(allThemes);
  });
});

/* SERVER SET UP */ 

app.listen(process.env.PORT || 3000, function() {
  console.log('Your server is running on port 3000');
});