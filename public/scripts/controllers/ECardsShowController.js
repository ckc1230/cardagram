angular
  .module('eCardsApp')
  .controller('ECardsShowController', ECardsShowController);
ECardsShowController.$inject = ['$http', '$routeParams', '$location', '$window'];
function ECardsShowController($http, $routeParams, $location, $window) {
  angular.element(document).ready(function () {
    document.getElementById('home-breadcrumb').style.width = '100%';
    document.getElementById('themes-breadcrumb').className = 'hidden breadcrumb';
    setTimeout(function() {
      var bubble3 = document.getElementById('question-bubble-3');
      bubble3.classList.add('jump');
      setTimeout(function() {
        bubble3.classList.remove('jump');
      },3000);
    },1000);

    angular.element($window).bind('orientationchange', function () {
      vm.getBackground();
    });
  });
  var vm = this;
  var currentBubble;
  vm.bubbleOpen = false;
  $http({
    method: 'GET',
    url: '/api/ecards/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.ecard = response.data;
    var questions = vm.ecard.theme.questions;
    vm.ecard.customTexts = getFullText(questions);
    window.onload = function() {
      vm.getBackground();
    };
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  var getFullText = function(questions) {
    var fullTexts = [];
    questions.forEach(function(question) {
      var fullText = question.prompt;
      fullText = fullText.replace('_____', question.response);
      fullTexts.push(fullText);      
    })
    return fullTexts;
  }
  vm.isMobile = function() {
    var desktopSmall = window.matchMedia('(max-width: 400px)');
    var mobile = window.matchMedia('@media screen and (max-width: 400px)');
    var backgroundImg = "";
    if(mobile.matches || desktopSmall.matches) {
      return true;
    } else {
      return false;
    }
  }
  vm.getBackground = function() {
    if(vm.ecard) {
      window.addEventListener('resize', function(){
        var backgroundImg = "";
        if(vm.isMobile()) {
          backgroundImg += vm.ecard.theme.mobileImage;
        } else {
          backgroundImg += vm.ecard.theme.image;
        }
        document.getElementById('theme-img-show').style.backgroundImage = "url('"+backgroundImg+"')";
        var bubbleOpen = false;
      }, true);
    }
  }
  vm.loadBackground = function() {
    if(vm.ecard) {
      var backgroundTxt = "";
      if(vm.isMobile()) {
        backgroundTxt += vm.ecard.theme.mobileImage;
      } else {
        backgroundTxt += vm.ecard.theme.image;
      }
      return "background-image: url('"+backgroundTxt+"')";
    }
  }
  vm.getFrontPrompt = function(question) {
    var parts = question.prompt.split('_____');
    return parts[0];
  }
  vm.getResponse = function(question) {
    return question.response;
  }
  vm.getBackPrompt = function(question) {
    var parts = question.prompt.split('_____');
    return parts[1];
  }
  vm.openModal = function() {
    document.getElementById('send-modal').style.display = "block";
  }
  vm.closeModal = function() {
    document.getElementById('send-modal').style.display = "none";
  }
  vm.sendECard = function() {
    var formattedBody = 'Hi ' + vm.receiverName + '!\n\n' +
      vm.senderName + ' sent you a very special interactive ecard! You can view it here:\n' +
        window.location.href + ' \n\n' +
        "Make sure to hover over the Bubble-Grams to see " + vm.senderName + "'s personalized messages for you!\nEnjoy!\n\n" +
        '- Your friends at Cardagram\n' +
        'www.cardagramcards.com\n\n' + 
        '* Please do not reply to this email. Emails sent to this address will not be answered. *';
    vm.ecard.ecardSent = true;
    $http({
      method: 'PUT',
      url: '/api/ecards/' + $routeParams.id,
      data: vm.ecard
    }).then(function successCallback(response) {
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
    var mailOptions = {
      from: 'cardagram.cards@gmail.com',
      to: vm.receiverEmail,
      subject: vm.ecard.theme.title,
      // text: "text part",
      html: '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title>' +
      '<link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">' +
      '<style> a { text-decoration: none; } </style></head>' +
      '<body><table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td>' +
      '<table width="600" align="center" cellspacing="0" cellpadding="0" border="0"><tr><td>' +
      '<img src="http://i.imgur.com/vg1lf2n.jpg" alt="Cardagram"></td></tr>' +
      '<tr><td><table cellpadding="0"><tr><td width="300"><h1 style="margin-top: 0";>Hi ' + vm.receiverName + '</h1>' +
      '<p>' + vm.senderName + ' sent you a Cardagram - a fun, interactive and customizable eCard!</p><h3><a href="' + window.location.href + '">You can view it here</a></h3>' +
      "<p>Make sure to hover over the Bubble-Grams to see " +  vm.senderName + "'s personalized messages for you!</p>" +
      '<p>Enjoy!</p></td>' +
      '<td width="300" cellpadding="0">'+
      '<img src="'+ vm.ecard.theme.thumbnailImage + '" alt="" style="width: 100%"></td>'+
      '</tr></table></td></tr><tr><td align="right"><h3 style="margin-right: 20px">- Your friends at <a href="www.cardagramcards.com">Cardagram</a></h3>' +
      '<p><i>* Please do not reply to this email. Emails sent to this address will not be answered. *</i></p></td></tr></table>' +
      '</td></tr></table></body></html>'
    }
    
    $http({
      method: 'POST',
      url: '/emails',
      data: mailOptions
    }).then(function successCallback(response) {
      console.log("response",response);
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
    var senderBody = 'Hi ' + vm.senderName + '!\n\n' +
      'Thanks for using Cardagram! Here is the card you sent to ' + vm.receiverName + ':\n' +
        window.location.href + ' \n\n' +
        "Don't forget us on your next special occasion!\n\n" +
        '- Your friends at Cardagram\n' +
        'www.cardagramcards.com';
    var senderOptions = {
      from: 'cardagram.cards@gmail.com',
      to: vm.senderEmail,
      subject: 'Thank You for Creating a Cardagram!',
      html: '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title>' +
      '<link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">' +
      '<style>a { text-decoration: none; } </style></head>' +
      '<body><table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td>' +
      '<table width="600" align="center" cellspacing="0" cellpadding="0" border="0"><tr><td>' +
      '<img src="http://i.imgur.com/vg1lf2n.jpg" alt="Cardagram"></td></tr>' +
      '<tr><td><table cellpadding="0" cellspacing="0"><tr><td width="300"><h1 style="margin-top: 0;">Hi ' + vm.senderName + '</h1>' +
      '<p>Thank you for using Cardagram - your online resource for creating fun, interactive and customizable eCards!</p>' + 
      '<h3><a href="' + window.location.href + '">Here is the card</a> you sent to ' + vm.receiverName + '.</h3>' +
      "<p>Don't forget us on your next special occasion!</p>" +
      '<td width="300" cellpadding="0">'+
      '<img src="'+ vm.ecard.theme.thumbnailImage + '" alt="preview" style="width: 100%"></td>'+
      '</tr></table></td></tr><tr><td align="right"><h3 style="margin-right: 20px">- Your friends at <a href="www.cardagramcards.com">Cardagram</a></h3>' +
      '<p><i>* Please do not reply to this email. Emails sent to this address will not be answered. *</i></p></td></tr></table>' +
      '</td></tr></table></body></html>'
    }
    $http({
      method: 'POST',
      url: '/emails',
      data: senderOptions
    }).then(function successCallback(response) {
      console.log("response",response);
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
    vm.closeModal();
  }
  vm.getURL = function() {
    return window.location.href;
  }
  vm.editECard = function() {
    $http({
      method: 'PUT',
      url: '/api/ecards/' + $routeParams.id,
      data: vm.ecard
    }).then(function successCallback(response) {
      $location.path('/ecards/'+response.data._id+'/edit');
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }
  vm.popup = function(count) {
    var bubbleId = 'question-bubble-' + count;
    var messageId = 'full-message-' + count;
    var question = document.getElementById(bubbleId);
    question.id = 'question-popup';
    var message = document.getElementById(messageId);
    message.style.display = 'block';
    currentBubble = count;
    vm.bubbleOpen = true;
  }
  vm.popdown = function() {
    var bubbleId = 'question-bubble-' + currentBubble;
    var messageId = 'full-message-' + currentBubble;
    var question = document.getElementById('question-popup');
    question.id = bubbleId;
    var message = document.getElementById(messageId);
    message.style.display = 'none';
    vm.bubbleOpen = false;
  }
  vm.bubblePop = function(count) {
    if(!vm.isMobile()) {
      if(vm.bubbleOpen) {
        vm.popdown(count);
      } else {
        vm.popup(count);
      }
    }
  }
  vm.mobilePop = function(count) {
    if(vm.isMobile()) {
      if(vm.bubbleOpen) {
        vm.popdown();
      } else {
        vm.popup(count);
      }
    }
  }
};
