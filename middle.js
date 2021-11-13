const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return console.log(`🛑🛑🛑 Assertion failed: [${arr1}] !== [${arr2}]`);
  let isEqual = true;

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });

  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${arr1}] !== [${arr2}]`);
  }
};

const middle = (arr) => {
  if (arr.length <= 2) return [];

  if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["hello", "world", "foo", 4]), ["world", "foo"]);
assertArraysEqual(middle(["hello", "world", "foo", 4, 5]), ["foo"]);
