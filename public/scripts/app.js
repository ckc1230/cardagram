console.log("Hello!");

angular
  .module('eCardsApp', ['ngRoute'])
  .config(config)
    
config.$inject = ['$routeProvider', '$locationProvider']    
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/ecards',
      controllerAs: 'eCardsCtrl',
      controller: 'ECardsIndexController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}