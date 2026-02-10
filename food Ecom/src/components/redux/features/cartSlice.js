import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, actions) => {
      const existItem = state.find((item) => item.id === actions.payload.id);
      if (existItem) {
        return state.map((item) =>
          item.id === actions.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      } else {
        state.push(actions.payload);
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, actions) => {
      return state.map((item) =>
        item.id === actions.payload ? { ...item, qty: item.qty + 1 } : item,
      );
    },
    DecrementQty: (state, actions) => {
      return state.map((item) =>
        item.id === actions.payload ? { ...item, qty: item.qty - 1 } : item,
      );
    },
  },
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
