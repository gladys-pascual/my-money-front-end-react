import React from "react";
import MyResponsivePieCanvas from "../ResponsivePie/ResponsivePie";
import "./ExpensePie.scss";

const ExpensePie = ({ expenseData }) => {
  const aggregatedData = expenseData.reduce((result, current) => {
    if (result[current.category]) {
      result[current.category] += current.amount;
    } else {
      result[current.category] = current.amount;
    }
    return result;
  }, {});

  const expensePieData = Object.keys(aggregatedData).map((category) => {
    return {
      label: category,
      id: category,
      value: +aggregatedData[category].toFixed(2),
    };
  });

  return (
    <div className="expense-pie-container">
      <h3>Expenses breakdown</h3>
      <MyResponsivePieCanvas data={expensePieData} />
    </div>
  );
};

export default ExpensePie;
