/**
 * app.js Created by CLIF on 2015-06-19 20:33:00.
 */

// using regex replace pure text with html tags
// using jQuery see groups of text with css mods
$(document).ready(function() {
    var nameHtml = '../2Nep31_1.html',
        globalDat;

    var jqxhr = $.get(nameHtml, '', function (data, status, xhr) {
    })
        .done(function(data) {
            globalDat = data;  // set global var when .done
        })
        .fail(function() {
            console.log( "error: in >>\n" +
                "var jqxhr = $.getJSON(file_name, function ()");
        });

    jqxhr.done( function() {
        regexMatch(/bapti/ig, globalDat);
        regexMatch(/water/ig, globalDat);
    });

    // use regex
    function regexMatch(re, text) {
        var reObj, hits, msg, delta;
        reObj = new RegExp(re);

        msg = 'Found ' + re +  '@ \n';
        delta = 0;
        while ((hits = reObj.exec(text)) !== null) {
            delta = hits.index - delta;
            msg += '<br>[' + hits.index + ', ' + delta + ']';
            //msg += '<br>Next match[' + reObj.lastIndex + ']';
            console.log(msg);
        }

        //msg += "<br>\nin regexMatch() >> \n   there are (" + matched.length + ")" + reObj;
        console.log(msg);
        $("#hiddiv").html(msg);
    }
});
