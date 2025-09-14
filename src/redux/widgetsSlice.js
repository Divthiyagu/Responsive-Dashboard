import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWidgetData } from '../api/mockApi';

export const loadWidgets = createAsyncThunk('widgets/load', async () => {
  const response = await fetchWidgetData();
  return response;
});

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: { data: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWidgets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadWidgets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loadWidgets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default widgetsSlice.reducer;
