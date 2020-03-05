/* global it describe */
var assert = require('assert');
var Bizmath = require('../index');

describe('Bizmathjs', function () {
  it('does Bizmath exist', function () {
    assert.strictEqual(typeof Bizmath, 'object');
  });

  it('Bizmath has properties', function () {
    var methodNames = [
      'interest',
      'payroll',
      'discount',
      'markdown',
      'markup'];
    methodNames.forEach(function (name) {
      assert.strictEqual(typeof Bizmath[name], 'object');
    });
  });
});
