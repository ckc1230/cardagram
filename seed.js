var db = require("./models");

var questionList = [];
var themeList = [];
var eCardList = [];

/* QUESTIONS */

/* Birthday Questions */

questionList = [{
  prompt: "You're Awesome because _____.",
  response: "",
  image: "http://www.kazzledazz.com/wp-content/uploads/2015/02/friendship-cover.jpeg",
  theme: "Happy Birthday!",
  count: 1
},

{
  prompt: "My birthday wish for you is _____.",
  response: "",
  image: "http://s.hswstatic.com/gif/birthday-candles-orig.jpg",
  theme: "Happy Birthday!",
  count: 2
},

{
  prompt: "My favorite adventure with you was _____.",
  response: "",
  image: "http://s8.favim.com/orig/151224/adventure-beach-bff-blue-Favim.com-3804559.jpg",
  theme: "Happy Birthday!",
  count: 3
},

{
  prompt: "If I could get you anything in the world, it would have to be _____.",
  response: "",
  image: "http://www.kiplinger.com/slideshow/credit/T065-S001-15-gifts-that-keep-on-giving/images/intro.jpg",
  theme: "Happy Birthday!",
  count: 4
},

{
  prompt: "_____ is a song that always makes me think of you.",
  response: "",
  image: "https://girlfromthehills.files.wordpress.com/2010/07/woman-singing-microphone-vintage-525.jpg",
  theme: "Happy Birthday!",
  count: 5
},

/* New Year's Questions */

{
  prompt: "New Year, New _____.",
  response: "",
  image: "http://images.fineartamerica.com/images-medium-large-5/spectacular-fireworks-square-format-ausra-paulauskaite.jpg",
  theme: "Happy New Year!",
  count: 1
},

{
  prompt: "This year our resolution should be _____.",
  response: "",
  image: "http://cdn-img.health.com/sites/default/files/migration/images/slides/2011-year-resolution-400x400.jpg",
  theme: "Happy New Year!",
  count: 2
},

{
  prompt: "In the new year we should _____.",
  response: "",
  image: "http://www.studentflights.com.au/sites/studentflights.com.au/files/travel-mag/files/2013/07/friends.jpg",
  theme: "Happy New Year!",
  count: 3
},

{
  prompt: "My favorite memory of us together last year was _____.",
  response: "",
  image: "http://st03.kakprosto.ru//images/article/2012/9/10/1_5255325311d295255325311d90.jpg",
  theme: "Happy New Year!",
  count: 4
},

{
  prompt: "Cheers! Let's celebrate _____!",
  response: "",
  image: "http://www.foodanddine.com/wp-content/uploads/2014/12/hd-wallpapers-new-years-wallpaper-year-champagne-2560x1600-wallpaper.jpg",
  theme: "Happy New Year!",
  count: 5
},

/* Mother's Day Questions */

{
  prompt: "You are the best at _____.",
  response: "",
  image: "http://www.womencanbuild.org/wp-content/uploads/2015/05/Rosie_0011.jpg",
  theme: "Happy Mother's Day!",
  count: 1
},

{
  prompt: "Your superpower is _____.",
  response: "",
  image: "http://cdn.skim.gs/image/upload/v1456339293/msi/10-Qualities-SM-Art-Img_afs73h.jpg",
  theme: "Happy Mother's Day!",
  count: 2
},

{
  prompt: "I want to be _____, just like you!",
  response: "",
  image: "https://upworthy-production.s3.amazonaws.com/nugget/524474cec56137112b000d54/attachments/disney_image_2.png",
  theme: "Happy Mother's Day!",
  count: 3
},

{
  prompt: "I love the way you _____.",
  response: "",
  image: "http://2.bp.blogspot.com/-i4ajtFfZtZw/VUjaCQ5knYI/AAAAAAAAH8g/Q8xTUOgRMvU/s1600/walking%2Bdesert.png",
  theme: "Happy Mother's Day!",
  count: 4
},

{
  prompt: "Thanks for supporting me when I _____.",
  response: "",
  image: "http://garak.wimp.com/images/sthumbs/2015/09/88cb64ce64bd39e9c1d5c4a2cff5b793_crosscountry3.jpg",
  theme: "Happy Mother's Day!",
  count: 5
},

/* Father's Day Questions */

{
  prompt: "You're Amazing because _____.",
  response: "",
  image: "http://charity-matters.com/wp-content/uploads/father-and-son-fathers-day.jpg",
  theme: "Happy Father's Day!",
  count: 1
},

{
  prompt: "If you were a superhero, you would be _____.",
  response: "",
  image: "https://www.fjackets.com/product_images/uploaded_images/superhero-costumes-for-men.jpg",
  theme: "Happy Father's Day!",
  count: 2
},

{
  prompt: "I love when we go _____ together.",
  response: "",
  image: "http://cdn.quotesgram.com/img/59/5/2132741069-father-and-son-fishing.jpg",
  theme: "Happy Father's Day!",
  count: 3
},

{
  prompt: "My favorite memory with you is _____.",
  response: "",
  image: "http://images.parenting.mdpcdn.com/sites/parenting.com/files/styles/slide/public/600_daddy_daughter_date_5.jpg?itok=DBwGin8B",
  theme: "Happy Father's Day!",
  count: 4
},

{
  prompt: "I want to be _____, just like you!",
  response: "",
  image: "http://fathers.com/wp39/wp-content/uploads/How-to-Be-a-Father-Things-Dads-Wear-for-their-Kids.jpg",
  theme: "Happy Father's Day!",
  count: 5
},

/* Halloween Questions */

{
  prompt: "Remember when we dressed up as _____ ?",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/originals/ee/1e/fa/ee1efa1738ca3663f319c20bcc222bf6.jpg",
  theme: "Happy Halloween!",
  count: 1
},

{
  prompt: "Remember the Halloween that we _____?",
  response: "",
  image: "http://thefw.com/files/2012/10/mariokart.jpg",
  theme: "Happy Halloween!",
  count: 2
},

{
  prompt: "You would look great dressed up like _____.",
  response: "",
  image: "http://www.funpedia.net/imgs/nov12/best_halloween_costumes_04.jpg",
  theme: "Happy Halloween!",
  count: 3
},

{
  prompt: "Out scariest Halloween was that time when _____.",
  response: "",
  image: "http://cdn.wallpapersafari.com/31/30/BMAJPh.jpg",
  theme: "Happy Halloween!",
  count: 4
},

{
  prompt: "The most creative costume you've ever had was _____.",
  response: "",
  image: "http://www.buzzfyre.com/wp-content/uploads/2016/10/baby-rapunzel-in-her-tower.jpg",
  theme: "Happy Halloween!",
  count: 5
},

/* Thanksgiving */

{
  prompt: "Thinking of you on Thanksgiving because _____.",
  response: "",
  image: "http://submar.com/wp-content/uploads/2016/11/Thanksgiving-11.23.16.png",
  theme: "Happy Thanksgiving!",
  count: 1
},

{
  prompt: "If you were a Thanksgiving dish, you would have to be _____.",
  response: "",
  image: "http://images.latintimes.com/sites/latintimes.com/files/2015/11/24/thanksgiving-dinner.jpg",
  theme: "Happy Thanksgiving!",
  count: 2
},

{
  prompt: "I am grateful for our memory at _____ together.",
  response: "",
  image: "http://www.travelpaso.com/sites/pr/files/Thanksgiving-Wine_0.jpg",
  theme: "Happy Thanksgiving!",
  count: 3
},

{
  prompt: "Gobble gobble. If you were a turkey, you would be the most _____ turkey of all!",
  response: "",
  image: "http://cdn.playbuzz.com/cdn/c630965f-45c7-465c-8967-c4eb240fdc79/b840de25-c9f9-4e93-8904-89ebcc8ab3e5.jpeg",
  theme: "Happy Thanksgiving!",
  count: 4
},

{
  prompt: "You are a cornucopia of _____.",
  response: "",
  image: "http://www.joepaduda.com/wp-content/uploads/2015/10/Cornucopia.png",
  theme: "Happy Thanksgiving!",
  count: 5
},


/* Presidents' Day */

{
  prompt: "I can picture us hanging out with President _____.",
  response: "",
  image: "http://www.city.ac.uk/__data/assets/image/0018/312048/Democratic-Republican-parties.jpg",
  theme: "Happy Presidents' Day!",
  count: 1
},

{
  prompt: "If we had a sleep-over at the White House, we would _____",
  response: "",
  image: "http://interactive.wxxi.org/sites/default/files/images/highlights/white_house_night.jpg",
  theme: "Happy Presidents' Day!",
  count: 2
},

{
  prompt: "Nothing says presidential like the time we _____.",
  response: "",
  image: "http://legacy.blavity.com/wp-content/uploads/2015/10/12196274_10156203992365615_4908069978012902547_n.png",
  theme: "Happy Presidents' Day!",
  count: 3
},

{
  prompt: "If you were elected president, your first action would be _____.",
  response: "",
  image: "http://presidentialtransition.org/assets/homepage/card_160120_transition-guide.jpg",
  theme: "Happy Presidents' Day!",
  count: 4
},

{
  prompt: "As running mates, our slogan would be _____.",
  response: "",
  image: "http://ichef-1.bbci.co.uk/news/660/cpsprodpb/FA44/production/_85486046_promo_cut.jpg",
  theme: "Happy Presidents' Day!",
  count: 5
},

/* Arbor Day */

{
  prompt: "Trees are _____, just like you!",
  response: "",
  image: "https://studioranslam.files.wordpress.com/2013/11/tree-face-3.jpg",
  theme: "Happy Arbor Day!",
  count: 1
},

{
  prompt: "Our favorite memory involving a tree must be _____.",
  response: "",
  image: "http://img09.deviantart.net/1bf9/i/2010/296/e/1/giving_tree_by_murangelo-d31bx4d.png",
  theme: "Happy Arbor Day!",
  count: 2
},

{
  prompt: "If we were to plant a tree together, we would plant it at _____.",
  response: "",
  image: "https://www.arborday.org/celebrate/images/tree-planting.jpg",
  theme: "Happy Arbor Day!",
  count: 3
},

{
  prompt: "Arbor day reminds us to care for our planet and environement. It reminds me of the time you took care of me by _____.",
  response: "",
  image: "http://www.mfc.ms.gov/sites/default/files/kids_trees_0.jpg",
  theme: "Happy Arbor Day!",
  count: 4
},

{
  prompt: "Just as trees attract birds to call it home, you attract _____.",
  response: "",
  image: "https://nkimagecollection.files.wordpress.com/2013/01/img_2887.jpg",
  theme: "Happy Arbor Day!",
  count: 5
},

/* Valentine's Day */

{
  prompt: "My favorite thing about us is _____.",
  response: "",
  image: "http://img07.deviantart.net/ce1f/i/2010/079/6/0/the_happy_couple_by_vexedmind.jpg",
  theme: "Happy Valentine's Day!",
  count: 1
},

{
  prompt: "The time we _____ makes such an awesome story!",
  response: "",
  image: "http://24.media.tumblr.com/tumblr_manu6aebXb1r67kbgo2_500.jpg",
  theme: "Happy Valentine's Day!",
  count: 2
},

{
  prompt: "Together, we're unstoppable at _____.",
  response: "",
  image: "http://i.imgur.com/s5nP5S1.jpg",
  theme: "Happy Valentine's Day!",
  count: 3
},

{
  prompt: "Because of you, I want to be better at _____.",
  response: "",
  image: "https://stockphotos.io/wp-content/uploads/2013/04/1368036503b23ad-600x574.jpg",
  theme: "Happy Valentine's Day!",
  count: 4
},

{
  prompt: "I love sharing _____ with you.",
  response: "",
  image: "http://images.huffingtonpost.com/2016-01-18-1453090253-7345058-dailyhabitsofwildlyhappycouples.jpg",
  theme: "Happy Valentine's Day!",
  count: 5
},

/* Good Morning */

{
  prompt: "Before you start your day, I wanted to tell you _____.",
  response: "",
  image: "http://i.imgur.com/NPy7ikd.jpg",
  theme: "Good Morning!",
  count: 1
},

{
  prompt: "I hope your day is filled with _____!",
  response: "",
  image: "http://cdn.earthporm.com/wp-content/uploads/2015/10/XX-Proud-Mommies5__605.jpg",
  theme: "Good Morning!",
  count: 2
},

{
  prompt: "Just as the sun always rises, _____.",
  response: "",
  image: "http://images.naldzgraphics.net/2010/08/3-starfish-sunrise-wallpaper.jpg",
  theme: "Good Morning!",
  count: 3
},

{
  prompt: "One day more. Another day another destiny. This never ending road to _____.",
  response: "",
  image: "http://i.imgur.com/W9jUtj2.jpg",
  theme: "Good Morning!",
  count: 4
},

{
  prompt: "Look in the mirror and remember _____.",
  response: "",
  image: "http://www.marketoracle.co.uk/images/janice_cat.jpg",
  theme: "Good Morning!",
  count: 5
},

/* Lunar New Year */

{
  prompt: "Yesterday is a memory, today is a gift, tomorrow is _____.",
  response: "",
  image: "http://i.huffpost.com/gadgets/slideshows/334665/slide_334665_3356243_free.jpg",
  theme: "Happy Lunar New Year 2017!",
  count: 1
},

{
  prompt: "May the New Year be vibrant with _____!",
  response: "",
  image: "http://s2.dmcdn.net/ReyMX.jpg",
  theme: "Happy Lunar New Year 2017!",
  count: 2
},

{
  prompt: "I hope that the year of Rooster brings with it _____.",
  response: "",
  image: "http://media.istockphoto.com/vectors/year-of-the-rooster-papercut-vector-id599123888?s=235x235",
  theme: "Happy Lunar New Year 2017!",
  count: 3
},

{
  prompt: "Lots of luck and _____ in the New Year.",
  response: "",
  image: "http://static1.squarespace.com/static/52536652e4b007332ef4ecf4/52dec946e4b0ca499f87bce7/5876926859cc688e12949602/1484656205967/TEALEAVES-LuckyEnvelope-CNY-Rooster2017-3.jpg?format=1000w",
  theme: "Happy Lunar New Year 2017!",
  count: 4
},

{
  prompt: "My New Year's wish for you is _____.",
  response: "",
  image: "http://uschina.usc.edu/Files/images/2013-01/Chinese%20new%20year%20signs-Chun.jpg",
  theme: "Happy Lunar New Year 2017!",
  count: 5
},

/* Happy Anniversary */

{
  prompt: "My favorite memory of us this past year was _____.",
  response: "",
  image: "http://static.tumblr.com/d4d3de52da11ba57196c6e09baa0ba9f/qctr7so/Tr5oaxxas/tumblr_static_1aie2khzxqg0g4o40gc08ow4k.jpg",
  theme: "Happy Anniversary!",
  count: 1
},

{
  prompt: "Because of you, I strive to _____.",
  response: "",
  image: "http://cdn-media-1.lifehack.org/wp-content/files/2012/04/how_to_better_yourself.jpg",
  theme: "Happy Anniversary!",
  count: 2
},

{
  prompt: "I hope that we _____ within the upcoming year.",
  response: "",
  image: "http://theplanetd.com/images/Sabah-diving-Borneo-divers.jpg",
  theme: "Happy Anniversary!",
  count: 3
},

{
  prompt: "Unlike me, you are amazing at _____.",
  response: "",
  image: "http://www.vivalasvegasweddings.com/images/flowers/3-Rose-Bouquet-Red-Freesia-LG.jpg",
  theme: "Happy Anniversary!",
  count: 4
},

{
  prompt: "We always have the greatest time _____ together.",
  response: "",
  image: "http://il2.picdn.net/shutterstock/videos/4224349/thumb/5.jpg",
  theme: "Happy Anniversary!",
  count: 5
},

{
  prompt: "The best way to describe our friendship would have to be _____.",
  response: "",
  image: "http://pleated-jeans.com/wp-content/uploads/2015/06/35_peasandcarrot-1.jpg",
  theme: "Thanks For Being My Friend!",
  count: 1
},

{
  prompt: "Remember that time we _____?",
  response: "",
  image: "http://www.newsarama.com/images/i/000/158/608/i02/boyega-chewbacca-ford.jpg",
  theme: "Thanks For Being My Friend!",
  count: 2
},

{
  prompt: "I can totally see us being characters on an episode of _____.",
  response: "",
  image: "http://images.eonline.com/eol_images/Entire_Site/201529//rs_640x518-150309154701-Friends-cast-friends-19956673-2100-1700.jpg",
  theme: "Thanks For Being My Friend!",
  count: 3
},

{
  prompt: "You are such a _____ friend.",
  response: "",
  image: "https://tribzap2it.files.wordpress.com/2015/11/toy-story-woody-buzz-lightyear.jpg",
  theme: "Thanks For Being My Friend!",
  count: 4
},

{
  prompt: "If we were a superhero duo, we'd be called _____.",
  response: "",
  image: "http://www.thepetmatchmaker.com/wp-content/uploads/2014/01/cosplay-batman-and-robin-cats-01-1.jpg",
  theme: "Thanks For Being My Friend!",
  count: 5
},

{
  prompt: "I hope you find _____ at the end of the rainbow.",
  response: "",
  image: "http://www.clipartkid.com/images/643/trends-for-empty-pot-of-gold-clipart-frMKa8-clipart.jpg",
  theme: "Happy St. Patrick's Day!",
  count: 1
},

{
  prompt: "Cheers to _____!",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/originals/3a/f4/3e/3af43e8d5380827df08b5b2f06735567.jpg",
  theme: "Happy St. Patrick's Day!",
  count: 2
},

{
  prompt: "Remember the Paddy's Day we _____ ?",
  response: "",
  image: "https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F4ff9aa99-19c7-496d-982a-9d616cd5fcf1.jpg",
  theme: "Happy St. Patrick's Day!",
  count: 3
},

{
  prompt: "Wishing you _____ and a bit of the Irish luck!",
  response: "",
  image: "http://www.realirishcasino.com/wp-content/uploads/2012/05/irish-lucky-hat.jpg",
  theme: "Happy St. Patrick's Day!",
  count: 4
},

{
  prompt: "If we catch a leprechaun today, I wish _____ for you.",
  response: "",
  image: "http://www.njfamily.com/NJ-Family/March-2013/Leprechaun-Tricks/Leprechaun.jpg",
  theme: "Happy St. Patrick's Day!",
  count: 5
},

{
  prompt: "If we could share one pie, it would have to be _____ pie.",
  response: "",
  image: "https://geekyantics.files.wordpress.com/2014/05/sharing-pizza-712x378-guy-kawasaki-share-a-bigger-pie.jpg",
  theme: "Happy Pi Day!",
  count: 1
},

{
  prompt: "You’re _____ like a pie.",
  response: "",
  image: "http://del.h-cdn.co/assets/15/38/1600x1066/gallery-1442506898-pumpkin-pie-smile.jpg",
  theme: "Happy Pi Day!",
  count: 2
},

{
  prompt: "I like my men like how I like my pies: _____.",
  response: "",
  image: "https://i.ytimg.com/vi/Xhp0RfywePg/hqdefault.jpg",
  theme: "Happy Pi Day!",
  count: 3
},

{
  prompt: "Cutie-Pi, Sugar-Pi, _____-Pi.",
  response: "",
  image: "https://image.spreadshirtmedia.com/image-server/v1/compositions/1006309185/views/1,width=800,height=800,appearanceId=63,version=1478262588/cute-cutie-pie-doodle-women-s-t-shirts-women-s-t-shirt.jpg",
  theme: "Happy Pi Day!",
  count: 4
},

{
  prompt: "Pi is irrational. You are _____.",
  response: "",
  image: "http://www.slowfamilyonline.com/wordpress/wp-content/uploads/2011/03/1299826812-88.jpg",
  theme: "Happy Pi Day!",
  count: 5
},

{
  prompt: "I’m proud of you for _____.",
  response: "",
  image: "http://www.cutestpaw.com/wp-content/uploads/2012/10/High-five-me.jpg",
  theme: "Congratulations!",
  count: 1
},

{
  prompt: "I hope that in thinking back to this day, you will always remember _____.",
  response: "",
  image: "https://cdn.shutterstock.com/shutterstock/videos/10741625/thumb/4.jpg",
  theme: "Congratulations!",
  count: 2
},

{
  prompt: "This achievement really exemplifies your _____.",
  response: "",
  image: "http://i.imgur.com/KuohE6O.jpg",
  theme: "Congratulations!",
  count: 3
},

{
  prompt: "This calls for _____!",
  response: "",
  image: "http://static.ddmcdn.com/gif/blogs/dnews-files-2013-05-drinking-champagne-improves-memory-660-jpg.jpg",
  theme: "Congratulations!",
  count: 4
},

{
  prompt: "To _____ ahead!",
  response: "",
  image: "https://s3.amazonaws.com/fathom_media/cache/9b/c0/9bc0f889e3c41896f82cb0c973d3c947.jpg",
  theme: "Congratulations!",
  count: 5
},

{
  prompt: "Remember that time we _____ with a manatee?",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/236x/97/aa/cd/97aacd47d7b15a3108f42309cd713fec.jpg",
  theme: "Happy Manatee Day!",
  count: 1
},

{
  prompt: "Sea cow? More like _____ cow.",
  response: "",
  image: "http://manateetoursusa.com/wp-content/uploads/2015/11/DSC00309.jpg",
  theme: "Happy Manatee Day!",
  count: 2
},

{
  prompt: "I don’t know, man. A tea _____.",
  response: "",
  image: "https://i.ytimg.com/vi/r7FVxkSh8AU/hqdefault.jpg",
  theme: "Happy Manatee Day!",
  count: 3
},

{
  prompt: "You’re like a manatee: _____.",
  response: "",
  image: "http://orig06.deviantart.net/d5d3/f/2011/161/a/c/manatee_for_rie_by_cysco_inu-d3ijp42.png",
  theme: "Happy Manatee Day!",
  count: 4
},

{
  prompt: "Just as manatees were mistaken for mermaids, you’re often mistaken for _____.",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/564x/52/9e/2f/529e2fbc4f2400bd20202623d92b7302.jpg",
  theme: "Happy Manatee Day!",
  count: 5
},

{
  prompt: "Monday FUN-day! Go _____!",
  response: "",
  image: "https://www.funnypica.com/wp-content/uploads/2015/05/Funny-Panda-Pictures-26-570x428.jpg",
  theme: "Happy Monday!",
  count: 1
},

{
  prompt: "Monday rearranged spells “DYNAMO”. You are a dynamo at _____.",
  response: "",
  image: "http://i.imgur.com/dNPpo01.jpg",
  theme: "Happy Monday!",
  count: 2
},

{
  prompt: "It’s okay. We’ve all been there. Just _____.",
  response: "",
  image: "https://chucklesandlaughs.files.wordpress.com/2015/07/01.jpeg",
  theme: "Happy Monday!",
  count: 3
},

{
  prompt: "I hope you begin your week with _____.",
  response: "",
  image: "https://cdn.shutterstock.com/shutterstock/videos/4654400/thumb/1.jpg",
  theme: "Happy Monday!",
  count: 4
},

{
  prompt: "Apparently people tend to shop online more on Mondays. I hope you _____ more this Monday.",
  response: "",
  image: "http://i.imgur.com/FDZ0GIA.jpg",
  theme: "Happy Monday!",
  count: 5
},

{
  prompt: "Today may or may not be Mardi Gras (“Fat Tuesday”). But I hope that for you, it is “_____ Tuesday”!",
  response: "",
  image: "https://s-media-cache-ak0.pinimg.com/736x/9a/2e/b4/9a2eb40942fb40273251ea43788c13ba.jpg",
  theme: "Happy Tuesday!",
  count: 1
},

{
  prompt: "Aren’t you glad it’s not Monday? Aren’t you glad _____?",
  response: "",
  image: "https://www.elephantsinthepantry.co.uk/wp-content/uploads/2015/08/11896276_403067436567261_3648774825972633768_o.jpg",
  theme: "Happy Tuesday!",
  count: 2
},

{
  prompt: "“Tuesday” is derived from “Tiw’s Day” (the Norse god of victory and glory). May you have a victory over _____!",
  response: "",
  image: "http://corporateinsight.com/wp-content/themes/ci/img/hubspot/CI_Blog/Images/401krace.jpg",
  theme: "Happy Tuesday!",
  count: 3
},

{
  prompt: "What lies behind us? Monday. What lies ahead? _____.",
  response: "",
  image: "http://www.newparadiselaboratories.org/uploads/media_items/the-future-1.499.399.s.jpg",
  theme: "Happy Tuesday!",
  count: 4
},

{
  prompt: "Tuesdays. Twosdays. Two _____ for you!",
  response: "",
  image: "http://img01.burrpimg.com/mobi/f3db5b567412ff313533f6fc9e5b6302.jpg",
  theme: "Happy Tuesday!",
  count: 5
},

{
  prompt: "Hump day? More like _____ day!",
  response: "",
  image: "http://i.imgur.com/Tmk7Yz7.jpg",
  theme: "Happy Wednesday!",
  count: 1
},

{
  prompt: "Sometimes we just need a little distraction. Something like _____.",
  response: "",
  image: "http://i.imgur.com/zNoTO8p.jpg",
  theme: "Happy Wednesday!",
  count: 2
},

{
  prompt: "Here’s some motivation for the rest of the week: _____.",
  response: "",
  image: "https://cdn3.littlethings.com/app/uploads/2014/09/rxDvM.jpg",
  theme: "Happy Wednesday!",
  count: 3
},

{
  prompt: "Though Wednesday Addams seldom shows emotion and is generally bitter, she wishes you _____.",
  response: "",
  image: "http://i.imgur.com/KLLdmsf.jpg",
  theme: "Happy Wednesday!",
  count: 4
},

{
  prompt: "Whoooaa, we’re halfway there. WHHOOAAA living on _____!",
  response: "",
  image: "http://fakemalaysianews.com/wp-content/uploads/2015/09/bon-jovi-616523051.jpg",
  theme: "Happy Wednesday!",
  count: 5
},

{
  prompt: "The penultimate weekday. Your ultimate _____.",
  response: "",
  image: "http://i.imgur.com/QUISsUD.jpg",
  theme: "Happy Thursday!",
  count: 1
},

{
  prompt: "It’s Friday Eve! That means at midnight, we get to open _____.",
  response: "",
  image: "http://i.imgur.com/mRhZwbn.jpg",
  theme: "Happy Thursday!",
  count: 2
},

{
  prompt: "This first Miss America was crowned on a Thursday. On this Thursday, I would like to crown you _____.",
  response: "",
  image: "http://i.imgur.com/SBqnowx.jpg",
  theme: "Happy Thursday!",
  count: 3
},

{
  prompt: "Odin’s Beard! Thor would like to tell you _____.",
  response: "",
  image: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1476286161i/20823236.jpg",
  theme: "Happy Thursday!",
  count: 4
},

{
  prompt: "Instead of eating your Last Supper, I hope you get to eat _____.",
  response: "",
  image: "http://www.newsgd.com/specials/tourismexpo/content/images/attachement/jpg/site26/20150908/d8cb8a47665a1758b80402.jpg",
  theme: "Happy Thursday!",
  count: 5
}]

