var DIGITS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

function stringToSignedInteger(str) {
  var numberStrings = Object.keys(DIGITS);
  var numbers = str.split('');
  var result = 0;
  var multiplyer = 1;
  var negative;

  if (numbers[0] === '-') {
    negative = true;
    numbers = numbers.slice(1);
  } else if (numbers[0] === '+') {
    numbers = numbers.slice(1);
  }
  
  numbers.reverse().forEach(function(num) {
    result += DIGITS[num] * multiplyer;
    multiplyer *= 10;
  });

  return (negative ? 0 - result : result);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
