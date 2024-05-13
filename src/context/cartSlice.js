import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: JSON.parse(localStorage.getItem("carts")) || []
    },
    reducers: {
        addToCart(state, action) {
            let index = state.value.findIndex(el => el?.id === action?.payload?.id)
            if (index < 0) {
                state.value = [...state.value, { ...action.payload, quantity: 1 }]
            }
            localStorage.setItem("carts", JSON.stringify(state.value))
        },
        incrementCartQuantity() { },
        decrementCartQuantity() { },
        removeItemFromCart() { },
        removeAllItemsFromCart() { }
    }
})

export const { addToCart, incrementCartQuantity, decrementCartQuantity, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions

export default cartSlice.reducer