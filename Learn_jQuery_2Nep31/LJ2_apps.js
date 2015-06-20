/**
 * app.js Created by CLIF on 6/8/2015.
 */

$(document).ready(function() {
    $.fn.exists = function () {
        return this.length !== 0;
    };

    var $header = $("#header"),
        $hdiv = $("#hdiv"),
        $verses = $("#verses"),
        $vdiv = $("#vdiv");

    $header.click(function () {
        if ($hdiv.contents().length > 0) {
            $hdiv.html("");
            $header.val("LOAD Nep31_1_Header.html");
        } else {
            $hdiv.load('../2Nep31_1_Header.html');
            $header.val = "UNLOAD Nep31_1_Header.html";
            console.log("Finished #header.click in $(document).ready(function).");
        }
    });
    $verses.click(function () {
        if ($vdiv.contents().length > 0) {
            $vdiv.html("");
            $verses.val("LOAD 2Nep31_1.html");
        } else {
            $vdiv.load('../2Nep31_1.html');
            $verses.val("UNLOAD 2Nep31_1.html");
            console.log("Finished #verses.click in $(document).ready(function).");
        }
    });


});
