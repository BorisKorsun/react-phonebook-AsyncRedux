import { fetchAllContacts, addContact } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContacts.rejected]: handleRejected,
    [fetchAllContacts.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.items.push(action.payload);
    },
  },
});
