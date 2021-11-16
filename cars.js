const prompt = require("prompt-sync")();

const AGE_LIMIT = 22; 

const name = prompt ("Hi, what's your name? ")
console.log (`Welcome to our show, ${name}.`)

const age = parseInt(prompt("How old are you? "))

if (age < AGE_LIMIT)
{
    console.log(`Sorry, you do not meet the age requirement`)
}

else
{
    console.log(`hmmm, you don't look a day over ${age}`)
    const car_number = parseInt (prompt(`Tell me, ${name}, how many cars do you own? `))

    if(car_number ===0)
    {
        console.log(`Wow, come on now ${name}, you are ${age} and do not own a car!  `)
    }

    else 
    {
       const model = prompt(`${name}, what is the brand and model of your car? `)
       console.log (`The ${model} is a great choice for a car.\n ${name}, have a great day. Good bye!!`)

    }
}