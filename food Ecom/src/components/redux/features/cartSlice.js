import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, actions) => {
      state.push(actions.payload);
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
