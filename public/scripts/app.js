console.log("Hello!");

angular
  .module('eCardsApp', ['ngRoute','angularCSS'])
  .config(config)
    
config.$inject = ['$routeProvider', '$locationProvider']    
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/main',
      css: '/styles/style.css'
    })
    .when('/ecards', {
      templateUrl: '/templates/ecards',
      controllerAs: 'eCardsCtrl',
      controller: 'ECardsIndexController',
      css: '/styles/style.css'
    })
    .when('/ecards/:id', {
      templateUrl: '/templates/ecard',
      controllerAs: 'eCardCtrl',
      controller: 'ECardsShowController',
      css: '/styles/style.css'
    })
    .when('/themes/:id/edit', {
      templateUrl: '/templates/theme_edit',
      controllerAs: 'themeEditCtrl',
      controller: 'ThemeEditController',
      css: '/styles/style.css'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}