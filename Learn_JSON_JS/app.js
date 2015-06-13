$(document).ready(function() {
    // this un var-ed declaration makes it global.
    //noinspection JSUndeclaredVariable
    globals = {
        "all": "",
        "sliced": "",
        "something_else": ""
    };

    // pull actual data from another dir.
    var url = 'http://localhost:63342/CT_2Nehpi_31/Learn_JSON_JS/sls.txt';

    $.ajax({
        type: "GET",
        crossOrigin: true,
        crossDomain: true,
        data: "String",
        url: url,
        success: function (data) {
            globDat(data);
            $("#id02").html(globals.sliced);
            $("#id03").html(globals.all);
            return data;
        }
    });

    function globDat(dat) {
        globals['sliced'] = dat.slice(0, 50);
        globals['all'] = "short slice from globDat(dat)> " + globals.sliced;
        return dat
    }
    function aa(){
        globals['a'] = 123;
        globals[123] = 'This is a hard coded value.';
    }
    function w(){
        console.log("globals.a >> " + globals.a);
        console.log("globals.all >> " + globals.all);
        console.log("globals.sliced >> " + globals.sliced);
        //alert(globals.123); //will not work
        console.log("globals.123 >> " + globals[123]); //that's OK.
    }
    aa();
    //globDat(" and this is some text added in the globDat() invocation.");

    w();
});

