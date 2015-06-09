/**
 * app.js Created by CLIF on 6/8/2015.
 */

$(document).ready(function() {
    $.fn.exists = function () {
        return this.length !== 0;
    };

    $("#stage").click(function () {
        $('#stage').load('../2Nep31_1_Header.html');
        console.log("Finished #stage.click in $(document).ready(function).");
    });

    $("#driver").click(function () {
        if ($("#mydiv").contents().length > 0) {
            $("#mydiv").html("");
            console.log("UNLOADED #mydiv.");
        } else {
            $("#mydiv").load('../2Nep31_1.html');
            console.log("LOADED #mydiv.");
        }
    });


});
