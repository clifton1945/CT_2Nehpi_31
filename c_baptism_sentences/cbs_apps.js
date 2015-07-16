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

    function removeBegCurrent () {
        // this requires finding the end of the <div id='beg'
        //  which proceeds the beginning of <div id='cur'
        //
        var txt = '';
        var doc = document.body.innerHTML; // one way.
        // Other ways: $("html").html();
        // document.documentElement.outerHTML;
        // $('html')[0].outerHTML;
        var y = $("#cur");  // y: Array[1]
        var x = y[0];  // x: div#cur
        var z = (/<div\sid="cur">/.test(doc));
        if (/<div\sid="cur">/.test(doc)) {
            txt = '// Successful match';
        } else {
            txt = '// Match attempt failed';
        }
        console.log(txt);
        $.noop();
    }

    function forEachElement( collection, ndxBeg, ndxEnd ) {
        $.each(collection, function (i, x) {
            if (i >= ndxBeg && i <= ndxEnd) {
                console.log("x[" + i + "]:" + x);
            }
        });
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

var main;
main = function () {
    forEachElement($('p'), 6, 8);
    //removeBegCurrent();
    //seeKey();
    //click_a_verse();
};

$(document).ready(main);

