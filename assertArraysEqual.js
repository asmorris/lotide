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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
