import './Tips.css';
import React from 'react';

function Tips() {
  const handleButtonClick = () => {
    alert("We will contact you as soon as possible."); // Show an alert message when the button is clicked
  };

  return (
    <div>
      <header>
        <h1>Financial Tips</h1>
        <p>Empower your financial future with these valuable tips and insights.</p>
      </header>
      <div className="container">
        <div className="tip">
          <h2>Tip 1: Create a Budget</h2>
          <p>Start by creating a monthly budget to track your income and expenses. This will help you manage your money effectively.</p>
        </div>
        <div className="tip">
          <h2>Tip 2: Save for Emergencies</h2>
          <p>Set up an emergency fund to cover unexpected expenses. Aim to save at least three to six months' worth of living expenses.</p>
        </div>
        <div className="tip">
          <h2>Tip 3: Invest Wisely</h2>
          <p>Consider investing your money in stocks, bonds, or real estate to grow your wealth over time. Do your research and seek professional advice.</p>
        </div>
        <div className="tip">
          <h2>Tip 4: Reduce Debt</h2>
          <p>Prioritize paying off high-interest debts, such as credit cards, to save money on interest payments and improve your financial health.</p>
        </div>
        <div className="tip">
          <h2>Tip 5: Set Financial Goals</h2>
          <p>Define clear financial goals, both short-term and long-term. Having specific objectives will help you stay motivated and focused on your financial journey.</p>
        </div>
        <div className="tip">
          <h2>Tip 6: Diversify Investments</h2>
          <p>Diversification can help reduce risk in your investment portfolio. Spread your investments across different asset classes to balance your risk and potential returns.</p>
        </div>
      </div>
      <div className="container">
        <button onClick={handleButtonClick} className="extension">Request for Extension</button>
        <div id="message">We will contact you as soon as possible.</div>
      </div>
    </div>
  );
}

export default Tips;
