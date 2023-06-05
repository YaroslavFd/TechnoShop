import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    isCoupon: false,
  },
  reducers: {
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((item) => id !== item.id);
    },
    increase: (state, action) => {
      const id = action.payload;
      state.products = state.products.map((product) => {
        if (product.id === id) {
          const newCount = product.count + 1 > 100 ? 100 : ++product.count;
          return {
            ...product,
            count: newCount,
            totalPrice: newCount * product.price,
          };
        }
        return product;
      });
    },
    decrease: (state, action) => {
      const id = action.payload;
      state.products = state.products.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            totalPrice: newCount * product.price,
          };
        }
        return product;
      });
    },
    // changeValue: (state, action) => {
    //   const { id, value } = action.payload;
    //   state.products = state.products.map((product) => {
    //     if (product.id === id) {
    //       const newValue = value !== 0 ? (value > 100 ? 100 : value) : 1;
    //       return {
    //         ...product,
    //         count: newValue,
    //         totalPrice: newValue * product.price,
    //       };
    //     }
    //     return product;
    //   });
    // },

    setIsCoupon: (state, action) => {
      state.isCoupon = action.payload;
    },
    addProduct: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.products[index].count += 1;
        state.products[index].totalPrice =
          state.products[index].count * state.products[index].price;
      } else {
        state.products.push(product);
      }
    },

    addManyProducts: (state, action) => {
      const { product, quantity } = action.payload;

      const index = state.products.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.products[index].count += quantity;
        state.products[index].totalPrice =
          state.products[index].count * state.products[index].price;
      } else {
        const newProduct = {
          ...product,
          count: quantity,
          totalPrice: quantity * product.price,
        };
        state.products.push(newProduct);
      }
    },
  },
});

export const {
  deleteProduct,
  increase,
  decrease,
  changeValue,
  setIsCoupon,
  addProduct,
  addManyProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
