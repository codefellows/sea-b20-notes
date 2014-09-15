'use strict';

module.exports = function(app) {
  app.directive('newNoteForm', function() {
    var direc = {
      restrict: 'EAC',
      templateUrl: 'views/notes/new-note-form.html'
    };

    return direc;
  });
};
