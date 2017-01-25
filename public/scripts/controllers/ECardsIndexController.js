angular
  .module('eCardsApp')
  .controller('ECardsIndexController', ECardsIndexController);

ECardsIndexController.$inject = ['$http'];

function ECardsIndexController($http) {
  var vm = this;
  vm.newECard = {};
  vm.ecards = [];
  vm.themes = [];

  angular.element(document).ready(function () {
    document.getElementById('home-breadcrumb').style.width = '100%';
    document.getElementById('themes-breadcrumb').className = 'hidden breadcrumb';
  });

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
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createECard = function () {
    $http
      .post('/api/ecards',vm.newECard)
      .then(function(response) {
        vm.ecards.push(response.data);
        vm.newECard = {};
      });
  };

};