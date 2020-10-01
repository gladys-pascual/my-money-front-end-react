import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
import "./TransactionsList.scss";

const TransactionsList = ({
  transactions,
  openDeleteModal,
  openUpdateModal,
}) => {
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="transactions-list">
      {sortedTransactions.map((transaction) => (
        <TransactionItem
          transactionInfo={transaction}
          key={transaction.id}
          openDeleteModal={openDeleteModal}
          openUpdateModal={openUpdateModal}
        />
      ))}
    </div>
  );
};

export default TransactionsList;
