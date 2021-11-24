const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("removes a single word from an array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("removes multiple words from an array", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse", "hello"]), ["world"]);
  });
  it("removes a single number from an array", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("removes multiple words from an array", () => {
    assert.deepEqual(without([1, 2, 3], [1, 2]), [3]);
  });
  it("removes value from a mixed value array", () => {
    assert.deepEqual(without([1, 2, 3, "hello"], [1, 2]), [3, "hello"]);
  });
  it("removes multiple of the same value from the same array", () => {
    assert.deepEqual(
      without(
        ["hello", "world", "lighthouse", 1, 3, 1, 3],
        ["hello", "lighthouse", 1, 2]
      ),
      ["world", 3, 3]
    );
  });

  it("leaves null values in the array", () => {
    assert.deepEqual(
      without(
        ["hello", "world", "lighthouse", 1, 3, 1, 3, null],
        ["hello", "lighthouse", 1, 2]
      ),
      ["world", 3, 3, null]
    );
  });
  it("leaves undefined values in the array", () => {
    assert.deepEqual(
      without(
        ["hello", "world", "lighthouse", 1, 3, 1, 3, undefined],
        ["hello", "lighthouse", 1, 2]
      ),
      ["world", 3, 3, undefined]
    );
  });
});
