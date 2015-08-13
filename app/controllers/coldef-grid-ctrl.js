/**
 * test_bed/app/controllers/coldef-grid-ctrl.js
**/

TB.app.controller( 'ColdefGridCtrl', [ '$scope', 'uiGridConstants',
    function($scope, uiGridConstants) {
      'use strict';
      
      console.log('coldef-grid-ctrl.js');
      
      var _self = this;
      
      var gridData = [{
        firstName: 'Sarah',
        lastName: 'Kerrigan',
        age: 215,
        gender: 'female'
      }, {
        firstName: 'Edmund',
        lastName: 'Duke',
        age: 55,
        gender: 'male'
      }, {
        firstName: 'Tassadar',
        age: 2143,
        gender: 'male'
      }, {
        firstName: 'Selendis',
        age: 1571,
        gender: 'female'
      }, {
        firstName: 'Ulrezaj',
        age: 761,
        gender: 'male'
      }];
      
      _self.gridOptions = {
        columnDefs: [{
          field: 'firstName',
          displayName: 'First Name',
          width: '*'
        }, {
          field: 'lastName',
          displayName: 'Last Name',
          width: '**',
          sort: {
            direction: uiGridConstants.ASC,
            priority: 0
          }
        }, {
          field: 'age',
          displayName: 'Age',
          cellClass: 'ageCell',
          headerClass: 'ageHeader',
          width: '6%'
        }, {
          field: 'gender',
          displayName: 'Sex',
          width: '8%',
          sortingAlgorithm: function(a, b) {
            var nulls = _self.gridApi.core.sortHandleNulls(a, b);
            if ( null !== nulls) {
              return nulls;
            }
            if ( a === b ) {
              return 0;
            }
            if ( a === 'male' ) {
              return 1;
            }
            if ( b === 'male' ) {
              return -1;
            }
            if ( a === 'female' ) {
              return 1;
            }
            if ( b === 'female' ) {
              return -1;
            }
            return 0;
          }
        }],
        data: gridData,
        onRegisterApi: function(gridApi) {
          _self.gridApi = gridApi;
        }
      };
    }
] );
