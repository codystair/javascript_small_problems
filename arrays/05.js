function pop(array) {
  var poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}

function push(array) {
  var length = arguments.length;
  var i;

  for (i = 1; i < length; i += 1) {
    array[array.length] = arguments[i];
  }

  return array.length;
}

var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(console.log(array));                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(console.log(array));                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
