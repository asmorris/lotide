import assertEqual from "../assertEqual";
import findKey from "../findKey";

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 7
  ),
  undefined
);

assertEqual(
  findKey(
    {
      Toronto: { housePrice: 1000000 },
      Ottawa: { housePrice: 800000 },
      Vancouver: { housePrice: 1400000 },
      Moncton: { housePrice: 500000 },
    },
    (x) => x.housePrice === 800000
  ),
  "Ottawa"
);
