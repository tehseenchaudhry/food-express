import { configureStore } from "@reduxjs/toolkit";
import  menuSlice  from "../features/menuSlice";
import  cartSlice  from "../features/cartSlice";




export const Store = configureStore({
    reducer: {
        food : menuSlice,
        cart:cartSlice,
    }
})