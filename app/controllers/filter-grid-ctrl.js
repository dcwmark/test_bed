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
        
        data.forEach(function(row, index) {
          row.gender = row.gender === 'male' ? '1' : '2';
          row.mixedDate = new Date( new Date().getTime() * Math.random() );
        });
        
        _self.gridData = data;
        
      });
  }
] );
