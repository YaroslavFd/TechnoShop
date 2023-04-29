import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart/cartSlice';
import favoritesSlice from './favorites/favoritesSlice';

export const store = configureStore({
  reducer: combineReducers({
    favorites: favoritesSlice,
    cart: cartSlice,
  }),
});
