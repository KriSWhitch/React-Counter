import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import DisplayReduxState from "../DisplayReduxState/index";
import "regenerator-runtime/runtime";

const AuthorizationReduxForm = (props) => {
  const {
    classes,
    validationSchema,
    handleClick,
    email,
    password,
    confirmPassword,
    setEmailText,
    setPasswordText,
    setConfirmPasswordText,
  } = props;

  return (
    <div>
      <Form
        initialValues={{
          email,
          password,
          confirmPassword,
        }}
        onSubmit={() => {}}
        validate={validationSchema}
        render={({ handleSubmit, touched, errors, values, valid, dirty }) => (
          <div>
            <div className={classes.form}>
              <form className={classes.formContainer} onSubmit={handleSubmit}>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div>
                      <label className={classes.label}>E-mail:</label>
                      <br />
                      <input
                        {...input}
                        className={classes.input}
                        onChange={(e) => setEmailText(e.target.value)}
                        value={email}
                        type="email"
                      />
                      {meta.touched && meta.error && (
                        <p className={classes.error}>{meta.error}</p>
                      )}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div>
                      <label className={classes.label}>Password:</label>
                      <br />
                      <input
                        {...input}
                        className={classes.input}
                        onChange={(e) => setPasswordText(e.target.value)}
                        value={password}
                        type="password"
                      />
                      {meta.touched && meta.error && (
                        <p className={classes.error}>{meta.error}</p>
                      )}
                    </div>
                  )}
                />
                <Field
                  name="confirmPassword"
                  render={({ input, meta }) => (
                    <div>
                      <label className={classes.label}>Confirm Password:</label>
                      <br />
                      <input
                        {...input}
                        className={classes.input}
                        onChange={(e) => setConfirmPasswordText(e.target.value)}
                        value={confirmPassword}
                        type="password"
                      />
                      {meta.touched && meta.error && (
                        <p className={classes.error}>{meta.error}</p>
                      )}
                    </div>
                  )}
                />
                <NavLink
                  className={classes.buttonLink}
                  to="/login-redux-form/success"
                  onClick={(event) => handleClick(event, valid)}
                >
                  Login
                </NavLink>
              </form>
            </div>
            <DisplayReduxState {...props} />
          </div>
        )}
      />
    </div>
  );
};

AuthorizationReduxForm.propTypes = {
  validationSchema: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setEmailText: PropTypes.func.isRequired,
  setPasswordText: PropTypes.func.isRequired,
  setConfirmPasswordText: PropTypes.func.isRequired,
};

export default withStyles(styles)(AuthorizationReduxForm);
