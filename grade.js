const prompt = require("prompt-sync")();

const name = prompt("Please enter students name: ");

const studentNumber = parseInt(prompt("Enter students number: "));

const mark = parseFloat (prompt("Enter student's exam mark: "));

if (mark >= 90 && mark <=100)
{
    console.log(`***** ${name} Report Card ***** \n Name: ${name}\n Student Number: ${studentNumber} \n Grade: A`)
}

else if  (mark <= 89.9 && mark >=80)
{
    console.log(`***** ${name} Report Card ***** \n Name: ${name}\n Student Number: ${studentNumber} \n Grade: B`)
}

else if  (mark <= 79.9 && mark >=70)
{
    console.log(`***** ${name} Report Card ***** \n Name: ${name}\n Student Number: ${studentNumber} \n Grade: C`)
}

else if  (mark <= 69.9 && mark >=60)
{
    console.log(`***** ${name} Report Card ***** \n Name: ${name}\n Student Number: ${studentNumber} \n Grade: D`)
}

else 
{
    console.log(`***** ${name} Report Card ***** \n Name: ${name}\n Student Number: ${studentNumber} \n Grade: F`)
}


