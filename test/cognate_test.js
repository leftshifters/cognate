'use strict';

var cognate = require('../lib/cognate.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['replace'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'u2018 u2019 u201A': function(test) {
    test.expect(3);
    test.strictEqual(cognate.replace("test‘"), "test'", "should be test' for u2018");
    test.strictEqual(cognate.replace("test’"), "test'", "should be test' for u2019");
    test.strictEqual(cognate.replace("test‚"), "test'", "should be test' for u201A");
    test.done();
  },

  'u201C u201D u201E': function(test) {
    test.expect(1);
    test.strictEqual(cognate.replace("test„“”"), 'test"""', 'should be test""" for u201C u201D u201E');
    test.done();
  },

  'u2026 u2013 u2014': function(test) {
    test.expect(1);
    test.strictEqual(cognate.replace("test…–—"), 'test...--', 'should be test...-- for u2026 u2013 u2014');
    test.done();
  },

  'u02C6 u2039 u203A': function(test) {
    test.expect(1);
    test.strictEqual(cognate.replace("ˆ‹›"), '^<>', 'should be ^<> for u02C6 u2039 u203A');
    test.done();
  },
  '02DC': function(test) {
    test.expect(1);
    test.strictEqual(cognate.replace("˜"), ' ', 'should be  for 02DC');
    test.done();
  },
  '00A0': function(test) {
    test.expect(1);
    test.strictEqual(cognate.replace("test \u00A0"), 'test  ', 'should be test  for u00A0');
    test.done();
  }
};