function slice(array, begin, end) {
  var result = [];
  var i;

  for (i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

function splice(arr, start, num, element1, elementN) {
  var result = [];
  var taken = [];
  var i;

  if (num > arr.length - start) num = arr.length - start;

  for (i = start; i < start + num; i++) {
    taken.push(arr[i]);
  }

  for (i = 0; i < start; i++) {
    result.push(arr[i]);
  }
  if (!!element1) {
    result.push(element1);
  }
  if (!!elementN) {
    result.push(elementN);
  }
  for (i = start + num; i < arr.length; i++) {
    result.push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < result.length; i++) {
    arr.push(result[i]);
  }

  return taken;
}

console.log(splice([1, 2, 3], 1, 2))              // [2, 3]
console.log(splice([1, 2, 3], 1, 3))              // [2, 3]
console.log(splice([1, 2, 3], 1, 0))              // []
console.log(splice([1, 2, 3], 0, 1))              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'))         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
