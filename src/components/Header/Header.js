import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = ({ transactions, openTransactionModal }) => {
  const location = useLocation();

  return (
    <header>
      <ul>
        <div className="transactions-and-report">
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
              onClick={() => openTransactionModal()}
            >
              {" "}
              + Add transaction{" "}
            </button>
          )}
          <div className="dropdown-wrapper">
            <div className="dropdown">
              <button className="username dropbtn">
                <span>gladyskate</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
              <div className="dropdown-content">
                <li>
                  <Link to="/transactions" className="logout">
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
