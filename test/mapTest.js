const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("changes takes the first character of an array of strings", () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
  it("changes the iterable as per the callback", () => {
    assert.deepEqual(
      map(words, (word) => word.slice(0, 4)),
      ["grou", "cont", "to", "majo", "tom"]
    );
  });
});
