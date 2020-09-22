import React, { useState } from "react";
import "./TransactionForm.scss";
import { useForm, Controller } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const TransactionForm = ({ createTransaction, categories }) => {
  const { register, errors, handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const [displayedCategories, setDisplayedCategories] = useState([]);

  const onCategoryTypeChange = (e) => {
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
    // data.amount = amountInNumber;
    const updatedData = {
      ...data,
      amount: amountInNumber,
    };
    createTransaction(updatedData);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Type
          <select
            onChange={onCategoryTypeChange}
            name="type"
            className="type"
            ref={register({
              required: "this is required",
            })}
          >
            <option value="">Please select a type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type && (
            <p className="error-message">{errors.type.message}</p>
          )}
        </label>

        <label>
          Category
          <select
            name="category"
            className="category"
            ref={register({
              required: "this is required",
            })}
          >
            {displayedCategories.length === 0 ? (
              <option value="">Please select a type</option>
            ) : (
              displayedCategories.map((category) => (
                <option value={category.name} key={category.id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
        </label>
      </div>

      <div>
        <label>
          Amount
          <input
            name="amount"
            placeholder="€5"
            type="number"
            ref={register({
              required: "this is required",
              min: {
                value: 0.01,
                message: "Invalid amount.",
              },
            })}
          />
          {errors.amount && (
            <p className="error-message">{errors.amount.message}</p>
          )}
        </label>
        <label>
          Notes
          <input
            type="text"
            name="notes"
            placeholder="Optional"
            ref={register()}
          />
        </label>
        <label>
          Date
          <Controller
            control={control}
            name="date"
            rules={{ required: "this is required" }}
            render={({ onChange, value }) => (
              <DayPickerInput onDayChange={onChange} selected={value} />
            )}
          />
          {errors.date && (
            <p className="error-message">{errors.date.message}</p>
          )}
        </label>
      </div>
      <input type="submit" />
    </form>
  );
};

export default TransactionForm;
