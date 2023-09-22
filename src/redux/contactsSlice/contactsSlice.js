import { fetchAllContacts } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
});
