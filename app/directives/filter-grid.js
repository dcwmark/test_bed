/**
 * test_bed/app/directives/filter-grid.js
**/

TB.app.directive('filterGrid', ['uiGridConstants',
  function(uiGridConstants) {
  'use strict';
  
  return {
    restrict: 'E',
    scope: {
      gridData: '=gridData',
      gridOptions: {
        data: '=gridData'
      }
    },
    templateUrl: 'directives/filter-grid.html'
  };
}]);
