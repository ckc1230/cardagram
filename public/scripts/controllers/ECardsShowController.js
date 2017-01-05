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
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
};