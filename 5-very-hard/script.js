// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"



// prompts as variables
let num1 = Number(prompt('Please enter a number of your choice.'));
let operator = prompt('Please choose and enter an operator: +, -, * or /');
let num2 = Number(prompt('Please enter a second number of your choice.'));


// basic math functions from "hard" challenge
    function add(){
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    };

    function subtract(){
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    };


    function multiply(){
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    };

    function divide(){
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }


// new function using above variables and basic math functions
function letsDoMath(){
    if(operator == '+'){
        add(num1, num2);
    } else if(operator == '-'){
        subtract(num1, num2);
    } else if(operator == '*'){
        multiply(num1, num2);
    } else if(operator == '/'){
        divide(num1, num2);
    } else {
        alert('Please follow the directions.')
    }
};

// call
letsDoMath();


