var db = require("./models");

var questionList = [];
var themeList = [];
var eCardList = [];

/* QUESTIONS */

/* Birthday Questions */

questionList.push({
  prompt: "You're Awesome because _____.",
  response: "",
  image: "http://www.kazzledazz.com/wp-content/uploads/2015/02/friendship-cover.jpeg",
  theme: "Happy Birthday!",
  count: 1
})

questionList.push({
  prompt: "My birthday wish for you is _____.",
  response: "",
  image: "http://s.hswstatic.com/gif/birthday-candles-orig.jpg",
  theme: "Happy Birthday!",
  count: 2
})

questionList.push({
  prompt: "My favorite adventure with you was _____.",
  response: "",
  image: "http://s8.favim.com/orig/151224/adventure-beach-bff-blue-Favim.com-3804559.jpg",
  theme: "Happy Birthday!",
  count: 3
})

questionList.push({
  prompt: "If I could get you anything in the world, it would have to be _____.",
  response: "",
  image: "http://www.kiplinger.com/slideshow/credit/T065-S001-15-gifts-that-keep-on-giving/images/intro.jpg",
  theme: "Happy Birthday!",
  count: 4
})

questionList.push({
  prompt: "_____ is a song that always makes me think of you.",
  response: "",
  image: "https://girlfromthehills.files.wordpress.com/2010/07/woman-singing-microphone-vintage-525.jpg",
  theme: "Happy Birthday!",
  count: 5
})

/* New Year's Questions */

questionList.push({
  prompt: "New Year, New _____.",
  response: "",
  image: "http://images.fineartamerica.com/images-medium-large-5/spectacular-fireworks-square-format-ausra-paulauskaite.jpg",
  theme: "Happy New Year!",
  count: 1
})

questionList.push({
  prompt: "This year our resolution should be _____.",
  response: "",
  image: "http://cdn-img.health.com/sites/default/files/migration/images/slides/2011-year-resolution-400x400.jpg",
  theme: "Happy New Year!",
  count: 2
})

questionList.push({
  prompt: "In the new year we should _____.",
  response: "",
  image: "http://www.studentflights.com.au/sites/studentflights.com.au/files/travel-mag/files/2013/07/friends.jpg",
  theme: "Happy New Year!",
  count: 3
})

questionList.push({
  prompt: "My favorite memory of us together last year was _____.",
  response: "",
  image: "http://st03.kakprosto.ru//images/article/2012/9/10/1_5255325311d295255325311d90.jpg",
  theme: "Happy New Year!",
  count: 4
})

questionList.push({
  prompt: "Cheers! Let's celebrate _____!",
  response: "",
  image: "http://www.foodanddine.com/wp-content/uploads/2014/12/hd-wallpapers-new-years-wallpaper-year-champagne-2560x1600-wallpaper.jpg",
  theme: "Happy New Year!",
  count: 5
})

/* Mother's Day Questions */

questionList.push({
  prompt: "You are the best at _____.",
  response: "",
  image: "http://www.womencanbuild.org/wp-content/uploads/2015/05/Rosie_0011.jpg",
  theme: "Happy Mother's Day!",
  count: 1
})

questionList.push({
  prompt: "Your superpower is _____.",
  response: "",
  image: "http://cdn.skim.gs/image/upload/v1456339293/msi/10-Qualities-SM-Art-Img_afs73h.jpg",
  theme: "Happy Mother's Day!",
  count: 2
})

questionList.push({
  prompt: "I want to be _____, just like you!",
  response: "",
  image: "https://upworthy-production.s3.amazonaws.com/nugget/524474cec56137112b000d54/attachments/disney_image_2.png",
  theme: "Happy Mother's Day!",
  count: 3
})

questionList.push({
  prompt: "I love the way you _____.",
  response: "",
  image: "http://2.bp.blogspot.com/-i4ajtFfZtZw/VUjaCQ5knYI/AAAAAAAAH8g/Q8xTUOgRMvU/s1600/walking%2Bdesert.png",
  theme: "Happy Mother's Day!",
  count: 4
})

questionList.push({
  prompt: "Thanks for supporting me when I _____.",
  response: "",
  image: "http://garak.wimp.com/images/sthumbs/2015/09/88cb64ce64bd39e9c1d5c4a2cff5b793_crosscountry3.jpg",
  theme: "Happy Mother's Day!",
  count: 5
})

/* Father's Day Questions */

questionList.push({
  prompt: "You're Amazing because _____.",
  response: "",
  image: "http://charity-matters.com/wp-content/uploads/father-and-son-fathers-day.jpg",
  theme: "Happy Father's Day!",
  count: 1
})

questionList.push({
  prompt: "If you were a superhero, you would be _____.",
  response: "",
  image: "https://www.fjackets.com/product_images/uploaded_images/superhero-costumes-for-men.jpg",
  theme: "Happy Father's Day!",
  count: 2
})

questionList.push({
  prompt: "I love when we go _____ together.",
  response: "",
  image: "http://cdn.quotesgram.com/img/59/5/2132741069-father-and-son-fishing.jpg",
  theme: "Happy Father's Day!",
  count: 3
})

