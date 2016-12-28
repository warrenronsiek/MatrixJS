/**
 * Created by warren on 12/26/16.
 */
import {Vector} from './vector'

class Matrix {
  vectors: Array<Vector>;
  nRows: number;
  mCols: number;

  constructor(vectors: Array<Vector>) {
    this.vectors = vectors;
    const numLengths: number = new Set(vectors.map(vec => vec.length)).size;
    if (numLengths > 1) {
      throw new Error('Not all vectors of same length')
    }
    this.mCols = vectors[0] === undefined ? 0 : vectors[0].length;
    this.nRows = vectors.length;
  }

  _push = (vec: Vector): Matrix => new Matrix([...this.vectors, vec]);

  transpose = (): Matrix => {
    const temp: Matrix = new Matrix([]);
    console.log(temp.toString());
    for (let m: number = 0; m < this.mCols; m++) {
      console.log(temp.toString());
      temp._push(new Vector([]));
      for (let n: number = 0; n < this.nRows; n++) {
        console.log(temp.toString());
        temp.vectors[m]._push(this.vectors[n].array[m])
      }
    }
    return temp;
  };

  equals = (otherMatrix: Matrix): boolean => this.toString() === otherMatrix.toString();

  toString = (): string => '{\n' + this.vectors.map(vector => vector.toString() + '\n') + '\n}';
}

export {Matrix}