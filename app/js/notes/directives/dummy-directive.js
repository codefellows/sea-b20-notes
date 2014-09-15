'use strict';

module.exports = function(app) {
  app.directive('dummyDirective', function() {
    var direc = {
      restrict: 'A',
      template: '<h1>{{dummyValue}}</h1><input type="text" ng-model="dummyValue">',
      scope: {
        dummyValue: '@'
      },
      controller: function($scope) {
        $scope.testValue =  'hello world';
      }
    };

    return direc;
  });
};
