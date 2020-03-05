/* global it describe */
var assert = require('assert');
var markdown = require('../src/markdown.js');

describe('bizmathjs-markdown', function () {
  it('percent markdown base on cost', function () {
    assert.strictEqual(markdown.getValue(100, 80), 20);
  });

  it('markdown percentage', function () {
    assert.strictEqual(markdown.getPercentage(100, 80), 20);
  });

  it('markdown by percentage', function () {
    assert.strictEqual(markdown.byPercentage(100, 20), 80);
  });
});
