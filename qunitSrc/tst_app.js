
QUnit.module("tst_index_tests.html");
QUnit.test("title.slice(0,5)", function (assert) {
    var cut = $("title").text();
    assert.equal(cut.slice(0, 5), "file:", " Expect first 5 characters of gT_index.html file calling this ...tests.js");
});

QUnit.module("in tst_index");
QUnit.test( "see css old modified by css", function( assert ) {
    var $curs = $(".cur");
    assert.equal($curs.length, 2);
    assert.equal($curs.html().slice(0,5), 'first', "EXP 1st para first word.")
});
QUnit.test( "modify css old modified by css", function( assert ) {
    var $curs = $(".cur");
    var $lst = $("p.cur:last");

    var nwColor = $lst.attr( 'id', 'toRed');  // does set color but don't see it in a test.
    //location.reload();
    assert.equal($lst.html().slice(0,5), 'Secon', "EXP: the last cur elem");
});

