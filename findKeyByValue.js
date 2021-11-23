/* Please note - for this I wanted to have them be equal to arrays
in case the show in question was the best in multiple different genres
i.e. as per the case of Brooklyn Nine-Nine, which is a great comedy but also has action-y moments. Obviously a contrived example, but I thought it made sense.
*/

const findKeyByValue = (allItems, value) => {
  let result = [];

  for (const item in allItems) {
    if (allItems[item] === value) {
      result.push(item);
    }
  }
  return result;
};

module.exports = findKeyByValue;
