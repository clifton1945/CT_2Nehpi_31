
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
 * @type {number}
 */

// GLOBALS
var INDX_DELTA = 2
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
function setProgressiveOpacity(ndx, ndxCur, ndxDelta, collection) {
    var maxLng = collection.length
        , opMin = 20
        , opMax = 75
        , r
        ;
    r = ndx / maxLng;
    return roundIt(r)
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
 * Binds events AND sets some
 * @constructor
 */
function bindHandlers() {
    //noinspection JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols,JSDeprecatedSymbols
    var ptags = $('p')
        , ndxCur = 0
        , ndxDelta = INDX_DELTA
        ;

    ptags.on({
        click: function () {
            var  txt   = $(this).text()
                ;
            ndxCur = $(this).index();
            logIt(".ptags.on click: ndxCur[" +  ndxCur + "] "+ txt.slice(0, 10));
            read(ptags, ndxCur, ndxDelta);
        }
    });
    $('body').on({
        keypress: function (e) {
            ndxCur = keypressSetNdxCur(e, ptags, ndxCur, ndxDelta);
            read(ptags, ndxCur, ndxDelta);
    }
});
}

function keypressSetNdxCur( event, ptags, ndxCur, ndxDelta ) {
    var ky = event.keyCode
        , max = ptags.length - ndxDelta - 1
        ;
    if (ky == 113 || ky == 56) { // 113 & 91 'Q' UP, lower ndx
        ndxCur = (ndxCur > 0 ? ndxCur - 1 : ndxCur);  // set top limit.
        forEachElement(ptags, ndxCur, ndxDelta);
    } else if (ky == 122 || ky == 50) { //  122 & 90  'Z' DOWN higher ndx
        ndxCur = (ndxCur < max ? ndxCur + 1 : ndxCur);  // set bottom limit.
        forEachElement(ptags, ndxCur, ndxDelta);
    }
    // coding helper
    logIt("keypressSetNdxCur(): " + ky
        + "  ndxCur:" + ndxCur + "/max:" + max);
    return ndxCur
}

/**
 * class:
 * @param currentNdx: the current index of a collection. e.g. a verse.
 * @param collection: typically a jQuery selection of <p> verses.
 * @constructor
 */
function OneVerse(currentNdx, collection) {
    this.const = {
        CUR_DLTA: 2,
        MIN_NDX: 0
    };
    // local GLOLBALS
    this.curDlta = this.const.CUR_DLTA;
    this.validMaxNdx = function () {
        // NOTE: an array.length is 1 more than actual length: 6.
        // NOTE: BUT ndx + dltaCur:2 points one beyond ndx
        // SO says pt to 6 - 1 as the last useable index
        // THEN subtract just 1 more place to accomodate the dltaCur
        // 6 - 1 - dltaCur + 1 === len - dlta
        return collection.length - this.curDlta
    };
    this.maxNdx = this.validMaxNdx();  // set here for local use
    // sub objects defined
    this.min = {};
    this.old = {};
    this.cur = {};
    this.new = {};  //TODO  HEY DO NOT usE 'new'
    this.max = {};
    // methods
    this.validMinNdx = function () {
        return this.const.MIN_NDX;
    };
    this.validOldNdx = function () {
        return this.const.MIN_NDX;
    };
    this.validCurNdx = function () {
        currentNdx = (currentNdx >= 0 ) ? currentNdx : 0;
        currentNdx = (currentNdx <= this.maxNdx ) ? currentNdx : this.maxNdx;
        return currentNdx
    };
    this.validNewNdx = function () {
        var ndxNew = currentNdx + this.curDlta
        // NOTE: e.g. 3 + dlta==2 will have cur:3,4; new:5
            ;
        return ( ndxNew < this.maxNdx) ? ndxNew : this.maxNdx
    };
    // delta: count of index's BETWEEN  currentNdx and endpoints.
    this.validOldDlta = function () {
        var r = currentNdx - 1 - this.min.ndx;
        return (r > 0 ? r : 0)
    };
    this.validNewDlta = function () {
        var dlt = this.maxNdx - currentNdx + 1;
        return (dlt > 0) ? dlt : 0
    };
    this.cur.dlta = self.curDlta;
    // config some definitions needed before following calcs.
    this.min.ndx = this.validMinNdx();
    this.max.ndx = this.maxNdx;  // already defined
    // now the rest
    this.old.ndx = this.validOldNdx();
    this.cur.ndx = this.validCurNdx(this.max.ndx);  // already assigned
    this.new.ndx = this.validNewNdx(this.cur.dlta, this.max.ndx);

    this.old.dlta = this.validOldDlta();
    this.new.dlta = this.validNewDlta();
    //
    this.properties = {};

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
 * @param collection of ptags.
 * @param ndxCur: if passed parameter, global ndxCUR is updated; if not global is used.
 * @param ndxDelta: if passed parameter global ndxDelta is updated; if not global is used.
 */
function forEachElement(collection, ndxCur, ndxDelta) {
    // CodeOI
    $.each(collection, function (ndx) {
        setReadingClass($(this), ndx, ndxCur, ndxDelta);
    });
}

/**
 * MODIFIES All Verse's Reading style, Position, etc as f(position index, tags).
 * @param collection: of paragraphs.
 * @param ndxCur: the beginning of current verses of interest.
 * @param ndxDelta: how many verses of interesst.
 */
function read (collection, ndxCur, ndxDelta) {
    forEachElement(collection, ndxCur, ndxDelta);
}

var main;
main = function () {
    new bindHandlers();
};

$(document).ready(main);

