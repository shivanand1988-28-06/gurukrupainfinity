import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || false);
export const userSlice = createSlice({

  name: "user",
  initialState: {
    user: userFromLocalStorage,
    
  },
  

 
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  
  },

});


export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user   ; 


export default userSlice.reducer 
