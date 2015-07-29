// TODO can I load the nephi text from here into the cbs_test_index.html ???
// TODO OR should I just run a test on cbs_apps.js looking into 2Nep....html ???
QUnit.module("cbs_apps roundIt");
QUnit.test('round 1.3 places', function( assert ){
    var ret = roundIt(1.234444, 2);
    assert.equal(ret, 1.23, "exp 3 places.")
});
QUnit.test('round 3.3 places', function( assert ){
    var ret = roundIt(321.234444, 3);
    assert.equal(ret, 321.234, "exp 3 places.")
});
QUnit.test('round 3.3 rounded up', function( assert ){
    var ret = roundIt(321.2355, 3);
    assert.equal(ret, 321.236, "exp 3 places.")
});

QUnit.module("keypress testing");
// first the qunit.cookbook example
QUnit.test( "template: keylogger api behavior", function( assert ) {
    var doc = $( document ),
        keys = new KeyLogger( doc );

    // Trigger the key event
    doc.trigger( $.Event( "keydown", { keyCode: 9 } ) );

    // Verify expected behavior
    assert.deepEqual( keys.log, [ 9 ], "correct key was logged" );
});

QUnit.module("WordsOfInterest", {
    beforeEach: function () {
        this.divTest = "<div>" +
            "<p> a few words then a woi.</p>" +
            "<p> and two more woi, woi and then no more.</p>" +
            "</div>";

    }
});
QUnit.test("find a list of wordsOI", function( assert ){
    var
        re, arr
    ;
    // form: str.match(regex) returns an array.
    re = /woi/gi;
    arr = this.divTest.match(re);
    assert.ok( arr.length == 3, "EXP see three woi's.")
});
QUnit.test("replace all of wordsOI", function( assert ){
    var
        re, arr
    ;
    // form: str.match(regex) returns an array.
    re = /woi/gi;
    arr = this.divTest.replace(re, "<span id='woi'>woi</span>");
    //logIt(arr);
    assert.ok( arr.match(/span/gi).length == 6, "EXP see six spans surrounding woi.")
});
QUnit.test("DOES not WORK; see if css works on hard coded stuff in qunit-fixture works", function( assert ){
    expect(0);
    logIt("qunit-fixture: " + $("#qunit-fixture").html());
});
