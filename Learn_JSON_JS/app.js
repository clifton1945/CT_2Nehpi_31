$(document).ready(function() {
    // this un var-ed declaration makes it global.
    //noinspection JSUndeclaredVariable
    globals = {
        "sentLst": "",
        "sent02": "",
        "something_else": ""
    };

    // pull actual data from another dir.
    var file_name = 'cd_sentlst_str.json';

    var url = 'http://localhost:63342/CT_2Nehpi_31/Learn_JSON_JS/' + file_name;
    // WANT to directly access fill in pyton project.
    // TODO FIX so far this doesn't work
    var url1 = 'http://localhost:63342//C://Users/CLIF//My Projects//.PyCharm30//SeeScriptures//dat//' + file_name;

    $.ajax({
        type: "GET",
        crossOrigin: true,
        crossDomain: true,
        data: "String",
        url: url,
        success: function (data) {
            globDat(data);
            $("#id02").html(globals.sent02);
            $("#id03").html(globals.sentLst[0]);
            return data;
        }
    });

    function globDat(dat) {
        globals['sent02'] = dat[2];
        globals['sentLst'] = dat;
        console.log("globals.sent02 > " + globals['sent02']);
        console.log("globals.sentLst.length > " + globals['sentLst'].length);
        return dat
    }
    function w(){
        console.log("globals.sent02 >>> " + globals['sent02']);
        console.log("globals.sentLst.length >>> " + globals['sentLst'].length);
    }

    w();
});

