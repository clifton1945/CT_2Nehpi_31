/**
 * app.js Created by CLIF on 2015-06-19 20:33:00.
 */

// using regex replace pure text with html tags
// using jQuery see groups of text with css mods
$(document).ready(function() {
    var $hiddiv = $("#hiddiv"),
        nameHtml = '../2Nep31_1.html',
        nameCss = '../2Nep31_1.css',
        dat, txt, htm, val;

    var jqxhr = $.get(nameHtml, function () {
        console.log( "success" );
    })
        .done(function(jsdat) {
            //console.log( "second success\n" + jsdat );
            modify_page(jsdat);  // call to outside function.
            dat = jsdat;  // set global var AFTER .done
        })
        .fail(function() {
            console.log( "error: in >>\n" +
                "var jqxhr = $.getJSON(file_name, function ()");
        })
        .always(function() {
            console.log( "complete\n  does this fire after .done??\n  YES" );
        });

    // Set another completion function for the request above
    jqxhr.complete(function() {
        var x = dat;
        console.log( "inside second jqxhr.complete()")
    });


    // since most work will be added here,
    // make this external function to apps.js
    function modify_page(dat) {
        var sample = dat.slice(1000, 1500);
        $hiddiv.html(sample);
        var msg = 'outer func[modify_page()] invoked inner .done()\n    sample of dat >>\n' + sample;
        console.log(msg);
    }});
