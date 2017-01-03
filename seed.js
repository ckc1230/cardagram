var db = require("./models");

var questionList = [];
var themeList = [];
var eCardList = [];

questionList.push({
  prompt: "You're Awesome because _____ .",
  response: "",
  image: "http://www.kazzledazz.com/wp-content/uploads/2015/02/friendship-cover.jpeg",
  theme: "Happy Birthday!"
})

questionList.push({
  prompt: "If I could get you anything in the world, it would have to be _____ .",
  response: "",
  image: "http://www.kiplinger.com/slideshow/credit/T065-S001-15-gifts-that-keep-on-giving/images/intro.jpg",
  theme: "Happy Birthday!"
})

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

db.Question.remove({}, function(err, questions) {
  db.Question.create(questionList, function(err, questions) {
    if (err) { return console.log("Error:", err) }
    console.log('Questions SAVED');
  })
    // Creating Themes
    // db.Theme.remove({}, function(err, themes) {
    //   db.Theme.create(themeList, function(err, themes) {
    //     if (err) { return console.log("Error:", err) }
    //   });
    //   console.log('Themes SAVED');


      db.Theme.remove({}, function(err, themes) {
        themeList.forEach(function(themeData) {
          var theme = new db.Theme(themeData);
          db.Question.find({ theme: themeData.title}, function(err, foundQuestions) {
            if (err) { return console.log("Error:",err) };
            theme.questions = foundQuestions;
            theme.save(function(err, savedECard) {
              if (err) { return console.log("Error:",err) };
            })
          })
        })
      
        console.log('Themes SAVED');

        // Creating eCards
        db.ECard.remove({}, function(err, ecards) {
          eCardList.forEach(function(eCardData) {
            var eCard = new db.ECard(eCardData);
            db.Theme.findOne({title: eCardData.theme}, function(err, foundTheme) {
              console.log("eCardData.theme: ", eCardData.theme)
              console.log("foundTheme: ", foundTheme)
              if (err) { return console.log("Error:",err) };
              eCard.theme = foundTheme;
              eCard.save(function(err, savedECard) {
                if (err) { return console.log("Error:",err) };
              })
            })
          })
        });
        console.log('ECards SAVED');
        // End eCards
      });
    // End Themes

  // End Questions
})

