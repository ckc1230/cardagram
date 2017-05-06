var db = require("./models");

var questionList = [];
var themeList = [];
var eCardList = [];

/* QUESTIONS */

/* Birthday Questions */

questionList = [{
  prompt: "You're Awesome because _____.",
  response: "",
  image: "http://i.imgur.com/GoNC0TS.jpg",
  theme: "Happy Birthday!",
  count: 1
},

{
  prompt: "My birthday wish for you is _____.",
  response: "",
  image: "http://i.imgur.com/yNErnoE.jpg",
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
  image: "http://i.imgur.com/kSPtE0q.jpg",
  theme: "Happy Birthday!",
  count: 4
},

{
  prompt: "_____ is a song that always makes me think of you.",
  response: "",
  image: "http://i.imgur.com/NGHY4fh.jpg",
  theme: "Happy Birthday!",
  count: 5
},

/* New Year's Questions */

{
  prompt: "New Year, New _____.",
  response: "",
  image: "http://i.imgur.com/p6XM6uJ.jpg",
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
  image: "http://i.imgur.com/QowCbNy.jpg",
  theme: "Happy New Year!",
  count: 4
},

{
  prompt: "Cheers! Let's celebrate _____!",
  response: "",
  image: "http://i.imgur.com/VONTAPf.jpg",
  theme: "Happy New Year!",
  count: 5
},

/* Mother's Day Questions */

{
  prompt: "You are the best at _____.",
  response: "",
  image: "http://i.imgur.com/AIiSHsp.jpg",
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
  image: "http://i.imgur.com/jeaCmSY.jpg",
  theme: "Happy Mother's Day!",
  count: 3
},

{
  prompt: "I love the way you _____.",
  response: "",
  image: "http://i.imgur.com/qNacxoB.jpg",
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
  image: "http://i.imgur.com/jMJltqn.jpg",
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
  image: "http://i.imgur.com/jyftiQY.jpg",
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
  image: "http://i.imgur.com/enQ4HsM.jpg",
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
  prompt: "Our scariest Halloween was that time when _____.",
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
  prompt: "I am grateful for our memory at _____ together.",
  response: "",
  image: "http://i.imgur.com/3eyBhxv.jpg",
  theme: "Happy Thanksgiving!",
  count: 1
},

{
  prompt: "If you were a Thanksgiving dish, you would be _____.",
  response: "",
  image: "http://i.imgur.com/o2trd6j.jpg",
  theme: "Happy Thanksgiving!",
  count: 2
},

{
  prompt: "Thinking of you on Thanksgiving because _____.",
  response: "",
  image: "http://www.travelpaso.com/sites/pr/files/Thanksgiving-Wine_0.jpg",
  theme: "Happy Thanksgiving!",
  count: 3
},

{
  prompt: "Gobble gobble. If you were a turkey, you would be the _____ turkey of all!",
  response: "",
  image: "http://cok.net/wp-content/uploads/2016/11/cat-turkey-friends-1-1.jpg",
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
  image: "http://i.imgur.com/NVF1KRr.jpg",
  theme: "Happy Presidents' Day!",
  count: 2
},

{
  prompt: "Nothing says presidential like the time we _____.",
  response: "",
  image: "http://i.imgur.com/BWNCaP0.png",
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
  image: "http://i.imgur.com/J5EQdEH.jpg",
  theme: "Happy Presidents' Day!",
  count: 5
},

/* Arbor Day */

{
  prompt: "Trees are _____, just like you!",
  response: "",
  image: "http://i.imgur.com/AaPUmx3.jpg",
  theme: "Happy Arbor Day!",
  count: 1
},

{
  prompt: "Our favorite memory involving a tree must be _____.",
  response: "",
  image: "http://i.imgur.com/86RqS99.jpg",
  theme: "Happy Arbor Day!",
  count: 2
},

{
  prompt: "If we were to plant a tree together, we would plant it at _____.",
  response: "",
  image: "http://i.imgur.com/j529jrG.jpg",
  theme: "Happy Arbor Day!",
  count: 3
},

{
  prompt: "Arbor day reminds us to care for the environment. It reminds me of the time you cared for _____.",
  response: "",
  image: "http://i.imgur.com/HLrPCD4.jpg",
  theme: "Happy Arbor Day!",
  count: 4
},

{
  prompt: "Just as trees attract birds to call it home, you attract _____.",
  response: "",
  image: "http://i.imgur.com/ljnztYO.jpg",
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
  image: "http://i.imgur.com/lAidykF.jpg",
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
  image: "http://i.imgur.com/vVialzd.jpg",
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
  image: "http://i.imgur.com/jZzIOmw.jpg",
  theme: "Good Morning!",
  count: 5
},

/* Lunar New Year */

{
  prompt: "Yesterday is a memory, today is a gift, tomorrow is _____.",
  response: "",
  image: "http://i.imgur.com/BA1i4M1.jpg",
  theme: "Happy Lunar New Year 2017!",
  count: 1
},

{
  prompt: "May the New Year be vibrant with _____!",
  response: "",
  image: "http://i.imgur.com/AJlGY3p.jpg",
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
  image: "http://i.imgur.com/RAazO5b.jpg",
  theme: "Happy Lunar New Year 2017!",
  count: 4
},

{
  prompt: "My New Year's wish for you is _____.",
  response: "",
  image: "http://i.imgur.com/OIaxdtL.jpg",
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
  image: "http://i.imgur.com/mumEg8N.jpg",
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
  image: "http://i.imgur.com/ox49ofx.jpg",
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
  image: "http://i.imgur.com/Dzvqjf9.jpg",
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
  prompt: "Remember that time we _____ a manatee?",
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
  image: "http://i.imgur.com/trm4OD6.jpg",
  theme: "Happy Monday!",
  count: 3
},

{
  prompt: "I hope your week starts off with _____.",
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
  image: "http://i.imgur.com/uSIIoxl.jpg",
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
  image: "http://i.imgur.com/ThBsZSb.jpg",
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
  image: "http://i.imgur.com/TXOGYNy.jpg",
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
  prompt: "Odin’s Beard, it's Thor's Day! Thor would like to tell you _____.",
  response: "",
  image: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1476286161i/20823236.jpg",
  theme: "Happy Thursday!",
  count: 1
},

{
  prompt: "It’s Friday Eve! That means at midnight, we get to _____.",
  response: "",
  image: "http://i.imgur.com/mRhZwbn.jpg",
  theme: "Happy Thursday!",
  count: 2
},

{
  prompt: "#TBT! Remember that time _____.",
  response: "",
  image: "http://i.imgur.com/THaC3qJ.jpg",
  theme: "Happy Thursday!",
  count: 3
},

{
  prompt: "Thursday is the penultimate weekday: your ultimate _____.",
  response: "",
  image: "http://i.imgur.com/QUISsUD.jpg",
  theme: "Happy Thursday!",
  count: 4
},

{
  prompt: "The first Miss America was crowned on a Thursday. On this Thursday, I would like to crown you _____.",
  response: "",
  image: "http://i.imgur.com/SBqnowx.jpg",
  theme: "Happy Thursday!",
  count: 5
},

{
  prompt: "It’s Friday, Friday. Gotta _____ on Friday.",
  response: "",
  image: "http://cdn.hercampus.com/s3fs-public/2013/12/09/alg-rebecca-black-jpg.jpg",
  theme: "Happy Friday!",
  count: 1
},

{
  prompt: "If we switched bodies on Freaky Friday, we would _____.",
  response: "",
  image: "http://i.imgur.com/uzgu7M7.jpg",
  theme: "Happy Friday!",
  count: 2
},

{
  prompt: "TGIF! Why don't we _____ this weekend?!?!",
  response: "",
  image: "http://i.imgur.com/dQZzg6r.jpg",
  theme: "Happy Friday!",
  count: 3
},

{
  prompt: "I hope your week ends with _____!",
  response: "",
  image: "http://i.imgur.com/DjMPc1W.jpg",
  theme: "Happy Friday!",
  count: 4
},

{
  prompt: "Friday FRYdays! Getting my fry on. Nothing like golden-brown, beer-battered _____.",
  response: "",
  image: "http://www.healthcastle.com/sites/default/files/imagecache/article-lead-image-570x200/fried_foods_570.jpg",
  theme: "Happy Friday!",
  count: 5
},

/* Walk To Work Day */ 

{
  prompt: "I'm walking on sunshine! Whoa! And don't it feel _____?",
  response: "",
  image: "http://i.imgur.com/gE1quJQ.jpg",
  theme: "Happy Walk To Work Day!",
  count: 1
},

{
  prompt: "I would walk 500 miles and I will walk 500 more just to _____.",
  response: "",
  image: "http://i.imgur.com/Y9ATKSc.jpg",
  theme: "Happy Walk To Work Day!",
  count: 2
},

{
  prompt: "After work, we can reward ourselves with a walk to _____.",
  response: "",
  image: "http://i.imgur.com/atqICRf.jpg",
  theme: "Happy Walk To Work Day!",
  count: 3
},

{
  prompt: "You can walk the walk, but can you _____?",
  response: "",
  image: "http://i.imgur.com/V6cUPwB.png",
  theme: "Happy Walk To Work Day!",
  count: 4
},

{
  prompt: "Thanks for helping the environment today! You're _____!",
  response: "",
  image: "http://alexhowe.com/wp-content/uploads/2016/04/Grass-V6.jpg",
  theme: "Happy Walk To Work Day!",
  count: 5
},

/* Easter */ 

{
  prompt: "Hallelujah, _____ is risen!",
  response: "",
  image: "http://i.imgur.com/DZ2g9Dl.jpg",
  theme: "Happy Easter!",
  count: 1
},

{
  prompt: "Instead of Easter Eggs, we should hunt for _____.",
  response: "",
  image: "http://i.imgur.com/U5nPDAi.jpg",
  theme: "Happy Easter!",
  count: 2
},

{
  prompt: "I hope the Easter Bunny brings you _____.",
  response: "",
  image: "http://i.imgur.com/uZrujvK.jpg",
  theme: "Happy Easter!",
  count: 3
},

{
  prompt: "Easter, a season for _____.",
  response: "",
  image: "https://draxe.com/wp-content/uploads/2015/01/sunflower-closeup-480x294.jpg",
  theme: "Happy Easter!",
  count: 4
},

{
  prompt: "And on third day, _____.",
  response: "",
  image: "http://i.imgur.com/7BlLkXG.jpg",
  theme: "Happy Easter!",
  count: 5
},

/* May the Fourth */ 

{
  prompt: "Why, you stuck up... half-witted... scruffy-looking…_____!",
  response: "",
  image: "http://i.imgur.com/nCa92Um.jpg",
  theme: "May the Fourth Be With You",
  count: 1
},

{
  prompt: "I find your lack of _____ disturbing.",
  response: "",
  image: "http://i.imgur.com/BKoneN8.jpg",
  theme: "May the Fourth Be With You",
  count: 2
},

{
  prompt: "I’ve got a bad feeling about _____.",
  response: "",
  image: "http://www.jdubuzz.com/files/2016/05/han-solo.jpg",
  theme: "May the Fourth Be With You",
  count: 3
},

{
  prompt: "_____. You will never find a more wretched hive of scum and villainy.",
  response: "",
  image: "http://i.imgur.com/oT5z59o.jpg",
  theme: "May the Fourth Be With You",
  count: 4
},

{
  prompt: "Do _____ or do not. There is no try.",
  response: "",
  image: "http://img.cinemablend.com/cb/d/2/2/1/4/7/d22147c71c1e53d6f3344a0f8709c4023b59653e6f5fed733f333a83b19b6ac7.jpg",
  theme: "May the Fourth Be With You",
  count: 5
}]

