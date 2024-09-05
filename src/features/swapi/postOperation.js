import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostById = createAsyncThunk(
  "post/fetchPostById",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
