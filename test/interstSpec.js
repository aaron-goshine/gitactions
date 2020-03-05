/* global it  describe  */
var interest = require('../src/interest');
var assert = require('assert');

describe('Bizmathjs interest', function () {
  it('simple interest module exists', function () {
    assert.strictEqual(typeof interest.simple, 'object');
  });

  it('simple interest rate is a function', function () {
    assert.strictEqual(typeof interest.simple.rate, 'function',
      'simple interest rate should be a function');
    assert.strictEqual(interest.simple.rate(482, 4000, 1.5), 8.03,
      'should calculate simple interest');
  });

  it("simple interest 'interest' function", function () {
    assert.strictEqual(typeof interest.simple.interest, 'function');
    assert.strictEqual(interest.simple.interest(50, 100, 1.5), 75,
      'should calculate the interest');
  });

  it('real interest', function () {
    assert.strictEqual(typeof interest.real, 'object');
  });

  it('compound interest');
});
