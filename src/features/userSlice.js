import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:[]
}
const userSlice = createSlice({
    name : 'userInfo',
    initialState,

    reducers:{
        addOrUpdateUser: (state, action)=>{
            // initialState = state => (initialState.users = state.users)
            state.users.push(action.payload);
        },

        userUpdate:(state, action) =>{

        },

        clearUser:(state, action) =>{

        },
    }
    
});


export const {addOrUpdateUser, userUpdate, clearUser} = userSlice.actions;

// userSlice => reducers
export default userSlice.reducer;
