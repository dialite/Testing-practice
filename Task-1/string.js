function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    // throw new Error("String above or below required length");
    return "String above or below required length";
  }
  return str.length;
}


module.exports = stringLength;

// var str = "Some very long string";
// if (str.length <= 10 && str.length >= 1) str = str.substring(0, 9);
