import axios from "axios";

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("id_token")}`,
  },
});

const TransactionService = {
  createTransaction: function (data) {
    return axios.post(
      "https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transaction",
      data,
      getConfig()
    );
  },

  getTransactions: function () {
    return axios.get(
      "https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transactions",
      getConfig()
    );
  },

  deleteTransaction: function (id) {
    return axios.delete(
      `https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transaction/${id}`,
      getConfig()
    );
  },
};

export default TransactionService;
