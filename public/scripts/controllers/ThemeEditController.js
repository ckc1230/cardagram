angular
  .module('eCardsApp')
  .controller('ThemeEditController', ThemeEditController);

ThemeEditController.$inject = ['$http', '$routeParams', '$location'];

function ThemeEditController($http, $routeParams, $location) {
  var vm = this;
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
};