function reverse(input) {
  var result = [];
  var i;

  for (i = input.length - 1; i >= 0; i--) {
    result[result.length] = input[i];
  }

  if (Array.isArray(input)) {
    return result;
  } else {
    return result.join('');
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array))             // [3, 2, 1]
console.log(array)                      // [1, 2, 3]
