'use strict';
//comment for changes
require('angular/angular');
require('angular-route');
require('angular-base64');
require('angular-cookies');

var notesApp = angular.module('notesApp', ['ngRoute', 'ngCookies', 'base64']);

//controlers
require('./notes/controllers/notes-controller')(notesApp);
require('./users/controllers/users-controller')(notesApp);

//filters
require('./filters/sentence-filter')(notesApp);

//services
require('./services/auth')(notesApp);
require('./notes/services/notes-server')(notesApp);

//directives
require('./notes/directives/new-note-form')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes/notes.html',
      controller: 'notesController'
    })
    .when('/signin', {
      templateUrl: 'views/users/users.html',
      controller: 'usersController'
    })
    .when('/signup', {
      templateUrl: 'views/users/users.html',
      controller: 'usersController'
    })
    .when('/signout', {
      templateUrl: 'views/users/users.html',
      controller: 'usersController'
    })
    .otherwise({
      redirectTo: '/signin'
    });
}]);
