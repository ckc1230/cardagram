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

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/* API ROUTES */ 

app.get('/api/ecards', function indexECards(req, res) {
  db.ECard.find({}, function(err, allECards) {
    if (err) { throw err; };
    res.json(allECards);
  });
});

app.get('/api/ecards/:id', function showECard(req, res) {
  db.ECard.findById({ _id: req.params.id }, function(err, eCard) {
    if (err) { throw err; };
    res.json(eCard);
  });
});

app.patch('/api/ecards/:id', function updateECard(req, res) {
  console.log("req.body.ecardSent:",req.body.ecardSent);
  db.ECard.findById({ _id: req.params.id }, function(err, eCard) {
    if (err) { throw err; };
    eCard.ecardSent = req.body.ecardSent;
    eCard.save(function(err, saved) {
      res.json(eCard);
    });
  });
});

app.post('/api/ecards', function createECard(req, res) {
  var newECard = {
    message: req.body.message,
    theme: req.body.theme
  }
  db.ECard.create(newECard, function(err, ecard) {
    if (err) { throw err; };
    res.json(ecard);
  });
});

app.get('/api/themes', function indexThemes(req, res) {
  db.Theme.find({}, function(err, allThemes) {
    if (err) { throw err; };
    res.json(allThemes);
  });
});

app.get('/api/themes/:id', function showTheme(req, res) {
  db.Theme.findById({ _id: req.params.id }, function(err, theme) {
    if (err) { throw err; };
    res.json(theme);
  });
});

app.get('/api/questions', function indexQuestions(req, res) {
  db.Question.find({}, function(err, allQuestions) {
    if (err) { throw err; };
    res.json(allQuestions);
  });
});

app.get('*', function homepage(req,res) {
  res.sendFile(__dirname + '/views/index.html')
})

/* SERVER SET UP */ 

app.listen(process.env.PORT || 3000, function() {
  console.log('Your server is running on port 3000');
});