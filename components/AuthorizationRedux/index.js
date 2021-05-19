import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
    emailValidationHandler,
    passwordValidationHandler,
    confirmPasswordValidationHandler,
    blurHandler,
    emailDirty,
    passwordDirty,
    confirmPasswordDirty,
    emailError,
    passwordError,
    confirmPasswordError,
    handleClick,
  } = props;

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
              className={classes.buttonLink}
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
