const stringLength = require("./string");

it("string length case", () => {
  expect(stringLength("hello")).toBe(5);
});

it("string length case above 10", () => {
  expect(stringLength("Tony Elumelu")).toMatch(
    "String above or below required length"
  );
});

it("string length case below 1", () => {
  expect(stringLength("")).toMatch("String above or below required length");
});


