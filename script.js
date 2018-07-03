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

const average = (...args) => {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  })
  console.log(`Średnia wynosi: ${sum / args.length}`)
  return sum / args.length
}
average(1, 3, 6, 6);


console.log('Zadanie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(null, grades)

console.log('Zadanie 5');

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = arr;
console.log(firstName);
console.log(lastName);