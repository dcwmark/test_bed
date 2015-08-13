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
        // add new state ==>
        } )
        .state( 'app.filter-grid', {
            url: 'filter-grid',
            views: {
                'content@': {
                    templateUrl: 'controllers/filter-grid-ctrl.html'
                }
            }
        } );
        // <== end new state
```

Add to controller/html
    test_bed/app/controllers/filter-grid-ctrl.htm

Add to controller/js
    test_bed/app/controllers/filter-grid-ctrl.js

Add the controller reference to index.html 
    <script src="controllers/filter-grid-ctrl.js"></script>

Add to navigator
    test_bed/app/templates/tb-header.html
        ><
            <li>
                <a ui-sref="app.filter-grid">
                    filter-grid <span class="sr-only">(current)</span>
                </a>
            </li>

Add to directives/html
    test_bed/app/directives/filter-grid.html

Add to directive/js
    test_bed/app/directives/fileter_grid.js

Add the directives reference to index.html
    <script src="directives/filter-grid.js"></script>
