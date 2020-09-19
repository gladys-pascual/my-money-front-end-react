import React from "react";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

const Transactions = ({ transactions }) => {
  return <TransactionsList transactions={transactions} />;
};

export default Transactions;