/* THEMES */

themeList = [{
  title: "Happy Birthday!",
  image: "http://i.imgur.com/LyCAoB8.jpg",
  mobileImage: "http://i.imgur.com/vcWB9fD.png",
  thumbnailImage: "http://i.imgur.com/LFQtufJ.jpg",
  category: "special",
  date: "0000000001"
},

{
  title: "Happy New Year!",
  image: "http://i.imgur.com/w09TAJO.jpg",
  mobileImage: "http://i.imgur.com/oE5IEUE.png",
  thumbnailImage: "http://i.imgur.com/5NvM3wN.jpg",
  category: "holiday",
  date: "0101000000"
},

{
  title: "Happy Father's Day!",
  image: "http://i.imgur.com/zCUKzZy.jpg",
  mobileImage: "http://i.imgur.com/7ZD4VJ4.png",
  thumbnailImage: "http://i.imgur.com/eGzadPy.jpg",
  category: "holiday",
  date: "0622000000"
},

{
  title: "Happy Mother's Day!",
  image: "http://i.imgur.com/3PwGrid.jpg",
  mobileImage: "http://i.imgur.com/FRtxh5R.png",
  thumbnailImage: "http://i.imgur.com/3A0G6Gn.jpg",
  category: "holiday",
  date: "0514000000"
},

{
  title: "Happy Halloween!",
  image: "http://i.imgur.com/L4nV0bn.jpg",
  mobileImage: "http://i.imgur.com/FB7HWFV.png",
  thumbnailImage: "http://i.imgur.com/KgzbUmE.jpg",
  category: "holiday",
  date: "1031000000"
},

{
  title: "Happy Thanksgiving!",
  image: "http://i.imgur.com/UEXKnXD.jpg",
  mobileImage: "http://i.imgur.com/R4UexRS.png",
  thumbnailImage: "http://i.imgur.com/eA3IJia.jpg",
  category: "holiday",
  date: "1128000000"
},

{
  title: "Happy Presidents' Day!",
  image: "http://i.imgur.com/8WoDdXx.jpg",
  mobileImage: "http://i.imgur.com/dpft9nG.png",
  thumbnailImage: "http://i.imgur.com/iGP4oW7.jpg",
  category: "holiday",
  date: "0221000000"
},

{
  title: "Happy Arbor Day!",
  image: "http://i.imgur.com/3XAme7U.jpg",
  mobileImage: "http://i.imgur.com/4ou8IvW.png",
  thumbnailImage: "http://i.imgur.com/w286haX.jpg",
  category: "holiday",
  date: "0428000000"
},

{
  title: "Happy Valentine's Day!",
  image: "http://i.imgur.com/BvXPIQl.jpg",
  mobileImage: "http://i.imgur.com/oPvelJl.png",
  thumbnailImage: "http://i.imgur.com/cEdhqUk.jpg",
  category: "holiday",
  date: "0214000000"
},

{
  title: "Good Morning!",
  image: "http://i.imgur.com/dXAO1yc.jpg",
  mobileImage: "http://i.imgur.com/Tb52JlA.jpg",
  thumbnailImage: "http://i.imgur.com/n1EvaS2.jpg",
  category: "daily",
  date: "0000000006"
},

{
  title: "Happy Lunar New Year 2017!",
  image: "http://i.imgur.com/EJ9yrUX.jpg",
  mobileImage: "http://i.imgur.com/bmwgVUS.jpg",
  thumbnailImage: "http://i.imgur.com/ZnjE0tl.jpg",
  category: "holiday",
  date: "0128000000"
},

{
  title: "Happy Anniversary!",
  image: "http://i.imgur.com/2fdvPzs.jpg",
  mobileImage: "http://i.imgur.com/pjdZhor.jpg",
  thumbnailImage: "http://i.imgur.com/I9eCzY8.jpg",
  category: "special",
  date: "0000000003"
},

{
  title: "Congratulations!",
  image: "http://i.imgur.com/HQOHsnG.jpg",
  mobileImage: "http://i.imgur.com/af3ZXPj.jpg",
  thumbnailImage: "http://i.imgur.com/y1Mu88x.jpg",
  category: "special",
  date: "0000000002"
},

{
  title: "Thanks For Being My Friend!",
  image: "http://i.imgur.com/RdhiOuj.jpg",
  mobileImage: "http://i.imgur.com/ldTnPR3.jpg",
  thumbnailImage: "http://i.imgur.com/CqQIoOK.jpg",
  category: "daily",
  date: "0000000007"
},

{
  title: "Happy St. Patrick's Day!",
  image: "http://i.imgur.com/Vjuo2fq.jpg",
  mobileImage: "http://i.imgur.com/9JaSaLc.jpg",
  thumbnailImage: "http://i.imgur.com/sSkJKGU.jpg",
  category: "holiday",
  date: "0317000000"
},

{
  title: "Happy Pi Day!",
  image: "http://i.imgur.com/rPP5ZBE.jpg",
  mobileImage: "http://i.imgur.com/4cNp9Xo.jpg",
  thumbnailImage: "http://i.imgur.com/KM6cZpn.jpg",
  category: "holiday",
  date: "0314000000"
},

{
  title: "Happy Manatee Day!",
  image: "http://i.imgur.com/93sStLL.jpg",
  mobileImage: "http://i.imgur.com/DcqhkRV.jpg",
  thumbnailImage: "http://i.imgur.com/kQNNpJD.jpg",
  category: "holiday",
  date: "0329000000"
},

{
  title: "Happy Monday!",
  image: "http://i.imgur.com/JuOGsND.jpg",
  mobileImage: "http://i.imgur.com/mbiktWh.jpg",
  thumbnailImage: "http://i.imgur.com/RldGSnM.jpg",
  category: "daily",
  date: "0000000001"
},

{
  title: "Happy Tuesday!",
  image: "http://i.imgur.com/TnkwZTt.jpg",
  mobileImage: "http://i.imgur.com/YfSiER5.jpg",
  thumbnailImage: "http://i.imgur.com/F2Kbr3q.jpg",
  category: "daily",
  date: "0000000002"
},

{
  title: "Happy Wednesday!",
  image: "http://i.imgur.com/XyKp1lY.jpg",
  mobileImage: "http://i.imgur.com/h6svgsm.jpg",
  thumbnailImage: "http://i.imgur.com/0vVC5oY.jpg",
  category: "daily",
  date: "0000000003"
},

{
  title: "Happy Thursday!",
  image: "http://i.imgur.com/dP6V1Cd.jpg",
  mobileImage: "http://i.imgur.com/oQj5tu8.jpg",
  thumbnailImage: "http://i.imgur.com/y24W7Lf.jpg",
  category: "daily",
  date: "0000000004"
},

{
  title: "Happy Friday!",
  image: "http://i.imgur.com/i58Bm2H.jpg",
  mobileImage: "http://i.imgur.com/ldtWbfD.jpg",
  thumbnailImage: "http://i.imgur.com/xDKQVF0.jpg",
  category: "daily",
  date: "0000000005"
},

{
  title: "Happy Walk To Work Day!",
  image: "http://i.imgur.com/ZwZQXrw.jpg",
  mobileImage: "http://i.imgur.com/04pAKW2.jpg",
  thumbnailImage: "http://i.imgur.com/ZXMrYV2.jpg",
  category: "holiday",
  date: "0406000000"
},

{
  title: "Happy Easter!",
  image: "http://i.imgur.com/2ijYOb0.jpg",
  mobileImage: "http://i.imgur.com/GxUqvKY.jpg",
  thumbnailImage: "http://i.imgur.com/LXTbb9z.jpg",
  category: "holiday",
  date: "0425000000"
},

{
  title: "May the Fourth Be With You",
  image: "http://i.imgur.com/lmyMWz9.jpg",
  mobileImage: "http://i.imgur.com/x2YtJ1H.jpg",
  thumbnailImage: "http://i.imgur.com/jBKiZDQ.jpg",
  category: "holiday",
  date: "0504000000"
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
