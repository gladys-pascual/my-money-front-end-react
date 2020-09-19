import axios from "axios";

const TransactionService = {
  getTransactions: function () {
    return axios.get(
      "https://aw31er01t5.execute-api.eu-west-1.amazonaws.com/dev/transactions"
    );
  },
};

export default TransactionService;
