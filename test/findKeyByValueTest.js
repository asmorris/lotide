const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  action: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("should find the correct key based on the given value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return an empty array if value does not exist in object", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), []);
  });
  it("should return multiple values if value exists for many keys in object", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), [
      "comedy",
      "action",
    ]);
  });
});
