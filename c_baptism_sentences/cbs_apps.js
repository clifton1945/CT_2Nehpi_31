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

/**
 * MODIFIES each verse style, tags, etc as a function of
 * 'old' read, 'now' reading, ''new' to read.
 * @param collection
 * @param ndxBeg
 * @param ndxEnd
 */
function forEachElement( collection, ndxBeg, ndxEnd ) {
    $.each(collection, function (ndx) {
        var classType
            , verse = $(this)
            , txt = ''
            ;

        if (isBefore()) {
            verse.attr('class', 'old');
            classType = verse.attr('class');
            txt += "before";
        }
        if (isBetween()) {
            verse.attr('class', 'now');
            classType = verse.attr('class');
            txt += "between";
        }
        if (isAfter()) {
            verse.attr('class', 'new');
            classType = verse.attr('class');
            txt += "after";
        }
        txt += " [" + ndx+ "]  classType:" + classType
            + ", sT:" + roundIt(verse.position().top)
            + ", o:" + roundIt(verse.offset().top);
        console.log(txt );

        /**
         *
         * @returns {boolean}
         */
        function isBefore() {
            return ndx < ndxBeg
        }
        function isBetween() {
            return ndx >= ndxBeg && ndx < ndxEnd
        }
        function isAfter() {
            return ndx >= ndxEnd
        }
    });
}

/**
 * CHANGES style, and soon Position, etc for Verse tags.
 */
function setVerses () {
    var nxtBeg, ap,
        txt;
    ap = $('.verses p');
    ap.click(function () {
        var self = $(this);
        nxtBeg  = self.index();
        txt   = self.text();

        logIt("nxtBeg(" +  nxtBeg + ") "+ txt.slice(0, 10));
        var delta = 2;
        forEachElement(ap, nxtBeg, nxtBeg + delta);
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

