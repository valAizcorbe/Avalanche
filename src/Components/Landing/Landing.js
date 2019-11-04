import React from "react";
import "../../styles/Landing/landing.css";

function Landing() {
  return (
    <div className="background">
      <h1>Why Avalanche?</h1>
      <p className="text">
        <article>
          In the debt avalanche method, you pay your debts from highest interest
          rate to lowest interest rate, regardless of balance. Mathematically
          this makes the most sense. You will pay less in interest if you tackle
          your debts in this order. Saving money on interest means you will pay
          your debts off more quickly.
        </article>

        <article>
          {" "}
          Here’s how to save the most on interest with the debt avalanche
          method: Take inventory: Gather a list of everything you owe. List your
          debts in order of the interest rate on each loan or credit card,
          starting with the highest rate and working down to the lowest. Pay
          your minimums: Keep making minimum payments on all of your loans or
          credit card balances. You’ll focus on one balance at a time, but you
          need to stay current on the others to avoid fees and damage to your
          credit score. Pay extra on the highest rate: With any additional money
          you have available each month, pay extra on the loan with the highest
          interest rate. You’re reducing the amount you owe at that high rate.
          Build momentum: Once you pay off a loan, cross it off the list and
          move on to the loan with the next highest interest rate. The previous
          loan’s minimum payment (which you no longer need to pay) becomes
          available for additional debt payments.
        </article>

        <article>
          Why It Works Debt avalanche is an effective strategy because it
          focuses on interest rates. On most loans, a portion of each monthly
          payment goes toward interest charges, and the remainder reduces your
          loan balance. With high rates, you need to pay more to cover interest
          costs, and your payment might only make a small dent in your loan
          balance. By minimizing your overall interest rate, you waste less
          money on interest.
        </article>
      </p>
      <div className="img">
        <img
          src="http://hugo.debtrescue.co.za/blog/wp-content/uploads/2019/05/Debt-Avalanche-Method.jpg"
          width="300px"
          alt="man skiing"
        />
      </div>
      <button>Register or Login</button>
    </div>
  );
}

export default Landing;
