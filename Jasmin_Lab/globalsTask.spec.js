const { sum, positive } = require("./index");

describe("testing math utilities", () => {
  it("sum function should equal to sum of the values", () => {
    const result = sum([1, 2, 3, 4]);

    expect(result).toBe(10);
  });

  it("positive function should equal to positive values", () => {
    const result = positive([-2, -1, 0, 1, 2, 3]);

    expect(result).toEqual([1, 2, 3]);
  });
});
