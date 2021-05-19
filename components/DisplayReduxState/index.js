import React from "react";
import PropTypes from "prop-types";

const DisplayFormikState = (props) => {
  const { email, password, confirmPassword } = props;

  return (
    <div style={{ margin: "1rem 0" }}>
      <div
        style={{
          padding: ".5rem",
          fontSize: "16px",
        }}
      >
        <strong>e-mail:</strong>
        {JSON.stringify(email, null, 2)}
        <br />
        <strong>password:</strong>
        {JSON.stringify(password, null, 2)}
        <br />
        <strong>confirm password:</strong>
        {JSON.stringify(confirmPassword, null, 2)}
        <br />
      </div>
    </div>
  );
};

DisplayFormikState.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default DisplayFormikState;
