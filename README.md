# test_bed

###ui-router

To add a state:

    In app.js,
    ```javascript
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
                        content': { 
                            templateUrl: 'templates/tb-content.html'
                        },  
                        'footer': { 
                            templateUrl: 'templates/tb-footer.html'
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
    ```
