import axios from "axios";
import querystring from "querystring";

const SignUpService = {
  signUp: function (data) {
    return axios.post(
      "https://money-me.eu.auth0.com/dbconnections/signup",
      querystring.stringify({
        client_id: "WaWKDhdk7Ixvl30h95F27Wn0EyaFc6Fn",
        connection: "Username-Password-Authentication",
        ...data,
      })
    );
  },
};

export default SignUpService;
