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
    })
    .when('/ecards/:id', {
      templateUrl: '/templates/ecard',
      controllerAs: 'eCardCtrl',
      controller: 'ECardsShowController'
    })
    .when('/themes/:id/edit', {
      templateUrl: '/templates/theme_edit',
      controllerAs: 'themeEditCtrl',
      controller: 'ThemeEditController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}