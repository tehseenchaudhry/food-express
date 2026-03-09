// // import { createSlice } from "@reduxjs/toolkit";


// // const initialState = {
// //     items:[],
// //     count: 0
// // }
// // export const cartSlice = createSlice({
// //     name: "cart",
// //     initialState,
// //     reducers: {
// //         addCart: (state,action) => {
// //             state.items.push(action.payload);
// //             state.count= state.items.length;
// //         }
// //     }
// // })
// // export const {addCart} = cartSlice.actions;
// // export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
//     count: 0
// };

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addCart: (state, action) => {
//             state.items.push(action.payload);
//             state.count = state.items.length;
//         },
//         removeCart: (state, action) => {
//             // action.payload should be itemId
//             state.items = state.items.filter(item => item.id !== action.payload);
//             state.count = state.items.length;
//         },
//         updateQuantity: (state, action) => {
//             // action.payload = { id, quantity }
//             const item = state.items.find(item => item.id === action.payload.id);
//             if (item) {
//                 item.quantity = action.payload.quantity;
//             }
//         },
//         updateSize: (state, action) => {
//             // action.payload = { id, size }
//             const item = state.items.find(item => item.id === action.payload.id);
//             if (item) {
//                 item.selectedSize = action.payload.size;
//             }
//         },
//         clearCart: (state) => {
//       state.items = [];  
//       state.count = 0;   
//     },
//     }
// });

// export const { addCart, removeCart, updateQuantity, updateSize, clearCart } = cartSlice.actions;
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
        // Add to cart - agar item already exist karta hai to quantity increase kare
        addCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // Agar item already cart mein hai to sirf quantity badhao
                existingItem.quantity = (existingItem.quantity || 1) + 1;
            } else {
                // Naya item add karo with quantity = 1
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            
            state.count = state.items.reduce((total, item) => total + (item.quantity || 1), 0);
        },
        
        // Delete single item
        deleteItem: (state, action) => {
            // action.payload should be item id
            state.items = state.items.filter(item => item.id !== action.payload);
            state.count = state.items.reduce((total, item) => total + (item.quantity || 1), 0);
        },
        
        // Increase quantity
        incQty: (state, action) => {
            // action.payload should be item id
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            }
            state.count = state.items.reduce((total, item) => total + (item.quantity || 1), 0);
        },
        
        // Decrease quantity
        decQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            state.count = state.items.reduce((total, item) => total + (item.quantity || 1), 0);
        },
        
        // Clear entire cart
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        }
    }
});

 export const { addCart, clearCart, decQty, incQty, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;