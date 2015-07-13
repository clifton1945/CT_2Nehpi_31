/**
 * Created by CLIF on 7/13/2015.
 */
QUnit.module("scrolling", {
    //beforeEach ONLY WOKS until next module.
    beforeEach: function() {
        this.fixture = $("#qunit-fixture");
        this.defaultHeight = this.fixture.height()
    }, afterEach: fub=function() {
        $("#qunit-fixture").height(this.defaultHeight)
    }
});
QUnit.test( "default:", function( assert) {
    assert.equal(this.fixture.height(), 1000, "height set in qunit.css");
});


