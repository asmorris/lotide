/* Please note - for this I wanted to have them be equal to arrays
in case the show in question was the best in multiple different genres
i.e. as per the case of Brooklyn Nine-Nine, which is a great comedy but also has action-y moments. Obviously a contrived example, but I thought it made sense.
*/

const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  let isEqual = true;

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });

  if (isEqual) {
    console.log(`✅✅✅ Assertion passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: [${arr1}] !== [${arr2}]`);
  }
};

const findKeyByValue = (allItems, value) => {
  let result = [];

  for (const item in allItems) {
    if (allItems[item] === value) {
      result.push(item);
    }
  }
  return result;
};

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
