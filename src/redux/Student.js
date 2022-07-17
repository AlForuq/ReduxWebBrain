import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk("getStudent", async (payload) => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

export const studentSlice = createSlice({
  name: "counter",
  initialState: { student: [], status: "" },
  extraReducers: {
    [getStudent.pending]: (state, action) => {
      state.status = "pending";
    },
    [getStudent.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getStudent.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.student = payload;
    },
  },
});

export default studentSlice.reducer;
