export const ACTION_CHANGE_EMAIL = "ACTION_CHANGE_EMAIL";
export const ACTION_CHANGE_PASSWORD = "ACTION_CHANGE_PASSWORD";
export const ACTION_CHANGE_CONFIRM_PASSWORD = "ACTION_CHANGE_CONFIRM_PASSWORD";

export const setEmailText = (newEmail) => ({
  type: ACTION_CHANGE_EMAIL,
  payload: newEmail,
});

export const setPasswordText = (newPassword) => ({
  type: ACTION_CHANGE_PASSWORD,
  payload: newPassword,
});

export const setConfirmPasswordText = (newConfirmPassword) => ({
  type: ACTION_CHANGE_CONFIRM_PASSWORD,
  payload: newConfirmPassword,
});
