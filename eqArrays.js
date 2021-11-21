const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let isEqual = true;

  arr1.forEach((element, index) => {
    if (element !== arr2[index]) {
      isEqual = false;
    }
  });

  if (isEqual) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
