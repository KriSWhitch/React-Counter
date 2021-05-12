import React from "react";

const DisplayFormikState = (props) => (
  <div style={{ margin: "1rem 0" }}>
    <div
      style={{
        padding: ".5rem",
        fontSize: "16px",
      }}
    >
      <strong>e-mail:</strong>
      {JSON.stringify(props.values.email, null, 2)}
      <br />
      <strong>пароль:</strong>
      {JSON.stringify(props.values.password, null, 2)}
      <br />
      <strong>подтверждение пароля:</strong>
      {JSON.stringify(props.values.confirmPassword, null, 2)}
      <br />
    </div>
  </div>
);

export default DisplayFormikState;
