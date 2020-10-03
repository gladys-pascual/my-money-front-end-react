import React from "react";
import MyResponsivePieCanvas from "../ResponsivePie/ResponsivePie";
import "./IncomePie.scss";

const IncomePie = ({ incomeData }) => {
  const aggregatedData = incomeData.reduce((result, current) => {
    if (result[current.category]) {
      result[current.category] += current.amount;
    } else {
      result[current.category] = current.amount;
    }
    return result;
  }, {});

  const incomePieData = Object.keys(aggregatedData).map((category) => {
    return {
      label: category,
      id: category,
      value: +aggregatedData[category].toFixed(2),
    };
  });
  return (
    <div className="income-pie-container">
      <h3>Income</h3>
      <MyResponsivePieCanvas data={incomePieData} />
    </div>
  );
};

export default IncomePie;
