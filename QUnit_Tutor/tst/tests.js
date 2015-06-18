/**
 * Created by CLIF on 6/5/2015.
 */

QUnit.module( "src_index" );
QUnit.test( "a basic test example", function( assert ) {
    assert.equal( $('#h1').text()[0,3],"The",  "EXP first word i 'The" );
});
QUnit.module( "group a" );
QUnit.test( "a basic test example 2", function( assert ) {
    assert.ok( true, "this test is fine" );
});

QUnit.module( "group b" );
QUnit.test( "a basic test example 3", function( assert ) {
    assert.ok( true, "this test is fine" );
});
QUnit.test( "a basic test example 4", function( assert ) {
    assert.ok( true, "this test is fine" );
});
module( "Learn how to test");
QUnit.test( "a basic test example", function( assert ) {
    var value = "hello";
    assert.equal( value, "hello", "We expect value to be hello" );
    var trouble = true
});
QUnit.test( "ok test", function( assert ) {
    assert.ok( true, "true succeeds" );
    assert.ok( "non-empty", "non-empty string succeeds" );

    assert.ok( false, "false fails" );
    assert.ok( 0, "0 fails" );
    assert.ok( NaN, "NaN fails" );
    assert.ok( "", "empty string fails" );
    assert.ok( null, "null fails" );
    assert.ok( undefined, "undefined fails" );
});
QUnit.test( "equal test", function( assert ) {
    assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
    assert.equal( "", 0, "Empty, Zero; equal succeeds" );
    assert.equal( "", "", "Empty, Empty; equal succeeds" );
    assert.equal( 0, false, "Zero, false; equal succeeds" );

    assert.equal( "three", 3, "Three, 3; equal fails" );
    assert.equal( null, false, "null, false; equal fails" );
});
QUnit.test( "deepEqual test", function( assert ) {
    var obj = { foo: "bar" };
    assert.deepEqual( obj, { foo: "bar" }, "Two objects can be the same in value" );
});
