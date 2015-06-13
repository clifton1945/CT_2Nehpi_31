$(document).ready(function() {
    var x;
    var jsonfilepath = "C:\\Users\\CLIF\\My Projects\\.PyCharm30\\SeeScriptures\\dat\\sltl.json";
    var tstObj = ["this str is a list object.", "one", "two"];
    var tstJSON = '["this str is a list object.", "one", "two"]';
    var id03  = $("#id03");

    var a0 = id03.load('http://localhost:63342/CT_2Nehpi_31/Learn_JSON_JS/sls.txt');
    console.log('sls.txt' + ' was performed.');
    var b = id03.text();
    var c = id03.val();
    var d = id03.html();

    var url = 'http://localhost:63342/CT_2Nehpi_31/Learn_JSON_JS/sls.txt';
    var x = $.ajax({
        type: "POST",
        crossOrigin: true,
        crossDomain: true,
        data: "String",
        url: url,
        success: function (data) {
            console.log("#id02 is sliced is >> " + data.slice(125, 175));
            $("#id02").html(data.slice(125, 175));
        }
    });
    console.log("return:  slice(31, 60) >> " + "NONE DARN IT");


    var aFunction = function (x) {
        var msg = ("IN aFunction()");
        var a = "I'm in aFunction ";
        var b = x.html();
        msg = msg + b;
        console.log(msg)
    };

    aFunction(id03);

});

