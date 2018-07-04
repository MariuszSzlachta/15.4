'use strict';

{
  console.log('Zadanie 1.');

  var a = 'Hello';
  var b = 'World';
  console.log(a + ' ' + b);
}

{
  console.log('Zadanie 2');

  var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
  };

  multiply(2, 5);
  console.log(multiply(2, 5));
}

console.log('Zadanie 3');

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });

  return sum / args.length;
};
console.log('\u015Arednia wynosi ' + average(1, 2, 6, 6));

console.log('Zadanie 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);
console.log(average.apply(undefined, grades));

console.log('Zadanie 5');

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = arr[2],
    lastName = arr[4];

console.log(firstName + ' ' + lastName);
