const add = require('./add');
const subract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let first = Number(process.argv[2]);
let second = process.argv[3];
let third = Number(process.argv[4]);

const calculate = (firstNumber, secondNumber) => {

  if (second === 'plus') {
    return add(firstNumber, secondNumber);
  }
  if (second === 'minus') {
    return subract(firstNumber, secondNumber);
  }
  if (second === 'times') {
    return multiply(firstNumber, secondNumber);
  }
  if (second === 'over') {
    return divide(firstNumber, secondNumber);
  }
}

console.log('Result:', calculate(first, third));
