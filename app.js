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

    // make regex for each targetArr item.
    var nTargets = targetArr.length;
    while(nTargets--) {
        // put ALL of these target Words into an Array ..
        var targetWord = targetArr[nTargets];
        // USING RegEx
        var targetRegEx = new RegExp(targetWord, "img");
        var x = text.search(targetRegEx);
        MyLog(targetRegEx + " @ ndx:" + x);
        // USING jQuery inArray
/*
        var trgtNdx = $.inArray( targetWord, wordsA, 0 );
        MyLog(targetWord + " @ ndx:" + trgtNdx);
*/

    }
}

function click_a_verse () {
    $('p').click(function () {
        $(this).toggle(1000, function () {
            //$(this).load('test_page_1.html');
            alert(" toggled() a verse. BUT seeable after this alert.");
            $(this).addClass('expand');
            $(this).toggle(2000);
        })
    });
    $('button').click( function() {
        //window.open('test_page_1.html');
        $('#1').load('test_page_1.html');
    })
}

var main = function () {
    click_a_verse();
    //findText();
    //countThisWord(['bapti', 'brother', "Jacob", "Holy Ghost"]);
};

$(document).ready(main);
