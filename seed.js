var db = require("./models");

var questionList = [];
var themeList = [];
var eCardList = [];

/* QUESTIONS */

/* Birthday Questions */

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

/* Mother's Day Questions */

questionList.push({
  prompt: "You're Awesome because _____ .",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/736x/3e/6b/4f/3e6b4f008c6d66abbf4e7c5426e4ad5c.jpg",
  theme: "Happy Mother's Day!"
})

questionList.push({
  prompt: "Your superpower is ______ .",
  response: "",
  image: "http://cdn.skim.gs/image/upload/v1456339293/msi/10-Qualities-SM-Art-Img_afs73h.jpg",
  theme: "Happy Mother's Day!"
})

questionList.push({
  prompt: "I love the way you _____ .",
  response: "",
  image: "http://2.bp.blogspot.com/-i4ajtFfZtZw/VUjaCQ5knYI/AAAAAAAAH8g/Q8xTUOgRMvU/s1600/walking%2Bdesert.png",
  theme: "Happy Mother's Day!"
})

questionList.push({
  prompt: "Thanks for supporting me when I _____ .",
  response: "",
  image: "http://garak.wimp.com/images/sthumbs/2015/09/88cb64ce64bd39e9c1d5c4a2cff5b793_crosscountry3.jpg",
  theme: "Happy Mother's Day!"
})

questionList.push({
  prompt: "You are the best at _____ .",
  response: "",
  image: "http://www.womencanbuild.org/wp-content/uploads/2015/05/Rosie_0011.jpg",
  theme: "Happy Mother's Day!"
})

questionList.push({
  prompt: "I want to be _____ , just like you!",
  response: "",
  image: "https://upworthy-production.s3.amazonaws.com/nugget/524474cec56137112b000d54/attachments/disney_image_2.png",
  theme: "Happy Mother's Day!"
})

/* Father's Day Questions */

questionList.push({
  prompt: "You're Amazing because _____ .",
  response: "",
  image: "http://charity-matters.com/wp-content/uploads/father-and-son-fathers-day.jpg",
  theme: "Happy Father's Day!"
})

questionList.push({
  prompt: "If you were a superhero, you would be _____ .",
  response: "",
  image: "https://www.fjackets.com/product_images/uploaded_images/superhero-costumes-for-men.jpg",
  theme: "Happy Father's Day!"
})

questionList.push({
  prompt: "I love when we go _____ together.",
  response: "",
  image: "http://cdn.quotesgram.com/img/59/5/2132741069-father-and-son-fishing.jpg",
  theme: "Happy Father's Day!"
})

questionList.push({
  prompt: "I want to be _____, just like you!",
  response: "",
  image: "http://sorisomail.com/img/1388505427324.jpg",
  theme: "Happy Father's Day!"
})

questionList.push({
  prompt: "You are the best at _____ .",
  response: "",
  image: "http://www.dinntrophy.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/a/fathersdaybde_base.jpg",
  theme: "Happy Father's Day!"
})

questionList.push({
  prompt: "My favorite memory with you is _____ .",
  response: "",
  image: "http://www.goodwp.com/images/201104/goodwp.com_17570.jpg",
  theme: "Happy Father's Day!"
})

/* Halloween Questions */

questionList.push({
  prompt: "Remember when we dressed up as _____ ?",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/originals/ee/1e/fa/ee1efa1738ca3663f319c20bcc222bf6.jpg",
  theme: "Happy Halloween!"
})

questionList.push({
  prompt: "My favorite Halloween memory is _____ .",
  response: "",
  image: "http://thefw.com/files/2012/10/mariokart.jpg",
  theme: "Happy Halloween!"
})

questionList.push({
  prompt: "You would look great dressed up like _____ .",
  response: "",
  image: "http://www.funpedia.net/imgs/nov12/best_halloween_costumes_04.jpg",
  theme: "Happy Halloween!"
})

questionList.push({
  prompt: "The scariest memory we shared together was that time when _____ .",
  response: "",
  image: "http://cdn.wallpapersafari.com/31/30/BMAJPh.jpg",
  theme: "Happy Halloween!"
})

questionList.push({
  prompt: "The most creative costume you've ever had was _____ .",
  response: "",
  image: "http://www.buzzfyre.com/wp-content/uploads/2016/10/baby-rapunzel-in-her-tower.jpg",
  theme: "Happy Halloween!"
})

questionList.push({
  prompt: "Remember the Halloween that we _____ ?",
  response: "",
  image: "https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/The_Haunted_House_Das_Geisterhaus_(5360049608).jpg",
  theme: "Happy Halloween!"
})

/* THEMES */

themeList.push({
  title: "Happy Birthday!",
  image: "http://www.sparklebox.co.uk/4931-4940/_wp_generated/ppc4396fa1_02.jpg"
});

themeList.push({
  title: "Happy New Year!",
  image: "http://www.sparklebox.co.uk/3581-3590/_wp_generated/ppf2be0cad_02.jpg"
});

themeList.push({
  title: "Happy Father's Day!",
  image: "http://previews.123rf.com/images/jenifoto/jenifoto1505/jenifoto150500023/39565447-Happy-Fathers-Day-gift-tag-with-corner-border-of-tools-and-ties--Stock-Photo.jpg"
});

themeList.push({
  title: "Happy Mother's Day!",
  image: "http://www.clipartkid.com/images/669/free-mother-s-day-borders-for-cards-scrapbooks-and-other-projects-IBoDlq-clipart.jpg"
});

themeList.push({
  title: "Happy Halloween!",
  image: "http://www.pngmart.com/files/1/Halloween-Border-PNG-Clipart.png"
});

/* ECARDS */

eCardList.push({
  message: "Wow! It's your birthday. Boy are you getting old. Have a great one. - Lily and Chris",
  theme: "Happy Birthday!"
});

eCardList.push({
  message: "Another year. Here we go!",
  theme: "Happy New Year!"
});

// Creating Questions
db.Question.remove({}, function(err, questions) {
  db.Question.create(questionList, function(err, questions) {
    if (err) { return console.log("Error:", err) }
  });
  console.log("Questions SAVED");

  // Creating Themes

  db.Theme.remove({}, function(err, themes) {
    themeList.forEach(function(themeData) {
      var theme = new db.Theme(themeData);
      db.Question.find({ theme: themeData.title}, function(err, foundQuestions) {
        if (err) { return console.log("Error:",err) };
        theme.questions = foundQuestions;
        theme.save(function(err, savedECard) {
          if (err) { return console.log("Error:",err) };
        });
      });
    });
    console.log("Themes SAVED");

    // Creating eCards
    db.ECard.remove({}, function(err, ecards) {
      eCardList.forEach(function(eCardData) {
        var eCard = new db.ECard(eCardData);
        db.Theme.findOne({title: eCardData.theme}, function(err, foundTheme) {
          if (err) { return console.log("Error:",err) };
          eCard.theme = foundTheme;
          eCard.save(function(err, savedECard) {
            if (err) { return console.log("Error:",err) };
          });
        });
      });
      console.log("ECards SAVED");

    }); // End eCards

  }); // End Themes

}); // End Questions
