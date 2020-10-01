import React, { useState } from "react";
import "./TransactionForm.scss";
import { useForm, Controller } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
// import dayjs from "dayjs";

const TransactionForm = ({
  handleCreateTransaction,
  categories,
  closeTransactionModal,
  transactionInfo,
  setTransactionInfo,
  handleUpdateTransaction,
  closeUpdateModal,
}) => {
  const { register, errors, handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const [displayedCategories, setDisplayedCategories] = useState([]);

  const onCategoryTypeChange = (e) => {
    if (transactionInfo) {
      setTransactionInfo({
        ...transactionInfo,
        type: e.target.value,
      });
    }

    if (e.target.value === "income") {
      setDisplayedCategories(
        categories.filter((category) => category.type === "income")
      );
    } else if (e.target.value === "expense") {
      setDisplayedCategories(
        categories.filter((category) => category.type === "expense")
      );
    } else {
      setDisplayedCategories([]);
    }
  };

  const onSubmit = (data) => {
    const amountInNumber = +data.amount;
    const updatedData = {
      ...data,
      amount: amountInNumber,
    };
    transactionInfo
      ? handleUpdateTransaction({
          ...transactionInfo,
          ...updatedData,
        })
      : handleCreateTransaction(updatedData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="transaction-form-heading">
        {transactionInfo ? (
          <h1>Update Transaction </h1>
        ) : (
          <h1>Add Transaction </h1>
        )}
        <button
          className="remove-transaction"
          onClick={transactionInfo ? closeUpdateModal : closeTransactionModal}
        >
          {" "}
          ✖{" "}
        </button>
      </div>
      <div className="type-category">
        <label>
          <div className="title-and-input">
            <div className="form-title-left">Type</div>
            <select
              onChange={onCategoryTypeChange}
              name="type"
              className="type"
              defaultValue={transactionInfo && transactionInfo.type}
              ref={register({
                required: "this is required",
              })}
            >
              <option value="">Please select a type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="error-message-container">
            <p
              className={
                errors.type
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
            >
              {errors.type && errors.type.message}
            </p>
          </div>
        </label>

        <label>
          <div className="title-and-input">
            <div className="form-title-right">Category</div>
            <select
              name="category"
              className="category"
              defaultValue={transactionInfo && transactionInfo.category}
              ref={register({
                required: "this is required",
              })}
            >
              {!transactionInfo ? (
                displayedCategories.length === 0 ? (
                  <option value="">Please select a type</option>
                ) : (
                  displayedCategories.map((category) => (
                    <option value={category.name} key={category.id}>
                      {category.name}
                    </option>
                  ))
                )
              ) : (
                categories
                  .filter((category) => category.type === transactionInfo.type)
                  .map((category) => (
                    <option value={category.name} key={category.id}>
                      {category.name}
                    </option>
                  ))
              )}
            </select>
          </div>
        </label>
      </div>

      <div className="amount-date">
        <label>
          <div className="title-and-input">
            <div className="form-title-left">Date</div>
            <Controller
              control={control}
              name="date"
              rules={{ required: "this is required" }}
              render={({ onChange, value }) => (
                <DayPickerInput
                  onDayChange={onChange}
                  // value={transactionInfo && dayjs(transactionInfo.date)}
                  selected={value}
                  classNames={{
                    overlay: "daypicker-overlay",
                    overlayWrapper: "daypicker-overlay-wrapper",
                  }}
                />
              )}
            />
          </div>
          <div className="error-message-container">
            <p
              className={
                errors.date
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
            >
              {errors.date && errors.date.message}
            </p>
          </div>
        </label>
        <label>
          <div className="title-and-input">
            <div className="form-title-right">Amount</div>
            <input
              name="amount"
              placeholder="€5"
              type="number"
              defaultValue={transactionInfo && transactionInfo.amount}
              ref={register({
                required: "this is required",
                min: {
                  value: 0.01,
                  message: "Invalid amount.",
                },
              })}
            />
          </div>
          <div className="error-message-container">
            <p
              className={
                errors.amount
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
            >
              {errors.amount && errors.amount.message}
            </p>
          </div>
        </label>
      </div>
      <div className="notes">
        <label>
          <div className="title-and-input">
            <div className="form-title-left">Notes</div>
            <input
              type="text"
              name="notes"
              placeholder="Optional"
              defaultValue={transactionInfo && transactionInfo.notes}
              ref={register()}
            />
          </div>
        </label>
      </div>
      <div className="submit-button">
        {" "}
        <input type="submit" />
      </div>
    </form>
  );
};

export default TransactionForm;
