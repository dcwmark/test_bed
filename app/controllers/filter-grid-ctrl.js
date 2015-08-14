/**
 * test_bed/app/controllers/filter-grid-ctrl.js
**/

TB.app.controller( 'FilterGridCtrl', [ '$scope', '$http',
  function($scope, $http) {
    'use strict';
    
    console.log('filter-grid-ctrl.js');
    
    var _self = this;
    
    $http.get('../app/data/500_complex.json')
      .success(function(data) {
        _self.gridData = data;
      });
  }
] );
