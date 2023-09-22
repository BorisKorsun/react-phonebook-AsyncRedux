import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsSlice } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

setupListeners(store.dispatch);
