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

module.exports = assertObjectsEqual;
