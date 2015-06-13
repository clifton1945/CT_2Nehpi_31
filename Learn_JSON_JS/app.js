$(document).ready(function() {
    // this un var-ed declaration makes it global.
    //noinspection JSUndeclaredVariable
    globals = {
        "sentLst": "",
        "sent01": "",
        "something_else": ""
    };

    // pull actual data from another dir.
    var url = 'http://localhost:63342/CT_2Nehpi_31/Learn_JSON_JS/sltl.json';

    $.ajax({
        type: "GET",
        crossOrigin: true,
        crossDomain: true,
        data: "dddString",
        url: url,
        success: function (data) {
            globDat(data);
            $("#id02").html(globals.sent01);
            $("#id03").html(globals.sentLst);
            return data;
        }
    });

    function globDat(dat) {
        globals['sent01'] = dat[1];
        globals['sentLst'] = dat;
        return dat
    }
    function w(){
        console.log("globals.sent01 >> " + globals.sent01);
        console.log("globals.sentLst >> " + globals.sentLst);
    }

    w();
});

