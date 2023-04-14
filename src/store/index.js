import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    counter: counterReducer,
  }
});

export default store;