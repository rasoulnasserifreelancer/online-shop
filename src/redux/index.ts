import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { loginReducer } from "./slices/loginSlice";


export const store = configureStore({
  reducer: { cartReducer, loginReducer},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


store.subscribe(() => {
  const state = store.getState();
  if (state.cartReducer.length) {
    localStorage.setItem("cart", JSON.stringify(state.cartReducer));
  }
  
  if (state.loginReducer.access_token) {
    localStorage.setItem("login", JSON.stringify(state.loginReducer));
  }
})