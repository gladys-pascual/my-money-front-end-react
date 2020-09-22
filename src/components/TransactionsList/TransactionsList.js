import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.scss";

const TransactionsList = ({ transactions }) => {
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="transactions-list">
      {sortedTransactions.map((transaction) => (
        <TransactionItem transactionInfo={transaction} key={transaction.id} />
      ))}
    </div>
  );
};

export default TransactionsList;
