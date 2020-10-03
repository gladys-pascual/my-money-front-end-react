import React from "react";
import ExpensePie from "../../components/ExpensePie/ExpensePie";
import IncomePie from "../../components/IncomePie/IncomePie";
import "./Report.scss";

const Report = ({ transactions }) => {
  const incomeData = transactions.filter(
    (transaction) => transaction.type === "income"
  );

  const expenseData = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalMoney = transactions.reduce((total, transaction) => {
    return transaction.type === "expense"
      ? total - transaction.amount
      : total + transaction.amount;
  }, 0);

  return (
    <div className="report">
      <h3 className="total">Total: € {totalMoney.toFixed(2)} </h3>
      <div className="pies">
        <IncomePie incomeData={incomeData} />
        <ExpensePie expenseData={expenseData} />
      </div>
    </div>
  );
};

export default Report;
