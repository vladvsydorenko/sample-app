const array1 = [0, 1, 4];
const array2 = [1, 0, 5, 4, 9, 0];

console.log(array1);
console.log(array2);

const intersection = [];

const isArray1Bigger = array1.length > array2.length;
const biggerArray = isArray1Bigger ? array1 : array2;
const smallerArray = isArray1Bigger ? array2 : array1;

const map = {};

let value1;
let value2;
let mask1;
let mask2;
for (let i = 0; i < smallerArray.length; i++) {
    value1 = smallerArray[i];
    value2 = biggerArray[i];

    // add `1` component from array1
    mask1 = (map[value1] || 0) | 1;
    // add `2` component from array2
    mask2 = (map[value2] || 0) | 2;

    map[value1] = mask1;
    map[value2] = mask2;

    // summary of both components is 3
    if (mask1 === 3) {
        intersection.push(value1);
    }
    // summary of both components is 3
    if (mask2 === 3) {
        intersection.push(value2);
    }
}

let value;
for (let i = smallerArray.length; i < biggerArray.length; i++) {
    value1 = biggerArray[i];
    // as smaller array is out of range there is no need to store component to mask from bigger array
    // just test if mask contains smaller array component
    if (map[value1] & 1) {
        intersection.push(value1);
    }
}

console.log(intersection);
