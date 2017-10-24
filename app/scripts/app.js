'use strict';

/**
 * @ngdoc overview
 * @name radiologyLabsApp
 * @description
 * # radiologyLabsApp
 *
 * Main module of the application.
 */
angular
  .module('radiologyLabsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'radiologyLabsApp.factory'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $httpProvider.defaults.useXDomain = true;
  }]);
