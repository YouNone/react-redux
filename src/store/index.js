import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isCounterInvisible: false };
const initialLoginState= {isUserLoggedIn: false};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    logOut(state) {
      state.isUserLoggedIn = false;
    }
  }
});
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state) {
      state.value--;
    },
    counterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  }
});

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    counter: counterSlice.reducer,
  }
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;


export default store;

