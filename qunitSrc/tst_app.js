
QUnit.module("tst_index_tests.html");
QUnit.test("title.slice(0,5)", function (assert) {
    var cut = $("title").text();
    assert.equal(cut.slice(0, 5), "file:", " Expect first 5 characters of gT_index.html file calling this ...tests.js");
});

QUnit.module("in tst_index");
QUnit.test( "see css old modified by css", function( assert ) {
    var $curs = $(".cur");
    assert.equal($curs.length, 1);
    var $p = $(".cur p");
    assert.equal($p.length, 2);
    assert.equal($p.html().slice(0,5), 'first', "EXP 1st para first word.")
});
QUnit.test( "add id to affect css change.", function( assert ) {
    // html5 doesn't like adding style to elements.
    var $lst = $(".cur p:last");
    $lst.attr( 'id', 'toRed');  // does set color but don't see it in a test.
    assert.equal($lst.attr('id'), 'toRed', "EXP: if of 'Second class cur' >> 'toRed'");
});

