import {
  ACTION_CHANGE_EMAIL,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_CONFIRM_PASSWORD,
} from "./actions";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ACTION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case ACTION_CHANGE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};
