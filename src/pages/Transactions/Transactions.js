import React from "react";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions, openDeleteModal, openUpdateModal }) => {
  return (
    <TransactionsList
      transactions={transactions}
      openDeleteModal={openDeleteModal}
      openUpdateModal={openUpdateModal}
    />
  );
};

export default Transactions;
