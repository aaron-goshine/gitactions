/* global it describe */
var discount = require('../src/discount');
var assert = require('assert');

describe('Bizmathjs-discount', function () {
  it('discount value ', function () {
    assert.strictEqual(discount.getValue(100, 80), 80);
  });

  it('discounted price ', function () {
    assert.strictEqual(discount.getPrice(100, 80), 20);
  });
});
