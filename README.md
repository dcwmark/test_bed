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
<dl>
    <dt>Add to controller/html</dt>
    <dd>test_bed/app/controllers/filter-grid-ctrl.htm<dd>
    <dt>Add to controller/js</dt>
    <dd>test_bed/app/controllers/filter-grid-ctrl.js</dd>
    <dt>Add the controller reference to index.html</dt> 
    <dd><script src="controllers/filter-grid-ctrl.js"></script></dd>
    <dt>Add to nav bar</dt>
    <dd>test_bed/app/templates/tb-header.html
        &lt;li&gt;
            &lt;a ui-sref="app.filter-grid"&gt;
                filter-grid &lt;span class="sr-only"&gt;(current)&lt;/span&gt;
            &lt;/a&gt;
        &lt;/li&gt;
    </dd>
    <dt>Add to directives/html</dt>
    <dd>test_bed/app/directives/filter-grid.html</dd>
    <dt>Add to directive/js</dt>
    <dd>test_bed/app/directives/fileter_grid.js</dd>
    <dt>Add the directives reference to index.html</dt>
    <dd><script src="directives/filter-grid.js"></script></dd>
</dl>
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
