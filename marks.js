const prompt = require("prompt-sync")();

const PASS_MARK = 50;

const mark1 = parseFloat (prompt("Please enter mark 1: "));

const mark2 = parseFloat (prompt("Please enter mark 2: "));

const mark3 = parseFloat (prompt("Please enter mark 3: "));

const average = (mark1 + mark2 + mark3) / 3; 


if (average >= PASS_MARK)

{
    console.log (`Congratulations you passed! \nYour average mark is ${average}`);
}

else
{
    console.log (`Oh no, you failed! \nYour average mark is ${average}`);
}



