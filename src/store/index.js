import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isCounterInvisible: false };
const initialLoginState= {isloggedIn: false};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  login(state) {
    state.isloggedIn = true;
  },
  logout(state) {
    state.isloggedIn = false;
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
    counter: counterSlice.reducer,
    login: loginSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;


export default store;

