import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.scss";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="transactions-list">
      {transactions.map((transaction) => (
        <TransactionItem transactionInfo={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default TransactionsList;
