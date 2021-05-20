import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { setIn } from "final-form";
import { connect } from "react-redux";
import {
  setEmailText,
  setPasswordText,
  setConfirmPasswordText,
} from "../redux/AuthorizationRedux/actions";
import AuthorizationReduxForm from "../components/AuthorizationReduxForm/index";
import "regenerator-runtime/runtime";

const AuthorizationReduxFormContainer = (props) => {
  const {
    email,
    password,
    confirmPassword,
    setEmailText,
    setPasswordText,
    setConfirmPasswordText,
  } = props;

  const REG_EXP_SIX_CHARACHTERS = /^(.{6,})$/;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        REG_EXP_SIX_CHARACHTERS,
        "The email must be at least 6 characters long!"
      )
      .email("Enter your correct email address!")
      .required("Required!"),
    password: yup
      .string()
      .typeError("The field must be a string!")
      .matches(
        REG_EXP_SIX_CHARACHTERS,
        "The password must be at least 6 characters long!"
      )
      .required("Required!"),
    confirmPassword: yup
      .string()
      .matches(
        REG_EXP_SIX_CHARACHTERS,
        "The password must be at least 6 characters long!"
      )
      .oneOf([yup.ref("password")], "Password mismatch!")
      .required("Required!"),
  });

  const validateFormValues = (schema) => async (values) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const errors = err.inner.reduce(
        (formError, innerError) =>
          setIn(formError, innerError.path, innerError.message),
        {}
      );

      return errors;
    }
  };

  const validate = validateFormValues(validationSchema);

  const handleClick = (event, isValid) => {
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <AuthorizationReduxForm
      validationSchema={validate}
      handleClick={handleClick}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      setEmailText={setEmailText}
      setPasswordText={setPasswordText}
      setConfirmPasswordText={setConfirmPasswordText}
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

AuthorizationReduxFormContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setEmailText: PropTypes.func.isRequired,
  setPasswordText: PropTypes.func.isRequired,
  setConfirmPasswordText: PropTypes.func.isRequired,
};

export default connect(
  putStateToProps,
  putActionsToProps
)(AuthorizationReduxFormContainer);
