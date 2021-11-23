import map from "../map";
import assertArraysEqual from "../assertArraysEqual";

const words = ["ground", "control", "to", "major", "tom"];
const firstLetter = ["g", "c", "t", "m", "t"];
const slices = ["grou", "cont", "to", "majo", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  slices,
  map(words, (word) => word.slice(0, 4))
);
