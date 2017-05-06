angular
  .module('eCardsApp')
  .controller('ECardsIndexController', ECardsIndexController);

ECardsIndexController.$inject = ['$http'];

function ECardsIndexController($http) {
  angular.element(document).ready(function () {
    document.getElementById('home-breadcrumb').style.width = '100%';
    document.getElementById('themes-breadcrumb').className = 'hidden breadcrumb';
  });

  var vm = this;
  vm.activeTheme = "holiday";
  vm.newECard = {};
  vm.ecards = [];
  vm.themes = [];


  $http({
    method: 'GET',
    url: '/api/ecards'
  }).then(function successCallback(response) {
    vm.ecards = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  $http({
    method: 'GET',
    url: '/api/themes'
  }).then(function successCallback(response) {
    vm.themes = response.data;
    sortThemes();
    testMoment();
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  var testMoment = function() {
    console.log(moment().subtract(10, 'days').calendar());
  }

  var sortThemes = function() {
    var date = new Date();
    var dateToday = ("0"+(date.getMonth()+1).toString()).slice(-2) + "0"+(date.getDate()).toString().slice(-2) + 
        date.getHours() + date.getMinutes() + date.getSeconds();
    var today = {
      date: dateToday
    }
    vm.themes.push(today);
    vm.themes.sort(function(a,b) {
      var dateA = a.date;
      var dateB = b.date;

      if(dateA < dateB) return -1;
      if(dateA > dateB) return 1;
      return 0;
    });
    var indexOfToday = vm.themes.indexOf(today);
    var temp = vm.themes.splice(indexOfToday);
    vm.themes = temp.concat(vm.themes);
    vm.themes.shift();
  }

  vm.createECard = function() {
    $http
      .post('/api/ecards',vm.newECard)
      .then(function(response) {
        vm.ecards.push(response.data);
        vm.newECard = {};
      });
  };

  vm.changeTheme = function(category) {
    vm.activeTheme = category;
    var tabs = document.getElementsByTagName('LI');
    for(var i=0; i<tabs.length; i++) {
      tabs[i].classList.remove('active-tab');
    }
    document.getElementById(category).classList.add('active-tab');
  };

};