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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  let result = true;
  if (Object.keys(actual).length !== Object.keys(expected).length)
    result = false;
  for (key of Object.keys(actual)) {
    if (Array.isArray(actual[key])) {
      if (!eqArrays(actual[key], expected[key])) result = false;
    } else {
      if (actual[key] !== expected[key]) result = false;
    }
  }

  result
    ? console.log(
        `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

const ef = { c: "1", d: ["2", 3], e: "hello" };
const fe = { d: ["2", 3], c: "1", e: "hello" };
assertObjectsEqual(ef, fe);