/* THEMES */

themeList = [{
  title: "Happy Birthday!",
  image: "http://i.imgur.com/LyCAoB8.jpg",
  mobileImage: "http://i.imgur.com/vcWB9fD.png",
  thumbnailImage: "http://i.imgur.com/LFQtufJ.jpg",
  category: "special"
},

{
  title: "Happy New Year!",
  image: "http://i.imgur.com/w09TAJO.jpg",
  mobileImage: "http://i.imgur.com/oE5IEUE.png",
  thumbnailImage: "http://i.imgur.com/5NvM3wN.jpg",
  category: "holiday"
},

{
  title: "Happy Father's Day!",
  image: "http://i.imgur.com/zCUKzZy.jpg",
  mobileImage: "http://i.imgur.com/7ZD4VJ4.png",
  thumbnailImage: "http://i.imgur.com/eGzadPy.jpg",
  category: "holiday"
},

{
  title: "Happy Mother's Day!",
  image: "http://i.imgur.com/3PwGrid.jpg",
  mobileImage: "http://i.imgur.com/FRtxh5R.png",
  thumbnailImage: "http://i.imgur.com/OArPZoL.jpg",
  category: "holiday"
},

{
  title: "Happy Halloween!",
  image: "http://i.imgur.com/L4nV0bn.jpg",
  mobileImage: "http://i.imgur.com/FB7HWFV.png",
  thumbnailImage: "http://i.imgur.com/KgzbUmE.jpg",
  category: "holiday"
},

{
  title: "Happy Thanksgiving!",
  image: "http://i.imgur.com/UEXKnXD.jpg",
  mobileImage: "http://i.imgur.com/R4UexRS.png",
  thumbnailImage: "http://i.imgur.com/lmsRKWS.jpg",
  category: "holiday"
},

{
  title: "Happy Presidents' Day!",
  image: "http://i.imgur.com/8WoDdXx.jpg",
  mobileImage: "http://i.imgur.com/dpft9nG.png",
  thumbnailImage: "http://i.imgur.com/iGP4oW7.jpg",
  category: "holiday"
},

{
  title: "Happy Arbor Day!",
  image: "http://i.imgur.com/3XAme7U.jpg",
  mobileImage: "http://i.imgur.com/4ou8IvW.png",
  thumbnailImage: "http://i.imgur.com/RskhMJT.jpg",
  category: "holiday"
},

{
  title: "Happy Valentine's Day!",
  image: "http://i.imgur.com/BvXPIQl.jpg",
  mobileImage: "http://i.imgur.com/oPvelJl.png",
  thumbnailImage: "http://i.imgur.com/cEdhqUk.jpg",
  category: "holiday"
},

{
  title: "Good Morning!",
  image: "http://i.imgur.com/dXAO1yc.jpg",
  mobileImage: "http://i.imgur.com/Tb52JlA.jpg",
  thumbnailImage: "http://i.imgur.com/kqVwdyl.jpg",
  category: "daily"
},

{
  title: "Happy Lunar New Year 2017!",
  image: "http://i.imgur.com/EJ9yrUX.jpg",
  mobileImage: "http://i.imgur.com/bmwgVUS.jpg",
  thumbnailImage: "http://i.imgur.com/ZnjE0tl.jpg",
  category: "holiday"
},

{
  title: "Happy Anniversary!",
  image: "http://i.imgur.com/2fdvPzs.jpg",
  mobileImage: "http://i.imgur.com/pjdZhor.jpg",
  thumbnailImage: "http://i.imgur.com/I9eCzY8.jpg",
  category: "special"
},

{
  title: "Congratulations!",
  image: "http://i.imgur.com/HQOHsnG.jpg",
  mobileImage: "http://i.imgur.com/af3ZXPj.jpg",
  thumbnailImage: "http://i.imgur.com/y1Mu88x.jpg",
  category: "special"
},

{
  title: "Thanks For Being My Friend!",
  image: "http://i.imgur.com/RdhiOuj.jpg",
  mobileImage: "http://i.imgur.com/ldTnPR3.jpg",
  thumbnailImage: "http://i.imgur.com/CqQIoOK.jpg",
  category: "daily"
},

{
  title: "Happy St. Patrick's Day!",
  image: "http://i.imgur.com/Vjuo2fq.jpg",
  mobileImage: "http://i.imgur.com/9JaSaLc.jpg",
  thumbnailImage: "http://i.imgur.com/sSkJKGU.jpg",
  category: "holiday"
},

{
  title: "Happy Pi Day!",
  image: "http://i.imgur.com/rPP5ZBE.jpg",
  mobileImage: "http://i.imgur.com/4cNp9Xo.jpg",
  thumbnailImage: "http://i.imgur.com/KM6cZpn.jpg",
  category: "holiday"
},

{
  title: "Happy Manatee Day!",
  image: "http://i.imgur.com/93sStLL.jpg",
  mobileImage: "http://i.imgur.com/DcqhkRV.jpg",
  thumbnailImage: "http://i.imgur.com/kQNNpJD.jpg",
  category: "holiday"
},

{
  title: "Happy Monday!",
  image: "http://i.imgur.com/JuOGsND.jpg",
  mobileImage: "http://i.imgur.com/mbiktWh.jpg",
  thumbnailImage: "http://i.imgur.com/RldGSnM.jpg",
  category: "daily"
},

{
  title: "Happy Tuesday!",
  image: "http://i.imgur.com/TnkwZTt.jpg",
  mobileImage: "http://i.imgur.com/YfSiER5.jpg",
  thumbnailImage: "http://i.imgur.com/F2Kbr3q.jpg",
  category: "daily"
},

{
  title: "Happy Wednesday!",
  image: "http://i.imgur.com/XyKp1lY.jpg",
  mobileImage: "http://i.imgur.com/h6svgsm.jpg",
  thumbnailImage: "http://i.imgur.com/0vVC5oY.jpg",
  category: "daily"
},

{
  title: "Happy Thursday!",
  image: "http://i.imgur.com/HXgPlNH.jpg",
  mobileImage: "http://i.imgur.com/oQj5tu8.jpg",
  thumbnailImage: "http://i.imgur.com/2Kggvnn.jpg",
  category: "daily"
}];

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

  }); // End Themes

}); // End Questions
