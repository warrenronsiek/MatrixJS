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

    scalarMult = (num: number): Vector=> {
        return new Vector(this.array.map(x => x * num));
    };

    add = (newArray: Vector) : Vector => {
        if (newArray.length !== this.length) {
            throw new Error('Error: mismatched vector length')
        } else {
            const newVector: Array<number> = [];
            this.array.forEach((element, index, array) => {
                newVector.push(element + newArray.array[index])
            });
            return new Vector(newVector);
        }
    }
}

export {Vector};