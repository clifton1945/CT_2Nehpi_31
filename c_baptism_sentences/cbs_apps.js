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

function KeyLogger( target ) {
    this.target = target;
    this.log = [];
    var that = this;
    this.target.off( "keydown" ).on( "keydown", function( event ) {
        that.log.push( event.keyCode );
    });
}
function seeKey() {
        $(document).on("keydown", function ( event ) {
            console.log("keydown[" + event.keyCode + "]");
        })
    }

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

/**
 * all p to span
 * @returns {XML|void|string}
 * @param str
 */
function p2span( str ) {
    // how handle /p
    return str.replace(/<(\/?)p>/img, "<$1span>");
}
/**
 * ALL 'span' to 'p'
 * @param str
 * @param str
 */
function span2p( str ) {
    return str.replace(/span/ig, "p");
}

function aVerse(verseThis, ndxThis, ndxBeg, ndxAft ) {
    var classType
        , txt = ''
        ;

    if (isBefore()) {
        verseThis.attr('class', 'old');
        classType = verseThis.attr('class');
        txt += "before";
    }
    if (isBetween()) {
        verseThis.attr('class', 'cur');
        classType = verseThis.attr('class');
        txt += "current";
    }
    if (isAfter()) {
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
    function isBefore() {
        return ndxThis < ndxBeg
    }

    function isBetween() {
        return ndxThis >= ndxBeg && ndxThis < ndxAft
    }

    function isAfter() {
        return ndxThis >= ndxAft
    }
}

/**
 * MODIFIES each verse style, tags, etc as a function of
 * a selected set of verses being 'old'==read, 'now'==CURrently reading, ''new'==NOT read.
 * @param collection
 * @param ndxBeg
 * @param ndxAft
 */
function forEachElement(collection, ndxBeg, ndxAft) {
    $.each(collection, function (ndx) {
        aVerse($(this), ndx, ndxBeg, ndxAft);
    });
}

/**
 * CHANGES style, and soon Position, etc for Verse tags.
 */
function setVerses () {
    var ndxBeg, ap, txt
        ;
    ap = $('.verses p, br');
    ap.click(function () {
        var self = $(this)
            ,txt   = self.text()
            ,ndxBeg  = self.index()
            ,ndxDelta = 2
            ;
        logIt("ndxBeg(" +  ndxBeg + ") "+ txt.slice(0, 10));
        forEachElement(ap, ndxBeg, ndxBeg + ndxDelta);
        $.noop();
    })
}

var main;
main = function () {
    setVerses();
    //getVerse();
    //forEachElement($('p'), 5, 8);
    //removeBegCurrent();
    //seeKey();
    //click_a_verse();
};

$(document).ready(main);

