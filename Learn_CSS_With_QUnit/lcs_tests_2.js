/**
 * Created by CLIF on 8/13/2015.
 */
var $p = $("p")
    , $old = $("div.old")
    , $cur = $("div.cur")
    , $new = $("div.new")
    , $p12 = $("p#1, p#2")
    , $pc12 = $p12.clone()
    , $p34 = $("p#3, p#4")
    , $pc34 = $p34.clone()
    , $p56 = $("p#5, p#6")
    , $pc56 = $p56.clone()
    , $p1234 = $("p#1, p#2, p#3, p#4")
    , $pc1234 = $p1234.clone()
    ;
QUnit.test("<div> filling", function (assert) {
    // default
    assert.equal($p.length, 6, "EXP:6 paragraphs WHAT HAPPENED TO one quint <p>.");
    assert.equal($old.length, 1, 'EXP:a div.old ');
    assert.equal($cur.length, 1, 'EXP: a div.cur');
    assert.equal($new.length, 1, 'EXP: a div.new');
    $old.html($pc12);   // add  clone $pc1 to div.old
    assert.equal($old.length, 1, 'EXP: still a div.old with p12');
    assert.equal($("div.old p").length, 2, 'EXP: now div.old has paras 12');
    $old.html(null);   // $old.html(null) >> clears old BUT removes p1, 2
    assert.equal($old.length, 1, 'EXP: still a div.old but no paras');
    assert.equal($("div.old p").length, 0, 'EXP: again div.old has NO paras.');
    // ADD old and cur paragraphs
    $old.html($pc1234);
    $cur.html($pc56);
    $new.html();
});


