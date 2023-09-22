import { fetchAllContacts, addContact, deleteContact } from './operations';
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
    [deleteContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(index, 1)
    }
  },
});
