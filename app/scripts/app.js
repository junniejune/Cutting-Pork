'use strict';

/**
 * @ngdoc overview
 * @name cuttingPorkApp
 * @description
 * # cuttingPorkApp
 *
 * Main module of the application.
 */
angular
  .module('cuttingPorkApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMaterial',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })
      .when('/candidate', {
        templateUrl: 'views/candidate.html',
        controller: 'candidateCtrl'
      })
      .when('/candidatelist', {
        templateUrl: 'views/candidateList.html',
        controller: 'candidateCtrl'
      })
      .when('/issue', {
        templateUrl: 'views/issue.html',
        controller: 'issueCtrl'
      })
      .when('/issuelist', {
        templateUrl: 'views/issueList.html',
        controller: 'issueCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($location, $rootScope) {
    $rootScope.goToState = function(state) {
      $location.path(state);
    };
  });
