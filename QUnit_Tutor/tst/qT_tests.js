
QUnit.module("qT_index.html");
QUnit.test( "title.slice(0,5)", function( assert ) {
    var cut = $("title").text();
    assert.equal( cut.slice(0, 5), "QUnit", " Expect first 5 characters" );
});
QUnit.module("hello");
    function saysHi(name) {
        return "Hi, " + name;
    }

    QUnit.test('saysHi()', function( assert ) {
        assert.equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")
    });

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Expected 1 == '1'" );
});