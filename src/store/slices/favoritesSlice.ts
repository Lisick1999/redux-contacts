import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_CONTACT } from 'src/__data__';

const initialState: string[] = [
  DATA_CONTACT[0].id,
  DATA_CONTACT[1].id,
  DATA_CONTACT[2].id,
  DATA_CONTACT[3].id,
];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.includes(id)) {
        return state.filter(fav => fav !== id);
      } else {
        state.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
