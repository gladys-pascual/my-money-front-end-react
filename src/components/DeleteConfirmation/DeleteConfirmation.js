import React from "react";
import "./DeleteConfirmation.scss";

const DeleteConfirmation = ({
  handleDeleteTransaction,
  deleteId,
  closeDeleteModal,
}) => {
  return (
    <div className="delete-confirmation">
      <h3> Are you sure?</h3>
      <div className="delete-options">
        <button
          className="delete yes"
          onClick={() => handleDeleteTransaction(deleteId)}
        >
          Yes, pretty sure!
        </button>
        <button className="delete no" onClick={closeDeleteModal}>
          No, don't delete!
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
