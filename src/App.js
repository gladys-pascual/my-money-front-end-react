import React, { useState, useEffect } from "react";
// import TransactionForm from "./components/TransactionForm/TransactionForm";
import "./App.scss";
import Transactions from "./pages/Transactions/Transactions";
import Report from "./pages/Report/Report";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import TransactionService from "./services/TransactionService";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  //Get transactions
  useEffect(() => {
    TransactionService.getTransactions()
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Transactions transactions={transactions} />}
        />
        <Route path="/report" render={() => <Report />} />
      </Switch>
    </>
  );
};

export default App;
