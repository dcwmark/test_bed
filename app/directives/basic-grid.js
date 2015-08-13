/**
 * test_bed/app/directives/basic-grid.js
**/

TB.app.directive('basicGrid',
  function() {
    'use strict';
    
    return {
      restrict: 'E',
      scope: {
        gridData: '=gridData'
      },
      templateUrl: 'directives/basic-grid.html'
    };
  }
);
