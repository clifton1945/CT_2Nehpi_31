/**
 * Created by CLIF on 4/14/2015.
 */


function MyLog(text) {
    /**
     * used to see log immediately, rather than on next operation.
     */
    console.log(JSON.stringify(text));
}

function countThisWord (targetArr) {
    /**
     *
     * @type {*|jQuery}
     */
    // make Array of Words in this Chapter of Text.

    var text = $('div').text();

    var result = text.replace(/(bapt[^\s,-]+)/ig, "<span id='bap'>$&</span>");
}

function click_a_verse () {
    $('p').click(function () {
        $(this).toggle(1000, function () {
            //$(this).load('test_page_1.html');
            //alert(" toggled() a verse. BUT seeable after this alert.");
            $(this).addClass('expand');
            $(this).toggle(1000);
        })
    });
    $('button').click( function() {
        $('#1').load('test_page_1.html');
    })
}

var main = function () {
    click_a_verse();
    //findText();
    //countThisWord(['bapti', 'brother', "Jacob", "Holy Ghost"]);
};

//$(document).ready(main);
