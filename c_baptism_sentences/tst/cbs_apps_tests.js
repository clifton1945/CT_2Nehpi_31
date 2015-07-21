QUnit.module("cbs_apps roundIt");
QUnit.test('round 1.3 places', function( assert ){
    var ret = roundIt(1.234444, 2);
    assert.equal(ret, 1.23, "exp 3 places.")
});
QUnit.test('round 3.3 places', function( assert ){
    var ret = roundIt(321.234444, 3);
    assert.equal(ret, 321.234, "exp 3 places.")
});
QUnit.test('round 3.3 rounded up', function( assert ){
    var ret = roundIt(321.2355, 3);
    assert.equal(ret, 321.236, "exp 3 places.")
});

QUnit.module("p2span_span2p", {
    beforeEach: function() {
        this.str1 = "one <p> fghjkl; </p> wertyuiop";
        this.str2 = "two <span> wertyuiop </span> fghjkl";
    }
});
QUnit.test("p2span_regex", function ( assert ) {
    var ret,
        myregexp = /<p>/img,
        nustr;
    nustr = this.str1.replace(myregexp, function(match) {
        return "<span>";
    });
    assert.equal(nustr.slice(4,10), "<span>", "EXP: regex obj to work.")

});
QUnit.test("p2span_js", function ( assert ) {
    var ret
        ;
    ret = this.str1.replace("<p>", "<span>");
    assert.equal(ret.slice(4,10), "<span>", "EXP: js replace is simpler")

});
QUnit.test("/p2/span_js", function ( assert ) {
    var ret = this.str1.replace("</p>", "</span>");
    assert.equal(ret.slice(16,23), "</span>", "EXP: js replace is simpler")
});

QUnit.test("<span>2<p>", function ( assert ) {
    var re = /span/ig// NOTE use of regex verses a straight sting [ which works in this case.
        , ret = this.str2.replace(re, "<p>");
    assert.equal(ret.slice(4, 7), "<p>", "EXP: <p> => <span>")
});

//
//QUnit.module("hello");
//    function saysHi(name) {
//        return "Hi, " + name;
//    }
//    QUnit.test('saysHi()', function( assert ) {
//        assert.equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")
//    });
