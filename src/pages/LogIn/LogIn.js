import React, { useState } from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import AuthService from "../../services/AuthService";
import { useHistory } from "react-router-dom";
import "../../assets/logInAndSignUpForm.scss";

const LogIn = () => {
  const history = useHistory();
  const [logInError, setLogInError] = useState(null);

  const handleLogIn = (data) => {
    AuthService.logIn(data)
      .then((response) => {
        localStorage.setItem("id_token", response.data.id_token);
        history.push(`/transactions`);
      })
      .catch((err) => {
        console.log(err);
        setLogInError(err);
      });
  };

  return (
    <section className="log-in-page">
      <LogInForm handleLogIn={handleLogIn} logInError={logInError} />
    </section>
  );
};

export default LogIn;
