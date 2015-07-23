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


QUnit.module("p2span and span2p", {
    beforeEach: function() {
        this.str1 = "<p> </p> ppp p <span>";
        this.str2 = "<span> </span> span </p";
    }
});
QUnit.test("span2p", function ( assert ) {
    var str = this.str2
        , cut = span2p(str);
    logIt(str + ' now:' + cut);
    assert.equal(cut.substr(0,3), "<p>", "EXP: ALL spans:  <span> now <p>");
    assert.equal(cut.substr(4, 4), "</p>", "EXP: ALL spans: </span> now </p>")
});
QUnit.test("p2span", function ( assert ) {
    var str = "<p> </p> ppp p <span>"
        , cut = p2span(str)
        ;
    logIt(str + ' now:' + cut);
    assert.equal(cut.substr(0, 6), "<span>", "EXP: <p> becomes <span>");
    assert.equal(cut.substr(7, 7), "</span>", "EXP: </p> becomes </span>");
});

//
//QUnit.module("hello");
//    function saysHi(name) {
//        return "Hi, " + name;
//    }
//    QUnit.test('saysHi()', function( assert ) {
//        assert.equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")
//    });
