const prompt = require("prompt-sync")();

const AGE_LIMIT = 18; 

const age = parseInt (prompt("Please enter your age: "));

if (age <= AGE_LIMIT)
{
    console.log ("You are too young to go beyond this point");
}

else
{
    console.log ("You have been granted access");
}