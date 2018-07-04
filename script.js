{
  console.log('Zadanie 1.');

  const a = 'Hello';
  const b = 'World';
  console.log(`${a} ${b}`);
}

{
  console.log('Zadanie 2');

  const multiply = (x = 1, y = 1) => x * y;

  multiply(2,5);
  console.log(multiply(2,5));
  
}


console.log('Zadanie 3');

const average = (...args) => {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  })

  return sum / args.length;
}
console.log(`Średnia wynosi ${average(1,2,6,6)}`)

console.log('Zadanie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);
console.log(average(...grades));

console.log('Zadanie 5');

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = arr;
console.log(`${firstName} ${lastName}`);