const add = (num1, num2) => num1 + num2;
const sum = add(12, 23);
// console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 3, 4);
// console.log(result);

const tenTimes = (num) => num * 10;
const output = tenTimes(2)
// console.log(output);


//   ekta peramitter hole () breket lage na 
const fiveTimes = num => num * 5;
const value = fiveTimes(2);
// console.log(value)

const getName = () => 'fahim hossain'
const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);
