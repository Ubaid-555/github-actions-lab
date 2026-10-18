const test = require('node:test');
const assert = require('node:assert/strict');
const isNumber = require('is-number');
test('student SAP ID is numeric', () => assert.equal(isNumber('51650'), true));
test('student name is not numeric', () => assert.equal(isNumber('Ubaidullah Zubair'), false));
