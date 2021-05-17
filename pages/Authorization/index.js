import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import styles from "./styles";
import DisplayFormikState from "../../components/DisplayFormikState/index";

const Authorization = (style) => {
  const { classes } = style;
  const REG_EXP = /^(.{6,})$/;
  const validationsShema = yup.object().shape({
    email: yup
      .string()
      .matches(REG_EXP, "The email must be at least 6 characters long!")
      .email("Enter your correct email address!")
      .required("Required!"),
    password: yup
      .string()
      .typeError("The field must be a string!")
      .matches(REG_EXP, "The password must be at least 6 characters long!")
      .required("Required!"),
    confirmPassword: yup
      .string()
      .matches(REG_EXP, "The password must be at least 6 characters long!")
      .oneOf([yup.ref("password")], "Password mismatch!")
      .required("Required!"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnChange
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          actions.resetForm();
        }}
        validationSchema={validationsShema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <div>
              <div className={classes.form}>
                <form className={classes.formContainer} onSubmit={handleSubmit}>
                  <p>
                    <label className={classes.label} htmlFor="email">
                      E-mail:
                    </label>
                    <br />
                    <input
                      className={classes.input}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </p>
                  {touched.email && errors.email && (
                    <p className={classes.error}>{errors.email}</p>
                  )}
                  <p>
                    <label className={classes.label} htmlFor="password">
                      Password:
                    </label>
                    <br />
                    <input
                      className={classes.input}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </p>
                  {touched.password && errors.password && (
                    <p className={classes.error}>{errors.password}</p>
                  )}
                  <p>
                    <label className={classes.label} htmlFor="confirmPassword">
                      Confirm Password:
                    </label>
                    <br />
                    <input
                      className={classes.input}
                      type="password"
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    />
                  </p>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className={classes.error}>{errors.confirmPassword}</p>
                  )}
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    disabled={!isValid && !dirty}
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              </div>
              <DisplayFormikState {...props} />
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default withStyles(styles)(Authorization);
