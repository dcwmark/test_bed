/**
 * test_bed/app/directives/coldef-grid.js
**/

TB.app.directive('coldefGrid',
  function() {
    'use strict';
    
    return {
      restrict: 'E',
      scope: {
        gridOptions: '=gridOptions'
      },
      templateUrl: 'directives/coldef-grid.html'
    };
  }
);
