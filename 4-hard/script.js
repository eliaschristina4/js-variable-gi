// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// let num1 = 72;
// let num2 = 96;

function add(num1, num2){
    console.log(`${num1} plus ${num2} equals ${num1 + num2}.`)
};

function subtract(num1, num2){
    console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}.`)
};


function multiply(num1, num2){
    console.log(`${num1} multiplied by ${num2} equals ${num1 * num2}.`)
};

function divide(num1, num2){
    console.log(`${num1} divided by ${num2} equals ${num1 / num2}.`)
}

add(72, 96); // 168
subtract(72, 96); // -24
multiply(72, 96); // 6,912
divide(72, 96); // 0.75