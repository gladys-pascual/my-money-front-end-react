import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUp.scss";
import { useHistory } from "react-router-dom";
import SignUpService from "../../services/SignUpService";
import "../../assets/logInAndSignUpForm.scss";

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = (data) => {
    SignUpService.signUp(data)
      .then((response) => {
        console.log(response);
        history.push(`/aftersignup`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="sign-up-page">
      <SignUpForm handleSignUp={handleSignUp} />
    </section>
  );
};

export default SignUp;
