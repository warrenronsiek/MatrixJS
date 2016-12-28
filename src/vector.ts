/**
 * Created by warrenronsiek on 12/23/16.
 */
import * as _ from 'lodash';

class Vector {
  array: Array<number>;
  length: number;

  constructor(array: Array<number>) {
    this.array = array;
    this.length = array.length;
  };

  scalarMult = (num: number): Vector => new Vector(this.array.map(x => x * num));

  negative = (): Vector => this.scalarMult(-1);

  _forEach = (otherVector: Vector, method: (x: number, y: number) => number): Vector => {
    if (otherVector.length !== this.length) {
      throw new Error('Error: mismatched vector length')
    } else {
      const newVector: Array<number> = [];
      this.array.forEach((element, index, array) => {
        newVector.push(method(element, otherVector.array[index]))
      });
      return new Vector(newVector);
    }
  };

  _push = (x: number): Vector => new Vector([...this.array, x]);

  add = (otherVector: Vector): Vector => this._forEach(otherVector, (a, b) => a + b);

  multiply = (otherVector: Vector): Vector => this._forEach(otherVector, (a, b) => a * b);

  scalarDiv = (scalar: number): Vector => this.scalarMult(1 / scalar);

  subtract = (otherVector: Vector): Vector => this.add(otherVector.negative());

  equals = (otherVector: Vector): boolean => this.array.toString() === otherVector.array.toString();

  dot = (otherVector: Vector): number => _.sum(this.multiply(otherVector).array);

  toString = (): string => '[' + this.array.toString() + ']';
}

export {Vector};