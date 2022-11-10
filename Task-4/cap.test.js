const capitalize = require("./cap");

it("capitalize string", () => {
  expect(capitalize("hello")).toMatch("Hello");
});
