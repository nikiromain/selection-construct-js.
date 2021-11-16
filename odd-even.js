const prompt = require("prompt-sync")();

const number = parseInt (prompt("Please enter an integer number: "));


number%2 ===0 ? console.log (`The number you entered: ${number} is even`) : console.log (`The number you entered: ${number} is odd`)

/*if (number%2 === 0)
{
    console.log (`The number you entered: ${number} is even`);
}

else 
{
    console.log (`The number you entered: ${number} is odd`);
}
*/
