
/**
 * @deprecated - retaining for when I add key press stuff and us QUnit.
 * @param target
 * @constructor
 */
function KeyLogger( target ) {
    this.target = target;
    this.log = [];
    var that = this;
    this.target.off( "keydown" ).on( "keydown", function( event ) {
        that.log.push( event.keyCode );
    });
}
/**
 * @deprecated - useful when using keyPress
 */
function seeKey() {
        $(document).on("keydown", function ( event ) {
            console.log("keydown[" + event.keyCode + "]");
        })
    }
/**
 * @deprecated - leave <p>, mitigate it with css, too much trouble.
 * all p to span
 * @returns {XML|void|string}
 * @param str
 */
function p2span( str ) {
    // how handle /p
    return str.replace(/<(\/?)p>/img, "<$1span>");
}
/**
 * @deprecated - leave <p>, mitigate it with css, too much trouble.
 * ALL 'span' to 'p'
 * @param str
 * @param str
 */
function span2p( str ) {
    return str.replace(/span/ig, "p");
}

// GLOBALS
var NDXDELTA = 2
    , ndxDELTA = NDXDELTA
    , ndxCUR = 0
    ;

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
function logVerseReadingClassAttribute (verseThis, ndxThis) {
    var txt
        ;
    if (verseThis.attr('class') == 'cur') {
        //$(window).scrollTop(250);  //this worlks
        txt = " [" + ndxThis + "]  class:" + verseThis.attr('class')
            + ", posTop:" + roundIt(verseThis.position().top)
            + ", offtop:" + roundIt(verseThis.offset().top)
            + ", scrollTop:" + roundIt($(window).scrollTop());
        console.log(txt);
    }
}

// CThought functions
/**
 * sets a verse's read class to old:have read, current: am reading or new: have not read.
 * @param verseThis
 * @param ndxThis
 * @param ndxCur
 * @param ndxNew
 */
function setReadingClass(verseThis, ndxThis, ndxCur, ndxNew ) {
    if (isOld()) {
        verseThis.attr('class', 'old');
    }
    if (isCurrent()) {
        verseThis.attr('class', 'cur');
    }
    if (isNew()) {
        verseThis.attr('class', 'new');
    }
    // these properties are just for debugging
    logVerseReadingClassAttribute(verseThis, ndxThis);

    function isOld() {
        return ndxThis < ndxCur
    }
    function isCurrent() {
        return ndxThis >= ndxCur && ndxThis < ndxNew
    }
    function isNew() {
        return ndxThis >= ndxNew
    }
}

// expect I'm in setAllVerse():
// AND verses, ndxCur, ndxDELTA in scope
// AND all the p #class are in scope
// USE someKey  TO increment ndxCur
// THEN
//  call logIt, forEachElement
function forKeyPress() {

}

/**
 * MODIFIES a verse's style, tags, etc f(index
 * CLASSIFIES a verse as being 'old'==read, 'cur'==CURrently reading, 'new'==NOT read.
 * @param collection of verses.
 * @param ndx_current: if passed parameter, global ndxCUR is updated; if not global is used.
 * @param delta: if passed parameter global ndxDELTA is updated; if not global is used.
 */
function forEachElement(collection, ndx_current, delta) {
    // Globals
    ndxCUR = (ndx_current ? ndx_current : ndxCUR);  //if passed parameter global is updated.
    ndxDELTA = (delta  ? delta : ndxDELTA );  //if passed parameter global is updated.
    // vars
    var ndxNew = ndxCUR + ndxDELTA
        ;
    // CodeOI
    $.each(collection, function (ndx) {
        setReadingClass($(this), ndx, ndxCUR, ndxNew);
    });
}
/**
 * MODIFIES All Verse's Reading style, Position, etc as f(position index, tags).
 */
function setAllVerses () {
    var verses = $('.verses p')
        ;  // expect all verses are <p>.
    verses.click(function () {
        var self = $(this)
            ,txt   = self.text()
            ;
        // these are GLOBALS: notice the caps.
        ndxCur  = self.index();
        ndxDELTA = NDXDELTA;  // always reset to DEFAULT do I want this??

        logIt("ndxCur(" +  ndxCur + ") "+ txt.slice(0, 10));
        // codeOfInterest
        forEachElement(verses, ndxCur);

        // now use keys to continue reading
        // var y = (x == 2 ? "yes" : "no");
        $(document).keypress( function( event ) {
            var ky = event.keyCode
                , max = verses.length - ndxDELTA - 1
                ;
            if (ky == 113 || ky == 56)  { // 113 & 91 'Q' UP, lower ndx
                ndxCUR = (ndxCUR > 0 ? ndxCUR - 1 : ndxCUR);
                forEachElement(verses, ndxCUR);
            } else if (ky == 122 || ky == 50) { //  122 & 90  'Z' DOWN higher ndx
                ndxCUR = (ndxCUR < max ? ndxCUR + 1 : ndxCUR);
                forEachElement(verses, ndxCUR);
            }
            logIt("KEYPRESS: " + event.keyCode
                + "  ndxCUR:" + ndxCUR + "/max:" + max);
        })
    })
}

var main;
main = function () {
    setAllVerses();
    //getVerse();
    //forEachElement($('p'), 5, 8);
    //removeBegCurrent();
    //seeKey();
    //click_a_verse();
};

$(document).ready(main);

