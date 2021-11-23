import assertArraysEqual from "../assertArraysEqual";
import findKeyByValue from "../findKeyByValue";

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  action: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), ["drama"]);
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), []);
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), [
  "comedy",
  "action",
]);
