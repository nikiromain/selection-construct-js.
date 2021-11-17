const prompt = require("prompt-sync")();

const side1 = parseFloat(prompt("Enter side 1: "))
const side2 = parseFloat(prompt("Enter side 2: "))
const side3 = parseFloat(prompt("Enter side 3: "))


if (side1 > 0 && side2 > 0 && side3 > 0)
{
    
    if (side1 === side2 && side2 === side3)
    {
        console.log ("The triangle is an equilateral triangle")

    }

    else if (side1 === side2 || side2 === side3 || side1==side3)
    {
            console.log ("The triangle is a isosocles triangle")
    }

    else if (side1 !== side2 && side2 !== side3 || side1 !== side3)
    {
            console.log ("The triangle is a scalene triangle")
    }

}
else
console.log ("A triangle must have a side that is greater than 0")