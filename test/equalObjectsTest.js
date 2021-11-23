import assertEqual from "../assertEqual";
import eqObjects from "../eqObjects";

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const ef = { c: "1", d: ["2", 3], e: "hello" };
const fe = { d: ["2", 3], c: "1", e: "hello" };
assertEqual(eqObjects(ef, fe), true);
