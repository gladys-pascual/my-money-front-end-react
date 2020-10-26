import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../assets/logInAndSignUpForm.scss";

const LogInForm = ({ handleLogIn, logInError }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    handleLogIn(data);
  };

  return (
    <div className="form-wrapper">
      <div className="logo">
        <img src="logo.svg" alt="money me logo" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <section className="log-in">
          <input
            id="username"
            name="username"
            aria-invalid={errors.email ? "true" : "false"}
            ref={register({
              required: "This is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format.",
              },
            })}
            type="email"
            placeholder="Email"
          />
          <div className="error-message-container">
            <p
              className={
                errors.username
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
              role="alert"
            >
              {errors.username && errors.username.message}
            </p>
          </div>

          <input
            id="password"
            name="password"
            aria-invalid={errors.passward ? "true" : "false"}
            ref={register({
              required: "This is required.",
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters.",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <div className="error-message-container">
            <p
              className={
                errors.password
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
              role="alert"
            >
              {errors.password && errors.password.message}
            </p>
          </div>
        </section>
        <button type="submit" className="submit">
          SUBMIT
        </button>

        {logInError && (
          <p className="incorrect-details">
            {" "}
            The email or password you've entered in incorrect.
          </p>
        )}
      </form>
      <p className="register">
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};

export default LogInForm;
