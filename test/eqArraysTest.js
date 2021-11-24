const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true if values the same for numbers", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true if values are the same for strings", () => {
    assert.equal(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
  });

  it("returns false if numbers and strings are interchanged correctly", () => {
    assert.equal(eqArrays([1, 2, "3"], [1, 2, "3"]), true);
  });

  it("returns false if arrays different lengths", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });

  it("returns false if numbers and strings are interchanged incorrectly", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, "3"]), false);
  });

  it("returns false if values are in the wrong order", () => {
    assert.equal(eqArrays([1, 3, 2], [1, 2, 3]), false);
  });
});
