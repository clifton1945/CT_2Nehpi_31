/**
 * app.js Created by CLIF on 2015-06-19 20:33:00.
 */

// using regex replace pure text with html tags
// using jQuery see groups of text with css mods
$(document).ready(function() {
    var nameHtml = '../2Nep31_1.html',
        globalDat, msg ;

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
        regexMatch(/water/ig, globalDat);
        regexMatch(/bapti/ig, globalDat);
        regexMatch(/repent/ig, globalDat);
        regexMatch(/ghost/ig, globalDat);
        regexMatch(/fire/ig, globalDat);
        regexMatch(/endure/ig, globalDat);
        regexMatch(/doctrine/ig, globalDat);
        //regexMatch(/and/ig, globalDat);
    });

    // use regex
    function regexMatch(re, text) {
        var reObj, msg, hits, last, lng, delta, del, ndx, delDiv, ndxDiv;
        reObj = new RegExp(re);

        delta = 0;
        last = 0;
        lng = text.length;
        msg = 'Found ' + re +  '@ \n';
        delDiv = msg;
        ndxDiv = msg;
        while ((hits = reObj.exec(text)) !== null) {
            delta = hits.index - last;
            last = hits.index;
            ndx = Number((hits.index / lng).toFixed(3));
            del = Number((delta / lng).toFixed(3));

            msg += hits.index + ', ' + delta + ', ' + ndx + ', ' + del + '\n';
            ndxDiv += '<br>' + ndx;
            delDiv += '<br>' + del;
        }
        $('#deltaDiv').html(delDiv);
        $('#ndxDiv').html(ndxDiv);
        console.log(msg);
    }
});
