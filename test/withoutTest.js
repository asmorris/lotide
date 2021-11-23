import without from "../without";
import assertArraysEqual from "../assertArraysEqual";

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(
  without(["hello", "world", "lighthouse"], ["hello", "lighthouse"]),
  ["world"]
);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3]
);
assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, null],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3, null]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, undefined],
    ["hello", "lighthouse", 1, 2, undefined]
  ),
  ["world", 3, 3]
);

assertArraysEqual(
  without(
    ["hello", "world", "lighthouse", 1, 3, 1, 3, undefined],
    ["hello", "lighthouse", 1, 2]
  ),
  ["world", 3, 3, undefined]
);
