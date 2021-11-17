const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  let isEqual = true;

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });

  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let isEqual = true;

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });
  return isEqual;
};

const takeUntil = (arr, callback) => {
  const results = [];
  for (element of arr) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data1Clipped = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(data1Clipped, results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const data2Clipped = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(data2Clipped, results2);
