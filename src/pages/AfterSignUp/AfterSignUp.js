import React from "react";
import { Link } from "react-router-dom";
import "./AfterSignUp.scss"

const AfterSignUp = () => {
  return (
    <section className="after-sign-up-wrapper">
      <div className="after-sign-up">
        <div className="logo">
          <Link to="/login"><img src="logo.svg" alt="money me logo" /> </Link>
        </div>
        <p>Thank you for signing up to money-me.</p>
        <p>Please check your email to validate your account.</p>
        <p>
          Once validated, you can <Link to="/login">log-in</Link> to your money-me
          account.
        </p>
        <p>Happy budgeting!</p>
    </div>
  </section>
  );
};

export default AfterSignUp;
