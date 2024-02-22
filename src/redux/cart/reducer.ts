import { createSlice } from "@reduxjs/toolkit";

import * as types from "./types";
import * as utils from "./utils";

const initialState: types.CartState = { opened: false, items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartOpened(state) {
      state.opened = !state.opened;
    },
    addCartItem(state, action: types.SetItemAction) {
      state.items = utils.addItem(state.items, action.payload);
    },
    removeCartItem(state, action: types.SetItemAction) {
      state.items = utils.removeItem(state.items, action.payload);
    },
    clearCartItem(state, action: types.SetItemAction) {
      state.items = utils.clearItem(state.items, action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
