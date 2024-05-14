import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment3: (state) => {
      state.value += 3;
    },
    decrement3: (state) => {
      state.value -= 3;
    },
    incrementByAmount: (state, action) => {
      state.value += +action.payload;
    },
    incrementByAmount1: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement,increment3,decrement3, incrementByAmount,incrementByAmount1} = counterSlice.actions;

export default counterSlice.reducer;
