/**
 * Created by warren on 12/28/16.
 */

const assert = require('assert');
const Matrix = require('../dist/matrix').Matrix;
const Vector = require('../dist/matrix').Vector;

describe('testing matrix', function () {
  const m1 = new Matrix([new Vector([1,2]), new Vector([3,4])]);

  it('testing push', function () {
    const temp = new Matrix([new Vector([1, 2])]);
    assert.ok(m1.equals(temp._push(new Vector([3,4]))));
  });

  describe('testing transpose', function () {
    it('involution', function () {
      assert.ok(m1.equals(m1.transpose().transpose()))
    });

    it('basic functionality', function () {
      const m2 = new Matrix([new Vector([1,3]), new Vector([2,4])]);
      assert.ok(m1.transpose().equals(m2))
    })
  })

});