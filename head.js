const assertEqual = require("./assertEqual");

const head = (arr) => {
  return arr[0] || undefined;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
