import axios from "axios";

const TransactionService = {
  createTransaction: function (data) {
    return axios.post(
      "https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transaction",
      data
    );
  },

  getTransactions: function () {
    return axios.get(
      "https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transactions"
    );
  },

  deleteTransaction: function (id) {
    return axios.delete(
      `https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transaction/${id}`
    );
  },
};

export default TransactionService;
