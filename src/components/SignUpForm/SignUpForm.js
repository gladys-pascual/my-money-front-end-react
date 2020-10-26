import React from "react";
import { useForm } from "react-hook-form";
import "../../assets/logInAndSignUpForm.scss";

const SignUpForm = ({ handleSignUp }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    handleSignUp(data);
  };

  return (
    <div className="form-wrapper">
      <div className="logo">
        <img src="logo.svg" alt="money me logo" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <section className="sign-up">
          <input
            id="nickname"
            name="nickname"
            aria-invalid={errors.nickname ? "true" : "false"}
            ref={register({
              required: "This is required.",
              minLength: 3,
            })}
            type="text"
            placeholder="Username"
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
            id="email"
            name="email"
            aria-invalid={errors.email ? "true" : "false"}
            ref={register({
              required: "this is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            placeholder="Email"
          />
          <div className="error-message-container">
            <p
              className={
                errors.email
                  ? "error-message"
                  : "error-message-hidden error-message"
              }
              role="alert"
            >
              {errors.email && errors.email.message}
            </p>
          </div>

          <input
            id="password"
            name="password"
            aria-invalid={errors.passward ? "true" : "false"}
            ref={register({
              required: "this is required",
              minLength: {
                value: 5,
                message:
                  "Password is too short. Please use at least 5 characters.",
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
      </form>
    </div>
  );
};

export default SignUpForm;
