// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     items:[],
//     count: 0
// }
// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addCart: (state,action) => {
//             state.items.push(action.payload);
//             state.count= state.items.length;
//         }
//     }
// })
// export const {addCart} = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    count: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload);
            state.count = state.items.length;
        },
        removeCart: (state, action) => {
            // action.payload should be itemId
            state.items = state.items.filter(item => item.id !== action.payload);
            state.count = state.items.length;
        },
        updateQuantity: (state, action) => {
            // action.payload = { id, quantity }
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        updateSize: (state, action) => {
            // action.payload = { id, size }
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.selectedSize = action.payload.size;
            }
        },
        clearCart: (state) => {
      state.items = [];  
      state.count = 0;   
    },
    }
});

export const { addCart, removeCart, updateQuantity, updateSize, clearCart } = cartSlice.actions;
export default cartSlice.reducer;