questionList.push({
  prompt: "My favorite memory with you is _____.",
  response: "",
  image: "http://images.parenting.mdpcdn.com/sites/parenting.com/files/styles/slide/public/600_daddy_daughter_date_5.jpg?itok=DBwGin8B",
  theme: "Happy Father's Day!",
  count: 4
})

questionList.push({
  prompt: "I want to be _____, just like you!",
  response: "",
  image: "http://fathers.com/wp39/wp-content/uploads/How-to-Be-a-Father-Things-Dads-Wear-for-their-Kids.jpg",
  theme: "Happy Father's Day!",
  count: 5
})

/* Halloween Questions */

questionList.push({
  prompt: "Remember when we dressed up as _____ ?",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/originals/ee/1e/fa/ee1efa1738ca3663f319c20bcc222bf6.jpg",
  theme: "Happy Halloween!",
  count: 1
})

questionList.push({
  prompt: "Remember the Halloween that we _____?",
  response: "",
  image: "http://thefw.com/files/2012/10/mariokart.jpg",
  theme: "Happy Halloween!",
  count: 2
})

questionList.push({
  prompt: "You would look great dressed up like _____.",
  response: "",
  image: "http://www.funpedia.net/imgs/nov12/best_halloween_costumes_04.jpg",
  theme: "Happy Halloween!",
  count: 3
})

questionList.push({
  prompt: "Out scariest Halloween was that time when _____.",
  response: "",
  image: "http://cdn.wallpapersafari.com/31/30/BMAJPh.jpg",
  theme: "Happy Halloween!",
  count: 4
})

questionList.push({
  prompt: "The most creative costume you've ever had was _____.",
  response: "",
  image: "http://www.buzzfyre.com/wp-content/uploads/2016/10/baby-rapunzel-in-her-tower.jpg",
  theme: "Happy Halloween!",
  count: 5
})

/* Thanksgiving */

questionList.push({
  prompt: "Thinking of you on Thanksgiving because _____.",
  response: "",
  image: "http://submar.com/wp-content/uploads/2016/11/Thanksgiving-11.23.16.png",
  theme: "Happy Thanksgiving!",
  count: 1
})

questionList.push({
  prompt: "If you were a Thanksgiving dish, you would have to be _____.",
  response: "",
  image: "http://images.latintimes.com/sites/latintimes.com/files/2015/11/24/thanksgiving-dinner.jpg",
  theme: "Happy Thanksgiving!",
  count: 2
})

questionList.push({
  prompt: "I am grateful for our memory at _____ together.",
  response: "",
  image: "http://www.travelpaso.com/sites/pr/files/Thanksgiving-Wine_0.jpg",
  theme: "Happy Thanksgiving!",
  count: 3
})

questionList.push({
  prompt: "Gobble gobble. If you were a turkey, you would be the most _____ turkey of all!",
  response: "",
  image: "http://cdn.playbuzz.com/cdn/c630965f-45c7-465c-8967-c4eb240fdc79/b840de25-c9f9-4e93-8904-89ebcc8ab3e5.jpeg",
  theme: "Happy Thanksgiving!",
  count: 4
})

questionList.push({
  prompt: "You are a cornucopia of _____.",
  response: "",
  image: "http://www.joepaduda.com/wp-content/uploads/2015/10/Cornucopia.png",
  theme: "Happy Thanksgiving!",
  count: 5
})


/* Presidents' Day */

questionList.push({
  prompt: "I can picture us hanging out with President _____.",
  response: "",
  image: "http://www.city.ac.uk/__data/assets/image/0018/312048/Democratic-Republican-parties.jpg",
  theme: "Happy Presidents' Day!",
  count: 1
})

questionList.push({
  prompt: "If we had a sleep-over at the White House, we would _____",
  response: "",
  image: "http://interactive.wxxi.org/sites/default/files/images/highlights/white_house_night.jpg",
  theme: "Happy Presidents' Day!",
  count: 2
})

questionList.push({
  prompt: "Nothing says presidential like the time we _____.",
  response: "",
  image: "http://legacy.blavity.com/wp-content/uploads/2015/10/12196274_10156203992365615_4908069978012902547_n.png",
  theme: "Happy Presidents' Day!",
  count: 3
})

questionList.push({
  prompt: "If you were elected president, your first action would be _____.",
  response: "",
  image: "http://presidentialtransition.org/assets/homepage/card_160120_transition-guide.jpg",
  theme: "Happy Presidents' Day!",
  count: 4
})

questionList.push({
  prompt: "As running mates, our slogan would be _____.",
  response: "",
  image: "http://ichef-1.bbci.co.uk/news/660/cpsprodpb/FA44/production/_85486046_promo_cut.jpg",
  theme: "Happy Presidents' Day!",
  count: 5
})

/* Arbor Day */

questionList.push({
  prompt: "Trees are _____, just like you!",
  response: "",
  image: "https://studioranslam.files.wordpress.com/2013/11/tree-face-3.jpg",
  theme: "Happy Arbor Day!",
  count: 1
})

