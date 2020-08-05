var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  var result = '';
  var remainder;

  do {
    remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
