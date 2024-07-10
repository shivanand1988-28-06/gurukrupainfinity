import { combineReducers } from "redux";
import userreducer from "../slices/userSlice";
import  propertiesreducer  from "../slices/propertiesSlice";




export default combineReducers({
  user: userreducer ,
  allProperties : propertiesreducer
});
