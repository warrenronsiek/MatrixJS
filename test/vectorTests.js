/**
 * Created by warrenronsiek on 12/23/16.
 */
const assert = require('assert');
const Vector = require('../dist/matrix').Vector;

describe('testing vector', function() {
    const v = new Vector([1,2,3]);
    it('array should equal [1,2,3]', function () {
        assert.strictEqual(v.array.toString(), [1, 2, 3].toString());
    });

    it('vector multiplication by scalar', function () {
        assert.ok(v.scalar(2).equals(new Vector([2,4,6])))
    });

    it('vector addition', function () {
        const v2 = new Vector([-3, 3, 7]);
        assert.ok(v.add(v2).equals(new Vector([-2, 5, 10])))
    });

    it('vector length comparison', function () {
        assert.ok(v.length === 3)
    });

    it('')
});

