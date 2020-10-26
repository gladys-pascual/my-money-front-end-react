import React from "react";
import Header from "../../components/Header/Header";
import TransactionsList from "../../components/TransactionsList/TransactionsList";
import "./Transactions.scss";

const Transactions = ({
  openAddTransactionModal,
  transactions,
  openDeleteModal,
  openUpdateModal,
  username,
}) => {
  const totalMoney = transactions.reduce((total, transaction) => {
    return transaction.type === "expense"
      ? total - transaction.amount
      : total + transaction.amount;
  }, 0);

  return (
    <>
      <Header
        openAddTransactionModal={openAddTransactionModal}
        username={username}
      />
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
