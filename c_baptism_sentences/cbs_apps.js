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
 * @deprecated - reatining for when I add key press stuff.
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
/**
 * MODIFIES a verse's style, tags, etc f(index
 * CLASSIFIES a verse as being 'old'==read, 'cur'==CURrently reading, 'new'==NOT read.
 * @param collection of verses.
 * @param ndxCur: first verse to magnify.
 * @param ndxNew: first verse to STOP magnifying.
 */
function forEachElement(collection, ndxCur, ndxNew) {
    $.each(collection, function (ndx) {
        aVerse($(this), ndx, ndxCur, ndxNew);
    });
}
/**
 * MODIFIES All Verse's style, Position, etc as f(position index, tags).
 */
function setAllVerses () {
    var ndxBeg, verses, txt
        ;
    verses = $('.verses p');  // expect all verses are <p>.
    verses.click(function () {
        var self = $(this)
            ,txt   = self.text()
            ,ndxCur  = self.index()
            ,ndxDelta = 2
            ;
        logIt("ndxCur(" +  ndxCur + ") "+ txt.slice(0, 10));
        forEachElement(verses, ndxCur, ndxCur + ndxDelta);
        $.noop();
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

