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
      fullText = fullText.replace("_____", question.response);
      fullTexts.push(fullText);      
    })
    return fullTexts;
  }
  vm.openModal = function(count) {
    document.getElementById('question-modal').style.display = "block";
    var questionId = "question-"+count;
    document.getElementById(questionId).style.display = "block";
  }
  vm.closeModal = function() {
    document.getElementById('question-modal').style.display = "none";
    var questions = document.getElementsByClassName('questions');
    for(var i=0; i < questions.length; i++) {
      questions[i].style.display = 'none';
    }
  }
  vm.getFrontPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[0];
  }
  vm.getResponse = function(question) {
    if (question.response != "") {
      var placeholders = document.getElementsByClassName('placeholder-span');
      for(var i=0; i < placeholders.length; i++) {
        placeholders[i].style.display = 'none';
      }
      return question.response;
    } else {
      var placeholders = document.getElementsByClassName('placeholder-span');
      for(var i=0; i < placeholders.length; i++) {
        placeholders[i].style.display = "inline";
      }
      return "";
    }
  }
  vm.getBackPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[1];
  }
  vm.sendECard = function() {
    alert("Sent!");
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