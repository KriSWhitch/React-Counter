/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about}>
        <div className={classes.header_cointainer} id="home-container">
          <Button className={(classes.button, classes.button_active)}>
            <Link
              className={(classes.button_link, classes.button_link_active)}
              to="/about"
            >
              About
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link className={classes.button_link} to="/counters">
              Counters
            </Link>
          </Button>
        </div>
        <div className={classes.about_container} id="about-container">
          <h2
            className={classes.about_container_title}
            id="about-container-title"
          >
            About Us
          </h2>
          <p
            className={classes.about_container_subtitle}
            id="about-container-subtitle"
          >
            Tokyo Creative is dedicated to creating content that provides a
            unique insight into all aspects of Japanese culture and daily life.
            We work closely with local governmental organizations and manage
            some of the most popular English speaking social media influencers
            who make Japan-related content.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
