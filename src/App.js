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
import DeleteConfirmation from "./components/DeleteConfirmation/DeleteConfirmation";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [transactionInfo, setTransactionInfo] = useState({});

  // Transaction modal
  const openTransactionModal = () => {
    setTransactionModalIsOpen(true);
  };

  const closeTransactionModal = () => {
    setTransactionModalIsOpen(false);
  };

  // Delete modal
  const openDeleteModal = (id) => {
    setDeleteModalIsOpen(true);
    setDeleteId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  // Update modal
  const openUpdateModal = (transactionInfo) => {
    setUpdateModalIsOpen(true);
    setTransactionInfo(transactionInfo);
  };

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
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
        closeTransactionModal();
        getTransactions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete transaction
  const handleDeleteTransaction = (id) => {
    TransactionService.deleteTransaction(id)
      .then(() => {
        closeDeleteModal();
        getTransactions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Update Transaction
  const handleUpdateTransaction = (transactionInfo) => {
    TransactionService.createTransaction(transactionInfo)
      .then(() => TransactionService.deleteTransaction(transactionInfo.id))
      .then(() => {
        getTransactions();
        closeUpdateModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header
        transactions={transactions}
        openTransactionModal={openTransactionModal}
      />

      <Switch>
        <Route
          exact
          path="/transactions"
          render={() => (
            <Transactions
              transactions={transactions}
              openDeleteModal={openDeleteModal}
              openUpdateModal={openUpdateModal}
            />
          )}
        />
        <Route
          path="/report"
          render={() => <Report transactions={transactions} />}
        />
      </Switch>
      <Modal
        isOpen={transactionModalIsOpen}
        onRequestClose={closeTransactionModal}
        contentLabel="Transaction Form"
        ariaHideApp={false}
        className="Modal-Transaction-Form"
        overlayClassName="Overlay-Transaction-Form"
      >
        <TransactionForm
          handleCreateTransaction={handleCreateTransaction}
          categories={categories}
          closeTransactionModal={closeTransactionModal}
        />
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
        ariaHideApp={false}
        className="Modal-Delete"
        overlayClassName="Overlay-Delete"
      >
        <DeleteConfirmation
          handleDeleteTransaction={handleDeleteTransaction}
          deleteId={deleteId}
          closeDeleteModal={closeDeleteModal}
        />
      </Modal>
      <Modal
        isOpen={updateModalIsOpen}
        onRequestClose={closeUpdateModal}
        contentLabel="Update Transaction"
        ariaHideApp={false}
        className="Modal-Update"
        overlayClassName="Overlay-Update"
      >
        <TransactionForm
          transactionInfo={transactionInfo}
          setTransactionInfo={setTransactionInfo}
          handleUpdateTransaction={handleUpdateTransaction}
          categories={categories}
          closeUpdateModal={closeUpdateModal}
        />
      </Modal>
    </>
  );
};

export default App;
