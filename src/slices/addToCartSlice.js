import { createSlice } from '@reduxjs/toolkit';

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action) => {
      // state.value += 1;
      // console.log(state.value);
      // console.log(action.payload);
              // state.value.push(action.payload);

              // console.log(state.value);  (Cuurent value)
              // console.log(action.payload); (add to cart theke jei data asbe )
              let alldata = state.value.find(
                item => item.title === action.payload.title
              );
              if (alldata) {
                alldata.quantity += 1;
              } else {
                state.value.push({ ...action.payload, quantity: 1 });
              }
      
    },
  },
});

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
