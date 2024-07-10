

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const allPropertiesSlice = createSlice({
    name : "properties" ,
    initialState : {
      properties : []
    } ,
    reducers : {
      addproperties : (state,action) => {
         state.properties.push(action.payload) ;
      }
    }
  }) ;

  export const { addproperties } = allPropertiesSlice.actions ;
  export const selectProperties = (state) => state.allProperties.properties;
  export default allPropertiesSlice.reducer ;