function concat() {
  var result = [];
  var currentArg;
  var i;
  var j;

  for (i = 0; i < arguments.length; i++) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (j = 0; j < currentArg.length; j++) {
        result.push(currentArg[j]);
      }
    } else {
      result.push(currentArg);
    }
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
