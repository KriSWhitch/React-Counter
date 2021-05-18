import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setEmailText,
  setPasswordText,
  setConfirmPasswordText,
} from "../store/AuthorizationRedux/actions";
import AuthorizationRedux from "../components/AuthorizationRedux/index";

class AuthorizationReduxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      email,
      password,
      confirmPassword,
      setEmailText,
      setPasswordText,
      setConfirmPasswordText,
    } = this.props;
    return (
      <AuthorizationRedux
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setEmailText={setEmailText}
        setPasswordText={setPasswordText}
        setConfirmPasswordText={setConfirmPasswordText}
      />
    );
  }
}

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
