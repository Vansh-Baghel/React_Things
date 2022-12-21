import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    // this ui is assigned with considering the name of reducer in cart-store.js file.
    reducer : { ui : uiSlice.reducer , cart : cartSlice.reducer }
})

export default store;