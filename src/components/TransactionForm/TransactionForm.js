import React from "react";
import "./TransactionForm.scss";

const TransactionForm = () => {
  return (
    <form className="form">
      <div>
        <label>
          Type
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <label>
          Category
          <select>
            <option value="food-out">Food Out</option>
            <option value="rent">Rent</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Date
          <input type="text" name="name" />
        </label>
        <label>
          Amount
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Notes
          <input type="text" name="name" />
        </label>
      </div>
    </form>
  );
};

export default TransactionForm;
