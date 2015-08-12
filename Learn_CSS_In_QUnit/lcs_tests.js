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
    assert.equal($('p').length, 7);
    assert.equal($('p').toArray().length, 7);
    var ary = $('p').toArray();
    assert.equal(ary[5].outerHTML.slice(0,15), "<p id=\"6\">6 And"
    , "EXP the last <p>. ");
    assert.equal(ary[6].outerHTML.slice(0,15)
        , '<p id=\"qunit-te', "EXP: qunit adds another <p>");
});
QUnit.test("wrap pararaphs with a <div>", function (assert) {
    // TODO: FIGURE OUT WHAT selector.add(x) adds EACH element of selector
    // look out selector.wrap(x) wraps EACH element of selector
    // look out selector.append(x) append EACH element of selector
    var ary = $("p").toArray();
    assert.expect(2);
    assert.equal(ary[2].innerHTML.slice(0, 8), '3 For my');
    assert.equal(ary[2].outerHTML.slice(0, 8), "<p id=\"3");
});


