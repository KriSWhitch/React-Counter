import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import DisplayReduxState from "../../components/DisplayReduxState/index";

class AuthorizationSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <DisplayReduxState {...this.props} />
      </div>
    );
  }
}

export default withStyles(styles)(AuthorizationSuccess);
