import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthorizationSuccess from "../pages/AuthorizationSuccess/index";

class AuthorizationSuccessContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { email, password, confirmPassword } = this.props;
    return (
      <AuthorizationSuccess
        email={email}
        password={password}
        confirmPassword={confirmPassword}
      />
    );
  }
}

const putStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
});

export default connect(putStateToProps)(AuthorizationSuccessContainer);
