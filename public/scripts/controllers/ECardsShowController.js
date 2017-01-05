angular
  .module('eCardsApp')
  .controller('ECardsShowController', ECardsShowController);

ECardsShowController.$inject = ['$http', '$routeParams'];

function ECardsShowController($http, $routeParams) {
  var vm = this;
  console.log($routeParams);
  $http({
    method: 'GET',
    url: '/api/ecards/' + $routeParams.id
  }).then(function successCallback(response) {
    console.log("hello: ",response.data);
    vm.ecard = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
};