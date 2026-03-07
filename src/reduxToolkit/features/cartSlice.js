import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[],
    count: 0
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state,action) => {
            state.items.push(action.payload);
            state.count= state.items.length;
        }
    }
})
export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;