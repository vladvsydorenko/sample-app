const array1 = [2, 1, 3, 4, 8, 5, 6];
const array2 = [2, 3, 5, 6, 4, 8, 1, 2];

const intersection = [];

// value => mask of two elements from different arrays
const map = {};
const VALUE1_ID = 1;
const VALUE2_ID = 2;

const crossLength = Math.min(array1.length, array2.length);

let value1;
let value2;
for (let i = 0; i < crossLength; i++) {
    value1 = array1[i];
    value2 = array2[i];

    map[value1] = map[value1] | VALUE1_ID;
    map[value2] = map[value2] | VALUE2_ID;

    if (value1 === value2) {
        intersection.push(value1);
        continue;
    }

    if (map[value1] === 3) {
        intersection.push(value1);
    }

    if (map[value2] === 3) {
        intersection.push(value2);
    }
}

const maxLength = Math.max(array1.length, array2.length);
const biggerArray = array1.length > array2.length ? array1 : array2;
const targetId = array1.length < array2.length ? VALUE1_ID : VALUE2_ID;

// console.log(maxLength, biggerArray, targetId);
for (let i = crossLength; i < maxLength; i++) {
    value2 = biggerArray[i];
    if (map[value2] === 3) {
        intersection.push(value2);
    }
}

console.log("intersections", intersection);
