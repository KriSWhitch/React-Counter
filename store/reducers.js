import { combineReducers } from "redux";
import { authReducer } from "./AuthorizationRedux/reducers";

export default combineReducers({
  auth: authReducer,
});
