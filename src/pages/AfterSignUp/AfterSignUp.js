import React from "react";
import { Link } from "react-router-dom";

const AfterSignUp = () => {
  return (
    <section>
      <p>Thank you for signing up to money-me.</p>
      <p>Please check your email to validate your account.</p>
      <p>
        Once validated, you can <Link to="/login">log-in</Link> to your money-me
        account.
      </p>
      <p>Happy budgeting! :)</p>
    </section>
  );
};

export default AfterSignUp;
