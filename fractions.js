const prompt = require("prompt-sync")();

const numerator1 = parseInt (prompt("Enter the numerator: "))

const denominator1 = parseInt (prompt("Enter the first denominator"));

const numerator2 = parseInt (prompt("Enter the numerator: "))

const denominator2 = parseInt (prompt("Enter the second denominator"));


let numerator = (numerator1 * denominator2) + (numerator2 * denominator1); 

const denominator = denominator1 * denominator2

if (numerator >= denominator)
{
    const wholePart = parseInt(numerator / denominator)

    numerator = numerator%denominator
    
    console.log(`${wholePart} ${numerator}/${denominator}`)

}

else

console.log(`${numerator}/${denominator}`)
