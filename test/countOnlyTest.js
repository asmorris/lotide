const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should return a count of 1 if k/v pair exists once in array", () => {
    assert.deepEqual(countOnly(["a", "b"], { a: true, b: false }), {
      a: 1,
    });
  });
  it("should return a count of 2 if k/v pair exists twice in array", () => {
    assert.deepEqual(countOnly(["a", "b", "a"], { a: true, b: false }), {
      a: 2,
    });
  });
  it("should return a count for all values that are true if k/v pair exists in array", () => {
    assert.deepEqual(countOnly(["a", "b", "a"], { a: true, b: true }), {
      a: 2,
      b: 1,
    });
  });
});
