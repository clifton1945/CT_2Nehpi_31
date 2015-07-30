/**
 * Created by CLIF on 4/14/2015.
 */

//UTILITIES
function roundIt(num, dPt){
    if(dPt === undefined) {
        dPt = 1;
    }
    var f = Math.pow(10, dPt);
    return parseFloat(Math.round(num * f ) / f )
}
function logIt( txt ) {
    $(".console").text(txt)
}
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
    var result = text.replaceAll(/(bapt[^\s,-]+)/ig, "<span id='bap'>$&</span>");
}
function click_a_verse () {
    $('.verses p').click(function () {
        var $this = $(this);
        logIt("in click_a_verse $(this)" + $this.length + ", " + $this.text().slice(0, 50));
        $(this).toggle(1000, function () {
            $(this).addClass('expand');
            $(this).toggle(1000);
        })
    });
    $('button').click( function() {
        $('#1').load('header.html');
    })
}
function toggleVerse( that ) {
    that.toggle(1000, function () {
        that.addClass('expand');
        that.toggle(1000);
    });
}
var main = function () {
    $(".verses").load('verses.html');
    click_a_verse();
    //findText();
    //countThisWord(['bapti', 'brother', "Jacob", "Holy Ghost"]);
};

$(document).ready(main);
