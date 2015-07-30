
QUnit.module("qT_index_tests.html");
    QUnit.test( "title.slice(0,5)", function( assert ) {
    var cut = $("title").text();
    assert.equal( cut.slice(0, 5), "file:", " Expect first 5 characters of gT_index.html file calling this ...tests.js" );
});

QUnit.module("testing qT_index.html ");
QUnit.test('I can see qT_src_app', function( assert ) {
    assert.equal(roundIt(123.490, 0), 123, "")
});
QUnit.test('force a verse mouse click.', function( assert ) {
    var verses = $(".verse p");
    verses.trigger('click');
    assert.ok(false);
});
