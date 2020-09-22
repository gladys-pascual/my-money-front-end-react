import React, { useState, useEffect } from "react";
// import TransactionForm from "./components/TransactionForm/TransactionForm";
import "./App.scss";
import Transactions from "./pages/Transactions/Transactions";
import Report from "./pages/Report/Report";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import TransactionService from "./services/TransactionService";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import Modal from "react-modal";
import categories from "./categories";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Get transactions
  const getTransactions = () => {
    TransactionService.getTransactions()
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getTransactions(), []);

  //Create transaction
  const handleCreateTransaction = (data) => {
    TransactionService.createTransaction(data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        closeModal();
        getTransactions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header transactions={transactions} openModal={openModal} />
      <Switch>
        <Route
          exact
          path="/transactions"
          render={() => <Transactions transactions={transactions} />}
        />
        <Route path="/report" render={() => <Report />} />
      </Switch>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Transaction Form"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <h1>Add Transaction </h1>
        </div>

        <TransactionForm
          createTransaction={handleCreateTransaction}
          categories={categories}
        />
      </Modal>
    </>
  );
};

export default App;
