var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(num) {
  var result = '';
  var remainder;
  var negative;

  if (num === 0) {
    return '0';
  } else if (num < 0) {
    negative = true;
    num = 0 - num;
  }


  do {
    remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return (negative ? '-' + result : '+' + result);
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
