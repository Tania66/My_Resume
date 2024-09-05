import { createSlice } from "@reduxjs/toolkit";
import { fetchPostById } from "./PostOperation";

const postSlice = createSlice({
  name: "post",
  initialState: {
    item: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
  reducers: {
    reset: (state) => {},
  },
});

export const { reset } = postSlice.actions;

export const postReducer = postSlice.reducer;
