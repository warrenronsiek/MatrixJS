/**
 * Created by warren on 12/26/16.
 */
import {Vector} from './vector'
class Matrix {
    vectors: Array<Vector>;
    n: number; m: number;

    constructor(vectors: Array<Vector>) {
        this.vectors = vectors;
        const numLengths: number = new Set(vectors.map(vec => vec.length)).size;
        if (numLengths > 0) {
            throw new Error('Not all vectors of same length')
        }
        this.n = vectors[0].length;
        this.m = vectors.length;
    }

    transpose = () => {

    }

    toString = () => {

    }
}

export {Matrix}