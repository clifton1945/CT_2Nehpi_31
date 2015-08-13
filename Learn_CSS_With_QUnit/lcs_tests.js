/**
 * Created by CLIF on 8/8/2015.
 */
QUnit.module("lcs_tests.html");
QUnit.test("title.slice(0,5)", function (assert) {
    var cut = $("title").text();
    assert.equal(cut.slice(0, 5), "How C", " Expect first 5 characters of html file calling this.");
});
QUnit.module("lcs_wrap_n paras with class: cur for now");
QUnit.test("paragraph.slice(1,3)", function (assert) {
    var paras = $("p");
    var cur = paras.slice(1,3);
    assert.expect(2);
    assert.equal(cur.length, 2);
    assert.equal(cur.text().slice(0, 11), '2 Wherefore');
});
QUnit.test("paragraph.as array", function (assert) {
    var ary = $("p").toArray();
    assert.expect(2);
    assert.equal(ary[2].innerHTML.slice(0, 8), '3 For my');
    assert.equal(ary[2].outerHTML.slice(0, 8), "<p id=\"3");
});
QUnit.test("compare lengths.", function (assert) {
    assert.equal($('p').length, 7);
    assert.equal($('p').toArray().length, 7);
});
QUnit.test("QUnit adds an extra <p>: length is 6 not 7 <p>s.", function (assert) {
    var $p = $("p");
    assert.equal($p.length, 7);
    assert.equal($p.toArray().length, 7);
    var ary = $p.toArray();
    assert.equal(ary[5].outerHTML.slice(0,15), "<p id=\"6\">6 And"
    , "EXP the last <p>. ");
    assert.equal(ary[6].outerHTML.slice(0,15)
        , '<p id=\"qunit-te', "EXP: qunit adds another <p>");
});
QUnit.test("<div> wrapping", function (assert) {
    // try  selector.wrapAll(wrapping element) wraps the selector with wrapping element.
    // look out selector.unwrap() unwraps EACH element's parent.
    assert.expect(0)
    var $p = $("p")
        , $12 = $("p#1, p#2")
        , $34 = $("p#3, p#4")
        , $56 = $("p#5, p#6")
        ;
    $12.wrapAll("<div class='old'></div>");

    $34.wrapAll("<div class='new'></div>");
    //assert.equal($p.length, 7, "EXP:1234 + to see all of para.");
    //assert.equal($("div.new").length, 1, 'EXP:34 one div.');
    //assert.equal($("div.new p").length, 2, 'EXP:34 two <p> in the div.new');
    $34.unwrap();
    //assert.equal($p.length, 7, "EXP:12 + to see all of them.");
    //assert.equal($("div.new").length, 0, 'EXP:34 no div.new.');
    //assert.equal($("div.new p").length, 0, 'EXP:34 no <p> in a div.new');
    $56.wrapAll("<div class='new'></div>");
    //assert.equal($p.length, 7, "EXP:12,56 + to see all of them.");
    //assert.equal($("div.new").length, 1, 'EXP:56 one div.');
    //assert.equal($("div.new p, div.old p").length, 4, 'EXP:12 56 two <p> in the div.new');
    $56.wrapAll("<div class='new'></div>");
    //assert.equal($("div.new").length, 2, 'EXP leftover 34 AND 56 TWO div.cur. MUST unwrap() the leftovers.');
    $34.wrapAll("<div class='cur'></div>");
    // LOOKOUT: NEVER unwrapped 34 in a div.new.
    // 34 is now correctly re-wrapped because wrapping 'corrects' the selector elements
    // BUT the div.new
    //assert.equal($p.length, 7, "EXP:123456 to see all of them.");
    //assert.equal($("div.old").length, 1, 'EXP12: the rewrapped 34 in one div.cur');
    //assert.equal($("div.cur").length, 1, 'EXP:34 the rewrapped 34 in one div.cur');
    //assert.equal($("div.new").length, 2, 'EXP:34 & 56 BOTH HAVE div.new BUT ');
    //assert.equal($("div.old p").length, 2, 'EXP:12 two <p> in the div old 34 are wrapped as cur');
    //assert.equal($("div.cur p").length, 2, 'EXP 34 two <p> in the div cur');
    //assert.equal($("div.new p").length, 2, 'EXP 56 two <p> in the div new');

    $34.unwrap();  // FIX:
    //assert.equal($("div.new").length, 1, 'EXP:34 the rewrapped 34 in one div.cur');


});


