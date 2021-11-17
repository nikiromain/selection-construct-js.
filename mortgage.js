const prompt = require("prompt-sync")();

const loanTier1Rate = 0.05;

const loanTier2Rate = 0.10; 

const loanTier2Fee = 1250;

const loanTier3Rate = 0.25;

const loanTier3Fee = 5000;


const loanAmount = parseFloat (prompt("Please enter the loan amount: "));

if ((loanAmount < 25000) && (loanAmount > 0))
{
      const deposit = loanTier1Rate * loanAmount; 
      deposit.toFixed(2)
      console.log (`Your loan amount: $${loanAmount} | Deposit $${deposit}`)

}
else if (loanAmount >= 25000 && loanAmount <= 49900)
{
       const deposit =    loanTier2Fee  + (loanTier2Rate * loanAmount)
       deposit.toFixed(2)
       console.log (`Your loan amount: $${loanAmount} | Deposit $${deposit}`)
}

else if (loanAmount >= 50000 && loanAmount <= 100000)
{
        const  deposit = loanTier3Fee + (loanTier3Rate * loanAmount)
        deposit.toFixed(2)
        console.log (`Your loan amount: $${loanAmount} | Deposit $${deposit}`)
}

else
{
    console.log("Your loan cannot be over $100, 000");
}