const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns an empty array for a single valued array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for a 2 value array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns the middle item of an odd numbered array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns the middle 2 values of an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns the middle value of an array of strings", () => {
    assert.deepEqual(middle(["foo", "bar", "baz"]), ["bar"]);
  });

  it("returns the middle value of a mixed values array", () => {
    assert.deepEqual(middle(["foo", 2, "bar"]), [2]);
  });
});
