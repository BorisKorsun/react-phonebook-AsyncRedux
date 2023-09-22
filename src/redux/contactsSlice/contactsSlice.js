import { fetchAllContacts, addContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  console.warn(action);
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [fetchAllContacts.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      console.log(action);
      state.error = null;
      state.isLoading = false;
      state.items.push(action.payload);
    },
  },
});
