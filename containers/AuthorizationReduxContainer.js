import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setEmailText,
  setPasswordText,
  setConfirmPasswordText,
} from "../redux/AuthorizationRedux/actions";
import AuthorizationRedux from "../components/AuthorizationRedux/index";

const AuthorizationReduxContainer = (props) => {
  const {
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
    <AuthorizationRedux
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      setEmailText={setEmailText}
      setPasswordText={setPasswordText}
      setConfirmPasswordText={setConfirmPasswordText}
      emailValidationHandler={emailValidationHandler}
      passwordValidationHandler={passwordValidationHandler}
      confirmPasswordValidationHandler={confirmPasswordValidationHandler}
      blurHandler={blurHandler}
      emailDirty={emailDirty}
      passwordDirty={passwordDirty}
      confirmPasswordDirty={confirmPasswordDirty}
      emailError={emailError}
      passwordError={passwordError}
      confirmPasswordError={confirmPasswordError}
      handleClick={handleClick}
    />
  );
};

const putStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
});

const putActionsToProps = {
  setEmailText,
  setPasswordText,
  setConfirmPasswordText,
};

export default connect(
  putStateToProps,
  putActionsToProps
)(AuthorizationReduxContainer);
