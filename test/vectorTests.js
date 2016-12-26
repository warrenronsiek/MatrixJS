/**
 * Created by warrenronsiek on 12/23/16.
 */
const assert = require('assert');
const Vector = require('../dist/matrix').Vector;

describe('testing vector', function () {
    const v = new Vector([1, 2, 3]);
    const v2 = new Vector([-3, 3, 7]);
    it('array should equal [1,2,3]', function () {
        assert.strictEqual(v.array.toString(), [1, 2, 3].toString());
    });

    it('scalar multiplication', function () {
        assert.ok(v.scalarMult(2).equals(new Vector([2, 4, 6])))
    });

    it('scalar division', function () {
        assert.ok(v.scalarDiv(2).equals(new Vector([.5, 1, 1.5])))
    });

    it('addition', function () {
        assert.ok(v.add(v2).equals(new Vector([-2, 5, 10])))
    });

    it('subtraction', function () {
       assert.ok(v.subtract(v2).equals(new Vector([4, -1, -4])))
    });

    it('length comparison', function () {
        assert.ok(v.length === 3)
    });

    it('dot product', function () {
        assert.ok(v.dot(v2) === 24)
    });

    it('multiply', function () {
        assert.ok(v.multiply(v2).equals(new Vector([-3, 6, 21])))
    });

    it('negative', function () {
        assert.ok(v.negative().equals(new Vector([-1, -2, -3])))
    })
});

