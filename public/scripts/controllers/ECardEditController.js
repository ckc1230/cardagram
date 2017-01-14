angular
  .module('eCardsApp')
  .controller('ECardEditController', ECardEditController);

ECardEditController.$inject = ['$http', '$routeParams', '$location'];

function ECardEditController($http, $routeParams, $location) {
  var vm = this;
  vm.tempResponse = "";

  $http({
    method: 'GET',
    url: '/api/ecards/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.ecard = response.data;
    var questions = vm.ecard.theme.questions;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  vm.saveECard = function() {
    $http({
      method: 'PUT',
      url: '/api/ecards/' + $routeParams.id,
      data: vm.ecard
    }).then(function successCallback(response) {
      $location.path('/ecards/'+response.data._id);
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }
  vm.openModal = function(count) {
    if (vm.ecard.theme.questions[count-1].response != "") {
      var placeholders = document.getElementsByClassName('placeholder-span');
      placeholders[count-1].innerHTML = '';
    }
    document.getElementById('question-modal').style.display = "block";
    var questionId = "question-"+count;
    document.getElementById(questionId).style.display = "block";
    vm.tempResponse = vm.ecard.theme.questions[count-1].response;
  } 
  vm.closeModal = function() {
    document.getElementById('question-modal').style.display = "none";
    var questions = document.getElementsByClassName('questions');
    for(var i=0; i < questions.length; i++) {
      questions[i].style.display = 'none';
    }
  }
  vm.clearResponse = function(count) {
    vm.ecard.theme.questions[count-1].response = "";
    var placeholders = document.getElementsByClassName('placeholder-span');
    placeholders[count-1].innerHTML = '_____';
  }
  vm.cancelResponse = function(question) {
    vm.ecard.theme.questions[question.count-1].response = vm.tempResponse;
    vm.closeModal();
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
};