/**
 * Created by warrenronsiek on 12/23/16.
 */

class Vector {
    array: Array<number>;
    length: number;
    constructor(array: Array<number>) {
        this.array = array;
        this.length = array.length;
    };

    scalar = (num: number): Vector=> {
        return new Vector(this.array.map(x => x * num));
    };

    negative = (): Vector => {
        return this.scalar(-1)
    };

    //TODO: create forEach curry method to simplify addition/multiplication/dotprod

    add = (otherVector: Vector) : Vector => {
        if (otherVector.length !== this.length) {
            throw new Error('Error: mismatched vector length')
        } else {
            const newVector: Array<number> = [];
            this.array.forEach((element, index, array) => {
                newVector.push(element + otherVector.array[index])
            });
            return new Vector(newVector);
        }
    };

    multiply = (otherVector: Vector): Vector => {
        if (otherVector.length !== this.length) {
            throw new Error('Error: mismatched vector length')
        } else {
            const newVector: Array<number> = [];
            this.array.forEach((element, index, array) => {
                newVector.push(element * otherVector.array[index])
            });
            return new Vector(newVector);
        }
    };

    subtract = (otherVector: Vector): Vector => {
        return this.add(otherVector.negative());
    };

    equals = (otherVector: Vector): boolean => {
        return this.array.toString() === otherVector.array.toString()
    };

    dot = (otherVector: Vector): number => {
        if (otherVector.length !== this.length) {
            throw new Error('Error: mismatched vector length')
        } else {
            let dotProduct: number = 0;
            this.array.forEach((element, index, array) => {
                dotProduct += element * otherVector.array[index]
            });
            return dotProduct;
        }
    }
}

export {Vector};