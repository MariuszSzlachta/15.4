'use strict';

// {
//   console.log('Zadanie 1.');

//   const a = 'Hello';
//   const b = 'World';
//   console.log(`${a} ${b}`);
// }

// {
//   console.log('Zadanie 2');

//   const multiply = (x,y = 1) => x * y

//   console.log(multiply(6));
// }


console.log('Zadanie 3');

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    sum += arg;
  });
  console.log('\u015Arednia wynosi: ' + sum / args.length);
  return sum / args.length;
};
average(1, 3, 6, 6);

console.log('Zadanie 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(null, grades);

console.log('Zadanie 5');

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = arr[2],
    lastName = arr[4];

console.log(firstName);
console.log(lastName);
