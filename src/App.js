import React, { useState, useEffect } from "react";
import "./App.scss";
import Transactions from "./pages/Transactions/Transactions";
import Report from "./pages/Report/Report";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import TransactionService from "./services/TransactionService";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import Modal from "react-modal";
import categories from "./categories";
import DeleteConfirmation from "./components/DeleteConfirmation/DeleteConfirmation";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AfterSignUp from "./pages/AfterSignUp/AfterSignUp";

const parseJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionModalIsOpen, setTransactionModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [transactionInfo, setTransactionInfo] = useState({});
  const history = useHistory();
  const [parsedJwt, setParsedJwt] = useState({});
  const location = useLocation();

  // Transaction modal
  const openAddTransactionModal = () => {
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

  useEffect(() => {
    if (location.pathname === "/transactions") {
      setTransactions([]);
      getTransactions();
    }
  }, [location.pathname]);

  //Create transaction
  const handleCreateTransaction = (data) => {
    TransactionService.createTransaction(data)
      .then(() => {
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

  //Login
  useEffect(() => {
    const jwt = localStorage.getItem("id_token");

    if (jwt) {
      const parsedJwt = parseJwt(jwt);
      console.log(parsedJwt);
      const expDate = new Date(parsedJwt.exp * 1000);
      setParsedJwt(parsedJwt);

      if (expDate < new Date()) {
        history.push(`/login`);
        return; //stops if this condition is true, it won't execute the line further down
      }
    }
  }, [history, location.pathname]);

  return (
    <>
      <Switch>
        <Route path="/login" render={() => <LogIn />} />
      </Switch>
      <Switch>
        <Route path="/signup" render={() => <SignUp />} />
      </Switch>
      <Switch>
        <Route path="/aftersignup" render={() => <AfterSignUp />} />
      </Switch>
      <Switch>
        <Route
          path="/transactions"
          render={() => (
            <Transactions
              openAddTransactionModal={openAddTransactionModal}
              transactions={transactions}
              openDeleteModal={openDeleteModal}
              openUpdateModal={openUpdateModal}
              username={parsedJwt.nickname}
            />
          )}
        />
        <Route
          path="/report"
          render={() => (
            <Report transactions={transactions} username={parsedJwt.nickname} />
          )}
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
