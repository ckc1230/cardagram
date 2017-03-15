angular
  .module('eCardsApp')
  .controller('ThemeEditController', ThemeEditController);

ThemeEditController.$inject = ['$http', '$routeParams', '$location'];

function ThemeEditController($http, $routeParams, $location) {
  var vm = this;
  vm.tempResponse = "";
  vm.showImage = false;
  vm.tempImage = "";
  vm.bubblesComplete = false;
  introClosed = false;
  modalClosed = false;
  tabCount = 1;
  modalCount = 1;

  angular.element(document).ready(function () {
    document.getElementById('overlay').addEventListener("click", vm.closeInfoBox);
    document.getElementById('info-box').addEventListener("click", vm.closeInfoBox);
    document.getElementById('home-breadcrumb').style.width = '30%';
    document.addEventListener("keydown", closeIntro, false);
    setTimeout(function() {
      document.getElementById('themes-breadcrumb').className = 'breadcrumb';
    },1000);
  });

  function keyDownTextField(e) {
    var keyCode = e.keyCode;

    // While on the Main Display
    if (modalClosed) {
      // Hit 'Tab'
      if(keyCode == 9) {
        e.preventDefault()
        if (tabCount > 5) {
          tabCount = 1;
        } 
        resetBubbleColors();
        document.getElementById('question-bubble-' + tabCount).style.border = "1px solid white";
        document.getElementById('question-bubble-' + tabCount).style.boxShadow = "0 0 5px 5px white inset";
        modalCount = tabCount;
        tabCount++;
      }

      // Hit 'Enter'
      if(keyCode == 13) {
        e.preventDefault()
        vm.openModal(modalCount);
      }
    } 

    // While on Bubble-Gram Modal
    else {
      // Hit 'Escape'
      if (keyCode == 27) {
        vm.closeModal();
      }
    }
  }

  function closeIntro(e) {
    if (!introClosed) {
      if (e.keyCode === 13 || e.keyCode === 27) {
        vm.closeInfoBox();
      }
    }
  }

  function resetBubbleColors() {
    var bubblesDone = document.getElementsByClassName('question-bubble-done');
    for (var i=0; i< bubblesDone.length; i++) {
      bubblesDone[i].style.border = "1px solid green";
      bubblesDone[i].style.boxShadow = "0 0 10px green";
    }
    var bubblesPending = document.getElementsByClassName('question-bubble-pending');
    for (var i=0; i< bubblesPending.length; i++) {
      bubblesPending[i].style.border = "1px solid red";
      bubblesPending[i].style.boxShadow = "0 0 10px red";
    }
  }

  vm.closeInfoBox = function() {
    introClosed = true;
    modalClosed = true;
    document.getElementById('overlay').style.display = "none";
    document.getElementById('info-box').style.display = "none";
    document.addEventListener("keydown", keyDownTextField, false);
    var bubble = document.getElementById('question-bubble-1');
    bubble.classList.add('jump');
    setTimeout(function() {
      bubble.classList.remove('jump');
    },3000);
  }

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
    url: '/api/themes/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.theme = response.data;
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
    if(vm.theme) {
      window.addEventListener('resize', function(){
        var backgroundImg = "";
        if(vm.isMobile()) {
          backgroundImg += vm.theme.mobileImage;
        } else {
          backgroundImg += vm.theme.image;
        }
        document.getElementById('theme-img-show').style.backgroundImage = "url('"+backgroundImg+"')";
        var bubbleOpen = false;
      }, true);
    }
  }
  vm.loadBackground = function() {
    if(vm.theme) {
      var backgroundTxt = "";
      if(vm.isMobile()) {
        backgroundTxt += vm.theme.mobileImage;
      } else {
        backgroundTxt += vm.theme.image;
      }
      return "background-image: url('"+backgroundTxt+"')";
    }
  }
  vm.saveECard = function() {
    if (vm.bubblesComplete && vm.theme.message) {
      var newECard = {
        message: vm.theme.message,
        theme: vm.theme
      }
      $http
        .post('/api/ecards',newECard)
        .then(function(response) {
          document.removeEventListener("keydown", keyDownTextField);
          $location.path('/ecards/'+response.data._id);
      });
    }
  }
  
  vm.openModal = function(count) {
    modalClosed = false;
    document.getElementById('question-modal').style.display = "block";
    var questionId = "question-"+count;
    document.getElementById(questionId).style.display = "block";
    vm.tempResponse = vm.theme.questions[count-1].response;
  } 

  vm.closeModal = function() {
    modalClosed = true;
    resetBubbleColors();
    vm.showImage = false;
    document.getElementById('question-modal').style.display = "none";
    var questions = document.getElementsByClassName('questions');
    for(var i=0; i < questions.length; i++) {
      questions[i].style.display = 'none';
    }
  }

  vm.clearResponse = function(count) {
    vm.theme.questions[count-1].response = "";
  }

  vm.saveResponse = function(count) {
    vm.checkBubbles();
    vm.closeModal();
  }
  
  vm.cancelResponse = function(question) {
    vm.theme.questions[question.count-1].response = vm.tempResponse;
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
    var bubblesDone = document.getElementsByClassName('question-bubble-done');
    if (bubblesDone.length === 5) {
      vm.bubblesComplete = true;
      document.getElementById('write-message-step').className += " active-step";
    } else {
      vm.bubblesComplete = false;
      document.getElementById('write-message-step').className = "progress-bar-step"
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