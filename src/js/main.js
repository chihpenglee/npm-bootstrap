global.jQuery = global.$ = require('jquery');

var bootstrap = require('bootstrap');

// bootstrap tooltip must be initialized by calling tootip()
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

