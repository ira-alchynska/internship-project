import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "../../redux/auth/authActions.js";
import formValidationLogin from "./ValidationLogin";
import "./styles.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const errors = formValidationLogin({ emailInput, passwordInput });

  const hasErrors = !!Object.values(errors).length;

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const hardcodedCred = {
      email: "email@email.com",
      password: "password123",
    };

    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password
    ) {
      dispatch(setIsAuthenticated(true));

      history("/");
    } else {
      alert("wrong email or password combination");
    }
  };

  return (
    <>
      <div className="login-page">
        <form
          autoComplete="off"
          onSubmit={handleLoginSubmit}
          className="login-form"
        >
          <h2 className="title">Log in</h2>
          <div className="flex">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailInput}
                onChange={handleEmailChange}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
            <div className="form-group">
              <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange}
              />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <button disabled={hasErrors} type="submit" className="btn-login">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
