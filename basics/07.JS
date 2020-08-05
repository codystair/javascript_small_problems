/*
input: string
output: number
rules:
- convert string to number without built-in functions

algorithm:
- set digits to string split into array and reversed
- set multiplyer to 1
- set result to 0
- iterate over digits:
  - add num * multiplyer to result
  - increment multiplyer * 10
- return result
*/

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

function stringToInteger(str) {
  var numbers = str.split('').reverse();
  var result = 0;
  var multiplyer = 1;
  
  numbers.forEach(function(num) {
    result += DIGITS[num] * multiplyer;
    multiplyer *= 10;
  });

  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
