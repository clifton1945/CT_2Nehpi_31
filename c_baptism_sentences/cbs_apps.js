
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
// CThought functions
//

/**
 * Binds events AND sets some
 * @constructor
 */
function bindHandlers() {
    var verses = $('.verses p')
        , ndxCur = 0
        , ndxDelta = 2
        ;

    verses.on({
        click: function () {
            var  txt   = $(this).text()
                ;
            ndxCur = $(this).index();
            logIt(".verses.on click: ndxCur[" +  ndxCur + "] "+ txt.slice(0, 10));
            forEachElement(verses, ndxCur, ndxDelta);
        }
    });
    $(document).on({
        keypress: function (e) {
            ndxCur = keypressSetNdxCur(e, verses, ndxCur, ndxDelta);
            forEachElement(verses, ndxCur, ndxDelta);
    }
});
}

function keypressSetNdxCur( event, verses, ndxCur, ndxDelta ) {
    var ky = event.keyCode
        , max = verses.length - ndxDelta - 1
        ;
    if (ky == 113 || ky == 56) { // 113 & 91 'Q' UP, lower ndx
        ndxCur = (ndxCur > 0 ? ndxCur - 1 : ndxCur);  // set low limit.
        forEachElement(verses, ndxCur, ndxDelta);
    } else if (ky == 122 || ky == 50) { //  122 & 90  'Z' DOWN higher ndx
        ndxCur = (ndxCur < max ? ndxCur + 1 : ndxCur);  // set hi limit.
        forEachElement(verses, ndxCur, ndxDelta);
    }
    // coding helper
    logIt("keypressSetNdxCur(): " + ky
        + "  ndxCur:" + ndxCur + "/max:" + max);
    return ndxCur
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
 * @param ndxDelta
 */
function setReadingClass(verseThis, ndxThis, ndxCur, ndxDelta ) {
    var ndxNew = ndxCur + ndxDelta;
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
    //logVerseReadingClassAttribute(verseThis, ndxThis);

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
 * @param ndxCur: if passed parameter, global ndxCUR is updated; if not global is used.
 * @param ndxDelta: if passed parameter global ndxDelta is updated; if not global is used.
 */
function forEachElement(collection, ndxCur, ndxDelta) {
    // CodeOI
    $.each(collection, function (ndx) {
        var $this = $(this);
        setReadingClass($this, ndx, ndxCur, ndxDelta);
    });
}
/**
 * MODIFIES All Verse's Reading style, Position, etc as f(position index, tags).
 */
function setAllVerses () {

}

var main;
main = function () {
    var verses = []
        , ndxCur = 0
        , ndxDelta = 2
    ;  // these are effectively gloabal.
    bindHandlers();
    //setAllVerses();
};

$(document).ready(main);

