const array1 = [2, 3, 4, 5, 7, 8, 9, 2, 11, 1];
const array2 = [0, 1, 2, 9, 8, 6, 1, 11];

console.log("------------------------------")
console.log("sort: arrays", array1, array2);

const intersection = [];

const isArray1Bigger = array1.length > array2.length;
const biggerArray = isArray1Bigger ? array1 : array2;
const smallerArray = isArray1Bigger ? array2 : array1;

const biggerArraySorted = biggerArray.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
});
const smallerArraySorted = smallerArray.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
});

let i = 0;
let j = 0;
let tries = 0;
let targetValue;
let value;
const smallerLength = smallerArray.length;
const biggerLength = biggerArray.length;
while (i < smallerLength && j < biggerLength) {
    targetValue = smallerArray[i];
    value = biggerArray[j];

    if (value < targetValue) {
        j++;
        continue;
    }
    if (value > targetValue) {
        i++;
        continue;
    }

    j++;
    intersection.push(value);
}

console.log(intersection);
