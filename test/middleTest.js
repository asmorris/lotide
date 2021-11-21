const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["hello", "world", "foo", 4]), ["world", "foo"]);
assertArraysEqual(middle(["hello", "world", "foo", 4, 5]), ["foo"]);
