/**
 * app.js Created by CLIF on 2015-06-19 20:33:00.
 */

// using regex replace pure text with html tags
// using jQuery see groups of text with css mods
$(document).ready(function() {
    var nameHtml = '../2Nep31_1.html',
        globalDat;

    var jqxhr = $.get(nameHtml, '', function (data, status, xhr) {
        //console.log("data>> " +  data.slice(99, 400) );
        //console.log( "status>> " + status );
        //console.log( "xhr.state>> " + xhr.state );
    })
        .done(function(data) {
            globalDat = data;  // set global var when .done
            regexMatch();
        })
        .fail(function() {
            console.log( "error: in >>\n" +
                "var jqxhr = $.getJSON(file_name, function ()");
        })
        .always(function() {
            //console.log( "complete\n  does this fire after .done??\n  YES" );
        });

    // use regex
    function regexMatch() {
        var reObj,  myArray, msg, trgt, mod;
        trgt = 'water';
        mod = "ig";
        reObj = new RegExp(trgt, mod);
        //matched = globalDat.match(reObj);
        //ret = reObj.exec(globalDat);


        msg = 'Found ' + trgt + '/' + mod + '@ \n';
        while ((myArray = reObj.exec(globalDat)) !== null) {
            msg += '<br>[' + myArray.index + ']';
            //msg += '<br>Next match[' + reObj.lastIndex + ']';
            console.log(msg);
        }

        //msg += "<br>\nin regexMatch() >> \n   there are (" + matched.length + ")" + reObj;
        console.log(msg);
        $("#hiddiv").html(msg);
    }



});
