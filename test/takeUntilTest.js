const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("takes values up until a certain numerical value", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(
      takeUntil(data, (x) => x < 0),
      [1, 2, 5, 7, 2]
    );
  });

  it("takes values up until a certain string value", () => {
    const data = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];
    assert.deepEqual(
      takeUntil(data, (x) => x === ","),
      ["I've", "been", "to", "Hollywood"]
    );
  });
});
