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
    // Where verses near ndxCur have hiOp; near ndxFar have loOp.
    // ndxFar >= 0 if in class:old - already read.
    // ndxFar <= ndxMax if in class:new - haven't read it yet
    var cut = function setOpacity(ndxCur, ndxMax, ndxFar, hiOp, loOp) {
        // a small ndxDelta means current near top|bottom: i.e, near the extreme.
        var ndxDelta = ndxCur - ndxFar
            , isCloser2Top = ndxDelta >= 0
            , opDelta = hiOp - loOp
            , x = opDelta * ndxDelta / ndxMax
            ;
        return x
    };
    assert.expect(0)
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
                DLTA_CUR: 2,
                NDX_MIN: 0
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
            // local globals
            ndxCur: 0,
            verses: [],
            config: function () {
                this.ndx.cur = 0;  // default
                this.calcNdxOld = function() {
                    return this.ndx.min
                };
                this.calcNdxNew = function () {
                    return this.ndxMax - this.ndxCur + 1
                };
                this.calcDltaOld = function () {
                    return this.ndxCur - 1 - this.ndx.min
                };
                this.calcDltaNew = function () {
                    return this.ndx.max - (this.ndxCur + 1)
                }
            },
            /**
             *  except for the two params, all other indexs ans deltas are communicated.
             * @param ndxCurrent: the index of the current verse.
             * @param collection: the verses [<p> tags] of the chapter being read.
             */
            init: function (ndxCurrent, collection) {
                // create and keep sequence these local globals EARLY. They are used in .config
                this.verses = collection;
                this.ndxCur = ndxCurrent;
                this.dltaCur = this.const.DLTA_CUR;
                this.ndxMax = this.verses.length - this.dltaCur - 1;
                // config some definitions needed before following calcs.
                this.ndx.min = this.const.NDX_MIN;
                this.ndx.max = this.ndxMax;
                // now the rest
                this.ndx.old = this.calcNdxOld();
                this.ndx.cur = ndxCurrent;  // already assigned
                this.ndx.new = this.calcNdxNew();
                this.dlta.old = this.calcDltaOld();
                this.dlta.cur = this.const.DLTA_CUR;
                this.dlta.new = this.calcDltaNew();
            }
        }
    }
});
QUnit.test("init constant", function( assert ){
    //var mv = {
    //    const: {
    //        DLTA_CUR: 2,
    //        NDX_MIN: 0
    //    },
    //    ndx: {
    //        min: undefined,
    //        old: undefined,
    //        cur: undefined,
    //        new: undefined,
    //        max: undefined
    //    },
    //    dlta: {
    //        old: undefined,
    //        cur: undefined,
    //        new: undefined
    //    },
    //    // local globals
    //    ndxCur: 0,
    //    verses: [],
    //    config: function() {
    //        mv.ndx.cur = 0;  // default
    //
    //        mv.calcNdxOld = function() {
    //          return mv.ndx.min
    //        };
    //        mv.calcNdxNew = function() {
    //            return mv.ndxMax - mv.ndxCur + 1
    //        };
    //        mv.calcDltaOld = function() {
    //            return mv.ndxCur - 1 - mv.ndx.min
    //        };
    //        mv.calcDltaNew = function() {
    //            return mv.ndx.max - (mv.ndxCur + 1)
    //        }
    //    },
    //    /**
    //     *  except for the two params, all other indexs ans deltas are communicated.
    //     * @param ndxCurrent: the index of the current verse.
    //     * @param collection: the verses [<p> tags] of the chapter being read.
    //     */
    //    init: function (ndxCurrent, collection) {
    //        // create and keep sequence these local globals EARLY. They are used in .config
    //        mv.verses = collection;
    //        mv.ndxCur = ndxCurrent;
    //        mv.dltaCur = mv.const.DLTA_CUR;
    //        mv.ndxMax = mv.verses.length - mv.dltaCur - 1;
    //        // config some definitions needed before following calcs.
    //        mv.ndx.min = mv.const.NDX_MIN;
    //        mv.ndx.max = mv.ndxMax;
    //        // now the rest
    //        mv.ndx.old = mv.calcNdxOld();
    //        mv.ndx.cur = ndxCurrent;  // already assigned
    //        mv.ndx.new = mv.calcNdxNew();
    //        mv.dlta.old = mv.calcDltaOld();
    //        mv.dlta.cur = mv.const.DLTA_CUR;
    //        mv.dlta.new = mv.calcDltaNew();
    //    }
    //};
    var mv = this.mv;
    assert.ok(mv.const.DLTA_CUR === 2);
    assert.equal(mv.ndx.cur, undefined, "EXP ndx ");
    mv.config();
    mv.init(2, [0,1,2,3,4,5]);
    assert.equal(mv.ndx.cur, 2, "EXP after .init ndxCur has a new value" );
    assert.equal(mv.ndx.min, 0, "EXP: after .init see .ndx.min");
    assert.equal(mv.ndx.old, 0, "EXP: after .init see .ndx.old");
    assert.equal(mv.ndx.cur, 2, "EXP after .init ndxCur again this is a repeat test" );
    assert.equal(mv.ndx.max, 3, "EXP: after .init see .ndx.max");


});

