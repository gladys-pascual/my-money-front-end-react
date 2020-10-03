import React from "react";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import "./Transactions.scss";

const Transactions = ({ transactions, openDeleteModal, openUpdateModal }) => {
  const totalMoney = transactions.reduce((total, transaction) => {
    return transaction.type === "expense"
      ? total - transaction.amount
      : total + transaction.amount;
  }, 0);

  return (
    <>
      <h3 className="total">Total: € {totalMoney.toFixed(2)} </h3>
      <TransactionsList
        transactions={transactions}
        openDeleteModal={openDeleteModal}
        openUpdateModal={openUpdateModal}
      />
    </>
  );
};

export default Transactions;
