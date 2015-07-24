// a <div> way to move 'old', 'cur', 'new' focus area.
//
//      note: for this begin 'old' is fixed at beginning.
//      note: for this end 'new' is fixed at ending.
// REMOVE old focus area:
//      remove "</div><div id='cur'>"
//      remove "</div><div id='new'>"
// somehow determine a new focus area:
//      set new location
// SET new 'cur' begin:
//      insert | append "</div><div id='cur'>"
// SET end 'cur' end;
//      insert | append "</div><div id='new'>"

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
var NDXDELTA = 3
    , ndxDELTA = NDXDELTA
    , ndxCUR = 0
    ;

//UTILITIES
function logIt( txt ) {
    $(".console").text(txt)
}
function roundIt(num, dPt){
    if(dPt === undefined) {
        dPt = 1;
    }
    var f = Math.pow(10, dPt);
    return parseFloat(Math.round(num * f ) / f )
}

// CThought functions
function aVerse(verseThis, ndxThis, ndxCur, ndxNew ) {
    var classType
        , txt = ''
        ;

    if (isOld()) {
        verseThis.attr('class', 'old');
        classType = verseThis.attr('class');
        txt += "before";
    }
    if (isCurrent()) {
        verseThis.attr('class', 'cur');
        classType = verseThis.attr('class');
        txt += "current";
    }
    if (isNew()) {
        verseThis.attr('class', 'new');
        classType = verseThis.attr('class');
        txt += "after";
    }
    // these properties are just for debugging
    txt += " [" + ndxThis + "]  classType:" + classType
        + ", sT:" + roundIt(verseThis.position().top)
        + ", o:" + roundIt(verseThis.offset().top);
    console.log(txt);

    /**
     *
     * @returns {boolean}
     */
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
 * @param ndx_current
 * @param delta
 */
function forEachElement(collection, ndx_current, delta) {
    ndxCUR = (ndx_current ? ndx_current : ndxCUR);
    ndxDELTA = (delta  ? delta : ndxDELTA );  // default
    var ndxNew = ndxCUR + ndxDELTA;
    $.each(collection, function (ndx) {
        aVerse($(this), ndx, ndxCUR, ndxNew);
    });
}
/**
 * MODIFIES All Verse's style, Position, etc as f(position index, tags).
 */
function setAllVerses () {
    var verses
        ;
    verses = $('.verses p');  // expect all verses are <p>.
    verses.click(function () {
        var self = $(this)
            ,txt   = self.text()
            ;
            ndxCUR  = self.index();
            ndxDELTA = NDXDELTA;

        // probably make these a function
        logIt("ndxCUR(" +  ndxCUR + ") "+ txt.slice(0, 10));
        forEachElement(verses, ndxCUR);

        // now use keys to continue reading
        // var y = (x == 2 ? "yes" : "no");
        $(document).keypress( function( event ) {
            var ky = event.keyCode
                , max = verses.length - ndxDELTA - 1
                ;
            if (ky == 113) { // 'Q' UP, lower ndx
                ndxCUR = (ndxCUR > 0 ? ndxCUR - 1 : ndxCUR);
                forEachElement(verses, ndxCUR);
            } else if (ky == 122) { // 'Z' DOWN higher ndx
                ndxCUR = (ndxCUR < max ? ndxCUR + 1 : ndxCUR);
                forEachElement(verses, ndxCUR);
            }
            logIt("you pressed:" + event.keyCode
                + "  now ndxCUR:" + ndxCUR + " max:" + max);

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

