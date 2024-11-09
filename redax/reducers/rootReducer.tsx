import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slice/slice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
