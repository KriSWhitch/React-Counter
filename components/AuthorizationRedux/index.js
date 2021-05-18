import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import DisplayReduxState from "../DisplayReduxState/index";

const AuthorizationRedux = (props) => {
  const {
    classes,
    email,
    password,
    confirmPassword,
    setEmailText,
    setPasswordText,
    setConfirmPasswordText,
  } = props;
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Required!");
  const [passwordError, setPasswordError] = useState("Required!");
  const [confirmPasswordError, setConfirmPasswordError] = useState("Required!");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, confirmPasswordError]);

  const emailValidationHandler = (e) => {
    const REG_EXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const REG_EXP_SIX_CHARACHTERS = /^(.{6,})$/;
    if (e.target.value.length === 0) {
      setEmailError("Required!");
    } else if (
      !REG_EXP_SIX_CHARACHTERS.test(String(e.target.value).toLowerCase())
    ) {
      setEmailError("The email must be at least 6 characters long!");
    } else if (!REG_EXP_EMAIL.test(String(e.target.value).toLowerCase())) {
      setEmailError("Enter your correct email address!");
    } else {
      setEmailError("");
    }
  };

  const passwordValidationHandler = (e) => {
    const REG_EXP_SIX_CHARACHTERS = /^(.{6,})$/;
    if (e.target.value.length === 0) {
      setPasswordError("Required!");
    } else if (
      !REG_EXP_SIX_CHARACHTERS.test(String(e.target.value).toLowerCase())
    ) {
      setPasswordError("The password must be at least 6 characters long!");
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordValidationHandler = (e) => {
    const REG_EXP_SIX_CHARACHTERS = /^(.{6,})$/;
    if (e.target.value.length === 0) {
      setConfirmPasswordError("Required!");
    } else if (
      !REG_EXP_SIX_CHARACHTERS.test(String(e.target.value).toLowerCase())
    ) {
      setConfirmPasswordError(
        "The password must be at least 6 characters long!"
      );
    } else if (e.target.value !== password) {
      setConfirmPasswordError("Password mismatch!");
    } else {
      setConfirmPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleClick = (event) => {
    if (!formValid) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div>
        <div className={classes.form}>
          <form className={classes.formContainer}>
            <p>
              <label className={classes.label} htmlFor="email">
                E-mail:
              </label>
              <br />
              <input
                className={classes.input}
                type="email"
                name="email"
                onBlur={(e) => blurHandler(e)}
                value={email}
                onChange={(event) => {
                  setEmailText(event.target.value);
                  emailValidationHandler(event);
                }}
              />
            </p>
            {emailDirty && emailError && (
              <p className={classes.error}>{emailError}</p>
            )}
            <p>
              <label className={classes.label} htmlFor="password">
                Password:
              </label>
              <br />
              <input
                className={classes.input}
                type="password"
                name="password"
                onBlur={(e) => blurHandler(e)}
                value={password}
                onChange={(event) => {
                  setPasswordText(event.target.value);
                  passwordValidationHandler(event);
                }}
              />
            </p>
            {passwordDirty && passwordError && (
              <p className={classes.error}>{passwordError}</p>
            )}
            <p>
              <label className={classes.label} htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <br />
              <input
                className={classes.input}
                type="password"
                name="confirmPassword"
                onBlur={(e) => blurHandler(e)}
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPasswordText(event.target.value);
                  confirmPasswordValidationHandler(event);
                }}
              />
            </p>
            {confirmPasswordDirty && confirmPasswordError && (
              <p className={classes.error}>{confirmPasswordError}</p>
            )}
            <NavLink
              className={classes["button-link"]}
              to="/login-redux/success"
              onClick={(event) => {
                handleClick(event);
              }}
            >
              Login
            </NavLink>
          </form>
        </div>
        <DisplayReduxState {...props} />
      </div>
    </div>
  );
};

export default withStyles(styles)(AuthorizationRedux);
