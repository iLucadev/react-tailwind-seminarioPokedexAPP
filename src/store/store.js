import { combineReducers, configureStore } from "@reduxjs/toolkit";
import crudData from "../features/crudSlice";
import authData from "../features/authSlice";

const reducer = combineReducers({
  crudData,
  authData,
});

const store = configureStore({
  reducer,
});

export default store;
