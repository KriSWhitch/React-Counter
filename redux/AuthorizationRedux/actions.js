import { createAction } from "redux-actions";

export const ACTION_CHANGE_EMAIL = "ACTION_CHANGE_EMAIL";
export const ACTION_CHANGE_PASSWORD = "ACTION_CHANGE_PASSWORD";
export const ACTION_CHANGE_CONFIRM_PASSWORD = "ACTION_CHANGE_CONFIRM_PASSWORD";

export const setEmailText = createAction(ACTION_CHANGE_EMAIL);
export const setPasswordText = createAction(ACTION_CHANGE_PASSWORD);
export const setConfirmPasswordText = createAction(
  ACTION_CHANGE_CONFIRM_PASSWORD
);
