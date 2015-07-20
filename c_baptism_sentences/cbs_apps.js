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

    function setNow () {
        var ndx, ndxBeg, ap;
        ap = $('body p');
        ap.click(function () {
            var self   = $(this),
            index  = self.index(),
            text   = self.text();

            ndx = $(this).index();  // this report the n element in the document
            //logIt("ndx(" +  ndx + ") "+ $(this).text().slice(0, 10));
            logIt("ndx(" +  index + ") "+ text.slice(0, 10));
            var delta = 3;
            forEachElement(self, index, ndx + delta);
            $.noop();
        })
    }

    function getVerse() {
        $('p').click(function () {
            var ret;
            ret = $(this).index();
            logIt("ndx:" + ret);
            return ret
        })
    }

    function forEachElement( collection, ndxBeg, ndxEnd ) {
    $.each(collection, function (ndx, x) {
        var i = ndx;
        var z;
        var txt = ';';
        //var s = this.outerText.slice(0, 8);
        var y = $(this);
        if (isBefore( i )) {
            $(this).attr('class', 'old');
            z = $(this).attr('class');
            txt += "before";
        }
        if (isBetween( i )) {
            $(this).attr('class', 'now');
            z = $(this).attr('class');
            txt += "between";
        }
        if (isAfter(i)) {

            $(this).attr('class', 'new');
            z = $(this).attr('class');
            txt += "after";
        }
        txt += " [" + i + "]  z:" + z
        + ", sT:" + roundIt(y.position().top)
        + ", o:" + roundIt(y.offset().top);
        console.log(txt );
    });
    function alterOld( that ) {
       that.attr('class', 'old');
    }
    function alterNow( that ) {
        that.attr('class', 'now');
    }
    function alterNew( that ) {
        that.attr('class', 'new');
    }

    function isBefore( i ) {
        return i < ndxBeg
    }
    function isAfter( i ) {
        return i > ndxEnd
    }
    function isBetween( i ) {
        return i >= ndxBeg && i <= ndxEnd
    }
    function isOutside( i ) {
        return i < ndxBeg || i > ndxEnd
    }
}

    function click_a_verse () {
        $('p').click(function () {
            $(this).toggle(1000, function () {
                //$(this).load('test_page_1.html');
                //alert(" toggled() a verse. BUT seeable after this alert.");
                $(this).addClass('expand');
                $(this).toggle(1000);
            })
        });
        $('button').click( function() {
            $('#1').load('test_page_1.html');
        })
    }

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


var main;
main = function () {
    setNow();
    //getVerse();
    //forEachElement($('p'), 5, 8);
    //removeBegCurrent();
    //seeKey();
    //click_a_verse();
};

$(document).ready(main);

