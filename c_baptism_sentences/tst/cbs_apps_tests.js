// TODO can I load the nephi text from here into the cbs_test_index.html ???
// TODO OR should I just run a test on cbs_apps.js looking into 2Nep....html ???
QUnit.module("cbs_apps roundIt");
QUnit.test('round 1.3 places', function (assert) {
    var ret = roundIt(1.234444, 2);
    assert.equal(ret, 1.23, "exp 3 places.")
});
QUnit.test('round 3.3 places', function (assert) {
    var ret = roundIt(321.234444, 3);
    assert.equal(ret, 321.234, "exp 3 places.")
});
QUnit.test('round 3.3 rounded up', function (assert) {
    var ret = roundIt(321.2355, 3);
    assert.equal(ret, 321.236, "exp 3 places.")
});

QUnit.module("keypress testing");
// first the qunit.cookbook example
QUnit.test("template: keylogger api behavior", function (assert) {
    var doc = $(document),
        keys = new KeyLogger(doc);

    // Trigger the key event
    doc.trigger($.Event("keydown", {keyCode: 9}));

    // Verify expected behavior
    assert.deepEqual(keys.log, [9], "correct key was logged");
});

QUnit.module("WordsOfInterest", {
    beforeEach: function () {
        this.divTest = "<div>" +
            "<p> a few words then a woi.</p>" +
            "<p> and two more woi, woi and then no more.</p>" +
            "</div>";

    }
});
QUnit.test("find a list of wordsOI", function (assert) {
    var
        re, arr
        ;
    // form: str.match(regex) returns an array.
    re = /woi/gi;
    arr = this.divTest.match(re);
    assert.ok(arr.length == 3, "EXP see three woi's.")
});
QUnit.test("replace all of wordsOI", function (assert) {
    var
        re, arr
        ;
    // form: str.match(regex) returns an array.
    re = /woi/gi;
    arr = this.divTest.replace(re, "<span id='woi'>woi</span>");
    //logIt(arr);
    assert.ok(arr.match(/span/gi).length == 6, "EXP see six spans surrounding woi.")
});

QUnit.module("setProgressiveOpacity");
QUnit.test(" calc opacity/transparency", function (assert) {
    //**
    // want some function that returns an opacity value
    //  where opacity === TRANSPARENCY is how much light gets through the page
    // ; i.e.high:1 NOT Transparent; lo:0 totally transparent, can't see anything on the element.
    // between hiOpacity: can't see through and loOpacity: see thru.
    // The function( distance ndxTop:0 and ndxBot:F(length, delta)
    // Where verses near curNdx have hiOp; near ndxFar have loOp.
    // ndxFar >= 0 if in class:old - already read.
    // ndxFar <= maxNdx if in class:new - haven't read it yet
    var cut = function setOpacity(curNdx, maxNdx, ndxFar, hiOp, loOp) {
        // a small ndxDelta means current near top|bottom: i.e, near the extreme.
        var ndxDelta = curNdx - ndxFar
            , isCloser2Top = ndxDelta >= 0
            , opDelta = hiOp - loOp
            , x = opDelta * ndxDelta / maxNdx
            ;
        return x
    };
    assert.expect(0);
    //var ret = cut(10, 10, 10, .8, .2);
    //assert.equal(ret, .2, "EXP at bottom extreme: lowest opacity ");
    //ret = cut(0, 10, 0, .8, .2);
    //assert.equal(ret, .2, "EXP at top extreme: lowest opacity ");
    //ret = cut(5, 10, 0, .8, .2);
    //assert.equal(ret, .8, "EXP at middle: highest opacity ");
});

