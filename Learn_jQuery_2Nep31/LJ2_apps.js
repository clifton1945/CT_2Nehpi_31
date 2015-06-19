/**
 * app.js Created by CLIF on 6/8/2015.
 */

$(document).ready(function() {
    $.fn.exists = function () {
        return this.length !== 0;
    };

    $("#stage").click(function () {
        $("#stage").load('../2Nep31_1_Header.html');
        console.log("Finished #stage.click in $(document).ready(function).");
    });

    $("#driver").click(function () {
        var $md = $("#mydiv");
        if ($md.contents().length > 0) {
            $md.html("");
            $("#driver").val("LOAD.");
            console.log("UNLOADED #mydiv.");
        } else {
            $md.load('../2Nep31_1.html');
            $("#driver").val("UNLOAD.");
            console.log("LOADED #mydiv.");
        }
    });


});
