/**
 * test_bed/app/directives/filter-grid.js
**/

TB.app.directive( 'filterGrid', ['uiGridConstants',
  function(uiGridConstants) {
    'use strict';
    
    return {
      restrict: 'E',
      scope: {
        gridData: '='
      },
      templateUrl: 'directives/filter-grid.html',
      link: function(scope, element, attrs) {
        
        scope.gridOptions = scope.gridOptions || {
          enableFiltering: true
        };
        
        scope.$watch('gridData', function(gridData) {
          if ( gridData ) {
            scope.gridOptions = {
              data: gridData
            };
          }
        });
      }
    };
  }
] );
