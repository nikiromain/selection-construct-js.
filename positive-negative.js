const prompt = require("prompt-sync")();

const number = parseInt (prompt("Please enter an integer number: "));

if (number < 0)
{
    console.log (`${number} is a negative number`)
}

else if (number > 0)
{
    console.log (`${number} is a positive number`)
}

else if (number === 0)

{
    console.log (`${number} is a neutral number`)
}

else
{
    console.log ("Please enter an integer")
}