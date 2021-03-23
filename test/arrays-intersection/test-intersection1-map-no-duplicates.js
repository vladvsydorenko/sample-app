const array1 = [1, 2, 3, 4, 5, 7, 0, 8, 2, 2];
const array2 = [2, 3, 0, 7, 8, 2, 5, 1, 2, 2];

const intersection = [];

const isArray1Bigger = array1.length > array2.length;
const biggerArray = isArray1Bigger ? array1 : array2;
const smallerArray = isArray1Bigger ? array2 : array1;

const map = new Map();

let value;
for (let i = 0; i < smallerArray.length; i++) {
    value = smallerArray[i];
    map.set(value, true);
}

for (let i = 0; i < biggerArray.length; i++) {
    value = biggerArray[i];
    if (map.get(value)) {
        intersection.push(value);
        map.set(value, false);
    }
}

console.log(intersection);
