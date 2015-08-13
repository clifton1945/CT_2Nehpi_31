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
//, $p1234 = $p12.add($p34)  // this did not work
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
    $old.html($pc12);
    $cur.html($pc34);
    $new.html($pc56);
    //assert.equal($old.length, 1, 'EXP: still a div.old w/ p1234');
    //assert.equal($("div.old p").length, 4, 'EXP: now div.old has p1234');

    //$p34.unwrap();
    //assert.equal($p.length, 7, "EXP:12 + to see all of them.");
    //assert.equal($new.length, 0, 'EXP:34 no div.new.');
    //assert.equal($("div.new p").length, 0, 'EXP:34 no <p> in a div.new');
    //$p56.wrapAll("<div class='new'></div>");
    //assert.equal($p.length, 7, "EXP:12,56 + to see all of them.");
    //assert.equal($new.length, 1, 'EXP:56 one div.');
    //assert.equal($("div.new p, div.old p").length, 4, 'EXP:12 56 two <p> in the div.new');
    //$p56.wrapAll("<div class='new'></div>");
    //assert.equal($new.length, 2, 'EXP leftover 34 AND 56 TWO div.cur. MUST unwrap() the leftovers.');
    //$p34.wrapAll("<div class='cur'></div>");
    // LOOKOUT: NEVER unwrapped 34 in a div.new.
    // 34 is now correctly re-wrapped because wrapping 'corrects' the selector elements
    // BUT the div.new
    //assert.equal($p.length, 7, "EXP:123456 to see all of them.");
    //assert.equal($old.length, 1, 'EXP12: the rewrapped 34 in one div.cur');
    //assert.equal($cur.length, 1, 'EXP:34 the rewrapped 34 in one div.cur');
    //assert.equal($new.length, 2, 'EXP:34 & 56 BOTH HAVE div.new BUT ');
    //assert.equal($("div.old p").length, 2, 'EXP:12 two <p> in the div old 34 are wrapped as cur');
    //assert.equal($("div.cur p").length, 2, 'EXP 34 two <p> in the div cur');
    //assert.equal($("div.new p").length, 2, 'EXP 56 two <p> in the div new');
    $p34.unwrap();  // FIX:
    //assert.equal($new.length, 1, 'EXP:34 the rewrapped 34 in one div.cur');
});


