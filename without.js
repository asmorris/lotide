const without = (source, itemsToRemove) => {
  let newArr = [...source];
  itemsToRemove.forEach((item) => {
    newArr = newArr.filter((i) => i !== item);
  });

  return newArr;
};

module.exports = without;
