import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthorizationSuccess from "../components/AuthorizationSuccess/index";

const AuthorizationSuccessContainer = (props) => {
  const { email, password, confirmPassword } = props;
  return (
    <AuthorizationSuccess
      email={email}
      password={password}
      confirmPassword={confirmPassword}
    />
  );
};

const putStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
});

export default connect(putStateToProps)(AuthorizationSuccessContainer);
