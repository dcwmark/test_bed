/**
 * test_bed/src/app.js
**/

(function() {

  'use strict';

  TB.injectors = [
    'ngTouch',
    'ui.router',
    'ui.grid'
  ];
  
  TB.app = angular.module( 'testApp', TB.injectors );

  TB.app.config( ['$stateProvider', '$urlRouterProvider',
      function( $stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state( 'app', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'templates/tb-header.html'
          },
          'content': {
            templateUrl: 'templates/tb-content.html'
          },
          'footer': {
            templateUrl: 'templates/tb-footer.html'
          }
        }
      } )
      .state( 'app.basic-grid', {
        url: 'basic-grid',
        views: {
          'content@': {
            templateUrl: 'controllers/basic-grid-ctrl.html'
          }
        }
      } )
      .state( 'app.coldef-grid', {
        url: 'coldef-grid',
        views: {
          'content@': {
            templateUrl: 'controllers/coldef-grid-ctrl.html'
          }
        }
      } )
      .state( 'app.filter-grid', {
        url: 'filter-grid',
        views: {
          'content@': {
            templateUrl: 'controllers/filter-grid-ctrl.html'
          }
        }
      } );
  } ] );

})();
