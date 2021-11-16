const prompt = require("prompt-sync")();

const GRAMS_CONVERSION = 1000;

const kg1 = parseFloat (prompt("Enter first weight in Kg: "));
const g1 = parseFloat (prompt("Enter first weight in g: "));

const kg2 = parseFloat (prompt("Enter second weight in Kg: "));
const g2 = parseFloat (prompt("Enter first weight in g: "));

let total_grams = g1 + g2; 
let total_kilograms = kg1 + kg2;

if (total_grams >= 1000 )
{
    total_grams = total_grams - GRAMS_CONVERSION;
    total_kilograms = total_kilograms + 1;


    console.log(`${total_kilograms}kg  ${total_grams}g`)
}

else

    console.log(`${total_kilograms}kg  ${total_grams}g`)