questionList.push({
  prompt: "Our favorite memory involving a tree must be _____.",
  response: "",
  image: "http://img09.deviantart.net/1bf9/i/2010/296/e/1/giving_tree_by_murangelo-d31bx4d.png",
  theme: "Happy Arbor Day!",
  count: 2
})

questionList.push({
  prompt: "If we were to plant a tree together, we would plant it at _____.",
  response: "",
  image: "https://www.arborday.org/celebrate/images/tree-planting.jpg",
  theme: "Happy Arbor Day!",
  count: 3
})

questionList.push({
  prompt: "Arbor day reminds us to care for our planet and environement. It reminds me of the time you took care of me by _____",
  response: "",
  image: "http://www.mfc.ms.gov/sites/default/files/kids_trees_0.jpg",
  theme: "Happy Arbor Day!",
  count: 4
})

questionList.push({
  prompt: "Just as trees attract birds to call it home, you attract _____.",
  response: "",
  image: "https://nkimagecollection.files.wordpress.com/2013/01/img_2887.jpg",
  theme: "Happy Arbor Day!",
  count: 5
})

/* Valentine's Day */

questionList.push({
  prompt: "My favorite thing about us is _____.",
  response: "",
  image: "http://img07.deviantart.net/ce1f/i/2010/079/6/0/the_happy_couple_by_vexedmind.jpg",
  theme: "Happy Valentine's Day!",
  count: 1
})

questionList.push({
  prompt: "The time we _____ makes such an awesome story!",
  response: "",
  image: "http://24.media.tumblr.com/tumblr_manu6aebXb1r67kbgo2_500.jpg",
  theme: "Happy Valentine's Day!",
  count: 2
})

questionList.push({
  prompt: "Together, we're unstoppable at _____.",
  response: "",
  image: "http://i.imgur.com/s5nP5S1.jpg",
  theme: "Happy Valentine's Day!",
  count: 3
})

questionList.push({
  prompt: "Because of you, I want to be better at _____.",
  response: "",
  image: "https://stockphotos.io/wp-content/uploads/2013/04/1368036503b23ad-600x574.jpg",
  theme: "Happy Valentine's Day!",
  count: 4
})

questionList.push({
  prompt: "I love sharing _____ with you.",
  response: "",
  image: "http://images.huffingtonpost.com/2016-01-18-1453090253-7345058-dailyhabitsofwildlyhappycouples.jpg",
  theme: "Happy Valentine's Day!",
  count: 5
})

/* Good Morning */

questionList.push({
  prompt: "Before you start your day, I wanted to tell you _____.",
  response: "",
  image: "http://rlv.zcache.com/encourage_mint_poster-r29972264b982449b86a31cc8c78648e1_wv3_8byvr_324.jpg",
  theme: "Good Morning!",
  count: 1
})

questionList.push({
  prompt: "I hope your day is filled with _____!",
  response: "",
  image: "http://cdn.earthporm.com/wp-content/uploads/2015/10/XX-Proud-Mommies5__605.jpg",
  theme: "Good Morning!",
  count: 2
})

questionList.push({
  prompt: "Just as the sun always rises, _____.",
  response: "",
  image: "http://images.naldzgraphics.net/2010/08/3-starfish-sunrise-wallpaper.jpg",
  theme: "Good Morning!",
  count: 3
})

questionList.push({
  prompt: "One day more. Another day another destiny. This never ending road to _____.",
  response: "",
  image: "http://i.imgur.com/W9jUtj2.jpg",
  theme: "Good Morning!",
  count: 4
})

questionList.push({
  prompt: "Look in the mirror and and remember _____.",
  response: "",
  image: "http://www.marketoracle.co.uk/images/janice_cat.jpg",
  theme: "Good Morning!",
  count: 5
})

/* THEMES */

themeList.push({
  title: "Happy Birthday!",
  image: "http://i.imgur.com/LyCAoB8.jpg"
});

themeList.push({
  title: "Happy New Year!",
  image: "http://i.imgur.com/w09TAJO.jpg"
});

themeList.push({
  title: "Happy Father's Day!",
  image: "http://i.imgur.com/zCUKzZy.jpg"
});

themeList.push({
  title: "Happy Mother's Day!",
  image: "http://i.imgur.com/4b2HTkh.jpg"
});

themeList.push({
  title: "Happy Halloween!",
  image: "http://i.imgur.com/L4nV0bn.jpg"
});

themeList.push({
  title: "Happy Thanksgiving!",
  image: "http://i.imgur.com/UEXKnXD.jpg"
});

themeList.push({
  title: "Happy Presidents' Day!",
  image: "http://i.imgur.com/8WoDdXx.jpg"
});

themeList.push({
  title: "Happy Arbor Day!",
  image: "http://i.imgur.com/3XAme7U.jpg"
});

themeList.push({
  title: "Happy Valentine's Day!",
  image: "http://i.imgur.com/BvXPIQl.jpg"
});

themeList.push({
  title: "Good Morning!",
  image: "http://i.imgur.com/pT0klwW.jpg"
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
