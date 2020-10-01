import React from "react";
import "./TransactionItem.scss";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({
  transactionInfo,
  openDeleteModal,
  openUpdateModal,
}) => {
  const date = dayjs(transactionInfo.date).format("DD MMM YYYY");
  const amount = transactionInfo.amount;

  return (
    <div className="transaction-item">
      <div className="transaction-item-LHS">
        <div className="transaction-description">
          <h3 className="transaction-category">{transactionInfo.category}</h3>
          <p className="transaction-date"> {date} </p>
          <p className="transaction-notes"> {transactionInfo.notes}</p>
        </div>
      </div>
      <div className="transaction-item-RHS">
        <p className={transactionInfo.type === "income" ? "income" : "expense"}>
          €{amount.toFixed(2)}{" "}
        </p>
        <div className="remove-and-edit-buttons">
          <button
            className="remove-transaction"
            onClick={() => openDeleteModal(transactionInfo.id)}
          >
            {" "}
            ✖{" "}
          </button>
          <button
            className="edit-transaction"
            onClick={() => openUpdateModal(transactionInfo)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
