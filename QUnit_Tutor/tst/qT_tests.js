
QUnit.module("qT_index_tests.html");
    QUnit.test( "title.slice(0,5)", function( assert ) {
    var cut = $("title").text();
    assert.equal( cut.slice(0, 5), "FILE:", " Expect first 5 characters of gT_indedx.html file calling this ...tests.js" );
});

QUnit.module("STYLE ");
QUnit.test('I can see qT_src_app', function( assert ) {
    assert.equal(roundIt(123.490, 0), 123, "")
});
QUnit.test('split click_a_verse to binder / function', function( assert ) {
    assert.ok(false);
});
