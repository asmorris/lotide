const takeUntil = (arr, callback) => {
  const results = [];
  for (element of arr) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;
};

module.exports = takeUntil;
