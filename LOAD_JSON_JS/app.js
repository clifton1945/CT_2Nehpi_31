var main = function() {

    function anArray() {
        return [
            {
                "display": "JavaScript Tutorial",
                "url": "http://www.w3schools.com/js/default.asp"
            },
            {
                "display": "jQuery Tutorial",
                "url": "http://www.w3schools.com/jquery/default.asp"
            },
            {
                "display": "HTML Tutorial",
                "url": "http://www.w3schools.com/html/default.asp"
            },
            {
                "display": "CSS Tutorial",
                "url": "http://www.w3schools.com/css/default.asp"
            }
        ];

    }

    function myFunction(myArry) {
        var out = "hi there ";
        var i;
        for (i = 0; i < myArry.length; i++) {
            out += '<a href="' + myArry[i].url + '">' +
                myArry[i].display + '</a><br>';
        }
        document.getElementById("id01").innerHTML = out;
    }
};

$( document ).ready(main);
