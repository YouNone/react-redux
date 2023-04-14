import { createSlice } from "@reduxjs/toolkit";

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
export const loginActions = loginSlice.actions;
export default loginSlice.reducer;