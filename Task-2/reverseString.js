function reverseString(string) {
  let array = [];
  for (let i = string.length - 1; i > -1; i--) {
    array.push(string[i]);
  }
  return array.toString("").replace(/,/g, "");
}
module.exports = reverseString;
