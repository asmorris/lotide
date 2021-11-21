const assertEqual = require("./assertEqual");

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);

module.exports = eqArrays;
