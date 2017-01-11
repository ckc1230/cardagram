angular
  .module('eCardsApp')
  .controller('ThemeEditController', ThemeEditController);

ThemeEditController.$inject = ['$http', '$routeParams', '$location'];

function ThemeEditController($http, $routeParams, $location) {
  var vm = this;
  vm.tempResponse = "";

  $http({
    method: 'GET',
    url: '/api/themes/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.theme = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
  vm.saveECard = function() {
    var newECard = {
      message: vm.theme.message,
      theme: vm.theme
    }
    $http
      .post('/api/ecards',newECard)
      .then(function(response) {
        $location.path('/ecards/'+response.data._id);
    });
  }
  vm.openModal = function(count) {
    document.getElementById('question-modal').style.display = "block";
    var questionId = "question-"+count;
    document.getElementById(questionId).style.display = "block";
    vm.tempResponse = vm.theme.questions[count-1].response;
  } 
  vm.closeModal = function() {
    document.getElementById('question-modal').style.display = "none";
    var questions = document.getElementsByClassName('questions');
    for(var i=0; i < questions.length; i++) {
      questions[i].style.display = 'none';
    }
  }
  vm.clearResponse = function(count) {
    vm.theme.questions[count-1].response = "";
  }
  vm.cancelResponse = function(question) {
    vm.theme.questions[question.count-1].response = vm.tempResponse;
    document.getElementById('question-modal').style.display = "none";
  }
  vm.getFrontPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[0];
  }
  vm.getResponse = function(question) {
    if (question.response != "") {
      document.getElementById('placeholder-span').style.display = "none";
      return question.response;
    } else {
      document.getElementById('placeholder-span').style.display = "inline";
      return "";
    }
  }
  vm.getBackPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[1];
  }
};