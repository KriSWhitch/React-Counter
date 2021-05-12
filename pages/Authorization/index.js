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
      .matches(REG_EXP, "email должен быть больше 6 символов!")
      .email("Введите корректный email!")
      .required("Обязательно для ввода!"),
    password: yup
      .string()
      .typeError("Должно быть строкой!")
      .matches(REG_EXP, "Пароль должен быть больше 6 символов!")
      .required("Обязательно для ввода!"),
    confirmPassword: yup
      .string()
      .matches(REG_EXP, "Пароль должен быть больше 6 символов!")
      .oneOf([yup.ref("password")], "Пароли не совпадают!")
      .required("Обязательно для ввода!"),
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
                      Почта:
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
                      Пароль:
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
                      Подтверждение пароля:
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
                    Войти
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
