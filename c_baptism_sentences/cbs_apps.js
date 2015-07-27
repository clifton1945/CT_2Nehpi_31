
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
function readingKeyPress( event, verses, ndxCur, ndxDelta ) {
    var ky = event.keyCode
        , max = verses.length - ndxDelta - 1
        ;
    if (ky == 113 || ky == 56) { // 113 & 91 'Q' UP, lower ndx
        ndxCur = (ndxCur > 0 ? ndxCur - 1 : ndxCur);  // set low limit.
        forEachElement(verses, ndxCur, NDXDELTA);
    } else if (ky == 122 || ky == 50) { //  122 & 90  'Z' DOWN higher ndx
        ndxCur = (ndxCur < max ? ndxCur + 1 : ndxCur);  // set hi limit.
        forEachElement(verses, ndxCur, NDXDELTA);
    }
    // coding helper
    logIt("KEYPRESS: " + event.keyCode
        + "  ndxCur:" + ndxCur + "/max:" + max);
}

    function setWordOfInterestId(collection, re) {
    var
        arr
        ;
    // form: str.match(regex) returns an array.
    re = /woi/gi;
    arr = collection.replace(re, "<span id='woi'>woi</span>");
    logIt(arr);

}
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

/**
 * MODIFIES a verse's style, tags, etc f(index
 * CLASSIFIES a verse as being 'old'==read, 'cur'==CURrently reading, 'new'==NOT read.
 * @param collection of verses.
 * @param ndx_current: if passed parameter, global ndxCUR is updated; if not global is used.
 * @param delta: if passed parameter global ndxDelta is updated; if not global is used.
 */
function forEachElement(collection, ndx_current, delta) {
    var ndxNew = ndx_current + delta
        ;
    // CodeOI
    $.each(collection, function (ndx) {
        setReadingClass($(this), ndx, ndx_current, ndxNew);
    });
}
/**
 * MODIFIES All Verse's Reading style, Position, etc as f(position index, tags).
 */
function setAllVerses () {
    var verses = $('.verses p')
        , ndxCur, ndxDelta = NDXDELTA
        ;  // expect all verses are <p>.
    verses.click(function () {
        var self = $(this)
            ,txt   = self.text()
            ;
        // these are GLOBALS: notice the caps.
        ndxCur  = self.index();
        logIt("ndxCur[" +  ndxCur + "] "+ txt.slice(0, 10));
        // codeOfInterest
        forEachElement(verses, ndxCur, ndxDelta);

        /**
         * reading verses by keyPress.
         *   this controls over and under incrementing the verses.
         *     NOTE: this is an inner function so ndxCur works.
         */
        $(document).keypress( readingKeyPress( event, verses, ndxCur, ndxDelta ));
    })
}

var main;
main = function () {
    setAllVerses();
};

$(document).ready(main);

