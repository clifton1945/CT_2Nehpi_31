/**
 * Created by CLIF on 7/13/2015.
 */

QUnit.test( "setup:", function( assert) {
    assert.equal($("#qunit-fixture").height(), 1000, "height set in qunit.css");
    //assert.equal($("#outer", this.fixture).height(), 200, "exp height 200 set in style");
});
QUnit.test( "see if I can see myLog", function( assert ){
    // this uses both <script src= targets: the tst/ one AND the src/ code.
    expect(0);
    var log = MyLog("HEY");  // yes, I can see this is the console.
});
