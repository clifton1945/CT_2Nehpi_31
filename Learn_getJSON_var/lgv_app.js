// 2015-06-16 12:59:46
// dir:  Learn_getJSON_var
// 2015-06-18 17:37:45
//a working prototype that could be used to work on passed in file json data.
// BUT have not figured out how to get data OUTSIDE OF THE $.getJSON() call.
//
$(document).ready(function() {
    // USE actual data.
    var file_name, dat, x ;
    file_name = '../cd_sentlst_str.json';

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request
    var jqxhr = $.getJSON( file_name, function(jsdat) {
        console.log( "success" );
    })
        .done(function(jsdat) {
            console.log( "second success\n" + jsdat[0] );
            modify_page(jsdat);
            dat = jsdat;
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "complete\n  does this fire after .done??\n  YES" );
        });

// Perform other work here ...

// Set another completion function for the request above
    jqxhr.complete(function() {
        console.log( "second jqxhr call.complete\n" +
            "using the global var dat >>\n  " + dat[2] );
    });

    // since most work will be added here,
    // make this external function to apps.js
    function modify_page(dat) {
        $('#id01').html(dat[8]);
        $('#id02').html(dat[9]);
        msg = 'sample of dat >>\n' + dat[0].slice(0, 35);
        console.log(msg);
    }


});



