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
QUnit.test("wrap pararaphs with a <div>", function (assert) {
    // try  selector.wrapAll(wrapping element) wraps the selector with wrapping element.
    // look out selector.unwrap() unwraps EACH element's parent.
    var $p = $("p"), $23 = $("p#2, p#3")
        ;
    $23.wrapAll("<div class='new'></div>");
    assert.equal($p.length, 7, "EXP to see all of them.");
    assert.equal($("div.new").length, 1, 'EXP one div.');
    assert.equal($("div.new p").length, 2, 'EXP two <p> in the div.new');
    $23.unwrap();
    assert.equal($p.length, 7, "EXP to see all of them.");
    assert.equal($("div.new").length, 0, 'EXP no div.new.');
    assert.equal($("div.new p").length, 0, 'EXP no <p> in a div.new');
    $("p#3, p#4, p#5, p#6").wrapAll("<div class='new'></div>");
    assert.equal($p.length, 7, "EXP to see all of them.");
    assert.equal($("div.new").length, 1, 'EXP one div.');
    assert.equal($("div.new p").length, 4, 'EXP two <p> in the div.new');
    $("p#3, p#4").unwrap();
    $("p#3, p#4").wrapAll("<div class='cur'></div>");
    $("p#5, p#6").wrapAll("<div class='new'></div>");
    assert.equal($p.length, 7, "EXP to see all of them.");
    assert.equal($("div.cur").length, 1, 'EXP 34 one div.cur');
    assert.equal($("div.cur p").length, 2, 'EXP 34 two <p> in the div cur');
    assert.equal($("div.new").length, 1, 'EXP 56 one div.new');
    assert.equal($("div.new p").length, 2, 'EXP 56 two <p> in the div new');


});


