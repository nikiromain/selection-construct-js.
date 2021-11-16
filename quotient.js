const prompt = require("prompt-sync")();


const number1 = parseFloat (prompt("Please enter the first number: "));
const number2 = parseFloat (prompt("Please enter the second number: "));

if (number2 ===0)
{
    console.log(`A number cannot be divided by zero`)
}

else
{
    const quotient = number1 / number2
    console.log(`The quotient of ${number1} and ${number2} is ${quotient}`)
}

