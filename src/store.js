import { configureStore } from "@reduxjs/toolkit";

import reducer from "../src/reducers/reducer";
export default configureStore({
  reducer,
});
