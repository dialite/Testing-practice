const reverseString = require("./reverseString");

it("reverse string", () => {
  expect(reverseString("Hello")).toMatch("olleH");
});
