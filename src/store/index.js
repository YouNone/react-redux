import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isCounterInvisible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    counterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
  // same thing
  // reducer: {
  //   counter: counterSlice.reducer
  // }
});

export const counterActions = counterSlice.actions;

export default store;

