import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const About = (props) => {
  const { classes } = props;
  return (
    <div className={classes.about}>
      <div className={classes.aboutСontainer}>
        <h2 className={classes.aboutСontainerTitle}>About Us</h2>
        <p className={classes.aboutСontainerSubtitle}>
          Tokyo Creative is dedicated to creating content that provides a unique
          insight into all aspects of Japanese culture and daily life. We work
          closely with local governmental organizations and manage some of the
          most popular English speaking social media influencers who make
          Japan-related content.
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
