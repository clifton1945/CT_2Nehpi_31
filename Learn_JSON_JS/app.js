$(document).ready(function() {
    var jsonfilepath = "C:\\Users\\CLIF\\My Projects\\.PyCharm30\\SeeScriptures\\dat\\sltl.json";

    var somedat = "[u'1', u'And', u'now', u'I', u',', u'Nephi', u',', u'make', u'an', u'end', u'of', u'my', u'prophesying', u'unto', u'you', u',', u'my', u'beloved', u'brethren', u'.']";

    console.log("just successfully logged somedat >> " + somedat);

    $("#id01").html(somedat)
    console.log("just successfully put somedat into #id01.");



    var aFunction = function (x) {
        console.log("IN aFunction()");
        var a = "I'm in aFunction.";
        $("#id02").html(a + ", " + x);
    };

    aFunction(jsonfilepath);

});
