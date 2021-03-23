const array1 = [0, 1, 4];
const array2 = [1, 0, 5, 4, 9, 0];

console.log(array1);
console.log(array2);

const intersection = [];

const isArray1Bigger = array1.length > array2.length;
const biggerArray = isArray1Bigger ? array1 : array2;
const smallerArray = isArray1Bigger ? array2 : array1;

const map = new Map();

let value1;
let value2;
let mask1;
let mask2;
for (let i = 0; i < smallerArray.length; i++) {
    value1 = smallerArray[i];
    value2 = biggerArray[i];

    mask1 = map.get(value1) || 0;
    mask2 = map.get(value2) || 0;

    mask1 |= 1;
    mask2 |= 2;

    map.set(value1, mask1);
    map.set(value2, mask2);

    if (mask1 === 3) {
        intersection.push(value1);
    }
    if (mask2 === 3) {
        intersection.push(value2);
    }
}

let value;
for (let i = smallerArray.length; i < biggerArray.length; i++) {
    value1 = biggerArray[i];
    if (map.get(value1) & 1) {
        intersection.push(value1);
        map.set(value1, 0);
    }
}

console.log(intersection);
