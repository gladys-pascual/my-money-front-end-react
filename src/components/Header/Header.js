import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <ul>
        <div className="transactions-and-report">
          <li>
            {" "}
            <NavLink exact to="/" activeClassName="selected">
              Transactions
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/report" activeClassName="selected">
              Report
            </NavLink>{" "}
          </li>
        </div>

        <div className="total">
          <li>Total: € 40</li>
        </div>

        <div className="username-and-add-transaction">
          <div className="dropdown-wrapper">
            <div className="dropdown">
              <button className="username dropbtn">
                <span>gladyskate</span>
                <span className="material-icons">arrow_drop_down</span>
              </button>
              <div className="dropdown-content">
                <li>
                  <Link exact="true" to="/" className="logout">
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </div>

          <button className="add-transaction"> + Add transaction </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
