const findKey = (object, callback) => {
  let result = undefined;

  for (const [k, v] of Object.entries(object)) {
    if (callback(v) === true) {
      result = k;
      break;
    }
  }

  return result;
};

module.exports = findKey;
