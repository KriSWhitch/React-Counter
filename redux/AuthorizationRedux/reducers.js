import { handleActions } from "redux-actions";
import {
  setEmailText,
  setPasswordText,
  setConfirmPasswordText,
} from "./actions";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const authReducer = handleActions(
  {
    [setEmailText](state, { payload }) {
      return { ...state, email: payload };
    },
    [setPasswordText](state, { payload }) {
      return { ...state, password: payload };
    },
    [setConfirmPasswordText](state, { payload }) {
      return { ...state, confirmPassword: payload };
    },
  },
  initialState
);
