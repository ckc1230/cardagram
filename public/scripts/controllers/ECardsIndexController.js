angular
  .module('eCardsApp',[])
  .controller('ECardsIndexController', ECardsIndexController);

ECardsIndexController.$inject = ['$http'];

function ECardsIndexController($http) {
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/ecards'
  }).then(function successCallback(response) {
    vm.ecards = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
};