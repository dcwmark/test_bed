/**
 * test_bed/app/controllers/basic-grid-ctrl.js
**/

TB.app.controller( 'BasicGridCtrl', [ '$scope',
    function($scope) {
      'use strict';
      
      console.log('basic-grid-ctrl.js');
      
      var _self = this;
      
      _self.gridData = [{
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
      }, {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
      }, {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
      }];
    }
] );
