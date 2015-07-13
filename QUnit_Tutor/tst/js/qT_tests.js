
QUnit.module("qT_index.html");
    QUnit.test( "title.slice(0,5)", function( assert ) {
    var cut = $("title").text();
    assert.equal( cut.slice(0, 5), "FILE:", " Expect first 5 characters of html file calling this ...tests.js" );
});

QUnit.module("hello");
    function saysHi(name) {
        return "Hi, " + name;
    }
    QUnit.test('saysHi()', function( assert ) {
        assert.equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")
    });
