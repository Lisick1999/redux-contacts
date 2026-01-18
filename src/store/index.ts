import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactsSlice';
import favoritesSlice from './slices/favoritesSlice';
import groupsSlice from './slices/groupsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    favorites: favoritesSlice,
    groups: groupsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
