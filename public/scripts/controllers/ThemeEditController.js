angular
  .module('eCardsApp')
  .controller('ThemeEditController', ThemeEditController);

ThemeEditController.$inject = ['$http', '$routeParams'];

function ThemeEditController($http, $routeParams) {
  var vm = this;
  $http({
    method: 'GET',
    url: '/api/themes/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.theme = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
};