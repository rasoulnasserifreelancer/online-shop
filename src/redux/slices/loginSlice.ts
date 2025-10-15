import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type LoginResponse } from "../../types/types";

const initialLogin = localStorage.getItem("login");


let loginInformation: LoginResponse = {
  access_token: "",
  refresh_token: "",
};

loginInformation = initialLogin ? JSON.parse(initialLogin) : loginInformation

let loginSlice = createSlice({
  name: "login",
  initialState: loginInformation,
  reducers: {
    addUser(state, action: PayloadAction<LoginResponse>) {
      console.log("payload is : ", action.payload);
      console.log("type of axtion is :", action.type);
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token
      console.log("state is : ", state);
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const loginAction = loginSlice.actions;
