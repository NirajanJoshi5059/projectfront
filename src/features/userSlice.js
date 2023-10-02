import { createSlice } from "@reduxjs/toolkit";
import { getUser, setUser } from "./localStorage";

const initialState ={
    users: getUser()
}
const userSlice = createSlice({
    name : 'userInfo',
    initialState,

    reducers:{
        addUser: (state, action)=>{
            // initialState = state => (initialState.users = state.users)
            state.users.push(action.payload);
            setUser(state.users);
        },

        updateUser:(state, action) =>{
            state.users = state.users.map((user)=> user.id === action.payload.id ? action.payload : user);
            setUser(state.users);
        },

        removeUser:(state, action) =>{
            state.users.splice(action.payload, 1);
            setUser(state.users);
        },
    }
    
});


export const {addUser, updateUser, removeUser} = userSlice.actions;

// userSlice => reducers
export default userSlice.reducer;
