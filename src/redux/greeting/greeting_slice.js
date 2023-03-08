import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/greeting');
    const resJson = await response.json();
    return resJson;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      const greetings = action.payload;
      return greetings;
    });
  },
});

export default greetingsSlice.reducer;
