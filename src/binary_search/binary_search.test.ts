import { searchNumber } from "./binary_search";

describe("tests a binary search algorithm with the searchNumber function", () => {
  const dataFalse = [
    { list: [], item: 2, expected: null },
    { list: [-10, 3, 70, 215], item: 2, expected: null },
    { list: [-10, 3, 70, 215], item: -200, expected: null },
  ];

  const dataTrue = [
    { list: [-10, 3, 70, 215], item: -10, expected: -10 },
    { list: [-10, 3, 70, 215], item: 215, expected: 215 },
  ];

  test.each(dataFalse)(
    `the desired number $item does not exist in the ordered list $list`,
    ({ list, item, expected }) => {
      expect(searchNumber(list, item)).toBe(expected);
    }
  );

  test.each(dataTrue)(
    `the desired number $item exists in the ordered list $list`,
    ({ list, item, expected }) => {
      expect(searchNumber(list, item)).toBe(expected);
    }
  );
});
