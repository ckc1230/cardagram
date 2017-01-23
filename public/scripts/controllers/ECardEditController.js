angular
  .module('eCardsApp')
  .controller('ECardEditController', ECardEditController);

ECardEditController.$inject = ['$http', '$routeParams', '$location'];

function ECardEditController($http, $routeParams, $location) {
  var vm = this;
  vm.tempResponse = "";
  vm.showImage = false;
  vm.tempImage = "";
  vm.bubblesComplete = true;

  var writingSFX = [
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s08ILxxVkmHQ.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s0oNdT3cqAtW.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s0TZRHwW9Yrp.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s0WB6WYeAzta.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s02CcKVh2Cst.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s02TFxrZgV3H.mp3'),
    new Audio('http://s0.vocaroo.com/media/download_temp/Vocaroo_s0xPUQ9Gthi9.mp3')
  ];

  $http({
    method: 'GET',
    url: '/api/ecards/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.ecard = response.data;
    var questions = vm.ecard.theme.questions;
    window.onload = function() {
      vm.getBackground();
    };
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
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
  }

  vm.saveResponse = function(count) {
    var questionId = "question-bubble-"+count;
    if (vm.ecard.theme.questions[count-1].response != "") {
      document.getElementById(questionId).style.border = "1px solid green";
      document.getElementById(questionId).style.boxShadow = "0 0 10px green";
      document.getElementById(questionId).dataset.color = "green"

    } else {
      document.getElementById(questionId).style.border = "1px solid red";
      document.getElementById(questionId).style.boxShadow = "0 0 10px red"; 
      document.getElementById(questionId).dataset.color = "red"    
    }
    vm.checkBubbles();
    vm.closeModal();
  }

  vm.cancelResponse = function(question) {
    vm.ecard.theme.questions[question.count-1].response = vm.tempResponse;
    vm.closeModal();
  }

  vm.getFrontPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[0];
  }

  vm.getBackPrompt = function(question) {
    var parts = question.prompt.split("_____");
    return parts[1];
  }

  vm.checkBubbles = function() {
    if (document.getElementById('question-bubble-1').dataset.color === "green" &&
        document.getElementById('question-bubble-2').dataset.color === "green" &&
        document.getElementById('question-bubble-3').dataset.color === "green" &&
        document.getElementById('question-bubble-4').dataset.color === "green" &&
        document.getElementById('question-bubble-5').dataset.color === "green") {
      vm.bubblesComplete = true;

    } else {
      vm.bubblesComplete = false;
    }
  }

  vm.showImageForm = function(question) {
    vm.showImage = !vm.showImage;
    vm.tempImage = question.image;
  }

  vm.revertImage = function(question) {
    question.image = vm.tempImage;
    vm.showImage = !vm.showImage;
  }

  vm.confirmImage = function() {
    vm.showImage = !vm.showImage;
  }

  vm.playWritingSFX = function() {
    var sfxNumber = Math.round(Math.random()*6)
    writingSFX[sfxNumber].play();
  }  
};