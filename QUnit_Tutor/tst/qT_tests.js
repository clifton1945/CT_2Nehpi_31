QUnit.module("qT_index_tests.html");
QUnit.test("title.slice(0,5)", function (assert) {
    var cut = $("title").text();
    assert.equal(cut.slice(0, 5), "file:", " Expect first 5 characters of gT_index.html file calling this ...tests.js");
});

QUnit.module("testing qT_index.html ");
QUnit.test('I can see qT_src_app', function (assert) {
    assert.equal(roundIt(123.490, 0), 123, "")
});
QUnit.test('test a LOCAL GLOBAL.', function (assert) {
    var $verses = $(".verses p")
        , cut = 0  // LOCAL GLOBAL
        ;
    $(".verses p:nth-child(1)").click(function () {
        cut = 12;
    });
    $(".verses p:nth-child(1)").trigger('click');  // TRIGGER that child
    assert.ok(typeof cut === 'number');
    assert.equal(cut, 12, "EXP confirm LOCAL GLOBAL cut is in scope.");

});
QUnit.test('force a verse mouse click.', function (assert) {
    var $verses = $(".verses p")
        , cut = 0  // LOCAL GLOBAL
        ;

    $(".verses p:nth-child(1)").click(function () {
        cut = $(this).text();
    });
    $(".verses p:nth-child(1)").trigger('click');  // HERE IS THE trigger

    assert.expect(2);
    assert.ok(typeof cut === 'object');

});
