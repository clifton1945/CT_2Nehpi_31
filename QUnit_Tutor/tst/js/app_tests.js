QUnit.module("Scrolling");

QUnit.test("Scroll", function ( assert ) {
    $("#outer", this.fixture).scrollTop(200);
    //$("#outer", this.fixture).trigger("scroll");
    // PROBLEM since I can't see the html I don't know it it scrolled.
    assert.equal($("#outer", this.fixture).scrollTop(), 200, "exp it at 200");
    $("#outer", this.fixture).scrollTop(2200);
    assert.ok($("#outer", this.fixture).scrollTop() >= 249.333, "exp beyond 200 but don't know why it's 249+");
});

QUnit.test( "setup:", function( assert) {
    assert.expect(4);
    assert.equal(this.fixture.height(), 1000, "height set in qunit.css");
    assert.equal($("#outer", this.fixture).height(), 200, "exp height 200 set in style");
    assert.equal($("#inner", this.fixture).height(), 400, "exp height 400 set in style");
    assert.equal($("div", this.fixture).length, 2, "2 divs: inner and outer.");

});

QUnit.module("Fixture with extra append", {
    //beforeEach ONLY WOKS until next module.
    beforeEach: function() {
        this.str = $("#qunit-fixture");
        //this.outer = $("#outer");
    }
});
QUnit.test( "append ", function( assert ) {
    var fixture = $( "#qunit-fixture" );
    fixture.append( "<div>hello!</div>" );
    assert.equal( $( "div", fixture ).length, 3, "2 coded divs, one more added successfully!" );
});
