'use strict';
//comment for changes
require('angular/angular');
require('angular-route');

var notesApp = angular.module('notesApp', ['ngRoute']);

//controlers
require('./notes/controllers/notes-controller')(notesApp);

//filters
require('./filters/sentence-filter')(notesApp);

//services
require('./notes/services/notes-server')(notesApp);

//directives
require('./notes/directives/new-note-form')(notesApp);
require('./notes/directives/dummy-directive')(notesApp);

notesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/notes', {
      templateUrl: 'views/notes/notes.html',
      controller: 'notesController'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
