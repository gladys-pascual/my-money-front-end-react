import React from "react";
import "./TransactionItem.scss";
import dayjs from "dayjs";

const TransactionItem = ({ transactionInfo }) => {
  console.log(transactionInfo);

  const date = dayjs(transactionInfo.date).format("DD MMM YYYY");

  return (
    <div className="transaction-item">
      <div className="transaction-item-LHS">
        <h3 className="transaction-category">{transactionInfo.category}</h3>
        <p className="transaction-date"> {date} </p>
        <p className="transaction-notes"> {transactionInfo.notes}</p>
      </div>
      <div className="transaction-item-RHS">
        <p className={transactionInfo.type === "income" ? "income" : "expense"}>
          €{transactionInfo.amount}{" "}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;
