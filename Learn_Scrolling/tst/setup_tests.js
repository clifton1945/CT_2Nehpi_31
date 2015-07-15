/**
 * Created by CLIF on 7/13/2015.
 */
QUnit.module("setup", {
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
QUnit.test( "reset fixture height", function( assert ){
    this.fixture.height(251);
    assert.equal(this.fixture.height(), 251, "height set here");
});
QUnit.test( "confirm no side effect.", function( assert) {
    assert.equal(this.fixture.height(), 1000, "DEFAULT height reset from unit.css");
});
QUnit.test( "see inner div ", function( assert) {
   assert.equal($('#inner').height(), 555, "");
});
