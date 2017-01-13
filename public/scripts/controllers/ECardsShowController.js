angular
  .module('eCardsApp')
  .controller('ECardsShowController', ECardsShowController);

ECardsShowController.$inject = ['$http', '$routeParams'];

function ECardsShowController($http, $routeParams) {
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/ecards/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.ecard = response.data;
    var questions = vm.ecard.theme.questions;
    vm.ecard.customTexts = getFullText(questions);
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
  vm.getFrontPrompt = function(question) {
    var parts = question.prompt.split('_____');
    return parts[0];
  }
  vm.getResponse = function(question) {
    if (question.response != '') {
      var placeholders = document.getElementsByClassName('placeholder-span');
      for(var i=0; i < placeholders.length; i++) {
        placeholders[i].style.display = 'none';
      }
      return question.response;
    } else {
      var placeholders = document.getElementsByClassName('placeholder-span');
      for(var i=0; i < placeholders.length; i++) {
        placeholders[i].style.display = 'inline';
      }
      return '';
    }
  }
  vm.getBackPrompt = function(question) {
    var parts = question.prompt.split('_____');
    return parts[1];
  }
  vm.sendECard = function() {
    var formattedBody = 'Hi ' + vm.receiverName + '!\n\n ' +
      vm.senderName + ' sent you a very special ecard! You can view it here: ' + window.location.href + ' \n\n ' +
      'Enjoy!';
    var mailToLink = 'mailto:' + vm.receiverEmail + '?subject=' + vm.ecard.theme.title +
      '&body=' + encodeURIComponent(formattedBody);
    window.location.href = mailToLink;
    vm.ecard.ecardSent = true;
    $http({
      method: 'PATCH',
      url: '/api/ecards/' + $routeParams.id,
      data: vm.ecard
    }).then(function successCallback(response) {
      console.log("response",response);
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
  }

  vm.popdown = function(count) {
    var bubbleId = 'question-bubble-' + count;
    var messageId = 'full-message-' + count;
    var question = document.getElementById('question-popup');
    question.id = bubbleId;
    var message = document.getElementById(messageId);
    message.style.display = 'none';
  }
};