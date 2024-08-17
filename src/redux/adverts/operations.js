import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async (params, thunkAPI) => {
  try {
    const response = await api.get('adverts', { params: { page: 1, limit: 4, ...params } });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
