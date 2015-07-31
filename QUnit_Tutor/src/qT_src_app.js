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
function bindEvents() {
    $('.verses p').click(function () {
        toggleVerse( $(this));
    });
    $('button').click( function() {
        $('#1').load('header.html');
    })
}
function toggleVerse( aVerse ) {
    aVerse.toggle(1000, function () {
        aVerse.addClass('expand');
        aVerse.toggle(1000);
    logIt("in toggleVerse Index[" + aVerse.index() + "], " + aVerse.text().slice(0, 50));
    });
}
function setOpacity( ) {}


var main = function () {
    bindEvents();
};

$(document).ready(main);
