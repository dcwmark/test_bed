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
        
        scope.highLightFilterHeader = function(
            row, rowRenderIndex, col, colRenderIndex) {
          if ( col.filters[0].term ) {
            return 'header-filtered';
          } else {
            return '';
          }
        };
        
        scope.gridOptions = scope.gridOptions || {
          onRegisterApi: function(gridApi) {
            scope.gridApi = gridApi;
          },
          enableFiltering: true,
          columnDefs: [{
            field: 'id',
            width: '4%'
          }, {
            // default
            field: 'name',
            headerCellClass: scope.highLightFilterHeader
          }, {
            field: 'gender',
            filter: {
              // pre-populated search field
              term: '1',
              type: uiGridConstants.filter.SELECT,
              selectOptions: [{
                value: '1', label: 'male'
              }, {
                value: '2', label: 'female'
              }]
            },
            cellFilter: 'mapGender',
            headerCellClass: scope.highLightFilterHeader
          }, {
            // no filter input but with pre-defined filtering
            field: 'company',
            enableFiltering: false,
            filter: {
              noTerm: true,
              condition: function(searchTerm, cellValue) {
                // select only company with 'a' in name
                return cellValue.match(/a/);
              }
            }
          }, {
            // specifies one of the built-in conditions
            // and a placeholder for the input
            field: 'email',
            filter: {
              condition: uiGridConstants.filter.ENDS_WITH,
              placeholder: 'ends with'
            },
            headerCellClass: scope.highLightFilterHeader
          }, {
            field: 'phone'
          }]
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
] )
.filter('mapGender', function() {
  var genderHash = {
    1: 'male',
    2: 'female'
  };
  
  return function(input) {
    if (!input){
      return '';
    } else {
      return genderHash[input];
    }
  };
});
