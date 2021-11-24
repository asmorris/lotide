const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true if objects equal", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.equal(eqObjects(ab, ba), true);
  });
  it("returns true if objects equal but key value pair different order", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assert.equal(eqObjects(cd, dc), true);
  });

  it("returns false if one object has too many k/v pairs", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };

    assert.equal(eqObjects(ab, abc), false);
  });

  it("returns false if objects are not deeply equal to each other", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };

    assert.equal(eqObjects(cd, cd2), false);
  });
});
