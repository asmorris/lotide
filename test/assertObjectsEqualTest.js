import assertObjectsEqual from "../assertObjectsEqual";

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
