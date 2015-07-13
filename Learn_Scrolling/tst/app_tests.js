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
QUnit.test( "append div inner:", function( assert) {
    jQuery('<div>', {
        id: 'inner',
        title: "pseudoText",
        height: 900,
        overflow: "scroll",
        text: "DEFAULT TEXT"
    }).appendTo("#qunit-fixture");

    assert.equal($('#inner').height(), 900, "height set in qunit.css");
    assert.equal($('#inner').text(), "DEFAULT TEXT", "default text");
});


