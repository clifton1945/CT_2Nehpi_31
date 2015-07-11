QUnit.module("Coded Fixture");
QUnit.test( "fixture setup ", function( assert ) {
    var fixture = $("#qunit-fixture");
    assert.equal($("div", fixture).length, 2, "2 coded divs");
    assert.equal($("#outer", fixture).height(), 200, "exp height 200 set in div");
    assert.equal($("#inner", fixture).height(), 400, "exp height 400 set in div");
});

QUnit.module("Fixture with extra append");
QUnit.test( "append ", function( assert ) {
    var fixture = $( "#qunit-fixture" );
    fixture.append( "<div>hello!</div>" );
    assert.equal( $( "div", fixture ).length, 3, "2 coded divs, one more added successfully!" );
});
