var db = require("./models");

var themeList = [];
var eCardList = [];

themeList.push({
  title: "Happy Birthday!",
  image: "http://www.sparklebox.co.uk/4931-4940/_wp_generated/ppc4396fa1_02.jpg"
});

themeList.push({
  title: "Happy New Year!",
  image: "http://www.sparklebox.co.uk/3581-3590/_wp_generated/ppf2be0cad_02.jpg"
});

eCardList.push({
  message: "Wow! It's your birthday. Boy are you getting old. Have a great one. - Lily and Chris",
  theme: "Happy Birthday!"
});

eCardList.push({
  message: "Another year. Here we go!",
  theme: "Happy New Year!"
});

var savedThemes = [];

db.Theme.remove({}, function(err, themes) {
  db.Theme.create(themeList, function(err, themes) {
    if (err) { return console.log("Error:", err) }
  });
  console.log('Themes SAVED');
  db.ECard.remove({}, function(err, ecards) {
    eCardList.forEach(function(eCardData) {
      var eCard = new db.ECard(eCardData);
      db.Theme.findOne({title: eCardData.theme}, function(err, foundTheme) {
        if (err) { return console.log("Error:",err) };
        eCard.theme = foundTheme;
        eCard.save(function(err, savedECard) {
          if (err) { return console.log("Error:",err) };
        })
      })
    })
  });
  console.log('ECards SAVED');
});
