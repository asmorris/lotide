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

const words = ["ground", "control", "to", "major", "tom"];
const firstLetter = ["g", "c", "t", "m", "t"];
const slices = ["grou", "cont", "to", "majo", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  slices,
  map(words, (word) => word.slice(0, 4))
);
