angular
  .module('eCardsApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http', '$routeParams', '$location'];

function MainController($http, $routeParams, $location) {
 angular.element(document).ready(function () {
    document.getElementById('home-breadcrumb').style.width = '100%';
    document.getElementById('themes-breadcrumb').className = 'hidden breadcrumb';
  });
}