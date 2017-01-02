var db = require('./models');

var eCardList = [];

eCardList.push({
  message: "Happy Birthday!"
});

eCardList.push({
  message: "Happy New Year!"
});

db.ECard.remove({}, function(err, ecards) {
  db.ECard.create(eCardList, function(err, ecards) {
    if (err) { return console.log('Error:', err) }
    console.log('all ecards:', ecards);
    console.log('created', eCardList.length, 'eCards');
  });
});