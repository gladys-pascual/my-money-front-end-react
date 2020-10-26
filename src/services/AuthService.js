import axios from "axios";
import querystring from "querystring";

const AuthService = {
  logIn: function (data) {
    return axios.post(
      "https://money-me.eu.auth0.com/oauth/token",
      querystring.stringify({
        client_id: "WaWKDhdk7Ixvl30h95F27Wn0EyaFc6Fn",
        grant_type: "password",
        scope: "openid",
        ...data,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },
};

export default AuthService;
