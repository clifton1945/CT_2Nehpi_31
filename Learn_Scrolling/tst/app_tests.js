/**
 * Created by CLIF on 7/13/2015.
 */

QUnit.config.scrolltop = false;
QUnit.module("append inner div", {
    //beforeEach ONLY WOKS until next module.
    beforeEach: function() {
        this.fixture = $("#qunit-fixture");
        this.defaultHeight = this.fixture.height();
        this.defaultScrollTop = this.fixture.scrollTop();
    }, afterEach: function() {
        this.fixture.height( this.defaultHeight);
        this.fixture.scrollTop( this.defaultScrollTop);
    }
});
QUnit.test( "append div inner:", function( assert) {
    jQuery('<div>', {
        id: 'inner',
        title: "pseudoText",
        height: 900,
        overflow: "scroll",
        text: "DEFAULT TEXT"
    }).appendTo("#qunit-fixture");
    var nr = $('#inner');
    assert.equal(nr.height(), 900, "height set in JQuery('viv'...");
    assert.equal(nr.text(), "DEFAULT TEXT", "default text");
    assert.equal(nr.scrollTop(), 0, "no scroll yet");
});

QUnit.test( "scroll div inner:", function( assert) {
    jQuery('<div/>', {
        id: 'inner',
        title: "pseudoText",
        height: 900,
        overflow: "scroll",
        scrollTop: 200,
        text: "DEFAULT TEXT"
    }).appendTo("#qunit-fixture");

    var nr = $('#inner');
    assert.equal(nr.scrollTop(), 400, "after scroll")
});
//This is an example of Testing User Actions
function KeyLogger( target ) {
    this.target = target;
    this.log = [];

    var that = this;
    this.target.off( "keydown" ).on( "keydown", function( event ) {
        that.log.push( event.keyCode );
    });
}

QUnit.test( "EXAMPLE: keylogger api behavior", function( assert ) {
    var doc = $( document ),
        keys = new KeyLogger( doc );

    // Trigger the key event
    doc.trigger( $.Event( "keydown", { keyCode: 9 } ) );

    // Verify expected behavior
    assert.deepEqual( keys.log, [ 9 ], "correct key was logged" );
});


