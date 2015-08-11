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
    assert.equal(ary.length, 14);
    assert.equal(ary[2].innerHTML.slice(0, 8), '3 For my');
});

