import { createSlice } from '@reduxjs/toolkit';

const storedUser=JSON.parse(localStorage.getItem('user'));
const storedToken = localStorage.getItem('accessToken');

const authslice=createSlice({
    name:'auth',
    initialState:{
    user: storedUser || null,
    accessToken: storedToken || null,
    },
    reducers:{
        signup:(state,action)=>{
        state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('accessToken', action.payload.accessToken);
        },
        logout:(state)=>{
    state.user = null;
      state.accessToken = null;
      localStorage.clear();
        }
    }
})

export const {signup,logout}=authslice.actions;

export default authslice.reducer;