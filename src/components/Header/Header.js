import React from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import "./Header.scss";

const Header = ({ openAddTransactionModal, username }) => {
  const location = useLocation();
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.clear();
    history.push(`/login`);
  };

  return (
    <header>
      <ul>
        <div className="transactions-and-report">
          <div className="logo">
            <Link to="/transactions"> <img src="logo.svg" alt="money me logo" /></Link>
          </div>
          <li>
            {" "}
            <NavLink to="/transactions" activeClassName="selected">
              Transactions
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/report" activeClassName="selected">
              Report
            </NavLink>{" "}
          </li>
        </div>

        <div className="username-and-add-transaction">
          {location.pathname === "/transactions" && (
            <button
              className="add-transaction"
              onClick={() => openAddTransactionModal()}
            >
              {" "}
              + Add transaction{" "}
            </button>
          )}
          <div className="dropdown-wrapper">
            <div className="dropdown">
              <button className="username dropbtn">
                <span>{username}</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
              <div className="dropdown-content">
                <button className="logout" onClick={() => handleLogOut()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
