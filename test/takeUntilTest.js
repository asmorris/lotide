import takeUntil from "../takeUntil";
import assertArraysEqual from "../assertArraysEqual";

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data1Clipped = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(data1Clipped, results1);

const data2 = [
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
const data2Clipped = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(data2Clipped, results2);
