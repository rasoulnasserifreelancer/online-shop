import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/types";
const initialProducts = localStorage.getItem("cart");
const initialValue: Product[] = initialProducts ? JSON.parse(initialProducts) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      if (state.find((product) => product.id === action.payload.id)) {
        const index = state.findIndex(
          (product) => product.id === action.payload.id
        );
        state[index].count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },

    delete(state, action: PayloadAction<number>) {
      return state.filter((product) => product.id !== action.payload);
    },

    increase(state, action: PayloadAction<number>) {
      state.map((product) => {
        if (product.id === action.payload) {
          product.count += 1;
        }
        return product;
      });
    },
    decrease(state, action: PayloadAction<number>) {
      return state
        .filter(
          (product) => product.id !== action.payload || product.count !== 1
        )
        .map((product) => {
          if (product.id === action.payload) {
            return { ...product, count: product.count - 1 };
          }
          return product;
        });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
