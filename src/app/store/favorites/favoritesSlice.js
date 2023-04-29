import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.products.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const idToRemove = action.payload.id;
      state.products = state.products.filter(
        (product) => product.id !== idToRemove
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
