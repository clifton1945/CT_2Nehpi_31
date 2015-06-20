/**
 * app.js Created by CLIF on 2015-06-19 20:33:00.
 */

// using regex replace pure text with html tags
// using jQuery see groups of text with css mods
$(document).ready(function() {
    var $hiddiv = $("#hiddiv"),
        nameHtml = '../2Nep31_1.html',
        dat, txt;
    var jqxhr = $.get(nameHtml, '', function (data, status, xhr) {
        console.log("data>> " +  data.slice(99, 400) );
        console.log( "status>> " + status );
        console.log( "xhr.state>> " + xhr.state );
    })
        .done(function(data) {
            dat = data;  // set global var when .done
            modify_page();  // call to outside function.
            mod_a_water();
        })
        .fail(function() {
            console.log( "error: in >>\n" +
                "var jqxhr = $.getJSON(file_name, function ()");
        })
        .always(function() {
            console.log( "complete\n  does this fire after .done??\n  YES" );
        });

    // Set another completion function for the request above
    jqxhr.done(function() {
        console.log( "inside second jqxhr.done()")
    });

    // use regex
    function mod_a_water() {
        var trgt = dat;
        var reg = /water/ig;
        var arr = trgt.match(reg);
        var msg = "";
        msg += "in mod_a_water() >> \n   there are (" + arr.length + ")" + reg;
        console.log(msg);

    }


    // since most work will be added here,
    // make this external function to apps.js
    function modify_page() {
        var sample = dat.slice(1000, 1150);
        $hiddiv.html(sample);
        var msg = 'outer func[modify_page()] invoked inner .done()\n    sample of dat >>\n' + sample;
        console.log(msg);
    }
});
