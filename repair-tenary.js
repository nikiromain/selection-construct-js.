const prompt = require("prompt-sync")();

const LABOUR_COST = 100;

const MINIMUM_CHARGE = 150; 

const hours_worked = parseFloat (prompt("Please enter the number of hours worked: "));

const parts_cost = parseFloat (prompt("\nPlease enter the cost of parts: "));

const total_charge = LABOUR_COST + parts_cost; 

total_charge <= MINIMUM_CHARGE ? console.log (`\nYour total cost is $${MINIMUM_CHARGE}`) : console.log (`\nYour total cost is $${total_charge}`)
