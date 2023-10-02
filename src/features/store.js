import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import cartReducer from './cartSlice';


export const store = configureStore({

    reducer:{
        // usersInfo is used when useSelector hook is called 
        'usersInfo' : userReducer,
        'cartsInfo' : cartReducer,
    }
}); 