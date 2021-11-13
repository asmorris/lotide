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

const without = (source, itemsToRemove) => {
  let newArr = [...source];
  itemsToRemove.forEach((item) => {
    newArr = newArr.filter((i) => i !== item);
  });

  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(
  without(["hello", "world", "lighthouse"], ["hello", "lighthouse"]),
  ["world"]
);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3]
);
assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, null],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3, null]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, undefined],
    ["hello", "lighthouse", 1, 2, undefined]
  ),
  ["world", 3, 3]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, undefined],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3, undefined]
);
