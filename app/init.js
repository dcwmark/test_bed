/* test_bed/src/init.js */

(function ($) {
    
    "use strict";
    
    $.extend(true, window, {
        "TB" : {
            "Name" : "Test Bed",
            "Version" : "0.0.1",
        }
    });
    console.log('Test Bed starts up:: ', TB);
    
})(jQuery);

