import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice  from './slices/addToCartSlice';

export default configureStore({
  reducer: {
    addcart:addToCartSlice,
  }
});
