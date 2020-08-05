var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {                      // truthy
  console.log('Hello');
}

if (!myString) {                      // falsey
  console.log('World');
}

if (!!myArray) {                      // truthy
  console.log('World');
}

if (myOtherString || myArray) {       // truthy
  console.log('!');
}
