import { configureStore } from "@reduxjs/toolkit";
import ValueSlice from "./ValueSlice";

export default configureStore({
  reducer: {
    value: ValueSlice,
  },
});
