import { createSlice } from "@reduxjs/toolkit"


const initialState={
    carts: []
}

const cartSlice = createSlice({
    name:'cartInfo',
    initialState,
    reducers:{
        addCart : (state, action)=>{
            state.carts.push(action.payload);
        },

        clearCart : (state, action)=> {

        }

    }
});

export const {addCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;