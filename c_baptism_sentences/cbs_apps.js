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

function logIt( text ) {
    $(".console").html(text)
}
function roundIt(num, dPt){
        if(dPt === undefined) {
            dPt = 1;
        }
        var f = Math.pow(10, dPt);
        return parseFloat(Math.round(num * f ) / f )
    }

function p2Span() {

}
/**
 * ALL 'span' > 'p'
 * @param str
 * @return a new string}
 */
function span2p(str) {
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
        var z,
            txt = '',
            y = $(this);
        if (isBefore()) {
            y.attr('class', 'old');
            z = y.attr('class');
            txt += "before";
        }
        if (isBetween()) {
            y.attr('class', 'now');
            z = y.attr('class');
            txt += "between";
        }
        if (isAfter()) {
            y.attr('class', 'new');
            z = y.attr('class');
            txt += "after";
        }
        txt += " [" + ndx+ "]  z:" + z
            + ", sT:" + roundIt(y.position().top)
            + ", o:" + roundIt(y.offset().top);
        console.log(txt );

        function isBefore() {
            return ndx < ndxBeg
        }
        function isAfter() {
            return ndx > ndxEnd
        }
        function isBetween() {
            return ndx >= ndxBeg && ndx <= ndxEnd
        }
        function isOutside() {
            return ndx < ndxBeg ||ndx
                > ndxEnd
        }
    });
}

/**
 * CHANGES style, and soon Position, etc for Verse tags.
 */
function setVerses () {
    var nxtBeg, ndxBeg, ap,
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