QUnit.module("objLiteral Structure", {
    beforeEach: function () {
        this.mv = {
            const: {
                CUR_DLTA: 2,
                MIN_NDX: 0
            },
            ndx: {
                min: undefined,
                old: undefined,
                cur: undefined,
                new: undefined,
                max: undefined
            },
            dlta: {
                old: undefined,
                cur: undefined,
                new: undefined
            },
            min: {}
            ,
            old: {}
            ,
            cur: {}
            ,
            new: {}
            ,
            max: {}
            ,
            config: function () {
                this.cur.ndx = 0;  // default
                this.validOldNdx = function() {
                    return this.min.ndx;  // always
                };
                this.validCurNdx = function(curNdx, maxNdx) {
                    curNdx = (curNdx >= 0 ) ? curNdx : 0;
                    curNdx = (curNdx <= maxNdx ) ? curNdx : maxNdx;
                    return curNdx
                };
                this.validNewNdx = function (curNdx, curDlta, maxNdx) {
                    var ndxNew = curNdx + curDlta
                    // NOTE: e.g. 3 + dlta==2 will have cur:3,4; new:5
                        ;
                    return ( ndxNew < maxNdx) ? ndxNew : maxNdx
                };
                this.validMaxNdx = function( arrLength, curDlta){
                    // NOTE: an array.length is 1 more than actual length: 6.
                    // NOTE: BUT ndx + dltaCur:2 points one beyond ndx
                    // SO says pt to 6 - 1 as the last useable index
                    // THEN subtract just 1 more place to accomodate the dltaCur
                    // 6 - 1 - dltaCur + 1 === len - dlta
                    return arrLength - curDlta
                };
                // deltas
                this.calcOldDlta = function () {
                    return this.curNdx - 1 - this.min.ndx
                };
                this.calcNewDlta = function () {
                    return this.max.ndx - (this.curNdx + 1)
                };
            },
            /**
             *  except for the two params, all other indexs ans deltas are communicated.
             * @param currentNdx: the index of the current verse.
             * @param collection: the verses [<p> tags] of the chapter being read.
             */
            init: function (currentNdx, collection) {
                // local globals EARLY. They are used in .config
                this.verses = collection;
                this.curNdx = currentNdx;
                this.cur.dlta = this.const.CUR_DLTA;
                // config some definitions needed before following calcs.
                this.min.ndx = this.const.MIN_NDX;
                this.max.ndx = this.validMaxNdx(collection.length, this.cur.dlta);
                // now the rest
                this.old.ndx = this.validOldNdx();
                this.cur.ndx = this.validCurNdx(currentNdx, this.max.ndx);  // already assigned
                this.new.ndx = this.validNewNdx(currentNdx, this.cur.dlta, this.max.ndx);

                this.old.dlta = this.calcOldDlta();
                this.new.dlta = this.calcNewDlta();
            }
        }
    }
});
QUnit.test("init curNdx:0", function( assert ){  // might try a curNdx = -5
    var mv = this.mv;
    mv.config();
    mv.init(0, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 0, "EXP after .init curNdx again this is a repeat test" );
    assert.equal(mv.new.ndx, 2, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");


});
QUnit.test("init curNdx:1", function( assert ){
    var mv = this.mv;
    mv.config();
    mv.init(1, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 1, "EXP after .init curNdx has a new value" );
    assert.equal(mv.new.ndx, 3, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");


});
QUnit.test("init curNdx:2", function( assert ){
    var mv = this.mv;
    assert.ok(mv.const.CUR_DLTA === 2);
    assert.equal(mv.cur.ndx, undefined, "EXP no ncdCur BEFORE config ");
    mv.config();
    mv.init(2, [0,1,2,3,4,5,6]);
    assert.equal(mv.cur.ndx, 2, "EXP after .init curNdx has a new value" );
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 2, "EXP after .init curNdx again this is a repeat test" );
    assert.equal(mv.new.ndx, 4, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");
});
QUnit.test("init curNdx:3", function( assert ){
    var mv = this.mv;
    mv.config();
    mv.init(3, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 3, "EXP after .init curNdx again this is a repeat test" );
    assert.equal(mv.new.ndx, 5, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");
});
QUnit.test("init curNdx:4", function( assert ){
    var mv = this.mv;
    mv.config();
    mv.init(4, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 4, "EXP after .init curNdx again this is a repeat test" );
    assert.equal(mv.new.ndx, 5, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");


});
QUnit.test("init curNdx:5", function( assert ){
    var mv = this.mv;
    mv.config();
    mv.init(5, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 5, "EXP after .init curNdx has a new value" );
    assert.equal(mv.new.ndx, 5, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");


});
QUnit.test("init curNdx:6", function( assert ){
    var mv = this.mv;
    mv.config();
    mv.init(6, [0,1,2,3,4,5,6]);
    assert.equal(mv.min.ndx, 0, "EXP: after .init see .min.ndx");
    assert.equal(mv.old.ndx, 0, "EXP: after .init see .old.ndx");
    assert.equal(mv.cur.ndx, 5, "EXP after .init curNdx has a new value" );
    assert.equal(mv.new.ndx, 5, "EXP after init see .new.ndx");
    assert.equal(mv.max.ndx, 5, "EXP: after .init see .max.ndx");


});

