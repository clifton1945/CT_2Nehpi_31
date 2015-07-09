
QUnit.module("2Nep31_2");
QUnit.test( "first p", function( assert ) {
    cut = $('p').text();
    assert.equal( cut.slice(0, 5), "1 And", " Expect first 5 characters" );
});
QUnit.module("hello");
QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Expected 1 == '1'" );
});