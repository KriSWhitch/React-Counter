import React from "react";
import PropTypes, { string } from "prop-types";

const DisplayFormikState = (props) => {
  const { values } = props;

  return (
    <div style={{ margin: "1rem 0" }}>
      <div
        style={{
          padding: ".5rem",
          fontSize: "16px",
        }}
      >
        <strong>e-mail:</strong>
        {JSON.stringify(values.email, null, 2)}
        <br />
        <strong>password:</strong>
        {JSON.stringify(values.password, null, 2)}
        <br />
        <strong>confirm password:</strong>
        {JSON.stringify(values.confirmPassword, null, 2)}
        <br />
      </div>
    </div>
  );
};

DisplayFormikState.propTypes = {
  values: PropTypes.arrayOf(string).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

export default DisplayFormikState;
